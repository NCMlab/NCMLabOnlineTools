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
 *     { "task_type_id": 5, "parameter_id": 12, "instruction_id": 8, "icon_name": "Immediate" },
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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

/** True if $v is an int, or a string containing only digits (e.g. from JSON that arrived as text). */
function is_positive_int_like($v): bool {
    if (is_int($v)) {
        return $v > 0;
    }
    return is_string($v) && $v !== '' && ctype_digit($v) && (int) $v > 0;
}

$body = read_json_body();

$batteryIndex = $body['battery_index'] ?? null;
$batteryName = trim($body['battery_name'] ?? '');
$tasks = $body['tasks'] ?? null;

if (!is_positive_int_like($batteryIndex)) {
    respond_error(400, '"battery_index" must be a positive integer.');
}
$batteryIndex = (int) $batteryIndex;

if ($batteryName === '') {
    respond_error(400, '"battery_name" is required.');
}
if (!is_array($tasks) || count($tasks) === 0) {
    respond_error(400, '"tasks" must be a non-empty array.');
}

foreach ($tasks as $i => $task) {
    if (!is_array($task) || !is_positive_int_like($task['task_type_id'] ?? null)) {
        respond_error(400, "tasks[{$i}] is missing a valid \"task_type_id\".");
    }
}

$language = strtoupper(trim($body['language'] ?? 'EN'));
if (!preg_match('/^[A-Za-z]{2}$/', $language)) {
    respond_error(400, '"language" must be a 2-letter code, e.g. "EN".');
}

$headerButtons = isset($body['header_buttons']) ? json_encode($body['header_buttons']) : null;
$languagesToShow = isset($body['languages_to_show']) ? json_encode($body['languages_to_show']) : null;

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
    $stmt->execute([
        ':battery_index'         => $batteryIndex,
        ':battery_name'          => $batteryName,
        ':description'           => $body['description'] ?? null,
        ':battery_instructions'  => $body['battery_instructions'] ?? null,
        ':language'              => $language,
        ':run_audio_test'        => !empty($body['run_audio_test']) ? 1 : 0,
        ':footer'                => $body['footer'] ?? null,
        ':short_name'            => $body['short_name'] ?? null,
        ':header_buttons'        => $headerButtons,
        ':languages_to_show'     => $languagesToShow,
        ':redirect_url'          => $body['redirect_url'] ?? null,
    ]);
    $batteryId = (int) $pdo->lastInsertId();

    $taskTypeCheck = $pdo->prepare('SELECT 1 FROM task_types WHERE task_type_id = :id LIMIT 1');
    $paramCheck = $pdo->prepare('SELECT 1 FROM task_parameters WHERE parameter_id = :id AND task_type_id = :tid LIMIT 1');
    $instrCheck = $pdo->prepare('SELECT 1 FROM task_instructions WHERE instruction_id = :id AND task_type_id = :tid LIMIT 1');
    $insertTask = $pdo->prepare('
        INSERT INTO battery_tasks (battery_id, task_type_id, sort_order, parameter_id, instruction_id, icon_name)
        VALUES (:battery_id, :task_type_id, :sort_order, :parameter_id, :instruction_id, :icon_name)
    ');

    foreach (array_values($tasks) as $i => $task) {
        $taskTypeId = (int) $task['task_type_id'];
        $taskTypeCheck->execute([':id' => $taskTypeId]);
        if (!$taskTypeCheck->fetch()) {
            throw new RuntimeException("tasks[{$i}]: no task type with id {$taskTypeId}.");
        }

        $parameterId = isset($task['parameter_id']) ? (int) $task['parameter_id'] : null;
        if ($parameterId !== null) {
            $paramCheck->execute([':id' => $parameterId, ':tid' => $taskTypeId]);
            if (!$paramCheck->fetch()) {
                throw new RuntimeException("tasks[{$i}]: parameter_id {$parameterId} does not belong to task_type_id {$taskTypeId}.");
            }
        }

        $instructionId = isset($task['instruction_id']) ? (int) $task['instruction_id'] : null;
        if ($instructionId !== null) {
            $instrCheck->execute([':id' => $instructionId, ':tid' => $taskTypeId]);
            if (!$instrCheck->fetch()) {
                throw new RuntimeException("tasks[{$i}]: instruction_id {$instructionId} does not belong to task_type_id {$taskTypeId}.");
            }
        }

        $insertTask->execute([
            ':battery_id'     => $batteryId,
            ':task_type_id'   => $taskTypeId,
            ':sort_order'     => $i + 1,
            ':parameter_id'   => $parameterId,
            ':instruction_id' => $instructionId,
            ':icon_name'      => $task['icon_name'] ?? null,
        ]);
    }

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
