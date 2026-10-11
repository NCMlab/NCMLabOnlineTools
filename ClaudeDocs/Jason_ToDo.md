# Jason's ToDo: configuration database and website

Updated 2026-10-11. In order: do section 1 first, then 2, then 3.

- How to set up and start the website: [ConfigDatabase_Website_Setup.md](ConfigDatabase_Website_Setup.md)
- What was built: [ConfigDatabase_AdminSite_2026-10-09.md](ConfigDatabase_AdminSite_2026-10-09.md)

**Already done:**

- Local MySQL passwords changed, and `db_config.php` updated.
- `MySQL/.env` untracked and gitignored (`057cc949`).
- Your `Batteries.js` edits committed. The database already matches them.

---

## 1. Change the passwords on the remote databases

The old `ncmuser` password was public on GitHub, so it must be changed **everywhere it was
used**. `MySQL/.env` also used the same password for `readonly_user`.

List each server first, so none is missed:

| Server (name / address) | MySQL users to change | Done |
|---|---|---|
| _fill in_ | `ncmuser`, `readonly_user`, _others?_ | [ ] |
| _fill in_ | | [ ] |

For **each** server:

- [ ] **1.1 Log in to the server:** `ssh you@server-address`
- [ ] **1.2 Open MySQL as root:** `sudo mysql` on Ubuntu, otherwise `mysql -u root -p`.
- [ ] **1.3 See which users exist:**
      `SELECT user, host FROM mysql.user;`
      Note every user that might have shared the old password.
- [ ] **1.4 Make a new password per user** (a different one per server is best). On your Mac,
      run `openssl rand -base64 18` to generate one. Save it in a password manager.
- [ ] **1.5 Change each password.** Use the `host` value from 1.3:
      ```sql
      ALTER USER 'ncmuser'@'localhost' IDENTIFIED BY 'NEW-PASSWORD';
      ALTER USER 'readonly_user'@'localhost' IDENTIFIED BY 'ANOTHER-NEW-PASSWORD';
      EXIT;
      ```
- [ ] **1.6 Update every file on that server that stores the old password.**
  - `db_config.php`, next to the API files, e.g. `/var/www/html/api/db_config.php`.
  - Any `.env` file. `MySQL/.env` had `PORT=3000` and `readonly_user`, so some app on a server
    may read it.
  - To find the files: `sudo grep -rl "ncmuser\|readonly_user" /var/www /home 2>/dev/null`
- [ ] **1.7 Check the API still works:**
      `curl "https://server-address/api/API_list_config.php?resource=task_types"`
      It should print a list, not "Database connection failed".
- [ ] **1.8 Check MySQL isn't open to the internet.** `sudo grep -r bind-address /etc/mysql`
      should show `127.0.0.1`. If it shows `0.0.0.0`, MySQL accepts outside connections; tell
      Claude and we'll lock it down.

---

## 2. Go through the CHECKs for Digit Span and Word Recall

On the website: **Parameter sets → pick a Digit Span (or Word Recall) set → View**. Every
explanation starting with **CHECK:** needs a decision. They are also listed below.

Write your answer in the **Your decision** column (or just tell Claude), and Claude will apply
them. Once a task's CHECKs are all answered, Claude sets the form to "reviewed" and the
"Draft form" warning goes away.

**Important:** the live tasks still read `config/*.js`, not the database (that's section 3).
So the fixes in 2C must go into the `config/*.js` files too, or the live studies keep the bug.

### 2A. Digit Span: task code behaviour

| # | What the code does now | Options | Your decision |
|---|---|---|---|
| D1 | **"Fixed" isn't fixed:** it starts at the starting length and adds 1 digit every trial. | (a) Keep it; the label now says "Fixed start". (b) Change the code so every trial keeps the same length. | |
| D2 | **"Errors in a row to get shorter" (`NDown`) does nothing:** the staircase gets shorter after **every** error. | (a) Make the code use NDown. (b) Remove the field. (c) Leave as is. | |
| D3 | **`MaxReversals` and `MaxTime` do nothing** (the config's own comments say "Not implemented"). | (a) Implement them as stopping rules. (b) Hide them from the form. | |
| D4 | **"Number of errors" has no maximum length**, and its errors-in-a-row count runs across lengths. | (a) Fine as is. (b) Stop at "Longest length". (c) Stop only when both trials **at the same length** are wrong (WAIS-style). | |
| D5 | **Starting length is limited to 1–20 digits** in the form (a judgment call). | (a) OK. (b) Other limit: ___ | |
| D6 | **No set uses the spoken welcome yet**, but `Welcome_DigitSpanForward.wav` / `Welcome_DigitSpanBackard.wav` exist. | (a) Leave it. (b) Turn it on for some sets. | |

### 2B. Word Recall: task code behaviour

| # | What the code does now | Options | Your decision |
|---|---|---|---|
| W1 | **"Record audio" (`RecordAUDIO`) does nothing.** Spoken recall is always recorded; manual recall never is. | (a) Remove the field. (b) Make the code use it (e.g. spoken recall without recording). | |
| W2 | **If "Speak the words" and "Show the words" are both No, no words are presented.** | (a) Block that combination in the form. (b) Leave it. | |
| W3 | **List B is only ever presented as audio**, so a visual-only session shows no List B words. | (a) Fix the code to show List B visually too. (b) Leave it. | |
| W4 | **If "Seconds before Done button" is missing, the Done button never appears.** | (a) Make it required. (b) Leave it. | |
| W5 | **No set has Instructions 05 audio**, though spoken instructions play it. | (a) Add the audio when spoken instructions are needed. (b) Ignore for now. | |

### 2C. Word Recall: existing parameter sets that look wrong

| # | Set(s) | Problem | Suggested fix | Your decision |
|---|---|---|---|---|
| W6 | 9 FaCE/Demo sets (`FaCE_*_Training_EN`, `FaCE_*_VerB_EN`, `DemoENDelayed`) | Word list is `EN_FaCE_Training` / `EN_FaCE_VerB` / `EN_Demo`, so the page looks for `EN_EN_…`, which doesn't exist. | Change to `FaCE_Training` / `FaCE_VerB` / `Demo`. Note there's no audio folder for `FaCE_Training` or `FaCE_VerB`. | |
| W7 | `RAVLT_Manual_Delayed` | "Delayed recall" is No and no presentation is set, so it presents no words. | Set Delayed recall = Yes (like `RAVLT_Spoken_Delayed`). | |
| W8 | `FaCE_Immediate_Spoken_VerA_EN` | Recall type is Manual despite "Spoken" in the name. | Set Recall type = Spoken. | |
| W9 | `DemoENManual` | `Instructions01Time` is `10`; the code expects a list such as `[10000, 8000]`. | Remove it (spoken instructions are off). | |

- [ ] Fill in the decisions above, then ask Claude to apply them.

---

## 3. Convert the task HTML pages to use the configuration database

**Goal:** each task page gets its parameters and instructions from the database (through
`API_task_config.php`), instead of loading `config/*.js` and `InstructionsAndStimuli/Instructions/*.js`.

There are two stages. Stage 1 is safe to do page by page. Stage 2 needs decisions first.

### Stage 1: pages read parameters and instructions from the database

Batteries still come from `Batteries.js` as now. Only **where each page gets its settings**
changes.

- [ ] **3.1 Finish the pilot page, `html/JATOS/WordRecallDatabaseConfig.html`.** Ask Claude to:
  - Fix the timing bug: `jsPsych.run(timeline)` starts before the database answer arrives.
  - Request instructions by their full name. The database stores `EN_Instructions_Default`, not
    `Default`; the pilot only works today because of one hand-made "Default" row.
- [ ] **3.2 Test the pilot in JATOS on your Mac.** Start the API (setup guide, Part 2, Terminal 1),
      run a battery that uses it, and compare the results file with the old `WordRecall.html`.
- [ ] **3.3 Ask Claude to write one shared helper** (e.g.
      `functions/GeneralPurposeFunctions/ConfigDatabase.js`). Every page then uses the same
      code to:
  - set the API address in **one place** instead of in every page;
  - fetch parameters and instructions, adding the language prefix where a page needs it;
  - show a clear error screen if the database can't be reached;
  - start the task only after everything has loaded.
- [ ] **3.4 Convert the pages one at a time.** For each page: Claude converts it → you test it
      in JATOS → tick it off. Suggested order: Digit Span and Word Recall first (their forms
      are reviewed), then the rest.

| Done | Page (`html/JATOS/`) | Reads now | Notes |
|---|---|---|---|
| [ ] | DigitSpan.html | DigitSpan_Setup.js | do first |
| [ ] | WordRecall.html | WordRecall_Setup.js | do first; the word lists stay in JS for now |
| [ ] | WordRecognition.html | WordRecog_Setup.js | word lists stay in JS |
| [ ] | TrailMaking.html | TrailMaking_Setup.js | |
| [ ] | SpatialDMS.html | SpatialDMS_setup.js | |
| [ ] | TESTSpatialDMS.html | SpatialDMS_setup.js | |
| [ ] | vDMS_Adaptive.html | vDMS_setup.js | |
| [ ] | CardSortTask.html | CardSort_Setup.js | |
| [ ] | ClockDrawing.html | ClockDrawing_Setup.js | |
| [ ] | Cancellation.html | Cancellation_Setup.js | |
| [ ] | FluencyTask.html | Fluency_Setup.js | |
| [ ] | ImageCopy.html | ImageCopy_Setup.js | |
| [ ] | LineBisection.html | LineBisection_Setup.js | |
| [ ] | Listening.html | Listening_Setup.js | |
| [ ] | MatrixReasoning.html | MatrixReasoning_Setup.js | |
| [ ] | PatternComparison.html | PatternComparison_Setup.js | |
| [ ] | ReadingListeningTest.html | ReadingListening_Setup.js | |
| [ ] | SerialSubtractionTask.html | SerialSubtraction_Setup.js | |
| [ ] | StroopColor.html | Stroop_Setup.js | |
| [ ] | StroopWord.html | Stroop_Setup.js | |
| [ ] | StroopColorWord.html | Stroop_Setup.js | |
| [ ] | VASrating.html | VASrating_setup.js | |
| [ ] | EQ5D.html | EQ5D_Setup.js | |
| [ ] | Questionnaire.html | Questionnaire_Setup.js | |
| [ ] | MatrixQuestionnaire.html | Questionnaire_Setup.js | |
| [ ] | MatrixQuestionnaireExtraQ.html | Questionnaire_Setup.js | |
| [ ] | FormQuestionnaire.html | Questionnaire_Setup.js | |
| [ ] | QuestionnaireJSON.html | Questionnaire_Setup.js | |
| [ ] | IPAQQuestionnaire.html | Questionnaire_Setup.js | |
| [ ] | LikertQuestionnaire.html | Questionnaire_Setup.js | |
| [ ] | IntakeForm.html | IntakeForm_Setup.js | uses `<LANG>_` parameter names |
| [ ] | ConsentForm.html | ConsentForm_Setup.js | uses `<LANG>_` parameter names |
| [ ] | Screening.html | InstructionsAndStimuli/EN/Questionnaires/Screening.js | uses `<LANG>_` parameter names |
| [ ] | EndingPage.html | EndingPage_Instructions.js | parameters use `<LANG>_` names; check where they come from |
| [ ] | LanguageSelection.html | LanguageSelection_Instructions.js | parameters use `<LANG>_` names; check where they come from |

- [ ] **3.5 When every page is converted,** stop loading the old `config/*.js` and instruction
      files from the pages. **Don't delete them yet:** the migration scripts read them.

### Stage 2: batteries come from the database instead of `Batteries.js`

Decide these first:

- [ ] **Instructions per language.** A battery task stores one instruction set (one language),
      but pages choose instructions by the participant's language. Should batteries store the
      instruction **name** and let the page add the language?
- [ ] **5 batteries weren't loaded:** 1 ("Survey") and 171, 9999, 123, 98700 ("Session Chooser").
      Options: add these as task types, treat Session Chooser pages separately, or retire them.
- [ ] **19 batteries point at sets that don't exist** (list in
      `MySQL/ConfigurationDatabase/migrate/BATTERY_REVIEW.md`). Most common: `WordRecog_Spoken`
      (7 batteries), Trail Making instructions "FaCE" (6), and `IntakeForm_EN` (5). Fix the names
      in `Batteries.js`.
- [ ] **Button labels** ("Quit", "Next", …) still come from `config/General_Setup.js`. Claude
      would add a small API for the `ui_labels` table.
- [ ] **`task_types.html_file` paths** are often wrong (e.g. `CardSort.html` should be
      `CardSortTask.html`). They need fixing before anything opens pages from them.

Then ask Claude to change how batteries are chosen, so they come from `API_battery.php`.

---

## 4. Smaller items

- [ ] Merge NCMBatteryWebsite's `config-library` branch into `main` (on GitHub: open a pull
      request from `config-library`, then merge).
- [ ] Review the three other draft forms: Trail Making, Spatial DMS and Questionnaire. They have
      no explanations or limits yet; ask Claude to write them, as for Digit Span and Word Recall.
- [ ] Draft forms for the remaining task types (Card Sort, Clock Drawing, …).
- [ ] Optional: convert NCMBatteryWebsite's `README.md` from UTF-16 to UTF-8, so GitHub shows it.

## 5. Before the website goes on a real server

- [ ] A server with MySQL, Apache/PHP and **HTTPS** (logging in needs HTTPS anywhere except
      your own Mac).
- [ ] Load the SQL files in the order in the setup guide (Step 5), keeping
      `--default-character-set=utf8mb4`.
- [ ] In `admin/admin_common.php` on the server, set `ADMIN_ALLOWED_ORIGIN` to the website's
      real address. In the repo it's `http://localhost:3000`, which only works on your Mac.
- [ ] Limit the public API to the JATOS server's address (CORS), instead of allowing everyone.
- [ ] Add login rate limiting and a "who changed what" record (see "Known gaps" in
      `admin/AdminSetupInstructions.md`).

---

*Generated by Claude Opus 5.5 (Claude Code) on 2026-10-11.*
