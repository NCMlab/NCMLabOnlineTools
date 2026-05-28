# Experiment Manager

The Experiment Manager is designed for longitudinal studies where participants return for multiple sessions over time. It presents a structured list of study phases as buttons, tracks which phases have been completed, and supports re-administration of individual tasks via an embedded User Choice view.

---

## How it works

When the [Central Executive](../platform/central-executive.md) receives `UsageType=ExperimentManager`, it loads a special configuration file that defines the phases of the study. Each phase is a button linked to a battery. When a phase is complete, the button turns green, providing a clear visual record of the participant's progress across visits.

The BitIndex stored in JATOS batch data is the mechanism that tracks completion: each phase has a unique BitIndex value, and when that phase's battery is finished, the corresponding BitIndex is marked as complete.

---

## Configuration file

The Experiment Manager requires an additional configuration file separate from `Batteries.js`. Each row of the phase list is defined by a `List.push()` entry.

```javascript
var List = []

List.push({name: 'Enter Name', battery: '72', row: 1, BitIndex: 1, Phase: 'Name',       Test: 'Name'})
List.push({name: 'Intake',     battery: '2',  row: 2, BitIndex: 2, Phase: 'Intake',     Test: 'IN'})
List.push({name: 'Baseline',   battery: '3',  row: 2, BitIndex: 3, Phase: 'Baseline',   Test: 'BL'})
List.push({name: 'Week 1, Pre',battery: '4',  row: 3, BitIndex: 4, Phase: 'Pre-class',  Test: '1'})
List.push({name: 'Week 1, Post',battery: '5', row: 3, BitIndex: 5, Phase: 'Post-class', Test: '1'})
// ... additional phases ...
List.push({name: 'Pick a Test',battery: '6',  row: 8, BitIndex: 99, ButtonUsageType: 'UserChoice'})

parameters001.push({ index: 3, Title: "What session is this?", List: List })
```

### Entry field reference

| Field | Description |
|-------|-------------|
| `name` | Text displayed on the phase button in the experiment manager UI. |
| `battery` | The `index` of the battery to run when this button is pressed. Must match a battery defined in `Batteries.js`. Note this is a string value (quoted number). |
| `row` | Which row of the UI layout this button occupies. Multiple buttons on the same row appear side by side, which is useful for grouping related phases (e.g., Pre and Post for the same week). |
| `BitIndex` | A unique integer used to mark this phase as complete. When the linked battery finishes, the BitIndex is stored in JATOS batch data. The button turns green when its BitIndex is present in the batch data. |
| `Phase` | A label used internally to identify the study phase (e.g., `'Intake'`, `'Pre-class'`). |
| `Test` | A short code used in data labelling to identify which phase a result belongs to. |
| `ButtonUsageType` | Optional. When set to `'UserChoice'`, clicking this button opens a [User Choice](user-choice.md) view for the linked battery instead of running it in predefined order. Used for the "Pick a Test" button. |

---

## BitIndex tracking

BitIndex is the completion-tracking mechanism. Each phase has a unique BitIndex value (integers 1, 2, 3, etc.). When a phase's battery is completed:

1. The Central Executive writes the phase's BitIndex to JATOS **batch data**.
2. Because batch data persists across sessions, the completion status survives browser closures and device changes.
3. The next time the participant opens the Experiment Manager, the CE reads the batch data, finds all stored BitIndex values, and marks the corresponding buttons green.

The special value `BitIndex: 99` is used for the "Pick a Test" button, which is never "completed" in the same sense — it is always available.

---

## Visual layout

The Experiment Manager screen shows:

- **One button per phase entry**, arranged in the rows defined by the `row` field.
- **Green buttons** for phases whose BitIndex has been marked complete.
- **Grey buttons** for incomplete phases.
- A **"Pick a Test"** button at the bottom of the list (or wherever it appears in the config), which opens a User Choice view.

This layout gives an at-a-glance overview of the participant's study progress across all visits.

---

## The "Pick a Test" button

The last entry in the example config uses `ButtonUsageType: 'UserChoice'`. Clicking this button opens the User Choice icon grid for the specified battery, allowing the administrator to re-administer any individual task from a set without running a full phase battery.

This is useful for:
- Repeating a task that was interrupted during a previous visit
- Administering an optional supplemental task not included in the standard phase batteries
- Re-testing after an anomalous result

---

## Multi-visit workflow

A typical longitudinal session looks like this:

1. The participant opens the same study URL they always use (Personal Multiple link).
2. The Experiment Manager loads and shows the phase buttons, with completed phases already green.
3. The administrator (or the participant, if self-administered) taps the current session's phase button.
4. The linked battery runs to completion.
5. The platform marks the BitIndex for that phase and returns to the Experiment Manager screen.
6. Green buttons now reflect the newly completed phase.

!!! tip "Personal Multiple links"
    Longitudinal studies should use **Personal Multiple** JATOS links, which give each participant a persistent, reusable URL that preserves their worker ID and batch data across visits. See [Backend (NeuroClinic)](../backend.md) for link management.
