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
                    {value: 'panas01', text: "Interested"},
                    {value: 'panas02', text: "Distressed"},
                    {value: 'panas03', text: "Excited"},
                    {value: 'panas04', text: "Upset"},
                    {value: 'panas05', text: "Strong"},
                    {value: 'panas06', text: "Guilty"},
                    {value: 'panas07', text: "Scared"},
                    {value: 'panas08', text: "Hostile"},
                    {value: 'panas09', text: "Enthusiastic"},
                    {value: 'panas10', text: "Proud"},
                    {value: 'panas11', text: "Irritable"},
                    {value: 'panas12', text: "Alert"},
                    {value: 'panas13', text: "Ashamed"},
                    {value: 'panas14', text: "Inspired"},
                    {value: 'panas15', text: "Nervous"},
                    {value: 'panas16', text: "Determined"},
                    {value: 'panas17', text: "Attentive"},
                    {value: 'panas18', text: "Jittery"},
                    {value: 'panas19', text: "Active"},
                    {value: 'panas20', text: "Afraid"},
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