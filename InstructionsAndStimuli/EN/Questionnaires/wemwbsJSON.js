var title = "WEMWBS"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
    elements: [
    {
        type: "html",
        name: "introduction",
        html: "Under each heading, please select the box that best describes your health TODAY."
       },
    {
        type: 'radiogroup',
        title: 'I\'ve been feeling optimistic about the future:',
        colCount: 0,
        choices:
            ['None of the time', 
            'Rarely',
            'Some of the time',
            'Often', 
            'All of the time'],
    },
    {
        type: 'radiogroup',
        title: 'I\'ve been feeling useful:',
        colCount: 0,
        choices:
            ['None of the time', 
            'Rarely',
            'Some of the time',
            'Often', 
            'All of the time'],
    },

    ],
    showQuestionNumbers: false,
    showCompletedPage: false
  };


var EN_wemwbsJSON = {}
EN_wemwbsJSON.title = title,
EN_wemwbsJSON.shortTitle = shortTitle,
EN_wemwbsJSON.survey_JSON = survey_JSON
EN_wemwbsJSON.description = ""
EN_wemwbsJSON.QuestionnaireType = 'likert'
EN_wemwbsJSON.references = "references"
EN_wemwbsJSON.notes = ''
