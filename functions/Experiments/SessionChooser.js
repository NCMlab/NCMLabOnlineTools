// =======================================================================
// DEFINE VARIABLES

var timeline = [];
var Choices = [
    'Baseline', 
    'Weekly-Pre', 
    'Weekly-Post', 
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
        var BasePath = "http://127.0.0.1:9000/publix/"
        var Battery = "1007" //jatos.urlQueryParameters.Battery
        var URL = BasePath + jatos.studyCode+"?Battery="+Battery
        jatos.endStudyAndRedirect(URL)
    }
}
timeline.push(trial)
timeline.push(PostChoice)