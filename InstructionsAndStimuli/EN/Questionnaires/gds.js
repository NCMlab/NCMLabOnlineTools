var pages = [
        [
            {
                type: 'likert-table',
                prompt: ' ',
                accuracy: [1,0,1,1,1,1,0,1,0],
                statements: [
                    {prompt: 'Are you basically satisfied with your life?', name: 'gds01'},
                    {prompt: 'Have you dropped many of your activities and interests?', name: 'gds02'},
                    {prompt: 'Do you feel that your life is empty?', name: 'gds03'},
                    {prompt: 'Do you often get bored?', name: 'gds04'},
                    {prompt: 'Are you hopeful about the future?', name: 'gds05'},
                    {prompt: 'Are you bothered by thoughts you can t get out of your head?', name: 'gds06'},
                    {prompt: 'Are you in good spirits most of the time?', name: 'gds07'},
                    {prompt: 'Are you afraid that something bad is going to happen to you?', name: 'gds08'},
                    {prompt: 'Do you feel happy most of the time?', name: 'gds09'},
                    {prompt: 'Do you often feel helpless?', name: 'gds10'},
                    {prompt: 'Do you often get restless and fidgety?', name: 'gds11'},
                    {prompt: 'Do you prefer to stay at home, rather than going out and doing new things?', name: 'gds12'},
                    {prompt: 'Do you frequently worry about the future?', name: 'gds13'},
                    {prompt: 'Do you feel you have more problems with memory than most?', name: 'gds14'},
                    {prompt: 'Do you think it is wonderful to be alive now?', name: 'gds15'},
                    {prompt: 'Do you often feel downhearted and blue?', name: 'gds16'},
                    {prompt: 'Do you feel pretty worthless the way you are now?', name: 'gds17'},
                    {prompt: 'Do you worry a lot about the past?', name: 'gds18'},
                    {prompt: 'Do you find life very exciting?', name: 'gds19'},
                    {prompt: 'Is it hard for you to get started on new projects?', name: 'gds20'},
                    {prompt: 'Do you feel full of energy?', name: 'gds21'},
                    {prompt: 'Do you feel that your situation is hopeless?', name: 'gds22'},
                    {prompt: 'Do you think that most people are better off than you are?', name: 'gds23'},
                    {prompt: 'Do you frequently get upset over little things?', name: 'gds24'},
                    {prompt: 'Do you frequently feel like crying?', name: 'gds25'},
                    {prompt: 'Do you have trouble concentrating?', name: 'gds26'},
                    {prompt: 'Do you enjoy getting up in the morning?', name: 'gds27'},
                    {prompt: 'Do you prefer to avoid social gatherings?', name: 'gds28'},
                    {prompt: 'Is it easy for you to make decisions?', name: 'gds29'},
                    {prompt: 'Is your mind as clear as it used to be?', name: 'gds30'},
                ],
                options: ['Yes', 'No'],
            }
        ]
    ]


var EN_gds = {}
EN_gds.title = title
EN_gds.description = "Choose the best answer for how you felt over the past week."
EN_gds.pages = pages
EN_gds.QuestionnaireType = 'YesNoLikertTable'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
EN_gds.values = [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1]


