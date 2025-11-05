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
            type: "radiogroup",
            name: "Cost_Coach",
            title: " Do you pay for lessons, guidance or coaching?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_Coach_$U",
          inputType:"number",
          title: "how much do you pay on average per usage?",
          visibleIf: "{Cost_Coach}= 1",
          isRequired: true
        },


         {
          type: "text",
          inputType:"number",
          name: "Cost_Coach_UY",
          title: "how many times per year?:",
          visibleIf: "{Cost_Coach}= 1",
          isRequired: true
        },






        
         {
            type: "radiogroup",
            name: "Cost_Clini",
            title: " Do you participate in clinics regarding your sport practice?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_Clinic_$U",
          inputType:"number",
          title: "how much do you pay on average per usage?",
          visibleIf: "{Cost_Clinic}= 1",
          isRequired: true
        },


         {
          type: "text",
          inputType:"number",
          name: "Cost_Clinic_UY",
          title: "how many times per year?:",
          visibleIf: "{Cost_Clinic}= 1",
          isRequired: true
        },



        // question 10 to adjust
        



     /* ----------------- (a) Sports apparel ----------------- */
    {
      type: "matrixdynamic",
      name: "SP_APP",
      title: "a) Sports apparel (e.g., shoes, pants, shirts …)",
      addRowText: "Add apparel item",
      removeRowText: "Remove",
      minRowCount: 0,
       rowCount: 0,
      showFooter: true,
      columns: [
        { name: "SP_APP_Describe",  title: "Describe item", cellType: "text", isRequired: true, width: "35%" },
        { name: "SP_APP_Quantity",   title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: true, width: "10%" },
        { name: "SP_APP_Usage", title: "Months/yr usage", cellType: "text", inputType: "number", min: 0, max: 12, placeholder: "e.g. 6", width: "15%" },
        { name: "years",  title: "Years of use", cellType: "text", inputType: "number", min: 1, isRequired: true, width: "10%" },
        { name: "SP_APP_$U",  title: "Price per unit (C$)", cellType: "text", inputType: "number", min: 0, isRequired: true, width: "15%" },
        {
          name: "writeoff",
          title: "Write-off / year (C$)",
          cellType: "expression",
          expression: "{row.qty} * {row.price} / {row.years}",
          displayStyle: "currency",
          currency: "CAD",
          totalType: "sum",
          totalDisplayStyle: "currency",
          currencyDisplay: "code",
          width: "15%"
        }
      ],
      footerText: "Sub-total (a)"
    },

    /* --------------- (b) Sports equipment ----------------- */
    {
      type: "matrixdynamic",
      name: "SP_Equip",
      title: "b) Sports equipment (e.g., skates, golf clubs, bags …)",
      addRowText: "Add equipment item",
      removeRowText: "Remove",
      minRowCount: 0,
      rowCount: 0,
      showFooter: true,
      columns: [
        { name: "SP_Equip_Describe",  title: "Describe item", cellType: "text", isRequired: true, width: "35%" },
        { name: "SP_Equip_Quantity",   title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: true, width: "10%" },
        { name: "SP_Equip_Usage", title: "Months/yr usage", cellType: "text", inputType: "number", min: 0, max: 12, placeholder: "e.g. 6", width: "15%" },
        { name: "years",  title: "Years of use", cellType: "text", inputType: "number", min: 1, isRequired: true, width: "10%" },
        { name: "SP_Equip_$U",  title: "Price per unit (C$)", cellType: "text", inputType: "number", min: 0, isRequired: true, width: "15%" },
        {
           name: "writeoff",
          title: "Write-off / year (C$)",
          cellType: "expression",
          expression: "{row.qty} * {row.price} / {row.years}",
          displayStyle: "currency",
          currency: "CAD",
          totalType: "sum",
          totalDisplayStyle: "currency",
          currencyDisplay: "code",
          width: "15%"
        }
      ],
      footerText: "Sub-total (b)"
    },

    /*  --------- c) Additional equipment -----------------   */


     {
      type: "matrixdynamic",
      name: "SP_AddEquip",
      title: "C) additional equipment, ex.towels ..",
      addRowText: "Add equipment item",
      removeRowText: "Remove",
      minRowCount: 0,
      rowCount: 0,
      showFooter: true,
      columns: [
        { name: "SP_AddEquip_Describe",  title: "Describe item", cellType: "text", isRequired: true, width: "35%" },
        { name: "SP_AddEquip_Quantity",   title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: true, width: "10%" },
        { name: "SP_AddEquip_Usage", title: "Months/yr usage", cellType: "text", inputType: "number", min: 0, max: 12, placeholder: "e.g. 6", width: "15%" },
        { name: "years",  title: "Years of use", cellType: "text", inputType: "number", min: 1, isRequired: true, width: "10%" },
        { name: "SP_AddEquip_$U",  title: "Price per unit (C$)", cellType: "text", inputType: "number", min: 0, isRequired: true, width: "15%" },
        {
           name: "writeoff",
          title: "Write-off / year (C$)",
          cellType: "expression",
          expression: "{row.qty} * {row.price} / {row.years}",
          displayStyle: "currency",
          currency: "CAD",
          totalType: "sum",
          totalDisplayStyle: "currency",
          currencyDisplay: "code",
          width: "15%"
        }
      ],
      footerText: "Sub-total (b)"
    },








        // question 11

        
      {
      type: "checkbox",
      name: "sports_equipment_sources",
      title: "Where do you usually buy your sports apparel and/or equipment? (Check all that apply)",
      isRequired: true,
      choices: [
        { "value": 1, "text": "In a general store, not specialized in sport (ex. Sears, The Bay, Zellers, Walmart, ...)" },
        { "value": 2, "text": "In a general sports store (ex. Sport Check, National Sport, Sports Mart, ...)" },
        { "value": 3, "text": "In a privately owned sports shop" },
        { "value": 4, "text": "In a shop specialized in your specific sport (ex. golf shop)" },
        { "value": 5, "text": "Buy from individual people or second hand" },
        { "value": 6, "text": "Wholesale" },
        { "value": 7, "text": "Mail order company, E-Bay" },
        { "value": 8, "text": "Other (please describe)" }
      ],
      colCount: 2
      },

      {
      type: "comment",
      name: "sports_equipment_sources_other",
      title: "If you selected 'Other (please describe)', please specify:",
      visibleIf: "{sports_equipment_sources} contains 8"
      },




      // question 12 


        {
            type: "radiogroup",
            name: "EQ_Rent",
            title: " Do you rent sports apparel or sports equipment?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "EQ_Rent_Ex",
          title: "If yes, describe: ",
          visibleIf: "{EQ_Rent}= 1",
          isRequired: true
        },



         {
          type: "text",
          name: "EQ_Rent_$U",
          inputType:"number",
          title: "How much do you spend on average per rental?",
          visibleIf: "{EQ_Rent}= 1",
          isRequired: true
        },


         {
          type: "text",
          name: "EQ_Rent_UY",
          inputType:"number",
          title: "How often do you rent per year?",
          visibleIf: "{EQ_Rent}= 1",
          isRequired: true
        },


        // question 13



        
        {
            type: "radiogroup",
            name: "EQ_Maint",
            title: "Do you have maintenance costs for your sports apparel or equipment? (maintenance, repair, dry cleaning, …)",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "EQ_Maint_Ex",
          title: "If yes, describe: ",
          visibleIf: "{EQ_Maint}= 1",
          isRequired: true
        },



         {
          type: "text",
          name: "EQ_Maint_$U",
          inputType:"number",
          title: "How much do you spend on average per rental?",
          visibleIf: "{EQ_Maint}= 1",
          isRequired: true
        },


         {
          type: "text",
          name: "EQ_Maint_UY",
          inputType:"number",
          title: "How often do you rent per year?",
          visibleIf: "{EQ_Maint}= 1",
          isRequired: true
        },


        // question 14


        {
      type: "checkbox",
      name: "TR_Pr",
      title: "Where do you usually buy your sports apparel and/or equipment? (Check all that apply)",
      isRequired: true,
      choices: [
        { "value": 1, "text": "By foot" },
        { "value": 2, "text": "By Bike" },
        { "value": 3, "text": "By motorbike" },
        { "value": 4, "text": "By family car" },
        { "value": 5, "text": "Public Transportation" },
        { "value": 6, "text": "Have a ride with others/ carpooling" },
        { "value": 7, "text": "Taxi/Private bus" },
        { "value": 8, "text": "Special transportation" },
        { "value": 9, "text": "Other" }
      ],
      showOtherItem: false,
      colCount: 2
      },



      {
            type: "radiogroup",
            name: "TR_Pr_Spec",
            title: "Does your level of ability require special transportation?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },


           {
          type: "text",
          name: "TP_PR_Ex",
          title: "If yes, describe: ",
          visibleIf: "{TP_Pr_Spec}= 1",
          isRequired: true
        },


        //if by car


        
         {
          type: "text",
          name: "TR_Pr_Car_kmU",
          inputType:"number",
          title: "How many kilometers do you drive, back and forth per practice?",
          visibleIf: "{TR_Pr} contains 4",
          isRequired: true
        },


        {
          type: "text",
          name: "TR_Pr_Car_%",
          inputType:"number",
          title: " How often (in %) do you use the car for practise?",
          visibleIf: "{TR_Pr} contains 4",
          isRequired: true
        },


       
         {
          type: "text",
          name: "TR_Pr_Park_$Y",
          inputType:"number",
          title: " How much do you spend on parking costs per year (in total) to participate in your sport?",
          visibleIf: "{TR_Pr} contains 4",
          isRequired: true
        },

        // if by public transportation

    

         {
          type: "text",
          name: "TR_Pr_Pub_$U",
          inputType:"number",
          title: " How much do you spend back and forth per practice?",
          visibleIf: "{TR_Pr} contains 5",
          isRequired: true
        },

        {
          type: "slider",
          name: "TR_Pr_Pub_%",
          inputType:"number",
          title: "How often (in %) do you use the public transport for practise?",
          description: "Min = 0 | Max = 100 | Step = 1",
          visibleIf: "{TR_Pr} contains 5",
          isRequired: true
        },



            
               
              // 14.b

        
            {
      type: "checkbox",
      name: "TR_Comp",
      title: "For one-day competitions/championships without overnight stay: Which method of transportation do you use? (check all that apply)",
      isRequired: true,
      choices: [
        { "value": 1, "text": "By foot" },
        { "value": 2, "text": "By Bike" },
        { "value": 3, "text": "By motorbike" },
        { "value": 4, "text": "By family car" },
        { "value": 5, "text": "Public Transportation" },
        { "value": 6, "text": "Have a ride with others/ carpooling" },
        { "value": 7, "text": "Taxi/Private bus" },
        { "value": 8, "text": "Special transportation" },
        { "value": 9, "text": "Other" }
      ],
      showOtherItem: false,
      colCount: 2
      },


      {
            type: "radiogroup",
            name: "TR_Comp_Spec",
            title: "Does your level of ability require special transportation?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },


           {
          type: "text",
          name: "TP_Comp_Ex",
          title: "If yes, describe: ",
          visibleIf: "{TP_Comp_Spec}= 1",
          isRequired: true
        },


        //if by car

        {
          type: "text",
          name: "TR_Comp_Car_kmU",
          inputType:"number",
          title: "How many kilometers do you drive, back and forth per one-day competition/championship without overnight stay?",
          visibleIf: "{TR_Comp} contains 4",
          isRequired: true
        },


        {
          type: "text",
          name: "TR_Comp_Car_%",
          inputType:"number",
          title: " How often (in %) do you use the car for one-day competition/championship without overnight stay?",
          visibleIf: "{TR_Comp} contains 4",
          isRequired: true
        },


       
         {
          type: "slider",
          name: "TR_Comp_Park_$Y",
          inputType:"number",
          title: " How much do you spend on parking costs per year (in total) for one-day competition/championship without overnight stay?",
          description: "Min = 0 | Max = 100 | Step = 1",
          visibleIf: "{TR_Pr} contains 4",
          isRequired: true
        },


        // if by public transportation


         {
          type: "text",
          name: "TR_Comp_Pub_$U",
          inputType:"number",
          title: " How much do you spend back and forth per one-day competition/championship without overnight stay?",
          visibleIf: "{TR_Comp} contains 5",
          isRequired: true
        },

        {
          type: "slider",
          name: "TR_Comp_Pub_%",
          inputType:"number",
          title: "How often (in %) do you use the public transport for one-day competition/championship without overnight stay?",
          description: "Min = 0 | Max = 100 | Step = 1",
          visibleIf: "{TR_Comp} contains 5",
          isRequired: true
        },


        // Special transportation

           {
            type: "radiogroup",
            name: "TR_Comp_Spec",
            title: "Do you have other expenditures related to transportation (e.g., taxi, bus, carpooling), SPECIAL TRANSPORTATION COSTS?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },


           {
          type: "text",
          name: "TP_Comp_Ex",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{TP_Comp_Spec}= 1",
          isRequired: true
        },





        // 14.C


          {
          type: "text",
          name: "Cost_O_with_$U",
          inputType:"number",
          title: " ONE-DAY COMPETITIONS WITH OVERNIGHT STAY: How much do you spend on average per ONE-DAY COMPETITION WITH OVERNIGHT STAY?",
          isRequired: true
        },



          {
          type: "text",
          name: "Cost_WE_$U",
          inputType:"number",
          title: " WEEK-END COMPETITIONS: How much do you spend on average per WEEK-END COMPETITION?",
          isRequired: true
        },



        
          {
          type: "text",
          name: "Cost_Multi_$U",
          inputType:"number",
          title: " MULTI-DAY COMPETITIONS: How much do you spend on average per MULTI-DAY COMPETION?",
          isRequired: true
        },






        //14.d


        
           {
            type: "radiogroup",
            name: "Cost_Vaca",
            title: "Do you go on vacations to primarily play/participate in your sport? (i.e. the first reason for the travel is to play/participate in your sport)",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },


           {
          type: "text",
          name: "Cost_Vaca_EX",
          title: "If yes, describe?: ",
          visibleIf: "{Cost_Vaca}= 1",
          isRequired: true
        },

         {
          type: "text",
          name: "Cost_Vaca_$U",
          inputType: "number",
          title: "If yes, How much do you spend on average per vacation (include ALL expenditure for travel, lodging, meals, rental of equipment or facilities, etc. not previously included)? ",
          visibleIf: "{Cost_Vaca}= 1",
          isRequired: true
        },


         {
          type: "text",
          name: "Cost_Vaca_UY",
          inputType:"number",
          title: "If yes,how many vacations per year?: ",
          visibleIf: "{Cost_Vaca}= 1",
          isRequired: true
        },
        
      



        



              // question 15


              {
            type: "radiogroup",
            name: "SOC_F&B",
            title: "Do you purchase drinks or food before, during, or after your participation (consider practices, one-day games and competitions)?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "Never"},
                    { "value": 1, "text": "Rarely"},
                    { "value": 2, "text": "Sometimes"},
                    { "value": 3, "text": "Often"},
                    { "value": 4, "text": "Always"}
                    
                  ]
                },


                  {
          type: "text",
          name: "SOC_F&B_$U",
          inputType: "number",
          title: "If yes, how much do you spend on average each time? ",
          visibleIf: "{SOC_F&B} >= 1",
          isRequired: true
        },



        // question 16


        {
            type: "radiogroup",
            name: "SOC_Club",
            title: " Do you participate in club activities (ex. fundraisers, diner, …)?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "Never"},
                    { "value": 1, "text": "Rarely"},
                    { "value": 2, "text": "Sometimes"},
                    { "value": 3, "text": "Often"},
                    { "value": 4, "text": "Always"}
                    
                  ]
                },


                  {
          type: "text",
          name: "SOC_Club_$Y",
          inputType: "number",
          title: "If yes, how much do you spend per year? ",
          visibleIf: "{SOC_Club} >= 1",
          isRequired: true
        },



        // Other indirect costs

        // question 17

         {
            type: "radiogroup",
            name: "OIC_MED",
            title: "Do you have extra medical costs and/or care costs (e.g., physiotherapy, medication, …) related to you sports participation?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_MED_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_MED}= 1",
          isRequired: true
        },


        // question 18

           {
            type: "radiogroup",
            name: "OIC_Body",
            title: "Do you have extra costs to take care of your body (e.g., body crème, …) or to buy special nutrition (e.g., supplements, …) related to your sports participation?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_Body_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_Body}= 1",
          isRequired: true
        },


          // question 19

            {
            type: "radiogroup",
            name: "OIC_Insur",
            title: "Do you have extra insurance costs related to your sports participation (if not already included in the membership fee)?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_Insur_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_Insur}= 1",
          isRequired: true
        },

        
        // question 20

             {
            type: "radiogroup",
            name: "OIC_BPsitting",
            title: "Do you have extra costs for baby-sitting/pet sitting related to your sports participation?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_BPsitting_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_BPsitting}= 1",
          isRequired: true
        },

        // question 21


               {
            type: "radiogroup",
            name: "OIC_DOC",
            title: "Do you buy specific documentation related to your sports participation (ex. online subscriptions, eBooks, newspapers, books, magazines, …)?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_DOC_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_DOC}= 1",
          isRequired: true
        },


        // Question 22

             {
            type: "radiogroup",
            name: "OIC_Spect",
            title: "Do you attend competitions as a spectator related to your sports participation?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_Spect_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_Spect}= 1",
          isRequired: true
        },


        //question 23

              {
            type: "radiogroup",
            name: "OIC_Other",
            title: "Do you have any other indirect costs related to your sports participation, not already included?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "OIC_Other_$Y",
          inputType:"number",
          title: "If yes, how much do you spend on average per year?: ",
          visibleIf: "{OIC_Spect}= 1",
          isRequired: true
        },


        // question 24


        
              {
            type: "radiogroup",
            name: "SP_Earnings",
            title: "Do you earn money related to your sports participation (e.g., prize money, any other monetary returns,) ?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "No"},
                    { "value": 1, "text": "Yes"}
                    
                  ]
                },


           {
          type: "text",
          name: "SP_Earnings_EX",
          title: "If yes, describe: ",
          visibleIf: "{SP_Earnings}= 1",
          isRequired: true
        },


           {
          type: "text",
          name: "SP_Earnings_$Y",
          inputType:"number",
          title: "How much do you earn on average per year?: ",
          visibleIf: "{SP_Earnings}= 1",
          isRequired: true
        },
      ]

    },



        // SECTION IV : General information


         {      
      name: "GeneralInformation",
      title: "Section IV: General Information",
       elements: [
        {
          type: 'dropdown',
          title: "What is your gender", 
          name: 'Gender', 
          choices: [
                      'Male',
                      'Female',
                      'Other'
              ],
          showOtherItem: true,
          isRequired: true
        },



        {
          type: "text",
          name: "Age",
          inputType:"number",
          title: "Your age:  ",
          isRequired: true
        },


          {
          type: "text",
          name: "HH_N",
          inputType:"number",
          title: "How many family members in your household (under the same roof)?  ",
          isRequired: true
        },



             {
            type: "radiogroup",
            name: "HH_Educ",
            title: "  Select the highest level of education achieved by any member in your household? ",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Not completed high school"},
                    { "value": 2, "text": " High school or an equivalent certificate"},
                    { "value": 3, "text": "Some college or university"},
                    { "value": 4, "text": "Apprenticeship or other trades certificate or diploma"},
                    { "value": 5, "text": "College diploma"},
                    { "value": 6, "text": "Undergraduate degree"},
                    { "value": 7, "text": "Graduate/master’s"},
                    { "value": 8, "text": "Professional"},
                    { "value": 9, "text": "Doctoral"},
                    { "value": 10, "text": "Prefer not to answer"},
                    
          
                  ]
                },




             {
            type: "radiogroup",
            name: "HH_Income",
            title: " What is your annual household income? ",
            isRequired: true,
            choices: [
                    { "value": 1, "text": " $0-$20,000 "},
                    { "value": 2, "text": " $20,001-$40,000"},
                    { "value": 3, "text": "$40,001-$80,000"},
                    { "value": 4, "text": "$80,001-$100,000"},
                    { "value": 5, "text": "$100,001-$120,000"},
                    { "value": 6, "text": "$120,001 and over"},
                    { "value": 7, "text": "Prefer not to answer"},
                   
                
                  ]
                },



            {
      type: "matrixdynamic",
      name: "Sport_current",
      title: "CURRENTLY (top three)",
      rowCount: 3,
      minRowCount: 3,
      maxRowCount: 3,
      allowAddRows: false,
      allowRemoveRows: false,
      columns: [


        {
          name: "Sport_Curr",
          title: "Sport",
          cellType: "text",
          isRequired: true,
          width: "25%"
        },


        {
      
          name: "Sport_Curr_Context",
          title: "Current context",
          cellType: "radiogroup",
          choices: [
            { "value": "non_org", "text": "Non-org" },
            { "value": "club",    "text": "Club" },
            { "value": "school",  "text": "School" }
          ],
          isRequired: true,
          width: "40%"
        },

        //to verify if mainly recreational or competitive is added together or separated (only choose one)
        //1=mainly recreational 2=mainly competitve
        //1= non-org, 2=club 3=school
        {
          name: "Sport_Curr_level",
          title: "Current level",
          cellType: "radiogroup",
          choices: [
            { "value": "recreational", "text": "Mainly recreational" },
            { "value": "competitive",  "text": "Mainly competitive" }
          ],
          isRequired: true,
          width: "35%"
        },
        {
          name: "Sport_Curr_nY",
          title: "Years",
          cellType: "text",
          inputType: "number",
          min: 0,
          max: 99,
          placeholder: "0",
          isRequired: true,
          width: "25%"
        }
      ]
    },




    {
      type: "matrixdynamic",
      name: "Sport_previous",
      title: "In the Past (top three)",
      rowCount: 3,
      minRowCount: 3,
      maxRowCount: 3,
      allowAddRows: false,
      allowRemoveRows: false,
      columns: [


        {
          name: "Sport_past",
          title: "Sport",
          cellType: "text",
          isRequired: true,
          width: "25%"
        },


        {
      
          name: "Sport_past_Context",
          title: "Current context",
          cellType: "radiogroup",
          choices: [
            { "value": "non_org", "text": "Non-org" },
            { "value": "club",    "text": "Club" },
            { "value": "school",  "text": "School" }
          ],
          isRequired: true,
          width: "40%"
        },

        //to verify if mainly recreational or competitive is added together or separated (only choose one)
        //1=mainly recreational 2=mainly competitve
        //1= non-org, 2=club 3=school
        {
          name: "Sport_past_level",
          title: "Current level",
          cellType: "radiogroup",
          choices: [
            { "value": "recreational", "text": "Mainly recreational" },
            { "value": "competitive",  "text": "Mainly competitive" }
          ],
          isRequired: true,
          width: "35%"
        },
        {
          name: "Sport_past_nY",
          title: "Years",
          cellType: "text",
          inputType: "number",
          min: 0,
          max: 99,
          placeholder: "0",
          isRequired: true,
          width: "25%"
        }
      ]
    },





      

         
        ]
    },
     

   ]
}

var EN_CostOfSport = {}
EN_CostOfSport.title = title;
EN_CostOfSport.survey_JSON = json;
EN_CostOfSport.shortTitle = shortTitle
EN_CostOfSport.QuestionnaireType = 'Varied'
