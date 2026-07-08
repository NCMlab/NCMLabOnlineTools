#!/usr/bin/env node
// Extracts named parameter/instruction objects out of config/*.js and
// InstructionsAndStimuli/Instructions/*.js by actually *running* each file
// in an isolated vm context and intercepting its add('key', fn) calls.
//
// Why run the JS instead of regex-parsing it: these files are not uniform
// (object literals, dot-assignment, arrays built with .push, computed values
// referencing local vars/comments). Executing the real file sidesteps all of
// that — the vm context ends up in exactly the state the JATOS runtime would
// reach, so we can read the same variable pseudoSwitch() would read.
//
// Usage: node extract.js
// Output: one JSON file per source file in ./extracted/, plus _summary.json

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const CONFIG_DIR = path.join(REPO_ROOT, 'config');
const INSTR_DIR = path.join(REPO_ROOT, 'InstructionsAndStimuli', 'Instructions');
const OUT_DIR = path.join(__dirname, 'extracted');

const KNOWN_LANG_PREFIXES = ['EN', 'FR', 'KR'];

// The HTML pages set these globals with an inline <script> before loading a
// task's config/instructions file (see e.g. html/JATOS/SpatialDMS.html).
// Harvested by hand from each page's <script> tags so extraction reproduces
// the same runtime state the browser would have.
const BASE_FOLDER_NAME_BY_FILE = {
  'MatrixReasoning_Instructions.js': 'assets/Images/MatrixReasoning/',
  'SpatialDMS_Instructions.js': 'assets/InstructionalImages/',
  'vDMS_Instructions.js': 'assets/InstructionalImages/',
};

const GENERAL_SETUP_PATH = path.join(CONFIG_DIR, 'General_Setup.js');

function extractFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const registrations = []; // { key, fn }
  const pushed = []; // values passed to timeline.push(...) inside a callback

  const sandbox = {
    add(key, fn) { registrations.push({ key, fn }); },
    timeline: { push(v) { pushed.push(v); } },
    console: { log() {}, warn() {}, error() {} },
  };
  const baseFolderName = BASE_FOLDER_NAME_BY_FILE[path.basename(filePath)];
  if (baseFolderName !== undefined) sandbox.BaseFolderName = baseFolderName;
  vm.createContext(sandbox);

  // Preload General_Setup.js: several files assume its globals (StimulusFontSize,
  // LabelNames, etc.) are already defined, because the HTML pages load it first.
  // Its own add() registrations are irrelevant here, so add() is a no-op during preload.
  if (path.resolve(filePath) !== path.resolve(GENERAL_SETUP_PATH)) {
    const generalSource = fs.readFileSync(GENERAL_SETUP_PATH, 'utf8');
    const realAdd = sandbox.add;
    sandbox.add = () => {};
    try {
      vm.runInContext(generalSource, sandbox, { filename: GENERAL_SETUP_PATH, timeout: 5000 });
    } catch (err) {
      return { file: filePath, fileError: `preload of General_Setup.js failed: ${err.message}`, registrations: [] };
    }
    sandbox.add = realAdd;
  }

  try {
    vm.runInContext(source, sandbox, { filename: filePath, timeout: 5000 });
  } catch (err) {
    return { file: filePath, fileError: err.message, registrations: [] };
  }

  const results = [];
  for (const { key, fn } of registrations) {
    const beforeSnapshot = {};
    for (const k of Object.keys(sandbox)) beforeSnapshot[k] = sandbox[k];
    const pushedBefore = pushed.length;

    // Null out the two conventional target vars before each call. Some files
    // intentionally alias two registrations to the identical object (e.g.
    // "CardSort_002 = CardSort_001"), so a plain before/after diff sees no
    // change on the second registration — nulling first forces a real signal.
    sandbox.parameters = undefined;
    sandbox.Instructions = undefined;

    try {
      fn();
    } catch (err) {
      results.push({ key, error: `callback threw: ${err.message}` });
      continue;
    }

    if (
      sandbox.parameters === undefined &&
      sandbox.Instructions === undefined &&
      pushed.length > pushedBefore
    ) {
      // Registration pushes a jsPsych trial fragment straight onto the shared
      // timeline (e.g. standardized questionnaires in SelfReport_Setup.js)
      // rather than assigning a named parameter object. Captured separately
      // since it isn't a task_parameters row in the current schema.
      const value = pushed[pushed.length - 1];
      let json;
      try { json = JSON.stringify(value); } catch (err) { json = undefined; }
      results.push({
        key,
        sourceVar: 'timeline.push',
        isTimelineTrial: true,
        language: KNOWN_LANG_PREFIXES.find((p) => key.startsWith(p + '_')) || null,
        json,
      });
      continue;
    }

    let sourceVar;
    if (sandbox.parameters !== undefined) {
      sourceVar = 'parameters'; // conventional target var name in config/*.js
    } else if (sandbox.Instructions !== undefined) {
      sourceVar = 'Instructions'; // conventional target var name in Instructions/*.js
    } else {
      // Neither conventional var was touched — fall back to a generic diff
      // for non-standard registrations (e.g. LabelNames in General_Setup.js).
      const changed = Object.keys(sandbox).filter((k) => {
        if (k === 'parameters' || k === 'Instructions') return false; // still unset, not meaningful
        return !(k in beforeSnapshot) || sandbox[k] !== beforeSnapshot[k];
      });
      if (changed.length === 1) {
        sourceVar = changed[0];
      } else {
        results.push({
          key,
          needsReview: true,
          reason: changed.length === 0
            ? 'callback did not change any variable and did not push to the timeline'
            : `ambiguous: ${changed.length} variables changed (${changed.join(', ')})`,
        });
        continue;
      }
    }

    const value = sandbox[sourceVar];
    let json;
    try {
      json = JSON.stringify(value);
    } catch (err) {
      results.push({ key, needsReview: true, reason: `not JSON-serializable: ${err.message}` });
      continue;
    }
    if (json === undefined) {
      results.push({ key, needsReview: true, reason: `value of '${sourceVar}' is undefined/function/symbol, not representable as JSON` });
      continue;
    }

    const langMatch = KNOWN_LANG_PREFIXES.find((p) => key.startsWith(p + '_'));
    results.push({ key, sourceVar, language: langMatch || null, json });
  }

  return { file: filePath, registrations: results };
}

function jsFilesIn(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.js'))
    .map((f) => path.join(dir, f));
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const targets = [
    ...jsFilesIn(CONFIG_DIR).map((file) => ({ file, kind: 'parameters' })),
    ...jsFilesIn(INSTR_DIR).map((file) => ({ file, kind: 'instructions' })),
  ];

  const summary = [];
  for (const { file, kind } of targets) {
    const result = extractFile(file);
    result.kind = kind;
    const outName = `${kind}__${path.basename(file, '.js')}.json`;
    fs.writeFileSync(path.join(OUT_DIR, outName), JSON.stringify(result, null, 2));

    const ok = result.registrations.filter((r) => !r.error && !r.needsReview).length;
    const review = result.registrations.filter((r) => r.needsReview).length;
    const errs = result.registrations.filter((r) => r.error).length;
    summary.push({
      file: path.basename(file),
      kind,
      total: result.registrations.length,
      ok,
      review,
      errs,
      fileError: result.fileError || null,
    });
  }

  fs.writeFileSync(path.join(OUT_DIR, '_summary.json'), JSON.stringify(summary, null, 2));

  let totalOk = 0, totalReview = 0, totalErr = 0, fileErrors = 0;
  console.log(`${'file'.padEnd(38)} kind          ok  review  err`);
  for (const s of summary) {
    if (s.fileError) {
      fileErrors++;
      console.log(`${s.file.padEnd(38)} FILE ERROR: ${s.fileError}`);
      continue;
    }
    totalOk += s.ok; totalReview += s.review; totalErr += s.errs;
    console.log(`${s.file.padEnd(38)} ${s.kind.padEnd(13)} ${String(s.ok).padStart(2)}  ${String(s.review).padStart(6)}  ${String(s.errs).padStart(3)}`);
  }
  console.log('---');
  console.log(`Files processed: ${summary.length} (${fileErrors} failed to execute)`);
  console.log(`Registrations:   ok=${totalOk}  needsReview=${totalReview}  callbackErr=${totalErr}`);
}

main();
