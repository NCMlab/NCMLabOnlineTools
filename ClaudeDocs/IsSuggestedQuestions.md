# "isSuggested" Question Property

## Original prompt

> Where do I need to edit to add another option which is "isSuggested." If this is set to true, the validation checks to see of a response has been made for teh question and alerts the user the same as the isRequired does. However, a new button is shown at the bottom of the screen which says "Proceed with unanswered question"

## What changed

SurveyJS is vendored inside `jspsych/dist/plugin-survey.js` (survey-core v1.9.139) and is not exposed as a global — `Serializer`/`Model` live only inside that bundle's closure. So `isSuggested` is implemented **without** registering a new SurveyJS property: it's read as a plain JSON key off the survey's own JSON object, and the behavior is wired through the two hooks the jsPsych `survey` plugin already exposes (`survey_function`, called right after the `Survey.Model` is built).

**File edited: `InstructionsAndStimuli/EN/Questionnaires/costOfSport.js`**
1. Added `isSuggested: true` to the `Cost_Gen` radiogroup question (Section II, "How much do you think you spend annually on your (para)sport participation?") as the first test case. `isRequired` stays `false` on this question — `isSuggested` is an independent, softer state.
2. Updated the TODO comment near the top of the file (previously asking for exactly this feature) to point at this doc and explain how to flag additional questions.

**File edited: `html/JATOS/CostOfSport.html`**
1. Added CSS for a `.suggested-proceed-btn` class (orange/amber button) so the override button is visually distinct from the normal navigation buttons.
2. Added `collectSuggestedNames(node, names)` — a small recursive walker that scans the entire `EN_CostOfSport.survey_JSON` tree (pages, panels, paneldynamic templates, matrix columns, etc.) and collects the `name` of every element with `isSuggested: true`. This runs once per survey load.
3. Added `setupSuggestedQuestions(survey)`, which:
   - Adds a custom navigation button (`survey.addNavigationItem`) titled "Proceed with unanswered question", hidden by default.
   - Listens to `survey.onCurrentPageChanging` — fires when "Next" (or "Previous") is pressed. On a forward move, if any `isSuggested` question **on the page being left** is still empty and not yet acknowledged, it blocks the page change (`options.allowChanging = false`), calls `question.addError(...)` on it — the same red error-box styling `isRequired` produces — and reveals the override button. Backward navigation is never blocked.
   - Listens to `survey.onCompleting` — fires once, when the final page's "Complete" button is pressed. Same check, but across every `isSuggested` question in the whole survey (not just the current page), since by then there are no more pages left to catch it on.
   - Listens to `survey.onValueChanged` to clear a question's error as soon as it's answered, and re-hides the override button once no unacknowledged unanswered suggested questions remain.
   - Clicking "Proceed with unanswered question" sets an internal override flag and re-triggers whichever action was blocked (`survey.nextPage()` or `survey.completeLastPage()`). Once that override is consumed, every question that was flagged at that moment is added to an `acknowledgedUnanswered` set so it is **not** re-flagged later (e.g. overriding it on its own page means it won't block final Complete too, even though it's still blank).
4. Wired `survey_function: function (survey) { setupSuggestedQuestions(survey); }` into `form_trial`, which previously used none of the plugin's optional hooks.

**File edited: `Playground/TestCostOfSport.html`** — the same four changes as above (CSS, `collectSuggestedNames`, `setupSuggestedQuestions`, and `survey_function` wiring), applied identically. This file is the standalone test harness that loads the same `costOfSport.js` but doesn't depend on `jatos.js`, so it's the one to open directly in a browser to try this feature without a JATOS server.

## How to use it

- **To mark another question as suggested-but-optional:** add `isSuggested: true` next to its `isRequired` in `costOfSport.js`. No other file needs to change — `collectSuggestedNames` picks it up automatically on next load, regardless of what page/panel it's in.
- **Participant-facing behavior:** if a suggested question is left blank and the participant tries to move past it — either via "Next" on its own page, or via "Complete" on the final page — it gets the same red error box as a required-field error, with the message *"This question is optional but suggested. Please answer it, or click 'Proceed with unanswered question' below."* That navigation is held. An amber "Proceed with unanswered question" button appears next to it; clicking it lets the participant move on anyway, and that question won't be re-flagged again later in the survey. Answering the question instead also clears the error and hides the button automatically.
- **The completion button on the last page is labeled "Complete", not "Submit".** `button_label: "Submit"` is set in `form_trial` in `CostOfSport.html` but does not actually rename that button in this plugin version — pre-existing behavior, unrelated to this change.
- **Verification performed:** JS syntax-checked both edited files (`node -c`). Since this environment has no browser-automation package pre-installed, a full interactive end-to-end test was built from scratch: copied the vendored `jspsych.js`, `plugin-survey.js`, and `css/defaultV2.min.css` into an isolated scratch harness running the exact logic from `CostOfSport.html`, launched the system's local Google Chrome in headless mode, and drove it via a raw WebSocket connection to Chrome DevTools Protocol (`Target.createTarget` / `Runtime.evaluate` / `Page.captureScreenshot`) to click through it programmatically. Three passes, in increasing order of fidelity:
  1. Single-question harness: left `Cost_Gen` blank, clicked "Complete" — blocked, error shown, override button appeared; clicked it — survey completed.
  2. Two-page harness (`Cost_Gen` on page 1, an unrelated question on page 2): left `Cost_Gen` blank, clicked "Next" — blocked on page 1 with the same error + button; clicked "Proceed with unanswered question" — advanced to page 2; clicked "Complete" there — completed immediately, with `Cost_Gen` still blank and *not* re-flagged, confirming the acknowledgment carries through to final submission.
  3. **The real `Playground/TestCostOfSport.html` file itself**, served locally and driven the same way: filled the required Sport question on page 1, clicked "Next" twice to reach page 3 ("Section II: Cost of Active (Para)Sport Participation", confirmed via the page indicator reading "Page 3 of 11"), left `Cost_Gen` blank, clicked "Next" — blocked with the error box and the amber override button, exactly as designed; clicked the override button — advanced past it.

  All three passed. Screenshots taken during this test are in `/tmp` on this machine, not in the repo.
- **Correction:** an earlier version of this doc said `Cost_Gen` was on "page 2 of 11". That was wrong — it's actually **page 3 of 11** (page 1 is "Intro" / reference sport, page 2 is "Section I: Sport Participation Profile", page 3 is "Section II: Cost of Active (Para)Sport Participation", confirmed directly by the pass above).
- **Pre-existing data quirk noticed while investigating page order (not fixed, not part of this task):** six separate pages in `costOfSport.js` (pages 3–7 and 9 by position) all share the literal page `name: "CostActiveSportParticipation"`. SurveyJS pages are addressed by array position for navigation, so this doesn't break anything functionally, but it would make any future `survey.getPageByName("CostActiveSportParticipation")` call ambiguous. Worth a cleanup pass if page names are ever used elsewhere.
- **Not yet confirmed:** the real `html/JATOS/CostOfSport.html` page (as opposed to `Playground/TestCostOfSport.html`, which now is confirmed). It depends on `jatos.js`, which is injected by the JATOS server at runtime and isn't present in this repo, so it can only be exercised through an actual JATOS deployment.

---
*Generated by Claude Sonnet 5 (Claude Code) on 2026-09-22.*
