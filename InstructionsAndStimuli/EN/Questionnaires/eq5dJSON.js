var title = "EQ-5D"
var shortTitle = "EQ-5D"
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
        title: 'MOBILITY',
        choices:
            ['I have no problems in walking about', 
            'I have slight problems in walking about',
            'I have moderate problems in walking about',
            'I have severe problems in walking about', 
            'I am unable to walk about'],
    },
    {
        type: 'radiogroup',
        title: 'SELF-CARE',
        choices: [
            'I have no problems washing or dressing myself',
            'I have slight problems washing or dressing myself',
            'I have moderate problems washing or dressing myself',
            'I have severe problems washing or dressing myself',
            'I am unable to wash or dress myself'
        ],
    },
    {
        type: 'radiogroup',
        title: 'USUAL ACTIVITIES (e.g. work, study, housework, family or leisure activities)',
        choices: [    
            'I have no problems doing my usual activities',
            'I have slight problems doing my usual activities',
            'I have moderate problems doing my usual activities',
            'I have severe problems doing my usual activities', 
            'I am unable to do my usual activities', 
        ],
    },
    {
        type: 'radiogroup',
        title: 'PAIN / DISCOMFORT',
        choices: [
            'I have no pain or discomfort', 
            'I have slight pain or discomfort',
            'I have moderate pain or discomfort',
            'I have severe pain or discomfort', 
            'I have extreme pain or discomfort',
        ],
    },
    {
        type: 'radiogroup',
        title: 'ANXIETY / DEPRESSION',
        choices: [
            'I am not anxious or depressed',
            'I am slightly anxious or depressed',
            'I am moderately anxious or depressed',
            'I am severely anxious or depressed', 
            'I am extremely anxious or depressed',
        ],
    }

    ],
    showQuestionNumbers: false,
    showCompletedPage: false
  };


var EN_eq5dJSON = {}
EN_eq5dJSON.title = title,
EN_eq5dJSON.shortTitle = shortTitle,
EN_eq5dJSON.survey_JSON = survey_JSON
EN_eq5dJSON.description = ""
EN_eq5dJSON.QuestionnaireType = 'likert'
EN_eq5dJSON.references = "references"
EN_eq5dJSON.notes = ''
