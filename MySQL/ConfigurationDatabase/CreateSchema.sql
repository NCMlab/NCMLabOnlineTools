-- ============================================================
-- NCMBattery Configuration Database Schema
-- Created: 2026-07-07
-- Purpose: Replace file-based battery/task configuration with
--          a relational database.
-- ============================================================

CREATE DATABASE IF NOT EXISTS ncmbattery_config
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE ncmbattery_config;

-- -------------------------------------------------------
-- task_types
-- One row per task type (Word Recall, Trail Making, etc.)
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_types (
    task_type_id   INT           AUTO_INCREMENT PRIMARY KEY,
    task_name      VARCHAR(100)  NOT NULL UNIQUE,
    html_file      VARCHAR(255)  NOT NULL,
    icon_file      VARCHAR(255),
    parameter_schema JSON        NULL,   -- JSON Schema describing this task's parameters (see schemas/); NULL = edit as raw JSON
    created_at     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- task_parameters
-- One row per named parameter set for a given task type.
-- The full parameter object is stored as JSON so that tasks
-- with very different schemas do not require schema changes.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_parameters (
    parameter_id    INT           AUTO_INCREMENT PRIMARY KEY,
    task_type_id    INT           NOT NULL,
    parameter_name  VARCHAR(150)  NOT NULL,
    language        CHAR(2)       NOT NULL DEFAULT 'EN',
    parameters_json JSON          NOT NULL,
    created_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_task_param (task_type_id, parameter_name),
    FOREIGN KEY (task_type_id) REFERENCES task_types(task_type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- -------------------------------------------------------
-- instruction_sets
-- One row per named instruction set for a given task type,
-- e.g. Digit Span "Default" or Word Recall "FaCE". The text
-- itself lives in instruction_translations, one row per
-- language, so a battery picks the set and the participant's
-- language picks the translation at run time.
-- instruction_name has no language prefix: the source files'
-- "EN_Instructions_Default" and "FR_Instructions_Default" are
-- the EN and FR translations of the set "Default" (see
-- instructionSetName() in migrate/task_mapping.js).
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS instruction_sets (
    instruction_set_id INT           AUTO_INCREMENT PRIMARY KEY,
    task_type_id       INT           NOT NULL,
    instruction_name   VARCHAR(150)  NOT NULL,
    created_at         TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_instr_set (task_type_id, instruction_name),
    FOREIGN KEY (task_type_id) REFERENCES task_types(task_type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- -------------------------------------------------------
-- instruction_translations
-- One language's text for an instruction set. Deleting a set
-- deletes its translations.
-- -------------------------------------------------------
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

-- -------------------------------------------------------
-- ui_labels
-- Shared button/UI label text (e.g. "Quit", "Home", "Submit"),
-- one row per (label_key, language) pair. Not tied to any task_type --
-- every task's HTML page reads the same label set. Replaces the
-- LabelNames objects (EN_LabelNames, FR_LabelNames, KR_LabelNames)
-- defined in config/General_Setup.js.
-- One row per key (rather than one JSON blob per language) so that
-- adding/editing a single label doesn't require rewriting a whole
-- blob, and so missing translations are a plain query instead of a
-- manual JSON diff -- e.g. FR and KR are both missing an "Info" key
-- that EN has.
-- label_value is JSON, not VARCHAR, because a few values are arrays
-- (e.g. NoYes: ["No","Yes"]) rather than plain strings.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS ui_labels (
    ui_label_id   INT           AUTO_INCREMENT PRIMARY KEY,
    label_key     VARCHAR(100)  NOT NULL,
    language      CHAR(2)       NOT NULL,
    label_value   JSON          NOT NULL,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_label_lang (label_key, language)
);

-- -------------------------------------------------------
-- sessions
-- A session is the button page a participant starts from
-- (html/JATOS/CentralExecutive.html): each button launches one
-- battery and marks a bit in the participant's progress when done.
-- Replaces config/SessionChooser_config.js. session_name is the
-- registration key without its language prefix ("COMM_99" for
-- EN_COMM_99 / FR_COMM_99); JATOS passes it to the page in
-- ComponentParameterLists and the page adds the language.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS sessions (
    session_id    INT           AUTO_INCREMENT PRIMARY KEY,
    session_name  VARCHAR(100)  NOT NULL UNIQUE,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- session_languages
-- One language's version of a session: its title and its own
-- button list. A whole list per language, not just translated
-- labels, because the source files' languages differ in more
-- than text (e.g. KR COMM_99 points some lessons at other
-- batteries and has no Phase/Test values).
-- chooser_index and run_name_check keep the source object's
-- "index" and "runNameCheck" (NULL when the source has none).
-- -------------------------------------------------------
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

-- -------------------------------------------------------
-- session_buttons
-- One button on a session page, in sort_order.
--   battery_index  the battery the button runs. Not a foreign key:
--                  batteries are looked up by index at run time and
--                  some sessions name batteries not loaded here.
--   button_row     which row of the page the button sits on
--   bit_index      the participant-progress bit set when this
--                  button's battery is completed
--   phase, test    copied into the results when the button is used
--   button_usage_type  NULL for a normal button; 'UserChoice' lets
--                  the participant pick a task from the battery
-- Row, bit, phase and test are NULL where the source omits them.
-- -------------------------------------------------------
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

-- -------------------------------------------------------
-- batteries
-- One row per battery (study session configuration).
-- battery_index is the numeric key used at runtime to look
-- up which battery to run (replaces the 'index' field in
-- BatteryList in Batteries.js).
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS batteries (
    battery_id            INT           AUTO_INCREMENT PRIMARY KEY,
    battery_index         INT           NOT NULL UNIQUE,
    battery_name          VARCHAR(100)  NOT NULL,
    description           VARCHAR(255),
    battery_instructions  TEXT,
    language              CHAR(2)       NOT NULL DEFAULT 'EN',
    run_audio_test        TINYINT(1)    NOT NULL DEFAULT 0,
    footer                VARCHAR(255),
    short_name            VARCHAR(50),
    header_buttons        JSON,
    languages_to_show     JSON,
    redirect_url          VARCHAR(500),
    active                TINYINT(1)    NOT NULL DEFAULT 1,
    created_at            TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- battery_tasks
-- Ordered list of tasks within each battery.
-- sort_order determines the sequence tasks are presented.
-- parameter_id and instruction_set_id are nullable because some
-- tasks (e.g. Language Selection) have no parameters.
-- instruction_set_id points at the set, not one language: the
-- translation is chosen at run time from the participant's language.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS battery_tasks (
    battery_task_id   INT           AUTO_INCREMENT PRIMARY KEY,
    battery_id        INT           NOT NULL,
    task_type_id      INT           NOT NULL,
    sort_order        INT           NOT NULL,
    parameter_id      INT           NULL,
    instruction_set_id INT          NULL,
    icon_name         VARCHAR(100),
    UNIQUE KEY uq_battery_order (battery_id, sort_order),
    FOREIGN KEY (battery_id)     REFERENCES batteries(battery_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (task_type_id)   REFERENCES task_types(task_type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (parameter_id)   REFERENCES task_parameters(parameter_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (instruction_set_id) REFERENCES instruction_sets(instruction_set_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- -------------------------------------------------------
-- admin_users
-- Login accounts for the NCMBatteryWebsite battery-builder UI.
-- Privileged researchers only, not the general public -- no
-- self-registration endpoint; accounts are created directly via
-- admin/create_admin_user.php (a CLI script, never exposed over HTTP).
-- password_hash is a PHP password_hash() bcrypt hash, never a
-- plaintext or reversibly-encrypted password.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_users (
    admin_user_id  INT           AUTO_INCREMENT PRIMARY KEY,
    username       VARCHAR(100)  NOT NULL UNIQUE,
    password_hash  VARCHAR(255)  NOT NULL,
    active         TINYINT(1)    NOT NULL DEFAULT 1,
    created_at     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------
-- Useful indexes for runtime lookups
-- -------------------------------------------------------
CREATE INDEX idx_batteries_index ON batteries(battery_index);
CREATE INDEX idx_battery_tasks_order ON battery_tasks(battery_id, sort_order);
CREATE INDEX idx_params_name ON task_parameters(task_type_id, parameter_name);

-- -------------------------------------------------------
-- View: full battery with task details
-- Use this view in the API to assemble one battery in a
-- single query. Instructions are the battery language's
-- translation (NULL if the set has none in that language).
-- -------------------------------------------------------
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
