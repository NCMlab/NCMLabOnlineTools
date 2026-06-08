# User Choice

User Choice mode gives an administrator or clinician direct control over which task to run during a session. Instead of advancing automatically through a fixed sequence, the system presents a grid of task icons after each completed task, and the administrator selects what to run next.

---

## How it works

When the [Central Executive](../platform/central-executive.md) receives `UsageType=UserChoice`, it loads the battery definition from `Batteries.js` (identified by the `Battery` URL parameter) and renders all tasks in the `TaskList` as a grid of clickable icon buttons.

After each task completes, the participant returns to the icon grid. The administrator taps or clicks the next task to run. This cycle continues until the administrator ends the session.

---

## The icon grid

Each task in the `TaskList` array appears as a labelled button. The button label comes from the `IconName` field in the task definition:

```javascript
List.push({
  Task: "Digit Span",
  Parameters: "DigitSpan_Forward_Audio",
  Instructions: "Default",
  IconName: "Digit Span Fwd",  // This text appears on the button
});
```

Buttons for tasks that have already been completed in the current session are visually distinguished (e.g., greyed out or marked), so the administrator can track what has been done.

---

## The URL

The only difference between Pre-defined and User Choice mode is the `UsageType` parameter:

```
https://your-server.ca/publix/STUDY_CODE?UsageType=UserChoice&Battery=123
```

The `Battery` parameter and the `Batteries.js` definition are identical. You do not need to create a separate battery entry for User Choice mode — the same battery can be run in either mode depending on the URL.

---

## When to use User Choice

**Face-to-face clinical assessment.** A neuropsychologist administers an assessment in person, selecting tasks based on how the participant is performing or which domains need to be evaluated.

**Expert judgment.** The administrator may decide mid-session to skip a fatiguing task, add an extra task, or re-administer a task with different parameters.

**Re-administration.** A participant has already completed a full battery but needs one specific task repeated (for example, to verify a result or administer a practice version). User Choice mode makes it easy to run just that task without re-running the entire battery.

**Flexible research protocols.** Studies where the task set is partially determined during the session rather than fully pre-specified.

---

## Multiple parameter versions

A task component can appear more than once in the same `TaskList` with different `Parameters` values. In User Choice mode, each version appears as a separate button with its own `IconName`. This lets an administrator choose between, for example, a short version and a long version of the same task, or forward and backward variants of digit span.

```javascript
List.push({
  Task: "Digit Span",
  Parameters: "DigitSpan_Forward_Audio",
  Instructions: "Default",
  IconName: "DS Forward",
});

List.push({
  Task: "Digit Span",
  Parameters: "DigitSpan_Backward_Audio",
  Instructions: "Default",
  IconName: "DS Backward",
});
```

Both buttons appear in the grid, and the administrator can run either or both.

---

## Relationship to Experiment Manager

The [Experiment Manager](experiment-manager.md) mode includes a "Pick a Test" button at the bottom of its phase list. Clicking that button opens a User Choice view over a specified battery — effectively embedding User Choice within a longitudinal study workflow.
