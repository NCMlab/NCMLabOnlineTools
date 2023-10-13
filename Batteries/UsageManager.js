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

var SetupBattery = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(ComponentList)

        // read the data for this trial
        var all_data = jsPsych.data.get();
        console.log(all_data)
        // find the battery selected and extract its list of components
        var ParameterList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
        console.log(ParameterList)
        var Language = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).Language
        console.log(Language)
        TaskList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).list
        console.log(TaskList)
        
        InstructionList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).Instructions
        
        // Extract the battery instructions
        BatteryInstructions = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).BatteryInstructions
        console.log(BatteryInstructions)
        FooterText = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).Footer
          // Make a task list of the components of the battery
        for ( var i = 0; i < TaskList.length; i ++ ) {
          TaskIconList.push(ComponentList.find(item => item.name === TaskList[i]).iconFileName)
        }
        console.log(TaskIconList)
        // Check the session data to see if it is empty, if so add to it. If not, leave it alone
        JATOSSessionData = jatos.studySessionData
        if ( isEmpty(JATOSSessionData) ) {
          // Add things to the jatos session data
          TaskCompleted = Array(TaskList.length).fill(0)
          console.log(TaskCompleted)
          JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskList, ComponentParameterLists:ParameterList, InstructionList:InstructionList} 
          // add the ID to return to the JATOS battery
          JATOSSessionData.Language = Language
          JATOSSessionData.TaskCompleted = TaskCompleted
          JATOSSessionData.FooterText = FooterText
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


var if_node_ALaCarte = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(data.trials[0].Battery)
        if (Number(data.trials[0].Battery) > 100 ) {
            JATOSSessionData.UsageType = 'ALaCarte'
            jatos.studySessionData = JATOSSessionData
            jatos.startComponentByTitle("User Choice")
        }
    }
}

var if_node_Battery = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(data.trials[0].Battery)
        if (Number(data.trials[0].Battery) < 100 ) {
            JATOSSessionData.UsageType = 'Battery'
            jatos.studySessionData = JATOSSessionData
           jatos.startComponentByTitle("Batteries")
        }
    }
}

timeline.push(enter_fullscreen)
timeline.push(trial0)
timeline.push(SetupBattery)
timeline.push(if_node_ALaCarte)
timeline.push(if_node_Battery)