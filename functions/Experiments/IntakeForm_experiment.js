var timeline = []

var trial = {
  type: jsPsychSurvey,
  on_load: function() {
    document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
  },
  pages: function() { return IntakeFormParameters.pages},
  title: function() {return IntakeFormParameters.title},
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: function() {
    
    console.log(IntakeFormParameters)
    return LabelNames.Submit
  },
  show_question_numbers: 'onPage',
  on_finish: function(data) {
    data.trial = "Questionnaire"
    data.title = IntakeFormParameters.title
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
    Results = IntakeForm_Scoring(data, IntakeFormParameters.ScoringMethod)
    jsPsych.finishTrial(Results)
  }
}

var CheckForEligibility = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data, IntakeFormParameters.ScoringMethod)
    console.log(Results.Eligible)
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

var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p class="Fixation">+</p>',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: 500
}

timeline.push(trial)
timeline.push(CheckForEligibility)
timeline.push(if_Eligibile)
timeline.push(SendData)


