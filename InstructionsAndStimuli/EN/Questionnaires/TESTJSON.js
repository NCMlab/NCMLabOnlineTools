
var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS, baseline'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'panas',
                title: 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way the extent you have felt this way this over the past few days.',
                alternateRows: true,
                isAllRowRequired: true,
                
                rows: [
                    //{value: 'panas01', text: "Interested"},
                    //{value: 'panas02', text: "Distressed"},
                    //{value: 'panas03', text: "Excited"},
                    {value: 'panas01', text: "Upset"},
                    //{value: 'panas05', text: "Strong"},
                    //{value: 'panas06', text: "Guilty"},
                    //{value: 'panas07', text: "Scared"},
                    {value: 'panas02', text: "Hostile"},
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

var EN_TESTJSON = {}
EN_TESTJSON.title = title
EN_TESTJSON.shortTitle = shortTitle
EN_TESTJSON.survey_JSON = survey_JSON
//EN_panasJSON.description = instructions
EN_TESTJSON.QuestionnaireType = 'matrix'
EN_TESTJSON.references = references
EN_TESTJSON.notes = notes



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