#!/usr/bin/env node
// Drafts a parameter schema (JSON Schema + react-jsonschema-form uiSchema) for a task's
// config file, so the admin site can edit parameters with Yes/No radios, pull-downs and
// number boxes instead of raw JSON.
//
// Two sources are combined:
//   1. Every extracted parameter set for the file (extracted/parameters__*.json): field
//      types, how often each field appears, and the values actually used.
//   2. The task's code: every html/JATOS/*.html page that loads the config file, plus the
//      scripts it loads, scanned for `parameters.X` / `parameters['X']`. A field present
//      in every set AND read by the code is marked required; a field never seen in the
//      code is flagged in its description (it may be unused, or read via another variable).
//
// Output is a DRAFT ("reviewed": false). Pull-down options only contain values someone has
// already used, and titles are generated from field names -- review each file by hand.
// Existing files are never overwritten (pass --force to regenerate one).
//
// Usage:  node infer_schemas.js                        # the default five config files
//         node infer_schemas.js TrailMaking DigitSpan  # by config basename
//         node infer_schemas.js --force WordRecall
// Output: ../schemas/<basename>.json  -- then run load_schemas.js

'use strict';
const fs = require('fs');
const path = require('path');
const { TASK_NAME_BY_BASENAME, baseName } = require('./task_mapping');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const EXTRACTED_DIR = path.join(__dirname, 'extracted');
const HTML_DIR = path.join(REPO_ROOT, 'html', 'JATOS');
const SCHEMA_DIR = path.join(__dirname, '..', 'schemas');

const DEFAULT_BASENAMES = ['WordRecall', 'TrailMaking', 'DigitSpan', 'SpatialDMS', 'Questionnaire'];

// A string field becomes a pull-down when it has a handful of distinct values, none of
// which look like a path/file name (those vary freely, so a fixed list would block new ones).
const MAX_ENUM_VALUES = 8;
const looksLikePath = (v) => /[/\\.]/.test(v);

// Hand-written overrides merged over the inferred property, keyed by config basename then field.
const OVERRIDES = {
  Questionnaire: {
    // An ordered list of questionnaire names: each item is a pull-down of the known names.
    questionnaire: (observed) => ({
      schema: {
        type: 'array',
        title: 'Questionnaires (in order)',
        minItems: 1,
        items: { type: 'string', enum: [...new Set(observed.flat())].sort() },
      },
      ui: {},
    }),
  },
};

function humanize(key) {
  const words = key
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim()
    .split(/\s+/);
  return words.map((w, i) => (i === 0 ? w[0].toUpperCase() + w.slice(1) : /^[A-Z0-9]+$/.test(w) ? w : w.toLowerCase())).join(' ');
}

const kindOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v);

function mostCommon(values) {
  const counts = new Map();
  for (const v of values) {
    const k = JSON.stringify(v);
    counts.set(k, (counts.get(k) || 0) + 1);
  }
  return JSON.parse([...counts.entries()].sort((a, b) => b[1] - a[1])[0][0]);
}

/** Every field name the task's pages and their scripts read off `parameters`. */
function fieldsReadByCode(configBase) {
  const read = new Set();
  const pages = [];
  const configRe = new RegExp(`config/${configBase}_[Ss]etup\\.js`);
  for (const f of fs.readdirSync(HTML_DIR).filter((x) => x.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(HTML_DIR, f), 'utf8');
    if (!configRe.test(html)) continue;
    pages.push(f);
    const sources = [html];
    for (const m of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
      if (/jspsych|ImportedModules|jatos\.js|annyang/.test(m[1])) continue;
      // Script paths in these pages resolve from the study-assets root (e.g. "functions/...").
      const p = [path.join(REPO_ROOT, m[1]), path.join(HTML_DIR, m[1])].find((x) => fs.existsSync(x));
      if (p) sources.push(fs.readFileSync(p, 'utf8'));
    }
    for (const src of sources) {
      for (const m of src.matchAll(/\bparameters(?:\.([A-Za-z_$][\w$]*)|\[\s*['"]([\w$]+)['"]\s*\])/g)) {
        read.add(m[1] || m[2]);
      }
    }
  }
  return { read, pages };
}

/**
 * Infers { schema, ui } for one field from every value it has across the parameter sets.
 * Recurses into objects and lists, so structured values made of numbers/booleans/text
 * (Trail Making circle positions, Digit Span's nested settings, list orders) become nested
 * form rows instead of a JSON box. `top` is false inside a structure: no defaults (the
 * top-level default covers the whole value), no "values in use" notes, no pull-downs.
 */
function inferValue(key, values, top = true) {
  const title = humanize(key);
  const present = values.filter((v) => v !== null);
  const kinds = new Set(present.map(kindOf));
  const nullable = present.length < values.length;
  const withDefault = (schema) => (top ? { ...schema, default: mostCommon(values) } : schema);
  // A field that is sometimes null (e.g. "no practice") accepts an empty entry too.
  const typeOf = (t) => (nullable ? [t, 'null'] : t);

  if (present.length === 0 || kinds.size !== 1) {
    // Never set, or genuinely mixed (e.g. a number in one set, a list in another).
    return {
      schema: withDefault({ title, description: `Edited as JSON (${[...new Set(values.map(kindOf))].join(' or ')}).` }),
      ui: { 'ui:field': 'json' },
    };
  }
  const kind = [...kinds][0];

  if (kind === 'boolean') {
    return { schema: withDefault({ type: typeOf('boolean'), title }), ui: { 'ui:widget': 'radio' } };
  }
  if (kind === 'number') {
    const type = present.every(Number.isInteger) ? 'integer' : 'number';
    const schema = withDefault({ type: typeOf(type), title });
    if (top) schema.description = `Values in use: ${[...new Set(values.map((v) => JSON.stringify(v)))].slice(0, 10).join(', ')}`;
    return { schema, ui: {} };
  }
  if (kind === 'string') {
    const distinct = [...new Set(present)];
    if (top && !nullable && distinct.length >= 2 && distinct.length <= MAX_ENUM_VALUES && !distinct.some(looksLikePath)) {
      return { schema: withDefault({ type: 'string', title, enum: distinct.sort() }), ui: {} };
    }
    return { schema: withDefault({ type: typeOf('string'), title }), ui: {} };
  }
  if (kind === 'array') {
    const elements = present.flat(1);
    if (elements.length === 0) {
      return { schema: withDefault({ title, description: 'Edited as JSON (always empty so far).' }), ui: { 'ui:field': 'json' } };
    }
    const item = inferValue('item', elements, false);
    if (item.ui['ui:field'] === 'json') {
      return { schema: withDefault({ title, description: 'Edited as JSON (list of mixed values).' }), ui: { 'ui:field': 'json' } };
    }
    delete item.schema.title; // rows inside a list don't need their own label
    const ui = Object.keys(item.ui).length ? { items: item.ui } : {};
    return { schema: withDefault({ type: typeOf('array'), title, items: item.schema }), ui };
  }
  // kind === 'object'
  const keys = [];
  for (const v of present) for (const k of Object.keys(v)) if (!keys.includes(k)) keys.push(k);
  const properties = {};
  const ui = {};
  for (const k of keys) {
    const sub = inferValue(k, present.filter((v) => k in v).map((v) => v[k]), false);
    properties[k] = sub.schema;
    if (Object.keys(sub.ui).length) ui[k] = sub.ui;
  }
  const required = keys.filter((k) => present.every((v) => k in v));
  return {
    schema: withDefault({ type: typeOf('object'), title, required, properties, additionalProperties: true }),
    ui,
  };
}

function inferForBasename(base) {
  const file = fs
    .readdirSync(EXTRACTED_DIR)
    .find((f) => f.startsWith('parameters__') && baseName(f.replace(/^parameters__/, '').replace(/\.json$/, '.js')) === base);
  if (!file) throw new Error(`No extracted parameter file for "${base}"`);
  const extracted = JSON.parse(fs.readFileSync(path.join(EXTRACTED_DIR, file), 'utf8'));
  const sets = extracted.registrations.filter((r) => r.json && !r.error && !r.needsReview).map((r) => JSON.parse(r.json));
  if (!sets.length) throw new Error(`No usable parameter sets in ${file}`);

  const { read, pages } = fieldsReadByCode(base);
  const keys = [];
  for (const s of sets) for (const k of Object.keys(s)) if (!keys.includes(k)) keys.push(k);

  const properties = {};
  const uiSchema = {};
  const required = [];
  for (const key of keys) {
    const present = sets.filter((s) => key in s);
    const values = present.map((s) => s[key]);
    let { schema, ui } = inferValue(key, values);
    const override = OVERRIDES[base]?.[key];
    if (override) ({ schema, ui } = override(values));

    const notes = [];
    if (present.length < sets.length) notes.push(`in ${present.length} of ${sets.length} sets`);
    if (pages.length && !read.has(key)) notes.push('not found in the task code (may be unused)');
    if (notes.length) schema.description = [schema.description, ...notes].filter(Boolean).join(' · ');

    if (present.length === sets.length && (read.has(key) || !pages.length)) required.push(key);
    properties[key] = schema;
    if (Object.keys(ui).length) uiSchema[key] = ui;
  }
  // Fields the code reads that no existing set has -- worth knowing about when reviewing.
  const readButAbsent = [...read].filter((k) => !keys.includes(k)).sort();

  // '*' = any field not listed (e.g. one added by hand to a set) goes last.
  uiSchema['ui:order'] = [...required, ...keys.filter((k) => !required.includes(k)), '*'];
  const mapped = TASK_NAME_BY_BASENAME[base];
  return {
    taskTypes: Array.isArray(mapped) ? mapped : [mapped],
    reviewed: false,
    generated: `migrate/infer_schemas.js on ${new Date().toISOString().slice(0, 10)} from ${sets.length} parameter sets; code scanned: ${pages.join(', ') || 'none found'}`,
    readByCodeButNotInAnySet: readButAbsent,
    schema: {
      type: 'object',
      title: `${(Array.isArray(mapped) ? mapped[0] : mapped)} parameters`,
      required,
      properties,
      additionalProperties: true, // keep fields the schema doesn't know about
    },
    uiSchema,
  };
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const bases = args.filter((a) => a !== '--force');
  fs.mkdirSync(SCHEMA_DIR, { recursive: true });
  for (const base of bases.length ? bases : DEFAULT_BASENAMES) {
    const out = path.join(SCHEMA_DIR, `${base}.json`);
    if (fs.existsSync(out) && !force) {
      console.log(`${base}: ${path.relative(process.cwd(), out)} exists, skipped (use --force to regenerate)`);
      continue;
    }
    const draft = inferForBasename(base);
    fs.writeFileSync(out, JSON.stringify(draft, null, 2) + '\n');
    const props = Object.values(draft.schema.properties).map((p) => ({ ...p, type: Array.isArray(p.type) ? p.type[0] : p.type }));
    const count = (pred) => props.filter(pred).length;
    console.log(
      `${base}: ${props.length} fields (${count((p) => p.type === 'boolean')} yes/no, ${count((p) => p.enum)} pull-down, ` +
        `${count((p) => p.type === 'integer' || p.type === 'number')} number, ${count((p) => p.type === 'string' && !p.enum)} text, ` +
        `${count((p) => p.type === 'array')} list, ${count((p) => p.type === 'object')} group, ${count((p) => !p.type)} JSON), ${draft.schema.required.length} required -> ${path.basename(out)}`
    );
  }
}

main();
