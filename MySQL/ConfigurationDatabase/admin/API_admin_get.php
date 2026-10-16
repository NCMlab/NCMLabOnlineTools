<?php
/**
 * API_admin_get.php
 * GET (session required, no CSRF token -- read only):
 *   ?type=parameter&id=12
 *   ?type=instruction&id=8      (id = instruction_sets.instruction_set_id)
 *   ?type=battery&id=3          (id = batteries.battery_id, not battery_index)
 *   ?type=session&id=2          (id = sessions.session_id)
 *
 * Returns one full record by primary key, including its decoded JSON, so the
 * admin UI can pre-fill an editor. Looking up by id (rather than by name, as
 * API_task_config.php does) is unambiguous: set names repeat across task
 * types, and the UI already has the id from API_list_config.php.
 *
 * An instruction set comes back with all of its translations:
 *   "translations": [{"language": "EN", "created_at": ..., "instructions": {...}}, ...]
 * EN first, then the other languages alphabetically.
 *
 * Copy-on-edit: nothing here is ever edited in place. The UI loads a record
 * with this endpoint, lets the user change it, and saves the result as a NEW
 * record via API_admin_create_*.php. The original stays exactly as it was,
 * so data already collected with it remains tied to the configuration that
 * produced it.
 *
 * Parameter/instruction responses include `used_by`: the batteries whose
 * tasks reference this set.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respond_error(405, 'Use GET.');
}
require_admin_login();

$type = $_GET['type'] ?? '';
$id = $_GET['id'] ?? '';
if (!in_array($type, ['parameter', 'instruction', 'battery', 'session'], true)) {
    respond_error(400, 'Parameter "type" must be "parameter", "instruction", "battery", or "session".');
}
if (!ctype_digit((string) $id)) {
    respond_error(400, 'Parameter "id" (integer) is required.');
}
$id = (int) $id;

$pdo = get_admin_pdo();

/** Batteries with at least one task pointing at the given parameter/instruction id. */
function batteries_using(PDO $pdo, string $column, int $id): array {
    $stmt = $pdo->prepare("
        SELECT DISTINCT b.battery_id, b.battery_index, b.battery_name, b.active
        FROM battery_tasks bt
        JOIN batteries b ON b.battery_id = bt.battery_id
        WHERE bt.$column = :id
        ORDER BY b.battery_index
    ");
    $stmt->execute([':id' => $id]);
    return $stmt->fetchAll();
}

if ($type === 'parameter') {
    $stmt = $pdo->prepare('
        SELECT p.parameter_id, p.task_type_id, tt.task_name, p.parameter_name, p.language,
               p.parameters_json, p.created_at
        FROM task_parameters p
        JOIN task_types tt ON tt.task_type_id = p.task_type_id
        WHERE p.parameter_id = :id
    ');
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch();
    if (!$row) {
        respond_error(404, "No parameter set with id {$id}.");
    }
    $row['parameters'] = json_decode($row['parameters_json'], true);
    unset($row['parameters_json']);
    $row['used_by'] = batteries_using($pdo, 'parameter_id', $id);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($type === 'instruction') {
    $stmt = $pdo->prepare('
        SELECT s.instruction_set_id, s.task_type_id, tt.task_name, s.instruction_name, s.created_at
        FROM instruction_sets s
        JOIN task_types tt ON tt.task_type_id = s.task_type_id
        WHERE s.instruction_set_id = :id
    ');
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch();
    if (!$row) {
        respond_error(404, "No instruction set with id {$id}.");
    }
    $stmt = $pdo->prepare("
        SELECT language, created_at, instructions_json
        FROM instruction_translations
        WHERE instruction_set_id = :id
        ORDER BY language <> 'EN', language
    ");
    $stmt->execute([':id' => $id]);
    $row['translations'] = array_map(fn($t) => [
        'language'     => $t['language'],
        'created_at'   => $t['created_at'],
        'instructions' => json_decode($t['instructions_json'], true),
    ], $stmt->fetchAll());
    $row['used_by'] = batteries_using($pdo, 'instruction_set_id', $id);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($type === 'session') {
    $stmt = $pdo->prepare('SELECT session_id, session_name, created_at FROM sessions WHERE session_id = :id');
    $stmt->execute([':id' => $id]);
    $session = $stmt->fetch();
    if (!$session) {
        respond_error(404, "No session with id {$id}.");
    }
    // Every language with its buttons, EN first.
    $stmt = $pdo->prepare("
        SELECT session_language_id, language, title, chooser_index, run_name_check, created_at
        FROM session_languages WHERE session_id = :id
        ORDER BY language <> 'EN', language
    ");
    $stmt->execute([':id' => $id]);
    $buttons = $pdo->prepare('
        SELECT name, battery_index, button_row, bit_index, phase, test, button_usage_type
        FROM session_buttons WHERE session_language_id = :lid ORDER BY sort_order
    ');
    $toInt = fn($v) => $v === null ? null : (int) $v;
    $session['languages'] = [];
    foreach ($stmt->fetchAll() as $l) {
        $buttons->execute([':lid' => $l['session_language_id']]);
        $session['languages'][] = [
            'language'       => $l['language'],
            'title'          => $l['title'],
            'chooser_index'  => $toInt($l['chooser_index']),
            'run_name_check' => $l['run_name_check'] === null ? null : (bool) $l['run_name_check'],
            'created_at'     => $l['created_at'],
            'buttons'        => array_map(fn($b) => [
                'name'              => $b['name'],
                'battery_index'     => (int) $b['battery_index'],
                'button_row'        => $toInt($b['button_row']),
                'bit_index'         => $toInt($b['bit_index']),
                'phase'             => $b['phase'],
                'test'              => $b['test'],
                'button_usage_type' => $b['button_usage_type'],
            ], $buttons->fetchAll()),
        ];
    }
    echo json_encode($session, JSON_UNESCAPED_UNICODE);
    exit;
}

// battery
$stmt = $pdo->prepare('
    SELECT battery_id, battery_index, battery_name, description, battery_instructions, language,
           run_audio_test, footer, short_name, header_buttons, languages_to_show, redirect_url,
           active, created_at
    FROM batteries
    WHERE battery_id = :id
');
$stmt->execute([':id' => $id]);
$battery = $stmt->fetch();
if (!$battery) {
    respond_error(404, "No battery with id {$id}.");
}
$battery['run_audio_test'] = (bool) $battery['run_audio_test'];
$battery['active'] = (bool) $battery['active'];
$battery['header_buttons'] = $battery['header_buttons'] === null ? null : json_decode($battery['header_buttons'], true);
$battery['languages_to_show'] = $battery['languages_to_show'] === null ? null : json_decode($battery['languages_to_show'], true);

$stmt = $pdo->prepare("
    SELECT bt.sort_order, bt.task_type_id, tt.task_name, tt.icon_file,
           bt.parameter_id, tp.parameter_name,
           bt.instruction_set_id, ins.instruction_name,
           (SELECT GROUP_CONCAT(it.language ORDER BY it.language <> 'EN', it.language)
            FROM instruction_translations it WHERE it.instruction_set_id = bt.instruction_set_id) AS instruction_languages,
           bt.icon_name
    FROM battery_tasks bt
    JOIN task_types tt ON tt.task_type_id = bt.task_type_id
    LEFT JOIN task_parameters tp ON tp.parameter_id = bt.parameter_id
    LEFT JOIN instruction_sets ins ON ins.instruction_set_id = bt.instruction_set_id
    WHERE bt.battery_id = :id
    ORDER BY bt.sort_order
");
$stmt->execute([':id' => $id]);
$battery['tasks'] = array_map(function ($t) {
    $t['instruction_languages'] = $t['instruction_languages'] === null ? [] : explode(',', $t['instruction_languages']);
    return $t;
}, $stmt->fetchAll());

echo json_encode($battery, JSON_UNESCAPED_UNICODE);
