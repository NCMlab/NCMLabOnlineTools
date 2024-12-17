var title = "EQ-5D"
var shortTitle = "EQ-5D"
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
        title: 'MOBILITY',
        name: 'mobility',
        choices:
        [
            { value: 1, text: 'I have no problems in walking about'}, 
            { value: 2, text: 'I have slight problems in walking about'},
            { value: 3, text: 'I have moderate problems in walking about'},
            { value: 4, text: 'I have severe problems in walking about'}, 
            { value: 5, text: 'I am unable to walk about'}
        ],
    },
    {
        type: 'radiogroup',
        title: 'SELF-CARE',
        name: 'selfcare',
        choices: 
        [
            { value: 1, text: 'I have no problems washing or dressing myself' },
            { value: 2, text: 'I have slight problems washing or dressing myself' },
            { value: 3, text: 'I have moderate problems washing or dressing myself' },
            { value: 4, text: 'I have severe problems washing or dressing myself' },
            { value: 5, text: 'I am unable to wash or dress myself' }
        ],
    },
    {
        type: 'radiogroup',
        title: 'USUAL ACTIVITIES (e.g. work, study, housework, family or leisure activities)',
        name: 'usualactivities',
        choices:     
        [   
            { value: 1, text: 'I have no problems doing my usual activities' },
            { value: 2, text: 'I have slight problems doing my usual activities' },
            { value: 3, text: 'I have moderate problems doing my usual activities' },
            { value: 4, text: 'I have severe problems doing my usual activities' }, 
            { value: 5, text: 'I am unable to do my usual activities' }, 
        ],
    },
    {
        type: 'radiogroup',
        title: 'PAIN / DISCOMFORT',
        name: 'paindiscomfort',
        choices: 
        [
            { value: 1, text: 'I have no pain or discomfort' }, 
            { value: 2, text: 'I have slight pain or discomfort' },
            { value: 3, text: 'I have moderate pain or discomfort' },
            { value: 4, text: 'I have severe pain or discomfort' }, 
            { value: 5, text: 'I have extreme pain or discomfort' },
        ],
    },
    {
        type: 'radiogroup',
        title: 'ANXIETY / DEPRESSION',
        name: 'anxietydepression',
        choices: 
        [
            { value: 1, text: 'I am not anxious or depressed' },
            { value: 2, text: 'I am slightly anxious or depressed' },
            { value: 3, text: 'I am moderately anxious or depressed' },
            { value: 4, text: 'I am severely anxious or depressed' }, 
            { value: 5, text: 'I am extremely anxious or depressed' },
        ],
    }

    ],
    }]
  };


var EN_eq5dJSON = {}
EN_eq5dJSON.title = title,
EN_eq5dJSON.shortTitle = shortTitle,
EN_eq5dJSON.survey_JSON = survey_JSON
EN_eq5dJSON.description = ""
EN_eq5dJSON.QuestionnaireType = 'radiogroup'
EN_eq5dJSON.references = "references"
EN_eq5dJSON.notes = ''

add('EN_eq5dJSON', function(){ Questionnaire = EN_eq5dJSON});