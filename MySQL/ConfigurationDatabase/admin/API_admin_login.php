<?php
/**
 * API_admin_login.php
 * POST { "username": "...", "password": "..." }
 *
 * On success: starts a session, returns a CSRF token the client must send
 * back (as header X-CSRF-Token) on every subsequent write request.
 *
 * No rate limiting yet -- see AdminSetupInstructions.md for why this is a
 * known gap, not an oversight, and what to add before real deployment.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}

$body = read_json_body();
$username = trim($body['username'] ?? '');
$password = (string) ($body['password'] ?? '');

if ($username === '' || $password === '') {
    respond_error(400, 'Username and password are required.');
}

$pdo = get_admin_pdo();
$stmt = $pdo->prepare('SELECT admin_user_id, password_hash, active FROM admin_users WHERE username = :u LIMIT 1');
$stmt->execute([':u' => $username]);
$user = $stmt->fetch();

// Deliberately identical error for "no such user" and "wrong password" --
// distinguishing them lets an attacker enumerate valid usernames.
if (!$user || !$user['active'] || !password_verify($password, $user['password_hash'])) {
    respond_error(401, 'Invalid username or password.');
}

session_regenerate_id(true); // new session ID on login, blocks session fixation
$_SESSION['admin_user_id'] = (int) $user['admin_user_id'];
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

echo json_encode([
    'username'   => $username,
    'csrf_token' => $_SESSION['csrf_token'],
]);
