
// ENGLISH
var title = "Demographic Questionnaire "
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "bot",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showTitle: true,
   showCompletedPage: false,
   pages: 
   [
    
    /*{
      name: "Name",
      title: "Name",
      
      elements: [
        {
          type: 'comment',
          title: 'Enter first name and initial of last name',
          name: 'Name',
          required: true,
          textbox_rows: 1,
        }
      ]
    },*/
    
     /*{
       name: "Medical Information",
       title: "Medical Information",
       
       elements: [
        {
          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: 'Have you received a diagnosis of dementia or cognitive decline?',
          choices: 
          [
              {value: 1, text: "Yes"},
              {value: 2, text: "No"},
              {value: 3, text: "Not sure"}
          ],
          isRequired: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'textarea',
        title: 'If yes, how long ago were you diagnosed?',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == Yes",
        isRequired: true,
        textbox_rows: 3,
      },
      {
        type: 'textarea',
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
            {value: 1, text: "Yes"},
            {value: 2, text: "No"},
            {value: 3, text: "Not sure"}
        ],
        name: 'HearingLoss',
        isRequired: true,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'dropdown',
        title: 'What type of hearing loss do you have?',
        choices: 
        [
            {value: 1, text: "Bilateral"},
            {value: 2, text: "Unilateral"},
            {value: 3, text: "Not sure"}
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
          {value: 1, text: "Mild"},
          {value: 2, text: "Moderate"},
          {value: 3, text: "Severe"},
          {value: 99, text: "Not sure"}
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
          {value: 1, text: "Yes"},
          {value: 2, text: "No"}
      ],
      name: 'OtherHealthIssues',
      isRequired: true,
    },
    {
      type: 'textarea',
      title: 'Please explain your health issues.',
      name: 'OtherHealthIssuesDesc',
      visibleIf: "{OtherHealthIssues} == Yes",
      required: false,
      textbox_rows: 3,
    },
       ]
     },*/
     {
       name: "Habits",
       title: "Habits",
       
       elements: [
        {
          type: 'dropdown',
          title: "Gender", 
          name: 'Gender', 
          choices: [
                      {value: 1, text:'Male'},
                      {value: 2, text:'Female'},
              ],
          showOtherItem: true,
          isRequired: true
        },        
          {
          name: "Age",
          type: "input",
          title: "Age",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 150,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: "Height",
          type: "input",
          title: "Height (cm or inches)",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 300,
          defaultValue: '',
          isRequired: true
        },
        
        {

          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: 'Have you received a diagnosis of dementia or cognitive decline?',
          choices: 
          [
              {value: 1, text: "Yes"},
              {value: 2, text: "No"},
              {value: 3, text: "Not sure"}
          ],
          isRequired: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'textarea',
        title: 'If yes, how long ago were you diagnosed?',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == Yes",
        isRequired: true,
        textbox_rows: 3,
      },
        {
          type: 'dropdown',
          title: 'How many days do you exercise per week?',
          choices: 
          [
              {value: 1, text: "0"}, 
              {value: 2, text: "1"},
              {value: 3, text: "2"},
              {value: 4, text: "3"},
              {value: 5, text: "4"},
              {value: 6, text: "5"},
              {value: 7, text: "6"},
              {value: 8, text: "7"}
          ],
          name: 'ExerciseFrequency',
          isRequired: true,
        },/*
        {
          type: 'dropdown',
          title: 'Have you exercised in the last 24 hours?',
          choices: 
          [
            {value: 1, text: "Yes"},
            {value: 2, text: "No"}
          ],
          name: 'Exercise24',
          isRequired: true,
        },*/
        /*{
          type: 'dropdown',
          name: 'Smoke',
          title: 'Do you smoke, or have you smoked in the past?',
          choices: 
          [
            {value: 1, text: "Currently Smoke"},
            {value: 2, text: "Have not smoked for more than 1 year"},
            {value: 3, text: "Never"},
            {value: 4, text: "Unknown"}
          ],
          isRequired: true,
        },


        {
          type: 'dropdown',
          title: 'What year did you start smoking?',
          name: 'SmokeStart',
          visibleIf: "{Smoke} == Currently Smoke; {Smoke} == Have not smoked for more than 1 year",
          //visibleIf: "{Smoke} == CurrentlySmoke",          
          choicesMin: 1920,
          choicesMax: 2025,
          //choicesStep: 1,
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'What year did you stop smoking?',
          name: 'SmokeStop',
          visibleIf: "{Smoke} == Have not smoked for more than 1 year",
          //visibleIf: "{Smoke} == CurrentlySmoke",          
          choicesMin: 1920,
          choicesMax: 2025,
          //choicesStep: 1,
          isRequired: true,
          input_type: "number"
        },
       
        {
          type: 'dropdown',
          title: 'Alcohol consumption',
          choices: 
          [
              {value: 1, text: "None"},
              {value: 2, text: "Less than 2 drinks per day"},
              {value: 3, text: "2 to 4 drinks per day"},
              {value: 4, text: "More than 4 drinks per day"}
          ],
          name: 'Alcohol',
          isRequired: true,
        },
      */
  
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
              {value: 1, text: "Yes"},
              {value: 2, text: "No"},
            ],
            name: 'MusicMovement',
            isRequired: true,
          },
        ]}
          /*
          {
            type: 'textarea',
            title: 'Please describe your previous music and movement experience (what type of class and for how long).',
            name: 'MusicExperience',
            visibleIf: "{MusicMovement} == Yes",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Have you participated in group music classes before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'GroupMusic',
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Please describe your previous group music experience (what type of class and for how long).',
            name: 'GroupMusicExperience',
            visibleIf: "{GroupMusic} == Yes",
            isRequired: true,
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
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Please describe your previous choir experience (what type of choir and for how long).',
            name: 'ChoirExperience',
            visibleIf: "{Choir} == Yes",
            isRequired: true,
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
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Which instrument(s) did you play?',
            name: 'WhichInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'textarea',
            title: 'At what age did you start playing the instrument(s)?',
            name: 'AgeStartInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'textarea',
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
          type: 'textarea',
          title: 'Do you have any additional comments or information that you think might be relevant to this study and/or music classes?',
          name: 'AdditionalComments',
          required: false,
          textbox_rows: 5,
        }
      ]
    }
      */
   ]
 }


var EN_IntakeForm_MusicJSONSHORT = {}
EN_IntakeForm_MusicJSONSHORT.title = title;
EN_IntakeForm_MusicJSONSHORT.survey_JSON = json;
EN_IntakeForm_MusicJSONSHORT.shortTitle = shortTitle
EN_IntakeForm_MusicJSONSHORT.QuestionnaireType = 'Varied'
