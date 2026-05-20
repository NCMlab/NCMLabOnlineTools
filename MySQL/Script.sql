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
)
ON DUPLICATE KEY UPDATE
data = VALUES(data);