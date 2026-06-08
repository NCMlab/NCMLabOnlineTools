// ENGLISH
var title = "Demographic Questionnaire "
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "top",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  showTitle: true,
  pages: 
  [

    {      
      name: "Demographic Information",
      title: "Demographic Information",
      elements: [
     
        {
          name: 'dem0101_gender',
          title: "Gender",
          type: 'dropdown',
          choices: [
            {value: 1, text:'Male'},
            {value: 2, text:'Female'},
          ],
          showOtherItem: true,
          isRequired: true
        },
        {
          name: "dem0102_age",
          title: "Age",
          type: "input",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 150,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: "dem0103_height",
          title: "Height (cm or inches)",
          type: "input",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 300,
          defaultValue: '',
          isRequired: true
        },
        {
          name: 'dem0103p1_heightU',
          title: "What units did you use for height?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Inches'},
            {value: 2, text: 'Centimeters'},
          ],
          showOtherItem: false,
          isRequired: true
        },
        {
          name: "dem0104_weight",
          title: "Weight (kg or lbs)",
          type: "input",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 1000,
          defaultValue: '',
          isRequired: true
        },
        {
          name: 'dem0104p1_weightU',
          title: "What units did you use for weight?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Pounds'},
            {value: 2, text: 'Kilograms'},
          ],
          showOtherItem: false,
          isRequired: true
        },
        {
          name: 'dem0105_edu',
          title: "What is the highest level of education you have completed?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'No formal education'},
            {value: 2, text: 'High school diploma or equivalent'},
            {value: 3, text: 'College or Trade school'},
            {value: 4, text: 'Bachelor\’s degree'},
            {value: 5, text: 'Master\’s degree'},
            {value: 6, text: 'Doctoral degree'}
          ],
          showOtherItem: true,
          isRequired: true
        },
        {
          name: 'dem0106_employ',
          title: "What is your employment status?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Employed full-time'},
            {value: 2, text: 'Employed part-time'},
            {value: 3, text: 'Retired'},
            {value: 4, text: 'Unemployed'}
          ],
          showOtherItem: true,
          isRequired: true
        },
        {
          name: 'dem0107_work',
          title: 'What type of work do you do (or did you do before retirement)?',
          type: 'textarea',
          rows: 2,
          isRequired: true,
          autoGrow: true
        },
        {
          name: 'dem0108_live',
          title: "Do you live alone or with others?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Alone'},
            {value: 2, text: 'With spouse / partner'},
            {value: 3, text: 'With family members'},
            {value: 4, text: 'With caregivers'},
            {value: 5, text: 'In assisted living facility'}
          ],
          showOtherItem: true,
          isRequired: true,
        },
        {
          name: 'dem0109_lang',
          title: 'What is your primary language(s)?',
          type: 'textarea',
          isRequired: true,
        },
        {
          name: "dem0110_langProb",
          title: "Are there any language or communication challenges you have?",
          type: "dropdown",
          choices: [
            {value: 1, text: "Yes"}, 
            {value: 2, text: "No"}
          ],
          isRequired: true,
        }, 
        {
          name: "dem0110p1_langProbDesc",
          title: "Please specify your language or communication challenges.",
          type: "textarea",
          visibleIf: "{dem0110_langProb} == Yes",
          maxLength: 500
        },
        // ======== DOES THIS QUESTION GET RECORDED????? ============
        {
          name: 'dem0111_ethn',
          title: "What is your ethnic background (you may select more than one)",
          type: "tagbox",
          choices: [
            'European (e.g., white)',
            'Asian (e.g., Chinese, Japanese, Korean, South-east Asian)',
            'East Indian, Pakistani',
            'African-American/Black/Caribbean',
            'Hispanic',
            'Middle-Eastern',
            'First Nations, Métis, Inuit',
          ],
          description: "Please select all that apply.",
          isRequired: true
        },
        {
          name: 'dem0112_marital',
          title: 'What is your marital status?',
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Single'},
            {value: 2, text: 'Married'},
            {value: 3, text: 'Divorced'},
            {value: 4, text: 'Widowed'}
          ],
          showOtherItem: true,                    
          isRequired: true,
        },
        {
          name: 'dem0113_currNeed',
          title: 'Which of the following statements best describes the extent to which your needs are met currently?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Food, housing, clothing and medical needs are met - you can afford luxuries/there is money left over at the end of the month"},
            {value: 2, text: "Food, housing, clothing and medical needs are met - you can not afford luxuries"},
            {value: 3, text: "One of the basic needs (food, housing, clothing or medical care) are not met"},
            {value: 4, text: "Two or more of the basic needs are not met"},
            {value: 99, text: "I don't know"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0114_pastNeed',
          title: 'Which of the following statements best describes the extent to which your needs were met during the majority of your adult life?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Food, housing, clothing and medical needs were met - you could afford luxuries"},
            {value: 2, text: "Food, housing, clothing and medical needs were met - you could not afford luxuries"},
            {value: 3, text: "One of the basic needs (food, housing, clothing or medical care) were not met"},
            {value: 4, text: "Two or more of the basic needs were not met"},
            {value: 99, text: "I don't know"}
          ],
          isRequired: true,
        }
      ]
    },

    {
      name: "Medical Information",
      title: "Medical Information",
      elements: [
        {
          name: 'dem0201_CogDecDiag',
          title: 'Have you received a diagnosis of dementia or cognitive decline?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
            {value: 3, text: "Not sure"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0202_DemTime',
          title: 'If yes, how long ago were you diagnosed?',
          type: 'textarea',
          visibleIf: "{dem0201_CogDecDiag} == Yes",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0203_DemType',
          title: 'If yes, what type of dementia (or cognitive decline), if known?',
          type: 'textarea',
          visibleIf: "{dem0201_CogDecDiag} == Yes",
          required: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0204_HearLoss',
          title: 'Do you have hearing loss?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
            {value: 3, text: "Not sure"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0204p1_HearType',
          title: 'What type of hearing loss do you have?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Bilateral"},
            {value: 2, text: "Unilateral"},
            {value: 99, text: "Not sure"}
          ],
          visibleIf: "{dem0204_HearLoss} == Yes",
          isRequired: false,
        },
        {
          name: 'dem0204p2_HearLevel',
          title: 'What is your level of hearing loss?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Mild"},
            {value: 2, text: "Moderate"},
            {value: 3, text: "Severe"},
            {value: 99, text: "Not sure"}
          ],
          visibleIf: "{dem0204_HearLoss} == Yes",
          isRequired: false,
        },
        {
          name: 'dem0205_OtherHealth',
          title: 'Do you have any other health issues?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0205p1_OtherHealthDesc',
          title: 'Please explain your health issues.',
          type: 'textarea',
          visibleIf: "{dem0205_OtherHealth} == Yes",
          isRequired: false,
          textbox_rows: 3,
        },
      ]
    },

    {
      name: "Habits",
      title: "Habits",
      elements: [
        {
          name: 'dem0301_ExeFreq',
          title: 'How many days do you exercise per week?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "0"}, 
            {value: 1, text: "1"},
            {value: 1, text: "2"},
            {value: 1, text: "3"},
            {value: 1, text: "4"},
            {value: 1, text: "5"},
            {value: 1, text: "6"},
            {value: 1, text: "7"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0302_Exe24',
          title: 'Have you exercised in the last 24 hours?',
          type: 'dropdown',
          choices: [
            {value: 1, text:"Yes"},
            {value: 2, text: "No"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0303_Smoke',
          title: 'Do you smoke, or have you smoked in the past?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Currently smoke"},
            {value: 2, text: "Have not smoked for more than 1 year"},
            {value: 3, text: "Never"},
            {value: 4, text: "Unknown"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0304p1_SmokeStart',
          title: 'What year did you start smoking?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == Currently smoke; {dem0303_Smoke} == Have not smoked for more than 1 year",
          choicesMin: 1920,
          choicesMax: 2025,
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0304p2_SmokeQuit',
          title: 'What year did you quit smoking?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == Have not smoked for more than 1 year",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0304p3_SmokePacks',
          title: 'Approximately how many packs per day?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == Currently smoke; {dem0303_Smoke} == Have not smoked for more than 1 year",
          choices: [
            {value: 0, text: "0"},
            {value: 0.5, text: "0.5"},
            {value: 1, text: "1"},
            {value: 2, text: "2"},
            {value: 3, text: "3"},
            {value: 4, text: "4"},
            {value: 5, text: "5"},
            {value: 6, text: "6"},
            {value: 7, text: "&gt;6"}
          ],
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0305_Alc',
          title: 'Alcohol consumption',
          type: 'dropdown',
          choices: [
            {value: 0, text: "None"},
            {value: 1, text: "Less than 2 drinks per day"},
            {value: 2, text: "2 to 4 drinks per day"},
            {value: 3, text: "More than 4 drinks per day"}
          ],
          isRequired: true,
        },
      ]
    },

    {
      name: "Music Experience",
      title: "Music Experience",
      elements: [
        {
          name: 'dem0401_MusCls',
          title: 'Have you engaged in music and movement classes before?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
          ],
          isRequired: true,
        },
        {
          name: 'dem0401p1_MusClsExp',
          title: 'Please describe your previous music and movement experience (what type of class and for how long).',
          type: 'textarea',
          visibleIf: "{dem0401_MusCls} == Yes",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0402_MusGrp',
          title: 'Have you participated in group music classes before?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
          ],
          isRequired: true,
        },
        {
          name: 'dem0402p1_MusGrpExp',
          title: 'Please describe your previous group music experience (what type of class and for how long).',
          type: 'textarea',
          visibleIf: "{dem0402_MusGrp} == Yes",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0403_MusChr',
          title: 'Have you been in a choir before?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
          ],
          isRequired: true,
        },
        {
          name: 'dem0403p1_MusChrExp',
          title: 'Please describe your previous choir experience (what type of choir and for how long).',
          type: 'textarea',
          visibleIf: "{dem0403_MusChr} == Yes",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0404_MusOth',
          title: 'Do you have any other music experience (i.e. have you played a musical instrument at any time in your life on a regular basis)?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
          ],
          isRequired: true,
        },
        {
          name: 'dem0405p1_MusOthInst',
          title: 'Which instrument(s) did you play?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == Yes",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p2_MusOthInsAge',
          title: 'At what age did you start playing the instrument(s)?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == Yes",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p3_MusOthInsYrs',
          title: 'For how long did you play this instrument (years)?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == Yes",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p4_MusOthCur',
          title: 'Do you still play the instrument(s)?',
          type: 'dropdown',
          visibleIf: "{dem0404_MusOth} == Yes",
          choices: [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
          ],
          isRequired: true,
        },
      ]
    },

    {
      name: "Additional Comments",
      title: "Additional Comments",
      elements: [
        {
          name: 'dem0501_Comments',
          title: 'Do you have any additional comments or information that you think might be relevant to this study and/or music classes?',
          type: 'textarea',
          isRequired: false,
          textbox_rows: 5,
        }
      ]
    }
      
   ]
}

var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = title;
EN_IntakeForm_Music.survey_JSON = json;
EN_IntakeForm_Music.shortTitle = shortTitle
EN_IntakeForm_Music.QuestionnaireType = 'Varied'
