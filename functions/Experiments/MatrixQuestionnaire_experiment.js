


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

var matrix_trial = {
    type: jsPsychSurveyMatrix,
    survey_json: function() {
        return Questionnaire.survey_JSON
    },
    button_label: function() { return LabelNames.Submit},
    missed_question_label: function() { return LabelNames.missed_question_label}, 
    missed_question_text: function() { return LabelNames.missed_question_text}, 
    required: function() { return Questionnaire.survey_JSON.elements[0].isAllRowRequired },
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
    Results = Questionnaire_Scoring(data)
  }
}

var SpecialtyScoring = {
  type: jsPsychCallFunction,
  func: function() {
    var data = this.type.jsPsych.data.get().filter({trial: 'Questionnaire'})
    
    switch ( data.trials[0].shortTitle ) {
      case 'FirstName':
        // This is here to have a language independent location to store the first name of a participant
        {
          Results.AllResults['FirstName'] = data.trials[0].response['Name']
        }
        case 'GDS':
          {
            var TotalScore = 0
            // The following can be done with a loop, but the explicit nature of the following makes it very 
            // easy to see what is being done.
            if ( data.trials[0].response.find(o => o.name === 'gds01').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds02').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds03').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds04').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds05').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds06').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds07').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds08').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds09').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds10').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds11').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds12').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds13').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds14').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds15').responseValue == 1 ){ TotalScore++ }
            Results.AllResults['Total Score'] = TotalScore
            Results.AllResults['Accuracy'] = TotalScore
            break;
          }
          case 'PANAS, weekly':
            {
              Results.AllResults['Positive'] = data.trials[0].response.find(o => o.name === 'panas03').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas05').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas07').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas08').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas10').responseValue
              Results.NumericResults['panas_pos'] = Results.AllResults['Positive']

              Results.AllResults['Negative'] = data.trials[0].response.find(o => o.name === 'panas01').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas02').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas04').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas06').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas09').responseValue
              Results.NumericResults['panas_neg'] = Results.AllResults['Negative']
              break;                                              
            }
          case 'PANAS, baseline':
          {
            Results.AllResults['Positive'] = data.trials[0].response.find(o => o.name === 'panas03').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas05').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas07').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas08').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas10').responseValue
            Results.NumericResults['panas_pos'] = Results.AllResults['Positive']

            Results.AllResults['Negative'] = data.trials[0].response.find(o => o.name === 'panas01').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas02').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas04').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas06').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas09').responseValue
            Results.NumericResults['panas_neg'] = Results.AllResults['Negative']
            break;                                              
          }
    }
    
  }
}


timeline.push(Welcome)
timeline.push(LoadQuestionnaire)
timeline.push(matrix_trial)


timeline.push(CheckForAlert)
timeline.push(SpecialtyScoring)
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)