# Backend (NeuroClinic)

The NeuroClinic is a ReactJS web application that provides a rich interface for reviewing participant data, correcting scores, and managing study links. It is separate from the front-end platform and requires JATOS with a MySQL database. See [Installation](getting-started/installation.md) for setup instructions.

---

## Who it is for

The NeuroClinic is intended for study administrators, researchers, and clinicians who need to:

- Review individual participants' responses and scores after collection.
- Manually correct spoken response scores that require human judgment.
- Monitor study progress and completion rates.
- Manage participant links for ongoing studies.

Participants never interact with the NeuroClinic directly.

---

## Per-participant result review

The main view of the NeuroClinic is a per-participant result page. For each participant you can see:

- **Questionnaire tasks:** every item, the participant's response, and the item score.
- **Cognitive tasks:** a trial-by-trial table showing stimuli, responses, correctness, and reaction times.
- **Summary scores:** total scores and derived measures computed by the task's built-in scoring function.

All data is displayed in the browser without needing to download or process raw files.

---

## Drawing task review

For tasks that involve drawing (e.g., copy a figure, draw a clock), the NeuroClinic displays the **animated GIF** that was recorded during the task. The GIF replays the participant's drawing stroke by stroke, allowing a rater to see not just the final product but the process — including hesitations, revisions, and stroke order.

---

## Verbal task review

Tasks with spoken responses require human review because automatic speech recognition is not perfectly accurate. The NeuroClinic provides a dedicated review interface for these tasks.

### What you see

For each spoken response item, the review interface shows:

- An audio player so you can listen to the participant's actual recording.
- A table of the **top 5 speech recognition hypotheses** ranked by the browser's confidence score.
- The current accepted score.

### Manual scoring correction

To correct a score:

1. Listen to the audio recording.
2. Click the table cell for the hypothesis you want to accept, or type the correct response if none of the hypotheses is accurate.
3. Click Save.

Manually corrected scores are stored with the flag value **`88`** to distinguish them from automatically assigned scores. This allows downstream analyses to identify which scores were machine-generated and which were human-reviewed.

!!! note "Why 88?"
    The value `88` is used as a conventional marker for manual override in the scoring system. It is not a score value — it signals to analysis scripts that a human reviewed and corrected this response.

---

## Adaptive task graphs

For tasks that use adaptive difficulty (see [Adaptive Difficulty](features/adaptive-difficulty.md)), the NeuroClinic shows:

- **Threshold estimate:** the difficulty level at which the participant achieved ~80% accuracy.
- **Load curve:** a graph of difficulty level (e.g., digit span length) plotted over trials, showing how the staircase converged.
- **RT curve:** a graph of reaction time over trials, which can reveal fatigue or strategy effects.

---

## Activity manager

The activity manager provides aggregate statistics for a study:

- **Clicks:** number of times participants opened a task or study link.
- **Completions:** number of participants who fully completed a task or battery.
- **Aborts:** number of sessions that ended before completion.
- **Screening passes and fails:** for studies with a screening questionnaire, counts of how many participants passed or failed the eligibility criteria.

These statistics help monitor study progress and identify tasks with unusually high dropout rates.

---

## Task completion overview

For each task in a study, the NeuroClinic shows:

- **N completed:** total number of participants who finished the task.
- **Score histogram:** a distribution plot of scores across all participants, giving an immediate sense of the group-level performance and score spread.

---

## Study link management

The NeuroClinic includes a table of all worker links for the study.

### Columns

| Column | Description |
|--------|-------------|
| Worker ID | The JATOS-assigned identifier for this participant. |
| Status | Whether the link is "Available" (not yet used) or "In Use" (an active or completed session). |
| Email | Send a study link to a participant via email directly from the interface. |

### JATOS link types

JATOS provides two types of study links relevant to the 3C Platform:

**General Multiple**
- Every participant who follows the link gets a new, unique Worker ID.
- Used for remote studies where you want to distribute one URL to many people and track them as separate participants.
- Suitable for anonymous crowd-sourced recruitment.

**Personal Multiple**
- Each participant has their own dedicated link that always resolves to the same Worker ID.
- Used for in-person and longitudinal studies where participants return for multiple sessions.
- The persistent Worker ID ensures that all sessions from the same participant are linked together in the database.
- Required for [Experiment Manager](usage-types/experiment-manager.md) mode, where BitIndex completion tracking must persist across visits.

!!! tip "Longitudinal studies"
    Use Personal Multiple links for any study where participants return more than once. This is the only link type that maintains participant identity across sessions and supports the BitIndex completion tracking used by the Experiment Manager.
