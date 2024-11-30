
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
                title: 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'panas01', text: "흥미진진한"},
                    {value: 'panas02', text: "괴로운"},
                    {value: 'panas03', text: "흥분된"},
                    {value: 'panas04', text: "마음이 상한"},
                    {value: 'panas05', text: "강한"},
                    {value: 'panas06', text: "죄책감 드는"},
                    {value: 'panas07', text: "겁에 질린"},
                    {value: 'panas08', text: "적대적인"},
                    {value: 'panas09', text: "열정적인"},
                    {value: 'panas10', text: "자랑스러운"},
                    {value: 'panas11', text: "과민한"},
                    {value: 'panas12', text: "기민한"},
                    {value: 'panas13', text: "부끄러운"},
                    {value: 'panas14', text: "원기왕성한"},
                    {value: 'panas15', text: "신경질적인"},
                    {value: 'panas16', text: "단호한"},
                    {value: 'panas17', text: "주의 깊은"},
                    {value: 'panas18', text: "조바심 나는"},
                    {value: 'panas19', text: "활기찬"},
                    {value: 'panas20', text: "두려운"},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'Very slightly or not at all'
                    },
                    {
                    "value": 1,
                    "text": 'A little'
                    },
                    {
                    "value": 2,
                    "text": 'Moderately'
                    },
                    {
                    "value": 3,
                    "text": 'Quite a bit'
                    },
                    {
                    "value": 4,
                    "text": 'Extremely'
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