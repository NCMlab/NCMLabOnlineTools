# Pre-defined Battery

The Pre-defined usage type runs tasks in a fixed, predetermined order. Once a participant starts, they move through each task in sequence without any choice or branching. This is the most common mode for standard research studies and clinical assessments.

---

## How it works

When the [Central Executive](../platform/central-executive.md) receives `UsageType=Predefined`, it looks up the battery by its `index` value, builds the task list in the order defined in `Batteries.js`, and launches each task automatically after the previous one completes.

The participant never sees a task selection screen — they simply move from one task to the next.

---

## Battery configuration

Batteries are defined in `Batteries/Batteries.js`. Each battery is built in two steps: first you define the task list, then you register the battery.

```javascript
// Step 1: Build the task list
var List = []

List.push({
  Task: "Word Recognition",        // Name of the JATOS component
  Parameters: "WordRecog_Spoken",  // Parameter set from the task's config file
  Instructions: "Default",         // Instruction set to display
  IconName: "Word Recog",          // Short label for User Choice icon grid
});

List.push({
  Task: "Matrix Questionnaire",
  Parameters: "GAS_001",
  Instructions: "Default",
  IconName: "GAS",
});

// Step 2: Register the battery
BatteryList.push({
  index: 123,                                   // Unique integer, used in the URL
  name: 'Neural Cognitive Mapping Lab',         // Study name shown in the header
  description: '',                              // Optional description
  TaskList: List,                               // The task list you built above
  BatteryInstructions: "Neural Cognitive Mapping Lab",  // Battery-level instruction key
  HeaderButtonsToShow: ['Home', 'Quit', 'Stop'],        // Buttons shown on every task page
  Redirect: 'www.uottawa.ca'                   // URL to redirect to on completion
});
```

### Task list fields

| Field | Type | Description |
|-------|------|-------------|
| `Task` | String | The exact name of the JATOS component that implements this task. Must match the component name in JATOS precisely (case-sensitive). |
| `Parameters` | String | The parameter set name to load from the task's configuration file (`config/<TaskName>.js`). Different parameter sets run the same task with different stimuli, timing, or settings. |
| `Instructions` | String | Which instruction set to use. `"Default"` loads the standard instructions for this task and language. Custom instruction variants can be created and referenced by name. |
| `IconName` | String | Short label displayed on the task button when the battery is run in [User Choice](user-choice.md) mode. Has no effect in Pre-defined mode but should still be set. |

### Battery-level fields

| Field | Type | Description |
|-------|------|-------------|
| `index` | Integer | Unique identifier for this battery. This is the value passed in the `Battery=` URL parameter. No two batteries in `Batteries.js` should share an index. |
| `name` | String | Human-readable study name shown in the page header during tasks. |
| `description` | String | Optional free-text description. Can be an empty string. |
| `TaskList` | Array | The ordered array of task objects built above. Tasks run in the order they appear in this array. |
| `BatteryInstructions` | String | Key for battery-level instructions shown before the first task (if configured). |
| `HeaderButtonsToShow` | Array | Which header buttons to display on every task page. See [Header Buttons](../tasks/header-buttons.md) for all available options. |
| `Redirect` | String | URL (without protocol) to redirect participants to when the battery is complete. The platform prepends `https://` automatically. |

---

## Selecting a battery via URL

The `Battery` URL parameter specifies which entry in `BatteryList` to load by its `index` value.

```
https://your-server.ca/publix/STUDY_CODE?UsageType=Predefined&Battery=123
```

- `UsageType=Predefined` tells the Central Executive to run tasks in sequence.
- `Battery=123` loads the battery with `index: 123`.

Change `Battery=123` to any other index value to run a different battery with the same study link format.

---

## Task ordering

Tasks run in the order they appear in the `TaskList` array — top to bottom, exactly as written. To change the order, reorder the `List.push()` calls in `Batteries.js`.

!!! tip "Reusing tasks"
    The same task component can appear multiple times in one battery with different `Parameters` values. For example, you might run Word Recall with a short word list early in the session and with a long word list later.

---

## What the participant sees

In Pre-defined mode, participants experience a seamless sequence:

1. The first task loads with its welcome and instruction screens (if enabled in the task config).
2. After completing the task, scoring runs silently in the background and data is submitted to JATOS.
3. The next task loads immediately.
4. This continues until all tasks are done.
5. The participant is shown a thank-you message and redirected to the `Redirect` URL.

The participant has no visibility into what tasks are coming or how many remain.
