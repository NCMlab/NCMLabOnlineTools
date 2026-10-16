<?php
/**
 * API_admin_update_battery.php
 * POST (session + X-CSRF-Token required). Changes an EXISTING battery in place:
 * { "battery_id": 3, ...the same fields as API_admin_create_battery.php... }
 *
 * The header is overwritten and the task list is replaced with `tasks`, in one transaction.
 * battery_index is not changed (it is how JATOS links and sessions find the battery); a
 * "battery_index" in the body is ignored. Unlike "Edit as copy", this changes what every
 * JATOS link and session button using this index will run from now on (Jason, 2026-10-15).
 */

require_once __DIR__ . '/admin_common.php';
require_once __DIR__ . '/battery_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$batteryId = $body['battery_id'] ?? null;
if (!is_positive_int_like($batteryId)) {
    respond_error(400, '"battery_id" must be a positive integer.');
}
$batteryId = (int) $batteryId;
$header = clean_battery_body($body);
$tasks = $body['tasks'];

$pdo = get_admin_pdo();
$stmt = $pdo->prepare('SELECT battery_index FROM batteries WHERE battery_id = :id');
$stmt->execute([':id' => $batteryId]);
$battery = $stmt->fetch();
if (!$battery) {
    respond_error(404, "No battery with id {$batteryId}.");
}

$pdo->beginTransaction();
try {
    $pdo->prepare('
        UPDATE batteries SET
            battery_name = :battery_name, description = :description,
            battery_instructions = :battery_instructions, language = :language,
            run_audio_test = :run_audio_test, footer = :footer, short_name = :short_name,
            header_buttons = :header_buttons, languages_to_show = :languages_to_show,
            redirect_url = :redirect_url
        WHERE battery_id = :battery_id
    ')->execute([':battery_id' => $batteryId] + $header);

    $pdo->prepare('DELETE FROM battery_tasks WHERE battery_id = :id')->execute([':id' => $batteryId]);
    insert_battery_tasks($pdo, $batteryId, $tasks);

    $pdo->commit();
} catch (RuntimeException $e) {
    $pdo->rollBack();
    respond_error(400, $e->getMessage());
} catch (PDOException $e) {
    $pdo->rollBack();
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'battery_id'    => $batteryId,
    'battery_index' => (int) $battery['battery_index'],
    'task_count'    => count($tasks),
]);
