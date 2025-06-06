var title = "The Centre of Excellence Self-Administered questionnaire"
var shortTitle = "CESAM"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "dropdown",
        name: "cesam001",
        title: "Have you willingly lost weight in the past year?",
        choices: [
            { value: 16, text: 'Yes' },
            { value: 42, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam001p1",
        title: "Was the loss of weight above 3kg (6 lbs)?",
        choices: [
            { value: 1, text: "Yes"},
            { value: 2, text: "No"}
        ],
        visibleIf: "{cesam001} == Yes",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam002",
        title: "How many different types of drugs do you take on a daily basis?",
        choices: [
          { value: 1, text: '0' },
          { value: 2, text: '1 to 4' },
          { value: 3, text: '5 to 9' },
          { value: 4, text: '10 or more' },
        ],
        isRequired: true,
        showClearButton: true
      },
      
    ],
  }]
};


var EN_cesamJSON = {}
EN_cesamJSON.title = title,
EN_cesamJSON.shortTitle = shortTitle,
EN_cesamJSON.survey_JSON = survey_JSON
EN_cesamJSON.description = ""
EN_cesamJSON.QuestionnaireType = 'Varied'
EN_cesamJSON.references = "references"
EN_cesamJSON.notes = ''
