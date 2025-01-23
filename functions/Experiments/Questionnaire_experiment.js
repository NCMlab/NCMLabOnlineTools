var timeline = []
var Questionnaire = []
var CriteriaToUse = 0
var Results 
var converter = new showdown.Converter();

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
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


var trial02 = {
  type: jsPsychSurvey,
  survey_json:  function() { 
    return Questionnaire.survey_JSON
  },
  description: function() { return Questionnaire.description },
  on_load: function() {
    document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
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
}

var trial = {
    type: jsPsychSurvey,
    pages: function() { 
      // Are there more than one criteria?
      // If the value does not meet any of the criteria, use the first option
      console.log("===== QUESTION =============")
      if ( parameters.criteria.length > 1 )
        {
          
          // get the criteria variable value
          // check to see if the screening has been performed
          console.log(jatos.studySessionData.ScreeningData)
          if ( typeof jatos.studySessionData.ScreeningData !== 'undefined' )
          {
            console.log(jatos.studySessionData.ScreeningData)
            var Str =  'var ' + parameters.variable + ' = jatos.studySessionData.ScreeningData.trials[1].response.' + parameters.variable 
            console.log(Str)
            eval(Str)
            console.log(Age)
          
          
            for ( var i = 0; i < parameters.criteria.length; i++ )
            {
              // check the criteria
              if ( eval(parameters.criteria[i].replaceAll("XXX", parameters.variable)))
              {CriteriaToUse = i}    
            }
          }
          else { console.log("SCREENING NOT PERFORMED")}
      }
      
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
      console.log(parameters)
      console.log(Questionnaire)
    },
    on_finish: function(data) {
      data.trial = "Questionnaire"
      data.QuestionnaireType = Questionnaire.QuestionnaireType
      data.AlertLimit = Questionnaire.AlertLimit
      data.title = Questionnaire.title
      data.shortTitle = Questionnaire.shortTitle
      data.pages = Questionnaire.pages
      console.log(Questionnaire)
      data.values = Questionnaire.values
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
      case 'CESAM':
        {
          console.log(data)
          console.log(Results)
          Results.AllResults['Nutrition'] = data.trials[0].response['cesam001']
          Results.AllResults['Multimorbidity'] = data.trials[0].response['cesam002']
          Results.AllResults['Communication'] = data.trials[0].response['cesam003'] + data.trials[0].response['cesam004']
          Results.AllResults['Cognition'] = data.trials[0].response['cesam005']
          var sumADL = data.trials[0].response['cesam007'] + 
                        data.trials[0].response['cesam008'] + 
                        data.trials[0].response['cesam009']
                        data.trials[0].response['cesam010']
                        data.trials[0].response['cesam011']
          switch ( sumADL ) {
            case 0 : { Results.AllResults['ADL'] = 0 }
            case 1 : { Results.AllResults['ADL'] = 0 }
            case 2 : { Results.AllResults['ADL'] = 1 }
            case 3 : { Results.AllResults['ADL'] = 1 }
            case 4 : { Results.AllResults['ADL'] = 2 }
            case 5 : { Results.AllResults['ADL'] = 2 }
          }
          var sumIADL = data.trials[0].response['cesam012'] + 
          data.trials[0].response['cesam013'] + 
          data.trials[0].response['cesam014']
          data.trials[0].response['cesam015']
          switch ( sumIADL ) {
            case 0 : { Results.AllResults['IADL'] = 0 }
            case 1 : { Results.AllResults['IADL'] = 1 }
            case 2 : { Results.AllResults['IADL'] = 2 }
            case 3 : { Results.AllResults['IADL'] = 2 }
            case 4 : { Results.AllResults['IADL'] = 2 }
          }
          Results.AllResults['Continence'] = data.trials[0].response['cesam016']
          if ( ( data.trials[0].response['cesam017'] == 2 ) && ( data.trials[0].response['cesam018'] == 1 ) ) {
            Results.AllResults['Mood'] = 0
          }
          if ( ( data.trials[0].response['cesam017'] == 0 ) && ( data.trials[0].response['cesam018'] == 1 ) ) {
            Results.AllResults['Mood'] = 1
          }
          if ( ( data.trials[0].response['cesam017'] == 1 ) || ( data.trials[0].response['cesam018'] == 0 ) ) {
            Results.AllResults['Mood'] = 2
          }
          // Mobility
          if ( ( data.trials[0].response['cesam019'] == 1 ) && ( data.trials[0].response['cesam020'] == 0 ) ) {
            Results.AllResults['Mobility'] = 0
          }
          if ( ( data.trials[0].response['cesam019'] == 0 ) && ( data.trials[0].response['cesam020'] == 0 ) ) {
            Results.AllResults['Mobility'] = 1
          }
          if ( data.trials[0].response['cesam020'] == 1 )  {
            Results.AllResults['Mobility'] = 2
          }
          Results.AllResults['Total Score'] = Results.AllResults['Nutrition'] + 
                                              Results.AllResults['Multimorbidity'] + 
                                              Results.AllResults['Communication'] + 
                                              Results.AllResults['Cognition'] + 
                                              Results.AllResults['ADL'] + 
                                              Results.AllResults['IADL'] + 
                                              Results.AllResults['Continence'] + 
                                              Results.AllResults['Mood'] + 
                                              Results.AllResults['Mobility']
          Results.AllResults['Accuracy'] = Results.AllResults['Total Score']                                           
          break;
        }
        case 'GDS':
          {
            var TotalScore = 0
            if ( data.trials[0].response.gds['gds01'] == 0 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds02'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds03'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds04'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds05'] == 0 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds06'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds07'] == 0 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds08'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds09'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds10'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds11'] == 0 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds12'] == 0 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds13'] == 0 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds14'] == 1 ) { TotalScore++ }
            if ( data.trials[0].response.gds['gds15'] == 1 ) { TotalScore++ }
            Results.AllResults['Total Score'] = TotalScore
            Results.AllResults['Accuracy'] = TotalScore
            break;
          }
          case 'PANASsf':
            {
              Results.AllResults['Positive'] = data.trials[0].response.panas['panas03']
                                              + data.trials[0].response.panas['panas05']
                                              + data.trials[0].response.panas['panas07']
                                              + data.trials[0].response.panas['panas08']
                                              + data.trials[0].response.panas['panas10']
              Results.AllResults['Negative'] = data.trials[0].response.panas['panas01']
                                              + data.trials[0].response.panas['panas02']
                                              + data.trials[0].response.panas['panas04']
                                              + data.trials[0].response.panas['panas06']
                                              + data.trials[0].response.panas['panas09']                                              
              break;                                              
            }
    }
    
  }
}

var if_JSON = {
  timeline: [trial02],
  conditional_function: function(){

    if ( typeof Questionnaire.survey_JSON !== 'undefined' )
    { return true }
    else { return false }
  }
}

var if_PAGES = {
  timeline: [trial],
  conditional_function: function(){

    if ( typeof Questionnaire.pages !== 'undefined' )
    { return true }
    else { return false }
  }
}


timeline.push(Welcome)
timeline.push(LoadQuestionnaire)


timeline.push(if_JSON)
timeline.push(if_PAGES)

timeline.push(CheckForAlert)
timeline.push(SpecialtyScoring)
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)