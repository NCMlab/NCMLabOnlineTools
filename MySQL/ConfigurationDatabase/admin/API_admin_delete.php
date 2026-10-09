<?php
/**
 * API_admin_delete.php
 * POST (session + X-CSRF-Token required):
 *   { "type": "parameter",   "id": 12 }
 *   { "type": "instruction", "id": 8 }
 *   { "type": "battery",     "id": 3 }   (id = batteries.battery_id)
 *
 * Deletes are deliberately narrow, to protect batteries that are already in
 * use:
 *
 *  - Parameter/instruction sets: refused (409) while any battery_tasks row
 *    references them, active battery or not. The schema's foreign keys are
 *    ON DELETE SET NULL, so without this check a delete would silently strip
 *    the configuration out of existing batteries instead of failing.
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

if (!in_array($type, ['parameter', 'instruction', 'battery'], true)) {
    respond_error(400, '"type" must be "parameter", "instruction", or "battery".');
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

[$table, $idColumn, $label] = $type === 'parameter'
    ? ['task_parameters', 'parameter_id', 'parameter set']
    : ['task_instructions', 'instruction_id', 'instruction set'];

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
    respond_error(409, "This {$label} is used by battery index " . implode(', ', $usedBy)
        . '. Remove it from those batteries (or delete them) first.');
}

$pdo->prepare("DELETE FROM $table WHERE $idColumn = :id")->execute([':id' => $id]);
echo json_encode(['deleted' => $type, 'id' => $id]);
