# Configuration database: admin site, battery migration and parameter forms (2026-10-09)

Covers one working session across two repos:

- **NCMBattery** (this repo, branch `DEVELOPMENT`): the MySQL configuration database, its PHP API
  and migration scripts, under `MySQL/ConfigurationDatabase/`.
- **NCMBatteryWebsite** (`~/Documents/GitHub/NCMBatteryWebsite`, branch `config-library`): the
  React admin site in `user-website/`.

What is still open is in [Jason_ToDo.md](Jason_ToDo.md).

## Original prompts

The session's prompts, verbatim and in order:

> I am testing out WordRecallDatabaseConfig.html and it is not working. Add console.log() into it so I can see if it is communicating with the server

> How can I add a Front-end to the configuration database so a user can add, edit and modify Batteries, Parameters and Instructions?

> Option A, using "copy on edit"

> Summarize what was done and what I need to do to start the Battery Config site.

> Load all the Batteries in teh Batteries.js file in. I loaded all the parameter sets.

> I would like a View button added to each row of the Batteris list.

> Add aview button to the Parameter sets page also.

> I want the parameters to be edited by pulldown buttons and yes/no radio button as much as possible. This will allow the user to know what parameters are required for each task. How can this be done?

> Go,

> Add a file describing what has been done this session. Describe what needs to be done. Put everything in the ClaudeDocs folder. Commit to Github for both repos. Also add a Jason ToDo list and included edit to parameters to also allow number entries so they are not JSON  text.

## What changed

### 1. Debug logging in `html/JATOS/WordRecallDatabaseConfig.html`

The two database fetches now go through `fetchJSONWithLogging()`. It logs the request URL,
status, timing, the CORS header, the raw response body and the parsed JSON, and it reports
network/CORS failures and invalid JSON separately. All lines start with `[DB]`. Timing markers
show when the database `onLoad` handler starts and finishes, and when `jsPsych.run(timeline)`
is called.

**Known issue, not fixed:** the page has two `jatos.onLoad` handlers. The second one runs
`jsPsych.run(timeline)` without waiting for the database fetch to finish (see Jason_ToDo).

### 2. Admin site: browse, view, copy-on-edit, delete

**Design decision (Jason): copy-on-edit.** An existing parameter set, instruction set or
battery is never changed in place. "Edit as copy" saves a new named set (suggested name
`<name>_v2`, `_v3`, …) or a new battery index. Batteries already using the original are
unaffected, so collected data stays tied to the configuration that produced it.

PHP (`MySQL/ConfigurationDatabase/`):

| File | Change |
|---|---|
| `admin/API_admin_get.php` | **New.** GET one parameter/instruction set or battery by id, JSON decoded. Sets include `used_by` (the batteries that use them); batteries include their ordered tasks. Login required, no CSRF token (read only). |
| `admin/API_admin_delete.php` | **New.** Deletes a parameter/instruction set only if no battery uses it. Without this check, the `ON DELETE SET NULL` foreign keys would silently blank the set out of existing batteries. Deletes a battery only after it has been deactivated. |
| `admin/API_admin_set_battery_active.php` | **New.** Activate/deactivate a battery: the only in-place change. |
| `admin/admin_common.php` | `require_admin_login()` for read endpoints; CORS now allows `GET`. |
| `API_list_config.php` | `resource=batteries`; `used_by` counts on sets; `task_type_id` optional (omit = all task types); task types now include `parameter_schema`. |
| `API_battery.php` | Fixed: `json_decode(null)` on an empty `languages_to_show` printed a PHP warning into the JSON response. |

React (`NCMBatteryWebsite/user-website/src/`):

| File | What it is |
|---|---|
| `NavBar.js` | Battery builder · Batteries · Parameter sets · Instruction sets · log out |
| `BatteryList.js` | Every battery: **View**, Edit as copy, Activate/Deactivate, Delete (inactive only) |
| `BatteryView.js` | Read-only battery: settings, tasks in order, Show/Hide each task's parameter and instruction JSON |
| `library/ConfigLibrary.js` | Parameter/instruction sets: filter by task, search, **View**, Edit as copy, Delete (unused only), New |
| `library/ConfigView.js` | Read-only set: details, links to the batteries that use it, contents (as a form for parameters) |
| `library/ConfigEditor.js` | New set / edit as copy; always saves a new row |
| `Home.js` + `draft.js` | The builder now keeps its battery while you move between pages (previously the header fields reset). Tasks can be reordered, all header fields are editable, a copied battery can deactivate the original after saving, and battery indexes already in use are flagged. |
| `FormSettings.js` | Per task: use / copy-and-edit / create a parameter set, plus a new **instruction-set picker** |
| `library/JsonEditor.js`, `library/copyName.js`, `library/kinds.js` | Shared helpers |
| `api.js`, `App.js`, `App.css` | API calls, routes and styles for the above |

### 3. All batteries from `Batteries/Batteries.js` loaded

New script `migrate/migrate_batteries.js` runs `Batteries.js` in a sandbox, as `extract.js`
does, and writes `migrate/Migrated_Batteries.sql` and `migrate/BATTERY_REVIEW.md`. It resolves
names the way each task page does at runtime:

- Parameter names: tried as-is, then as `<LANG>_<name>`.
- Instruction names: `<LANG>_Instructions_<name>`, `<LANG>_<Task>_Instructions_<name>`, then
  `<name>`. If the battery's language has no such set, it falls back to EN.
- Stroop: `<LANG>_Stroop_Instructions`, whatever name the battery gives.

The SQL looks rows up by name, so it works on any database. Re-running it replaces these
batteries instead of duplicating them.

**Result: 50 of 55 batteries, 272 tasks.** Battery 16's one-task test stub was replaced by the
real battery.

Fixes needed along the way:

- **`SeedData_TaskTypes.sql`**
  - It is now `INSERT IGNORE`, so it is safe to re-run.
  - 7 rows added for components Batteries.js uses: Questionnaire JSON, IPAQ Questionnaire,
    Matrix Questionnaire ExtraQ, TEST Spatial DMS, Ready Hold, Cost of Sport, Word Recall Database.
  - The local database had only 27 of the seed's task types, so Cancellation, the three Stroop
    tasks, Image Copy, EQ5D and Reading/Listening, and their parameter sets, had never loaded.
- **Shared config files:** the generator now files each config's sets under every task type
  whose page loads that file:
  - `Questionnaire_Setup.js` → all 6 questionnaire task types.
  - `SpatialDMS` → also TEST Spatial DMS.
  - `WordRecall` → also Word Recall Database.
  - `ReadingListening` → also "Reading Test" (there is no `ReadingTest.html`; that component
    runs `ReadingListeningTest.html`).
- **Screening:** `extract.js` now reads `InstructionsAndStimuli/EN/Questionnaires/Screening.js`,
  where Screening's parameter sets live.
- **Shared mapping:** `migrate/task_mapping.js` is the file → task type mapping, now shared by
  `generate_sql.js` and `migrate_batteries.js`.
- **Encoding:** the first local load stored accented text garbled, because the `mysql` client
  fell back to latin1. Those rows were deleted and reloaded. **Always load these SQL files with
  `--default-character-set=utf8mb4`.**

Local database after this session: 41 task types, 385 parameter sets, 92 instruction sets,
50 batteries.

### 4. Parameters edited as a form (pull-downs, Yes/No radios, number boxes)

- **Storage:**
  - New column `task_types.parameter_schema` (JSON). It is in `CreateSchema.sql` for new
    installs; `AddParameterSchemaColumn.sql` upgrades an existing database and is safe to re-run.
  - Schemas live in `MySQL/ConfigurationDatabase/schemas/<ConfigBasename>.json`, as JSON Schema
    plus a react-jsonschema-form `uiSchema`. `schemas/README.md` explains the format and how to
    review a draft.
- **`migrate/infer_schemas.js`** drafts a schema from two sources:
  - Every existing parameter set: types, values in use, how often each field appears.
  - The task's code: the HTML pages that load the config, and their scripts, scanned for
    `parameters.X`.

  How it decides each field:
  - **Required:** present in every set AND read by the code.
  - **Flagged:** fields the code never reads.
  - **Controls:** yes/no → radio; text with 2–8 values → pull-down; numbers → number box;
    lists → add/remove rows.
  - **Structured values become nested rows of number/text/yes-no boxes** (the change from this
    prompt): Trail Making circle positions, Digit Span's nested `Parameters`, Word Recall's
    `WordListOrder`, and "number or empty" fields like `PracticeSuggestedWidth`.
  - **JSON boxes:** only values that are genuinely mixed (a number in one set, a list in
    another) stay as one. In the five drafts, that's just Word Recall `Instructions01Time` and
    Questionnaire `variable`.
- **`migrate/load_schemas.js`** writes `migrate/Load_ParameterSchemas.sql`.
- **Drafts generated and loaded (all `"reviewed": false`)** for Word Recall, Trail Making, Digit
  Span, Spatial DMS and Questionnaire. Shared files cover 12 task types in total.
- **Checked:** all 318 existing parameter sets for those tasks pass their schema, and a new
  set's defaults pass too. The one exception is the questionnaire list, which deliberately
  makes you pick a questionnaire.
- **Site:** `library/ParameterEditor.js` renders the form with a **Form / JSON** toggle (new
  dependency: `@rjsf/core`, `@rjsf/utils`, `@rjsf/validator-ajv8` 5.24). It's used in the
  parameter library editor, the View page (read only) and the builder's task settings.
  - Required fields are checked before saving.
  - New sets start from the schema's defaults.
  - Draft schemas show a warning.
  - Tasks without a schema, and instruction sets, keep the JSON editor.

### 5. Docs updated

`MySQL/ConfigurationDatabase/ToDo.md`, `admin/AdminSetupInstructions.md` (copy-on-edit
section, deploy list), `schemas/README.md` (new), and NCMBatteryWebsite's `README.md` (what the
app does).

## How to use it

**Start the site locally** (MySQL running, `db_config.php` filled in, admin user exists):

```bash
# terminal 1 -- PHP API
cd ~/Documents/jatos_mac_java/study_assets_root/NCMBattery/MySQL/ConfigurationDatabase
php -S localhost:8000

# terminal 2 -- React site (after pulling, run npm install once: new dependencies)
cd ~/Documents/GitHub/NCMBatteryWebsite/user-website
npm install
npm start
```

`user-website/.env.local` must contain:

```
REACT_APP_API_BASE=http://localhost:8000
REACT_APP_ADMIN_API_BASE=http://localhost:8000/admin
```

Open **http://localhost:3000 in Chrome**. `admin/admin_common.php` needs
`ADMIN_ALLOWED_ORIGIN = 'http://localhost:3000'` locally; the committed file keeps the
placeholder. Safari may drop the login cookie on plain http.

**Rebuild the database contents from source**, in this order, always with UTF-8:

```bash
cd MySQL/ConfigurationDatabase/migrate
node extract.js && node generate_sql.js && node migrate_batteries.js && node load_schemas.js
cd ..
M="mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config"
$M < SeedData_TaskTypes.sql
$M < AddParameterSchemaColumn.sql
$M < migrate/Migrated_TaskConfig.sql
$M < migrate/Migrated_Batteries.sql
$M < migrate/Load_ParameterSchemas.sql
```

Every step is safe to re-run. `Migrated_Batteries.sql` replaces the batteries it lists by
`battery_index`. A battery created in the site under one of those indexes would be overwritten.

**Add a parameter form for another task:** `node migrate/infer_schemas.js CardSort` (use the
config file's basename), review `schemas/CardSort.json` per `schemas/README.md`, then
`node migrate/load_schemas.js` and load the SQL.

**Edit in the site:**
- Parameter sets → View → Edit as copy → change fields in the form → Save as new parameter set.
- Batteries → Edit as copy → change it in the builder → Save as new battery. Optionally tick
  "deactivate the original".

---

*Generated by Claude Opus 5.5 (Claude Code) on 2026-10-09.*
