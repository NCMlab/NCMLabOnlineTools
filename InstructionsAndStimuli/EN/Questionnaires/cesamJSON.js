var title = "The Centre of Excellence Self-Administered questionnaire"
var shortTitle = "CESAM"
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [
    {
        type: "dropdown",
        name: "cesam001",
        title: "Have you unwillingly lost weight in the past year?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam001p1",
        title: "Was the loss of weight above 3kg (6 lbs)?",
        choices: [
            "Yes",
            "No"
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
            "0",
            "1 to 4",
            "5 to 9",
            "10 or more"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam003",
        title: "Do you have vision problems?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam004",
        title: "Do you have hearing problems?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },

    ],
    showQuestionNumbers: false,
    showCompletedPage: false
  };


var EN_cesamJSON = {}
EN_cesamJSON.title = title,
EN_cesamJSON.shortTitle = shortTitle,
EN_cesamJSON.survey_JSON = survey_JSON
EN_cesamJSON.description = ""
EN_cesamJSON.QuestionnaireType = 'likert'
EN_cesamJSON.references = "references"
EN_cesamJSON.notes = ''
