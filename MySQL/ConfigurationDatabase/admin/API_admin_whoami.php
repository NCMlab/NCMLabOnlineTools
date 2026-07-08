<?php
/**
 * API_admin_whoami.php
 * GET, session cookie only (no CSRF token needed -- this is a read, and CSRF
 * protection only matters for state-changing requests).
 *
 * Lets the frontend recover "am I still logged in?" and get a fresh CSRF
 * token after a page reload, since the React app only holds the CSRF token
 * in memory (see AdminSetupInstructions.md for why) and loses it on refresh
 * even though the httpOnly session cookie is still valid server-side.
 */

require_once __DIR__ . '/admin_common.php';

if (empty($_SESSION['admin_user_id'])) {
    respond_error(401, 'Not logged in.');
}

$pdo = get_admin_pdo();
$stmt = $pdo->prepare('SELECT username, active FROM admin_users WHERE admin_user_id = :id LIMIT 1');
$stmt->execute([':id' => $_SESSION['admin_user_id']]);
$user = $stmt->fetch();

if (!$user || !$user['active']) {
    $_SESSION = [];
    session_destroy();
    respond_error(401, 'Not logged in.');
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

echo json_encode([
    'username'   => $user['username'],
    'csrf_token' => $_SESSION['csrf_token'],
]);
