<?php
/**
 * API_admin_logout.php
 * POST, no body needed. Destroys the current session.
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}

$_SESSION = [];
session_destroy();

echo json_encode(['ok' => true]);
