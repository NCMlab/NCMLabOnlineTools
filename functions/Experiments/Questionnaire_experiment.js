var timeline = []

var trial = {
  type: jsPsychSurvey,
  pages: function() { 
    text = 'Questionnaire = '+Questionnaire_Parameters.questionnaire
    eval(text)
    console.log(Questionnaire)
    return Questionnaire.pages
},
  title: function() { return ' ' },
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: function() {
    return LabelNames.Submit
  },
  show_question_numbers: 'onPage',
  description: function() { return Questionnaire.description },
  on_load: function() {
    console.log("Hello World")
    console.log(document.getElementById('jspsych-content'))
  },
  on_finish: function(data) {
    data.trial = "Questionnaire"
    data.title = Questionnaire.title
    var NAV = navigator;
    var ComputerInfo = {}
    ComputerInfo.CurrentLanguage = NAV.language
    ComputerInfo.AvailableLanguage = NAV.languages
    ComputerInfo.appVersion = NAV.appVersion
    data.ComputerInfo = ComputerInfo
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
    Results = IntakeForm_Scoring(data, Questionnaire.ScoringMethod)
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}


var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
}



timeline.push(trial)
//timeline.push(SendData)

