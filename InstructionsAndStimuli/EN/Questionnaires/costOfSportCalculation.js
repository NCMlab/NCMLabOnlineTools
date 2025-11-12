var title = "Demographic Questionnaire "
var shortTitle = 'Cost Of Sports Calculation test'  
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


          // question 10 

          
      {
        
      type: "matrixdropdown",
      name: "practice_table",
      title : "Detailed information about your participation last year — Practices",
      isRequired : true,
      columns: [
        { name: "SP_PR_1",        title : "Sept–Dec",      cellType: "text",  inputType : "number",  min: 0 },
        { name: "SP_PR_2", title : "Winter Holiday", cellType: "text",  inputType:  "number",  min: 0 },
        { name: "SP_PR_3",        title: "Jan–Mar",         cellType: "text",  inputType: "number",  min: 0 },
        {  name: "SP_PR_4",       title: "Apr–Jun",         cellType: "text",  inputType: "number",  min: 0 },
        {  name: "SP_PR_5",       title: "Jul–Aug",         cellType: "text",  inputType: "number",  min: 0 }
      ],
      rows : [
        { value: "freq",     text: "1. Number of practices per week (exclude games)" },
        { value: "net_time",  text: "2. Hours per practice, NET (excludes travel/changing/socializing)" },
        { value: "gross_time",  text: "3. Total time per practice, GROSS (includes travel/changing/socializing)" }
      ],
      cellErrorLocation: "bottom",
      verticalAlign: "middle"
    
    },


    {
      type: "expression",
      name: "SP_PR_Freq",
      title: "Total practices last year",
      displayStyle: "decimal",
      precision: 2,
      expression:
        "{practice_table.freq.SP_PR_1} * 16 + " +
        "{practice_table.freq.SP_PR_2} * 2  + " +
        "{practice_table.freq.SP_PR_3} * 12 + " +
        "{practice_table.freq.SP_PR_4} * 13 + " +
        "{practice_table.freq.SP_PR_5} * 9"
    },
    {
      type: "expression",
      name: "SP_PR_NT_Total",
      title: "Total NET hours (all periods)",
      displayStyle: "decimal",
      precision: 2,
      expression:
        "{practice_table.net_time.SP_PR_1} * 16 + " +
        "{practice_table.net_time.SP_PR_2} * 2  + " +
        "{practice_table.net_time.SP_PR_3} * 12 + " +
        "{practice_table.net_time.SP_PR_4} * 13 + " +
        "{practice_table.net_time.SP_PR_5} * 9"
    },
    {
      type: "expression",
      name: "SP_PR_GT_Total",
      title: "Total GROSS hours (all periods)",
      displayStyle: "decimal",
      precision: 2,
      expression:
        "{practice_table.gross_time.SP_PR_1} * 16 +"  +
        "{practice_table.gross_time.SP_PR_2} * 2  + " +
        "{practice_table.gross_time.SP_PR_3} * 12 + " +
        "{practice_table.gross_time.SP_PR_4} * 13 + " +
        "{practice_table.gross_time.SP_PR_5} * 9"
    },


    {
            type: "radiogroup",
            name: "Cost_Entr",
            title: " Do you pay entrance and/or rental fees (e.g., green fee, renting a tennis court, drop-in fee) to play your sport?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_Entr_$U",
          inputType:"number",
          title: "how much do you pay on average per usage?",
          visibleIf: "{Cost_Entr}= 1",
          isRequired: true
        },


         {
          type: "text",
          inputType:"number",
          name: "Cost_Entr_UY",
          title: "how many times per year?:",
          visibleIf: "{Cost_Entr}= 1",
          isRequired: true
        },


        {
      type: "expression",
      name: "Cost_Entr_$Y",
      title: "Estimated yearly entrance/rental cost",
      visibleIf: "{Cost_Entr} = 1",
      expression: "iif({Cost_Entr} = 1 && !isEmpty({Cost_Entr_$U}) && !isEmpty({Cost_Entr_UY}), {Cost_Entr_$U} * {Cost_Entr_UY}, 0)",
      displayStyle: "currency",
      currency: "CAD",
      precision: 2
        },

  






        ]
    },
   
    
    
     

   ]
}

var EN_CostOfSportCalculation = {}
EN_CostOfSportCalculation.title = title;
EN_CostOfSportCalculation.survey_JSON = json;
EN_CostOfSportCalculation.shortTitle = shortTitle
EN_CostOfSportCalculation.QuestionnaireType = 'Varied'
