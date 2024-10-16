var timeline = []
var Questionnaire = []
var CriteriaToUse = 0

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
    eval(text)
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


page3 = [{
  title: "Example of conditional questions",
  elements: [{
    name: "vegetables-score",
    title: "I like vegetables.",
    description: "Choose 'neutral' to skip the conditional question, and any other option to see a conditional question.",
    type: "radiogroup",
    choices: [
      { value: 1, text: "Strongly Disagree" },
      { value: 2, text: "Disagree" },
      { value: 3, text: "Neutral" },
      { value: 4, text: "Agree" },
      { value: 5, text: "Strongly Agree" }
    ],
    isRequired: true
  }]
}, {
  elements: [{
    name: "vegetables-like",
    title: "You like vegetables! Which one is your favorite?",
    description: "(You can go back and change your earlier answer to see the other conditional questions)",
    type: "comment",
    visibleIf: "{vegetables-score} >= 4"
  }, {
    name: "vegetables-eat",
    title: "On a scale of zero to ten, how likely are you to eat broccoli today?",
    type: "rating",
    rateMin: 0,
    rateMax: 10
  }],
  visibleIf: "{vegetables-score} >= 4"
}, {
  elements: [{
    name: "vegetables-dislike",
    description: "(You can go back and change your earlier answer to see the other conditional questions)",
    title: "You don't like vegetables! Please explain why.",
    type: "comment"
  }],
  visibleIf: "{vegetables-score} =< 2"
}]

const veg = {
  pages: page3
}
const vegetables_trial = {
  type: jsPsychSurvey,
  survey_json: veg
};



timeline.push(vegetables_trial)
timeline.push(Welcome)
timeline.push(LoadQuestionnaire)

timeline.push(trial)

timeline.push(CheckForAlert)
timeline.push(MentalHealthCheck)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)







