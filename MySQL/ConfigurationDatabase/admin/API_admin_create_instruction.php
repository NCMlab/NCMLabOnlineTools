<?php
/**
 * API_admin_create_instruction.php
 * POST (session + X-CSRF-Token required):
 * {
 *   "task_type_id": 25,             // or "task_name": "Word Recall"
 *   "instruction_name": "Default",
 *   "language": "EN",
 *   "instructions": { ...arbitrary object, becomes instructions_json... }
 * }
 *
 * Mirrors API_admin_create_parameter.php -- see that file for the shared
 * reasoning (no silent overwrite, task_type resolution, validation).
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();

$taskTypeId = $body['task_type_id'] ?? null;
$taskName = trim($body['task_name'] ?? '');
$instructionName = trim($body['instruction_name'] ?? '');
$language = strtoupper(trim($body['language'] ?? 'EN'));
$instructions = $body['instructions'] ?? null;

if ($instructionName === '') {
    respond_error(400, '"instruction_name" is required.');
}
if (!preg_match('/^[A-Za-z0-9_]+$/', $instructionName)) {
    respond_error(400, '"instruction_name" may only contain letters, numbers, and underscores.');
}
if (!preg_match('/^[A-Za-z]{2}$/', $language)) {
    respond_error(400, '"language" must be a 2-letter code, e.g. "EN".');
}
if (!is_array($instructions) || $instructions === []) {
    respond_error(400, '"instructions" must be a non-empty JSON object.');
}
if ($taskTypeId === null && $taskName === '') {
    respond_error(400, 'Either "task_type_id" or "task_name" is required.');
}

$pdo = get_admin_pdo();

if ($taskTypeId === null) {
    $stmt = $pdo->prepare('SELECT task_type_id FROM task_types WHERE task_name = :name LIMIT 1');
    $stmt->execute([':name' => $taskName]);
    $row = $stmt->fetch();
    if (!$row) {
        respond_error(404, "No task type named \"{$taskName}\".");
    }
    $taskTypeId = (int) $row['task_type_id'];
} else {
    $taskTypeId = (int) $taskTypeId;
    $stmt = $pdo->prepare('SELECT 1 FROM task_types WHERE task_type_id = :id LIMIT 1');
    $stmt->execute([':id' => $taskTypeId]);
    if (!$stmt->fetch()) {
        respond_error(404, "No task type with id {$taskTypeId}.");
    }
}

$json = json_encode($instructions, JSON_UNESCAPED_UNICODE);

try {
    $stmt = $pdo->prepare('
        INSERT INTO task_instructions (task_type_id, instruction_name, language, instructions_json)
        VALUES (:task_type_id, :name, :lang, :json)
    ');
    $stmt->execute([
        ':task_type_id' => $taskTypeId,
        ':name'         => $instructionName,
        ':lang'         => $language,
        ':json'         => $json,
    ]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        respond_error(409, "An instruction set named \"{$instructionName}\" already exists for this task type and language.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'instruction_id'   => (int) $pdo->lastInsertId(),
    'task_type_id'     => $taskTypeId,
    'instruction_name' => $instructionName,
    'language'         => $language,
]);
