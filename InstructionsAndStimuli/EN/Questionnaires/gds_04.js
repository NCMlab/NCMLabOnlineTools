
var EN_pages_04 = [
    [
        {
            type: 'likert-table',
            prompt: ' ',
            accuracy: [1,1,1,1],
            statements: [
                {prompt: 'Are you basically satisfied with your life?', name: 'gds001'},
                {prompt: 'Have you dropped many of your activities and interests?', name: 'gds002'},
                {prompt: 'Do you feel that your life is empty?', name: 'gds003'},
                {prompt: 'Do you often get bored?', name: 'gds004'},
                ],
            options: ['Yes', 'No'],
            required: true
        }
    ]
]

var EN_gds_04 = {}
EN_gds_04.title = 'Geriatric Depression Scale'
EN_gds_04.shortTitle = 'GDS'
EN_gds_04.description = "Choose the best answer for how you felt over the past week."
EN_gds_04.pages = EN_pages_04
EN_gds_04.QuestionnaireType = 'YesNoLikertTable'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
EN_gds_04.values = [0,0,0,0]


