var EN_pages = [
    [
        {
            type: 'multi-choice',
            prompt: 'MOBILITY',
            options:
                ['I have no problems in walking about', 
                'I have slight problems in walking about',
                'I have moderate problems in walking about',
                'I have severe problems in walking about', 
                'I am unable to walk about'],
        },
        {
            type: 'multi-choice',
            prompt: 'SELF-CARE',
            options: [
                'I have no problems washing or dressing myself',
                'I have slight problems washing or dressing myself',
                'I have moderate problems washing or dressing myself',
                'I have severe problems washing or dressing myself',
                'I am unable to wash or dress myself'
            ],
        },
        {
            type: 'multi-choice',
            prompt: 'USUAL ACTIVITIES (e.g. work, study, housework, family or leisure activities)',
            options: [    
                'I have no problems doing my usual activities',
                'I have slight problems doing my usual activities',
                'I have moderate problems doing my usual activities',
                'I have severe problems doing my usual activities', 
                'I am unable to do my usual activities', 
            ],
        },
        {
            type: 'multi-choice',
            prompt: 'PAIN / DISCOMFORT',
            options: [
                'I have no pain or discomfort', 
                'I have slight pain or discomfort',
                'I have moderate pain or discomfort',
                'I have severe pain or discomfort', 
                'I have extreme pain or discomfort',
            ],
        },
        {
            type: 'multi-choice',
            prompt: 'ANXIETY / DEPRESSION',
            options: [
                'I am not anxious or depressed',
                'I am slightly anxious or depressed',
                'I am moderately anxious or depressed',
                'I am severely anxious or depressed', 
                'I am extremely anxious or depressed',
            ],
        }
    ]
]

var shortTitle = 'EQ5D'
var EN_eq5d = {}
EN_eq5d.title = 'Health Questionnaire'
EN_eq5d.shortTitle = shortTitle
EN_eq5d.description = "Under each heading, please tick the ONE box that best describes your health TODAY."
EN_eq5d.pages = EN_pages
EN_eq5d.QuestionnaireType = 'multi-choice'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
//EN_gds.values = [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1]

