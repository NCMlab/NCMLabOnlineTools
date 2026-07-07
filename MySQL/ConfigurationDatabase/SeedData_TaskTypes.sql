-- ============================================================
-- Seed data: task_types table
-- Inserts one row for each task type found in html/JATOS/
-- Run AFTER CreateSchema.sql
-- ============================================================

USE ncmbattery_config;

INSERT INTO task_types (task_name, html_file, icon_file) VALUES
('Card Sort',           'html/JATOS/CardSort.html',          'assets/Icons/CardSort.png'),
('Clock Drawing',       'html/JATOS/ClockDrawing.html',      'assets/Icons/ClockDrawing.png'),
('Consent Form',        'html/JATOS/ConsentForm.html',       'assets/Icons/ConsentForm.png'),
('Digit Span',          'html/JATOS/DigitSpan.html',         'assets/Icons/DigitSpan.png'),
('Email Entry',         'html/JATOS/EmailEntry.html',        NULL),
('Ending Page',         'html/JATOS/EndingPage.html',        NULL),
('Fluency',             'html/JATOS/Fluency.html',           'assets/Icons/Fluency.png'),
('Form Questionnaire',  'html/JATOS/FormQuestionnaire.html', NULL),
('Intake Form',         'html/JATOS/IntakeForm.html',        NULL),
('Language Selection',  'html/JATOS/LanguageSelection.html', 'assets/Icons/LanguageSelection.png'),
('Likert',              'html/JATOS/Likert.html',            'assets/Icons/Likert.png'),
('Line Bisection',      'html/JATOS/LineBisection.html',     'assets/Icons/LineBisection.png'),
('Listening',           'html/JATOS/Listening.html',         'assets/Icons/Listening.png'),
('Matrix Questionnaire','html/JATOS/MatrixQuestionnaire.html','assets/Icons/MatrixReasoning.png'),
('Matrix Reasoning',    'html/JATOS/MatrixReasoning.html',   'assets/Icons/MatrixReasoning.png'),
('Pattern Comparison',  'html/JATOS/PatternComparison.html', 'assets/Icons/PatternComparison.png'),
('Questionnaire',       'html/JATOS/Questionnaire.html',     NULL),
('Reading Test',        'html/JATOS/ReadingTest.html',       'assets/Icons/ReadingTest.png'),
('Screening',           'html/JATOS/Screening.html',         'assets/Icons/Screening.png'),
('Serial Subtraction',  'html/JATOS/SerialSubtraction.html', 'assets/Icons/SerialSubtraction.png'),
('Spatial DMS',         'html/JATOS/SpatialDMS.html',        'assets/Icons/SpatialDMS.png'),
('Trail Making',        'html/JATOS/TrailMaking.html',       'assets/Icons/TrailMaking.png'),
('VAS Rating',          'html/JATOS/VASrating.html',         'assets/Icons/VASrating.png'),
('Verbal DMS',          'html/JATOS/VerbalDMS.html',         'assets/Icons/VerbalDMS.png'),
('Word Recall',         'html/JATOS/WordRecall.html',        'assets/Icons/WordRecall.png'),
('Word Recognition',    'html/JATOS/WordRecog.html',         'assets/Icons/WordRecog.png'),
('Yes No',              'html/JATOS/YesNo.html',             'assets/Icons/YesNo.png');

-- ============================================================
-- Example: Insert one parameter set for Word Recall
-- (RAVLT_Spoken_Immediate from config/WordRecall_Setup.js)
-- ============================================================

INSERT INTO task_parameters (task_type_id, parameter_name, language, parameters_json)
SELECT
    tt.task_type_id,
    'RAVLT_Spoken_Immediate',
    'EN',
    JSON_OBJECT(
        'FolderName',                  'Set001/',
        'WordList',                    'RAVLT',
        'FileExtension',               '.wav',
        'NBlocks',                     1,
        'BListFlag',                   TRUE,
        'AudioPresentation',           TRUE,
        'VisualPresentation',          TRUE,
        'RecallType',                  'Spoken',
        'RecallDuration',              60,
        'DelayBeforeShowingDoneButton',8,
        'TimePerWord',                 500,
        'DelayedRecallFlag',           FALSE,
        'ShowWelcome',                 TRUE,
        'WelcomeSpoken',               FALSE,
        'WelcomeAudio',                'assets/SoundFiles/Instructions/Welcome_WordRecall.wav',
        'ShowThankYou',                TRUE,
        'ShowInstructions',            TRUE,
        'InstructionsSpoken',          FALSE,
        'AskForNotes',                 FALSE,
        'RecordAUDIO',                 TRUE,
        'Instructions01Audio',         JSON_ARRAY(
            'assets/SoundFiles/Instructions/WordRecall_Instructions01A.wav',
            'assets/SoundFiles/Instructions/WordRecall_Instructions01B.wav'
        ),
        'Instructions01Time',          JSON_ARRAY(10000, 8000),
        'Instructions02Audio',         JSON_ARRAY(
            'assets/SoundFiles/Instructions/WordRecall_Instructions02A.wav',
            'assets/SoundFiles/Instructions/WordRecall_Instructions02B.wav'
        ),
        'Instructions02Time',          JSON_ARRAY(10000, 8000),
        'Instructions03Audio',         JSON_ARRAY(
            'assets/SoundFiles/Instructions/WordRecall_Instructions03A.wav',
            'assets/SoundFiles/Instructions/WordRecall_Instructions03B.wav'
        ),
        'Instructions03Time',          JSON_ARRAY(10000, 8000),
        'Instructions04Audio',         JSON_ARRAY(
            'assets/SoundFiles/Instructions/WordRecall_Instructions04.wav'
        ),
        'Instructions04Time',          JSON_ARRAY(10000)
    )
FROM task_types tt
WHERE tt.task_name = 'Word Recall';

-- ============================================================
-- Example: Insert one instruction set for Word Recall
-- (EN_Instructions_Default from WordRecall_Instructions.js)
-- ============================================================

INSERT INTO task_instructions (task_type_id, instruction_name, language, instructions_json)
SELECT
    tt.task_type_id,
    'Default',
    'EN',
    JSON_OBJECT(
        'WelcomeText',          JSON_ARRAY(JSON_OBJECT('page', 'Welcome to the Word Recall Task.')),
        'RecallInstructions',   'Please repeat the entire word list',
        'GetReadyInstructions', 'Get ready for the next trial',
        'Instructions01',       JSON_ARRAY(
            JSON_OBJECT('page', 'You are going to hear a list of words, this is <b>List A</b>. Listen carefully. At the end of the list you are to repeat back as many words as you can recall.'),
            JSON_OBJECT('page', 'It does not matter in what order you repeat them, just try to recall as many as you can.')
        ),
        'Instructions02',       JSON_ARRAY(
            JSON_OBJECT('page', ''),
            JSON_OBJECT('page', 'Now you will hear the same words again, and once again, at the end of the list repeat back as many words as you can recall, including words you said the first time. '),
            JSON_OBJECT('page', 'It does not matter in what order you say them, just say as many words as you can remember, whether or not you said them before.')
        ),
        'Instructions03',       JSON_ARRAY(
            JSON_OBJECT('page', ''),
            JSON_OBJECT('page', 'Now you will hear a second list of words, this is <b>List B</b>. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember.'),
            JSON_OBJECT('page', 'It does not matter in what order you repeat them, just try to remember as many as you can.')
        ),
        'Instructions04',       JSON_ARRAY(
            JSON_OBJECT('page', ''),
            JSON_OBJECT('page', 'Now repeat back all the words you can recall from <b>List A</b>, the list you heard a number of times.')
        ),
        'Instructions05',       JSON_ARRAY(
            JSON_OBJECT('page', ''),
            JSON_OBJECT('page', 'Get ready to recall the words you just heard.')
        ),
        'InstructionsDelayed',  JSON_ARRAY(
            JSON_OBJECT('page', 'Recall all the words you can remember from the list you heard a number of times, <b>List A</b>.')
        ),
        'WordPrompt',           'empty',
        'ThankYouText',         JSON_ARRAY(JSON_OBJECT('page', 'Thank you')),
        'IntrusionPrompt',      'Intrusion? (Words not in the list)',
        'WordRecallPrompt',     'Which words were recalled?'
    )
FROM task_types tt
WHERE tt.task_name = 'Word Recall';
