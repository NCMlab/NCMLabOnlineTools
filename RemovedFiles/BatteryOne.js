var timeline = []
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// List of the names of the different tasks
var TaskNameList = []
var TaskIconList = []
var ComponentIDList = []
var ComponentParameterLists = []

var ButtonMapping = ['StroopColor','StroopWord','StroopColorWord']

var TaskList = []
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Check the status of the JATOS session data

var trial0 = {
  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
    	var stim = "Press Next to Continue"
    	return stim
    },
    prompt: '', 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
    on_start: function() {
      console.log("HELLO WORLD")
      // Get this user's info
    /*fetch(`http://ncmlab.ca/get_test_results`)
    .then((response) => response.json())
   .then((data) => {
   // Do something with the data
    });*/
    },
    on_finish: function(){
      // There needs to be three lists to describe a battery:
      // A list of task names
      // A list of task parameter object names
      // A list of task icon filenames
      // We start with a Battery which includes the list of names and the list of parameter object names
      console.log(ComponentList)
      var result = ComponentList.find(item => item.name === 'Stroop Color').iconFileName;
      console.log(result)
    	// read the data for this trial
    	var all_data = jsPsych.data.get();
    	// find the battery selected and extract its list of components
      var ParameterList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
      console.log(ParameterList)
      TaskList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).list
      console.log(TaskList)

    	// Make a task list of the components of the battery
    	for ( var i = 0; i < TaskList.length; i ++ ) {

        TaskIconList.push(ComponentList.find(item => item.name === TaskList[i]).iconFileName)
		  }
      console.log(TaskIconList)
      // Check the session data to see if it is empty, if so add to it. If not, leave it alone
      JATOSSessionData = jatos.studySessionData
      if ( isEmpty(JATOSSessionData) ) {
        // Add things to the jatos session data
        JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskNameList, ComponentParameterLists:ParameterList} 
        // add the ID to return to the JATOS battery
        JATOSSessionData.BatteryHtmlID = BatteryHtmlID
      }
      jatos.studySessionData = JATOSSessionData


      console.log(TaskIconList)
      // Get worker ID 
      /* console.log(jatos.workerId)
      console.log(jatos.batchId)
      var CurrentBatchData = {}
      CurrentBatchData.workerId = jatos.workerId
      CurrentBatchData.currentIndex = JATOSSessionData.CurrentIndex 
      jatos.batchSession.set("WorkerId_"+jatos.workerId, CurrentBatchData)
      */
      // get BATCH ID
      console.log(jatos.batchSession.getAll())
      console.log(jatos)

    }
  };
var trial1 = {
  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
  // Add checkmark to icons
  // https://stackoverflow.com/questions/53920359/easiest-way-to-display-a-check-mark-over-image-when-a-checkbox-input-is-selected 
    type: jsPsychHtmlButtonResponse,
    // This makes a table of icons for all of the tasks in the battery
    stimulus: function() {
    	var stim = '<div id="main">'
    	for (var i = 0; i < TaskList.length; i++ ) 
      {
        if ( i < JATOSSessionData.CurrentIndex ) {
    		  //stim += '<p><del>' + TaskNameList[i] + '</del></p>'
          stim += '<div class="container">'
          stim += '<img src="assets/Icons/'+TaskIconList[i]+'" alt="'+TaskList[i]+'" />'
          stim += '<div class="centered">COMPLETED</div></div>'
    	 }
        else {
          stim += '<div class="container">'
          stim += '<img src="assets/Icons/'+TaskIconList[i]+'" alt="'+TaskList[i]+'" /></div>'
        }
    	}
      stim += '</div>'
      return stim
    },
    prompt: '', 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
    on_finish: function() {
      JATOSSessionData = jatos.studySessionData
      // This is the function that starts the JATOS component for the next item in the battery
      // The pseudoswitch should receive a task name using the JATOS currentIndex value
      pseudoSwitch(TaskList[JATOSSessionData.CurrentIndex])
    	// Need to shorten the task list and save it as jatos session variable
    }
  };

// The first trial is needed to get the data that jatos has added. Adding data in
// jspsych adds data to all trials. So if no trials have occured there is nowhere to add data.
  // Once the data is added, then it can be read and worked with.
timeline.push(enter_fullscreen)
timeline.push(trial0)
timeline.push(trial1)

