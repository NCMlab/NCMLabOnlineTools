<?php
/**
 * session_common.php
 * Validation and insert for one language of a session, shared by
 * API_admin_create_session.php and API_admin_add_session_language.php.
 *
 * One language's payload:
 * {
 *   "title": "What session is this?",
 *   "chooser_index": 3,          // optional, the source's "index"
 *   "run_name_check": false,     // optional
 *   "buttons": [
 *     { "name": "Baseline 1", "battery_index": 77, "button_row": 2, "bit_index": 4,
 *       "phase": "Baseline", "test": "BL-1", "button_usage_type": null }, ...
 *   ]
 * }
 * Buttons are stored in array order. Row, bit index, phase, test and usage type may be null.
 */

/** Returns the cleaned payload, or calls respond_error(400) naming the first problem. */
function clean_session_language(string $language, $payload): array {
    if (!preg_match('/^[A-Z]{2}$/', $language)) {
        respond_error(400, "Language \"{$language}\" must be a 2-letter code, e.g. \"EN\".");
    }
    if (!is_array($payload)) {
        respond_error(400, "{$language}: must be an object with \"title\" and \"buttons\".");
    }
    $title = trim((string) ($payload['title'] ?? ''));
    if ($title === '') {
        respond_error(400, "{$language}: \"title\" is required.");
    }
    $buttons = $payload['buttons'] ?? null;
    if (!is_array($buttons) || !array_is_list($buttons) || $buttons === []) {
        respond_error(400, "{$language}: \"buttons\" must be a non-empty list.");
    }

    $optInt = function ($v, string $what) use ($language) {
        if ($v === null || $v === '') return null;
        if (is_int($v) || (is_string($v) && preg_match('/^-?\d+$/', $v))) return (int) $v;
        respond_error(400, "{$language}: {$what} must be a whole number.");
    };
    $optText = fn($v) => ($v === null || trim((string) $v) === '') ? null : trim((string) $v);

    $clean = [];
    foreach ($buttons as $i => $b) {
        $n = $i + 1;
        $name = trim((string) ($b['name'] ?? ''));
        if ($name === '') {
            respond_error(400, "{$language}: button {$n} needs a name.");
        }
        $battery = $optInt($b['battery_index'] ?? null, "button {$n} battery");
        if ($battery === null) {
            respond_error(400, "{$language}: button {$n} (\"{$name}\") needs a battery index.");
        }
        $clean[] = [
            'name'              => $name,
            'battery_index'     => $battery,
            'button_row'        => $optInt($b['button_row'] ?? null, "button {$n} row"),
            'bit_index'         => $optInt($b['bit_index'] ?? null, "button {$n} bit index"),
            'phase'             => $optText($b['phase'] ?? null),
            'test'              => $optText($b['test'] ?? null),
            'button_usage_type' => $optText($b['button_usage_type'] ?? null),
        ];
    }

    // A repeated bit index makes two buttons share one "done" mark. 9999/99-style "pick a test"
    // buttons are the exception the source files already use, so only normal buttons are checked.
    $bits = array_filter(array_map(
        fn($b) => $b['button_usage_type'] === null ? $b['bit_index'] : null,
        $clean
    ), fn($v) => $v !== null);
    $dupes = array_unique(array_diff_assoc($bits, array_unique($bits)));
    if ($dupes) {
        respond_error(400, "{$language}: bit index " . implode(', ', $dupes) . ' is used by more than one button.');
    }

    return [
        'title'          => $title,
        'chooser_index'  => $optInt($payload['chooser_index'] ?? null, 'chooser index'),
        'run_name_check' => isset($payload['run_name_check']) ? ($payload['run_name_check'] ? 1 : 0) : null,
        'buttons'        => $clean,
    ];
}

/** Inserts one cleaned language and its buttons; the caller handles the transaction. */
function insert_session_language(PDO $pdo, int $sessionId, string $language, array $l): void {
    $pdo->prepare('
        INSERT INTO session_languages (session_id, language, title, chooser_index, run_name_check)
        VALUES (:session_id, :lang, :title, :chooser_index, :run_name_check)
    ')->execute([
        ':session_id'     => $sessionId,
        ':lang'           => $language,
        ':title'          => $l['title'],
        ':chooser_index'  => $l['chooser_index'],
        ':run_name_check' => $l['run_name_check'],
    ]);
    $languageId = (int) $pdo->lastInsertId();

    $insert = $pdo->prepare('
        INSERT INTO session_buttons
            (session_language_id, sort_order, name, battery_index, button_row, bit_index, phase, test, button_usage_type)
        VALUES (:lid, :sort_order, :name, :battery_index, :button_row, :bit_index, :phase, :test, :usage)
    ');
    foreach ($l['buttons'] as $i => $b) {
        $insert->execute([
            ':lid'           => $languageId,
            ':sort_order'    => $i + 1,
            ':name'          => $b['name'],
            ':battery_index' => $b['battery_index'],
            ':button_row'    => $b['button_row'],
            ':bit_index'     => $b['bit_index'],
            ':phase'         => $b['phase'],
            ':test'          => $b['test'],
            ':usage'         => $b['button_usage_type'],
        ]);
    }
}
