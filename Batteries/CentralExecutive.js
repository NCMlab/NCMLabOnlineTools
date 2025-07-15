// The goal is to have a single component that can direct traffic
// ===============================================================
// Global variables
var DisplayBatteryInstructionsFlag
var BatteryInstructions
var batchIndex = -99
var sessionData = ''
// ===============================================================
// Functions used by the central execitive

// Check to see if an object is emoty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Check to see if this worker has BATCH data in jatos 
function UpdateBatchData() {
    // Check the session data to see if it is empty, if so add to it. If not, leave it alone
    // Is this worker in the Batch data?
    if ( typeof jatos.batchSession.get(jatos.workerId) == 'undefined' )
    {
        return jatos.batchSession.set(jatos.workerId, 0)
            .then(() => {
                jatos.batchSession.set(jatos.workerId+"_Language", "EN")
                console.log("Batch Session was successfully updated")
                batchIndex = jatos.batchSession.get(jatos.workerId)
            })
            .catch(() => console.log("Batch Session synchronization failed"));
    }
    else 
    {  // reset this worker to zero count (I am not sure why this is done)
        return jatos.batchSession.set(jatos.workerId, 0)
            .then(() => {
                console.log("Batch Session was successfully updated")
                batchIndex = jatos.batchSession.get(jatos.workerId)
            })
            .catch(() => console.log("Batch Session synchronization failed"));
    }
    
}

// Create the session data
function CreateSessionData(battery) {
    CurrentBattery = BatteryList.find(x => x.index === parseInt(battery))  
    // Extract all the parameters/Instructions from the CurrentBattery object and make a separate list
    ParameterList = CurrentBattery.TaskList.map(({ Parameters }) => Parameters)
    TaskList = CurrentBattery.TaskList.map(({ Task }) => Task)
    TaskIconList = CurrentBattery.TaskList.map(({ IconName }) => IconName)
    InstructionList = CurrentBattery.TaskList.map(({ Instructions }) => Instructions)
    
    // Extract the battery instructions
    BatteryInstructions = CurrentBattery.BatteryInstructions

    // Extract footer text
    FooterText = CurrentBattery.Footer

    // build the session data
    sessionData = {CurrentIndex: 0, TaskNameList:TaskList, ComponentParameterLists:ParameterList, InstructionList: InstructionList, TaskIconList: TaskIconList} 
    sessionData.FooterText = FooterText
    sessionData.BatteryName = CurrentBattery.name
    sessionData.BatteryShortName = CurrentBattery.shortName
    sessionData.Redirect = CurrentBattery.Redirect
    // send the session data to JATOS
    jatos.studySessionData = sessionData
}

// what is the status of this worker using session and batch data
function WhatIsStatus(sessionData, batchCount) {
    if ( isEmpty(sessionData) && ( typeof batchCount == 'undefined' )) 
    { console.log("FIRST TIME THROUGH")
        return 'firstTime'
    }
    else if ( isEmpty(sessionData) && ( typeof batchCount != 'undefined' )) 
    { console.log("SESSION DATA WIPED, BUT THERE IS BATCH DATA")
        return 'browserRestart'
    }
    else if ( !isEmpty(sessionData) && ( typeof batchCount != 'undefined' )) 
    { console.log('Continuing session')
        return 'continue'
    }
}

function StartComponent(index) {
    console.log("START: ")
    // update the session data index
    jatos.studySessionData.CurrentIndex = index
    // what component to start?
    console.log(jatos.studySessionData.TaskNameList[index])
    console.log(jatos.studySessionData)
    //jatos.startComponentByTitle(TaskList[JATOSSessionData.CurrentIndex])
}

// =============================================================
// DISPLAYED COMPONENTS
/*var LandingPage = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    
    
    return BatteryInstructions
  },
  choices: function() {return [LabelNames.Next]}, 
  response_ends_trial: true,
  on_finish: function() {
    JATOSSessionData = jatos.studySessionData
    console.log(TaskList)
    console.log(jatos)
    console.log(JATOSSessionData.CurrentIndex)
    // This is the function that starts the JATOS component for the next item in the battery
    // The pseudoswitch should receive a task name using the JATOS currentIndex value
    console.log(TaskList[JATOSSessionData.CurrentIndex])    
    jatos.startComponentByTitle(TaskList[JATOSSessionData.CurrentIndex])
    
    // Need to shorten the task list and save it as jatos session variable
  }
}*/

// =============================================================
// Read URL
jatos.onLoad(function() {
    
    const jatos_params = jatos.urlQueryParameters;
    const battery = jatos_params["Battery"];
    const taskIndex = jatos_params["Taskindex"];
    const session = jatos_params["Session"];
    const UsageType = jatos_params["UsageType"];

    
    console.log(jatos_params,battery,taskIndex,session);
    // Update the batch data with this worker
    console.log(batchIndex)
    // Update the batch uses a promise to help ensure the communication worked.
    // It then returns a promise which is waited for here before retrieving the value
    // that the update batch did.
    // The batch data only contains language choice and index.
    
    var PR = UpdateBatchData()
    sessionData = jatos.studySessionData
    console.log(sessionData)
    
    PR.then(() => {
        console.log(sessionData)
        console.log(batchIndex)
        console.log(WhatIsStatus(sessionData,batchIndex) )
    }).then(() => {
        CreateSessionData(battery)
    }).then(()=>{
        console.log(sessionData)
        console.log(WhatIsStatus(sessionData,batchIndex) )
    })
    
    var workerStatus = WhatIsStatus('',) 
    console.log(workerStatus)
    switch(UsageType) {
        case 'SingleTask':
            console.log("Single Task")
            break;
        case 'Battery':
            console.log("Batteries")
            //CreateSessionData(battery)
            
            break;
        case 'Session':
            console.log("Session")
            break;
        case 'ALaCarte':
            console.log("User Choice")
            break;
        default:
            console.log("No Choice Provided")
    }
}

)
