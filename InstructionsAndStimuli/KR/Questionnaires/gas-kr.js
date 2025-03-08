
var title = "Geriatric Anxiety Scale"
var shortTitle = 'GAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'gas',
                title: 'Below is a list of common symptoms of anxiety or stress. Please read each item in the list carefully. Indicate how often you have experienced each symptom during the PAST WEEK, INCLUDING TODAY by checking under the corresponding answer.',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gas01', text: "I was irritable."},
                    {value: 'gas02', text: "I felt detached or isolated from others."},
                    {value: 'gas03', text: "I felt like I was in a daze."},
                    {value: 'gas04', text: "I had a hard time sitting still."},
                    {value: 'gas05', text: "I could not control my worry."},
                    {value: 'gas06', text: "I felt restless, keyed up, or on edge."},
                    {value: 'gas07', text: "I felt tired."},
                    {value: 'gas08', text: "My muscles were tense."},
                    {value: 'gas09', text: "I felt like I had no control over my life."},
                    {value: 'gas10', text: "I felt like something terrible was going to happen to me."},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'Not at all'
                    },
                    {
                    "value": 1,
                    "text": 'Sometimes'
                    },
                    {
                    "value": 2,
                    "text": 'Most of the time'
                    },
                    {
                    "value": 3,
                    "text": 'All of the time'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var EN_gasJSON = {}
EN_gasJSON.title = title
EN_gasJSON.shortTitle = shortTitle
EN_gasJSON.survey_JSON = survey_JSON
//EN_gasJSON.description = instructions
EN_gasJSON.QuestionnaireType = 'matrix'
EN_gasJSON.references = references
EN_gasJSON.notes = notes
