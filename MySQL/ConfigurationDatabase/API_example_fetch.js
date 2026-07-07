/**
 * API_example_fetch.js
 *
 * Shows how an HTML study component (running inside JATOS) would
 * replace the current file-based Batteries.js with a database call.
 *
 * In your current system the HTML page loads Batteries.js and then
 * finds the matching entry in BatteryList by index.
 *
 * In the new system, the HTML page calls the REST API instead.
 *
 * Paste the relevant section into your study component JS, or load
 * this file as a <script> before the task logic runs.
 */

// The battery index is typically passed via JATOS URL parameters.
// jatos.urlQueryParameters is populated by JATOS from the URL.
// Example URL: https://yourserver/publix/start/1?batchId=1&studyIndex=16

const BATTERY_API_URL = 'https://yourserver.ca/api/battery.php';

/**
 * Fetches the battery configuration from the database API.
 * Returns a Promise that resolves to the battery object.
 *
 * @param {number} batteryIndex  - the numeric battery index (e.g. 16)
 * @returns {Promise<Object>}
 */
async function loadBatteryFromDatabase(batteryIndex) {
    const url = `${BATTERY_API_URL}?index=${batteryIndex}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Battery API returned ${response.status} for index ${batteryIndex}`);
    }
    return response.json();
}

/**
 * Example: replaces the old pattern of reading from BatteryList.
 *
 * OLD pattern (Batteries.js):
 *   var battery = BatteryList.find(b => b.index === currentIndex);
 *   var taskList = battery.TaskList;
 *
 * NEW pattern (database API):
 */
async function initStudy() {
    // Get the battery index from JATOS URL parameters (or hardcode for testing)
    const batteryIndex = jatos.urlQueryParameters.studyIndex || 16;

    let battery;
    try {
        battery = await loadBatteryFromDatabase(batteryIndex);
    } catch (err) {
        console.error('Failed to load battery configuration:', err);
        // Fall back to a safe error page or alert the researcher
        return;
    }

    // battery.tasks is the ordered array — mirrors the old TaskList
    // Each task has: task_name, html_file, icon_name, parameters, instructions
    //
    // battery.tasks[0].parameters  ← was: eval(window[Parameters])
    // battery.tasks[0].instructions ← was: eval(window[Instructions])

    console.log('Battery loaded:', battery.battery_name);
    console.log('Tasks:', battery.tasks.map(t => t.task_name));

    // Pass to your existing task runner (whatever currently iterates TaskList)
    runBattery(battery);
}

/**
 * Minimal stub showing how task data maps to the old variable names.
 * Replace this with your actual task runner.
 */
function runBattery(battery) {
    // These parallel the old top-level variables your tasks expect:
    window.BatteryName         = battery.battery_name;
    window.BatteryInstructions = battery.battery_instructions;
    window.Language            = battery.language;
    window.RunAudioTest        = battery.run_audio_test;
    window.Footer              = battery.footer;
    window.HeaderButtonsToShow = battery.header_buttons;
    window.LanguagesToShow     = battery.languages_to_show;
    window.Redirect            = battery.redirect_url;

    // TaskList is now battery.tasks — same shape as before except
    // parameters and instructions are already parsed objects (not strings).
    window.TaskList = battery.tasks.map(task => ({
        Task:         task.task_name,
        Parameters:   task.parameter_name,   // keep the name for logging
        Instructions: task.instruction_name, // keep the name for logging
        IconName:     task.icon_name,
        // The actual objects (previously loaded from JS files):
        ParametersObj:   task.parameters,
        InstructionsObj: task.instructions,
    }));

    // Your existing task-runner code can then do:
    //   parameters  = window.TaskList[currentTaskIndex].ParametersObj;
    //   Instructions = window.TaskList[currentTaskIndex].InstructionsObj;
    // instead of loading the JS config files.
}

// Auto-run on page load
document.addEventListener('DOMContentLoaded', initStudy);
