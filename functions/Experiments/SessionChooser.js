// =======================================================================
// DEFINE VARIABLES

var timeline = [];
var TaskNameList = []
var TaskIconList = []
var ComponentIDList = []
var ComponentParameterLists = []
var DisplayBatteryInstructionsFlag
var BatteryInstructions
var TaskList = []
var Choices = []
var BatteryList = []

var SetupChoices = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(parameters)
        for ( var i = 0; i < parameters[0].List.length; i++ )
        { 
            Choices.push( parameters[0].List[i].name ) 
            BatteryList.push( parameters[0].List[i].battery )
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
        Battery = BatteryList[Choices.indexOf(Choices[data.trials[3].response])]
        var BasePath = window.location.origin +"/publix/" // "http://127.0.0.1:9000/publix/"
        var URL = BasePath + jatos.studyCode+"?Battery="+Battery+"&Usage=Battery"
        
        jatos.endStudyAndRedirect(URL)
        
        //window.open(URL, '_self')
    }
}
timeline.push(trial0)
timeline.push(SetupChoices)
timeline.push(SetupSessionData)
timeline.push(trial)
timeline.push(PostChoice)