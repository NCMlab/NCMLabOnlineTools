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
    document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
    console.log("Hello World")
    console.log(document.getElementById('jspsych-content'))
  },
  on_finish: function(data) {
    data.trial = "Questionnaire"
    data.QuestionnaireType = Questionnaire.QuestionnaireType
    data.AlertLimit = Questionnaire.AlertLimit
    data.title = Questionnaire.title
    data.pages = Questionnaire.pages
    console.log(Questionnaire)
    data.values = Questionnaire.values
    var NAV = navigator;
    var ComputerInfo = {}
    ComputerInfo.CurrentLanguage = NAV.language
    ComputerInfo.AvailableLanguage = NAV.languages
    ComputerInfo.appVersion = NAV.appVersion
    data.ComputerInfo = ComputerInfo


    var TTT = jsPsych.data.get()
    console.log(TTT)
    trialData = TTT.filter({trial: 'Questionnaire'}).trials[0]
    console.log(Object.keys(trialData.response))
  }
};

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    return "Thanks!"},
  post_trial_gap: 0,
  duration:30000,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    jsPsych.finishTrial(Results)    
  }
}




var CheckForAlert = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data, Questionnaire.ScoringMethod)
  }
}
timeline.push(trial)
timeline.push(CheckForAlert)
timeline.push(if_MentalHealthAlert)
timeline.push(Notes)
timeline.push(SendData)






