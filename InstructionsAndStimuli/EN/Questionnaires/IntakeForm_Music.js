
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
            required: false,
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
            required: false,
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
            required: false,
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
            required: false,
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
            name: 'Ethinicity'
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
            }
            

    ]


var page2 = [
    {
        type: 'drop-down',
        prompt: 'Have you received a diagnosis of dementia or cognitive decline?',
        alert: "true",
        options: 
        [
            "No",
            "Not sure"
        ],
        name: 'CognDeclineDiagnosis',
        add_other_option: true,                    
        other_option_text: 'Yes, how long ago were you diagnosed?',
    }
]

pages.push(page1)



var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.QuestionnaireType = 'JASON'
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]



