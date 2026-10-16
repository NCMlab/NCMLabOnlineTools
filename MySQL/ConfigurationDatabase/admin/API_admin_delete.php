<?php
/**
 * API_admin_delete.php
 * POST (session + X-CSRF-Token required):
 *   { "type": "parameter",   "id": 12 }
 *   { "type": "instruction", "id": 8 }   (id = instruction_set_id; deletes every translation)
 *   { "type": "translation", "id": 8, "language": "FR" }   (one language of instruction set 8)
 *   { "type": "battery",     "id": 3 }   (id = batteries.battery_id)
 *   { "type": "session",     "id": 2 }   (id = sessions.session_id; deletes every language)
 *   { "type": "session_language", "id": 2, "language": "KR" }
 *
 * Deletes are deliberately narrow, to protect batteries that are already in
 * use:
 *
 *  - Parameter/instruction sets: refused (409) while any battery_tasks row
 *    references them, active battery or not. The schema's foreign keys are
 *    ON DELETE SET NULL, so without this check a delete would silently strip
 *    the configuration out of existing batteries instead of failing.
 *  - One translation: same rule as its set (a battery running in that
 *    language would lose its text), and refused for the set's last
 *    translation -- delete the set instead.
 *  - Sessions: allowed. Nothing in this database refers to a session -- JATOS study
 *    components name it -- so the site asks for confirmation instead. One language of a
 *    session can be removed unless it is the last one.
 *  - Batteries: refused (409) unless the battery has been deactivated first
 *    (API_admin_set_battery_active.php). A battery_index may be baked into
 *    JATOS study links or session-chooser configs, so retiring one is a
 *    two-step action. Its battery_tasks rows are removed by ON DELETE CASCADE.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$type = $body['type'] ?? '';
$id = $body['id'] ?? null;

if (!in_array($type, ['parameter', 'instruction', 'translation', 'battery', 'session', 'session_language'], true)) {
    respond_error(400, '"type" must be "parameter", "instruction", "translation", "battery", "session", or "session_language".');
}
if (!(is_int($id) && $id > 0) && !(is_string($id) && ctype_digit($id))) {
    respond_error(400, '"id" must be a positive integer.');
}
$id = (int) $id;

$pdo = get_admin_pdo();

if ($type === 'battery') {
    $stmt = $pdo->prepare('SELECT battery_index, active FROM batteries WHERE battery_id = :id');
    $stmt->execute([':id' => $id]);
    $battery = $stmt->fetch();
    if (!$battery) {
        respond_error(404, "No battery with id {$id}.");
    }
    if ($battery['active']) {
        respond_error(409, "Battery index {$battery['battery_index']} is still active. Deactivate it before deleting.");
    }
    $pdo->prepare('DELETE FROM batteries WHERE battery_id = :id')->execute([':id' => $id]);
    echo json_encode(['deleted' => 'battery', 'id' => $id]);
    exit;
}

if ($type === 'session' || $type === 'session_language') {
    $stmt = $pdo->prepare('SELECT language FROM session_languages WHERE session_id = :id');
    $stmt->execute([':id' => $id]);
    $languages = $stmt->fetchAll(PDO::FETCH_COLUMN);
    $stmt = $pdo->prepare('SELECT session_name FROM sessions WHERE session_id = :id');
    $stmt->execute([':id' => $id]);
    if (!$stmt->fetch()) {
        respond_error(404, "No session with id {$id}.");
    }
    if ($type === 'session') {
        $pdo->prepare('DELETE FROM sessions WHERE session_id = :id')->execute([':id' => $id]);
        echo json_encode(['deleted' => 'session', 'id' => $id]);
        exit;
    }
    $language = strtoupper(trim($body['language'] ?? ''));
    if (!in_array($language, $languages, true)) {
        respond_error(404, "Session {$id} has no \"{$language}\" version.");
    }
    if (count($languages) === 1) {
        respond_error(409, "{$language} is this session's only language. Delete the whole session instead.");
    }
    $pdo->prepare('DELETE FROM session_languages WHERE session_id = :id AND language = :lang')
        ->execute([':id' => $id, ':lang' => $language]);
    echo json_encode(['deleted' => 'session_language', 'id' => $id, 'language' => $language]);
    exit;
}

[$table, $idColumn, $label] = $type === 'parameter'
    ? ['task_parameters', 'parameter_id', 'parameter set']
    : ['instruction_sets', 'instruction_set_id', 'instruction set'];

$stmt = $pdo->prepare("SELECT 1 FROM $table WHERE $idColumn = :id");
$stmt->execute([':id' => $id]);
if (!$stmt->fetch()) {
    respond_error(404, "No {$label} with id {$id}.");
}

$stmt = $pdo->prepare("
    SELECT DISTINCT b.battery_index
    FROM battery_tasks bt
    JOIN batteries b ON b.battery_id = bt.battery_id
    WHERE bt.$idColumn = :id
    ORDER BY b.battery_index
");
$stmt->execute([':id' => $id]);
$usedBy = $stmt->fetchAll(PDO::FETCH_COLUMN);
if ($usedBy) {
    $what = $type === 'translation' ? 'This language cannot be removed: its instruction set' : "This {$label}";
    respond_error(409, "{$what} is used by battery index " . implode(', ', $usedBy)
        . '. Remove it from those batteries (or delete them) first.');
}

if ($type === 'translation') {
    $language = strtoupper(trim($body['language'] ?? ''));
    $stmt = $pdo->prepare('SELECT language FROM instruction_translations WHERE instruction_set_id = :id');
    $stmt->execute([':id' => $id]);
    $languages = $stmt->fetchAll(PDO::FETCH_COLUMN);
    if (!in_array($language, $languages, true)) {
        respond_error(404, "Instruction set {$id} has no \"{$language}\" translation.");
    }
    if (count($languages) === 1) {
        respond_error(409, "{$language} is this set's only language. Delete the whole set instead.");
    }
    $pdo->prepare('DELETE FROM instruction_translations WHERE instruction_set_id = :id AND language = :lang')
        ->execute([':id' => $id, ':lang' => $language]);
    echo json_encode(['deleted' => 'translation', 'id' => $id, 'language' => $language]);
    exit;
}

$pdo->prepare("DELETE FROM $table WHERE $idColumn = :id")->execute([':id' => $id]);
echo json_encode(['deleted' => $type, 'id' => $id]);
