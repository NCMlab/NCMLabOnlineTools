
var FormTitle = 'MHRI Intake Form'

var pages = []
var page1 = [
        {
            type: 'text',
            prompt: 'Gender',
            name: 'Gender',
            required: true,
        },
        {
            type: 'text',
            prompt: 'Age',
            name: 'Age',
            required: true,
        },
        {
            type: 'text',
            prompt: 'Height (cm or feet/inches)',
            name: 'Height',
            required: true,
        },
        {
            type: 'text',
            prompt: 'Weight (kg or lbs)',
            name: 'Weight',
            required: true,
        },
        {
            type: 'drop-down',
            prompt: "What is the highest level of education you have completed?", 
            name: 'Edu', 
            options: [
                        'No formal education',
                        'High school diploma or equivalent',
                        'College or Trade school',
                        'Bachelor’s degree',
                        'Master’s degree',
                        'Doctoral degree'
                ],
            add_other_option: true,
            other_option_text: 'Other',
            required: true,
          },
          {
            type: 'drop-down',
            prompt: "What is your employment status?", 
            name: 'Employ', 
            options: [
                        'Employed full-time',
                        'Employed part-time',
                        'Retired',
                        'Unemployed'
                ],
            add_other_option: true,
            other_option_text: 'Other (please specify)',
            required: true,
          },
          {
            type: 'text',
            prompt: 'What type of work do you do (or did you do before retirement)?',
            name: 'WorkType',
            required: true,
            textbox_rows: 3,
          },
          {
            type: 'drop-down',
            prompt: "Do you live alone or with others?", 
            name: 'Living', 
            options: [
                    'Alone',
                    'With spouse / partner',
                    'With family members',
                    'With caregivers',
                    'In assisted living facility'
                ],
            add_other_option: true,
            other_option_text: 'Other (please specify)',
            required: true,
          },
          {
            type: 'text',
            prompt: 'What is your primary language(s)?',
            name: 'PrimaryLanguage',
            required: true,
          },
          {
            type: 'drop-down',
            prompt: "Are there any language or communication challenges you have?", 
            name: 'LanguageProblems', 
            options: [
                    'No'
                ],
            add_other_option: true,
            other_option_text: 'Yes, please describe',
            required: true,
            textbox_rows: 3,
          },
          {
            type: 'multi-select',
            prompt: "What is your ethnic background (you may select more than one)",
            options: [
                    'European (e.g., white)',
                    'Asian (e.g., Chinese, Japanese, Korean, South-east Asian)',
                    'East Indian, Pakistani',
                    'African-American/Black/Caribbean',
                    'Hispanic',
                    'Middle-Eastern',
                    'First Nations, Métis, Inuit',
                    ],
            add_other_option: true,                    
            other_option_text: 'Other',
            name: 'Ethinicity',
            required: true
            },
            {
                type: 'drop-down',
                prompt: 'What is your marital status?',
                options: 
                [   
                    'Single',
                    'Married',
                    'Divorced',
                    'Widowed'
                ],
                name: 'martital',
                add_other_option: true,                    
                other_option_text: 'Other (please specify)',
                required: true,
            },
            {
                type: 'drop-down',
                prompt: 'What is your annual household income?',
                options: 
                [
                    "Less than $20,000",
                    "$20,000 - $40,000",
                    "$40,001 - $60,000",
                    "$60,001 - $80,000",
                    "$80,001 - $100,000",
                    "Above $100,000"
                ],
                name: 'Income',
                required: true,
            }
            

    ]


var page2 = [
    {
        type: 'drop-down',
        prompt: 'Have you received a diagnosis of dementia or cognitive decline?',
        options: 
        [
            "No",
            "Not sure"
        ],
        name: 'CognDeclineDiagnosis',
        add_other_option: true,                    
        other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
        type: 'text',
        prompt: 'If yes, what type of dementia (or cognitive decline), if known?',
        name: 'DementiaType',
        required: false,
        textbox_rows: 3,
      },

]
page3 = [{
    title: "Example of conditional questions",
    elements: [{
      name: "vegetables-score",
      title: "I like vegetables.",
      description: "Choose 'neutral' to skip the conditional question, and any other option to see a conditional question.",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neutral" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ],
      isRequired: true
    }]
  }, {
    elements: [{
      name: "vegetables-like",
      title: "You like vegetables! Which one is your favorite?",
      description: "(You can go back and change your earlier answer to see the other conditional questions)",
      type: "comment",
      visibleIf: "{vegetables-score} >= 4"
    }, {
      name: "vegetables-eat",
      title: "On a scale of zero to ten, how likely are you to eat broccoli today?",
      type: "rating",
      rateMin: 0,
      rateMax: 10
    }],
    visibleIf: "{vegetables-score} >= 4"
  }, {
    elements: [{
      name: "vegetables-dislike",
      description: "(You can go back and change your earlier answer to see the other conditional questions)",
      title: "You don't like vegetables! Please explain why.",
      type: "comment"
    }],
    visibleIf: "{vegetables-score} =< 2"
  }]

pages.push(page3)



var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.QuestionnaireType = 'JASON'
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]



