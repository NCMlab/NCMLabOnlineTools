jatos.onLoad(function() {
    const jatos_params = jatos.urlQueryParameters;
    const battery = jatos_params["Battery"];
    const taskIndex = jatos_params["Taskindex"];
    const session = jatos_params["Session"];

    console.log("Hi Mom!");

    console.log("Current URL:", window.location.href);
    console.log("Current URL jatos_params:", window.location.search);

    console.log(jatos_params,battery,taskIndex,session);
    
   /* var trial0 = {
        type: jsPsychHtmlButtonResponse,
        stimulus: "",
        choices: "",
        trial_duration: 10
        
    }*/

    const htmlFilePath = 'html/JATOS/'

<<<<<<< HEAD
    if (taskIndex != null) {
        //window.location.href = htmlFilePath + `single-task.html?taskindex=${taskIndex}` + jatos_params.toString();
        jatos.startComponentByTitle("Run Single Task")
    } else if (session != null) {
        //window.location.href = htmlFilePath + `session-chooser.html?session=${session}` + jatos_params.toString();
        jatos.startComponentByTitle("Session Chooser")
    } else if (!isNaN(battery) && battery <= 1000) {
        console.log("Yo Mom!");
        //window.location.href = htmlFilePath + `batteries.html?battery=${battery}` + jatos_params.toString();
        jatos.startComponentByTitle("Batteries")
    } else { // Battery > 1000
        //window.location.href = htmlFilePath + `UserChoiceManager.html?battery=${battery}` + jatos_params.toString();
        jatos.startComponentByTitle("User Choice")
=======
        var Language = CurrentBattery.Language
        
        // Extract the battery instructions
        BatteryInstructions = CurrentBattery.BatteryInstructions
        console.log(BatteryInstructions)
        FooterText = CurrentBattery.Footer

        // Check the session data to see if it is empty, if so add to it. If not, leave it alone
                // Is this worker in the Batch data?
        JATOSSessionData = jatos.studySessionData

        if ( isEmpty(JATOSSessionData) && ( typeof jatos.batchSession.get(jatos.workerId) == 'undefined' )) 
        {
            //alert("USAGE MANAGER LINE 59: FIRST TIME")
            jatos.batchSession.set(jatos.workerId+"_Language", "EN") 
            jatos.batchSession.set(jatos.workerId, 0);
            
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
        else if ( isEmpty(JATOSSessionData) && ( typeof jatos.batchSession.get(jatos.workerId) != 'undefined' )) 
        { // This is a restart, remake the session data
            // Add things to the jatos session data
            //alert("RESTART the BROSWER")
            var currentIndex = jatos.batchSession.get(jatos.workerId)
            JATOSSessionData = {CurrentIndex: currentIndex, TaskNameList:TaskList, ComponentParameterLists:ParameterList, InstructionList:InstructionList, TaskIconList: TaskIconList} 
            // add the ID to return to the JATOS battery
            JATOSSessionData.Language = Language
            TaskCompleted = Array(TaskList.length).fill(0)
            JATOSSessionData.TaskCompleted = TaskCompleted
            JATOSSessionData.FooterText = FooterText
            JATOSSessionData.BatteryName = CurrentBattery.name
            JATOSSessionData.BatteryScore = -99
            // If this is the first visit to this manager, display the battery instructions
            DisplayBatteryInstructionsFlag = true         
            // Make sure to reset the language selection button
            /*window.onload = function() {
                let elem = document.getElementById('LanguageSelectPulldown')
                console.log(elem)
                console.log(elem.value)
                elem.value = LangIsSetTo
                console.log(elem.value)
            };*/
        }
        else 
        {
            
            //jatos.batchSession.set(jatos.workerId+"_Language", "EN") 
            jatos.batchSession.set(jatos.workerId, 0);
            DisplayBatteryInstructionsFlag = false
            // Make sure to reset the language selection button
            /*window.onload = function() {
                let elem = document.getElementById('LanguageSelectPulldown')
                console.log(elem)
                console.log(elem.value)
                elem.value = LangIsSetTo
                console.log(elem.value)
            };*/
            //alert('Continuing the SESSION')
    
        }
        
        jatos.studySessionData = JATOSSessionData
        //console.log(jatos.batchSession.getAll())
        //console.log(jatos)
        //console.log(DDDD)
        
>>>>>>> 225e9f2553165d8e9b2e56df642c8ff695a82234
    }
});

<<<<<<< HEAD

//timeline.push(trial0)
=======
var if_node_ALaCarte = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(data.trials[0].Battery)
        if (jatos.urlQueryParameters.Usage == 'ALaCarte' ) {
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
        console.log(data.trials[0])
        
        if ( jatos.urlQueryParameters.Usage == 'Battery' ) {
            //alert("BATTERY")
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
        
        if (  jatos.urlQueryParameters.Usage == 'SingleTask' ) 
        {
            JATOSSessionData.UsageType = 'SingleTask'
            jatos.studySessionData = JATOSSessionData
            jatos.startComponentByTitle("Run Single Task")
        }
    }
}

var if_node_SessionChooser = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(jatos.urlQueryParameters.Usage)
        
        if ( jatos.urlQueryParameters.Usage == 'Session' ) 
        {
            //alert("SESSION CHOOSER")
            JATOSSessionData.UsageType = 'SessionChooser'
            jatos.studySessionData = JATOSSessionData
            jatos.startComponentByTitle("Session Chooser")
        }
    }
}

var if_node_NoUsageTypeProvided = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(jatos.urlQueryParameters.Usage)
        
        if ( ( jatos.urlQueryParameters.Usage != 'Session' ) && 
            ( jatos.urlQueryParameters.Usage != 'SingleTask' ) &&
            ( jatos.urlQueryParameters.Usage != 'Battery' ) &&
            ( jatos.urlQueryParameters.Usage != 'ALaCarte' )
            ) 
        {
            //alert("NO USAGE TYPE PROVIDED")
            JATOSSessionData.UsageType = 'ALaCarte'
            jatos.studySessionData = JATOSSessionData
            jatos.startComponentByTitle("User Choice")
        }
    }
}
//timeline.push(enter_fullscreen)
timeline.push(trial0)

timeline.push(SetupBattery)
timeline.push(if_node_SessionChooser)
timeline.push(if_node_SingleTask)
timeline.push(if_node_ALaCarte)
timeline.push(if_node_Battery)
timeline.push(if_node_NoUsageTypeProvided)
>>>>>>> 225e9f2553165d8e9b2e56df642c8ff695a82234
