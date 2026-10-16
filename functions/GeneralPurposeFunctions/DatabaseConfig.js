// =======================================================================
// Loading task settings from the configuration database
// (NCMBattery/MySQL/ConfigurationDatabase), for the pages in html/dB/.
//
// The html/JATOS/ pages get their parameter and instruction sets from config/*_Setup.js and
// InstructionsAndStimuli/Instructions/*.js through pseudoSwitch(name). The html/dB/ pages ask
// the database API for the same sets, by the same names, instead.
//
// Moving to a server: change DB_API_BASE below, the only place the address is set.
// =======================================================================

var DB_API_BASE = 'http://localhost:8000'

var NCMdb = (function () {

  async function getJSON(url) {
    let response
    try {
      response = await fetch(url)
    } catch (err) {
      // A TypeError here usually means the API isn't running, the address is wrong, or CORS.
      throw new Error('Could not reach the configuration database at ' + DB_API_BASE + ' (' + err.message + ')')
    }
    const text = await response.text()
    if (response.status === 404) {
      return null
    }
    if (!response.ok) {
      throw new Error('The configuration database answered ' + response.status + ' for ' + url + ': ' + text)
    }
    try {
      return JSON.parse(text)
    } catch (err) {
      throw new Error('The configuration database sent something that is not JSON for ' + url + ': ' + text.slice(0, 200))
    }
  }

  // Instruction keys name one language of a set: "EN_Instructions_FaCE", "FR_Cancellation_Instructions_Default",
  // "EN_Stroop_Instructions". The database stores the set ("FaCE", "Default") and its languages separately.
  // Same rule as instructionSetName() in MySQL/ConfigurationDatabase/migrate/task_mapping.js.
  const INSTRUCTION_SET_RENAMES = { IntakeForm_FaCE: 'IntakeFaCE', OrientationForm_FaCE: 'OrientationFaCE' }
  function instructionSetName(key, language) {
    const name = String(key).replace(new RegExp('^' + language + '_'), '').replace(/^(?:\w+?_)?Instructions(?:_|$)/, '')
    return INSTRUCTION_SET_RENAMES[name] || name || 'Default'
  }

  function showError(err) {
    console.error('[NCMdb]', err)
    const box = document.createElement('div')
    box.style.cssText = 'margin:2em;padding:1em;border:2px solid #b00020;color:#b00020;font-family:sans-serif'
    box.textContent = 'This task could not load its settings, so it cannot start. ' + err.message
    document.body.prepend(box)
  }

  let loaded = Promise.resolve(true)

  return {
    // A parameter set by its name (the name pseudoSwitch() used, e.g. "RAVLT_Spoken_Immediate").
    // Like pseudoSwitch, a name that isn't there changes nothing: it resolves to null and logs a warning.
    parameters: async function (taskName, name) {
      const url = DB_API_BASE + '/API_task_config.php?type=parameters&task=' + encodeURIComponent(taskName)
        + '&name=' + encodeURIComponent(name)
      const data = await getJSON(url)
      if (data === null) console.warn('[NCMdb] No parameter set "' + name + '" for ' + taskName + ' in the database.')
      else console.log('[NCMdb] Parameters "' + name + '":', data)
      return data
    },

    // An instruction set by the pseudoSwitch key ("EN_Instructions_Default") and the page's language.
    instructions: async function (taskName, key, language) {
      if (/_$/.test(key)) {
        // e.g. "EN_Instructions_" from an empty Instructions name: pseudoSwitch found nothing here either.
        console.warn('[NCMdb] No instruction set named in "' + key + '".')
        return null
      }
      const setName = instructionSetName(key, language)
      const url = DB_API_BASE + '/API_task_config.php?type=instructions&task=' + encodeURIComponent(taskName)
        + '&name=' + encodeURIComponent(setName) + '&lang=' + encodeURIComponent(language)
      const data = await getJSON(url)
      if (data === null) console.warn('[NCMdb] No ' + language + ' instructions "' + setName + '" for ' + taskName + ' in the database.')
      else console.log('[NCMdb] Instructions "' + setName + '" (' + language + '):', data)
      return data
    },

    // A session (button page) in one language, in the shape SessionChooser_config.js gave the page.
    session: async function (name, language) {
      const url = DB_API_BASE + '/API_session.php?name=' + encodeURIComponent(name) + '&lang=' + encodeURIComponent(language)
      const data = await getJSON(url)
      if (data === null) console.warn('[NCMdb] No ' + language + ' session "' + name + '" in the database.')
      return data
    },

    // Every session in every language, registered with add() under its SessionChooser_config.js name
    // ("FR_COMM_99"), so Batteries/CentralExecutive.js finds it with pseudoSwitch() as before. All of them,
    // because CentralExecutive.js only works out which session it needs part-way through.
    registerAllSessions: async function () {
      const sessions = await getJSON(DB_API_BASE + '/API_list_config.php?resource=sessions')
      const jobs = []
      for (const s of sessions || []) {
        for (const language of s.languages) {
          jobs.push(this.session(s.session_name, language).then((data) => {
            if (data) add(language + '_' + s.session_name, function () { parameters = data })
          }))
        }
      }
      await Promise.all(jobs)
      console.log('[NCMdb] Registered ' + jobs.length + ' session languages from the database.')
    },

    // Runs the page's setup (which awaits the calls above) and remembers it, so start() can wait.
    // If loading fails, the page shows an error and the task does not start.
    load: function (setup) {
      loaded = Promise.resolve()
        .then(setup)
        .then(() => true)
        .catch((err) => { showError(err); return false })
      return loaded
    },

    // Runs fn once load() has finished successfully (e.g. jsPsych.run(timeline)).
    start: function (fn) {
      return loaded.then((ok) => { if (ok) return fn() })
    },
  }
})()
