-- One-time upgrade for databases created before task_types.parameter_schema existed
-- (CreateSchema.sql now includes it for new installs). MySQL 8.0 has no
-- "ADD COLUMN IF NOT EXISTS", so this checks information_schema first and is safe to re-run.
USE ncmbattery_config;

SET @has_col = (
    SELECT COUNT(*) FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'task_types' AND COLUMN_NAME = 'parameter_schema'
);
SET @ddl = IF(@has_col = 0,
    'ALTER TABLE task_types ADD COLUMN parameter_schema JSON NULL AFTER icon_file',
    'SELECT ''parameter_schema already exists'' AS note');
PREPARE stmt FROM @ddl;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
