var title = "Berkman-Syme Social Network Index"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  pages: [{
    elements: [


      {
        type: "radiogroup",
        name: "berksyme001",
        title: "In a typical week, how many times do you talk on the telephone with family, friends, or neighbours?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Less than once a week" }, 
          { value: 1, text: "1 or 2 times a week" }, 
          { value: 2, text: "3 or 4 times a week" }, 
          { value: 3, text: "5 or more times a week" } 
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme002",
        title: "How often do you get together with friends or relatives?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Less than once a week" }, 
          { value: 1, text: "1 or 2 times a week" }, 
          { value: 2, text: "3 or 4 times a week" }, 
          { value: 3, text: "5 or more times a week" } 
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme003",
        title: "How often do you attend church or religious services?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Less than once a week" }, 
          { value: 1, text: "1 or 2 times a week" }, 
          { value: 2, text: "3 or 4 times a week" }, 
          { value: 3, text: "5 or more times a week" } 
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme004",
        title: "How often do you attend meetings of the clubs or organizations you belong to?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Less than once a week" }, 
          { value: 1, text: "1 or 2 times a week" }, 
          { value: 2, text: "3 or 4 times a week" }, 
          { value: 3, text: "5 or more times a week" } 
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme005",
        title: "Are you married or live together with someone in a partnership?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [
          { value: 1, text: "Yes" },
          { value: 0, text: "No" }
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
    ],
  }]
};


var EN_berksymeJSON = {}
EN_berksymeJSON.title = "Berkman-Syme Social Network Index",
EN_berksymeJSON.shortTitle = "Social"
EN_berksymeJSON.survey_JSON = survey_JSON
EN_berksymeJSON.description = ""
EN_berksymeJSON.QuestionnaireType = 'radiogroup'
EN_berksymeJSON.references = "references"
EN_berksymeJSON.notes = ''

