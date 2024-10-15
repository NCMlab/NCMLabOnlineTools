
var FormTitle = 'MHRI Intake Form'

var pages = [
    [
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
            other_option_text: 'Other',
            required: false,
          },
          {
            type: 'text',
            prompt: 'What type of work do you do (or did you do before retirement)?',
            name: 'WorkType',
            required: true,
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
            other_option_text: 'Other',
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
                    'Yes',
                    'No'
                ],
            required: false,
          },
          {
            type: 'text',
            prompt: 'What is your primary language(s)?',
            name: 'Problem',
            visibleIf: '{LanguageProblems} == "Yes"',
            
          },


    ]
]




var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.QuestionnaireType = 'JASON'
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]



