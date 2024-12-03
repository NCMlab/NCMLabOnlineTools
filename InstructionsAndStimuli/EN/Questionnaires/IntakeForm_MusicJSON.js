
var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 

    { 
      pages: [
        {
          elements: [
            {
              type: 'panel',
              name: 'demog',
            

            elements: 
            [
              {
                  type: 'dropdown',
                  title: "Gender", 
                  name: 'Gender', 
                  choices: [
                              'Male',
                              'Female',
                      ],
                  showOtherItem: true,
                  required: true,
                },
                {
                  name: "Height",
                  type: "text",
                  title: "Enter your height in inches or centimeters",
                  inputType: "number",
                  min: 0,
                  max: 300,
                  defaultValue: 0,
                  isRequired: true
                },
                {
                  type: 'dropdown',
                  title: "What units did you use for height?", 
                  name: 'HeightUnits', 
                  choices: [
                              'Inches',
                              'Centimeters',
                      ],
                  showOtherItem: false,
                  required: true,
                },
                {
                  name: "Weight",
                  type: "text",
                  title: "Enter your weight in pounds or kilograms",
                  inputType: "number",
                  min: 0,
                  max: 1000,
                  defaultValue: 0,
                  isRequired: true
                },
                {
                  type: 'dropdown',
                  title: "What units did you use for weight?", 
                  name: 'HeightUnits', 
                  choices: [
                              'Pounds',
                              'Kilograms',
                      ],
                  showOtherItem: false,
                  required: true,
                },
                {
                  type: 'dropdown',
                  title: "What is the highest level of education you have completed?", 
                  name: 'Edu', 
                  choices: [
                              'No formal education',
                              'High school diploma or equivalent',
                              'College or Trade school',
                              'Bachelor’s degree',
                              'Master’s degree',
                              'Doctoral degree'
                      ],
                  showOtherItem: true,
                  required: true,
                },
                {
                  type: 'dropdown',
                  title: "What is your employment status?", 
                  name: 'Employ', 
                  choices: [
                              'Employed full-time',
                              'Employed part-time',
                              'Retired',
                              'Unemployed'
                      ],
                  showOtherItem: true,
                  required: true,
                },
                {
                  type: 'comment',
                  title: 'What type of work do you do (or did you do before retirement)?',
                  name: 'WorkType',
                  rows: 2,
                  required: true,
                  autoGrow: true
                },          
                {
                  type: 'dropdown',
                  title: "Do you live alone or with others?", 
                  name: 'Living', 
                  choices: [
                          'Alone',
                          'With spouse / partner',
                          'With family members',
                          'With caregivers',
                          'In assisted living facility'
                      ],
                  showOtherItem: true,
                  required: true,
                },
                {
                  type: 'text',
                  title: 'What is your primary language(s)?',
                  name: 'PrimaryLanguage',
                  required: true,
                },
                {
                  name: "LanguageProblem",
                  type: "dropdown",
                  title: "Are there any language or communication challenges you have?",
                  choices: ["Yes", "No"]
                }, 
                {
                  name: "LanguageProblemDescription",
                  type: "comment",
                  title: "Please specify your language or communication challenges.",
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
                },
                {
                  type: 'dropdown',
                  title: 'What is your marital status?',
                  choices: 
                  [   
                      'Single',
                      'Married',
                      'Divorced',
                      'Widowed'
                  ],
                  name: 'martital',
                  showOtherItem: true,                    
                  required: true,
                },
                {
                  type: 'dropdown',
                  title: 'What is your annual household income?',
                  choices: 
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
              ],
              questionTitleLocation: 'bottom',
              title: 'Demographic Information'
            },
    
            {
              type: 'panel',
              name: 'demog2',
              elements: 
              [
                 {
                  type: 'dropdown',
                  title: "Gender", 
                  name: 'Gender', 
                  choices: [
                              'Male',
                              'Female',
                      ],
                  showOtherItem: true,
                  required: true,
                },
              ],
              questionTitleLocation: 'bottom',
              title: 'Demographic Information PART 2'
            },
          ],
        showProgressBar: 'top',
        title: 'General Information',  
        showQuestionNumbers: "off",
        showCompletedPage: false,
    }
  ]}
  

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
