// =======================================================================
// DEFINE VARIABLES

var timeline = [];
var Choices = [
    'Intake',
    'Baseline', 
    'Visit-Pre', 
    'Visit-Post', 
    'Post-Intervention'
]


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
        console.log(Choices[data.trials[0].response])
        // Map the choices to the Batteries
        var Battery 
        if ( Choices[data.trials[0].response] === 'Intake' )
        { Battery = '73'}
        if ( Choices[data.trials[0].response] === 'Baseline' )
            { Battery = '74'}
        if ( Choices[data.trials[0].response] === 'Visit-Pre' )
            { Battery = '75'}
        if ( Choices[data.trials[0].response] === 'Visit-Post' )
            { Battery = '76'}
        if ( Choices[data.trials[0].response] === 'Post-Intervention' )
            { Battery = '77'}
        var BasePath = "http://127.0.0.1:9000/publix/"
        var URL = BasePath + jatos.studyCode+"?Battery="+Battery
        jatos.endStudyAndRedirect(URL)
    }
}
timeline.push(trial)
timeline.push(PostChoice)