<?php
/**
 * API_admin_create_battery.php
 * POST (session + X-CSRF-Token required):
 * {
 *   "battery_index": 42,
 *   "battery_name": "H-10-23-9999",
 *   "description": "...",                 // optional
 *   "battery_instructions": "...",         // optional
 *   "language": "EN",                      // optional, defaults EN
 *   "run_audio_test": true,                // optional, defaults false
 *   "footer": "...",                       // optional
 *   "short_name": "...",                   // optional
 *   "header_buttons": ["Quit","Stop"],     // optional
 *   "languages_to_show": ["EN","FR"],      // optional
 *   "redirect_url": "...",                 // optional
 *   "tasks": [
 *     { "task_type_id": 5, "parameter_id": 12, "instruction_set_id": 8, "icon_name": "Immediate" },
 *     ...
 *   ]
 * }
 *
 * Writes one `batteries` row plus one `battery_tasks` row per entry in
 * `tasks`, in the array's order (sort_order = 1-based position). Both
 * inserts happen in one transaction -- either the whole battery is created
 * or none of it is, so a mistake partway through never leaves an orphaned
 * battery header with no tasks.
 */

require_once __DIR__ . '/admin_common.php';
require_once __DIR__ . '/battery_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();

$batteryIndex = $body['battery_index'] ?? null;
if (!is_positive_int_like($batteryIndex)) {
    respond_error(400, '"battery_index" must be a positive integer.');
}
$batteryIndex = (int) $batteryIndex;
$header = clean_battery_body($body);
$tasks = $body['tasks'];

$pdo = get_admin_pdo();
$pdo->beginTransaction();

try {
    $stmt = $pdo->prepare('
        INSERT INTO batteries
            (battery_index, battery_name, description, battery_instructions, language,
             run_audio_test, footer, short_name, header_buttons, languages_to_show, redirect_url)
        VALUES
            (:battery_index, :battery_name, :description, :battery_instructions, :language,
             :run_audio_test, :footer, :short_name, :header_buttons, :languages_to_show, :redirect_url)
    ');
    $stmt->execute([':battery_index' => $batteryIndex] + $header);
    $batteryId = (int) $pdo->lastInsertId();

    insert_battery_tasks($pdo, $batteryId, $tasks);

    $pdo->commit();
} catch (RuntimeException $e) {
    $pdo->rollBack();
    respond_error(400, $e->getMessage());
} catch (PDOException $e) {
    $pdo->rollBack();
    if ($e->getCode() === '23000') {
        respond_error(409, "Battery index {$batteryIndex} already exists.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'battery_id'    => $batteryId,
    'battery_index' => $batteryIndex,
    'task_count'    => count($tasks),
]);
