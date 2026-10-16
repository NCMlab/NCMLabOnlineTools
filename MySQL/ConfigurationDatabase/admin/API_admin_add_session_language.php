<?php
/**
 * API_admin_add_session_language.php
 * POST (session + X-CSRF-Token required). Adds one language to an EXISTING session:
 * { "session_id": 2, "language": "ES", "title": ..., "buttons": [...] }
 * (fields as in session_common.php). The existing languages are not touched, so this is
 * allowed on a session that is already in use. 409 if the session has that language.
 */

require_once __DIR__ . '/admin_common.php';
require_once __DIR__ . '/session_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$sessionId = $body['session_id'] ?? null;
if (!(is_int($sessionId) && $sessionId > 0) && !(is_string($sessionId) && ctype_digit($sessionId))) {
    respond_error(400, '"session_id" must be a positive integer.');
}
$sessionId = (int) $sessionId;
$language = strtoupper(trim($body['language'] ?? ''));
$clean = clean_session_language($language, $body);

$pdo = get_admin_pdo();
$stmt = $pdo->prepare('SELECT session_name FROM sessions WHERE session_id = :id');
$stmt->execute([':id' => $sessionId]);
$session = $stmt->fetch();
if (!$session) {
    respond_error(404, "No session with id {$sessionId}.");
}

try {
    $pdo->beginTransaction();
    insert_session_language($pdo, $sessionId, $language, $clean);
    $pdo->commit();
} catch (PDOException $e) {
    $pdo->rollBack();
    if ($e->getCode() === '23000') {
        respond_error(409, "\"{$session['session_name']}\" already has a {$language} version.");
    }
    respond_error(500, 'Database write failed.');
}

echo json_encode(['session_id' => $sessionId, 'session_name' => $session['session_name'], 'language' => $language]);
