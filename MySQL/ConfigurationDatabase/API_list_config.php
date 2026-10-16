<?php
/**
 * API_list_config.php
 * REST endpoint: lists what exists, rather than fetching one named thing
 * (that's what API_task_config.php is for). Needed by any UI that lets a
 * user browse/pick from existing task types or parameter/instruction sets
 * (e.g. NCMBatteryWebsite's battery builder), not just load one already-known
 * config by name.
 *
 * Public and read-only, same as API_battery.php/API_task_config.php -- this
 * is not sensitive data, so it does not require the admin/ login.
 *
 * Usage:
 *   GET ?resource=task_types
 *     -> [{task_type_id, task_name, html_file, icon_file, parameter_schema}, ...]
 *        parameter_schema is {reviewed, schema, uiSchema} (see schemas/) or null
 *   GET ?resource=parameters[&task_type_id=25]
 *     -> [{parameter_id, task_type_id, task_name, parameter_name, language, created_at, used_by}, ...]
 *   GET ?resource=instructions[&task_type_id=25]
 *     -> [{instruction_set_id, task_type_id, task_name, instruction_name, languages, created_at, used_by}, ...]
 *        languages is the set's translations, e.g. ["EN","FR"], EN first
 *   GET ?resource=batteries
 *     -> [{battery_id, battery_index, battery_name, description, language, active, created_at, task_count}, ...]
 *   GET ?resource=sessions
 *     -> [{session_id, session_name, languages, button_count, battery_indexes, created_at}, ...]
 *        languages EN first; button_count and battery_indexes are for the first language
 *
 * task_type_id is optional for parameters/instructions -- omit it to list
 * every task type's sets at once. used_by is the number of battery_tasks
 * rows (across all batteries, active or not) that reference the set; the
 * admin UI uses it to warn before deleting and to show what a set is for.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Restrict to your JATOS/admin domains in production

require_once __DIR__ . '/db_config.php';

function respond_error(int $code, string $message): void {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

$resource = $_GET['resource'] ?? '';
if (!in_array($resource, ['task_types', 'parameters', 'instructions', 'batteries', 'sessions'], true)) {
    respond_error(400, 'Parameter "resource" must be "task_types", "parameters", "instructions", "batteries", or "sessions".');
}

try {
    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    respond_error(500, 'Database connection failed.');
}

if ($resource === 'task_types') {
    $stmt = $pdo->query('
        SELECT task_type_id, task_name, html_file, icon_file, parameter_schema
        FROM task_types
        ORDER BY task_name
    ');
    $rows = $stmt->fetchAll();
    foreach ($rows as &$row) {
        $row['parameter_schema'] = $row['parameter_schema'] === null ? null : json_decode($row['parameter_schema'], true);
    }
    unset($row);
    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($resource === 'batteries') {
    $stmt = $pdo->query('
        SELECT b.battery_id, b.battery_index, b.battery_name, b.description, b.language,
               b.active, b.created_at, COUNT(bt.battery_task_id) AS task_count
        FROM batteries b
        LEFT JOIN battery_tasks bt ON bt.battery_id = b.battery_id
        GROUP BY b.battery_id
        ORDER BY b.battery_index
    ');
    echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
    exit;
}

if ($resource === 'sessions') {
    $stmt = $pdo->query("
        SELECT s.session_id, s.session_name, s.created_at,
               GROUP_CONCAT(sl.language ORDER BY sl.language <> 'EN', sl.language) AS languages
        FROM sessions s
        LEFT JOIN session_languages sl ON sl.session_id = s.session_id
        GROUP BY s.session_id
        ORDER BY s.session_name
    ");
    $rows = $stmt->fetchAll();
    $buttons = $pdo->prepare('
        SELECT COUNT(*) AS n, GROUP_CONCAT(DISTINCT b.battery_index ORDER BY b.battery_index) AS batteries
        FROM session_buttons b
        JOIN session_languages sl ON sl.session_language_id = b.session_language_id
        WHERE sl.session_id = :id AND sl.language = :lang
    ');
    foreach ($rows as &$row) {
        $row['languages'] = $row['languages'] === null ? [] : explode(',', $row['languages']);
        $buttons->execute([':id' => $row['session_id'], ':lang' => $row['languages'][0] ?? '']);
        $b = $buttons->fetch();
        $row['button_count'] = (int) $b['n'];
        $row['battery_indexes'] = $b['batteries'] === null ? [] : array_map('intval', explode(',', $b['batteries']));
    }
    unset($row);
    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
    exit;
}

// task_type_id is optional: present -> one task type's sets, absent -> all of them.
$taskTypeId = $_GET['task_type_id'] ?? null;
if ($taskTypeId !== null && !ctype_digit((string) $taskTypeId)) {
    respond_error(400, 'Parameter "task_type_id" must be an integer.');
}
$where = $taskTypeId === null ? '' : 'WHERE x.task_type_id = :id';
$args = $taskTypeId === null ? [] : [':id' => (int) $taskTypeId];

if ($resource === 'parameters') {
    $stmt = $pdo->prepare("
        SELECT x.parameter_id, x.task_type_id, tt.task_name, x.parameter_name, x.language, x.created_at,
               (SELECT COUNT(*) FROM battery_tasks bt WHERE bt.parameter_id = x.parameter_id) AS used_by
        FROM task_parameters x
        JOIN task_types tt ON tt.task_type_id = x.task_type_id
        $where
        ORDER BY tt.task_name, x.parameter_name
    ");
} else { // instructions
    $stmt = $pdo->prepare("
        SELECT x.instruction_set_id, x.task_type_id, tt.task_name, x.instruction_name,
               (SELECT GROUP_CONCAT(it.language ORDER BY it.language <> 'EN', it.language)
                FROM instruction_translations it WHERE it.instruction_set_id = x.instruction_set_id) AS languages,
               x.created_at,
               (SELECT COUNT(*) FROM battery_tasks bt WHERE bt.instruction_set_id = x.instruction_set_id) AS used_by
        FROM instruction_sets x
        JOIN task_types tt ON tt.task_type_id = x.task_type_id
        $where
        ORDER BY tt.task_name, x.instruction_name
    ");
}
$stmt->execute($args);
$rows = $stmt->fetchAll();
if ($resource === 'instructions') {
    foreach ($rows as &$row) {
        $row['languages'] = $row['languages'] === null ? [] : explode(',', $row['languages']);
    }
    unset($row);
}
echo json_encode($rows, JSON_UNESCAPED_UNICODE);
