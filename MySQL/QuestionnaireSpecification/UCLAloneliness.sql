USE survey_db;

-- Survey definitions

-- ===============================
-- LONELINESS
-- ===============================
INSERT INTO survey_definitions (survey_name, survey_acronym, description, version, version_label) VALUES
    ('UCLA 3-Item Loneliness Scale',
    'Loneliness',
    'When answering the questions, you could take account of the following: there are no right or wrong answers; we would like you to be completely honest; in answering the questions it is best to think of your life as it generally is now (we all have some good or bad days).',
    1,
    'short form');

-- Question definitions for Loneliness
CREATE TEMPORARY TABLE tmp_loneliness_questions (
    question_code VARCHAR(50),
    question_text VARCHAR(255)
);

INSERT INTO tmp_loneliness_questions VALUES
('loneliness001', 'How often do you feel that you lack companionship?'),
('loneliness002', 'How often do you feel left out?'),
('loneliness003', 'How often do you feel isolated from others?');

INSERT INTO survey_questions (survey_id, question_code, question_text)
SELECT sd.survey_id, tq.question_code, tq.question_text
FROM survey_definitions sd
CROSS JOIN tmp_loneliness_questions tq
WHERE sd.survey_acronym = 'Loneliness'
  AND sd.version = 1 AND sd.version_label = 'short form';

-- ===============================
