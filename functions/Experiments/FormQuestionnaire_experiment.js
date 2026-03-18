


var timeline = []
var Questionnaire = []
var CriteriaToUse = 0
var Results 
// var converter = new showdown.Converter();

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    console.log(parameters)
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
    console.log(parameters)
    console.log(text)
    eval(text)

    console.log(Questionnaire)
    if ( typeof Questionnaire.survey_JSON !== 'undefined' )
    { console.log('>>>> JSON <<<<<')}
    if ( typeof Questionnaire.pages !== 'undefined' )
      { console.log('>>>> PAGES <<<<<<')}

  }
}

var form_trial = {
    type: jsPsychSurveyHtmlForm,
    survey_json: function() {
        return Questionnaire.survey_JSON
    },
    button_label: function() { return LabelNames.Submit},
    button_label_empty_responses: function() { return LabelNames.SubmitAnyway},
    missed_question_label: function() { return LabelNames.missed_question_label},
    missed_question_text: function() { return LabelNames.missed_question_text},
    next_button_label: function() { return LabelNames.Next },
    previous_button_label: function() { return LabelNames.Previous },
    required: function() { return Questionnaire.survey_JSON.isAllRowRequired },
    on_load: function() {
        //console.log(document.getElementById("jspsych-progressbar-container"))
        //document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
    },
    on_finish: function(data) {
        data.trial = "Questionnaire"
        data.response = data.response
        data.QuestionnaireType = Questionnaire.QuestionnaireType
        data.Questionnaire = Questionnaire
        data.AlertLimit = Questionnaire.AlertLimit
        data.title = Questionnaire.title
        data.shortTitle = Questionnaire.shortTitle
    }
};


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}

var CheckForAlert = {
  type: jsPsychCallFunction,
  func: function() {
    var data = this.type.jsPsych.data.get().filter({trial: 'Questionnaire'})
    console.log(data)
    Results = Questionnaire_Scoring(data.trials[0])
    console.log(Results)
  }
}


timeline.push(Welcome)
timeline.push(LoadQuestionnaire)
timeline.push(form_trial)


timeline.push(CheckForAlert)
//timeline.push(SpecialtyScoring)
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)