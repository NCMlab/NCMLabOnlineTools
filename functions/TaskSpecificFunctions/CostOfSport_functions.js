// =============================================================
// CostOfSport_functions.js
// Shared functions for the Cost of Sport questionnaire, used by
// both html/JATOS/CostOfSport.html and Playground/TestCostOfSport.html.
//
// Requires (loaded before this file):
//   InstructionsAndStimuli/EN/Questionnaires/costOfSport.js  (EN_CostOfSport)
//   html2pdf.bundle.min.js                                    (downloadCostReport)
// and a global `jsPsych` created by the page (addFlatResponseToData).
// =============================================================


// ── Flattening of matrix responses ───────────────────────────

// provided by google in response to the question:
//  JAVASCRIPT flatten an object of objects
// The output name is COLUMN_ROW, which works for matrixdropdown
function flattenMatrixDropdownObject(obj, prefix = '') {
  let result = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = prefix ? `${key}_${prefix}` : key;
      const value = obj[key];

      // Check if value is a plain object (and not an array or null)
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively merge the nested object properties
        Object.assign(result, flattenMatrixDropdownObject(value, newKey));
      } else {
        // Assign the primitive value or array to the new key path
        result[newKey] = value;
      }
    }
  }
  return result;
}

// Same as above, but the output name is ROW_COLUMN, which is what we want for matrixdynamic
function flattenMatrixDynamicObject(obj, prefix = '') {
  let result = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = prefix ? `${prefix}_${key}` : key;
      const value = obj[key];

      // Check if value is a plain object (and not an array or null)
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively merge the nested object properties
        Object.assign(result, flattenMatrixDynamicObject(value, newKey));
      } else {
        // Assign the primitive value or array to the new key path
        result[newKey] = value;
      }
    }
  }
  return result;
}

// Searches EN_CostOfSport.survey_JSON for the element whose "name"
// matches key, and returns its "type" ('other' if not found).
function getQuestionType(key) {
  const survey = EN_CostOfSport.survey_JSON;
  for (const page of survey.pages) {
    for (const element of page.elements) {
      if (element.name === key) {
        return element.type || 'other';
      }
    }
  }
  return 'other';
}

// Takes the survey trial's "response" object and returns a copy in which every
// matrixdropdown / matrixdynamic answer is unpacked into one key per cell.
//   matrixdropdown:          COLUMN_ROW
//   matrixdynamic (array):   NAME<rowNumber>  for the column with the same name as the matrix,
//                            NAME<rowNumber>_COLUMN for all other columns
//   matrixdynamic (object):  ROW_COLUMN
// The result is built up rather than unpacking in place and deleting the matrix keys,
// because an unpacked name can equal another question's name (e.g. row 2 of
// Sport_Curr is "Sport_Curr2", which is also a question) and would then be deleted.
function flattenSurveyResponse(response) {
  const flat = {};

  for (const [key, value] of Object.entries(response)) {
    const qType = getQuestionType(key);
    if (qType === 'matrixdropdown') {
      Object.assign(flat, flattenMatrixDropdownObject(value));
    } else if (qType === 'matrixdynamic') {
      if (Array.isArray(value)) {
        // cycle over the rows in the array
        for (let i = 0; i < value.length; i++) {
          for (const [key2, value2] of Object.entries(value[i])) {
            const name = (key2 === key) ? `${key}${i + 1}` : `${key}${i + 1}_${key2}`;
            flat[name] = value2;
          }
        }
      } else {
        Object.assign(flat, flattenMatrixDynamicObject(value));
      }
    } else {
      flat[key] = value;
    }
  }
  return flat;
}

function addFlatResponseToData(trialData) {
  const resp = trialData.response || {};
  jsPsych.data.addProperties(resp);
}


// ── Ordered CSV output ───────────────────────────────────────
// LOAD A CSV FILE FOR THE COLUMN HEADERS OF THE OUTPUT DATA FILE.
// THIS ENSURES AN ORDER AND THAT THE CORRECT DATA IS OUTPUT, EVEN
// WHEN THERE IS NO VALUE PROVIDED FOR A GIVEN COLUMN.

// Minimal CSV parser: handles quoted fields, embedded commas/quotes,
// and CRLF/LF line endings. Returns an array of row-arrays.
function parseCSVText(text) {
  text = text.replace(/^﻿/, ''); // strip UTF-8 BOM if present
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\r') {
      // ignore; the following \n (or end of a lone \r line) ends the row
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  // last field/row if the file doesn't end with a newline
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

// Fetches CodeBookSheet.csv and returns the ordered list of column
// names (its first, and currently only, column).
async function loadCodeBookHeaders(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not load code book "${url}": ${response.status} ${response.statusText}`);
  }
  const text = await response.text();
  return parseCSVText(text)
    .map(row => (row[0] || '').replace(/ /g, ' ').trim())
    .filter(name => name.length > 0);
}

function csvEscapeField(value) {
  if (value === undefined || value === null) return '';
  const str = String(value);
  if (/[",\r\n]/.test(str)) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// Builds a CSV string (header row + one data row) with columns in the
// exact order given by `headers`. Any header missing from `dataObj`
// is written as an empty field rather than being skipped or erroring.
function objectToOrderedCSV(dataObj, headers) {
  const headerRow = headers.map(csvEscapeField).join(',');
  const dataRow = headers.map(h => csvEscapeField(dataObj[h])).join(',');
  return headerRow + '\r\n' + dataRow + '\r\n';
}

// Loads the code book and returns the ordered CSV string for dataObj.
async function buildOrderedCSV(dataObj, codeBookUrl) {
  const headers = await loadCodeBookHeaders(codeBookUrl);
  return objectToOrderedCSV(dataObj, headers);
}

function downloadCSV(filename, csvString) {
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function costOfSportFilename() {
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  return "CostOfSport_" + ts + ".csv";
}


// ── isSuggested questions ────────────────────────────────────

// Scans the survey JSON for isSuggested: true. Plain questions go in .questions;
// matrix columns (matrixdynamic / matrixdropdown) go in .columns as
// matrixName -> Set(columnName), because their cells aren't survey-level questions.
function collectSuggestedNames(node, found) {
  found = found || { questions: new Set(), columns: new Map() };
  if (Array.isArray(node)) {
    node.forEach(function (item) { collectSuggestedNames(item, found); });
  } else if (node && typeof node === "object") {
    if (Array.isArray(node.columns) && typeof node.name === "string") {
      node.columns.forEach(function (col) {
        if (col && col.isSuggested === true && typeof col.name === "string") {
          if (!found.columns.has(node.name)) found.columns.set(node.name, new Set());
          found.columns.get(node.name).add(col.name);
        }
      });
    }
    if (node.isSuggested === true && typeof node.name === "string" && !node.cellType) {
      found.questions.add(node.name);
    }
    Object.keys(node).forEach(function (key) {
      if (key !== "columns") collectSuggestedNames(node[key], found);
    });
  }
  return found;
}

// Wires up the "isSuggested" behavior: a soft, non-blocking version of isRequired.
// Unanswered isSuggested questions (or matrix cells in an isSuggested column) show
// the same red error styling as a required question, and both page-to-page "Next"
// and the final "Complete" are held until the participant either answers them or
// clicks "Proceed with unanswered question". Once that button is clicked, the
// flagged items are remembered as acknowledged and will not be re-flagged later.
function setupSuggestedQuestions(survey) {
  var suggested = collectSuggestedNames(EN_CostOfSport.survey_JSON);
  if (suggested.questions.size === 0 && suggested.columns.size === 0) return;

  var overrideConfirmed = false;
  var pendingAction = null; // "nextPage" | "complete", set right before a block
  var lastFlaggedKeys = [];
  var acknowledgedUnanswered = new Set();
  var suggestedMessage = "This question is optional but suggested. Please answer it, or click \"Proceed with unanswered question\" below.";

  var proceedAction = survey.addNavigationItem({
    id: "proceed-unanswered",
    title: "Proceed with unanswered question",
    visible: false,
    css: "suggested-proceed-btn",
    action: function () {
      overrideConfirmed = true;
      if (pendingAction === "nextPage") {
        survey.nextPage();
      } else {
        survey.completeLastPage();
      }
    }
  });

  // Returns [{ q, key }] for every unanswered, unacknowledged suggested item among
  // the given questions. For matrices, q is the cell question and key identifies
  // matrix + row + column.
  function unansweredAmong(questions) {
    var unanswered = [];
    questions.forEach(function (q) {
      if (!q.isVisible) return;
      if (suggested.questions.has(q.name)) {
        if (q.isEmpty() && !acknowledgedUnanswered.has(q.name)) {
          unanswered.push({ q: q, key: q.name });
        }
      }
      var cols = suggested.columns.get(q.name);
      if (cols && q.visibleRows) {
        q.visibleRows.forEach(function (row, i) {
          cols.forEach(function (colName) {
            var cell = row.getQuestionByColumnName(colName);
            var key = q.name + "|" + i + "|" + colName;
            if (cell && cell.isVisible && !cell.isReadOnly && cell.isEmpty() &&
                !acknowledgedUnanswered.has(key)) {
              unanswered.push({ q: cell, key: key });
            }
          });
        });
      }
    });
    return unanswered;
  }

  function unansweredAcrossSurvey() {
    return unansweredAmong(survey.getAllQuestions());
  }

  function flag(unanswered) {
    lastFlaggedKeys = unanswered.map(function (u) { return u.key; });
    unanswered.forEach(function (u) { u.q.addError(suggestedMessage); });
    proceedAction.visible = true;
    try { unanswered[0].q.focus(); } catch (e) { /* matrix cells may not focus */ }
  }

  function consumeOverride() {
    overrideConfirmed = false;
    lastFlaggedKeys.forEach(function (key) { acknowledgedUnanswered.add(key); });
    lastFlaggedKeys = [];
    proceedAction.visible = false;
  }

  survey.onCurrentPageChanging.add(function (sender, options) {
    if (!options.isGoingForward) return;
    if (overrideConfirmed) {
      consumeOverride();
      return;
    }
    var unanswered = unansweredAmong(options.oldCurrentPage.questions);
    if (unanswered.length > 0) {
      options.allowChanging = false;
      pendingAction = "nextPage";
      flag(unanswered);
    }
  });

  survey.onCompleting.add(function (sender, options) {
    if (overrideConfirmed) {
      consumeOverride();
      return;
    }
    var unanswered = unansweredAcrossSurvey();
    if (unanswered.length > 0) {
      options.allowComplete = false;
      pendingAction = "complete";
      flag(unanswered);
    }
  });

  // Hide the button once everything that blocked the last action is answered:
  // the current page for "Next", the whole survey for "Complete".
  function hideButtonIfDone() {
    var remaining = pendingAction === "nextPage"
      ? unansweredAmong(survey.currentPage.questions)
      : unansweredAcrossSurvey();
    if (remaining.length === 0) {
      proceedAction.visible = false;
    }
  }

  survey.onValueChanged.add(function (sender, options) {
    if (!suggested.questions.has(options.name)) return;
    options.question.clearErrors();
    hideButtonIfDone();
  });

  survey.onMatrixCellValueChanged.add(function (sender, options) {
    var cols = suggested.columns.get(options.question.name);
    if (!cols || !cols.has(options.columnName)) return;
    if (options.cellQuestion && !options.cellQuestion.isEmpty()) {
      options.cellQuestion.clearErrors();
    }
    hideButtonIfDone();
  });
}


// ── Survey setup (jsPsychSurvey survey_function) ─────────────

function setupCostOfSportSurvey(survey) {
  setupSuggestedQuestions(survey);
  // Render HTML (e.g. <b>, <em>) in titles/descriptions
  survey.onTextMarkdown.add(function (_, options) { options.html = options.text; });
  // Reset a TR_Pr row's count to 0 when its Yes/No is switched to No
  // (setValueIf can't do this: the cell is already read-only via enableIf)
  survey.onMatrixCellValueChanged.add(function (sender, options) {
    if (options.question.name !== "TR_Pr") return;
    if (options.columnName === "usage" && options.value === "No") {
      var countCell = options.getCellQuestion("usage_count");
      if (countCell) countCell.value = 0;
    }
  });
  // Live check: flag as soon as the TR_Pr total exceeds SP_PR_Tot ("must equal" is still checked on Next)
  survey.onValueChanged.add(function (sender, options) {
    if (options.name !== "TR_Pr") return;
    var q = options.question;
    var rows = options.value || {};
    var sum = 0;
    Object.keys(rows).forEach(function (k) {
      sum += Number(rows[k].usage_count) || 0;
    });
    var max = Number(sender.getValue("SP_PR_Tot")) || 0;
    q.errors = [];
    if (sum > max) {
      q.addError("You have entered " + sum + " practices, which is more than the " + max + " practices per year you reported.");
    }
  });
}


// ── Report card PDF ──────────────────────────────────────────

// Save the completedHtml report card (#costReport) as a PDF.
// .no-pdf elements are removed and .pdf-only elements are shown in the PDF copy.
// Called from the onclick of the button in EN_CostOfSport's completedHtml.
function downloadCostReport() {
  var report = document.getElementById("costReport");
  if (!report) return;
  var copy = report.cloneNode(true);
  copy.removeAttribute("id");
  copy.style.minHeight = "auto";
  copy.querySelectorAll(".no-pdf").forEach(function (el) { el.remove(); });
  copy.querySelectorAll(".pdf-only").forEach(function (el) { el.style.display = "block"; });
  html2pdf().set({
    margin: 10,
    filename: "CostOfSport_Report.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css", "legacy"] }
  }).from(copy).save();
}
