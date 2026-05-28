# Response Types

The 3C Platform supports a range of response input methods to accommodate different task requirements, participant populations, and administration settings.

---

## Keyboard

Participants press a designated key to respond. The platform records which key was pressed and the reaction time. Keyboard responses are used for tasks with a small, well-defined response set (e.g., press Y for yes, N for no; press the space bar when a target appears).

---

## Mouse clicks

Participants click a button or area on the screen. Used for multiple-choice questions, selection tasks, and any task where the response is choosing from visible options.

---

## Touchscreen

All mouse-click tasks also work with touchscreen input. Participants tap buttons or areas on the screen with a finger. The platform detects touch events natively, so the same task code works on both a desktop with a mouse and a tablet with a touchscreen.

---

## Drawing

Participants draw on a sketchpad element using a mouse, finger, or stylus. Used for:

- **Copying a presented image** — participants reproduce a figure shown on screen.
- **Following written instructions** — participants draw based on a verbal or written prompt (e.g., "draw a clock showing 10 past 11").

The drawing is captured as a time-ordered sequence of strokes and saved as an **animated GIF** that replays the participant's drawing process. The GIF is stored in JATOS and viewable in the NeuroClinic. See [Backend (NeuroClinic)](../backend.md) for the review interface.

---

## Spoken responses

Spoken response tasks use the **annyang** library for browser-based speech recognition. This enables tasks like Fluency, Word Recall (verbal), and Reading tests to capture verbal responses without additional hardware.

### How it works

1. When the spoken response phase begins, the browser requests microphone access. The participant must grant this permission.
2. A flashing indicator on screen shows that the microphone is active and recording.
3. The browser's built-in speech recognition engine (via the Web Speech API) transcribes speech in real time.
4. When the participant finishes speaking (or the time limit expires), they press a **"Finished"** button.
5. The platform stores the **top 5 speech recognition hypotheses** ranked by confidence score, along with the audio recording.
6. All spoken response data is submitted to JATOS with the result JSON.

### Internet requirement

Browser speech recognition relies on external servers (Google's speech API in Chrome, Microsoft in Edge). An active internet connection is required for spoken response tasks. These tasks are not available in [offline LAN mode](../platform/administration.md) without internet access.

### Audio recording

In addition to speech recognition results, the platform records the raw audio. This audio is stored in JATOS and accessible through the NeuroClinic, allowing an administrator to listen to the participant's actual response.

### Human review requirement

Automatic speech recognition is not perfectly accurate. For all spoken response tasks, human review of the recognised text is recommended. The NeuroClinic provides a review interface where an administrator can:

- Listen to the audio recording.
- See the top-5 recognition hypotheses.
- Accept a hypothesis or enter the correct response manually.
- Save the corrected score (stored with the code `88` to indicate manual correction).

See [Backend (NeuroClinic)](../backend.md) for details on the review workflow.

### Not suitable for auto-stopping tasks

Because speech recognition results are probabilistic and require review, spoken responses are not used for tasks that automatically stop on errors or adjust difficulty in real time. For example, a standard digit span that stops when the participant makes two consecutive errors cannot reliably use speech recognition because the recognition result may not be available fast enough or may be incorrect. These tasks use typed or administrator-recorded responses instead.

!!! warning "Microphone permission"
    If the participant denies microphone access, spoken response tasks will not function. Brief the participant on this requirement before the session. Most browsers show a persistent prompt at the top of the page if microphone access is blocked.

---

## Administrator-recorded responses

For some tasks (particularly Word Recall variants), the administrator can mark responses correct or incorrect directly in the interface rather than relying on typed or spoken input from the participant. The participant responds verbally to the administrator, and the administrator taps the correct/incorrect buttons for each item. This is useful for:

- Participants with motor difficulties who cannot type easily.
- Settings where speech recognition is unavailable (no internet).
- Protocols that require a human judge to evaluate response accuracy.
