
var title = "Apathy Evaluation Scale (AES)"

var description = 'For each statement, choose the answer that best describes the your thoughts, feelings, and activity in the past 4 weeks.'

var AESlikert_scale_valuesFORWARD = [
    {value:1, text: "Not at all"}, 
    {value:2, text:"Slightly"}, 
    {value:3, text:"Somewhat"}, 
    {value:4, text: "A lot"}
] 
var AESlikert_scale_valuesBACKWARD = [
    {value:4, text: "Not at all"}, 
    {value:3, text:"Slightly"}, 
    {value:2, text:"Somewhat"}, 
    {value:1, text: "A lot"}
]
//QuestionnaireTrial = {
 //   type: jsPsychSurvey,
  //  title: instructions,
var pages = [
            [
            {
                type: 'likert',
                prompt: "I am interested in things.", 
                name: 'aes01', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,                
            },
            {
                type: 'likert',
                prompt: "I get things done during the day.", 
                name: 'aes02', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "Getting things started on my own is important to me.", 
                name: 'aes03', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I am interested in having new experiences.", 
                name: 'aes04', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {   type: 'likert',
                prompt: "I am interested in learning new things.", 
                name: 'aes05', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I put little effort into anything.", 
                name: 'aes06', 
                likert_scale_values: AESlikert_scale_valuesBACKWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I approach life with intensity.",                
                name: 'aes07', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "Seeing a job through to the end is important to me.", 
                name: 'aes08', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I spend time doing things that interest me.", 
                name: 'aes09', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "Someone has to tell me what to do each day.", 
                name: 'aes10', 
                likert_scale_values: AESlikert_scale_valuesBACKWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I am less concerned about my problems than I should be.", 
                name: 'aes11', 
                likert_scale_values: AESlikert_scale_valuesBACKWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I have friends.", 
                name: 'aes12', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "Getting together with friends is important to me.", 
                name: 'aes13', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "When something good happens, I get excited.", 
                name: 'aes14', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I have an accurate understanding of my problems.", 
                name: 'aes15', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "Getting things done during the day is important to me.", 
                name: 'aes16', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I have initiative.", 
                name: 'aes17', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            },
            {
                type: 'likert',
                prompt: "I have motivation.", 
                name: 'aes18', 
                likert_scale_values: AESlikert_scale_valuesFORWARD, 
                required: true,
            }
          



        ]
    ]
//    ]//
//}


var aes = {}
aes.title = title
aes.pages = pages
aes.description = description


 