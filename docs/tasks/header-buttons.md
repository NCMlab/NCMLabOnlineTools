# Header Buttons

The 3C Platform displays a row of buttons at the top of every task page. These buttons give administrators and participants ways to navigate, interrupt, or end the session. Which buttons appear is controlled per-battery in the `HeaderButtonsToShow` field of the battery configuration.

---

## Configuring header buttons

In `Batteries/Batteries.js`, add the names of the buttons you want to show:

```javascript
BatteryList.push({
  index: 123,
  // ...
  HeaderButtonsToShow: ['Home', 'Quit', 'Stop'],
});
```

Only the buttons listed here will appear. Omit a button name to hide it entirely.

---

## Button reference

### Restart

**What it does:** Reloads the current task from the beginning, discarding any responses collected so far in this task.

**Confirmation:** Yes — the participant (or administrator) is shown a confirmation alert before the restart occurs.

**When to include it:** Useful for in-person sessions where a task needs to be re-started due to a distraction or setup error. Not recommended for unsupervised remote studies, as participants could use it to restart tasks indefinitely.

---

### Home

**What it does:** Ends the current task and returns the participant to the [Experiment Manager](../usage-types/experiment-manager.md) phase list.

**Confirmation:** No confirmation prompt.

**When to include it:** Include when running in Experiment Manager mode so administrators can navigate between phases. In Pre-defined or User Choice mode this button is less relevant, but it can still be shown if the workflow requires returning to an overview screen.

---

### Info

**What it does:** Opens a pop-up dialog with background or contextual information about the current task. The content of the pop-up is defined in the task's configuration.

**Confirmation:** No confirmation prompt.

**When to include it:** Useful for clinical settings where the administrator may need a quick reference on what the task measures, typical norms, or administration instructions.

---

### Stop

**What it does:** Ends the current session and **keeps** all data collected so far. Any tasks that were completed have their results stored in JATOS. The current (incomplete) task's data is not saved.

**Confirmation:** Yes — a confirmation alert is shown before the session ends.

**When to include it:** Include in most studies. Stop allows an early end to the session while preserving the work that has been done. It is the appropriate choice when a participant becomes fatigued or needs to leave.

---

### Quit

**What it does:** Ends the current session and **deletes** all collected data from this session. JATOS marks the worker as aborted.

**Confirmation:** Yes — a confirmation alert is shown, and the consequences (data loss) should be clear from the prompt text.

**When to include it:** Include when you want to give administrators a clean abort option — for example, if the session was started for the wrong participant or if there was a technical problem that invalidates all responses. Use with caution in unsupervised remote studies.

!!! warning "Data is permanently deleted"
    Clicking Quit and confirming will permanently delete the result data for the current session. This action cannot be undone.

---

### Skip

**What it does:** Skips the current task and advances to the next task in the battery. No data is submitted for the skipped task.

**Confirmation:** No confirmation prompt (this may vary by task configuration).

**When to include it:** Useful in User Choice mode or clinician-administered sessions where a task needs to be bypassed. Also helpful if a task fails to load correctly and the administrator needs to continue the session.

---

### Language dropdown

**What it does:** Displays a dropdown menu in the top-right corner of the task page, allowing the participant or administrator to switch the administration language. The available languages are English, French, Japanese, and Korean.

**Persistence:** The selected language is stored in JATOS batch data and persists across sessions. When the participant returns for a follow-up visit, their language preference is automatically restored.

**When to include it:** Include in any study where participants may prefer a language other than English. The dropdown is always visible once included — it does not interrupt the task but is available at any point.

**Behaviour:** Switching languages during a task does not restart the task. The new language takes effect at the next instruction screen or new task.

---

## Summary table

| Button | Keeps data? | Confirmation? | Typical use |
|--------|------------|---------------|-------------|
| Restart | No (current task only) | Yes | Re-start a task in person |
| Home | Yes (completed tasks) | No | Return to Experiment Manager |
| Info | — (no data change) | No | View task background information |
| Stop | Yes | Yes | End session early, keep results |
| Quit | No | Yes | Abort session, delete results |
| Skip | No (current task) | No | Skip to next task |
| Language | — (no data change) | No | Switch administration language |
