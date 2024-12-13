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
      {
        type: "dropdown",
        name: "cesam005",
        title: "Has someone close to you expressed concern about your memory?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006",
        title: "Do you receive home care support?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006p1",
        title: "From whom?",
        choices: [
            "Family",
            "Friends",
            "Professional"
        ],
        visibleIf: "{cesam006} == Yes",
        isRequired: true,
        showClearButton: true
      },

      {
        type: "dropdown",
        name: "cesam007",
        title: "Do you need help with your grooming (brushing teeth, hair, shaving, applying make up)?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam008",
        title: "Do you need help with bathing or traking a shower?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam009",
        title: "Do you need assistance when getting dressed?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam010",
        title: "Do you use mobility aides for walking or transfering (cane, walker, wheelchair)?",
        choices: [
            "Yes",
            "No"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam011",
        title: "Do you need help with your meals: Shopping for food, meal preparation, assistamce in eating",
        choices: [
            "Yes",
            "No"
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
