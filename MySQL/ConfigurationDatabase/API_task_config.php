<?php
/**
 * API_task_config.php
 * REST endpoint: returns a single task parameter set OR instruction set by name.
 *
 * This is the endpoint called by individual task HTML files (e.g. WordRecallDatabaseConfig.html).
 * Unlike API_battery.php (which returns a whole battery), this returns one config object.
 *
 * Usage:
 *   GET parameters: /api/api_task_config.php?type=parameters&task=Word+Recall&name=RAVLT_Spoken_Immediate
 *   GET instructions: /api/api_task_config.php?type=instructions&task=Word+Recall&name=Default&lang=EN
 *
 * Returns the JSON object directly (the same shape that the old JS variable held).
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

$type = $_GET['type']  ?? '';   // 'parameters' or 'instructions'
$task = $_GET['task']  ?? '';   // e.g. 'Word Recall'
$name = $_GET['name']  ?? '';   // e.g. 'RAVLT_Spoken_Immediate' or 'Default'
$lang = $_GET['lang']  ?? 'EN'; // e.g. 'EN' or 'FR'

if (!in_array($type, ['parameters', 'instructions'], true)) {
    respond_error(400, 'Parameter "type" must be "parameters" or "instructions".');
}
if ($task === '' || $name === '') {
    respond_error(400, 'Parameters "task" and "name" are required.');
}

try {
    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    respond_error(500, 'Database connection failed.');
}

if ($type === 'parameters') {
    $stmt = $pdo->prepare('
        SELECT tp.parameters_json
        FROM task_parameters tp
        JOIN task_types tt ON tt.task_type_id = tp.task_type_id
        WHERE tt.task_name    = :task
          AND tp.parameter_name = :name
        LIMIT 1
    ');
    $stmt->execute([':task' => $task, ':name' => $name]);
    $row = $stmt->fetch();

    if (!$row) {
        respond_error(404, "No parameters found: task=\"{$task}\" name=\"{$name}\".");
    }
    // parameters_json is already a JSON string stored by MySQL — output it directly
    echo $row['parameters_json'];

} else { // instructions
    $stmt = $pdo->prepare('
        SELECT ti.instructions_json
        FROM task_instructions ti
        JOIN task_types tt ON tt.task_type_id = ti.task_type_id
        WHERE tt.task_name       = :task
          AND ti.instruction_name = :name
          AND ti.language         = :lang
        LIMIT 1
    ');
    $stmt->execute([':task' => $task, ':name' => $name, ':lang' => $lang]);
    $row = $stmt->fetch();

    if (!$row) {
        respond_error(404, "No instructions found: task=\"{$task}\" name=\"{$name}\" lang=\"{$lang}\".");
    }
    echo $row['instructions_json'];
}
