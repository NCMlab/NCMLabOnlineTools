
var title = "Demographic Questionnaire "
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: [
     {
      
      name: "Demographic Information",
      title: "Demographic Information",
       elements: [
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
          name: 'marital',
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
       ]
     },
     {
       name: "Medical Information",
       title: "Medical Information",
       
       elements: [
        {
          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: 'Have you received a diagnosis of dementia or cognitive decline?',
          choices: 
          [
              "Yes",
              "No",
              "Not sure"
          ],
          required: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'comment',
        title: 'If yes, how long ago were you diagnosed?',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == Yes",
        required: false,
        textbox_rows: 3,
      },
      {
        type: 'comment',
        title: 'If yes, what type of dementia (or cognitive decline), if known?',
        name: 'DementiaType',
        visibleIf: "{CognDeclineDiagnosis} == Yes",
        required: false,
        textbox_rows: 3,
      },
      {
          type: 'dropdown',
          title: 'Do you have hearing loss?',
          choices: 
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
        type: 'dropdown',
        title: 'What type of hearing loss do you have?',
        choices: 
        [
            "Bilateral",
            "Unilateral",
            "Not sure"
        ],
        name: 'HearingLossType',
        visibleIf: "{HearingLoss} == Yes",
        required: false,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: 'What is your level of hearing loss?',
      choices: 
      [
          "Mild",
          "Moderate",
          "Severe",
          "Not sure"
      ],
      visibleIf: "{HearingLoss} == Yes",
      name: 'HearingLossLevel',
      required: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: 'Do you have any other health issues?',
      choices: 
      [
          "Yes",
          "No"
      ],
      name: 'OtherHealthIssues',
      required: true,
    },
    {
      type: 'comment',
      title: 'Please explain your health issues.',
      name: 'OtherHealthIssues',
      visibleIf: "{OtherHealthIssues} == Yes",
      required: false,
      textbox_rows: 3,
    },
       ]
     },
     {
       name: "Habits",
       title: "Habits",
       
       elements: [
        {
          type: 'dropdown',
          title: 'How many days do you exercise per week?',
          choices: 
          [
              "0", "1","2","3","4","5","6","7"
          ],
          name: 'ExerciseFrequency',
          required: true,
        },
        {
          type: 'dropdown',
          title: 'Have you exercised in the last 24 hours?',
          choices: 
          [
            "Yes",
            "No"
          ],
          name: 'Exercise24',
          required: true,
        },
        {
          type: 'dropdown',
          title: 'Do you smoke, or have you smoked in the past?',
          choices: 
          [
            "Currently smoke",
              "Have not smoked for more than 1 year",
              "Never",
              "Unknown"
          ],
          name: 'Smoke',
          required: true,
        },
        {
          type: 'dropdown',
          title: 'What year did you start smoking?',
          visibleIf: "{Smoke} == 'Currently smoke' or {Smoke} == 'Have not smoked for more than 1 year'",
          choicesMin: 1920,
          choicesMax: 2024,
          choicesStep:1,
          name: 'SmokeStart',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'What year did you quit smoking?',
          visibleIf: "{Smoke} == 'Have not smoked for more than 1 year'",
          choicesMin: 1920,
          choicesMax: 2024,
          choicesStep:1,
          name: 'SmokeQuit',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Approximately how many packs per day?',
          visibleIf: "{Smoke} == 'Currently smoke' or {Smoke} == 'Have not smoked for more than 1 year'",
          choices: ["0","0.5","1","2","3","4","5","6",">6"],
          name: 'SmokePacksPerDay',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Alcohol consumption',
          choices: 
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
     },
     {
      name: "Music Experience",
      title: "Music Experience",
      
      elements: [
          {
            type: 'dropdown',
            title: 'Have you engaged in music and movement classes before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'MusicMovement',
            required: true,
          },
          {
            type: 'comment',
            title: 'Please describe your previous  music and movement experience (what type of class and for how long).',
            name: 'MusicExperience',
            visibleIf: "{MusicMovement} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Have you participated in group music classess before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'GroupMusic',
            required: true,
          },
          {
            type: 'comment',
            title: 'Please describe your previous group music experience (what type of class and for how long).',
            name: 'GroupMusicExperience',
            visibleIf: "{GroupMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Have you been in a choir before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'Choir',
            required: true,
          },
          {
            type: 'comment',
            title: 'Please describe your previous choir experience (what type of choir and for how long).',
            name: 'ChoirExperience',
            visibleIf: "{Choir} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Do you have any other music experience (i.e. have you played a musical instrument at any time in your life on a regular basis)?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'OtherMusic',
            required: true,
          },
          {
            type: 'comment',
            title: 'Which instrument(s) did you play?',
            name: 'WhichInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: 'At what age did you start playing the instrument(s)?',
            name: 'AgeStartInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: 'For how long did you play this instrument (years)?',
            name: 'YearsPlayInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Do you still play the instrument(s)?',
            choices: 
            [
              "Yes",
              "No",
            ],
            visibleIf: "{OtherMusic} == Yes",
            name: 'StillPlayInstrument',
            required: true,
          },
      ]
    },
    {
      name: "Additional Comments",
      title: "Additional Comments",
      
      elements: [
        {
          type: 'comment',
          title: 'Do you have any additional comments or information that you think might be relevant to this study and/or music classes?',
          name: 'AdditionalCOmments',
          required: false,
          textbox_rows: 5,
        }
      ]
    }
   ]
 }


var EN_IntakeForm_MusicJSON = {}
EN_IntakeForm_MusicJSON.title = title;
EN_IntakeForm_MusicJSON.survey_JSON = json;
EN_IntakeForm_MusicJSON.shortTitle = shortTitle
EN_IntakeForm_MusicJSON.QuestionnaireType = 'Varied'
EN_IntakeForm_MusicJSON.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]
