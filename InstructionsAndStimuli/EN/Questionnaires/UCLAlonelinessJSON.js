const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [


      {
        type: "radiogroup",
        name: "loneliness001",
        title: "How often do you feel that you lack companionship?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ "Hardly ever", "Some of the time", "Often" ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      
    ],
    showQuestionNumbers: false,
    showCompletedPage: false
  };


var EN_UCLAlonelinessJSON = {}
EN_UCLAlonelinessJSON.title = "Which is the brand of your car?",
EN_UCLAlonelinessJSON.shortTitle = "car"
EN_UCLAlonelinessJSON.survey_JSON = survey_JSON
EN_UCLAlonelinessJSON.description = ""
EN_UCLAlonelinessJSON.QuestionnaireType = 'likert'
EN_UCLAlonelinessJSON.references = "references"
EN_UCLAlonelinessJSON.notes = ''

