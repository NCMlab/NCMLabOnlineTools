var timeline = []
// List of the names of the different tasks
var TaskNameList = []
var ComponentIDList = []
var ComponentParameterLists = []
var JATOSSessionData = {}
var ButtonMapping = ['StroopColor','StroopWord','StroopColorWord']



// What battery was passed?
var callbacks = {
   'default': [() => {
    console.log('default')
  }]
};
// and you can create new entry with this function
function add(_case, fn) {
   callbacks[_case] = callbacks[_case] || [];
   callbacks[_case].push(fn);
}

// this function work like switch(value)
// to make the name shorter you can name it `cond` (like in scheme)
function pseudoSwitch(value) {
   if (callbacks[value]) {
      callbacks[value].forEach(function(fn) {
          fn();
      });
   }
}


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

      var list = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).list
    	ComponentParameterLists = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
      // Make a task list of the components of the battery
    	for ( var i = 0; i < list.length; i ++ ) {
		  	TaskNameList.push(ComponentList[list[i]].name)
        ComponentIDList.push(ComponentList[list[i]].componentID)
		  }
      // Add things to the jatos session data
      JATOSSessionData{TaskNameList:TaskNameList, ComponentIDList, ComponentParameterLists} 
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
		var all_data = jsPsych.data.get();
    console.log(all_data)
		// What bettery is it?
		// get csv representation of data and log to console
		console.log(all_data);
    console.log(TaskNameList)
    console.log(ComponentIDList)
    console.log(ComponentParameterLists)
    console.log(jatos)
    jatos.setStudySessionData(JATOSSessionData)
    console.log(jatos)
	},
    on_finish: function() {
    			var all_data = jsPsych.data.get();

		// get csv representation of data and log to console
		console.log(all_data);

    	pseudoSwitch(TaskList[0])
    	// Need to shorten the task list and save it as jatos session variable
    }
  };

// The first trial is needed to get the data that jatos has added. Adding data in
// jspsych adds data to all trials. So if no trials have occured there is nowhere to add data.
  // Once the data is added, then it can be read and worked with.
 timeline.push(trial0)
 timeline.push(trial1)