var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS'
var instructions = 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.'  
// All questions use the same direction so enter that single flag as an array of size 1
var ReverseScoreDirection = [false]

var survey_JSON = 
    {
        elements: [
            {
                type: 'matrix',
                name: 'panas',
                title: "PANAS-title",
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'panas01', text: "Interested"},
                    {value: 'panas02', text: "Distressed"},
                    {value: 'panas03', text: "Interested"},
                    {value: 'panas04', text: "Distressed"},
                    {value: 'panas05', text: "Interested"},
                    {value: 'panas06', text: "Distressed"},
                    {value: 'panas07', text: "Interested"},
                    {value: 'panas08', text: "Distressed"},
                    {value: 'panas00', text: "Interested"},
                    {value: 'panas10', text: "Distressed"}

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
EN_panasJSON.description = instructions
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