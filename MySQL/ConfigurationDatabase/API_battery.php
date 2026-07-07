<?php
/**
 * API_battery.php
 * REST endpoint: returns a full battery configuration as JSON.
 *
 * Usage:
 *   GET /api/battery.php?index=16
 *
 * Returns the battery whose battery_index = 16, including the
 * ordered task list with parameters and instructions for each task.
 *
 * Deploy this file on the same server as your MySQL instance.
 * Update the $db_* constants below to match your server.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Restrict to your JATOS domain in production

// -- Database connection settings ------------------------------------------
define('DB_HOST', 'localhost');
define('DB_NAME', 'ncmbattery_config');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');
define('DB_CHARSET', 'utf8mb4');
// --------------------------------------------------------------------------

function respond_error(int $code, string $message): void {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

// Validate input
$index = filter_input(INPUT_GET, 'index', FILTER_VALIDATE_INT);
if ($index === false || $index === null) {
    respond_error(400, 'Missing or invalid "index" parameter.');
}

// Connect
try {
    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    respond_error(500, 'Database connection failed.');
}

// Fetch battery header
$stmt = $pdo->prepare('
    SELECT battery_id, battery_index, battery_name, description,
           battery_instructions, language, run_audio_test, footer,
           short_name, header_buttons, languages_to_show, redirect_url
    FROM batteries
    WHERE battery_index = :idx AND active = 1
    LIMIT 1
');
$stmt->execute([':idx' => $index]);
$battery = $stmt->fetch();

if (!$battery) {
    respond_error(404, "No active battery found with index {$index}.");
}

$battery_id = $battery['battery_id'];

// Decode JSON columns stored by MySQL
$battery['header_buttons']    = json_decode($battery['header_buttons']);
$battery['languages_to_show'] = json_decode($battery['languages_to_show']);
$battery['run_audio_test']    = (bool) $battery['run_audio_test'];
unset($battery['battery_id']);

// Fetch ordered task list for this battery
$stmt = $pdo->prepare('
    SELECT
        bt.sort_order,
        bt.icon_name,
        tt.task_name,
        tt.html_file,
        tp.parameter_name,
        tp.parameters_json,
        ti.instruction_name,
        ti.language  AS instruction_language,
        ti.instructions_json
    FROM battery_tasks bt
    JOIN task_types tt ON tt.task_type_id = bt.task_type_id
    LEFT JOIN task_parameters  tp ON tp.parameter_id   = bt.parameter_id
    LEFT JOIN task_instructions ti ON ti.instruction_id = bt.instruction_id
    WHERE bt.battery_id = :bid
    ORDER BY bt.sort_order
');
$stmt->execute([':bid' => $battery_id]);
$rows = $stmt->fetchAll();

$tasks = [];
foreach ($rows as $row) {
    $tasks[] = [
        'sort_order'           => (int) $row['sort_order'],
        'task_name'            => $row['task_name'],
        'html_file'            => $row['html_file'],
        'icon_name'            => $row['icon_name'],
        'parameter_name'       => $row['parameter_name'],
        'parameters'           => $row['parameters_json']    ? json_decode($row['parameters_json'])    : null,
        'instruction_name'     => $row['instruction_name'],
        'instruction_language' => $row['instruction_language'],
        'instructions'         => $row['instructions_json']  ? json_decode($row['instructions_json'])  : null,
    ];
}

$battery['tasks'] = $tasks;
echo json_encode($battery, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
