var timeline = []

var trial = {
  type: jsPsychSurvey,
  pages: function() { return IntakeFormParameters.pages},
  title: function() {return IntakeFormParameters.title},
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: function() {
    console.log(LabelNames)
    return LabelNames.Submit
  },
  show_question_numbers: 'onPage',
  on_finish: function(data) {
    data.trial = "Intake Form"
  }
};

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    return "Thanks!"},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}


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
//timeline.push(thank_you)
  