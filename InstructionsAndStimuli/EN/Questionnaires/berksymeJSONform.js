var title = "Berkman-Syme Social Network Index"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  Instructions: "The following questions are about your social interactions. Please read the following questions and select the response that most closely describes your current situation.",
  pages: [{
    elements: [
      {
        type: "radiogroup",
        name: "berksyme001",
        title: "Which of these statements best represents your current relationship status?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Single" }, 
          { value: 1, text: "Married" }, 
          { value: 2, text: "In a civil union" }, 
          { value: 3, text: "Divorced" }, 
          { value: 4, text: "Widowed"}, 
          { value: 5, text: "Seperated" }, 
          { value: 6, text: "I prefer not to answer"} 
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme002",
        title: "In the past two weeks, how often have you communicated with family (e.g., parent, partner, child, cousin), friends, or neighbors (e.g., phone calls, video calls, text messages, social media)?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Less than once a week" }, 
          { value: 1, text: "1 to 2 times a week" }, 
          { value: 2, text: "3 to 4 times a week" }, 
          { value: 3, text: "5 or more times a week" }, 
          { value: 4, text: "I prefer not to answer"}
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme003",
        title: "In the past two weeks, how often have you met up with or spent time with friends, family or relatives in person?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Less than once a week" }, 
          { value: 1, text: "1 to 2 times a week" }, 
          { value: 2, text: "3 to 4 times a week" }, 
          { value: 3, text: "5 or more times a week" }, 
          { value: 4, text: "I prefer not to answer"}
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "panel",
        name: "berksyme004_panel",
        title: "In the past two weeks, how often have you attended religious, spiritual, or philosophical activities (e.g., services, meditation sessions, Mass, parish activities, prayer groups.)?",
        elements: [
          { 
            type: "radiogroup",
            name: "berksyme004_inperson",
            title: "In-person",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Never" }, 
              { value: 1, text: "Once" }, 
              { value: 2, text: "Twice" }, 
              { value: 3, text: "Three or more times" },
              { value: 4, text: "I prefer not to answer"}
            ]
          },
          { type: "radiogroup",
            name: "berksyme004_online",
            title: "Online",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Never" }, 
              { value: 1, text: "Once" }, 
              { value: 2, text: "Twice" }, 
              { value: 3, text: "Three or more times" },
              { value: 4, text: "I prefer not to answer"}
            ]
          }
        ]
      },
      {
        type: "panel",
        name: "berksyme005_panel",
        title: "In the past two weeks, how often have you attended events or activities of any groups, clubs or organizations you belong to (e.g., hobby or sports groups, community activities, forums, clubs)?",
        elements: [
          { 
            type: "radiogroup",
            name: "berksyme005_inperson",
            title: "In-person",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Never or less than once a week" }, 
              { value: 1, text: "1 to 2 times a week" }, 
              { value: 2, text: "3 to 4 times a week" }, 
              { value: 3, text: "5 or more times a week" },
              { value: 4, text: "I prefer not to answer"}
            ]
          },
          { type: "radiogroup",
            name: "berksyme005_online",
            title: "Online",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Never or less than once a week" }, 
              { value: 1, text: "1 to 2 times a week" }, 
              { value: 2, text: "3 to 4 times a week" }, 
              { value: 3, text: "5 or more times a week" },
              { value: 4, text: "I prefer not to answer"}
            ]
          }
        ]
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

