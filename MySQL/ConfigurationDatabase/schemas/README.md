# Parameter schemas

One file per task config file (e.g. `WordRecall.json` for `config/WordRecall_Setup.js`). Each
describes that task's parameters so the admin site (NCMBatteryWebsite) can edit them as a
form — Yes/No radios, pull-downs, number boxes — instead of raw JSON, and check required
fields before saving.

| Key | Meaning |
|---|---|
| `taskTypes` | Every `task_types` row the schema applies to (task types that load the same config file share one schema) |
| `reviewed` | `false` = machine-generated draft. The site shows a "Draft form" warning until this is `true` |
| `schema` | [JSON Schema](https://json-schema.org/understanding-json-schema/) for the parameter object |
| `uiSchema` | [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema) layout: field order, radio widgets, `"ui:field": "json"` for fields edited as a JSON box |
| `generated`, `readByCodeButNotInAnySet` | Notes from the generator, for reviewers only |

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
