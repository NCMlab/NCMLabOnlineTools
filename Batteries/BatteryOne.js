var timeline = []
// List of the names of the different tasks
var TaskNameList = []
var ComponentIDList = []
var ComponentParameterLists = []

var ButtonMapping = ['StroopColor','StroopWord','StroopColorWord']

var TaskList = []




// Check the status of the JATOS session data

//console.log(jatos.studySessionData)
//jatos.studySessionData = TaskList
//console.log(jatos.studySessionData)
var trial0 = {
  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
    	var stim = "Hello World"
    	return stim
    },
    prompt: '', 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
    on_finish: function(){

    	// read the data for this trial
    	var all_data = jsPsych.data.get();
      console.log(all_data)
    	// find the battery selected and extract its list of components
    	var ParameterList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
      console.log(ParameterList)

      TaskList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).list
    	ComponentParameterLists = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
      // Make a task list of the components of the battery
    	for ( var i = 0; i < TaskList.length; i ++ ) {
		  	var tempName = ComponentList[TaskList[i]].name
        TaskNameList.push(tempName)
		  }
      // Check the session data to see if it is empty, if so add to it. If not, leave it alone
      JATOSSessionData = jatos.studySessionData
      console.log(JATOSSessionData)
      // Add things to the jatos session data
      JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskNameList, ComponentIDList:ComponentIDList, ComponentParameterLists:ComponentParameterLists} 
      console.log(jatos)
      jatos.studySessionData = JATOSSessionData
      console.log(jatos)
      // Set the list of components

    }
  };
var trial1 = {
  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
    	var stim = ''
    	for (var i = 0; i < TaskNameList.length; i++ ) {
    		stim += '<p>' + TaskNameList[i] + '</p>'
    	}
    	return stim
    },
    prompt: '', 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
    on_start: function() {
    	// select all trials
    console.log(callbacks)
	},
    on_finish: function() {
      JATOSSessionData = jatos.studySessionData
      pseudoSwitch(TaskList[JATOSSessionData.CurrentIndex])
    	// Need to shorten the task list and save it as jatos session variable
    }
  };

// The first trial is needed to get the data that jatos has added. Adding data in
// jspsych adds data to all trials. So if no trials have occured there is nowhere to add data.
  // Once the data is added, then it can be read and worked with.
 timeline.push(trial0)
 timeline.push(trial1)
 timeline.push(trial0)