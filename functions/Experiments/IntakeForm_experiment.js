var timeline = []

// var OLDtrial = {
//   type: jsPsychSurvey,
//   on_load: function() {
//     document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
//     console.log(Instructions)
//     console.log(parameters)
//   },
//   pages: function() { return Instructions.pages},
//   title: function() {return Instructions.title},
//   button_label_next: 'Continue',
//   button_label_back: 'Previous',
//   button_label_finish: function() {
//     console.log(parameters)
//     return LabelNames.Submit
//   },
//   show_question_numbers: 'onPage',
//   on_finish: function(data) {
//     data.trial = "Intake"
//     data.title = Instructions.title
//   }
// };


var form_trial = {
    type: jsPsychSurveyHtmlForm,
    on_load: function() {
      console.log(parameters)
      console.log(Instructions)
    },
    survey_json: function() {
        return Instructions.pages
    },
    button_label: function() { return LabelNames.Submit},
    button_label_empty_responses: function() { return LabelNames.SubmitAnyway},
    missed_question_label: function() { return LabelNames.missed_question_label},
    missed_question_text: function() { return LabelNames.missed_question_text},
    next_button_label: function() { return LabelNames.Next },
    previous_button_label: function() { return LabelNames.Previous },
    submit_button_label: function() { return LabelNames.Submit },
    required: function() { return Questionnaire.survey_JSON.isAllRowRequired },
    on_load: function() {
      
        //console.log(document.getElementById("jspsych-progressbar-container"))
        //document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
    },
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

//timeline.push(Instructions01)
timeline.push(form_trial)
timeline.push(SendData)


