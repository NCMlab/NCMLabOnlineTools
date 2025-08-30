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
            { value: 2, text: 'Yes' },
            { value: 0, text: 'No' },
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
            {
        type: "dropdown",
        name: "cesam003",
        title: "Do you have vision problems?",
        choices: [
          { value: 1, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam004",
        title: "Do you have hearing problems?",
        choices: [
          { value: 1, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam005",
        title: "Has someone close to you expressed concern about your memory?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      }

    ],
  }]
};


var EN_cesamJSONformSHORT = {}
EN_cesamJSONformSHORT.title = title,
EN_cesamJSONformSHORT.shortTitle = shortTitle,
EN_cesamJSONformSHORT.survey_JSON = survey_JSON
EN_cesamJSONformSHORT.description = ""
EN_cesamJSONformSHORT.QuestionnaireType = 'form'
EN_cesamJSONformSHORT.references = "references"
EN_cesamJSONformSHORT.notes = ''
