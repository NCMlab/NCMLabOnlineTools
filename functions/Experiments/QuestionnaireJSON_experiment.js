var timeline = []
var Questionnaire = []
var CriteriaToUse = 0

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
    eval(text)
    console.log(text)
    console.log(Questionnaire)
  }
}
const trial03 = {
    type: jsPsychSurvey,
    survey_json: {
      showQuestionNumbers: false,
      elements:
        [
          {
            type: 'radiogroup',
            title: "Which of the following do you like the most?", 
            name: 'vegetablesLike', 
            choices: ['Tomato', 'Cucumber', 'Eggplant', 'Corn', 'Peas', 'Broccoli']
          }, 
          {
            type: 'checkbox',
            title: "Which of the following do you like?", 
            name: 'fruitLike', 
            description: "You can select as many as you want.",
            choices: ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Kiwi', 'Mango'], 
            showOtherItem: true,
            showSelectAllItem: true,
            showNoneItem: true,
            required: true,
          },
      ]
    },
  };
var trial02 = {
  type: jsPsychSurvey,
  survey_json:  { 
    showQuestionNumbers: false,
    
    elements: 
        [
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
    }
}

var trial = {
    type: jsPsychSurvey,
    survey_json:  { 
        pages: Questionnaire.pages
        }
    }
 

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


//timeline.push(Welcome)
timeline.push(LoadQuestionnaire)

timeline.push(trial02)

//timeline.push(CheckForAlert)
//timeline.push(MentalHealthCheck)
//timeline.push(Notes)
timeline.push(ThankYou)
//timeline.push(SendData)







