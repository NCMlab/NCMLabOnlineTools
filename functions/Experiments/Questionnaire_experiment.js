var timeline = []
var Questionnaire = []
var CriteriaToUse = 0

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
    eval(text)
    console.log(parameters)
    console.log(Questionnaire)
  }
}

var trial02 = {
  type: jsPsychSurvey,
  survey_json:  function() 
    {
      return Questionnaire.survey_JSON
    }
}

var trial01 = {
  type: jsPsychSurvey,
  survey_json:  { 
    pages: [
      {
    elements: [
      {
        type: 'matrix',
        name: 'panas',
        title: "PANAS",
        alternateRows: false,
        isAllRowRequired: true,
        rows: [
          {value: 'panas01', text: "Interested"},
          {value: 'panas02', text: "Distressed"}
        ],
        columns: [
          {
            "value": 0,
            "text": 'Very slightly or not at all'
          },
          {
            "value": 1,
            "text": 'A little'
          },
          {
            "value": 2,
            "text": 'Moderately'
          },
          {
            "value": 3,
            "text": 'Quite a bit'
          },
          {
            "value": 4,
            "text": 'Extremely'
          },
        ],
    }
  ]
}]
  }}

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
      console.log(document.getElementById('jspsych-content'))
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


timeline.push(Welcome)
timeline.push(LoadQuestionnaire)

timeline.push(trial02)

timeline.push(CheckForAlert)
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)







