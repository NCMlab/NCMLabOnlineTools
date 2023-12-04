var pages = [
        [
            {
                type: 'likert-table',
                prompt: ' ',
                accuracy: [0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0],
                statements: [
                    {prompt: 'Are you basically satisfied with your life?', name: 'gds001'},
                    {prompt: 'Have you dropped many of your activities and interests?', name: 'gds002'},
                    {prompt: 'Do you feel that your life is empty?', name: 'gds003'},
                    {prompt: 'Do you often get bored?', name: 'gds004'},
                    {prompt: 'Are you hopeful about the future?', name: 'gds005'},
                    {prompt: 'Are you bothered by thoughts you can t get out of your head?', name: 'gds006'},
                    {prompt: 'Are you in good spirits most of the time?', name: 'gds007'},
                    {prompt: 'Are you afraid that something bad is going to happen to you?', name: 'gds008'},
                    {prompt: 'Do you feel happy most of the time?', name: 'gds009'},
                    {prompt: 'Do you often feel helpless?', name: 'gds010'},
                    {prompt: 'Do you often get restless and fidgety?', name: 'gds011'},
                    {prompt: 'Do you prefer to stay at home, rather than going out and doing new things?', name: 'gds012'},
                    {prompt: 'Do you frequently worry about the future?', name: 'gds013'},
                    {prompt: 'Do you feel you have more problems with memory than most?', name: 'gds014'},
                    {prompt: 'Do you think it is wonderful to be alive now?', name: 'gds015'},
                    {prompt: 'Do you often feel downhearted and blue?', name: 'gds016'},
                    {prompt: 'Do you feel pretty worthless the way you are now?', name: 'gds017'},
                    {prompt: 'Do you worry a lot about the past?', name: 'gds018'},
                    {prompt: 'Do you find life very exciting?', name: 'gds019'},
                    {prompt: 'Is it hard for you to get started on new projects?', name: 'gds020'},
                    {prompt: 'Do you feel full of energy?', name: 'gds021'},
                    {prompt: 'Do you feel that your situation is hopeless?', name: 'gds022'},
                    {prompt: 'Do you think that most people are better off than you are?', name: 'gds023'},
                    {prompt: 'Do you frequently get upset over little things?', name: 'gds024'},
                    {prompt: 'Do you frequently feel like crying?', name: 'gds025'},
                    {prompt: 'Do you have trouble concentrating?', name: 'gds026'},
                    {prompt: 'Do you enjoy getting up in the morning?', name: 'gds027'},
                    {prompt: 'Do you prefer to avoid social gatherings?', name: 'gds028'},
                    {prompt: 'Is it easy for you to make decisions?', name: 'gds029'},
                    {prompt: 'Is your mind as clear as it used to be?', name: 'gds030'},
                ],
                options: ['Yes', 'No'],
            }
        ]
    ]


var EN_gds = {}
EN_gds.title = 'Geriatric Depression Scale'
EN_gds.description = "Choose the best answer for how you felt over the past week."
EN_gds.pages = pages
EN_gds.QuestionnaireType = 'YesNoLikertTable'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
EN_gds.values = [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1]


