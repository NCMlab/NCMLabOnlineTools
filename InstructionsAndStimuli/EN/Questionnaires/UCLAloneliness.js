
var title = "UCLA 3-item Loneliness Scale"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  Instructions: "When answering the questions, you could take account of the following:"+
      "<ul>"+  
      "<li>There are no right or wrong answers"+
      "<li>We would like you to be completely honest"+
      "<li>In answering the questions it is best to think of your life as it generally is now (we all have some good or bad days)"+
      "</ul>",
  pages: [{
    elements: [                
      /*{
        type: "html",
        name: "introduction",
        html: "When answering the questions, you could take account of the following:"+
        "<ul><li>There are no right or wrong answers</li>"+
        "<li>We would like you to be completely honest</li>"+
        "<li>In answering the questions it is best to think of your life as it generally is now (we all have some good or bad days)</li>"+
        "</b></p>"
       },*/
        {
          type: "radiogroup",
          name: "loneliness001",
          title: "How often do you feel that you lack companionship?",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "Hardly ever" }, 
            { value: 2, text: "Some of the time"}, 
            { value: 3, text: "Often"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness002",
          title: "How often do you feel left out?",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "Hardly ever" }, 
            { value: 2, text: "Some of the time"}, 
            { value: 3, text: "Often"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness003",
          title: "How often do you feel isolated from others?",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "Hardly ever" }, 
            { value: 2, text: "Some of the time"}, 
            { value: 3, text: "Often"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
      ],
    }]
  };


var EN_UCLAloneliness = {}
EN_UCLAloneliness.title = "UCLA 3-Item Loneliness Scale",
EN_UCLAloneliness.shortTitle = "Loneliness"
EN_UCLAloneliness.survey_JSON = survey_JSON
EN_UCLAloneliness.description = ""
EN_UCLAloneliness.QuestionnaireType = 'radiogroup'
EN_UCLAloneliness.references = "references"
EN_UCLAloneliness.notes = ''

