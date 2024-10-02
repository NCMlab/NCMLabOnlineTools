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
        var all_data = jsPsych.data.get();

        CurrentBattery = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery))
        // read the data for this trial
        console.log(CurrentBattery)
        // find the battery selected and extract its list of components
        let ParameterList = CurrentBattery.TaskList.map(({ Parameters }) => Parameters)
        let TaskList = CurrentBattery.TaskList.map(({ Task }) => Task)
        let TaskIconList = CurrentBattery.TaskList.map(({ IconName }) => IconName)
        let InstructionList = CurrentBattery.TaskList.map(({ Instructions }) => Instructions)

        var Language = CurrentBattery.Language
        
        // Extract the battery instructions
        BatteryInstructions = CurrentBattery.BatteryInstructions
        console.log(BatteryInstructions)
        FooterText = CurrentBattery.Footer

        // Check the session data to see if it is empty, if so add to it. If not, leave it alone
        JATOSSessionData = jatos.studySessionData
        if ( isEmpty(JATOSSessionData) ) {
          // Add things to the jatos session data
          TaskCompleted = Array(TaskList.length).fill(0)
          console.log(TaskCompleted)
          JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskList, ComponentParameterLists:ParameterList, InstructionList:InstructionList, TaskIconList: TaskIconList} 
          // add the ID to return to the JATOS battery
          JATOSSessionData.Language = Language
          JATOSSessionData.TaskCompleted = TaskCompleted
          JATOSSessionData.FooterText = FooterText
          JATOSSessionData.BatteryName = CurrentBattery.name
          JATOSSessionData.BatteryScore = -99
          // If this is the first visit to this manager, display the battery instructions
          DisplayBatteryInstructionsFlag = true
          
        }
        else {DisplayBatteryInstructionsFlag = false}
        console.log('FIRST TIME THROUGH: '+DisplayBatteryInstructionsFlag)
        jatos.studySessionData = JATOSSessionData
        console.log(jatos.batchSession.getAll())
        console.log(jatos)
     //   console.log(DDDDD)
    }
}


var if_node_ALaCarte = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(data.trials[0].Battery)
        if (Number(data.trials[0].Battery) > 1000 ) {
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
        if (Number(data.trials[0].Battery) < 1000 ) {
            JATOSSessionData.UsageType = 'Battery'
            jatos.studySessionData = JATOSSessionData
           jatos.startComponentByTitle("Batteries")
        }
    }
}
var if_node_SingleTask = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        
        if (jatos.urlQueryParameters.TaskIndex != null ) 
        {
            JATOSSessionData.UsageType = 'SingleTask'
            jatos.studySessionData = JATOSSessionData
            jatos.startComponentByTitle("Run Single Task")
        }
    }
}


//timeline.push(enter_fullscreen)
timeline.push(trial0)
timeline.push(SetupBattery)
timeline.push(if_node_SingleTask)
timeline.push(if_node_ALaCarte)
timeline.push(if_node_Battery)