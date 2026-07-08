<?php
/**
 * API_admin_create_parameter.php
 * POST (session + X-CSRF-Token required):
 * {
 *   "task_type_id": 25,             // or "task_name": "Word Recall"
 *   "parameter_name": "RAVLT_Spoken_New",
 *   "language": "EN",
 *   "parameters": { ...arbitrary object, becomes parameters_json... }
 * }
 *
 * Inserts one row into task_parameters. Does not overwrite an existing
 * (task_type_id, parameter_name) pair -- returns 409 instead, since this
 * table has no "update" endpoint yet and silently overwriting a named
 * parameter set that other batteries already reference would be a
 * dangerous default.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();

$taskTypeId = $body['task_type_id'] ?? null;
$taskName = trim($body['task_name'] ?? '');
$parameterName = trim($body['parameter_name'] ?? '');
$language = strtoupper(trim($body['language'] ?? 'EN'));
$parameters = $body['parameters'] ?? null;

if ($parameterName === '') {
    respond_error(400, '"parameter_name" is required.');
}
if (!preg_match('/^[A-Za-z0-9_]+$/', $parameterName)) {
    respond_error(400, '"parameter_name" may only contain letters, numbers, and underscores.');
}
if (!preg_match('/^[A-Za-z]{2}$/', $language)) {
    respond_error(400, '"language" must be a 2-letter code, e.g. "EN".');
}
if (!is_array($parameters) || $parameters === []) {
    respond_error(400, '"parameters" must be a non-empty JSON object.');
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

$json = json_encode($parameters, JSON_UNESCAPED_UNICODE);

try {
    $stmt = $pdo->prepare('
        INSERT INTO task_parameters (task_type_id, parameter_name, language, parameters_json)
        VALUES (:task_type_id, :name, :lang, :json)
    ');
    $stmt->execute([
        ':task_type_id' => $taskTypeId,
        ':name'         => $parameterName,
        ':lang'         => $language,
        ':json'         => $json,
    ]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        respond_error(409, "A parameter set named \"{$parameterName}\" already exists for this task type.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'parameter_id'   => (int) $pdo->lastInsertId(),
    'task_type_id'   => $taskTypeId,
    'parameter_name' => $parameterName,
    'language'       => $language,
]);
