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
 *     -> [{task_type_id, task_name, html_file, icon_file}, ...]
 *   GET ?resource=parameters&task_type_id=25
 *     -> [{parameter_id, parameter_name, language}, ...]
 *   GET ?resource=instructions&task_type_id=25
 *     -> [{instruction_id, instruction_name, language}, ...]
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
if (!in_array($resource, ['task_types', 'parameters', 'instructions'], true)) {
    respond_error(400, 'Parameter "resource" must be "task_types", "parameters", or "instructions".');
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
        SELECT task_type_id, task_name, html_file, icon_file
        FROM task_types
        ORDER BY task_name
    ');
    echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
    exit;
}

$taskTypeId = $_GET['task_type_id'] ?? null;
if (!ctype_digit((string) $taskTypeId)) {
    respond_error(400, 'Parameter "task_type_id" (integer) is required for this resource.');
}
$taskTypeId = (int) $taskTypeId;

if ($resource === 'parameters') {
    $stmt = $pdo->prepare('
        SELECT parameter_id, parameter_name, language
        FROM task_parameters
        WHERE task_type_id = :id
        ORDER BY parameter_name
    ');
} else { // instructions
    $stmt = $pdo->prepare('
        SELECT instruction_id, instruction_name, language
        FROM task_instructions
        WHERE task_type_id = :id
        ORDER BY instruction_name
    ');
}
$stmt->execute([':id' => $taskTypeId]);
echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
