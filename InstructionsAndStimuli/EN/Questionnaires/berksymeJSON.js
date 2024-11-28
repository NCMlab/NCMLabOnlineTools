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


var EN_UCLAlonelinessJSON = {}
EN_UCLAlonelinessJSON.title = "Which is the brand of your car?",
EN_UCLAlonelinessJSON.shortTitle = "car"
EN_UCLAlonelinessJSON.survey_JSON = survey_JSON
EN_UCLAlonelinessJSON.description = ""
EN_UCLAlonelinessJSON.QuestionnaireType = 'likert'
EN_UCLAlonelinessJSON.references = "references"
EN_UCLAlonelinessJSON.notes = ''

