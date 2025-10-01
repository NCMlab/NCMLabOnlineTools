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
          inputType:'number',
          title: "How many years have you played/participated in this sport? ",
          name: 'SP_Years',
          min: 0,
          max: 100,
         
         isRequired: true
        },

        {
          type: "radiogroup",
          name: "SP_Context",
          title: "Indicate the context of your participation?",
          isRequired: true,
          choices: [
                    { "value": 1, "text": "Non-organized"},
                    { "value": 2, "text": "Organized"},
                    { "value": 3, "text": "Both"},
                    { "value": 4, "text": "Other"},
          
                  ]
                },

        {
          type: "comment",
          name: "SP_Context_Ex",
          title: "If other, please explain:",
          visibleIf: "{SP_Context}= 4",
          isRequired: true
        },


        {
          type: "radiogroup",
          name: "SP_Level",
          title: "Indicate your level of participation: ",
          isRequired: true,
          choices: [
                    { "value": 1, "text": "Recreational Only"},
                    { "value": 2, "text": "Mainly recreational, but also competitive"},
                    { "value": 3, "text": "Mainly competitive, but also recreational"},
                    { "value": 4, "text": "Competitive only"},
                    { "value": 5, "text": "Other"},
          
                  ]
                },

          {
          type: "comment",
          name: "SP_Level_Ex",
          title: "If other, please explain:",
          visibleIf: "{SP_Level}=5",
          isRequired: true
        },

        {
           name: "SP_Level_Current",
           type: "text",
           title: "What is your current level of participation?",
           minLength: 10,
           isRequired: true
          },

           {
           name: "SP_Level_Highest",
           type: "text",
           title: "What was your highest level in this sport?",
           minLength: 10,
           isRequired: true
          },

           {
            type: "radiogroup",
            name: "SP_Fac",
            title: "The sports facility you mainly play/practice is: ",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "No sports facility"},
                    { "value": 2, "text": "A public facility"},
                    { "value": 3, "text": "A private facility"},
                    { "value": 4, "text": "Other"},
                    
          
                  ]
                },

          {
          type: "comment",
          name: "SP_Fac_Ex",
          title: "If other, please explain:",
          visibleIf: "{SP_Fac}= 4",
          isRequired: true
        },

         {
           name: "SP_Fac_PC",
           type: "text",
           title: "Can you provide the postal code or name of the city of the facility where you play/practice most frequently?",
           minLength: 6,
           isRequired: true
          },





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
            type: "radiogroup",
            name: "Cost_Gen",
            title: "  How much do you think you spend annually on your sport participation?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": " <  100.00 CND/yr "},
                    { "value": 2, "text": " 100.00 < 250.00 CND/yr"},
                    { "value": 3, "text": "250.00 < 500.00 CND/yr"},
                    { "value": 4, "text": "500.00 < 750.00 CND/yr"},
                    { "value": 5, "text": "750.00 < 1000.00 CND/yr"},
                    { "value": 6, "text": "1000.00 < 1500.00 CND/yr"},
                    { "value": 7, "text": "1500.00 < 3000.00 CND/yr"},
                    { "value": 8, "text": "3000.00 < 5000.00 CND/yr"},
                    { "value": 9, "text": "5000.00 < 10000.00 CND/yr"},
                    { "value": 10, "text": "> 10,000.00 CND/yr"},
                    
          
                  ]
                },


    


        {
            type: "radiogroup",
            name: "Cost_Memb",
            title: "Do you pay a membership fee to play/practice your sport",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "comment",
          name: "Cost_Memb_$Y",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_Memb}= 1",
          isRequired: true
        },



        
        {
            type: "radiogroup",
            name: "Cost_Lic",
            title: " Do you pay a license fee to play/practice your sport (if not included in the membership fee)? (pays to a sport governing body, league, or federation to be officially registered and eligible to participate in organized competition)",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "comment",
          name: "Cost_Lic_$Y",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_Lic}= 1",
          isRequired: true
        },



          {
            type: "radiogroup",
            name: "Cost_PF",
            title: " Did/do you pay any other program fees to play/practice your sport (if not included in the previous questions)?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "comment",
          name: "Cost_PF_$Y",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_PF}= 1",
          isRequired: true
        },




        {
            type: "radiogroup",
            name: "Cost_COMP",
            title: " Do you pay fees to participate in tournaments or competitions (if nor included in the membership fee)?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "comment",
          name: "Cost_COMP_$Y",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_COMP}= 1",
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
