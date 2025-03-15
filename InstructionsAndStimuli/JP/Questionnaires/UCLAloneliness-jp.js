
var title = "UCLA 3-item Loneliness Scale"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  pages: [{
    elements: [                
      {
        type: "html",
        name: "introduction",
        html: "それぞれの項目について、あなたはどのくらいの頻度で感じているか お答えください"
       },
        {
          type: "radiogroup",
          name: "loneliness001",
          title: "自分には人との付き合いがないと感じることがありますか",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "ほとんどない" }, 
            { value: 2, text: "時々ある"}, 
            { value: 3, text: "常にある"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness002",
          title: "自分は取り残されていると感じることがありますか",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "ほとんどない" }, 
            { value: 2, text: "時々ある"}, 
            { value: 3, text: "常にある"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness003",
          title: "自分は他の人たちから孤立していると感じることはありますか",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "ほとんどない" }, 
            { value: 2, text: "時々ある"}, 
            { value: 3, text: "常にある"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
      ],
    }]
  };


var EN_UCLAlonelinessJSON = {}
EN_UCLAlonelinessJSON.title = "UCLA 3-Item Loneliness Scale",
EN_UCLAlonelinessJSON.shortTitle = "Loneliness"
EN_UCLAlonelinessJSON.survey_JSON = survey_JSON
EN_UCLAlonelinessJSON.description = ""
EN_UCLAlonelinessJSON.QuestionnaireType = 'radiogroup'
EN_UCLAlonelinessJSON.references = "references"
EN_UCLAlonelinessJSON.notes = ''

