# Contributing

Contributions to the 3C Platform are welcome. Whether you are fixing a bug, adding a task, translating content, or improving documentation, this page explains how to get involved.

---

## Reporting issues

If you encounter a bug or have a feature request, please open an issue on the appropriate GitHub repository:

- **Front-end tasks and battery system:** [NCMlab/NCMLabOnlineTools issues](https://github.com/NCMlab/NCMLabOnlineTools/issues)
- **NeuroClinic backend:** [NCMlab/NeuroClinicPublic issues](https://github.com/NCMlab/NeuroClinicPublic/issues)

When reporting a bug, include:

- A clear description of what you expected to happen and what happened instead.
- The browser and operating system you were using.
- Any error messages from the browser console (open DevTools with F12 → Console).
- Steps to reproduce the issue.

---

## Contributing code

1. **Fork** the repository on GitHub.
2. Create a new branch for your change:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Make your changes and commit them with a clear message.
4. Push your branch and open a **pull request** against the `main` branch.
5. Describe what the PR does and link to any relevant issue.

All pull requests are reviewed before merging. Small, focused PRs are easier to review than large ones that touch many files.

---

## Adding a new task

Adding a new task component requires creating four things:

### 1. Task JavaScript file

Create the main task file in the appropriate folder. The task must follow the [six-part structure](tasks/task-structure.md): welcome (optional), instructions (optional), perform task (required), notes (optional), thank-you (optional), scoring (required).

Use an existing task as a template. The common code for welcome, instruction, notes, and thank-you screens is shared — you only need to implement the core task logic and the scoring function.

### 2. Task configuration file

Create `config/<TaskName>.js` with at least one named parameter set. Include all required flags (`ShowWelcome`, `ShowInstructions`, `ShowPractice`, `ShowThankYou`, `AskForNotes`, `InstructionsSpoken`) plus any task-specific parameters. See [Configuration Files](tasks/configuration.md).

### 3. Instruction file

Create `InstructionsAndStimuli/EN/<TaskName>.js` with at least an English instruction file containing `WelcomeText`, `InstructionText`, `ThankYouText`, and `NotesLabel`. Translations for FR, JP, and KR are appreciated but not required for an initial contribution.

### 4. Scoring function

Implement the scoring function inside the task file. The function must accept the raw trial data array and return a result object containing at minimum a total score and the trial-by-trial data. The result object is serialised to JSON and submitted to JATOS at the end of the task.

---

## Adding a new language

To add support for a new language:

1. Create a new folder under `InstructionsAndStimuli/` using the ISO 639-1 language code.
2. Translate all instruction files from the `EN/` folder.
3. Add the language code and button labels to the language configuration.
4. Generate TTS audio files for any tasks with spoken stimuli.

No code changes are required. See [Languages](features/languages.md) for the complete guide.

---

## Code of conduct

This project follows a standard contributor code of conduct. We ask that all contributors interact respectfully and constructively. See the [CODE_OF_CONDUCT.md](https://github.com/NCMlab/NCMLabOnlineTools/blob/main/CODE_OF_CONDUCT.md) file in the repository for the full text.
