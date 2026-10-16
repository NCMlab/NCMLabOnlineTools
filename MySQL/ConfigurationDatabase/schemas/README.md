# Parameter schemas

One file per task config file (e.g. `WordRecall.json` for `config/WordRecall_Setup.js`). Each
describes that task's parameters so the admin site (NCMBatteryWebsite) can edit them as a
form — Yes/No radios, pull-downs, number boxes, lists with Add/Remove — and check required
fields before saving. The site has **no JSON editing**: a task type without a schema shows a
message instead, so every task type with parameter sets needs one. As of 2026-10-15 all of
them have one (23 files covering 35 task types).

| Key | Meaning |
|---|---|
| `taskTypes` | Every `task_types` row the schema applies to (task types that load the same config file share one schema) |
| `reviewed` | `true` = every field checked against the task code. `false` = a draft, or a reviewed form with open CHECK items (listed in `reviewNotes`). The site shows a "Draft form" warning until this is `true` |
| `reviewNotes` | What was checked, and each open `CHECK:` (a setting that doesn't work the way its name suggests) |
| `schema` | [JSON Schema](https://json-schema.org/understanding-json-schema/) for the parameter object |
| `uiSchema` | [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema) layout: field order, radio widgets, and `"ui:field"` for the site's own inputs (below) |
| `generated`, `readByCodeButNotInAnySet` | Notes from the generator, for reviewers only |

### The site's own inputs (`"ui:field"`)

For values that existing sets store in more than one shape, so no single JSON Schema type fits
(leave `type` out of the property):

| `ui:field` | Shows | Saves | Used for |
|---|---|---|---|
| `numberOrText` | one text box | a number if the text is a number (`400`), else the text (`"400vw"`) | ImageCopy canvas size |
| `optionalText` | one text box | the text, or `[]` when empty | Questionnaire `variable` |
| `numberList` | one text box, e.g. `10000, 8000` | a list of whole numbers | WordRecall `Instructions01Time` |

`"json"` from `infer_schemas.js` is no longer editable in the site (it shows the value and "no
form control yet"): replace it with a real type or one of the inputs above.

## Reviewing a draft

Drafts come from `migrate/infer_schemas.js`, which reads every existing parameter set and the
task's code. Check each field in `schema.properties`:

- **`title`** is generated from the field name ("TimePerWord" → "Time per word"). Rename it to
  what a researcher would call it, and add units, e.g. "Time per word (ms)".
- **`description`** shows "Values in use: …" and warnings such as "not found in the task code
  (may be unused)". Replace it with help text.
- **`enum`** (pull-down options) only lists values already used in some set. Add any other
  value the task accepts, or remove `enum` if the field is genuinely free text.
- **`minimum` / `maximum`** aren't generated. Add them for numbers where a wrong value would
  break the task.
- **`required`** = present in every existing set AND read by the code. Remove a field from it
  if the task works without it.
- **`readByCodeButNotInAnySet`** lists fields the code reads that no set defines yet (many come
  from shared code like `CommonParts.js`). Add any that researchers should be able to set.

Then set `"reviewed": true`.

## Loading into the database

```bash
cd MySQL/ConfigurationDatabase/migrate
node load_schemas.js        # writes Load_ParameterSchemas.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < Load_ParameterSchemas.sql
```

A database created before this feature also needs `AddParameterSchemaColumn.sql` once (safe to
re-run). Task types without a schema keep the JSON editor.

## Adding a schema for another task

```bash
node infer_schemas.js CardSort ClockDrawing   # config basenames; existing files are never overwritten
```
