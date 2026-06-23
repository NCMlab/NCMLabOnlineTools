USE survey_db;

-- Survey definitions

-- ===============================
-- WEMWBS
-- ===============================
INSERT INTO survey_definitions (survey_name, survey_acronym, description, version, version_label) VALUES
    ('WEMWBS',
    'WEMWBS',
    'Below are some statements about feelings and thoughts. Please tick the box that best describes your experience over the last 2 weeks.',
    1,
    'short form');

-- Question definitions for WEMWBS
CREATE TEMPORARY TABLE tmp_wemwbs_questions (
    question_code VARCHAR(50),
    question_text VARCHAR(255)
);

INSERT INTO tmp_wemwbs_questions VALUES
('wemwbs001', 'I''ve been feeling optimistic about the future'),
('wemwbs002', 'I''ve been feeling useful'),
('wemwbs003', 'I''ve been feeling relaxed'),
('wemwbs004', 'I''ve been feeling interested in other people'),
('wemwbs005', 'I''ve had energy to spare'),
('wemwbs006', 'I''ve been dealing with problems well'),
('wemwbs007', 'I''ve been thinking clearly'),
('wemwbs008', 'I''ve been feeling good about myself'),
('wemwbs009', 'I''ve been feeling close to other people'),
('wemwbs010', 'I''ve been feeling confident'),
('wemwbs011', 'I''ve been able to make up my own mind about things'),
('wemwbs012', 'I''ve been feeling loved'),
('wemwbs013', 'I''ve been interested in new things'),
('wemwbs014', 'I''ve been feeling cheerful');

INSERT INTO survey_questions (survey_id, question_code, question_text)
SELECT sd.survey_id, tq.question_code, tq.question_text
FROM survey_definitions sd
CROSS JOIN tmp_wemwbs_questions tq
WHERE sd.survey_acronym = 'WEMWBS'
  AND sd.version = 1 AND sd.version_label = 'short form';

-- ===============================
