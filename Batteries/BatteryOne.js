var timeline = []
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
    	var stim = "Hello World"
    	return stim
    },
    prompt: '', 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
    on_finish: function(){
      console.log(ComponentList)
    	// read the data for this trial
    	var all_data = jsPsych.data.get();
    	// find the battery selected and extract its list of components
    	var ParameterList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
      TaskList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).list
    	ComponentParameterLists = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
      // Make a task list of the components of the battery
    	for ( var i = 0; i < TaskList.length; i ++ ) {
		  	var tempName = ComponentList[TaskList[i]].name
        TaskNameList.push(tempName)
        TaskIconList.push(ComponentList[TaskList[i]].iconFileName)
		  }
      // Check the session data to see if it is empty, if so add to it. If not, leave it alone
      JATOSSessionData = jatos.studySessionData
      if ( isEmpty(JATOSSessionData) ) {
        // Add things to the jatos session data
        JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskNameList, ComponentIDList:ComponentIDList, ComponentParameterLists:ComponentParameterLists} 
        // add the ID to return to the JATOS battery
        JATOSSessionData.BatteryHtmlID = BatteryHtmlID
      }
      jatos.studySessionData = JATOSSessionData
      console.log(TaskIconList)

    }
  };
var trial1 = {
  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
  // Add checkmark to icons
  // https://stackoverflow.com/questions/53920359/easiest-way-to-display-a-check-mark-over-image-when-a-checkbox-input-is-selected 
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
    	var stim = '<div id="main">'
    

    	for (var i = 0; i < TaskNameList.length; i++ ) 
      {
        if ( i < JATOSSessionData.CurrentIndex ) {
    		  //stim += '<p><del>' + TaskNameList[i] + '</del></p>'
          stim += '<div class="container">'
          stim += '<img src="assets/Icons/'+TaskIconList[i]+'" alt="'+TaskNameList[i]+'" />'
          stim += '<div class="centered">COMPLETED</div></div>'
    	 }
        else {
          stim += '<div class="container">'
          stim += '<img src="assets/Icons/'+TaskIconList[i]+'" alt="'+TaskNameList[i]+'" /></div>'
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