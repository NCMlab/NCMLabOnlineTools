
var title = "Physical Activity Enjoyment Scale"
var shortTitle = 'PAES'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'PAES',
                title: 'Please rate how you feel <em>at the moment</em> about the music and movement activity you have been doing',
                alternateRows: true,
                isAllRowRequired: true,
                
                rows: [

                    {value: 'paes001', text: 'I enjoy it'},
                    {value: 'paes002', text: 'I find it pleasurable'},
                    {value: 'paes003', text: 'It is very pleasant'},
                    {value: 'paes004', text: 'It feels good'},
                ],
                columns: [
                    { "value": 0, text: 'Strongly disagree' }, 
                    { "value": 1, text: 'Disagree' },
                    { "value": 2, text: 'Neither agree nor disagree' },
                    { "value": 3, text: 'Agree' }, 
                    { "value": 4, text: 'Strongly agree'}
                ],
            }
        ]
    }

var references = ""

var notes = ""

var EN_paes = {}
EN_paes.title = title
EN_paes.shortTitle = shortTitle
EN_paes.survey_JSON = survey_JSON
//EN_panasJSON.description = instructions
EN_paes.QuestionnaireType = 'matrix'
EN_paes.references = references
EN_paes.notes = notes


