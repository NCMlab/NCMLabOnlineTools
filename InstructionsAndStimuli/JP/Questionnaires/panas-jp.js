
var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        elements: [
            { 
                type: 'matrix',
                name: 'panas',
                title: '情動や感情 を表す、20 個の言葉や表現が下にあげられています。それぞれの項目をよ く読み、あなた、あるいは、あなたの 気持ちが今どれ程、それらの項目の内容に該当 しているかを次にあげる5段階でお答えください。そして、その番号を各項目の横に 記入して下さい。',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'panas01', text: "興味のある"},
                    {value: 'panas02', text: "苦悩した"},
                    {value: 'panas03', text: "興奮した"},
                    {value: 'panas04', text: "うろたえた"},
                    {value: 'panas05', text: "強気な"},
                    {value: 'panas06', text: "うしろめたい"},
                    {value: 'panas07', text: "おびえた"},
                    {value: 'panas08', text: "敵意をもった"},
                    {value: 'panas09', text: "熱狂した"},
                    {value: 'panas10', text: "誇らしい"},
                    {value: 'panas11', text: "イライラした"},
                    {value: 'panas12', text: "機敏な"},
                    {value: 'panas13', text: "恥ずかしい"},
                    {value: 'panas14', text: "やる気がわいた"},
                    {value: 'panas15', text: "びりびりした"},
                    {value: 'panas16', text: "決心した"},
                    {value: 'panas17', text: "注意深い"},
                    {value: 'panas18', text: "神経質な"},
                    {value: 'panas19', text: "活気のある"},
                    {value: 'panas20', text: "恐れた"},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'ほとんどまたは'
                    },
                    {
                    "value": 1,
                    "text": '少ししか'
                    },
                    {
                    "value": 2,
                    "text": 'まあまあ'
                    },
                    {
                    "value": 3,
                    "text": 'かなり'
                    },
                    {
                    "value": 4,
                    "text": '極めて'
                    },
                ],
            }
        ]
    }



var references = "Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of brief measures of positive and negative affect: The PANAS scales. *Journal of Personality and Social Psychology, 54*(6), 1063–1070."

var notes = ""

var EN_panasJSON = {}
EN_panasJSON.title = title
EN_panasJSON.shortTitle = shortTitle
EN_panasJSON.survey_JSON = survey_JSON
//EN_panasJSON.description = instructions
EN_panasJSON.QuestionnaireType = 'likert'
EN_panasJSON.references = references
EN_panasJSON.notes = notes



{/* 
        {prompt: "Excited", },
        {prompt: "Upset", },
        {prompt: "Strong", },
        {prompt: "Guilty", },
        {prompt: "Scared", },
        {prompt: "Hostile",},
        {prompt: "Enthusiastic", },
        {prompt: "Proud", },
        {prompt: "Irritable",},
        {prompt: "Alert", },
        {prompt: "Ashamed",},
        {prompt: "Inspired",},
        {prompt: "Nervous", },
        {prompt: "Determined",},
        {prompt: "Attentive", },
        {prompt: "Jittery", },
        {prompt: "Active", },
        {prompt: "Afraid", },*/}