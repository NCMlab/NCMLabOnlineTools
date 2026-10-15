<?php
/**
 * API_admin_add_translation.php
 * POST (session + X-CSRF-Token required). Adds one language to an EXISTING
 * instruction set:
 * {
 *   "instruction_set_id": 12,
 *   "language": "FR",
 *   "instructions": { ...arbitrary object, becomes instructions_json... }
 * }
 *
 * This is the one change allowed on a set that batteries already use: it
 * adds a language without touching the existing ones, so a battery that ran
 * in EN yesterday still gets exactly the same EN text. Changing an existing
 * translation is still copy-on-edit (save the set under a new name with
 * API_admin_create_instruction.php). Refused (409) if the language exists.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();

$setId = $body['instruction_set_id'] ?? null;
$language = strtoupper(trim($body['language'] ?? ''));
$instructions = $body['instructions'] ?? null;

if (!(is_int($setId) && $setId > 0) && !(is_string($setId) && ctype_digit($setId))) {
    respond_error(400, '"instruction_set_id" must be a positive integer.');
}
$setId = (int) $setId;
if (!preg_match('/^[A-Z]{2}$/', $language)) {
    respond_error(400, '"language" must be a 2-letter code, e.g. "FR".');
}
if (!is_array($instructions) || $instructions === []) {
    respond_error(400, '"instructions" must be a non-empty JSON object.');
}

$pdo = get_admin_pdo();

$stmt = $pdo->prepare('SELECT instruction_name FROM instruction_sets WHERE instruction_set_id = :id');
$stmt->execute([':id' => $setId]);
$set = $stmt->fetch();
if (!$set) {
    respond_error(404, "No instruction set with id {$setId}.");
}

try {
    $stmt = $pdo->prepare('
        INSERT INTO instruction_translations (instruction_set_id, language, instructions_json)
        VALUES (:set_id, :lang, :json)
    ');
    $stmt->execute([
        ':set_id' => $setId,
        ':lang'   => $language,
        ':json'   => json_encode($instructions, JSON_UNESCAPED_UNICODE),
    ]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        respond_error(409, "\"{$set['instruction_name']}\" already has a {$language} translation.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'instruction_set_id' => $setId,
    'instruction_name'   => $set['instruction_name'],
    'language'           => $language,
]);
