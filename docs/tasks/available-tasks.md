# Available Tasks

The 3C Platform includes 21 task components covering cognitive assessment, memory, language, and questionnaires. Each component can be configured with different parameter sets to produce distinct versions of the task.

---

## Cognitive Tasks

### Stroop

Presents colour names written in coloured ink. Variants test colour naming, word reading, and the interference condition.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/StroopColor.png" alt="Color variant">
    <figcaption>Color</figcaption>
  </figure>
  <figure>
    <img src="../../assets/icons/StroopWord.png" alt="Word variant">
    <figcaption>Word</figcaption>
  </figure>
  <figure>
    <img src="../../assets/icons/StroopColorWord.png" alt="Color/Word variant">
    <figcaption>Color / Word</figcaption>
  </figure>
</div>

**Parameter variants:**

- Color — name the ink colour
- Word — read the word
- Color/Word — name the ink colour when it conflicts with the word (interference condition)

---

### Trail Making

A pen-and-paper analogue implemented on screen. Participants connect numbered or alphanumeric circles in sequence.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/TrailMaking.png" alt="Trail Making">
  </figure>
</div>

**Parameter variants:**

- Version A — connect numbers in ascending order
- Version B — alternate between numbers and letters (1-A-2-B…)
- Mirrored Version A
- Mirrored Version B

---

### Cancellation Task

Participants scan a page of characters and mark all occurrences of a target.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/Cancellation.png" alt="Cancellation Task">
  </figure>
</div>

**Parameter variants:**

- Letter cancellation — mark every instance of a specified letter among distractors

---

### Matrix Reasoning

Participants select which image completes a visual pattern from a set of options.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/MatrixReasoning.png" alt="Matrix Reasoning">
  </figure>
</div>

---

### Card Matching

Participants match cards based on a rule that changes without explicit instruction (Wisconsin Card Sorting Task analogue).

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/CardSort.png" alt="Card Matching">
  </figure>
</div>

---

### Line Bisection

Participants mark the midpoint of a horizontal line. Assesses spatial neglect.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/LineBisection.png" alt="Line Bisection">
  </figure>
</div>

**Response variants:**

- Mouse click
- Touchscreen tap

---

### Delayed Match to Sample

A target is shown, then after a delay, participants select the matching item from an array.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/VerbalDMS.png" alt="Verbal variant">
    <figcaption>Verbal</figcaption>
  </figure>
  <figure>
    <img src="../../assets/icons/SpatialDMS.png" alt="Spatial variant">
    <figcaption>Spatial</figcaption>
  </figure>
</div>

**Parameter variants:**

- Verbal — word stimuli
- Spatial — location or pattern stimuli
- Fixed difficulty
- Adaptive difficulty (single staircase)

---

### Image Matching

Participants are shown a target image and select the matching image from a set of options.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/PatternComparison.png" alt="Image Matching">
  </figure>
</div>

---

### Drawing Tasks

Participants produce drawings either by copying a presented image or following written instructions.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/ShapeCopy.png" alt="Shape Copy">
    <figcaption>Shape Copy</figcaption>
  </figure>
  <figure>
    <img src="../../assets/icons/ClockDrawing.png" alt="Clock Drawing">
    <figcaption>Clock Drawing</figcaption>
  </figure>
</div>

**Features:**

- Sketchpad response (mouse, finger, or stylus)
- Drawing is recorded as a GIF animation
- GIF is stored and viewable in the NeuroClinic

---

### Visual Analog Scales

Participants indicate their response on a continuous scale.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/VASrating.png" alt="Visual Analog Scale">
  </figure>
</div>

**Parameter variants:**

- Vertical scale
- Horizontal scale

---

## Memory Tasks

### Word Recall

Participants study a list of words and then attempt to recall as many as possible.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/WordRecall.png" alt="Word Recall">
  </figure>
</div>

**Parameter variants:**

- Written stimuli / typed response
- Written stimuli / spoken response (speech recognition)
- Audio stimuli / typed response
- Audio stimuli / spoken response
- Administrator-recorded response (administrator marks correct/incorrect)

---

### Word Recognition

Participants are shown words one at a time and indicate whether each word appeared in an earlier study list.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/WordRecog.png" alt="Word Recognition">
  </figure>
</div>

**Parameter variants:**

- Written stimuli
- Spoken stimuli (audio playback)

---

### Digit Span

Participants hear or see a sequence of digits and repeat them back.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/DigitSpan.png" alt="Digit Span">
  </figure>
</div>

**Parameter variants:**

- Forward — repeat in the same order
- Backward — repeat in reverse order
- Written stimuli
- Spoken stimuli (audio playback)
- Fixed difficulty (set span length)
- Adaptive difficulty (staircase adjusts span length; see [Adaptive Difficulty](../features/adaptive-difficulty.md))

---

### Listening Accuracy

Participants listen to a spoken sentence or word and type or select what they heard.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/Listening.png" alt="Listening Accuracy">
  </figure>
</div>

---

## Language Tasks

### Reading Test

Participants read words or sentences aloud. Responses are captured via speech recognition and reviewed by a human administrator.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/ReadingTest.png" alt="Reading Test">
  </figure>
</div>

**Response type:** Spoken (speech recognition + audio recording)

---

### Fluency

Participants generate as many words as possible in a category within a time limit (semantic fluency) or beginning with a letter (phonemic fluency).

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/Fluency.png" alt="Fluency">
  </figure>
</div>

**Response type:** Spoken (speech recognition + audio recording)

---

## Questionnaires

### Questionnaires, Generic

Full SurveyJS questionnaire engine supporting a wide range of question types: rating scales, Likert scales, multiple choice, free text, matrix questions, and branching logic.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/Likert.png" alt="Likert scale">
    <figcaption>Likert</figcaption>
  </figure>
  <figure>
    <img src="../../assets/icons/MultiChoice.png" alt="Multiple choice">
    <figcaption>Multiple choice</figcaption>
  </figure>
  <figure>
    <img src="../../assets/icons/YesNo.png" alt="Yes / No">
    <figcaption>Yes / No</figcaption>
  </figure>
</div>

**Parameter variants:** One entry per questionnaire instrument. Instruments are defined as SurveyJS JSON schemas in the configuration files.

---

### Questionnaires, Matrix

A grid-format questionnaire optimised for instruments where multiple items share the same response scale. Renders as a table with items as rows and response options as columns.

---

### Questionnaires, Form

A form-style questionnaire with individual items answered via pull-down menus or radio buttons.

---

### Questionnaire, Screening

An eligibility-checking questionnaire. Responses are evaluated against inclusion/exclusion criteria. Participants who do not meet criteria are directed to a screening-fail page; those who pass continue to the main battery.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/Screening.png" alt="Screening questionnaire">
  </figure>
</div>

---

### Consent Form

Presents study information and records the participant's informed consent. Consent is stored as part of the result data.

<div class="task-icons">
  <figure>
    <img src="../../assets/icons/ConsentForm.png" alt="Consent Form">
  </figure>
</div>

