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
            console.log("NO SESSION DATA")
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
        else {console.log("THERE IS SESSION DATA")}
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
    var ButtonRow = []
    var ButtonBit = []
    for ( var i = 0; i < parameters[0].List.length; i++ )
        { 
            Choices.push( parameters[0].List[i].name ) 
            SessionsBatteryList.push( parameters[0].List[i].battery )
            ButtonRow.push( parameters[0].List[i].row )
            ButtonBit.push( parameters[0].List[i].BitIndex )
        }
    
    console.log("Completed Sessions: ")
    CompletedBits = jatos.batchSession.get(jatos.workerId+'_bitIndex')
    // Convert this back to bits to centralize this code/decode into one script
    console.log(CompletedBits)
    CompletedBits = parseInt(CompletedBits, 10).toString(2)
    console.log(CompletedBits)
    console.log(ButtonRow)
    console.log(ButtonBit)

    SessionChoiceTrial = MakeSessionButtons(parameters[0].Title, Choices, SessionsBatteryList)
    SessionChoiceTrialNEW = MakeSessionButtons(parameters[0].Title, Choices, SessionsBatteryList, ButtonBit, CompletedBits, ButtonRow)
    
    // Have different session been completed?
    // Check the bit 
    

    // The Where To Go Next functionality may read the current bit from batch data and update the 
    // overall bit status of the session. The goal is to keep track of which battery in the entire 
    // session has been completed. Therefore, there is one bit per button in the session, NOT one bit 
    // per task/component. This Bit Location can be sent to the Session Data. This will allow the central 
    // executive to keep track of it when it determins that a battery has been completed. 
    // Therefore, it may be the central executuve that takes care of this.
    // Whenever a battery (of a session) is finished batch data is updated with this information. 
    // Therefore, there just needs to be a bit-string/bytes corresponding to the yes/no (1/0) status of 
    // each battery in the session. The itemCount in the session config is one value per button/battery.
    return SessionChoiceTrial
    //timeline.push()
}

function IsTheBatteryFinished() {
    var BatteryCompleteFlag = false
    // The minus one is because the index starts with zero and does not
    // get updated until AFTER this check
    JATOSSessionData = jatos.studySessionData
    console.log("Checking to see if battery is finised. Jatos session data is:")
    console.log(JATOSSessionData)

    if ( JATOSSessionData.CurrentIndex == JATOSSessionData.TaskNameList.length) 
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
            console.log("Setting the index to zero")
            // no batch data
            CurrentLanguage = 'EN' // This is the default language setting
            // set the index for this worker
            jatos.batchSession.set(jatos.workerId, currentIndex)    
            // set the language
            .then(() => jatos.batchSession.set(jatos.workerId+"_Language", "EN"))
            .then(() => jatos.batchSession.set(jatos.workerId+"_bitIndex", "0"))
            
        }
        else {
            console.log("Incrementing the index")
            currentIndex = jatos.batchSession.get(jatos.workerId) + 1
            CurrentLanguage = jatos.batchSession.get(jatos.workerId+"_Language")
            jatos.batchSession.set(jatos.workerId, currentIndex)    
            // Need to also update the session index

        }
        resolve(currentIndex)
    })
}
// This is the location within a bettery
function UpdateSessionDataIndex(IsThereSessionData) {
    return new Promise((resolve) => {
        if ( IsThereSessionData )
        { 
            var SessionData = jatos.studySessionData 
            SessionData.CurrentIndex = SessionData.CurrentIndex + 1
            jatos.studySessionData = SessionData 
        }
        resolve("Successfuly updated session index")
    })
}

function UpdateSessionBitIndex(AddToCompletionCount) {
    return new Promise((resolve) => {
        var SessionData = jatos.studySessionData 
        SessionData.AddToCompletionCount = AddToCompletionCount
        jatos.studySessionData = SessionData 
        resolve("Successfuly updated session bit index")
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
               console.log("THIS is a battery") 
               console.log(JATOSSessionData)
               if ( !IsTheBatteryFinished() )
                {
                    console.log("The battery is NOT finished")
                    var TitleToStart = JATOSSessionData.TaskNameList[JATOSSessionData.CurrentIndex]
                    StartComponent(TitleToStart)
                }
                else { 
                    console.log("The battery is finished.")
                    console.log(jatos.workerId)
                    // Now that the battery is complete add the Completion information to the Batch
                    console.log(jatos.studySessionData.AddToCompletionCount)
                    console.log(jatos.batchSession.get(jatos.workerId+'_bitIndex'))
          
                    var NewValue = parseInt(jatos.studySessionData.AddToCompletionCount,10) + parseInt(jatos.batchSession.get(jatos.workerId+'_bitIndex'),10)
                    console.log(NewValue)
                    jatos.batchSessionVersioning = false;
                    jatos.batchSession.set(jatos.workerId+"_bitIndex", NewValue.toString())
                    //.then(() => timeline.push(MakeThankYouPage()))
                    timeline.push(MakeThankYouPage())
                }
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

function MakeSessionButtonsNEW(Title, Choices, SessionsBatteryList, BitList, CompletedBitList, ButtonRow) {
    var trial = {
        type: jsPsychHtmlButtonResponseTable,
        stimulus: function() { return Title },
        choices: Choices,
        completedBits: CompletedBitList,
        buttonRow: ButtonRow,
        prompt: "",
        on_start: function() {
            // Is the BitList Empty?
            console.log(BitList === undefined)
        },
        on_finish: function(data) {
            // Make a bit version of this session
            var AddToCompletionCount = parseInt("1".padEnd(BitList[data.response].toString(),"0"),10)
            // convert back to base10
            AddToCompletionCount = parseInt(AddToCompletionCount, 2);
            console.log("Amount to add to the bitstring of completion: "+AddToCompletionCount)
        
            // The user has selected a session to administer
            // Load up the Battery that is associated with the selected session
            console.log(SessionsBatteryList)
            SetupBattery(false, SessionsBatteryList[data.response], 'Battery')
            JATOSSessionData = jatos.studySessionData
            console.log(JATOSSessionData)
            // Start at the beginning of this battery
            var TitleToStart = JATOSSessionData.TaskNameList[0]
            // Start the battery
            console.log(TitleToStart)
            UpdateSessionBitIndex(AddToCompletionCount)
            .then(() => StartComponent(TitleToStart))
            // Once a session is selected, add the Bit Index to the session data
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
        // var LANG = jatos.batchSession.get(jatos.workerId+"_Language")
        // console.log("The language is: "+LANG)
        // pseudoSwitch(LANG+'_LabelNames')
            return LabelNames.ThankYou
        },
        choices: [],// function() { return [LabelNames.Done]},
        on_finish: function() {close()}
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
            console.log("The current index is: " + res)
        })
        .then(() => CheckForSessiondata())
        .then((res) => {
            UpdateSessionDataIndex(res)
            SessionDataFlag = res
        })
        .then(() => {
            console.log(jatos.studySessionData)
        // If we get here and there is NO session data than this is a fresh start
        // If we get here and there IS session data then we have come to the CE from a 
        // previous task that was just completed. 
        // In that case update the session index. << Maybe
        // There may be a problem if a browser window is closed.

                console.log(jatos.studySessionData)
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



