
var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [{
            name: "LanguageProblem",
            type: "dropdown",
            title: "Username",
            choices: ["Yes", "No"]
          }, {
            name: "LanguageProblemDescription",
            type: "comment",
            title: "Please describe",
            visibleIf: "{LanguageProblem} == Yes",
            maxLength: 500
          },
          {
            type: "tagbox",
            isRequired: true,
            choices: [
                'European (e.g., white)',
                'Asian (e.g., Chinese, Japanese, Korean, South-east Asian)',
                'East Indian, Pakistani',
                'African-American/Black/Caribbean',
                'Hispanic',
                'Middle-Eastern',
                'First Nations, Métis, Inuit',
                ],
            name: 'Ethnicity',
            title: "What is your ethnic background (you may select more than one)",
            "description": "Please select all that apply."
          }
        ]
    }


var EN_IntakeForm_MusicJSON = {}
EN_IntakeForm_MusicJSON.title = 'FormTitle';
EN_IntakeForm_MusicJSON.survey_JSON = survey_JSON;
EN_IntakeForm_MusicJSON.shortTitle = 'Intake'
EN_IntakeForm_MusicJSON.QuestionnaireType = 'Varied'
EN_IntakeForm_MusicJSON.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]
