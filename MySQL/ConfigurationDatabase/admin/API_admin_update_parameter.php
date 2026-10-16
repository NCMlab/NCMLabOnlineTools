<?php
/**
 * API_admin_update_parameter.php
 * POST (session + X-CSRF-Token required). Changes an EXISTING parameter set in place:
 * { "parameter_id": 12, "parameters": { ...the whole new parameter object... } }
 *
 * The name, task type and language stay the same. Unlike "Edit as copy", every battery that
 * uses this set runs the new values from now on (Jason, 2026-10-15); the response lists them.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$parameterId = $body['parameter_id'] ?? null;
$parameters = $body['parameters'] ?? null;

if (!(is_int($parameterId) && $parameterId > 0) && !(is_string($parameterId) && ctype_digit($parameterId))) {
    respond_error(400, '"parameter_id" must be a positive integer.');
}
$parameterId = (int) $parameterId;
if (!is_array($parameters) || $parameters === [] || array_is_list($parameters)) {
    respond_error(400, '"parameters" must be a non-empty JSON object.');
}

$pdo = get_admin_pdo();
$stmt = $pdo->prepare('SELECT parameter_name FROM task_parameters WHERE parameter_id = :id');
$stmt->execute([':id' => $parameterId]);
$row = $stmt->fetch();
if (!$row) {
    respond_error(404, "No parameter set with id {$parameterId}.");
}

$pdo->prepare('UPDATE task_parameters SET parameters_json = :json WHERE parameter_id = :id')
    ->execute([':json' => json_encode($parameters, JSON_UNESCAPED_UNICODE), ':id' => $parameterId]);

$stmt = $pdo->prepare('
    SELECT DISTINCT b.battery_index FROM battery_tasks bt
    JOIN batteries b ON b.battery_id = bt.battery_id
    WHERE bt.parameter_id = :id ORDER BY b.battery_index
');
$stmt->execute([':id' => $parameterId]);

echo json_encode([
    'parameter_id'   => $parameterId,
    'parameter_name' => $row['parameter_name'],
    'used_by'        => array_map('intval', $stmt->fetchAll(PDO::FETCH_COLUMN)),
]);
