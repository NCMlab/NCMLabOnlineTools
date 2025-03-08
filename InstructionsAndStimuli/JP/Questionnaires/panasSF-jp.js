var title = "Positive and Negative Affect Schedule Short Form (PANAS-SF)"
var shortTitle = 'PANAS-SF'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        elements: [
            {
                type: 'matrix',
                name: 'panas',
                title: '情動や感情 を表す、10 個の言葉や表現が下にあげられています。それぞれの項目をよ く読み、あなた、あるいは、あなたの 気持ちが今どれ程、それらの項目の内容に該当 しているかを次にあげる5段階でお答えください。そして、その番号を各項目の横に 記入して下さい。',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'panas01', text: "うろたえた"},
                    {value: 'panas02', text: "敵意をもった"},
                    {value: 'panas03', text: "機敏な"},
                    {value: 'panas04', text: "恥ずかしい"},
                    {value: 'panas05', text: "やる気がわいた"},
                    {value: 'panas06', text: "びりびりした"},
                    {value: 'panas07', text: "決心した"},
                    {value: 'panas08', text: "注意深い"},
                    {value: 'panas09', text: "恐れた"},
                    {value: 'panas10', text: "活気のある"},
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
EN_panasJSON.description = instructions
EN_panasJSON.QuestionnaireType = 'likert'
EN_panasJSON.references = references
EN_panasJSON.notes = notes



{/* 
        {prompt: "Upset", },
        {prompt: "Hostile",},
        {prompt: "Alert", },
        {prompt: "Ashamed",},
        {prompt: "Inspired",},
        {prompt: "Nervous", },
        {prompt: "Determined",},
        {prompt: "Attentive", },
        {prompt: "Afraid", },
        {prompt: "Active", },*/}