// Need to add battery instructions
// overall scoring of a battery?

var timeline = []
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// List of the names of the different tasks
var TaskNameList = []
var TaskIconList = []
var TaskButtonNameList
var ComponentIDList = []
var ComponentCompletedList = []
var ComponentParameterLists = []
var DisplayBatteryInstructionsFlag
var BatteryInstructions
var TaskList = []
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Check the status of the JATOS session data
var SetupBattery = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(ComponentList)

        // read the data for this trial
        var all_data = jsPsych.data.get();
        console.log(all_data)
        // find the battery selected and extract its list of components
        var ParameterList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
        TaskButtonNameList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ButtonName
        TaskButtonDescriptionList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ButtonDescription
        console.log(ParameterList)
        TaskList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).list
        console.log(TaskList)
        // Extract the battery instructions
        BatteryInstructions = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).BatteryInstructions
        console.log(BatteryInstructions)
          // Make a task list of the components of the battery
        for ( var i = 0; i < TaskList.length; i ++ ) {
          TaskIconList.push(ComponentList.find(item => item.name === TaskList[i]).iconFileName)
        }
        console.log(TaskIconList)
        console.log(TaskButtonNameList)
        // Check the session data to see if it is empty, if so add to it. If not, leave it alone
        JATOSSessionData = jatos.studySessionData
        if ( isEmpty(JATOSSessionData) ) {
          // Add things to the jatos session data
          JATOSSessionData = {CurrentIndex: 0, ComponentCompletedList:ComponentCompletedList, TaskNameList:TaskNameList, ComponentParameterLists:ParameterList} 
          // add the ID to return to the JATOS battery
          JATOSSessionData.BatteryHtmlID = BatteryHtmlID
          
          // If this is the first visit to this manager, display the battery instructions
          DisplayBatteryInstructionsFlag = true
          
        }
        else {DisplayBatteryInstructionsFlag = false}
        console.log('FIRST TIME THROUGH: '+DisplayBatteryInstructionsFlag)
        jatos.studySessionData = JATOSSessionData
        console.log(jatos.batchSession.getAll())
        console.log(jatos)
    }
}
var trial0 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: "",
  trial_duration: 10
}
var trial0a = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){ return BatteryInstructions},
  choices: ['Next']
}

var if_node_BatteryInstructions = {
  timeline: [trial0a],
  conditional_function: function() {
    console.log(DisplayBatteryInstructionsFlag)
      if ( DisplayBatteryInstructionsFlag )
          { return true }
      else { return false }
  }
}

var trial1 = {
  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
  // Add checkmark to icons
  // https://stackoverflow.com/questions/53920359/easiest-way-to-display-a-check-mark-over-image-when-a-checkbox-input-is-selected 
    type: jsPsychHtmlButtonResponse,
    // This makes a table of icons for all of the tasks in the battery
    stimulus: function() {
    	var stim = '<div>This is a list of the individual tests you will complete.<p>Press Next to continue.</div><div id="main">'
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

  var trial2 = {
    on_start: function() {
        console.log(TaskList)
    },
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Please pick a task',
    choices: function(){ 
        var stim = []
        console.log(TaskButtonNameList)
        for ( var i = 0; i < TaskIconList.length; i++ ) {
            stim.push(`<span><img src="assets/Icons/${TaskIconList[i]}" alt="${TaskList[i]}"></br>${TaskButtonNameList[i]}</span>
            <div class="HoverALaCarte">${TaskButtonDescriptionList[i]}</div>`)
        }
        return stim
    },
    prompt: '',
    on_finish: function() {
        data = jsPsych.data.getLastTrialData().values()
        response = data[0].response
        
        JATOSSessionData = jatos.studySessionData
        // This is the function that starts the JATOS component for the next item in the battery
        // The pseudoswitch should receive a task name using the JATOS currentIndex value
        console.log(TaskList)
        
        JATOSSessionData.CurrentIndex = response
        jatos.studySessionData = JATOSSessionData
        pseudoSwitch(TaskList[response])
    }
  };

// The first trial is needed to get the data that jatos has added. Adding data in
// jspsych adds data to all trials. So if no trials have occured there is nowhere to add data.
  // Once the data is added, then it can be read and worked with.
  timeline.push(trial0)
  timeline.push(SetupBattery)
//timeline.push(if_node_BatteryInstructions)
//timeline.push(enter_fullscreen)
timeline.push(trial2)

