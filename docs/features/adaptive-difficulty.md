# Adaptive Difficulty

Adaptive difficulty adjusts the challenge level of a task in real time based on the participant's ongoing performance. This allows the platform to efficiently estimate an individual's ability level without requiring a fixed, uniform set of trials for everyone.

---

## What it is

In a fixed-difficulty task, every participant receives the same stimulus sequence regardless of how they perform. Adaptive tasks instead adjust the difficulty of each trial based on whether the participant succeeded or failed on recent trials. The goal is to converge on the difficulty level at which the participant performs at a target accuracy rate — typically around 80%.

Adaptive procedures are particularly valuable when participants span a wide ability range, because a fixed-difficulty set would be either too easy for high-ability participants or too hard for low-ability participants.

---

## Current implementation

The platform currently implements a **single staircase procedure** using the **3-up/1-down rule**:

- After **3 consecutive correct responses**, difficulty increases by one step.
- After **1 incorrect response**, difficulty decreases by one step.

The 3-up/1-down rule targets the 80th percentile accuracy level — that is, the procedure converges on the difficulty at which the participant gets approximately 80% of trials correct.

### What counts as a "difficulty step"

The definition of a difficulty step depends on the task:

- **Digit Span:** the length of the digit sequence (e.g., 4 digits → 5 digits → 6 digits).
- **Delayed Match to Sample:** the number of items in the array or the complexity of the spatial pattern.

---

## Tasks that support adaptive difficulty

| Task | Adaptive parameter |
|------|------------------|
| Digit Span | Sequence length (span) |
| Delayed Match to Sample (Verbal) | Load (number of items) |
| Delayed Match to Sample (Spatial) | Load (complexity) |

Both fixed and adaptive versions of these tasks are available as separate parameter sets in the task configuration. See [Available Tasks](../tasks/available-tasks.md) for the full list of parameter variants.

---

## Output: adaptive task parameters

For adaptive tasks, the result data includes:

- The full trial-by-trial record of difficulty levels, stimuli, and responses.
- The estimated threshold — the difficulty level corresponding to ~80% accuracy, derived from the staircase trajectory.
- A **load curve** — a graph showing difficulty level over trials.
- An **RT curve** — a graph showing reaction time over trials.

These outputs are viewable in the [NeuroClinic backend](../backend.md).

---

## Future directions

The current staircase implementation is a starting point. Planned enhancements include:

- **Multiple staircases** — interleaved staircases that estimate different ability levels simultaneously or track different stimulus dimensions independently.
- **Bayesian adaptive procedures (QUEST+)** — a Bayesian method that more efficiently estimates psychometric function parameters, including threshold, slope, and lapse rate, by selecting the most informative stimulus on each trial.

These additions will be incorporated into the existing task components and will not require changes to battery configuration files.
