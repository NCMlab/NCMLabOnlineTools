# Configuration Files

The 3C Platform uses four distinct types of configuration files. Each type serves a specific purpose, and together they separate task behaviour, content, battery composition, and study structure into independently editable pieces.

---

## Summary

| File type | Purpose | Location |
|-----------|---------|---------|
| Task Configuration | Flags and task-specific parameters | `config/` |
| Task Instructions | All participant-facing text | `InstructionsAndStimuli/` |
| Battery Configuration | Ordered task list, header buttons, redirect | `Batteries/Batteries.js` |
| Experiment Configuration | Multi-visit phase structure, BitIndex tracking | `Batteries/` (separate file per study) |

---

## 1. Task Configuration

**Location:** `config/<TaskName>.js`

**Purpose:** Controls which optional parts of the task run (welcome, instructions, practice, thank-you, notes) and sets all task-specific parameters such as stimulus lists, trial counts, timing, and difficulty settings.

Each task has a named parameter set (e.g., `"WordRecog_Spoken"`) that is referenced in the battery definition. A single configuration file can contain multiple parameter sets for the same task, letting the same task component behave differently in different batteries.

```javascript
var Task_Configuration_Default = {
  ShowWelcome: false,
  ShowInstructions: true,
  ShowPractice: true,
  ShowThankYou: false,
  AskForNotes: false,
  InstructionsSpoken: false,
  // Task-specific parameters below:
  NumberOfTrials: 20,
  StimulusDurationMS: 3000,
  ResponseTimeMS: 5000,
}
```

See [Task Structure](task-structure.md) for a full description of each flag.

---

## 2. Task Instructions

**Location:** `InstructionsAndStimuli/<LANG>/<TaskName>.js` (where `<LANG>` is `EN`, `FR`, `JP`, or `KR`)

**Purpose:** Contains all text shown to the participant: welcome text, instruction text, thank-you text, the label for the notes field, and any stimuli that are text-based (e.g., word lists).

Separating text into instruction files makes translation straightforward — you add a new language folder and translate the files, with no code changes required. See [Languages](../features/languages.md) for details.

```javascript
var Instructions = {
  WelcomeText: "Welcome to the Word Recognition task.",
  InstructionText: "You will see a word on the screen. Press Y if you recognise the word from the earlier study phase, or N if you do not.",
  ThankYouText: "Thank you for completing this task.",
  NotesLabel: "Administrator notes:",
}
```

---

## 3. Battery Configuration

**Location:** `Batteries/Batteries.js`

**Purpose:** Defines the ordered list of tasks for each battery, the header buttons to display, and the post-completion redirect URL. Every battery has a unique numeric `index` that is referenced in the study URL.

```javascript
BatteryList.push({
  index: 123,
  name: 'Cognitive Assessment Battery',
  description: '',
  TaskList: [
    { Task: "Word Recognition",    Parameters: "WordRecog_Spoken", Instructions: "Default", IconName: "Word Recog" },
    { Task: "Digit Span",          Parameters: "DigitSpan_Fwd",    Instructions: "Default", IconName: "Digit Span" },
    { Task: "Matrix Questionnaire",Parameters: "GAS_001",          Instructions: "Default", IconName: "GAS" },
  ],
  BatteryInstructions: "Cognitive Assessment Battery",
  HeaderButtonsToShow: ['Home', 'Quit', 'Stop'],
  Redirect: 'www.uottawa.ca'
});
```

See [Pre-defined Battery](../usage-types/predefined.md) for a complete field reference.

---

## 4. Experiment Configuration

**Location:** `Batteries/<StudyName>_ExperimentConfig.js` (or similar, one file per longitudinal study)

**Purpose:** Defines the phase structure for [Experiment Manager](../usage-types/experiment-manager.md) mode. Each phase is a button linked to a battery, positioned in a row of the UI, and assigned a BitIndex for completion tracking.

```javascript
var List = []
List.push({name: 'Enter Name', battery: '72', row: 1, BitIndex: 1, Phase: 'Name',    Test: 'Name'})
List.push({name: 'Intake',     battery: '2',  row: 2, BitIndex: 2, Phase: 'Intake',  Test: 'IN'})
List.push({name: 'Baseline',   battery: '3',  row: 2, BitIndex: 3, Phase: 'Baseline',Test: 'BL'})
List.push({name: 'Week 1, Pre',battery: '4',  row: 3, BitIndex: 4, Phase: 'Pre-class',Test: '1'})
List.push({name: 'Pick a Test',battery: '6',  row: 8, BitIndex: 99,ButtonUsageType: 'UserChoice'})

parameters001.push({ index: 3, Title: "What session is this?", List: List })
```

---

## How the files reference each other

```
Batteries.js
  └── TaskList entry: Task="Word Recognition", Parameters="WordRecog_Spoken"
        │
        ├── JATOS component name: "Word Recognition"  (must match exactly)
        │
        ├── config/WordRecognition.js
        │     └── parameter set: "WordRecog_Spoken"
        │
        └── InstructionsAndStimuli/EN/WordRecognition.js
              └── instruction set: "Default"
```

1. `Batteries.js` specifies the task component name, the parameter set name, and the instruction set name.
2. The component name must exactly match the name of the JATOS component in your study.
3. The parameter set name is resolved against the task's configuration file in `config/`.
4. The instruction set name is resolved against the task's instruction file in `InstructionsAndStimuli/<LANG>/`.

The active language determines which `<LANG>` folder is used for instruction files. Language selection is handled by the [Central Executive](../platform/central-executive.md) via JATOS batch data.

---

## Modifying configurations without code changes

All four file types are plain JavaScript configuration objects. You can:

- Add a new battery by adding a new `BatteryList.push()` block to `Batteries.js`.
- Add a new parameter set by adding a new named object to a task's config file.
- Translate instructions by creating a new folder under `InstructionsAndStimuli/` and translating the text files.
- Add a new study phase to a longitudinal study by adding a `List.push()` entry to the experiment config.

None of these changes require modifying the task's core JavaScript logic.
