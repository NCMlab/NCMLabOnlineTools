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
-- task_instructions
-- One row per named instruction set for a given task type.
-- Instructions differ by language, so language is part of
-- the unique key.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_instructions (
    instruction_id    INT           AUTO_INCREMENT PRIMARY KEY,
    task_type_id      INT           NOT NULL,
    instruction_name  VARCHAR(150)  NOT NULL,
    language          CHAR(2)       NOT NULL DEFAULT 'EN',
    instructions_json JSON          NOT NULL,
    created_at        TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_task_instr (task_type_id, instruction_name, language),
    FOREIGN KEY (task_type_id) REFERENCES task_types(task_type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
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
-- session_chooser_configs
-- Button-grid configuration for the session-picker screen
-- (config/SessionChooser_config.js), one row per named config per
-- language (e.g. "COMM_99" EN and FR, "Mont_99" FR). Not tied to any
-- task_type -- this isn't a task, it's a separate landing page that
-- launches a battery (via battery_index in each List entry) per
-- button clicked.
-- Stored as a single JSON blob per row (like task_parameters), NOT
-- normalized like ui_labels, because unlike ui_labels the internal
-- shape genuinely varies row to row -- each config's List array has
-- a different, config-specific set of fields per entry (some include
-- Phase/Test/ButtonUsageType, some don't), so there's no fixed set of
-- "columns" to normalize into.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS session_chooser_configs (
    session_chooser_config_id INT           AUTO_INCREMENT PRIMARY KEY,
    config_name                VARCHAR(100) NOT NULL,   -- e.g. "COMM_99", "Mont_99" (registration key minus its language prefix)
    language                   CHAR(2)      NOT NULL DEFAULT 'EN',
    config_json                JSON         NOT NULL,   -- [{ index, Title, List: [...], runNameCheck? }] -- kept as the same single-element array the source registers
    created_at                 TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_session_chooser (config_name, language)
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
-- parameter_id and instruction_id are nullable because some
-- tasks (e.g. Language Selection) have no parameters.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS battery_tasks (
    battery_task_id   INT           AUTO_INCREMENT PRIMARY KEY,
    battery_id        INT           NOT NULL,
    task_type_id      INT           NOT NULL,
    sort_order        INT           NOT NULL,
    parameter_id      INT           NULL,
    instruction_id    INT           NULL,
    icon_name         VARCHAR(100),
    UNIQUE KEY uq_battery_order (battery_id, sort_order),
    FOREIGN KEY (battery_id)     REFERENCES batteries(battery_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (task_type_id)   REFERENCES task_types(task_type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (parameter_id)   REFERENCES task_parameters(parameter_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (instruction_id) REFERENCES task_instructions(instruction_id)
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
CREATE INDEX idx_instr_name ON task_instructions(task_type_id, instruction_name, language);

-- -------------------------------------------------------
-- View: full battery with task details
-- Use this view in the API to assemble one battery in a
-- single query.
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
    ti.instruction_name,
    ti.language        AS instruction_language,
    ti.instructions_json
FROM batteries b
JOIN battery_tasks  bt ON bt.battery_id    = b.battery_id
JOIN task_types     tt ON tt.task_type_id  = bt.task_type_id
LEFT JOIN task_parameters  tp ON tp.parameter_id   = bt.parameter_id
LEFT JOIN task_instructions ti ON ti.instruction_id = bt.instruction_id
WHERE b.active = 1
ORDER BY b.battery_index, bt.sort_order;
