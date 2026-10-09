<?php
/**
 * API_admin_set_battery_active.php
 * POST (session + X-CSRF-Token required):
 *   { "battery_id": 3, "active": false }
 *
 * Flips batteries.active. This is the only in-place change the admin API
 * makes to an existing battery -- it doesn't alter what the battery contains,
 * only whether API_battery.php will serve it (that endpoint and the
 * v_battery_tasks view both filter on active = 1).
 *
 * Used for copy-on-edit ("save the edited copy under a new index, then retire
 * the original") and as the required first step before deleting a battery.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$id = $body['battery_id'] ?? null;
$active = $body['active'] ?? null;

if (!(is_int($id) && $id > 0) && !(is_string($id) && ctype_digit($id))) {
    respond_error(400, '"battery_id" must be a positive integer.');
}
if (!is_bool($active)) {
    respond_error(400, '"active" must be true or false.');
}
$id = (int) $id;

$pdo = get_admin_pdo();
$stmt = $pdo->prepare('UPDATE batteries SET active = :active WHERE battery_id = :id');
$stmt->execute([':active' => $active ? 1 : 0, ':id' => $id]);

// rowCount() is 0 both for "no such battery" and "already in that state", so check which.
if ($stmt->rowCount() === 0) {
    $check = $pdo->prepare('SELECT 1 FROM batteries WHERE battery_id = :id');
    $check->execute([':id' => $id]);
    if (!$check->fetch()) {
        respond_error(404, "No battery with id {$id}.");
    }
}

echo json_encode(['battery_id' => $id, 'active' => $active]);
