# Jason's ToDo: configuration database and website

Updated 2026-10-11. In order: do section 1 first, then 2, then 3.

- How to set up and start the website: [SetupInstructions.md](SetupInstructions.md)
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

- [x] ~~3.1-3.3 Pilot fixes and shared helper~~ Done 2026-10-15. Every live task page now has a
      database version in **`html/dB/`** (same file names; `html/JATOS/` is untouched), plus
      `CentralExecutive.html`, which reads its session buttons from the database.
  - One shared file sets the API address and does the loading:
    `functions/GeneralPurposeFunctions/DatabaseConfig.js` (`DB_API_BASE`, now
    `http://localhost:8000`). Moving to a server = change that one line.
  - Each page asks for the same set names it used with `pseudoSwitch`, and starts the task only
    after the answers arrive; if the database can't be reached it shows an error instead.
  - A set name that isn't in the database changes nothing, exactly like `pseudoSwitch`.
  - Still loaded from JS: word lists, button labels, questionnaire definitions, and 11 config files
    that also hold constants the task code reads (e.g. `FixationTimeBetweenWords` in
    `WordRecall_Setup.js`, which the pilot had dropped). Their parameter sets are no longer used.
  - `html/dB/WordRecall.html` replaces the pilot `WordRecallDatabaseConfig.html` (built from
    `WordRecall.html` the same way as the other pages).
  - Checked: for all 198 parameter/instruction lookups the batteries make (every language), the
    database gives exactly what the JS files gave (179) or, like the JS, nothing (19 already-broken
    names). Each page was also run in a simulated browser next to its html/JATOS original: same
    start-up, same settings. Not yet run in real JATOS.
- [ ] **3.4 Test in JATOS, page by page:** point a component's HTML file at `html/dB/<Page>.html`
      (start the API first: setup guide, Part 4), run it, compare with the html/JATOS version,
      and tick it off below.

| Tested | Page (`html/dB/`) | Notes |
|---|---|---|
| [ ] | DigitSpan.html | |
| [ ] | WordRecall.html | word lists stay in JS |
| [ ] | WordRecognition.html | word lists stay in JS |
| [ ] | TrailMaking.html | |
| [ ] | SpatialDMS.html | |
| [ ] | TESTSpatialDMS.html | |
| [ ] | vDMS_Adaptive.html | |
| [ ] | CardSortTask.html | |
| [ ] | ClockDrawing.html | |
| [ ] | Cancellation.html | |
| [ ] | FluencyTask.html | |
| [ ] | ImageCopy.html | |
| [ ] | LineBisection.html | |
| [ ] | Listening.html | |
| [ ] | MatrixReasoning.html | |
| [ ] | PatternComparison.html | |
| [ ] | ReadingListeningTest.html | |
| [ ] | SerialSubtractionTask.html | |
| [ ] | StroopColor.html | see the Stroop note below |
| [ ] | StroopWord.html | see the Stroop note below |
| [ ] | StroopColorWord.html | see the Stroop note below |
| [ ] | VASrating.html | |
| [ ] | EQ5D.html | |
| [ ] | Questionnaire.html | questionnaire files stay in JS |
| [ ] | MatrixQuestionnaire.html | questionnaire files stay in JS |
| [ ] | MatrixQuestionnaireExtraQ.html | questionnaire files stay in JS |
| [ ] | FormQuestionnaire.html | questionnaire files stay in JS |
| [ ] | QuestionnaireJSON.html | questionnaire files stay in JS |
| [ ] | IPAQQuestionnaire.html | questionnaire files stay in JS |
| [ ] | IntakeForm.html | batteries ask for `IntakeForm_EN`, which exists nowhere (the page runs without a parameter set, as now); FR FaCE intake now gets its instructions (it never did from JS) |
| [ ] | ConsentForm.html | |
| [ ] | Screening.html | |
| [ ] | EndingPage.html | instructions only (no parameter sets) |
| [ ] | LanguageSelection.html | instructions only (no parameter sets) |
| [ ] | CentralExecutive.html | session buttons from the database; Mont_99's Test values arrive as text ("1") instead of numbers |

Not converted: `LikertQuestionnaire.html` (not a task type) and the backups/old copies.

**Found while converting (existing behaviour, kept as is):** the Stroop pages declare
`Stroop_parameters` but the sets go into `parameters`, so Stroop code that reads
`Stroop_parameters` (instructions switch, timer, scoring method) always sees nothing.

- [ ] **3.5 When every page is converted,** stop loading the old `config/*.js` and instruction
      files from the pages. **Don't delete them yet:** the migration scripts read them.

### Stage 2: batteries come from the database instead of `Batteries.js`

Decide these first:

- [x] ~~**Instructions per language.**~~ Done 2026-10-14: a battery task now stores the
      instruction **set** (e.g. "Default"), and the participant's language picks the translation.
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
- [x] ~~Parameter forms for every task type~~ Done 2026-10-15: all 35 task types with parameter
      sets have a form, checked against each task's code; JSON editing is gone from the site. Every
      one of the 385 existing sets opens in its form. Forms with open CHECKs below show "Draft form".
- [ ] **CHECKs found while writing the forms** (task code bugs; the forms only describe them):
      - EQ5D and VAS Rating: the slider reads `min`/`max`, but the sets define `minValue`/`maxValue`,
        so the range setting does nothing. EQ5D also shows a leftover prompt under the slider: "Is
        this color closer to purple or blue?"
      - Stroop Word: the test repeats `ColorTestRepeats` times; `WordTestRepeats` is never read.
      - Verbal DMS: the code reads `WaitOnTime` (sets have `WaitTime`), and uses the fixed
        `ProbeOnTime` in `vDMS_setup.js` (5000 ms) instead of the set's (2500 ms).
      - Screening FR: the choices are "Qui"/"No" (should be "Oui"/"Non") but the answer needed is
        still "Yes", so **no French participant can pass the FR screening**.
      - Fluency FR: the FR instruction sets have no DinnerTable category, and call their page
        `Instructions` where the task expects `Instructions01`.
      - Not used by any code (labelled "not used" in the forms): `RecordAUDIO` (many tasks),
        Cancellation `save_final_image`, Card Sort `FeedbackSize`, Image Copy canvas size, EQ5D
        `shortTitle`, and NDown in both DMS staircases (as in Digit Span).
- [ ] Optional: convert NCMBatteryWebsite's `README.md` from UTF-16 to UTF-8, so GitHub shows it.
- [ ] **Check how instruction sets were grouped (2026-10-14).** The old per-language names were
      merged into sets, mostly mechanically (`EN_Instructions_FaCE` + `FR_Instructions_FaCE` →
      "FaCE"). These were judgment calls; say if any is wrong:
      - Intake Form: `FR_IntakeForm_FaCE` is treated as the FR of "IntakeFaCE", and
        `FR_OrientationForm_FaCE` as the FR of "OrientationFaCE".
      - Fluency: `FR_Instructions` (no "Default") is treated as the FR of "Default".
      - Stroop (all three pages): `EN_Stroop_Instructions` / `FR_Stroop_Instructions` → "Default".
      - Word Recall had two EN "Default"s: the July seed example and the copy from
        `WordRecall_Instructions.js`. The file's copy was kept. This changes what
        `WordRecallDatabaseConfig.html` shows: it used to get the seed example.
- [ ] If any other machine has the configuration database, run `AddInstructionSets.sql` there
      once (setup guide, Part 4). Your Mac's database is already converted; the old table is kept
      as `task_instructions_pre_sets`, so drop it once you're happy.

### Sessions (added 2026-10-15)

The Sessions tab in the website, and the `sessions` / `session_languages` / `session_buttons`
tables, hold everything from `config/SessionChooser_config.js`. Things to decide or check:

- [ ] **`EN_COMM_01` is not the list at the top of the file.** `parameters001` is defined twice,
      and the second one ("Demonstration", batteries 72/3/4/6) wins at run time, so `EN_COMM_01`
      and `EN_COMM_DEMO` both show the Demonstration buttons. The database copies that run-time
      behaviour. If `EN_COMM_01` should be the first list (Enter Name, Intake, Baseline, ...),
      say so and Claude will fix the session. `FR_COMM_01` does use its own list.
- [ ] **Batteries some buttons point at aren't in the database:** 3 and 4 (COMM_01/COMM_DEMO),
      76 (no session uses it now), and 98703, 98706, 98721, 98722, 98751 (the Mont_99 buttons
      whose names start with "x"). The Sessions pages flag them.
- [ ] **Mont_99's Test values are numbers in the file** (`Test: 1`) and text everywhere else
      (`Test: '1'`). The database stores text, so results would record "1" instead of 1. Fine
      unless the analysis depends on the type.
- [ ] **`CentralExecutive.html` still reads `SessionChooser_config.js`.** Switching it to
      `API_session.php?name=…&lang=…` (same data shape) belongs with section 3.
- [ ] If another machine already has the configuration database, run `AddSessions.sql` there once
      (or reinstall). Your Mac's database is converted; the old table is kept as
      `session_chooser_configs_pre_sessions` until you drop it.

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
