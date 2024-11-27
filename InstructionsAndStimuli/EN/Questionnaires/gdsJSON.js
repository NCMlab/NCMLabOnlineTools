
var title = "Geriatric Depression Scale"
var shortTitle = 'GDS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'gds',
                title: 'Choose the best answer for how you felt over the past week.',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gds01', text: "Are you basically satisfied with your life?"},
                    {value: 'gds02', text: "Have you dropped many of your activities and interests?"},
                    {value: 'gds03', text: "Do you feel that your life is empty?"},
                    {value: 'gds04', text: "Do you often get bored?"},
                    {value: 'gds05', text: "Are you in good spirits most of the time?"},
                    {value: 'gds06', text: "Are you afraid that something bad is going to happen to you?"},
                    {value: 'gds07', text: "Do you fell happy most of the time?"},
                    {value: 'gds08', text: "Do you often feel helpless?"},
                    {value: 'gds09', text: "Do you prefer to stay home, rather than going out and doing things?"},
                    {value: 'gds10', text: "Do you feel that you have more problems with memory than most?"},
                    {value: 'gds11', text: "Do you think is it wonderful to be aline now?"},
                    {value: 'gds12', text: "Do you feel worthless the way you are now?"},
                    {value: 'gds13', text: "Do you feel full of energy?"},
                    {value: 'gds14', text: "Do you feel that your situation is hopeless?"},
                    {value: 'gds15', text: "Do you think that most people are better off than you are?"},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'Yes'
                    },
                    {
                    "value": 1,
                    "text": 'No'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var EN_gdsJSON = {}
EN_gdsJSON.title = title
EN_gdsJSON.shortTitle = shortTitle
EN_gdsJSON.survey_JSON = survey_JSON
//EN_gdsJSON.description = instructions
EN_gdsJSON.QuestionnaireType = 'likert'
EN_gdsJSON.references = references
EN_gdsJSON.notes = notes