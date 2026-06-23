USE survey_db;

-- Survey definitions

-- ===============================
-- GAS
-- ===============================
INSERT INTO survey_definitions (survey_name, survey_acronym, description, version, version_label) VALUES
    ('Geriatric Anxiety Scale',
    'gas',
    'Below is a list of common symptoms of anxiety or stress. Please read each item in the list carefully. Indicate how often you have experienced each symptom during the PAST WEEK, INCLUDING TODAY by checking under the corresponding answer.',
    1,
    'short form');

-- Question definitions for GAS
CREATE TEMPORARY TABLE tmp_gas_questions (
    question_code VARCHAR(50),
    question_text VARCHAR(255)
);

INSERT INTO tmp_gas_questions VALUES
('gas01', 'I was irritable.'),
('gas02', 'I felt detached or isolated from others.'),
('gas03', 'I felt like I was in a daze.'),
('gas04', 'I had a hard time sitting still.'),
('gas05', 'I could not control my worry.'),
('gas06', 'I felt restless, keyed up, or on edge.'),
('gas07', 'I felt tired.'),
('gas08', 'My muscles were tense.'),
('gas09', 'I felt like I had no control over my life.'),
('gas10', 'I felt like something terrible was going to happen to me.');

INSERT INTO survey_questions (survey_id, question_code, question_text)
SELECT sd.survey_id, tq.question_code, tq.question_text
FROM survey_definitions sd
CROSS JOIN tmp_gas_questions tq
WHERE sd.survey_acronym = 'GAS'
  AND sd.version = 1 AND sd.version_label = 'short form';

-- ===============================
