
var title = "ÉCHELLE DE SOLITUDE DE L\’UNIVERSITÉ DE LAVAL (ESUL)"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  pages: [{
    elements: [                
       {
          type: "description",
          text: [
            {
              text: "Indiquez la fréquence avec laquelle chacun des énoncés décrit bien ce que vous ressentez."
            }
          ]
        },
        {
          type: "radiogroup",
          name: "loneliness001",
          title: "Je n\’ai pas assez de compagnons (compagnes)",
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


var FR_UCLAloneliness = {}
FR_UCLAloneliness.title = "UCLA 3-Item Loneliness Scale",
FR_UCLAloneliness.shortTitle = "Loneliness"
FR_UCLAloneliness.survey_JSON = survey_JSON
FR_UCLAloneliness.description = ""
FR_UCLAloneliness.QuestionnaireType = 'radiogroup'
FR_UCLAloneliness.references = "references"
FR_UCLAloneliness.notes = ''