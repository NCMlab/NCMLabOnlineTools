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


var Choices = [
    'Intake',
    'Baseline', 
    'Trails',
    'Visit-Pre', 
    'Visit-Post', 
    'Post-Intervention'
]

var trial0 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: "",
    trial_duration: 10
    
}

var SetupSessionData = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(ComponentList)
        console.log(jatos)
        console.log(jatos.workerId)
        console.log("CHOICES::: "+Choices)

        var all_data = jsPsych.data.get();
        console.log(BatteryList)
        
        // reset the index
        
        JATOSSessionData = jatos.studySessionData
        console.log(JATOSSessionData)
        
        JATOSSessionData.CurrentIndex = 0
        console.log(JATOSSessionData)
        jatos.studySessionData = []
        // reset the batch current index
        jatos.batchSession.set(jatos.workerId, 0);
        console.log(jatos.studySessionData)

        //console.log(jatos.batchSession.getAll())
        //console.log(jatos)
        //console.log(BreakPoint)
        
    }
}

var trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-size:20px;">What session is this?</p>',
    choices: Choices,
    prompt: ""
  };


var PostChoice = {
    type: jsPsychCallFunction,
    func: function() {
        var data = jsPsych.data.get()
        console.log(data)
        console.log(Choices[data.trials[2].response])
        // Map the choices to the Batteries
        var Battery 
        if ( Choices[data.trials[2].response] == 'Intake' )
        { Battery = '73'}
        if ( Choices[data.trials[2].response] == 'Baseline' )
            { Battery = '74'}
        if ( Choices[data.trials[2].response] == 'Trails' )
            { Battery = '78'}
        if ( Choices[data.trials[2].response] == 'Visit-Pre' )
            { Battery = '75'}
        if ( Choices[data.trials[2].response] == 'Visit-Post' )
            { Battery = '76'}
        if ( Choices[data.trials[2].response] == 'Post-Intervention' )
            { Battery = '77'}
        console.log(window.location)
        //console.log(BreakPoint)
        var BasePath = window.location.origin +"/publix/" // "http://127.0.0.1:9000/publix/"
        var URL = BasePath + jatos.studyCode+"?Battery="+Battery
        console.log(URL)
        
        jatos.endStudyAndRedirect(URL)
        
        //window.open(URL, '_self')
    }
}
timeline.push(trial0)

timeline.push(SetupSessionData)
timeline.push(trial)
timeline.push(PostChoice)