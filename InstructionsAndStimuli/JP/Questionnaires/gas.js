var scale01 = [
    {value: 1, text: '全くなかった'},
    {value: 2, text: 'ときどきおった'},
    {value: 3, text: 'よくあった'},
    {value: 4, text: '常にあった'}
]
var EN_pages = [
    [
        {
            type: 'likert',
            prompt: 'イライラした。',
            name: 'gas01',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '自分はひとりぼっち、または他人から切り難 されているよに感じた。',
            name: 'gas02',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: 'ぼ一つとしているよに感じた。',
            name: 'gas03',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: 'じっと座っていることが難しかった。',
            name: 'gas04',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '心配をコントロールできなかった。',
            name: 'gas05',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '落ち着きがなかったり、緊張したり、ピリピ リした。',
            name: 'gas06',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '疲れていた。',
            name: 'gas07',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '筋肉が緊張していた。',
            name: 'gas08',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '私の人生はど することもできなかったと感 じた。',
            name: 'gas09',
            likert_scale_values: scale01,
            required: true,
        },
        {
            type: 'likert',
            prompt: '何か恐ろしいことが自分の身に起こるのでは ないかと感じた。',
            name: 'gas10',
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

