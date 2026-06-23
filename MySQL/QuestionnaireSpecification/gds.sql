USE survey_db;

-- Survey definitions

-- ===============================
-- GDS
-- ===============================
INSERT INTO survey_definitions (survey_name, survey_acronym, description, version, version_label) VALUES
    ('Geriatric Depression Scale',
    'GDS',
    'Choose the best answer for how you felt over the past week.',
    1,
    'short form');

-- Question definitions for GDS
CREATE TEMPORARY TABLE tmp_gds_questions (
    question_code VARCHAR(50),
    question_text VARCHAR(255)
);

INSERT INTO tmp_gds_questions VALUES
('gds01', 'Are you basically satisfied with your life?'),
('gds02', 'Have you dropped many of your activities and interests?'),
('gds03', 'Do you feel that your life is empty?'),
('gds04', 'Do you often get bored?'),
('gds05', 'Are you in good spirits most of the time?'),
('gds06', 'Are you afraid that something bad is going to happen to you?'),
('gds07', 'Do you feel happy most of the time?'),
('gds08', 'Do you often feel helpless?'),
('gds09', 'Do you prefer to stay home, rather than going out and doing things?'),
('gds10', 'Do you feel that you have more problems with memory than most?'),
('gds11', 'Do you think is it wonderful to be alive now?'),
('gds12', 'Do you feel worthless the way you are now?'),
('gds13', 'Do you feel full of energy?'),
('gds14', 'Do you feel that your situation is hopeless?'),
('gds15', 'Do you think that most people are better off than you are?');

INSERT INTO survey_questions (survey_id, question_code, question_text)
SELECT sd.survey_id, tq.question_code, tq.question_text
FROM survey_definitions sd
CROSS JOIN tmp_gds_questions tq
WHERE sd.survey_acronym = 'GDS'
  AND sd.version = 1 AND sd.version_label = 'short form';

-- ===============================
