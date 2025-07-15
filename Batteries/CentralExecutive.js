// The goal is to have a single component that can direct traffic
var JATOSSessionData = {}
var timeline = []
var CurrentLanguage
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
            .then(() => {
                console.log("Batch Session was successfully setup")
                CurrentLanguage = jatos.batchSession.get(jatos.workerId+"_Language")
                console.log('LANGUGE: '+CurrentLanguage)
    })
            .catch(() => console.log("Batch Session synchronization failed"));
    }
    else 
    {  // reset this worker to zero count (I am not sure why this is done)
        jatos.batchSession.set(jatos.workerId, 0)
            .then(() => {
                CurrentLanguage = jatos.batchSession.get(jatos.workerId+"_Language")
                console.log("Batch Session was successfully updated")
                console.log('LANGUGE: '+CurrentLanguage)
            })
            .catch(() => console.log("Batch Session synchronization failed"));
    }
}

// Setup a Battery
function SetupBattery(battery, UsageType) {
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
        JATOSSessionData.UsageType = UsageType
        // If this is the first visit to this manager, display the battery instructions
        DisplayBatteryInstructionsFlag = true 
        if ( typeof CurrentBattery.HeaderButtonsToShow !== 'undefined' )
        { JATOSSessionData.HeaderButtonsToShow = CurrentBattery.HeaderButtonsToShow }
        else { JATOSSessionData.HeaderButtonsToShow = ['Home'] }
        console.log(JATOSSessionData)
    }
    else {console.log("NOT first time")} 
    jatos.studySessionData = JATOSSessionData
}

function CheckForSessiondata() {
    const ExpectedKeysInSessionData = ['CurrentIndex', 'TaskNameList', 
        'ComponentParameterLists', 'InstructionList', 'TaskIconList', 
        'FooterText', 'BatteryName', 'BatteryShortName', 'Redirect', 
        'HeaderButtonsToShow', 'UsageType']
    var CompleteSessionDataFlag = true        
    if ( isEmpty(JATOSSessionData) ) {
        SessionDataFlag = 'missing'
        CompleteSessionDataFlag = false
    }
    else {
        var keys = Object.keys(JATOSSessionData)        
        // check to see if the session data appears complete
        for ( var i = 0; i < ExpectedKeysInSessionData.length; i++ ) {
            if (!( ExpectedKeysInSessionData[i] in JATOSSessionData )) {
                console.log(ExpectedKeysInSessionData[i])
                CompleteSessionDataFlag = false
            }
        }
    }
    return CompleteSessionDataFlag
}

// function to start a task
function StartComponent(title) {
 console.log("Starting component: "+title)
 jatos.startComponentByTitle(title)
}

// The following is used by the user choice 
function MakeIconList(TaskNameList, ComponentList) {
    // create a list of image file names for the tasks in the battery
    var IconImgFileList = []
    for ( var i = 0; i < TaskNameList.length; i ++ ) {
        console.log(i)
        IconImgFileList.push(ComponentList.find(item => item.name === TaskNameList[i]).iconFileName)
      }
      return IconImgFileList
}

// Need function to setup the session. This info is stored in a parameter.
function SetupSession() {
    console.log("CURRENT LANGUAGE: "+CurrentLanguage) 
    console.log(JATOSSessionData) 
    console.log(SessionList)
    var parameters = JATOSSessionData.ComponentParameterLists[0]
    console.log(parameters)
    let LANG = 'EN'
    pseudoSwitch(LANG+"_"+parameters)
    console.log(parameters)


    
}
// =================================================
// jsPsych elements to display.
// These include: 
//  - the welcome/splash page
//  - the icons for user choice
//  - the session manager page
function MakeTestElement() {
    var TestDisplay = {
        type: jsPsychHtmlButtonResponse,
        stimulus: "JASON",
        choices: ['y','n']
    }
    return TestDisplay
}


function MakeUserChoiceElement(JATOSSessionData) {
    // This is the jsPsych task that display an icon for each task in a battery
    IconImgFileList = MakeIconList(JATOSSessionData.TaskNameList, ComponentList)
    var UserChoicePage = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {return '<b>'+BatteryInstructions+'</b>'},
    choices: function(){ 
        var stim = []
        console.log(JATOSSessionData.TaskIconList)
        for ( var i = 0; i < JATOSSessionData.TaskIconList.length; i++ ) {
            stim.push(`<span><img src="assets/Icons/${IconImgFileList[i]}" alt="${TaskList[i]}"></br>${TaskIconList[i]}</span>
            `)
        }
        return stim
    },
    prompt: '',
    on_finish: function(data) {
        // what button was pressed?
        response = data.response
        // This is the function that starts the JATOS component for the next item in the battery
        // The pseudoswitch should receive a task name using the JATOS currentIndex value
        JATOSSessionData.CurrentIndex = response
        jatos.studySessionData = JATOSSessionData
        StartComponent(TaskList[response])

    }
    };
    return UserChoicePage
}

// =================================================

// Read URL
function CentralExecutive() {
    const jatos_params = jatos.urlQueryParameters;
    const battery = jatos_params["Battery"];
    const taskIndex = jatos_params["Taskindex"];
    const session = jatos_params["Session"];
    const UsageType = jatos_params["UsageType"];

    
    
    // Update the batch data with this worker
    UpdateBatchData()
    // check to see if the session data needs to be updated or not
    if ( !CheckForSessiondata() ) { SetupBattery(battery, UsageType) }            
    // determine what to do based on the usage type
    switch(UsageType) {
        case 'SingleTask':
            console.log("Single Task")
            break;
        case 'Battery':
            console.log("Batteries")
            // get the title of the task to start next
            var TitleToStart = JATOSSessionData.TaskNameList[JATOSSessionData.CurrentIndex]
            StartComponent(TitleToStart)
            break;
        case 'Session':
            console.log("Session")
            SetupSession()
            break;
        case 'ALaCarte':
            console.log("User Choice")
            timeline.push(MakeUserChoiceElement(JATOSSessionData))
            // once a choice is made start that title
            break;
        default:
            console.log("No Choice Provided")
            
            timeline.push(MakeUserChoiceElement(JATOSSessionData))
    }
}
/*jatos.onLoad(function() {
    
    const jatos_params = jatos.urlQueryParameters;
    const battery = jatos_params["Battery"];
    const taskIndex = jatos_params["Taskindex"];
    const session = jatos_params["Session"];
    const UsageType = jatos_params["UsageType"];

    
    console.log(jatos_params,battery,taskIndex,session);
    // Update the batch data with this worker
    
    UpdateBatchData()
    if ( !CheckForSessiondata() ) { SetupBattery(battery, UsageType) }            
    console.log("SESSION DATA COMPLETE? " + CheckForSessiondata())

    switch(UsageType) {
        case 'SingleTask':
            console.log("Single Task")
            break;
        case 'Battery':
            console.log("Batteries")
            console.log(JATOSSessionData)
            var TitleToStart = JATOSSessionData.TaskNameList[JATOSSessionData.CurrentIndex]
            StartComponent(TitleToStart)
            break;
        case 'Session':
            console.log("Session")
            break;
        case 'ALaCarte':
            console.log("User Choice")
            break;
        default:
            console.log("No Choice Provided")
            console.log(MakeTestElement())
            timeline.push(MakeTestElement())
    }
}

)*/

