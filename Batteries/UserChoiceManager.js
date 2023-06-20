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

var trial0 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: "",
  trial_duration: 10
}

var trial2 = {
  on_start: function() {
      console.log(TaskList)
  },
  type: jsPsychHtmlButtonResponse,
  stimulus: '',
  choices: function(){ 
      var stim = []
      console.log(TaskButtonNameList)
      for ( var i = 0; i < TaskIconList.length; i++ ) {
          stim.push(`<span><img src="assets/Icons/${TaskIconList[i]}" alt="${TaskList[i]}"></br>${TaskButtonNameList[i]}</span>
          `)
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
      // Check the session data to see if it is empty, if so add to it. If not, leave it alone
      JATOSSessionData = jatos.studySessionData
      console.log(JATOSSessionData)
      if ( isEmpty(JATOSSessionData) ) {
        // Add things to the jatos session data
        JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskList, ComponentParameterLists:ParameterList} 
        // add the ID to return to the JATOS battery
        JATOSSessionData.BatteryHtmlID = BatteryHtmlID
        // If this is the first visit to this manager, display the battery instructions
        DisplayBatteryInstructionsFlag = true
        JATOSSessionData.TaskList = TaskList
        JATOSSessionData.CompletedTaskList 
      }
      else {DisplayBatteryInstructionsFlag = false}
      console.log('FIRST TIME THROUGH: '+DisplayBatteryInstructionsFlag)
      jatos.studySessionData = JATOSSessionData
      console.log(jatos.batchSession.getAll())
      console.log(jatos)
  }
}

// The first trial is needed to get the data that jatos has added. Adding data in
// jspsych adds data to all trials. So if no trials have occured there is nowhere to add data.
timeline.push(trial0)
timeline.push(SetupBattery)
timeline.push(trial2)

