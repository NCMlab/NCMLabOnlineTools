<?php
/**
 * API_admin_set_session_battery.php
 * POST (session + X-CSRF-Token required). Points session buttons at a different battery,
 * IN PLACE -- the one change to a session that doesn't need a copy under a new name
 * (Jason, 2026-10-15), so the JATOS study component that names the session keeps working.
 * Used after editing a button's battery: the edit is saved as a new battery index, and the
 * button is switched to it. The old battery is not changed, so data already collected with
 * it still matches its configuration.
 * {
 *   "session_id": 2,
 *   "from_battery_index": 80,      // the battery the button(s) use now
 *   "to_battery_index": 86,        // must exist in batteries
 *   "scope": "button",             // "button":   one button (needs language + sort_order)
 *                                  // "language": every button in `language` using from_battery_index
 *                                  // "session":  every button, all languages, using from_battery_index
 *   "language": "EN",
 *   "sort_order": 11               // 1-based position of the button in that language's list
 * }
 * Returns the buttons changed: [{language, sort_order, name}].
 */

require_once __DIR__ . '/admin_common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_error(405, 'Use POST.');
}
require_admin_session();

$body = read_json_body();
$int = fn($v) => (is_int($v) || (is_string($v) && ctype_digit($v))) ? (int) $v : null;
$sessionId = $int($body['session_id'] ?? null);
$from = $int($body['from_battery_index'] ?? null);
$to = $int($body['to_battery_index'] ?? null);
$scope = $body['scope'] ?? '';
$language = strtoupper(trim($body['language'] ?? ''));
$sortOrder = $int($body['sort_order'] ?? null);

if (!$sessionId || $from === null || $to === null) {
    respond_error(400, '"session_id", "from_battery_index" and "to_battery_index" must be whole numbers.');
}
if (!in_array($scope, ['button', 'language', 'session'], true)) {
    respond_error(400, '"scope" must be "button", "language", or "session".');
}
if ($scope !== 'session' && !preg_match('/^[A-Z]{2}$/', $language)) {
    respond_error(400, '"language" is required for this scope.');
}
if ($scope === 'button' && !$sortOrder) {
    respond_error(400, '"sort_order" is required for scope "button".');
}

$pdo = get_admin_pdo();

$stmt = $pdo->prepare('SELECT 1 FROM sessions WHERE session_id = :id');
$stmt->execute([':id' => $sessionId]);
if (!$stmt->fetch()) {
    respond_error(404, "No session with id {$sessionId}.");
}
$stmt = $pdo->prepare('SELECT active FROM batteries WHERE battery_index = :idx');
$stmt->execute([':idx' => $to]);
$target = $stmt->fetch();
if (!$target) {
    respond_error(404, "There is no battery with index {$to}.");
}
if (!$target['active']) {
    respond_error(409, "Battery index {$to} is inactive; activate it first.");
}

$where = 'sl.session_id = :sid AND b.battery_index = :from';
$args = [':sid' => $sessionId, ':from' => $from];
if ($scope !== 'session') {
    $where .= ' AND sl.language = :lang';
    $args[':lang'] = $language;
}
if ($scope === 'button') {
    $where .= ' AND b.sort_order = :sort';
    $args[':sort'] = $sortOrder;
}

$stmt = $pdo->prepare("
    SELECT b.session_button_id, sl.language, b.sort_order, b.name
    FROM session_buttons b
    JOIN session_languages sl ON sl.session_language_id = b.session_language_id
    WHERE $where
    ORDER BY sl.language <> 'EN', sl.language, b.sort_order
");
$stmt->execute($args);
$buttons = $stmt->fetchAll();
if (!$buttons) {
    respond_error(404, "No matching button uses battery index {$from}.");
}

$ids = array_column($buttons, 'session_button_id');
$placeholders = implode(',', array_fill(0, count($ids), '?'));
$pdo->prepare("UPDATE session_buttons SET battery_index = ? WHERE session_button_id IN ($placeholders)")
    ->execute(array_merge([$to], $ids));

echo json_encode([
    'to_battery_index' => $to,
    'changed' => array_map(fn($b) => [
        'language'   => $b['language'],
        'sort_order' => (int) $b['sort_order'],
        'name'       => $b['name'],
    ], $buttons),
], JSON_UNESCAPED_UNICODE);
