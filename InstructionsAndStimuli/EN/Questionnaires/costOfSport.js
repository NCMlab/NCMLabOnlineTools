var title = "Demographic Questionnaire "
var shortTitle = 'Cost Of Sports'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
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
    {      
      name: "Section Ability",
      title: "Section Ability",
       elements: [
        {
          type: 'dropdown',
          title: "Ability Timing", 
          name: 'AB_Timing', 
          choices: [
                      'Congenital',
                      'Acquired',
                      'Able-body',
              ],
          showOtherItem: false,
          isRequired: true
        },

          {
          type: 'dropdown',
          title: "Classification of disabilities",
          name: 'AB_Class',
          choices: [
                      'Mobility',
                      'Vision',
                      'Hearing',
                      'Cognitive function'
              ],
          showOtherItem: false,
          isRequired: true
        },

        {
          type: "radiogroup",
          name: "AB_Loi",
          title: "How would you rate your ability to perform daily tasks?",
          isRequired: true,
          choices: [
                    { "value": 1, "text": "Total Assistance — Dependent, requires full help from others." },
                    { "value": 2, "text": "Maximal Assistance — Needs 75% help to complete tasks." },
                    { "value": 3, "text": "Moderate Assistance — Needs 50% help to complete tasks." },
                    { "value": 4, "text": "Minimal Assistance — Needs 25% help to complete tasks." },
                    { "value": 5, "text": "Supervision or Setup — Requires supervision or verbal cues." },
                    { "value": 6, "text": "Modified Independance — Uses assistive devices but no help needed." },
                    { "value": 7, "text": "Complete Independance — No assistance, performs safely." }
                  ]
                },

        {
          type: 'dropdown',
          title: "Does your ability require adaptive equipment in your daily life?", 
          name: 'AB_EQ_DL', 
          choices: [
                      'Yes',
                      'No',
                      
              ]
        },
        
        {
          type: "comment",
          name: "adaptive_equipment_explanation",
          title: "If yes, please explain:",
          visibleIf: "{AB_EQ_DL} = 'yes'",
          isRequired: false
        },


        {
          type: 'dropdown',
          title: "Does your ability require adaptive equipment to participate this sport?", 
          name: 'AB_EQ_DL_Ex', 
          choices: [
                      'Yes',
                      'No',
                      
              ]
        },
        
        {
          type: "comment",
          name: "adaptive_equipment_explanation",
          title: "If yes, please explain:",
          visibleIf: "{AB_EQ_DL_Ex} = 'yes'",
          isRequired: false
        },

        ]
    },

    // section 2

    {      
      name: "SportParticipation",
      title: "Section II: Sport  Participation Profile",
       elements: [
          {
           name: "SP_How",
           type: "text",
           title: "How did you get into this sport?",
           minLength: 10,
           isRequired: true
          },


           {
          type: 'dropdown',
          title: "Do you have classification and/or specialty and/or player position in this sport?", 
          name: 'SP_Class', 
          choices: [
                      'Yes',
                      'No',
                      'N/A',
                      
              ]
          },
        
        {
          type: "comment",
          name: "adaptive_equipment_explanation",
          title: "If yes, please explain:",
          visibleIf: "{SP_Class} = 'yes'",
          isRequired: true
        },


        

          {
          type: 'text',
          title: "What sport do you play the most?",
          name: 'PrimarySport',
          isRequired: true
        }
        ]
    },
   
    // section 3

    {      
      name: "CostActiveSportParticipation",
      title: "Section III: Cost of Active Sport Participation",
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
          isRequired: true
        },

          {
          type: 'text',
          title: "What sport do you play the most?",
          name: 'PrimarySport',
          isRequired: true
        }
        ]
    },

     

   ]
}

var EN_CostOfSport = {}
EN_CostOfSport.title = title;
EN_CostOfSport.survey_JSON = json;
EN_CostOfSport.shortTitle = shortTitle
EN_CostOfSport.QuestionnaireType = 'Varied'
