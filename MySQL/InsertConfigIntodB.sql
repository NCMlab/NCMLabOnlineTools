INSERT INTO Parameters (Name, data)
VALUES (
  'PANAS_ShortWeekly_001',
  '{
    "questionnaire": ["panasShortWeekly"],
    "criteria": [],
    "variable": [],
    "AskForNotes": false,
    "ShowWelcome": false,
    "ShowThankYou": false,
    "ShowInstructions": false
  }'
) AS new
ON DUPLICATE KEY UPDATE
data = new.data;


-- =====================================
-- BULK PARAMETERS UPSERT
-- =====================================

INSERT INTO Parameters (Name, data) VALUES

-- AES
('AES_001', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('aes'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

-- WEMWBS (final version overwrites earlier)
('WEMWBS_001', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('wemwbs'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

-- Music Demographics
('MusicDemographics_001SHORT', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('IntakeForm_MusicJSONSHORT'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

('MusicDemographics_001', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('IntakeForm_Music'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

-- STAI
('STAI_S_001', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('stai_state'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

('STAI_S_002', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('stai_state'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', TRUE,
  'ShowWelcome', FALSE,
  'ShowThankYou', TRUE,
  'ShowInstructions', FALSE
)),

('STAI_T_001', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('stai_trait'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

-- BDI (special logic)
('BDI_001', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('bdi','gds'),
  'criteria', JSON_ARRAY('( XXX > 17 ) && ( XXX < 31 )','( XXX > 59 )'),
  'variable', 'Age',
  'AskForNotes', TRUE,
  'ShowWelcome', FALSE,
  'ShowThankYou', TRUE,
  'ShowInstructions', FALSE
)),

('BDI_002', JSON_OBJECT(
  'questionnaire', JSON_ARRAY('bdi'),
  'criteria', JSON_ARRAY(),
  'variable', JSON_ARRAY(),
  'AskForNotes', FALSE,
  'ShowWelcome', FALSE,
  'ShowThankYou', FALSE,
  'ShowInstructions', FALSE
)),

-- Core scales
('GDS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('gds'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('GDS_004', JSON_OBJECT('questionnaire', JSON_ARRAY('gds_04'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('GAS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('gas'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CFS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('cfs'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),

-- EQ / PANAS
('EQ5D_001', JSON_OBJECT('questionnaire', JSON_ARRAY('eq5dJSON'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('PANAS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('panasJSON'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('PANAS_Short_001', JSON_OBJECT('questionnaire', JSON_ARRAY('panasShortJSON'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('PANAS_ShortBaseline_001', JSON_OBJECT('questionnaire', JSON_ARRAY('panasShortBaselineJSON'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('PANAS_ShortWeekly_001', JSON_OBJECT('questionnaire', JSON_ARRAY('panasShortWeekly'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('PANAS_TEST', JSON_OBJECT('questionnaire', JSON_ARRAY('panas'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),

-- Misc
('MusicEnterName_001', JSON_OBJECT('questionnaire', JSON_ARRAY('EnterName_Music'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('UCLA_LONELINESS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('UCLAloneliness'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', TRUE)),
('BERKSYME_001', JSON_OBJECT('questionnaire', JSON_ARRAY('berksyme'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('STANFORDSLEEPINESS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('stanfordSleepiness'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CESAM_001', JSON_OBJECT('questionnaire', JSON_ARRAY('cesam'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CESAM_001TEST', JSON_OBJECT('questionnaire', JSON_ARRAY('cesamJSONformSHORT'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('PAES_001', JSON_OBJECT('questionnaire', JSON_ARRAY('paes'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),

-- Montreal set
('PARQ_001', JSON_OBJECT('questionnaire', JSON_ARRAY('parq'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CCICIMAQ_001', JSON_OBJECT('questionnaire', JSON_ARRAY('cci_cimaq'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('COGQUOT_001', JSON_OBJECT('questionnaire', JSON_ARRAY('cog_quot'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('IPAQ_001', JSON_OBJECT('questionnaire', JSON_ARRAY('ipaq'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('SLEEP_001', JSON_OBJECT('questionnaire', JSON_ARRAY('sleep_cimaq2014'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CompExp01_001', JSON_OBJECT('questionnaire', JSON_ARRAY('compExp_part01'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CompExp02_001', JSON_OBJECT('questionnaire', JSON_ARRAY('compExp_part02'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CompExp03_001', JSON_OBJECT('questionnaire', JSON_ARRAY('compExp_part03'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('CompExp04_001', JSON_OBJECT('questionnaire', JSON_ARRAY('compExp_part04'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('ADLPI_001', JSON_OBJECT('questionnaire', JSON_ARRAY('adl_pi'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('FRS_001', JSON_OBJECT('questionnaire', JSON_ARRAY('FRS'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE)),
('SocioMontreal_001', JSON_OBJECT('questionnaire', JSON_ARRAY('Sociodemographic'),'criteria', JSON_ARRAY(),'variable', JSON_ARRAY(),'AskForNotes', FALSE,'ShowWelcome', FALSE,'ShowThankYou', FALSE,'ShowInstructions', FALSE))

AS new
ON DUPLICATE KEY UPDATE
data = new.data;


-- ============= TRAILS ==========
INSERT INTO Parameters (Name, data)
VALUES (
  'TrailMaking_Demonstration',
  JSON_OBJECT(
    'Circles', JSON_ARRAY(
      JSON_OBJECT('centerX',0.2,'centerY',0.2,'radius','radius','label','1'),
      JSON_OBJECT('centerX',0.8,'centerY',0.2,'radius','radius','label','2'),
      JSON_OBJECT('centerX',0.6,'centerY',0.5,'radius','radius','label','3'),
      JSON_OBJECT('centerX',0.8,'centerY',0.8,'radius','radius','label','4'),
      JSON_OBJECT('centerX',0.2,'centerY',0.8,'radius','radius','label','5'),
      JSON_OBJECT('centerX',0.4,'centerY',0.5,'radius','radius','label','6'),
      JSON_OBJECT('centerX',0.2,'centerY',0.5,'radius','radius','label','7')
    ),

    'SuggestedWidth', 450,
    'SuggestedHeight', 450,
    'ShowTimer', TRUE,
    'Duration', 120000,
    'ShowPractice', FALSE,

    'PracticeCircles', JSON_ARRAY(
      JSON_OBJECT('centerX',0.2,'centerY',0.2,'radius','radius','label','1'),
      JSON_OBJECT('centerX',0.8,'centerY',0.2,'radius','radius','label','2'),
      JSON_OBJECT('centerX',0.8,'centerY',0.8,'radius','radius','label','3'),
      JSON_OBJECT('centerX',0.2,'centerY',0.8,'radius','radius','label','4')
    ),

    'PracticeSuggestedWidth', 450,
    'PracticeSuggestedHeight', 450,
    'ShowInstructions', FALSE,
    'InstructionsSpoken', FALSE,
    'ShowWelcome', FALSE,
    'ShowThankYou', TRUE,
    'AskForNotes', FALSE,
    'change_circle_color_only_when_correct', FALSE,
    'RecordGIF', TRUE,
    'shortTitle', 'TrailsA'
  )
) AS new
ON DUPLICATE KEY UPDATE
data = new.data;