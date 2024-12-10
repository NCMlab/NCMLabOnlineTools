var title = "PAES"
var shortTitle = "PAES"
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
    elements: [
    {
        type: "html",
        name: "introduction",
        html: "Please rate how you feel at the moment about the activity (music and movement class) you have been doing."
       },
    {
        type: 'radiogroup',
        name: 'paes001',
        title: 'I enjoy it',
        colCount: 0,
        choices:
            ['Strongly disagree', 
            'Disagree',
            'Neither agree nor disagree',
            'Agree', 
            'Strongly agree'
        ],
    },
    {
        type: 'radiogroup',
        name: 'paes002',
        title: 'I find it pleasurable',
        colCount: 0,
        choices:
            ['Strongly disagree', 
            'Disagree',
            'Neither agree nor disagree',
            'Agree', 
            'Strongly agree'
        ],
    },
    {
        type: 'radiogroup',
        title: 'It is very pleasant',
        name: 'paes003',
        colCount: 0,
        choices:
            ['Strongly disagree', 
            'Disagree',
            'Neither agree nor disagree',
            'Agree', 
            'Strongly agree'
        ],
    },
    {
        type: 'radiogroup',
        title: 'It feels good',
        name: 'paes004',
        colCount: 0,
        choices:
            ['Strongly disagree', 
            'Disagree',
            'Neither agree nor disagree',
            'Agree', 
            'Strongly agree'
        ],
    },
    ],
    showQuestionNumbers: false,
    showCompletedPage: false
  };


var EN_paesJSON = {}
EN_paesJSON.title = title,
EN_paesJSON.shortTitle = shortTitle,
EN_paesJSON.survey_JSON = survey_JSON
EN_paesJSON.description = ""
EN_paesJSON.QuestionnaireType = 'radiogroup'
EN_paesJSON.references = "references"
EN_paesJSON.notes = ''
