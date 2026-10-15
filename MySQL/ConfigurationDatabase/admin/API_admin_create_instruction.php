<?php
/**
 * API_admin_create_instruction.php
 * POST (session + X-CSRF-Token required). Creates a NEW instruction set with
 * one or more translations:
 * {
 *   "task_type_id": 25,             // or "task_name": "Word Recall"
 *   "instruction_name": "Default",  // no language prefix -- the language is per translation
 *   "translations": {
 *     "EN": { ...arbitrary object, becomes instructions_json... },
 *     "FR": { ... }
 *   }
 * }
 * The older single-language form, "language": "EN" + "instructions": {...},
 * is still accepted and creates a set with that one translation.
 *
 * Mirrors API_admin_create_parameter.php -- see that file for the shared
 * reasoning (no silent overwrite, task_type resolution, validation). To add a
 * language to an existing set, use API_admin_add_translation.php.
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
$translations = $body['translations'] ?? null;
if ($translations === null && isset($body['instructions'])) {
    $translations = [strtoupper(trim($body['language'] ?? 'EN')) => $body['instructions']];
}

if ($instructionName === '') {
    respond_error(400, '"instruction_name" is required.');
}
if (!preg_match('/^[A-Za-z0-9_]+$/', $instructionName)) {
    respond_error(400, '"instruction_name" may only contain letters, numbers, and underscores.');
}
if (!is_array($translations) || $translations === [] || array_is_list($translations)) {
    respond_error(400, '"translations" must be an object of {"EN": {...}, ...} with at least one language.');
}
$clean = [];
foreach ($translations as $language => $instructions) {
    $language = strtoupper(trim((string) $language));
    if (!preg_match('/^[A-Z]{2}$/', $language)) {
        respond_error(400, "Language \"{$language}\" must be a 2-letter code, e.g. \"EN\".");
    }
    if (!is_array($instructions) || $instructions === []) {
        respond_error(400, "The {$language} instructions must be a non-empty JSON object.");
    }
    $clean[$language] = $instructions;
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

try {
    $pdo->beginTransaction();
    $stmt = $pdo->prepare('
        INSERT INTO instruction_sets (task_type_id, instruction_name)
        VALUES (:task_type_id, :name)
    ');
    $stmt->execute([':task_type_id' => $taskTypeId, ':name' => $instructionName]);
    $setId = (int) $pdo->lastInsertId();

    $stmt = $pdo->prepare('
        INSERT INTO instruction_translations (instruction_set_id, language, instructions_json)
        VALUES (:set_id, :lang, :json)
    ');
    foreach ($clean as $language => $instructions) {
        $stmt->execute([
            ':set_id' => $setId,
            ':lang'   => $language,
            ':json'   => json_encode($instructions, JSON_UNESCAPED_UNICODE),
        ]);
    }
    $pdo->commit();
} catch (PDOException $e) {
    $pdo->rollBack();
    if ($e->getCode() === '23000') {
        respond_error(409, "An instruction set named \"{$instructionName}\" already exists for this task type.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'instruction_set_id' => $setId,
    'task_type_id'       => $taskTypeId,
    'instruction_name'   => $instructionName,
    'languages'          => array_keys($clean),
]);
