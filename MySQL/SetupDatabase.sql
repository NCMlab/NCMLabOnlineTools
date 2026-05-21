
-- ======================
-- Battery
-- ======================
CREATE TABLE Battery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    shortName VARCHAR(20),
    Description VARCHAR(255),
    Instructions VARCHAR(255),
    DefaultLanguage ENUM('EN','FR','KR'),
    LanguagesToShow SET('EN','FR','KR'),
    RedirectSite VARCHAR(255),

    INDEX idx_shortName (shortName)
);

-- ======================
-- Component
-- ======================
CREATE TABLE Component (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,

    UNIQUE INDEX idx_component_name (name)
);

-- ======================
-- Parameters
-- ======================
CREATE TABLE Parameters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    data JSON,

    UNIQUE INDEX idx_param_name (Name)
);

-- ======================
-- Instructions
-- ======================
CREATE TABLE Instructions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    WelcomeText VARCHAR(255),
    ThankYouText VARCHAR(255)
);

-- ======================
-- ✅ BRIDGE TABLE (UPGRADED)
-- ======================
CREATE TABLE BatteryComponentBridge (
    id INT AUTO_INCREMENT PRIMARY KEY,

    battery_id INT NOT NULL,
    component_id INT NOT NULL,
    parameter_id INT NOT NULL,
    instruction_id INT NOT NULL,

    -- ✅ NEW FEATURES
    execution_order INT NOT NULL,
    icon_name VARCHAR(255),

    -- ✅ Per-task overrides
    override_parameter_id INT NULL,
    override_instruction_id INT NULL,

    FOREIGN KEY (battery_id) REFERENCES Battery(id),
    FOREIGN KEY (component_id) REFERENCES Component(id),
    FOREIGN KEY (parameter_id) REFERENCES Parameters(id),
    FOREIGN KEY (instruction_id) REFERENCES Instructions(id),
    FOREIGN KEY (override_parameter_id) REFERENCES Parameters(id),
    FOREIGN KEY (override_instruction_id) REFERENCES Instructions(id),

    INDEX idx_battery (battery_id),
    INDEX idx_execution (battery_id, execution_order)
);





-- ==========================
USE my_database;

-- =====================================
-- 1. BASE DATA (DEDUPE TABLES)
-- =====================================

-- Components
INSERT IGNORE INTO Component (name) VALUES
('Session Chooser'),
('Questionnaire'),
('Form Questionnaire'),
('Matrix Questionnaire'),
('Ready Hold'),
('Trail Making'),
('EQ5D');

-- Parameters
INSERT IGNORE INTO Parameters (Name, data) VALUES
('Default', JSON_OBJECT()),
('COMM_99', JSON_OBJECT()),
('MusicEnterName_001', JSON_OBJECT()),
('MusicDemographics_001', JSON_OBJECT()),
('CESAM_001', JSON_OBJECT()),
('WEMWBS_001', JSON_OBJECT()),
('GAS_001', JSON_OBJECT()),
('GDS_001', JSON_OBJECT()),
('UCLA_LONELINESS_001', JSON_OBJECT()),
('PANAS_ShortWeekly_001', JSON_OBJECT()),
('PANAS_ShortBaseline_001', JSON_OBJECT()),
('PAES_001', JSON_OBJECT()),
('TrailMakingA_Default', JSON_OBJECT()),
('TrailMakingB_Default', JSON_OBJECT()),
('TrailMakingA_DefaultMirrorX', JSON_OBJECT()),
('TrailMakingB_DefaultMirrorX', JSON_OBJECT()),
('TrailMakingA_DefaultMirrorY', JSON_OBJECT()),
('TrailMakingB_DefaultMirrorY', JSON_OBJECT()),
('BERKSYME_001', JSON_OBJECT()),
('STANFORDSLEEPINESS_001', JSON_OBJECT()),
('EQ5D_001', JSON_OBJECT());

-- Instructions
INSERT IGNORE INTO Instructions (WelcomeText, ThankYouText) VALUES
('Default', 'Default'),
('DefaultA', 'DefaultA'),
('DefaultB', 'DefaultB');



-- =====================================
-- 2. HELPER LOOKUPS
-- =====================================

-- Use variables for cleaner inserts
SET @defaultInstr = (SELECT id FROM Instructions WHERE WelcomeText='Default' LIMIT 1);
SET @defaultA = (SELECT id FROM Instructions WHERE WelcomeText='DefaultA' LIMIT 1);
SET @defaultB = (SELECT id FROM Instructions WHERE WelcomeText='DefaultB' LIMIT 1);



-- =====================================
-- 3. FUNCTION-LIKE PATTERN (REPEAT)
-- =====================================
-- Pattern:
-- 1. Insert Battery
-- 2. Set @batteryId
-- 3. Insert bridge rows with execution order



-- =====================================
-- BATTERY: Landing Page (9999)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, DefaultLanguage, LanguagesToShow)
VALUES ('Music Motion Landing Page', '', 'Music and Motion Study -- Session Chooser', 'EN', 'EN,FR');

SET @b = LAST_INSERT_ID();

INSERT INTO BatteryComponentBridge
(battery_id, component_id, parameter_id, instruction_id, execution_order, icon_name)
VALUES
(@b,
 (SELECT id FROM Component WHERE name='Session Chooser'),
 (SELECT id FROM Parameters WHERE Name='COMM_99'),
 @defaultInstr,
 1,
 'Chooser');


-- =====================================
-- BATTERY: Enter Name (72)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, LanguagesToShow)
VALUES ('Music Motion: Enter Name','First Name','Music and Motion Study -- Enter Name','EN,FR');

SET @b = LAST_INSERT_ID();

INSERT INTO BatteryComponentBridge VALUES
(NULL,@b,
 (SELECT id FROM Component WHERE name='Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='MusicEnterName_001'),
 @defaultInstr,
 1,
 'First Name',NULL,NULL);


-- =====================================
-- BATTERY: Intake (73)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, LanguagesToShow)
VALUES ('Music Motion: Intake','Intake','Music and Motion Study -- Intake','EN,FR');

SET @b = LAST_INSERT_ID();

INSERT INTO BatteryComponentBridge VALUES
(NULL,@b,
 (SELECT id FROM Component WHERE name='Form Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='MusicDemographics_001'),
 @defaultInstr,
 1,
 'Music Intake',NULL,NULL);


-- =====================================
-- BATTERY: BASELINE (77)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, LanguagesToShow)
VALUES ('Music Motion: Baseline','BL','<h1>Music and Motion Study</h1>','EN,FR');

SET @b = LAST_INSERT_ID();

-- sequence
INSERT INTO BatteryComponentBridge VALUES
(NULL,@b,(SELECT id FROM Component WHERE name='Ready Hold'),
 (SELECT id FROM Parameters WHERE Name='Default'),@defaultInstr,1,'Ready, Hold',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='WEMWBS_001'),@defaultInstr,2,'WEMWBS',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='GAS_001'),@defaultInstr,3,'GAS',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='GDS_001'),@defaultInstr,4,'GDS',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Form Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='UCLA_LONELINESS_001'),@defaultInstr,5,'Loneliness',NULL,NULL);



-- =====================================
-- BATTERY: WEEKLY PRE (75)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, LanguagesToShow)
VALUES ('Music Motion: Weekly Pre','weeklyPre','<h1>Music and Motion Study</h1>','EN,FR');

SET @b = LAST_INSERT_ID();

INSERT INTO BatteryComponentBridge VALUES
(NULL,@b,(SELECT id FROM Component WHERE name='Ready Hold'),
 (SELECT id FROM Parameters WHERE Name='Default'),@defaultInstr,1,'Ready, Hold',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='PANAS_ShortWeekly_001'),@defaultInstr,2,'PANAS, weekly',NULL,NULL);



-- =====================================
-- BATTERY: POST 147 (80)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, LanguagesToShow)
VALUES ('Music Motion: Post Weeks 1, 4, 7','weeklyPost147','<h1>Music and Motion Study</h1>','EN,FR');

SET @b = LAST_INSERT_ID();

INSERT INTO BatteryComponentBridge VALUES
(NULL,@b,(SELECT id FROM Component WHERE name='Ready Hold'),
 (SELECT id FROM Parameters WHERE Name='Default'),@defaultInstr,1,'Ready, Hold',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='PANAS_ShortWeekly_001'),@defaultInstr,2,'PANAS, weekly',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='PAES_001'),@defaultInstr,3,'PAES',NULL,NULL);



-- =====================================
-- BATTERY: ALL TASKS (79)
-- =====================================
INSERT INTO Battery (Name, shortName, Instructions, LanguagesToShow)
VALUES ('Music Motion: All Tasks','All','<h1>Music and Motion Study</h1>','EN,FR');

SET @b = LAST_INSERT_ID();

INSERT INTO BatteryComponentBridge VALUES
(NULL,@b,(SELECT id FROM Component WHERE name='Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='MusicDemographics_001'),@defaultInstr,1,'Music Intake',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Form Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='CESAM_001'),@defaultInstr,2,'CESAM',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='GAS_001'),@defaultInstr,3,'GAS',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='GDS_001'),@defaultInstr,4,'GDS',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='PANAS_ShortBaseline_001'),@defaultInstr,5,'PANAS, baseline',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='WEMWBS_001'),@defaultInstr,6,'WEMWBS',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Form Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='UCLA_LONELINESS_001'),@defaultInstr,7,'Loneliness',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Form Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='BERKSYME_001'),@defaultInstr,8,'Social',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Form Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='STANFORDSLEEPINESS_001'),@defaultInstr,9,'Sleepiness',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='EQ5D'),
 (SELECT id FROM Parameters WHERE Name='EQ5D_001'),@defaultInstr,10,'EQ-5D',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='PANAS_ShortWeekly_001'),@defaultInstr,11,'PANAS, weekly',NULL,NULL),

(NULL,@b,(SELECT id FROM Component WHERE name='Matrix Questionnaire'),
 (SELECT id FROM Parameters WHERE Name='PAES_001'),@defaultInstr,12,'PAES',NULL,NULL);


-- =========== EDIT THE INSTRUCTIONS TABLE ===============


ALTER TABLE Instructions
ADD COLUMN Language ENUM('EN','FR','KR'),
ADD COLUMN Instructions01 MEDIUMTEXT;


ALTER TABLE Instructions
ADD INDEX idx_language (Language);


ALTER TABLE Instructions
MODIFY COLUMN Language ENUM('EN','FR','KR') DEFAULT 'EN';
