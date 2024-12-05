var timeline = []
var Questionnaire = []
var CriteriaToUse = 0
var converter = new showdown.Converter();

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
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
    console.log(data)
    console.log(Questionnaire)
    data.trial = "Questionnaire"
    if ( typeof Questionnaire.survey_JSON.elements !== 'undefined' )
    { 
      data.rows = Questionnaire.survey_JSON.elements[0].rows 
      data.cols = Questionnaire.survey_JSON.elements[0].cols
    }
    else { 
      data.rows = []
      data.cols = []
    }
    if ( typeof Questionnaire.survey_JSON.pages !== 'undefined' )
    { data.pages = Questionnaire.survey_JSON.pages }
    data.QuestionnaireType = Questionnaire.QuestionnaireType
    data.AlertLimit = Questionnaire.AlertLimit
    data.title = Questionnaire.title
    data.shortTitle = Questionnaire.shortTitle
    
    console.log(Questionnaire)
    data.values = Questionnaire.values
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
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)