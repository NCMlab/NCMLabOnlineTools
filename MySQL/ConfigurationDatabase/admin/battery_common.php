<?php
/**
 * battery_common.php
 * Validation and writes shared by API_admin_create_battery.php and API_admin_update_battery.php.
 * The body format is described in API_admin_create_battery.php.
 */

/** True if $v is an int, or a string containing only digits (e.g. from JSON that arrived as text). */
function is_positive_int_like($v): bool {
    if (is_int($v)) {
        return $v > 0;
    }
    return is_string($v) && $v !== '' && ctype_digit($v) && (int) $v > 0;
}

/** Checks the header fields and task list; returns the header columns, or calls respond_error(400). */
function clean_battery_body(array $body): array {
    $batteryName = trim($body['battery_name'] ?? '');
    $tasks = $body['tasks'] ?? null;

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

    return [
        ':battery_name'          => $batteryName,
        ':description'           => $body['description'] ?? null,
        ':battery_instructions'  => $body['battery_instructions'] ?? null,
        ':language'              => $language,
        ':run_audio_test'        => !empty($body['run_audio_test']) ? 1 : 0,
        ':footer'                => $body['footer'] ?? null,
        ':short_name'            => $body['short_name'] ?? null,
        ':header_buttons'        => isset($body['header_buttons']) ? json_encode($body['header_buttons']) : null,
        ':languages_to_show'     => isset($body['languages_to_show']) ? json_encode($body['languages_to_show']) : null,
        ':redirect_url'          => $body['redirect_url'] ?? null,
    ];
}

/**
 * Writes the battery's task list in array order (sort_order = 1-based position). Throws
 * RuntimeException for a task that doesn't fit its task type; the caller rolls back.
 */
function insert_battery_tasks(PDO $pdo, int $batteryId, array $tasks): void {
    $taskTypeCheck = $pdo->prepare('SELECT 1 FROM task_types WHERE task_type_id = :id LIMIT 1');
    $paramCheck = $pdo->prepare('SELECT 1 FROM task_parameters WHERE parameter_id = :id AND task_type_id = :tid LIMIT 1');
    $instrCheck = $pdo->prepare('SELECT 1 FROM instruction_sets WHERE instruction_set_id = :id AND task_type_id = :tid LIMIT 1');
    $insertTask = $pdo->prepare('
        INSERT INTO battery_tasks (battery_id, task_type_id, sort_order, parameter_id, instruction_set_id, icon_name)
        VALUES (:battery_id, :task_type_id, :sort_order, :parameter_id, :instruction_set_id, :icon_name)
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

        $instructionSetId = isset($task['instruction_set_id']) ? (int) $task['instruction_set_id'] : null;
        if ($instructionSetId !== null) {
            $instrCheck->execute([':id' => $instructionSetId, ':tid' => $taskTypeId]);
            if (!$instrCheck->fetch()) {
                throw new RuntimeException("tasks[{$i}]: instruction_set_id {$instructionSetId} does not belong to task_type_id {$taskTypeId}.");
            }
        }

        $insertTask->execute([
            ':battery_id'         => $batteryId,
            ':task_type_id'       => $taskTypeId,
            ':sort_order'         => $i + 1,
            ':parameter_id'       => $parameterId,
            ':instruction_set_id' => $instructionSetId,
            ':icon_name'          => $task['icon_name'] ?? null,
        ]);
    }
}
