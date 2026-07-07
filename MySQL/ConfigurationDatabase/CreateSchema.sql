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
