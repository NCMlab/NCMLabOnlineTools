-- One-time upgrade for databases created before instruction sets had translations
-- (CreateSchema.sql now creates the new tables for new installs).
--
-- Before: task_instructions held one unrelated row per language, with the language in the
--   name ("EN_Instructions_Default", "FR_Instructions_Default"), and battery_tasks.instruction_id
--   pointed at one language's row.
-- After:  instruction_sets holds one row per set ("Default"), instruction_translations one row
--   per language of it, and battery_tasks.instruction_set_id points at the set.
--
-- Set names use the same rule as instructionSetName() in migrate/task_mapping.js. If two old
-- rows end up as the same set and language, the newer one is kept and the older one is listed
-- in the output. The old table is kept as task_instructions_pre_sets; drop it once you are happy:
--   DROP TABLE task_instructions_pre_sets;
--
-- Run with the MySQL 8 client (it needs DELIMITER), always with UTF-8:
--   mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < AddInstructionSets.sql
-- Safe to re-run: once task_instructions is gone it only re-creates the view.
USE ncmbattery_config;

CREATE TABLE IF NOT EXISTS instruction_sets (
    instruction_set_id INT           AUTO_INCREMENT PRIMARY KEY,
    task_type_id       INT           NOT NULL,
    instruction_name   VARCHAR(150)  NOT NULL,
    created_at         TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_instr_set (task_type_id, instruction_name),
    FOREIGN KEY (task_type_id) REFERENCES task_types(task_type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS instruction_translations (
    translation_id     INT           AUTO_INCREMENT PRIMARY KEY,
    instruction_set_id INT           NOT NULL,
    language           CHAR(2)       NOT NULL,
    instructions_json  JSON          NOT NULL,
    created_at         TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_instr_lang (instruction_set_id, language),
    FOREIGN KEY (instruction_set_id) REFERENCES instruction_sets(instruction_set_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

DROP PROCEDURE IF EXISTS migrate_instruction_sets;
DELIMITER //
CREATE PROCEDURE migrate_instruction_sets()
BEGIN
    IF (SELECT COUNT(*) FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'task_instructions') = 0 THEN
        SELECT 'task_instructions is already gone: nothing to migrate' AS note;
    ELSE
        -- 1. Every old row with its set name.
        DROP TABLE IF EXISTS _instr_migration;
        CREATE TABLE _instr_migration AS
        SELECT instruction_id, task_type_id, language, instructions_json, created_at,
               REGEXP_REPLACE(
                   REGEXP_REPLACE(instruction_name, CONCAT('^', language, '_'), ''),
                   '^(\\w+?_)?Instructions(_|$)', '') AS set_name
        FROM task_instructions;
        -- Keep in step with INSTRUCTION_SET_RENAMES in migrate/task_mapping.js.
        UPDATE _instr_migration SET set_name = 'IntakeFaCE' WHERE set_name = 'IntakeForm_FaCE';
        UPDATE _instr_migration SET set_name = 'OrientationFaCE' WHERE set_name = 'OrientationForm_FaCE';
        UPDATE _instr_migration SET set_name = 'Default' WHERE set_name = '';

        -- 2. One set per task type and name.
        INSERT IGNORE INTO instruction_sets (task_type_id, instruction_name, created_at)
        SELECT task_type_id, set_name, MIN(created_at)
        FROM _instr_migration
        GROUP BY task_type_id, set_name;

        -- 3. One translation per set and language; newest row first, so it is the one kept.
        INSERT IGNORE INTO instruction_translations (instruction_set_id, language, instructions_json, created_at)
        SELECT s.instruction_set_id, m.language, m.instructions_json, m.created_at
        FROM _instr_migration m
        JOIN instruction_sets s ON s.task_type_id = m.task_type_id AND s.instruction_name = m.set_name
        ORDER BY m.instruction_id DESC;

        SELECT m.instruction_id AS dropped_instruction_id, tt.task_name, m.set_name, m.language,
               'a newer row became the same set and language' AS reason
        FROM _instr_migration m
        JOIN task_types tt ON tt.task_type_id = m.task_type_id
        WHERE m.instruction_id < (
            SELECT MAX(m2.instruction_id) FROM _instr_migration m2
            WHERE m2.task_type_id = m.task_type_id AND m2.set_name = m.set_name AND m2.language = m.language
        );

        -- 4. battery_tasks: point at the set instead of one language's row.
        IF (SELECT COUNT(*) FROM information_schema.COLUMNS
            WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'battery_tasks' AND COLUMN_NAME = 'instruction_set_id') = 0 THEN
            ALTER TABLE battery_tasks
                ADD COLUMN instruction_set_id INT NULL AFTER parameter_id,
                ADD FOREIGN KEY (instruction_set_id) REFERENCES instruction_sets(instruction_set_id)
                    ON DELETE SET NULL ON UPDATE CASCADE;
        END IF;

        IF (SELECT COUNT(*) FROM information_schema.COLUMNS
            WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'battery_tasks' AND COLUMN_NAME = 'instruction_id') = 1 THEN
            UPDATE battery_tasks bt
            JOIN _instr_migration m ON m.instruction_id = bt.instruction_id
            JOIN instruction_sets s ON s.task_type_id = m.task_type_id AND s.instruction_name = m.set_name
            SET bt.instruction_set_id = s.instruction_set_id;

            SET @fk = NULL;
            SELECT CONSTRAINT_NAME INTO @fk FROM information_schema.KEY_COLUMN_USAGE
            WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'battery_tasks'
              AND COLUMN_NAME = 'instruction_id' AND REFERENCED_TABLE_NAME IS NOT NULL
            LIMIT 1;
            IF @fk IS NOT NULL THEN
                SET @ddl = CONCAT('ALTER TABLE battery_tasks DROP FOREIGN KEY `', @fk, '`');
                PREPARE stmt FROM @ddl;
                EXECUTE stmt;
                DEALLOCATE PREPARE stmt;
            END IF;
            ALTER TABLE battery_tasks DROP COLUMN instruction_id;
        END IF;

        -- 5. Keep the old rows as a backup, out of the way.
        RENAME TABLE task_instructions TO task_instructions_pre_sets;
        DROP TABLE _instr_migration;

        SELECT (SELECT COUNT(*) FROM task_instructions_pre_sets) AS old_rows,
               (SELECT COUNT(*) FROM instruction_sets) AS instruction_sets,
               (SELECT COUNT(*) FROM instruction_translations) AS translations,
               (SELECT COUNT(*) FROM battery_tasks WHERE instruction_set_id IS NOT NULL) AS battery_tasks_with_instructions;
    END IF;
END //
DELIMITER ;

CALL migrate_instruction_sets();
DROP PROCEDURE migrate_instruction_sets;

-- Same view as CreateSchema.sql: the battery language's translation of each task's set.
CREATE OR REPLACE VIEW v_battery_tasks AS
SELECT
    b.battery_index,
    b.battery_name,
    b.description,
    b.battery_instructions,
    b.language         AS battery_language,
    b.run_audio_test,
    b.footer,
    b.short_name,
    b.header_buttons,
    b.languages_to_show,
    b.redirect_url,
    bt.sort_order,
    bt.icon_name,
    tt.task_name,
    tt.html_file,
    tp.parameter_name,
    tp.parameters_json,
    ins.instruction_name,
    it.language        AS instruction_language,
    it.instructions_json
FROM batteries b
JOIN battery_tasks  bt ON bt.battery_id    = b.battery_id
JOIN task_types     tt ON tt.task_type_id  = bt.task_type_id
LEFT JOIN task_parameters  tp ON tp.parameter_id   = bt.parameter_id
LEFT JOIN instruction_sets ins ON ins.instruction_set_id = bt.instruction_set_id
LEFT JOIN instruction_translations it ON it.instruction_set_id = bt.instruction_set_id AND it.language = b.language
WHERE b.active = 1
ORDER BY b.battery_index, bt.sort_order;
