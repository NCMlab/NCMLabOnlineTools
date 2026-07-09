<?php
/**
 * admin_common.php
 * Shared setup for every authenticated admin endpoint: DB connection,
 * session/cookie config, CORS restricted to a single origin, and the
 * CSRF + login checks every write endpoint must call before touching
 * the database.
 *
 * Not a standalone endpoint -- included by API_admin_*.php files only.
 */

// Credentials come from db_config.php (gitignored -- see ../db_config.example.php),
// not from constants in this file, so they never end up in source control.
require_once __DIR__ . '/../db_config.php';

// -- CORS: this must be the exact origin NCMBatteryWebsite is served from --
// Unlike the public API_battery.php/API_task_config.php (Access-Control-Allow-Origin: *),
// these endpoints carry a session cookie, so the origin must be an explicit
// value, not '*' -- browsers refuse credentialed requests with a wildcard origin.
define('ADMIN_ALLOWED_ORIGIN', 'https://your-admin-site.example.edu');
// ----------------------------------------------------------------------------

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === ADMIN_ALLOWED_ORIGIN) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
header('Content-Type: application/json');

// Preflight requests get an empty 204, no further processing.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Session cookie: httpOnly (no JS access, blocks XSS token theft),
// secure (HTTPS only), SameSite=Strict (blocks CSRF via cross-site navigation
// on top of the explicit CSRF token check below -- defense in depth).
session_set_cookie_params([
    'lifetime' => 0,
    'path'     => '/',
    'domain'   => '',
    'secure'   => true,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();

function respond_error(int $code, string $message): void {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

function get_admin_pdo(): PDO {
    try {
        $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
        return new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        respond_error(500, 'Database connection failed.');
    }
}

/**
 * Every write endpoint (not the login endpoint itself) must call this
 * first. Confirms a logged-in session AND a matching CSRF token sent by
 * the client in the X-CSRF-Token header. Exits with 401/403 on failure.
 */
function require_admin_session(): int {
    if (empty($_SESSION['admin_user_id'])) {
        respond_error(401, 'Not logged in.');
    }
    $sentToken = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $sentToken)) {
        respond_error(403, 'Missing or invalid CSRF token.');
    }
    return (int) $_SESSION['admin_user_id'];
}

/** Reads and JSON-decodes the request body, or errors out. */
function read_json_body(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        respond_error(400, 'Request body must be valid JSON.');
    }
    return $data;
}
