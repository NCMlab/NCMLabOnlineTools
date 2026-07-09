<?php
/**
 * create_admin_user.php
 * CLI-only script to create or update an admin account. There is no HTTP
 * registration endpoint on purpose -- these are privileged accounts for
 * lab staff, not the general public, so accounts are provisioned by
 * whoever controls the server, not by anyone who can reach a URL.
 *
 * Usage (from the server, not a browser):
 *   php create_admin_user.php <username>
 * Prompts for a password (input is not echoed to the terminal).
 *
 * Refuses to run under a web server (php_sapi_name() check below) so this
 * file is safe to leave on disk even if it ends up inside a web root by
 * mistake -- it will not execute over HTTP.
 */

if (php_sapi_name() !== 'cli') {
    http_response_code(403);
    exit('This script may only be run from the command line.');
}

// Credentials come from db_config.php (gitignored -- see ../db_config.example.php),
// not from constants in this file, so they never end up in source control.
require_once __DIR__ . '/../db_config.php';

$username = $argv[1] ?? null;
if (!$username) {
    fwrite(STDERR, "Usage: php create_admin_user.php <username>\n");
    exit(1);
}

fwrite(STDOUT, "Password for '{$username}': ");
shell_exec('stty -echo'); // hide input
$password = trim(fgets(STDIN));
shell_exec('stty echo');
fwrite(STDOUT, "\n");

if (strlen($password) < 12) {
    fwrite(STDERR, "Password must be at least 12 characters.\n");
    exit(1);
}

$hash = password_hash($password, PASSWORD_BCRYPT);

try {
    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    fwrite(STDERR, "Database connection failed: {$e->getMessage()}\n");
    exit(1);
}

$stmt = $pdo->prepare('
    INSERT INTO admin_users (username, password_hash) VALUES (:u, :h)
    ON DUPLICATE KEY UPDATE password_hash = :h2, active = 1
');
$stmt->execute([':u' => $username, ':h' => $hash, ':h2' => $hash]);

fwrite(STDOUT, "OK: '{$username}' created/updated.\n");
