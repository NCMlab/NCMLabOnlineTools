<?php
/**
 * API_session.php
 * REST endpoint: one session (the button page in html/JATOS/CentralExecutive.html) in one language.
 *
 * Usage:
 *   GET /api/API_session.php?name=COMM_99&lang=FR
 *
 * Returns the same shape SessionChooser_config.js gives the page in `parameters`, so the page
 * can switch from pseudoSwitch(LANG + '_' + name) to this without other changes:
 *   [{ "index": 3, "Title": "...", "runNameCheck": false,
 *      "List": [{ "name": "...", "battery": "72", "row": 1, "BitIndex": 1,
 *                 "Phase": "...", "Test": "...", "ButtonUsageType": "UserChoice" }, ...] }]
 * Keys whose value is NULL in the database are left out, as they were absent in the source.
 * "battery" is a string, as in the source file.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Restrict to your JATOS domain in production

require_once __DIR__ . '/db_config.php';

function respond_error(int $code, string $message): void {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

$name = $_GET['name'] ?? '';   // e.g. 'COMM_99'
$lang = $_GET['lang'] ?? 'EN'; // e.g. 'EN' or 'FR'
if ($name === '') {
    respond_error(400, 'Parameter "name" is required.');
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

$stmt = $pdo->prepare('
    SELECT sl.session_language_id, sl.title, sl.chooser_index, sl.run_name_check
    FROM sessions s
    JOIN session_languages sl ON sl.session_id = s.session_id
    WHERE s.session_name = :name AND sl.language = :lang
');
$stmt->execute([':name' => $name, ':lang' => $lang]);
$session = $stmt->fetch();
if (!$session) {
    respond_error(404, "No session found: name=\"{$name}\" lang=\"{$lang}\".");
}

$stmt = $pdo->prepare('
    SELECT name, battery_index, button_row, bit_index, phase, test, button_usage_type
    FROM session_buttons
    WHERE session_language_id = :id
    ORDER BY sort_order
');
$stmt->execute([':id' => $session['session_language_id']]);

$list = [];
foreach ($stmt->fetchAll() as $b) {
    $list[] = array_filter([
        'name'            => $b['name'],
        'battery'         => (string) $b['battery_index'],
        'row'             => $b['button_row'] === null ? null : (int) $b['button_row'],
        'BitIndex'        => $b['bit_index'] === null ? null : (int) $b['bit_index'],
        'Phase'           => $b['phase'],
        'Test'            => $b['test'],
        'ButtonUsageType' => $b['button_usage_type'],
    ], fn($v) => $v !== null);
}

echo json_encode([array_filter([
    'index'        => $session['chooser_index'] === null ? null : (int) $session['chooser_index'],
    'Title'        => $session['title'],
    'List'         => $list,
    'runNameCheck' => $session['run_name_check'] === null ? null : (bool) $session['run_name_check'],
], fn($v) => $v !== null)], JSON_UNESCAPED_UNICODE);
