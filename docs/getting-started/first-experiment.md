# Your First Experiment

This guide walks you through creating a simple battery, running it in JATOS, and understanding what participants experience. Before you start, make sure you have completed the [installation](installation.md).

---

## Step 1: Define your battery

Batteries are defined in `Batteries/Batteries.js`. Open that file and add a new entry using the pattern below.

```javascript
// Build the task list for your battery
var List = []

List.push({
  Task: "Word Recognition",
  Parameters: "WordRecog_Spoken",
  Instructions: "Default",
  IconName: "Word Recog",
});

List.push({
  Task: "Matrix Questionnaire",
  Parameters: "GAS_001",
  Instructions: "Default",
  IconName: "GAS",
});

// Register the battery
BatteryList.push({
  index: 123,
  name: 'My First Study',
  description: '',
  TaskList: List,
  BatteryInstructions: "My First Study",
  HeaderButtonsToShow: ['Home', 'Quit', 'Stop'],
  Redirect: 'www.uottawa.ca'
});
```

### Field reference

**Inside each `List.push()` entry:**

| Field | Description |
|-------|-------------|
| `Task` | The exact name of the JATOS component that runs this task. Must match the component name in your JATOS study. |
| `Parameters` | The name of the parameter set to load from the task's configuration file. Different parameter sets let the same task component run different stimuli or settings. |
| `Instructions` | Which instruction set to display. Use `"Default"` unless you have created custom instruction variants. |
| `IconName` | Short label shown on the task icon in User Choice mode. |

**Inside the `BatteryList.push()` entry:**

| Field | Description |
|-------|-------------|
| `index` | A unique integer that identifies this battery. This number appears in the URL as the `Battery` parameter. |
| `name` | Human-readable name shown in the study header. |
| `description` | Optional free-text description (can be left as an empty string). |
| `TaskList` | The `List` array you built above. |
| `BatteryInstructions` | Key for any battery-level instruction text. |
| `HeaderButtonsToShow` | Array of button names to display at the top of every task page. See [Header Buttons](../tasks/header-buttons.md) for all options. |
| `Redirect` | URL to send participants to when the study is complete. Omit `https://` — the platform adds the protocol automatically. |

!!! tip "Choosing a battery index"
    Pick any integer that is not already used by another battery in `Batteries.js`. Search the file for the number before committing to it.

---

## Step 2: Verify the JATOS components

Each value in the `Task` field must match a component name in your JATOS study. In the JATOS interface:

1. Open your study.
2. Click on the **Components** tab.
3. Confirm that a component named exactly `"Word Recognition"` exists (or whatever names you used).

If a component name in `Batteries.js` does not match a JATOS component name, the Central Executive will skip that task silently.

---

## Step 3: Construct the URL

The Central Executive reads two URL parameters: `UsageType` and `Battery`.

```
https://127.0.0.1/publix/8BexzI7alDM?UsageType=Predefined&Battery=123
```

Replace `8BexzI7alDM` with the study code shown in your JATOS study's **Run** link. Replace `123` with the `index` value you chose.

For a **Pre-defined** battery (tasks run in order), use `UsageType=Predefined`.
For **User Choice** (administrator picks tasks), use `UsageType=UserChoice`.

See [Usage Types](../usage-types/predefined.md) for full details on each mode.

---

## Step 4: Run the study in JATOS

1. In JATOS, open your study and click **Run** (the play button).
2. JATOS will open a new browser tab and load the Central Executive.
3. The Central Executive reads `UsageType=Predefined` and `Battery=123`, builds the task list from your `Batteries.js` entry, and launches the first task.

---

## Step 5: What the participant sees

For a Pre-defined battery:

1. The first task loads immediately. Depending on the task's [configuration](../tasks/configuration.md), the participant may see a welcome screen and then instruction screens before the task begins.
2. After completing the task, the platform scores the responses and submits the result data to JATOS automatically — the participant sees no scoring step.
3. The next task loads without returning to a menu. This continues until all tasks in `TaskList` are complete.
4. At the end of the battery, the participant is shown a thank-you screen and then redirected to the URL specified in `Redirect`.

!!! note "Header buttons"
    The buttons in `HeaderButtonsToShow` appear at the top of every task page. In this example, **Home**, **Quit**, and **Stop** are enabled. See [Header Buttons](../tasks/header-buttons.md) for a description of what each button does.

---

## Next steps

- Learn about [configuration files](../tasks/configuration.md) to customise task parameters.
- Explore [User Choice](../usage-types/user-choice.md) mode for clinician-directed sessions.
- Set up [Experiment Manager](../usage-types/experiment-manager.md) for longitudinal multi-visit studies.
- Review the [available tasks](../tasks/available-tasks.md) to see what components you can add to your battery.
