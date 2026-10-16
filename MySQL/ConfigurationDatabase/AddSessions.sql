-- One-time upgrade for databases created before sessions had their own tables
-- (CreateSchema.sql now creates them for new installs).
--
-- Before: session_chooser_configs held each SessionChooser_config.js registration as one JSON
--   blob per name and language.
-- After:  sessions (one per name, e.g. "COMM_99"), session_languages (title per language) and
--   session_buttons (one row per button: name, battery, row, bit index, phase, test).
--
-- The new tables are filled from session_chooser_configs, which is then kept as
-- session_chooser_configs_pre_sessions; drop it once you are happy:
--   DROP TABLE session_chooser_configs_pre_sessions;
--
-- Run with the MySQL 8 client (it needs DELIMITER and JSON_TABLE), always with UTF-8:
--   mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < AddSessions.sql
-- Safe to re-run: once session_chooser_configs is gone it does nothing.
USE ncmbattery_config;

CREATE TABLE IF NOT EXISTS sessions (
    session_id    INT           AUTO_INCREMENT PRIMARY KEY,
    session_name  VARCHAR(100)  NOT NULL UNIQUE,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS session_languages (
    session_language_id INT           AUTO_INCREMENT PRIMARY KEY,
    session_id          INT           NOT NULL,
    language            CHAR(2)       NOT NULL,
    title               VARCHAR(255)  NOT NULL,
    chooser_index       INT           NULL,
    run_name_check      TINYINT(1)    NULL,
    created_at          TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_session_lang (session_id, language),
    FOREIGN KEY (session_id) REFERENCES sessions(session_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS session_buttons (
    session_button_id   INT           AUTO_INCREMENT PRIMARY KEY,
    session_language_id INT           NOT NULL,
    sort_order          INT           NOT NULL,
    name                VARCHAR(200)  NOT NULL,
    battery_index       INT           NOT NULL,
    button_row          INT           NULL,
    bit_index           INT           NULL,
    phase               VARCHAR(100)  NULL,
    test                VARCHAR(50)   NULL,
    button_usage_type   VARCHAR(50)   NULL,
    UNIQUE KEY uq_session_button_order (session_language_id, sort_order),
    FOREIGN KEY (session_language_id) REFERENCES session_languages(session_language_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP PROCEDURE IF EXISTS migrate_sessions;
DELIMITER //
CREATE PROCEDURE migrate_sessions()
BEGIN
    IF (SELECT COUNT(*) FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'session_chooser_configs') = 0 THEN
        SELECT 'session_chooser_configs is already gone: nothing to migrate' AS note;
    ELSE
        INSERT IGNORE INTO sessions (session_name, created_at)
        SELECT config_name, MIN(created_at) FROM session_chooser_configs GROUP BY config_name;

        -- config_json is the registered array: [{ index, Title, List, runNameCheck? }]
        INSERT IGNORE INTO session_languages (session_id, language, title, chooser_index, run_name_check, created_at)
        SELECT s.session_id, c.language,
               c.config_json->>'$[0].Title',
               CAST(c.config_json->>'$[0].index' AS SIGNED),
               CASE JSON_EXTRACT(c.config_json, '$[0].runNameCheck')
                   WHEN CAST('true' AS JSON) THEN 1
                   WHEN CAST('false' AS JSON) THEN 0
               END,
               c.created_at
        FROM session_chooser_configs c
        JOIN sessions s ON s.session_name = c.config_name;

        INSERT IGNORE INTO session_buttons
            (session_language_id, sort_order, name, battery_index, button_row, bit_index, phase, test, button_usage_type)
        SELECT sl.session_language_id, b.sort_order, b.name, CAST(b.battery AS SIGNED),
               b.button_row, b.bit_index, b.phase, b.test, b.usage_type
        FROM session_chooser_configs c
        JOIN sessions s ON s.session_name = c.config_name
        JOIN session_languages sl ON sl.session_id = s.session_id AND sl.language = c.language
        JOIN JSON_TABLE(c.config_json, '$[0].List[*]' COLUMNS (
            sort_order  FOR ORDINALITY,
            name        VARCHAR(200) PATH '$.name',
            battery     VARCHAR(20)  PATH '$.battery',
            button_row  INT          PATH '$.row',
            bit_index   INT          PATH '$.BitIndex',
            phase       VARCHAR(100) PATH '$.Phase',
            test        VARCHAR(50)  PATH '$.Test',
            usage_type  VARCHAR(50)  PATH '$.ButtonUsageType'
        )) AS b;

        RENAME TABLE session_chooser_configs TO session_chooser_configs_pre_sessions;

        SELECT (SELECT COUNT(*) FROM sessions) AS sessions,
               (SELECT COUNT(*) FROM session_languages) AS session_languages,
               (SELECT COUNT(*) FROM session_buttons) AS buttons;
    END IF;
END //
DELIMITER ;

CALL migrate_sessions();
DROP PROCEDURE migrate_sessions;
