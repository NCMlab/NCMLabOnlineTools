
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
            "Yes",
            "No",
            "Not sure"
        ],
        name: 'CognDeclineDiagnosis',
        required: true,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'text',
      prompt: 'If yes, how long ago were you diagnosed?',
      name: 'DementiaTime',
      required: false,
      textbox_rows: 3,
    },
    {
        type: 'text',
        prompt: 'If yes, what type of dementia (or cognitive decline), if known?',
        name: 'DementiaType',
        required: false,
        textbox_rows: 3,
      },
      {
        type: 'drop-down',
        prompt: 'Do you have hearing loss?',
        options: 
        [
            "Yes",
            "No",
            "Not sure"
        ],
        name: 'HearingLoss',
        required: true,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'drop-down',
      prompt: 'If you have hearing loss, is it ',
      options: 
      [
          "Bilateral",
          "Unilateral",
          "Not sure"
      ],
      name: 'HearingLossType',
      required: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
  },
  {
    type: 'drop-down',
    prompt: 'If you have hearing loss, what is your level of loss?',
    options: 
    [
        "Mild",
        "Moderate",
        "Severe",
        "Not sure"
    ],
    name: 'HearingLossLevel',
    required: false,
    //add_other_option: true,                    
    //other_option_text: 'Yes, how long ago were you diagnosed?',
  },
  {
    type: 'drop-down',
    prompt: 'Do you have any other health issues?',
    options: 
    [
        "No",
    ],
    name: 'OtherHealthIssues',
    required: true,
    add_other_option: true,                    
    other_option_text: 'Yes, please explain.',
    textbox_rows: 5,
},
]

page3 = [
  {
    type: 'text',
    prompt: 'How often do you exercise per week?',
    name: 'ExerciseFrequency',
    required: true,
    textbox_rows: 3,
  },
  {
    type: 'drop-down',
    prompt: 'Have you exercised in the last 24 hours?',
    options: 
    [
      "Yes",
        "No"
    ],
    name: 'Exercise24',
    required: true,
  },
  {
    type: 'drop-down',
    prompt: 'Do you smoke, or have you smoked in the past?',
    options: 
    [
      "Currently smoke",
        "Haven't smoked for more than 1 year",
        "Never",
        "Unknown"
    ],
    name: 'Smoke',
    required: true,
  },
  {
    type: 'text',
    prompt: 'If you smoke, what year did you start?',
    name: 'SmokeStart',
    required: false,
    input_type: "number"
  },
  {
    type: 'text',
    prompt: 'If you have smoked regularly in the past, what year did you quit?',
    name: 'SmokeQuit',
    required: false,
    input_type: "number"
  },
  {
    type: 'text',
    prompt: 'If you smoke, or have smoked regularly in the past, approximately how many packs per day?',
    name: 'SmokePacks',
    required: false,
    input_type: "number"
  },
  {
    type: 'drop-down',
    prompt: 'Alcohol consumption',
    options: 
    [
        "None",
        "Less than 2 drinks per day",
        "2 to 4 drinks per day",
        "More than 4 drinks per day"
    ],
    name: 'Alcohol',
    required: true,
  },
]
page4 = [
  {
    type: 'drop-down',
    prompt: 'Have you engaged in music and movement classes before?',
    options: 
    [
        "No",
    ],
    name: 'MusicMovement',
    required: true,
    add_other_option: true,                    
    other_option_text: 'Yes, please describe your previous experience (what type of class and for how long)',
    textbox_rows: 5,
},
]
pages.push(page1)
pages.push(page2)
pages.push(page3)
pages.push(page4)

var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.shortTitle = 'Intake'
EN_IntakeForm_Music.QuestionnaireType = 'Varied'
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]



