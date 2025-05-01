// =======================================================================
// DEFINE VARIABLES

var timeline = [];
var TaskNameList = []
var TaskIconList = []
var ComponentIDList = []
var ComponentParameterLists = []
var DisplayBatteryInstructionsFlag
var BatteryInstructions
var SessionList = []
var Choices = []
var SessionsBatteryList = []

var SetupChoices = {
    type: jsPsychCallFunction,
    func: function() {
        // read the data for this trial
        var all_data = jsPsych.data.get();
        CurrentBattery = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery))
        console.log(CurrentBattery)
        // find the battery selected and extract its list of components
        //var ParameterList = BatteryList.find(x => x.index === parseInt(all_data.trials[0].Battery)).ParameterLists
        ParameterList = CurrentBattery.TaskList.map(({ Parameters }) => Parameters)
        console.log(ParameterList)
        console.log(LANG)
        pseudoSwitch(LANG+"_"+ParameterList)
        console.log(parameters)
        for ( var i = 0; i < parameters[0].List.length; i++ )
        { 
            Choices.push( parameters[0].List[i].name ) 
            SessionsBatteryList.push( parameters[0].List[i].battery )
        }
    }
}

var trial0 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: "",
    trial_duration: 10
    
}

var SetupSessionData = {
    type: jsPsychCallFunction,
    func: function() {
        var all_data = jsPsych.data.get();
        JATOSSessionData = jatos.studySessionData
        
        JATOSSessionData.CurrentIndex = 0
        jatos.studySessionData = []
        // reset the batch current index
        jatos.batchSession.set(jatos.workerId, 0);
    }
}

var trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() { return parameters[0].Title },
    choices: Choices,
    prompt: ""
  };


var PostChoice = {
    type: jsPsychCallFunction,
    func: function() {
        var data = jsPsych.data.get()
        // Map the choices to the Batteries
        var Battery 
        // Note: the 3 in the next line refers to the third component in the timeline
        Battery = SessionsBatteryList[Choices.indexOf(Choices[data.trials[3].response])]
        console.log(SessionsBatteryList)
        console.log(Choices)
        console.log(Choices[data.trials[3].response])
        console.log(Battery)
        var BasePath = window.location.origin +"/publix/" // "http://127.0.0.1:9000/publix/"
        var URL = BasePath + jatos.studyCode+"?Battery="+Battery+"&UsageType=Battery"
        console.log(URL)
        jatos.endStudyAndRedirect(URL)
        
        //window.open(URL, '_self')
    }
}
timeline.push(trial0)
timeline.push(SetupChoices)
timeline.push(SetupSessionData)
timeline.push(trial)
timeline.push(PostChoice)