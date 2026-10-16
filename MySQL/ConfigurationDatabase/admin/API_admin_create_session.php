<?php
/**
 * API_admin_create_session.php
 * POST (session + X-CSRF-Token required). Creates a NEW session with one or more languages:
 * {
 *   "session_name": "COMM_100",     // letters, numbers, underscores; the JATOS component
 *                                   // parameter that picks this session (no language prefix)
 *   "languages": { "EN": { "title": ..., "buttons": [...] }, "FR": {...} }
 * }
 * See session_common.php for one language's fields. Copy-on-edit, as for batteries and
 * parameter/instruction sets: an existing session is never changed, so "edit" in the site
 * saves a copy under a new name. 409 if the name exists.
 */

require_once __DIR__ . '/admin_common.php';
require_once __DIR__ . '/session_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$sessionName = trim($body['session_name'] ?? '');
$languages = $body['languages'] ?? null;

if (!preg_match('/^[A-Za-z0-9_]+$/', $sessionName)) {
    respond_error(400, '"session_name" is required and may only contain letters, numbers, and underscores.');
}
if (!is_array($languages) || $languages === [] || array_is_list($languages)) {
    respond_error(400, '"languages" must be an object of {"EN": {...}, ...} with at least one language.');
}
$clean = [];
foreach ($languages as $language => $payload) {
    $language = strtoupper(trim((string) $language));
    $clean[$language] = clean_session_language($language, $payload);
}

$pdo = get_admin_pdo();
try {
    $pdo->beginTransaction();
    $pdo->prepare('INSERT INTO sessions (session_name) VALUES (:name)')->execute([':name' => $sessionName]);
    $sessionId = (int) $pdo->lastInsertId();
    foreach ($clean as $language => $l) {
        insert_session_language($pdo, $sessionId, $language, $l);
    }
    $pdo->commit();
} catch (PDOException $e) {
    $pdo->rollBack();
    if ($e->getCode() === '23000') {
        respond_error(409, "A session named \"{$sessionName}\" already exists.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode([
    'session_id'   => $sessionId,
    'session_name' => $sessionName,
    'languages'    => array_keys($clean),
]);
