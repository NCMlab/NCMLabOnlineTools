var title = "WEMWBS"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "html",
        name: "introduction",
        html: "Under each heading, please select the box that best describes your health TODAY."
       },
    {
        type: 'radiogroup',
        title: 'I\'ve been feeling optimistic about the future:',
        name: 'wemwbs001',
        colCount: 0,
        choices:
            [
              { value: 0, text: 'None of the time' }, 
              { value: 1, text: 'Rarely' },
              { value: 2, text: 'Some of the time' },
              { value: 3, text: 'Often' }, 
              { value: 4, text: 'All of the time'}
            ],
    },
    {
        type: 'radiogroup',
        title: 'I\'ve been feeling useful:',
        name: 'wemwbs002',
        colCount: 0,
        choices:
        [
          { value: 0, text: 'None of the time' }, 
          { value: 1, text: 'Rarely' },
          { value: 2, text: 'Some of the time' },
          { value: 3, text: 'Often' }, 
          { value: 4, text: 'All of the time'}
        ],    
      },
    ],
  }]
}

var EN_wemwbsJSON = {}
EN_wemwbsJSON.title = title,
EN_wemwbsJSON.shortTitle = shortTitle,
EN_wemwbsJSON.survey_JSON = survey_JSON
EN_wemwbsJSON.description = ""
EN_wemwbsJSON.QuestionnaireType = 'radiogroup'
EN_wemwbsJSON.references = "references"
EN_wemwbsJSON.notes = ''
