
var AESlikert_scale_valuesFORWARD = [
    {value:1, text: "Not at all"}, 
    {value:2, text:"Slightly"}, 
    {value:3, text:"Somewhat"}, 
    {value:4, text: "A lot"}
] 

const AES = {
    type: jsPsychSurvey,
    pages: [
        [
            {
                type: 'likert',
                prompt: "I am interested in things.", 
                name: 'aes01', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                values: valuesForward, 
                required: true
            },
            {
                type: 'likert',
                prompt: "I get things done during the day.", 
                name: 'aes02', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                values: valuesForward, 
                required: true
            },
            {
                type: 'likert',
                prompt: "Getting things started on my own is important to me.", 
                name: 'aes03', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                values: valuesForward, 
                required: true
            },
            {
                type: 'likert',
                prompt: "I am interested in having new experiences.", 
                name: 'aes04', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                values: valuesForward, 
                required: true
            },
        ]
    ]
}
timeline = []
timeline.push(AES)