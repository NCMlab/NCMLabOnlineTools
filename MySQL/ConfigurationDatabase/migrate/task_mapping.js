// Shared by generate_sql.js (config files -> task_parameters/instruction_sets) and
// migrate_batteries.js (Batteries.js -> batteries/battery_tasks), so both resolve
// source files to task types the same way.

'use strict';
const path = require('path');

// Basename (without _Setup.js / _setup.js / _Instructions.js) -> task_types.task_name,
// or an array of task_names when one source file's parameter/instruction sets are shared
// verbatim across multiple task_types (e.g. Stroop_Setup.js has one object per parameter
// set with combined Color*/Word*/ColorWord* fields, read by three separate HTML pages --
// each array entry gets the identical extracted JSON inserted under its own task_type_id).
// Built by comparing config/InstructionsAndStimuli filenames against the rows
// SeedData_TaskTypes.sql currently defines. Files with no entry here have no
// matching task_types row yet (see MANUAL_REVIEW.md) and are not migrated.
const TASK_NAME_BY_BASENAME = {
  Cancellation: 'Cancellation',
  CardSort: 'Card Sort',
  CardSortTask: 'Card Sort',
  ClockDrawing: 'Clock Drawing',
  ConsentForm: 'Consent Form',
  DigitSpan: 'Digit Span',
  EndingPage: 'Ending Page',
  EQ5D: 'EQ5D',
  Fluency: 'Fluency',
  ImageCopy: 'Image Copy',
  IntakeForm: 'Intake Form',
  LanguageSelection: 'Language Selection',
  LineBisection: 'Line Bisection',
  Listening: 'Listening',
  MatrixReasoning: 'Matrix Reasoning',
  PatternComparison: 'Pattern Comparison',
  // Questionnaire_Setup.js / Questionnaire_Instructions.js are loaded by all six questionnaire
  // pages (Questionnaire.html, MatrixQuestionnaire.html, FormQuestionnaire.html, ...), and
  // Batteries.js references the same set names under each of those task names.
  Questionnaire: [
    'Questionnaire',
    'Matrix Questionnaire',
    'Form Questionnaire',
    'Questionnaire JSON',
    'IPAQ Questionnaire',
    'Matrix Questionnaire ExtraQ',
  ],
  // There is no ReadingTest.html: the "Reading Test" component in Batteries.js runs
  // ReadingListeningTest.html, which loads these files.
  ReadingListening: ['Reading/Listening Test', 'Reading Test'],
  Screening: 'Screening',
  SerialSubtraction: 'Serial Subtraction',
  SpatialDMS: ['Spatial DMS', 'TEST Spatial DMS'], // TESTSpatialDMS.html loads the same files
  Stroop: ['Stroop Color', 'Stroop Word', 'Stroop Color/Word'],
  TrailMaking: 'Trail Making',
  VASrating: 'VAS Rating',
  WordRecall: ['Word Recall', 'Word Recall Database'], // WordRecallDatabaseConfig.html reads Word Recall's sets
  WordRecog: 'Word Recognition',
  YesNo: 'Yes No',
  vDMS: 'Verbal DMS', // confirmed correct by Jason, 2026-07-08
};

function baseName(filePath) {
  return path.basename(filePath).replace(/(_(Setup|setup|Instructions|config))?\.js$/, '');
}

// Instruction source files register one object per language: "EN_Instructions_Default",
// "FR_Instructions_Default", sometimes "<LANG>_<Task>_Instructions_<name>". The database
// stores those as one instruction set ("Default") with a translation per language, so the
// name a battery uses (Batteries.js Instructions: "Default") is the set name.
// Names that don't follow the pattern but are translations of another language's set:
const INSTRUCTION_SET_RENAMES = {
  IntakeForm_FaCE: 'IntakeFaCE', // FR_IntakeForm_FaCE <-> EN_Instructions_IntakeFaCE
  OrientationForm_FaCE: 'OrientationFaCE', // FR_OrientationForm_FaCE <-> EN_Instructions_OrientationFaCE
};

/** "EN_Instructions_FaCE" -> "FaCE"; a key with nothing left ("EN_Stroop_Instructions") -> "Default". */
function instructionSetName(key, language) {
  const name = key.replace(new RegExp(`^${language}_`), '').replace(/^(?:\w+?_)?Instructions(?:_|$)/, '');
  return INSTRUCTION_SET_RENAMES[name] || name || 'Default';
}

module.exports = { TASK_NAME_BY_BASENAME, baseName, instructionSetName, INSTRUCTION_SET_RENAMES };
