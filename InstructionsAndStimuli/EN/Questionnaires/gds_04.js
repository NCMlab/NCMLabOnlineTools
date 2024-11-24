
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
                {prompt: 'Are you in good spirits most of the time?', name: 'gds005'},
                {prompt: 'Are you afraid that something bad is going to happen to you?', name: 'gds006'},
                {prompt: 'Do you fell happy most of the time?', name: 'gds007'},
                {prompt: 'Do you often feel helpless?', name: 'gds008'},
                {prompt: 'Do you prefer to stay home, rather than going out and doing things?', name: 'gds009'},
                {prompt: 'Do you feel that you have more problems with memory than most?', name: 'gds010'},
                {prompt: 'Do you think is it wonderful to be aline now?', name: 'gds011'},
                {prompt: 'Do you feel worthless the way you are now?', name: 'gds012'},
                {prompt: 'Do you feel full of energy?', name: 'gds013'},
                {prompt: 'Do you feel that your situation is hopeless?', name: 'gds014'},
                {prompt: 'Do you think that most people are better off than you are?', name: 'gds015'},
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


