var title = "Berkman-Syme Social Network Index"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [


      {
        type: "radiogroup",
        name: "berksyme001",
        title: "In a typical week, how many times do you talk on the telephone with family, friends, or neighbours?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ "Less than once a week", "1 or 2 times a week", "3 or 4 times a week", "5 or more times a week" ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme002",
        title: "In a typical week, how many times do you talk on the telephone with family, friends, or neighbours?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ "Less than once a week", "1 or 2 times a week", "3 or 4 times a week", "5 or more times a week" ],
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
        choices: [ "Less than once a week", "1 or 2 times a week", "3 or 4 times a week", "5 or more times a week" ],
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
        choices: [ "Less than once a week", "1 or 2 times a week", "3 or 4 times a week", "5 or more times a week" ],
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
        choices: [ "Yes", "No" ],
        separateSpecialChoices: true,
        showClearButton: true
      },
    ],
    showQuestionNumbers: false,
    showCompletedPage: false
  };


var EN_berksymeJSON = {}
EN_berksymeJSON.title = "Which is the brand of your car?",
EN_berksymeJSON.shortTitle = "car"
EN_berksymeJSON.survey_JSON = survey_JSON
EN_berksymeJSON.description = ""
EN_berksymeJSON.QuestionnaireType = 'likert'
EN_berksymeJSON.references = "references"
EN_berksymeJSON.notes = ''

