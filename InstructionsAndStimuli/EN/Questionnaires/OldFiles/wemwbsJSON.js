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
        html: "Below are some statements about feelings and thoughts. Please tick the box that best describes your experience over the last 2 weeks."
       },
    {
        type: 'radiogroup',
        title: 'I\'ve been feeling optimistic about the future:',
        name: 'wemwbs001',
        colCount: 0,
        choices:
            [
              { value: 1, text: 'None of the time' }, 
              { value: 2, text: 'Rarely' },
              { value: 3, text: 'Some of the time' },
              { value: 4, text: 'Often' }, 
              { value: 5, text: 'All of the time'}
            ],
    },
    {
        type: 'radiogroup',
        title: 'I\'ve been feeling useful:',
        name: 'wemwbs002',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been feeling relaxed:',
        name: 'wemwbs003',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },

      {
        type: 'radiogroup',
        title: 'I\'ve been feeling interested in other people:',
        name: 'wemwbs004',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve had energy to spare:',
        name: 'wemwbs005',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been dealing with problems well:',
        name: 'wemwbs006',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been thinking clearly:',
        name: 'wemwbs007',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been feeling good about myself:',
        name: 'wemwbs008',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been feeling close to other people:',
        name: 'wemwbs009',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been feeling confident:',
        name: 'wemwbs010',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },

      {
        type: 'radiogroup',
        title: 'I\'ve been able to make up my own mind about things:',
        name: 'wemwbs011',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been feeling loved:',
        name: 'wemwbs012',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been interested in new things:',
        name: 'wemwbs013',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'I\'ve been feeling cheerful:',
        name: 'wemwbs014',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'None of the time' }, 
          { value: 2, text: 'Rarely' },
          { value: 3, text: 'Some of the time' },
          { value: 4, text: 'Often' }, 
          { value: 5, text: 'All of the time'}
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
