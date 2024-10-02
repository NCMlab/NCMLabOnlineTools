var EN_pages = [
    [
        {
            type: 'likert-table',
            prompt: 'MOBILITY',
            accuracy: [0,0,0,0,0],
            statements: [
                {prompt: 'I have no problems in walking about', name: 'eq5d001'},
                {prompt: 'I have slight problems in walking about', name: 'eq5d001'},
                {prompt: 'I have moderate problems in walking about', name: 'eq5d001'},
                {prompt: 'I have severe problems in walking about', name: 'eq5d001'},
                {prompt: 'I am unable to walk about', name: 'eq5d001'}
            ],
            options: ['Yes'],
        },
        {
            type: 'likert-table',
            prompt: 'SELF-CARE',
            accuracy: [0,0,0,0,0],
            statements: [
                {prompt: 'I have no problems washing or dressing myself', name: 'eq5d002'},
                {prompt: 'I have slight problems washing or dressing myself', name: 'eq5d002'},
                {prompt: 'I have moderate problems washing or dressing myself', name: 'eq5d002'},
                {prompt: 'I have severe problems washing or dressing myself', name: 'eq5d002'},
                {prompt: 'I am unable to wash or dress myself', name: 'eq5d002'},
            ],
            options: ['Yes'],
        },
        {
            type: 'likert-table',
            prompt: 'USUAL ACTIVITIES (e.g. work, study, housework, family or leisure activities)',
            accuracy: [0,0,0,0,0],
            statements: [    
                {prompt: 'I have no problems doing my usual activities', name: 'eq5d003'},
                {prompt: 'I have slight problems doing my usual activities', name: 'eq5d003'},
                {prompt: 'I have moderate problems doing my usual activities', name: 'eq5d003'},
                {prompt: 'I have severe problems doing my usual activities', name: 'eq5d003'},
                {prompt: 'I am unable to do my usual activities', name: 'eq5d003'},
            ],
            options: ['Yes'],
        },
        {
            type: 'likert-table',
            prompt: 'PAIN / DISCOMFORT',
            accuracy: [0,0,0,0,0],
            statements: [
                {prompt: 'I have no pain or discomfort', name: 'eq5d004'},
                {prompt: 'I have slight pain or discomfort', name: 'eq5d004'},
                {prompt: 'I have moderate pain or discomfort', name: 'eq5d004'},
                {prompt: 'I have severe pain or discomfort', name: 'eq5d004'},
                {prompt: 'I have extreme pain or discomfort', name: 'eq5d004'},
            ],
            options: ['Yes'],
        },
        {
            type: 'likert-table',
            prompt: 'ANXIETY / DEPRESSION',
            accuracy: [0,0,0,0,0],
            statements: [
                {prompt: 'I am not anxious or depressed', name: 'eq5d021'},
                {prompt: 'I am slightly anxious or depressed', name: 'eq5d022'},
                {prompt: 'I am moderately anxious or depressed', name: 'eq5d023'},
                {prompt: 'I am severely anxious or depressed', name: 'eq5d024'},
                {prompt: 'I am extremely anxious or depressed', name: 'eq5d025'},
            ],
            options: ['Yes'],
        }
    ]
]

var shortTitle = 'EQ5D'
var EN_eq5d = {}
EN_eq5d.title = 'Health Questionnaire'
EN_eq5d.shortTitle = shortTitle
EN_eq5d.description = "Under each heading, please tick the ONE box that best describes your health TODAY."
EN_eq5d.pages = EN_pages
EN_eq5d.QuestionnaireType = 'YesNoLikertTable'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
//EN_gds.values = [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1]

