// Need to add battery instructions
// overall scoring of a battery?

var timeline = []
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// List of the names of the different tasks

var TaskIconList = []
var TaskButtonNameList
var ComponentIDList = []
var ComponentCompletedList = []
var ComponentParameterLists = []
var DisplayBatteryInstructionsFlag
var BatteryInstructions
var TaskList = []
var IconImgFileList = []
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
  stimulus: function() {return '<h2>'+BatteryInstructions+'</h2>'},
  choices: function(){ 
      var stim = []
      console.log(TaskIconList)
      for ( var i = 0; i < TaskIconList.length; i++ ) {
          stim.push(`<span><img src="assets/Icons/${IconImgFileList[i]}" alt="${TaskList[i]}"></br>${TaskIconList[i]}</span>
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
      jatos.startComponentByTitle(TaskList[response])
  }
};

var SetupBattery = {
  type: jsPsychCallFunction,
  func: function() {
      console.log(ComponentList)

      // read the data for this trial
      var all_data = jsPsych.data.get();

      CurrentBattery = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery))
      console.log(CurrentBattery)
      
      // find the battery selected and extract its list of components
      ParameterList = CurrentBattery.TaskList.map(({ Parameters }) => Parameters)
      TaskList = CurrentBattery.TaskList.map(({ Task }) => Task)
      TaskIconList = CurrentBattery.TaskList.map(({ IconName }) => IconName)
      InstructionList = CurrentBattery.TaskList.map(({ Instructions }) => Instructions)

      // Extract the battery instructions
      BatteryInstructions = CurrentBattery.BatteryInstructions

      for ( var i = 0; i < TaskList.length; i ++ ) {
        console.log(i)
        IconImgFileList.push(ComponentList.find(item => item.name === TaskList[i]).iconFileName)
      }
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

