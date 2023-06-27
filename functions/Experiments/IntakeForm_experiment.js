var timeline = []

var trial = {
  type: jsPsychSurvey,
  pages: function() { return IntakeFormParameters.pages},
  title: function() {return IntakeFormParameters.title},
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: 'Submit',
  show_question_numbers: 'onPage',
  on_finish: function(data) {
    data.trial = "Intake Form"
  }
};

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data)
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}

timeline.push(trial)
timeline.push(SendData)
  