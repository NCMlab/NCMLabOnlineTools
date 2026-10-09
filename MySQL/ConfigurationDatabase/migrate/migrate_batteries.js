#!/usr/bin/env node
// Turns Batteries/Batteries.js into SQL for the batteries + battery_tasks tables,
// plus a review report for every reference that couldn't be resolved.
//
// Like extract.js, this *runs* Batteries.js in an isolated vm context and reads the
// resulting BatteryList, rather than regex-parsing it (the file reuses `var List`,
// has commented-out pushes, etc.).
//
// Names are resolved against what extract.js found in the config/instruction files
// (the same data Migrated_TaskConfig.sql is built from), mirroring how each HTML page
// builds its pseudoSwitch() key at runtime:
//   parameters:   "<name>", else "<LANG>_<name>"          (ConsentForm.html, IntakeForm.html, ...)
//   instructions: "<LANG>_Instructions_<name>", else "<LANG>_<Task>_Instructions_<name>"
//                 (CardSortTask.html, Cancellation.html, ...), else exactly "<name>";
//                 the Stroop pages ignore the name and load "<LANG>_Stroop_Instructions".
// LANG is the battery's Language (default EN). If no instruction set exists in that
// language, the EN one is used and the fallback is listed in the report.
//
// The generated SQL looks rows up by name (not id), so it runs on any database that
// has had SeedData_TaskTypes.sql and Migrated_TaskConfig.sql applied. Each battery is
// DELETEd by battery_index and re-inserted, so re-running replaces these batteries
// with the current contents of Batteries.js (their battery_tasks rows cascade).
//
// Usage: node extract.js && node generate_sql.js && node migrate_batteries.js
// Output: Migrated_Batteries.sql, BATTERY_REVIEW.md (both in this folder)

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { TASK_NAME_BY_BASENAME, baseName } = require('./task_mapping');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const BATTERIES_JS = path.join(REPO_ROOT, 'Batteries', 'Batteries.js');
const EXTRACTED_DIR = path.join(__dirname, 'extracted');
const SQL_OUT = path.join(__dirname, 'Migrated_Batteries.sql');
const REVIEW_OUT = path.join(__dirname, 'BATTERY_REVIEW.md');

// Task names used in Batteries.js that differ from the task_types row they mean.
const TASK_ALIASES = {
  'Cancellation Task': 'Cancellation',
};

// Task types whose page loads one fixed instruction set regardless of the battery's
// Instructions value (see StroopColor.html etc.: pseudoSwitch(LANG+'_Stroop_Instructions')).
const FIXED_INSTRUCTIONS = {
  'Stroop Color': (lang) => `${lang}_Stroop_Instructions`,
  'Stroop Word': (lang) => `${lang}_Stroop_Instructions`,
  'Stroop Color/Word': (lang) => `${lang}_Stroop_Instructions`,
};

// Task pages that load no parameter or instruction file (their only pseudoSwitch() is for
// LabelNames), so whatever Batteries.js puts in Parameters/Instructions is never read.
const NO_CONFIG_TASKS = new Set(['Email Entry', 'Ready Hold', 'Cost of Sport']);

// Column limits from CreateSchema.sql, checked so MySQL never silently truncates.
const MAX_LEN = { battery_name: 100, description: 255, footer: 255, short_name: 50, redirect_url: 500, icon_name: 100 };

function sql(value) {
  if (value === null || value === undefined) return 'NULL';
  if (typeof value === 'boolean') return value ? '1' : '0';
  if (typeof value === 'number') return String(value);
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "''")}'`;
}

function loadBatteries() {
  const sandbox = { console: { log() {}, warn() {}, error() {} } };
  vm.createContext(sandbox);
  const source = fs.readFileSync(BATTERIES_JS, 'utf8');
  vm.runInContext(`${source}\n;this.__BatteryList = BatteryList;`, sandbox, { filename: BATTERIES_JS, timeout: 5000 });
  return sandbox.__BatteryList;
}

/** What Migrated_TaskConfig.sql will contain: task name -> parameter names / instruction names+languages. */
function loadAvailable() {
  const params = new Map(); // taskName -> Set(name)
  const instrs = new Map(); // taskName -> [{name, language}]
  const taskNames = new Set();
  for (const f of fs.readdirSync(EXTRACTED_DIR)) {
    if (!f.startsWith('parameters__') && !f.startsWith('instructions__')) continue;
    const result = JSON.parse(fs.readFileSync(path.join(EXTRACTED_DIR, f), 'utf8'));
    const mapped = TASK_NAME_BY_BASENAME[baseName(result.file)];
    const names = mapped === undefined ? [] : Array.isArray(mapped) ? mapped : [mapped];
    for (const reg of result.registrations || []) {
      if (reg.error || reg.needsReview || reg.isTimelineTrial || reg.json === undefined) continue;
      for (const task of names) {
        taskNames.add(task);
        if (result.kind === 'parameters') {
          if (!params.has(task)) params.set(task, new Set());
          params.get(task).add(reg.key);
        } else {
          if (!instrs.has(task)) instrs.set(task, []);
          instrs.get(task).push({ name: reg.key, language: reg.language || 'EN' });
        }
      }
    }
  }
  return { params, instrs, taskNames };
}

/** task_types names from SeedData_TaskTypes.sql -- the authoritative list of what can be referenced. */
function loadTaskTypes() {
  const seed = fs.readFileSync(path.join(__dirname, '..', 'SeedData_TaskTypes.sql'), 'utf8');
  const block = seed.slice(seed.indexOf('INTO task_types'), seed.indexOf(';', seed.indexOf('INTO task_types')));
  return new Set([...block.matchAll(/^\('([^']+)'/gm)].map((m) => m[1]));
}

function resolveParameter(available, task, name, lang) {
  if (!name) return { name: null };
  const set = available.params.get(task) || new Set();
  for (const candidate of [name, `${lang}_${name}`]) {
    if (set.has(candidate)) return { name: candidate };
  }
  return { name: null, problem: `parameter set "${name}" not found` };
}

function resolveInstruction(available, task, name, lang) {
  const list = available.instrs.get(task) || [];
  const find = (language) => {
    const inLang = list.filter((i) => i.language === language);
    if (FIXED_INSTRUCTIONS[task]) return inLang.find((i) => i.name === FIXED_INSTRUCTIONS[task](language));
    if (!name) return undefined;
    return (
      inLang.find((i) => i.name === `${language}_Instructions_${name}`) ||
      inLang.find((i) => new RegExp(`^${language}_\\w+_Instructions_${name}$`).test(i.name)) ||
      inLang.find((i) => i.name === name)
    );
  };
  if (!name && !FIXED_INSTRUCTIONS[task]) return { row: null };
  const hit = find(lang);
  if (hit) return { row: hit };
  const fallback = lang !== 'EN' && find('EN');
  if (fallback) return { row: fallback, note: `no ${lang} instruction set "${name}"; using EN "${fallback.name}"` };
  return { row: null, problem: `instruction set "${name}" not found` };
}

function checkLength(problems, field, value) {
  if (value && MAX_LEN[field] && String(value).length > MAX_LEN[field]) {
    problems.push(`${field} is ${String(value).length} chars (column max ${MAX_LEN[field]}) -- will be truncated or rejected`);
  }
}

function main() {
  const batteries = loadBatteries();
  const available = loadAvailable();
  const taskTypes = loadTaskTypes();

  const out = [
    '-- Auto-generated by migrate/migrate_batteries.js -- DO NOT hand-edit, regenerate instead.',
    '-- Source: Batteries/Batteries.js. Run AFTER SeedData_TaskTypes.sql and Migrated_TaskConfig.sql.',
    '-- Each battery is deleted by battery_index and re-inserted, so re-running this file replaces',
    '-- these batteries (and their battery_tasks) with the current contents of Batteries.js.',
    'USE ncmbattery_config;',
    'START TRANSACTION;',
    '',
  ];
  const skipped = []; // { index, name, reasons }
  const loadedWithGaps = []; // { index, name, issues }
  const notes = []; // { index, note }
  let loaded = 0;
  let taskRows = 0;

  for (const b of batteries) {
    const lang = b.Language || 'EN';
    const issues = [];
    if (!b.Language) notes.push({ index: b.index, note: 'no Language set; loaded as EN' });
    if (b.FullScreenMode !== undefined) {
      notes.push({ index: b.index, note: `FullScreenMode: ${JSON.stringify(b.FullScreenMode)} has no column in batteries; not migrated` });
    }

    const unknownTasks = [...new Set(b.TaskList.map((t) => TASK_ALIASES[t.Task] || t.Task).filter((t) => !taskTypes.has(t)))];
    if (unknownTasks.length) {
      skipped.push({ index: b.index, name: b.name, reasons: unknownTasks.map((t) => `task "${t}" has no task_types row`) });
      continue;
    }

    const header = {
      battery_index: b.index,
      battery_name: b.name ?? '',
      description: b.description ?? null,
      battery_instructions: b.BatteryInstructions ?? null,
      language: lang,
      run_audio_test: !!b.RunAudioTest,
      footer: b.Footer ?? null,
      short_name: b.shortName || null,
      header_buttons: b.HeaderButtonsToShow ? JSON.stringify(b.HeaderButtonsToShow) : null,
      languages_to_show: b.LanguagesToShow ? JSON.stringify(b.LanguagesToShow) : null,
      redirect_url: b.Redirect || null,
    };
    for (const field of Object.keys(MAX_LEN)) checkLength(issues, field, header[field]);

    out.push(
      `-- ===== battery_index ${b.index}: ${String(b.name).replace(/\n/g, ' ')} (${b.TaskList.length} tasks) =====`,
      `DELETE FROM batteries WHERE battery_index = ${sql(b.index)};`,
      `INSERT INTO batteries (${Object.keys(header).join(', ')})`,
      `VALUES (${Object.values(header).map(sql).join(', ')});`,
      'SET @battery_id = LAST_INSERT_ID();'
    );

    b.TaskList.forEach((t, i) => {
      const task = TASK_ALIASES[t.Task] || t.Task;
      const noConfig = NO_CONFIG_TASKS.has(task);
      const param = noConfig ? { name: null } : resolveParameter(available, task, t.Parameters, lang);
      const instr = noConfig ? { row: null } : resolveInstruction(available, task, t.Instructions, lang);
      const where = `task ${i + 1} (${t.Task})`;
      if (param.problem) issues.push(`${where}: ${param.problem} -- parameter left empty`);
      if (instr.problem) issues.push(`${where}: ${instr.problem} -- instructions left empty`);
      if (instr.note) notes.push({ index: b.index, note: `${where}: ${instr.note}` });
      checkLength(issues, 'icon_name', t.IconName);

      const tt = `(SELECT task_type_id FROM task_types WHERE task_name = ${sql(task)})`;
      const paramSql = param.name
        ? `(SELECT parameter_id FROM task_parameters WHERE task_type_id = ${tt} AND parameter_name = ${sql(param.name)})`
        : 'NULL';
      const instrSql = instr.row
        ? `(SELECT instruction_id FROM task_instructions WHERE task_type_id = ${tt} AND instruction_name = ${sql(instr.row.name)} AND language = ${sql(instr.row.language)})`
        : 'NULL';
      out.push(
        'INSERT INTO battery_tasks (battery_id, task_type_id, sort_order, parameter_id, instruction_id, icon_name)',
        `VALUES (@battery_id, ${tt}, ${i + 1}, ${paramSql}, ${instrSql}, ${sql(t.IconName ?? null)});`
      );
      taskRows++;
    });
    out.push('');
    loaded++;
    if (issues.length) loadedWithGaps.push({ index: b.index, name: b.name, issues });
  }

  out.push('COMMIT;', '');
  fs.writeFileSync(SQL_OUT, out.join('\n'));

  const review = [
    '# Battery migration: review',
    '',
    `Generated by \`migrate_batteries.js\` from \`Batteries/Batteries.js\`. ${batteries.length} batteries found:`,
    `**${loaded} written** to \`Migrated_Batteries.sql\` (${taskRows} battery_tasks rows), **${skipped.length} skipped**.`,
    '',
    '## Skipped batteries',
    '',
    'Not written at all, because a task in them has no `task_types` row. Loading them with that task',
    'dropped would silently change what participants see. Add the task type to',
    '`SeedData_TaskTypes.sql` (and `TASK_NAME_BY_BASENAME`/`TASK_ALIASES` if needed), then regenerate.',
    '',
    skipped.length
      ? skipped.map((s) => `- **${s.index}** (${s.name}): ${s.reasons.join('; ')}`).join('\n')
      : '_none_',
    '',
    '## Loaded, but with unresolved references',
    '',
    'These batteries were written, but the listed parameter/instruction sets do not exist in any',
    'config or instruction file (usually renamed, commented out, or never created), so that column',
    'was left empty. These references are already broken in Batteries.js today. Fix the name in',
    'Batteries.js and regenerate, or attach the right set in the admin UI.',
    '',
    loadedWithGaps.length
      ? loadedWithGaps.map((g) => `- **${g.index}** (${g.name})\n${g.issues.map((x) => `  - ${x}`).join('\n')}`).join('\n')
      : '_none_',
    '',
    '## Notes',
    '',
    notes.length ? notes.map((n) => `- **${n.index}**: ${n.note}`).join('\n') : '_none_',
    '',
  ];
  fs.writeFileSync(REVIEW_OUT, review.join('\n'));

  console.log(`Batteries: ${batteries.length} found, ${loaded} written (${taskRows} tasks), ${skipped.length} skipped.`);
  console.log(`${loadedWithGaps.length} loaded batteries have unresolved references. See BATTERY_REVIEW.md.`);
}

main();
