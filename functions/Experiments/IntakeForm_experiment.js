var timeline = []

var trial = {
  type: jsPsychSurvey,
  on_load: function() {
    document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
  },
  pages: function() { return Instructions.pages},
  title: function() {return Instructions.title},
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: function() {
    
    console.log(parameters)
    return LabelNames.Submit
  },
  show_question_numbers: 'onPage',
  on_finish: function(data) {
    data.trial = "Intake"
    data.title = Instructions.title
  }
};


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data, parameters.ScoringMethod)
    jsPsych.finishTrial(Results)
  }
}

timeline.push(Instructions01)
timeline.push(trial)
timeline.push(SendData)


