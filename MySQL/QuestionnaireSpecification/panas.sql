USE survey_db;

-- Survey definitions

-- ===============================
-- PANAS
-- ===============================
INSERT INTO survey_definitions (survey_name, survey_acronym, description, version, version_label) VALUES
    ('Positive and Negative Affect Schedule (PANAS)',
    'PANAS',
    'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.',
    1,
    'short form');

-- Question definitions for PANAS
CREATE TEMPORARY TABLE tmp_panas_questions (
    question_code VARCHAR(50),
    question_text VARCHAR(255)
);

INSERT INTO tmp_panas_questions VALUES
('panas01', 'Interested'),
('panas02', 'Distressed'),
('panas03', 'Excited'),
('panas04', 'Upset'),
('panas05', 'Strong'),
('panas06', 'Guilty'),
('panas07', 'Scared'),
('panas08', 'Hostile'),
('panas09', 'Enthusiastic'),
('panas10', 'Proud'),
('panas11', 'Irritable'),
('panas12', 'Alert'),
('panas13', 'Ashamed'),
('panas14', 'Inspired'),
('panas15', 'Nervous'),
('panas16', 'Determined'),
('panas17', 'Attentive'),
('panas18', 'Jittery'),
('panas19', 'Active'),
('panas20', 'Afraid');

INSERT INTO survey_questions (survey_id, question_code, question_text)
SELECT sd.survey_id, tq.question_code, tq.question_text
FROM survey_definitions sd
CROSS JOIN tmp_panas_questions tq
WHERE sd.survey_acronym = 'PANAS'
  AND sd.version = 1 AND sd.version_label = 'short form';

-- ===============================
