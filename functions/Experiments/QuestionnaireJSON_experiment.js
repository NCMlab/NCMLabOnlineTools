var timeline = []
var Questionnaire = []
var CriteriaToUse = 0

var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    
    var parameters = EN_panasJSON
    console.log(parameters)
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.questionnaire[CriteriaToUse]
    eval(text)
    console.log(text)
    console.log(Questionnaire)
  }
}

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
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                  {value: 'panas01', text: "Interested"},
                  {value: 'panas02', text: "Distressed"},
                  {value: 'panas03', text: "Interested02"},
                  {value: 'panas04', text: "Distressed"},
                  {value: 'panas05', text: "Interested"},
                  {value: 'panas06', text: "Distressed"},
                  {value: 'panas07', text: "Interested"},
                  {value: 'panas08', text: "Distressed"},
                  {value: 'panas09', text: "Interested"},
                  {value: 'panas10', text: "Distressed"}

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







