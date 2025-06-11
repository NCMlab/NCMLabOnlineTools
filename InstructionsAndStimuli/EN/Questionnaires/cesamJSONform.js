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
          { value: 0, text: '0' },
          { value: 0, text: '1 to 4' },
          { value: 1, text: '5 to 9' },
          { value: 2, text: '10 or more' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam003",
        title: "Do you have vision problems?",
        choices: [
          { value: 2, text: 'Yes' },
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
          { value: 2, text: 'Yes' },
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
      },
      {
        type: "dropdown",
        name: "cesam006",
        title: "Do you receive home care support?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006p1",
        title: "From whom?",
        choices: [
            {text: "Family"},
            {text: "Friends"},
            {text: "Professional"}
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
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam008",
        title: "Do you need help with bathing or taking a shower?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam009",
        title: "Do you need assistance when getting dressed?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam010",
        title: "Do you use mobility aides for walking or transfering (cane, walker, wheelchair)?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam011",
        title: "Do you need help with your meals: Shopping for food, meal preparation, assistance in eating",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam012",
        title: "Do you need help when using the telephone?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam013",
        title: "Do you need assistance when taking public transportation?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam014",
        title: "Do you need help for managing medications on your own?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam015",
        title: "Do you need help to pay your bills and manage your finances?",
        choices: [
          { value: 1, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam016",
        title: "Are you incontinent (urine and/or stool)?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam017",
        title: "How do you feel today?",
        choices: [
            { value: 2, text: "Happy" },
            { value: 1, text: "Unhappy" },
            { value: 0, text: "Neither one nor the other" },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam018",
        title: "Do you feel energetic?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam019",
        title: "Do you do regular physical activity (walking, swimming, cycling, etc.) at least one hour per week in the past month?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam020",
        title: "Have you fallen in the past year (at least one fall)?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021",
        title: "Have you received help to complete this questionnaire?",
        choices: [
          { value: 2, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021p1",
        title: "Who helped you?",
        choices: [
            {value: 1, text: "Family"},
            {value: 2, text: "Friends"},
            {value: 3, text: "Professional"}
        ],
        visibleIf: "{cesam021} == Yes",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021p2",
        title: "Which family member helped you?",
        choices: [
            {value: 1, text: "Spouse"},
            {value: 2, text: "Partner"},
            {value: 3, text: "Child"},
            {value: 4, text: "Other"}
        ],
        visibleIf: "{cesam021p1} == Family",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam022",
        title: "Did you answer this questionnaire for yourself or for someone else?",
        choices: [
            {value: 1, text: "Myself"},
            {value: 2, text: "Another person"}
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam023",
        title: "Are you the caregiver to an individual who is suffering from a chronic illness?",
        choices: [
            {value:2, text: "Yes"},
            {value:0, text: "No"}
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam023p1",
        title: "What is his/her condition?",
        choices: [
            {text: "Alzheimer's disease"},
            {text: "Other"}
        ],
        visibleIf: "{cesam023} == Yes",
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
EN_cesamJSON.QuestionnaireType = 'form'
EN_cesamJSON.references = "references"
EN_cesamJSON.notes = ''
