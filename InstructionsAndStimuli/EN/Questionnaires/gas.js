var scale01 = [
    {value: 1, text: 'Not at all'},
    {value: 2, text: 'Sometimes'},
    {value: 3, text: 'Most of the time'},
    {value: 4, text: 'All of the time'}
]
var EN_pages = [
    [
        {
            type: 'likert',
            prompt: 'I was irritable.',
            name: 'gas01',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: 'I felt detached or isolated from others.',
            name: 'gas02',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: 'I felt like I was in a daze.',
            name: 'gas03',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: 'I had a hard time sitting still.',
            name: 'gas04',
            likert_scale_values: scale01,
            required: true,
        },
    ]
]


var EN_gas = {}
EN_gas.title = 'Geriatric Anxiety Scale'
EN_gas.shortTitle = 'GAS'
EN_gas.description = "Below is a list of common symptoms of anxiety or stress. Please read each item in the list carefully. Indicate how often you have experienced each symptom during the PAST WEEK, INCLUDING TODAY by checking under the corresponding answer."
EN_gas.pages = EN_pages
EN_gas.QuestionnaireType = 'likert'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
//EN_gas.values = [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1]

