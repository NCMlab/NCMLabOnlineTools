
var title = "ÉCHELLE DE SOLITUDE DE L’UNIVERSITÉ DE LAVAL (ESUL)"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  pages: [{
    elements: [                
      {
        type: "html",
        name: "introduction",
        html: "Indiquez la fréquence avec laquelle chacun des énoncés décrit bien ce que vous ressentez. Encerclez un chiffre pour chaque énoncé."
       },
        {
          type: "radiogroup",
          name: "loneliness001",
          title: "Je n’ai pas assez de compagnons (compagnes)",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "Jamais" }, 
            { value: 2, text: "Rarement"}, 
            { value: 3, text: "Quelquefois"},
            { value: 4, text: "Souvent"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness002",
          title: "Je me sens exclu(e)",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "Jamais" }, 
            { value: 2, text: "Rarement"}, 
            { value: 3, text: "Quelquefois"},
            { value: 4, text: "Souvent"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness003",
          title: "Je me sens isolé(e) des autres",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "Jamais" }, 
            { value: 2, text: "Rarement"}, 
            { value: 3, text: "Quelquefois"},
            { value: 4, text: "Souvent"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
      ],
    }]
  };


var FR_UCLAlonelinessJSON = {}
FR_UCLAlonelinessJSON.title = "UCLA 3-Item Loneliness Scale",
FR_UCLAlonelinessJSON.shortTitle = "Loneliness"
FR_UCLAlonelinessJSON.survey_JSON = survey_JSON
FR_UCLAlonelinessJSON.description = ""
FR_UCLAlonelinessJSON.QuestionnaireType = 'radiogroup'
FR_UCLAlonelinessJSON.references = "references"
FR_UCLAlonelinessJSON.notes = ''