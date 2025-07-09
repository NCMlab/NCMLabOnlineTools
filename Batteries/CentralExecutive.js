// The goal is to have a single component that can direct traffic

// Functions used by the central execitive

// Check to see if an object is emoty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Check to see if this worker has BATCH data in jatos already
function UpdateBatchData() {
    // Check the session data to see if it is empty, if so add to it. If not, leave it alone
    // Is this worker in the Batch data?
    if ( typeof jatos.batchSession.get(jatos.workerId) == 'undefined' )
    {
        jatos.batchSession.set(jatos.workerId, 0)
            .then(() => jatos.batchSession.set(jatos.workerId+"_Language", "EN"))
            .catch(() => console.log("Batch Session synchronization failed"));
    }
    else 
    {  // reset this worker to zero count (I am not sure why this is done)
        jatos.batchSession.set(jatos.workerId, 0)
            .then(() => console.log("Batch Session was successfully updated"))
            .catch(() => console.log("Batch Session synchronization failed"));
    }
}

// Setup a Battery
function SetupBattery(battery) {
    // What is the Battery to use?
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
    
    // Where IN a battery is the worker, based off a batch variable?
    var batchCount = jatos.batchSession.get(jatos.workerId)
    // Check to see if any session data has been set for this worker
    JATOSSessionData = jatos.studySessionData

    if ( isEmpty(JATOSSessionData) && ( typeof batchCount == 'undefined' )) 
    {
        console.log("FIRST TIME ")
        // This is the first time that this worker has started a session. 
        // Add needed information to the session
        JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskList, ComponentParameterLists:ParameterList, InstructionList: InstructionList, TaskIconList: TaskIconList} 
        JATOSSessionData.FooterText = FooterText
        JATOSSessionData.BatteryName = CurrentBattery.name
        JATOSSessionData.BatteryShortName = CurrentBattery.shortName
        JATOSSessionData.Redirect = CurrentBattery.Redirect
        // If this is the first visit to this manager, display the battery instructions
        DisplayBatteryInstructionsFlag = true 
        if ( typeof CurrentBattery.HeaderButtonsToShow !== 'undefined' )
        { JATOSSessionData.HeaderButtonsToShow = CurrentBattery.HeaderButtonsToShow }
        else { JATOSSessionData.HeaderButtonsToShow = ['Home'] }
        console.log(JATOSSessionData)
    }
    else {console.log("NOT first time")} 
}

// =================================================
// Read URL
jatos.onLoad(function() {
    const jatos_params = jatos.urlQueryParameters;
    const battery = jatos_params["Battery"];
    const taskIndex = jatos_params["Taskindex"];
    const session = jatos_params["Session"];
    const UsageType = jatos_params["UsageType"];

    
    console.log(jatos_params,battery,taskIndex,session);
    // Update the batch data with this worker
    UpdateBatchData()
    switch(UsageType) {
        case 'SingleTask':
            console.log("Single Task")
            break;
        case 'Battery':
            console.log("Batteries")
            SetupBattery(battery)
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
    console.log(jatos.batchSession.getAll())
}

)
