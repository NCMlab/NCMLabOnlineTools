var timeline = []

var trial = {
    type: jsPsychSurvey,
    pages: function() { 

      console.log(parameters)
      // Are there more than one criteria?
      // If the value does not meet any of the criteria, use the first option
      var CriteriaToUse = 0
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
      console.log(parameters.questionnaire[CriteriaToUse])
      text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
      console.log(text)
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
    }
};

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    jsPsych.finishTrial(Results)    
  }
}

var CheckForAlert = {
  type: jsPsychCallFunction,
  func: function() {
    
    var data = jsPsych.data.get().filter({trial: 'Questionnaire'});
    console.log(data.trials[0])
    Results = Questionnaire_Scoring(data)
    console.log(data)
    console.log(Results)
  }
}
timeline.push(Welcome)
timeline.push(trial)
timeline.push(CheckForAlert)
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)







