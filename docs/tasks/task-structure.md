# Task Structure

Every task in the 3C Platform follows the same six-part structure. Parts 1, 2, 4, and 5 are optional; parts 3 and 6 are always present. This consistent structure means that the code for welcome screens, instruction screens, notes prompts, and thank-you screens is written once and shared across all tasks.

---

## The six parts

| Part | Name | Required? | Visible to participant? |
|------|------|-----------|------------------------|
| 1 | Welcome screen | Optional | Yes |
| 2 | Task instructions | Optional | Yes |
| 3 | Perform task | Required | Yes |
| 4 | User notes | Optional | Yes |
| 5 | Thank-you screen | Optional | Yes |
| 6 | Scoring and data submission | Required | No |

### Part 1: Welcome screen

A brief screen that introduces the task by name. Useful for in-person sessions where the administrator needs a moment to brief the participant before the task begins. Disabled by default for most tasks.

### Part 2: Task instructions

One or more screens of written instructions explaining how to perform the task. These can optionally be read aloud using AI-generated speech (Google TTS). In some tasks, a practice trial follows the instructions before the real task begins.

### Part 3: Perform task

The core task itself. This part is always present and cannot be disabled. All stimuli are presented, responses are collected, and timing data is recorded during this phase.

### Part 4: User notes

An optional free-text field where the administrator can record observations about the session — for example, noting that the participant asked for repetitions, seemed fatigued, or needed clarification. Notes are stored with the result data.

### Part 5: Thank-you screen

A brief end-of-task message. Typically disabled in battery contexts where the next task loads immediately. Useful for single-task deployments or for providing feedback.

### Part 6: Scoring and data submission

Always runs and is never shown to the participant. The task scores all responses, packages the results as JSON, and submits them to JATOS. Because scoring happens automatically at the end of every task, no post-collection data extraction is needed — scores are available immediately in the result data.

---

## The task configuration file

Each task has a configuration file in `config/` that controls which optional parts are enabled and sets task-specific parameters. The configuration object follows this structure:

```javascript
var Task_Configuration_Default = {
  ShowWelcome: false,          // Show the welcome screen (Part 1)
  ShowInstructions: true,      // Show the instruction screens (Part 2)
  ShowPractice: true,          // Include practice trials before the real task
  ShowThankYou: false,         // Show the thank-you screen (Part 5)
  AskForNotes: false,          // Show the user notes field (Part 4)
  InstructionsSpoken: false    // Read instructions aloud using TTS
}
```

### Configuration flags

| Flag | Default | Description |
|------|---------|-------------|
| `ShowWelcome` | `false` | Shows a welcome screen before instructions. Useful for in-person sessions. |
| `ShowInstructions` | `true` | Shows written task instructions. Disable for repeat administrations or when instructions are given verbally. |
| `ShowPractice` | `true` | Includes a practice block before the scored trials. Disable to reduce session time or for repeat administrations. |
| `ShowThankYou` | `false` | Shows an end-of-task message. Usually disabled in battery mode. |
| `AskForNotes` | `false` | Presents a free-text field for administrator observations at the end of the task. |
| `InstructionsSpoken` | `false` | If `true`, the instruction text is also read aloud using TTS audio files. Requires audio files to be present. |

Beyond these flags, the configuration file also contains task-specific parameters such as stimulus lists, timing values, number of trials, and difficulty settings. These vary per task.

---

## Shared common code

The code that renders Parts 1, 2, 4, and 5 is implemented once in a shared module and called by every task component. This means:

- A change to the welcome screen layout applies to all tasks automatically.
- New tasks inherit the full structure without reimplementing it.
- Instruction text is separated into instruction files (in `InstructionsAndStimuli/`) and loaded at runtime, making translation straightforward.

See [Configuration Files](configuration.md) for the full set of file types involved in a task.

---

## Why scoring is always included

Part 6 (scoring and data submission) cannot be disabled. This is a deliberate design choice: all scoring logic is embedded in the task itself and runs automatically at the end of every administration. The benefits are:

- **No post-processing required.** Scores are in the result JSON immediately after submission.
- **Reproducibility.** The scoring algorithm is fixed in the codebase and applied identically to every participant.
- **Transparency.** Researchers can inspect the scoring code directly in the task's JavaScript file.

The only exception is tasks with spoken responses, where automatic speech recognition is used as a first pass but human review is recommended. The NeuroClinic provides an interface for manually correcting those scores. See [Response Types](../features/response-types.md) and [Backend (NeuroClinic)](../backend.md).
