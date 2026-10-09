# Jason's ToDo: configuration database and admin site

What's left after the 2026-10-09 session ([ConfigDatabase_AdminSite_2026-10-09.md](ConfigDatabase_AdminSite_2026-10-09.md)).
Ordered roughly by what unblocks what. The project's full checklist is still
`MySQL/ConfigurationDatabase/ToDo.md`.

## 0. Urgent: database password is on GitHub

- [ ] **`MySQL/.env` is tracked in git and contains the real `ncmuser` password.** It was first
      committed in `f88bd36b` and is pushed to `NCMlab/NCMLabOnlineTools`. Found while checking
      this session's commit for secrets; this session did not add or change it.
  - [ ] Change the `ncmuser` MySQL password (`ALTER USER 'ncmuser'@'localhost' IDENTIFIED BY '…';`)
        and update `db_config.php` / `MySQL/.env` locally.
  - [ ] Stop tracking it: add `MySQL/.env` to `.gitignore`, then `git rm --cached MySQL/.env`
        and commit. Other machines will lose their copy of the file on their next pull, so keep
        a local copy first.
  - [ ] The old password stays in git history. Changing the password is what actually protects
        you; rewriting history (`git filter-repo`) is optional.

## 1. Try it out

- [ ] **Run the site and click through it.** In `NCMBatteryWebsite/user-website`, run
      `npm install` (new form library) and then `npm start`. Log in at http://localhost:3000 in
      Chrome. Nothing in the site has been tested in a browser yet, only built and checked
      against the API. Worth trying:
  - [ ] Batteries → View a battery; Show a task's parameters.
  - [ ] Batteries → Edit as copy → save under a new index, with "deactivate the original" ticked.
  - [ ] Parameter sets → View a Word Recall set (form view) → Edit as copy → change a pull-down
        and a number → save.
  - [ ] Builder → add a task → "Create a new set from scratch" (should start filled with defaults).
  - [ ] Delete an unused parameter set; confirm a used one can't be deleted.
- [ ] **Check the form layout.** The form's styling was written without seeing it rendered,
      especially Trail Making's circle positions and Digit Span's nested settings. Report
      anything cramped or broken.

## 2. Review the five draft parameter forms

`MySQL/ConfigurationDatabase/schemas/` holds WordRecall, TrailMaking, DigitSpan, SpatialDMS and
Questionnaire. The site shows "Draft form" until each is reviewed. See `schemas/README.md`.

- [ ] **Pull-down options** only include values already used. For example, `WordList` offers
      just the 8 lists in use, and `RecallType` only Manual/Spoken. Add any other legal value.
- [ ] **Titles and units:** "N blocks" → "Number of learning trials", "Time per word" →
      "Time per word (ms)", and so on.
- [ ] **Required fields:** a field is required if every existing set has it and the code reads
      it. Un-require anything the task works without.
- [ ] **Fields flagged "not found in the task code".** Word Recall `RecordAUDIO` is one. Either
      it's unused, or it's read some other way.
- [ ] **`readByCodeButNotInAnySet`** in each file lists fields the code reads that no set
      defines. Add the ones researchers should be able to set.
- [ ] Set `"reviewed": true`, then run `node migrate/load_schemas.js` and load
      `Load_ParameterSchemas.sql`.
- [ ] Then draft the other ~25 task types: `node migrate/infer_schemas.js CardSort ClockDrawing …`.

## 3. Decisions only you can make

- [ ] **5 batteries weren't loaded:** 1 ("Survey") and 171, 9999, 123, 98700 ("Session
      Chooser"). Neither component has a page in `html/JATOS/` (only `buSessionChooser.html`).
      Options:
  - Add these as task types, with the right HTML page.
  - Treat Session Chooser batteries as something other than task batteries. They are landing
    pages, and `session_chooser_configs` already holds their button grids.
  - Retire them.
- [ ] **19 batteries reference sets that don't exist in any file.** They were loaded with that
      slot empty. The list is in `migrate/BATTERY_REVIEW.md`. Most common:
  - `WordRecog_Spoken` (7 batteries, incl. 16): likely meant `WordRecog_Spoken_002` or
    `RAVLT_WordRecog_Spoken`.
  - Trail Making instructions `FaCE` (6 FaCE batteries): no `EN_Instructions_FaCE` exists for
    Trail Making.
  - `IntakeForm_EN` / `IntakeForm_FR` / `IntakeForm_Generic`: the sets are named `EN_IntakeForm`
    / `FR_IntakeForm`.
  - `RAVLT_Spoken_Immediate_002`, `RAVLT_Spoken_Delayed_002`, `Listening_002`, `DemoEN`,
    `TrailMakingA_003`, `TrailMakingB_003`, `PANAS_010`, and `CardSort_001SHORT` (commented out
    in `config/CardSort_Setup.js`).

  These are already broken in Batteries.js today. Fix the names in Batteries.js and re-run
  `migrate_batteries.js`, or attach the right sets via Edit as copy in the site.
- [ ] **Instructions per language.** A battery task stores one instruction set, so one
      language, but task pages choose instructions by the participant's language at runtime.
      The migration used each battery's language. Decide before task pages read batteries from
      the database: should `battery_tasks` store the instruction *name* and resolve the
      language at runtime?
- [ ] **`task_types.html_file` paths are often wrong.** For example, `CardSort.html` should be
      `CardSortTask.html`, `WordRecog.html` should be `WordRecognition.html`, and
      `ReadingTest.html` doesn't exist. This is harmless until something opens pages from that
      column.

## 4. Loose ends from this session

- [ ] **`WordRecallDatabaseConfig.html` timing bug:** the second `jatos.onLoad` calls
      `jsPsych.run(timeline)` without waiting for the database fetch. If the `[DB]` console logs
      show "calling jsPsych.run" before "Parameters loaded", move `jsPsych.run(timeline)` to the
      end of the database handler and delete the second handler. Remove the `[DB]` logging once
      it works.
- [ ] **Local-only values were not committed:**
  - `DB_API_URL = 'http://localhost:8000/...'` in `WordRecallDatabaseConfig.html`.
  - `ADMIN_ALLOWED_ORIGIN = 'http://localhost:3000'` in `admin/admin_common.php`.

  Your working copies still have them; the commits keep the original/placeholder values. They
  will keep showing as modified in `git status`. That's expected.
- [ ] **Your own uncommitted edits** to `Batteries/Batteries.js` (+25 lines) and
      `Batteries/ComponentList.js` (+1 line) predate this session and were **not** committed.
      Commit them yourself if they're ready, then re-run `migrate_batteries.js` so the database
      picks them up.
- [ ] **Merge NCMBatteryWebsite's `config-library` branch into `main`** (pushed as a branch, not
      merged) once the click-through looks good.
- [ ] Optional: NCMBatteryWebsite's `README.md` is UTF-16 encoded, which GitHub shows as
      binary. Convert it to UTF-8.

## 5. Before real deployment (unchanged, from `ToDo.md` Parts 2/2b)

- [ ] Server: MySQL + Apache/PHP, HTTPS (the login cookie requires it off localhost).
- [ ] Load the SQL files in the order in the session doc, **with `--default-character-set=utf8mb4`**.
- [ ] Set `ADMIN_ALLOWED_ORIGIN` to the site's real URL; restrict the public API's CORS to the
      JATOS origin.
- [ ] Add login rate limiting and a `created_by` audit column (the "Known gaps" in
      `admin/AdminSetupInstructions.md`).

---

*Generated by Claude Opus 5.5 (Claude Code) on 2026-10-09.*
