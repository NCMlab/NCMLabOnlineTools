// These functions serve as the central executive for the platform and direct traffic.
// This is the first component in JATOS and by default every visit will start here.
// The majority of the action is done using promises. The reason for this is because the index
// and language are stored as BATCH variables in JATOS. This means that these values are available 
// across SESSIONS. In other words, a worker/participant may start a session, stop midway, and 
// then restart. The BATCH information stores where in a battery (series of tasks) they were when
// they left off. A worker may stop due to an internet connection, computer problem, or personal 
// decision.
// The use of promises is because the communication with the JATOS server may take time and it is 
// necessary to wait until it responds before continuing. 
// The basic order of steps are: check the BATCH to see if a worker exists there; check for SESSION data;
// check the URL usage type. Based on these parameters, the next task to administer is served. 
// ==============================================================
// Global variables
var JATOSSessionData = -99
var timeline = []
var CurrentLanguage
// ==============================================================
// Functions used by the central execitive

// Check to see if an object is emoty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Setup a Battery
function SetupBattery(SessionDataFlag, BatteryIndex, UsageType) {
    return new Promise((resolve) => {
        if ( !SessionDataFlag ) {
            // What is the Battery to use?
            CurrentBattery = BatteryList.find(x => x.index === parseInt(BatteryIndex))
            console.log(CurrentBattery)
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
            console.log("WORKER ID: "+jatos.workerId)
        
            // Check to see if any session data has been set for this worker
            JATOSSessionData = jatos.studySessionData
            // This is the first time that this worker has started a session. 
            // Add needed information to the session
            JATOSSessionData = {CurrentIndex: 0, TaskNameList:TaskList, ComponentParameterLists:ParameterList, InstructionList: InstructionList, TaskIconList: TaskIconList} 
            JATOSSessionData.FooterText = FooterText
            JATOSSessionData.BatteryName = CurrentBattery.name
            JATOSSessionData.BatteryInstructions = CurrentBattery.BatteryInstructions
            JATOSSessionData.BatteryShortName = CurrentBattery.shortName
            JATOSSessionData.Redirect = CurrentBattery.Redirect
            JATOSSessionData.UsageType = UsageType
            // If this is the first visit to this manager, display the battery instructions
            DisplayBatteryInstructionsFlag = true 
            if ( typeof CurrentBattery.HeaderButtonsToShow !== 'undefined' )
            { JATOSSessionData.HeaderButtonsToShow = CurrentBattery.HeaderButtonsToShow }
            else { JATOSSessionData.HeaderButtonsToShow = ['Home'] }
            console.log(JATOSSessionData)
            
            jatos.studySessionData = JATOSSessionData
        }
        resolve("successfully setup session data")
    })
}

// This checks to see if there is session data and it is complete
function CheckForSessiondata() {
    return new Promise((resolve) =>{
    const ExpectedKeysInSessionData = ['CurrentIndex', 'TaskNameList', 
        'ComponentParameterLists', 'InstructionList', 'TaskIconList', 
        'FooterText', 'BatteryName', 'BatteryShortName', 'Redirect', 
        'HeaderButtonsToShow', 'UsageType']
    var CompleteSessionDataFlag = true
    JATOSSessionData = jatos.studySessionData
    if ( isEmpty(JATOSSessionData) ) {
        SessionDataFlag = 'missing'
        CompleteSessionDataFlag = false
    }
    else {
        var keys = Object.keys(JATOSSessionData)        
        // check to see if the session data appears complete
        for ( var i = 0; i < ExpectedKeysInSessionData.length; i++ ) {
            if (!( ExpectedKeysInSessionData[i] in JATOSSessionData )) {
                CompleteSessionDataFlag = false
            }
        }
    }
    resolve(CompleteSessionDataFlag)
    })
}

// function to start a task
function StartComponent(title) {
    console.log("Starting component: "+title)
    jatos.startComponentByTitle(title)
}

function SetupjsPsychAndRunTimeline()  {
    var jsPsych = initJsPsych({
    display_element: 'jspsych-target',
    })
    // if the central executive has added anything otthe timeline,
    // then run it.
    if ( timeline.length !== 0 )
    { 
        jsPsych.run(timeline); 
    }          
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
    // This function is called from teh UpdatBatch promise. This is because it 
    // requires the LANGUAGE value which is storedin the batch. Access the batch may 
    // take time so a promise is used.
    //
    // NOTES FROM JULY 21, 2025
    // Have session buttons be links to individual tasks or batteries. This can easily be done 
    // with batteries comprising single tasks, but is there a more elegant way to do this?
    // Arrange session buttons in a table with rows and columns. Each cell is a button.
    // As tasks are performed and session buttons completed, the completed cells are marked as complete.
    // Some tasks may be completed at any time while others have requirement conditions that need to 
    // be met before they can be completed. There may also be conditions with respect to elapsed 
    // time before something becomes available.
    // In order, to see what has been completed the info needs to be stored in the batch data since 
    // no front end scripts can access the back-end data stored in the database. 


    let input = CurrentLanguage+"_"+JATOSSessionData.ComponentParameterLists[0]
    pseudoSwitch(input)
    var Choices = []
    var SessionsBatteryList = []
    for ( var i = 0; i < parameters[0].List.length; i++ )
        { 
            Choices.push( parameters[0].List[i].name ) 
            SessionsBatteryList.push( parameters[0].List[i].battery )
        }
    SessionChoiceTrial = MakeSessionButtons(parameters[0].Title, Choices, SessionsBatteryList)
    return SessionChoiceTrial
    //timeline.push()
}

function IsTheBatteryFinished() {
    var BatteryCompleteFlag = false
    // The minus one is because the index starts with zero and does not
    // get updated until AFTER this check
    if ( JATOSSessionData.CurrentIndex == JATOSSessionData.TaskNameList.length - 1) 
    {
        console.log("IT IS COMPLETE")
        BatteryCompleteFlag = true
        //timeline.push(MakeThankYouPage())
    }
    return BatteryCompleteFlag
}

function UpdateBatchData() {
    // Check the session data to see if it is empty, if so add to it. If not, leave it alone
    // Is this worker in the Batch data?
    var currentIndex = 0
    return new Promise((resolve) => {
        if ( typeof jatos.batchSession.get(jatos.workerId) == 'undefined' ) {
            // no batch data
            CurrentLanguage = 'EN' // This is the default language setting
            // set the index for this worker
            jatos.batchSession.set(jatos.workerId, currentIndex)    
            // set the language
            .then(() => jatos.batchSession.set(jatos.workerId+"_Language", "EN"))
            
        }
        else {
            currentIndex = jatos.batchSession.get(jatos.workerId) + 1
            CurrentLanguage = jatos.batchSession.get(jatos.workerId+"_Language")
            jatos.batchSession.set(jatos.workerId, currentIndex)    
        }
        resolve(currentIndex)
    })
}

// These are the following usage types available.

function UsageTypeDecision(UsageType) {
    return new Promise((resolve) => {
        switch(UsageType) {
            case 'SingleTask':
                console.log("Single Task")
                break;
            case 'Battery':
               // get the title of the task to start next
                if ( !IsTheBatteryFinished() )
                {
                    var TitleToStart = JATOSSessionData.TaskNameList[JATOSSessionData.CurrentIndex]
                    StartComponent(TitleToStart)
                }
                else { timeline.push(MakeThankYouPage()) }
                break;
            case 'Session':
                timeline.push(SetupSession())
                break;
            case 'UserChoice':
                timeline.push(MakeUserChoiceElement(JATOSSessionData))
                // once a choice is made start that title
                break;
            default:
                console.log("No Choice Provided")
                timeline.push(MakeUserChoiceElement(JATOSSessionData))
        }
    resolve(UsageType)
    })
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

function MakeSessionButtons(Title, Choices, SessionsBatteryList) {
    var trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: function() { return Title },
        choices: Choices,
        prompt: "",
        on_finish: function(data) {
            // The user has selected a session to administer
            // Load up the Battery that is associated with the selected session
            SetupBattery(false, SessionsBatteryList[data.response], 'Battery')
            JATOSSessionData = jatos.studySessionData
            console.log(JATOSSessionData)
            // Start at the beginning of this battery
            var TitleToStart = JATOSSessionData.TaskNameList[0]
            // Start the battery
            StartComponent(TitleToStart)
        }
    };
    return trial
}

function MakeUserChoiceElement(JATOSSessionData) {
    // This is the jsPsych task that display an icon for each task in a battery
    IconImgFileList = MakeIconList(JATOSSessionData.TaskNameList, ComponentList)
    var UserChoicePage = {
        type: jsPsychHtmlButtonResponse,
        stimulus: function() {return '<b>'+JATOSSessionData.BatteryInstructions+'</b>'},
        choices: function(){ 
            var stim = []
            console.log(JATOSSessionData.TaskIconList)
            for ( var i = 0; i < JATOSSessionData.TaskIconList.length; i++ ) {
                stim.push(`<span><img src="assets/Icons/${IconImgFileList[i]}" alt="${JATOSSessionData.TaskNameList[i]}"></br>${JATOSSessionData.TaskIconList[i]}</span>
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
            StartComponent(JATOSSessionData.TaskNameList[response])

        }
    };
    return UserChoicePage
}
function MakeThankYouPage() {
    console.log("Making thank you page")
    // This is the jsPsych task that display an icon for each task in a battery
    var ThankYouPage = {
        type: jsPsychHtmlButtonResponse,
        stimulus: function() { 
            var LANG = jatos.batchSession.get(jatos.workerId+"_Language")
            pseudoSwitch(LANG+'_LabelNames')
            return LabelNames.ThankYou
        },
        choices: function() { return [LabelNames.Done]}
    }
    return ThankYouPage
}
// =================================================
// This is where all the pieces are put together

function CentralExecutive() {
    return new Promise((resolve) => {
        const jatos_params = jatos.urlQueryParameters;
        const BatteryIndex = jatos_params["Battery"];
        const UsageType = jatos_params["UsageType"];
        var CurrentIndex = -99
        var SessionDataFlag = false
        UpdateBatchData()
        .then((res) => {
            CurrentIndex = res
            
        })
        .then(() => CheckForSessiondata())
        .then((res) => {
            SessionDataFlag = res
            SetupBattery(SessionDataFlag, BatteryIndex, UsageType)  
        })        
        //.then(() => IsTheBatteryFinished())
        // When starting the Session Chooser, a URL UsageType of Session is provided.
        // The Session Chooser will start a battery. WHen the battery is complete the
        // CE is returned to. At that point the URL UsageType is still Session; however,
        // the Session usage type is changed to Battery
        .then(() => UsageTypeDecision(jatos.studySessionData.UsageType))
        .then(() => SetupjsPsychAndRunTimeline())
        resolve("EVERYTHING IS SETUP")
    })
}



