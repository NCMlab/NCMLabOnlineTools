var title = "Demographic Questionnaire "
var shortTitle = 'Cost Of Sports'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: false,
   showCompletedPage: true,


   completedHtml:  `
    <div style="font-family: Arial, sans-serif; background:#f7f7fb; min-height:100vh; padding:30px 10px;">
      <div style="max-width: 960px; margin:0 auto;">

        <!-- Title / intro -->
        <div style="background:white; border-radius:12px; padding:20px 24px; box-shadow:0 4px 12px rgba(0,0,0,0.05); margin-bottom:24px;">
          <h2 style="margin:0 0 8px 0; font-size:28px;">Results: Cost of sports</h2>
          <p style="margin:0; font-size:14px; color:#555;">
            Below is a summary of your estimated yearly costs and earnings related to your sport.
          </p>
        </div>

        <!-- Direct / Indirect cards -->
        <div style="display:flex; flex-wrap:wrap; gap:20px; margin-bottom:30px;">

          <!-- Direct costs -->
          <div style="flex:1 1 280px; background:white; border-radius:12px; padding:18px 20px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
            <h3 style="margin:0 0 10px 0; font-size:18px;">Direct costs / YEAR</h3>
            <div style="font-size:14px;">
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Membership, licence, participation & entrance</span>
                <strong>{MEMB_ENTR}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Apparel & equipment (total)</span>
                <strong>{App_Equip}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Coaching</span>
                <strong>{Coaching_costs}</strong>
              </div>
            </div>
            <hr style="margin:10px 0;">
            <div style="display:flex; justify-content:space-between; font-size:15px;">
              <span><strong>Total direct costs</strong></span>
              <span style="font-weight:bold; color:#0052cc;">{Direct_cost}</span>
            </div>
          </div>

          <!-- Indirect costs -->
          <div style="flex:1 1 280px; background:white; border-radius:12px; padding:18px 20px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
            <h3 style="margin:0 0 10px 0; font-size:18px;">Indirect costs / YEAR</h3>
            <div style="font-size:14px;">
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Travel costs / YEAR</span>
                <strong>{Travel}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Social costs / YEAR</span>
                <strong>{SOC_Total_$Y}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Other indirect costs / YEAR</span>
                <strong>{OIC_Total}</strong>
              </div>
            </div>
            <hr style="margin:10px 0;">
            <div style="display:flex; justify-content:space-between; font-size:15px;">
              <span><strong>Total indirect costs</strong></span>
              <span style="font-weight:bold; color:#14833b;">{total_indirect}</span>
            </div>
          </div>
        </div>

        <!-- Earnings + equation -->
        <div style="background:white; border-radius:12px; padding:18px 20px; box-shadow:0 4px 12px rgba(0,0,0,0.05); margin-bottom:28px; text-align:center;">
          <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:16px; font-size:16px; margin-bottom:10px;">
            <span><strong>Direct costs</strong> = {Direct_cost}</span>
            <span style="font-size:22px;">+</span>
            <span><strong>Indirect costs</strong> = {total_indirect}</span>
            <span style="font-size:22px;">−</span>
            <span><strong>Sport earnings</strong> = <span style="color:#c0392b;">{Earning}</span></span>
          </div>
          <div style="font-size:14px; color:#666;">
            This formula is used to calculate your final total cost per year.
          </div>
        </div>

        <!-- Final total card -->
        <div style="background:#ffffff; border-radius:14px; padding:24px 28px; box-shadow:0 6px 16px rgba(0,0,0,0.08); text-align:center;">
          <div style="font-size:20px; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:8px;">
            Total costs / year
          </div>
          <div style="font-size:32px; font-weight:700; color:#001e6b;">
            {Total_Cost_$Y}
          </div>
        </div>

        <p style="margin-top:24px; font-size:13px; color:#777; text-align:center;">
          Thank you for completing the questionnaire. Your responses have been recorded.
        </p>

      </div>
    </div>
  `,

   pages: 
   [
   

    //make question font size bigger than choices in radiogroups
    

    {      
      name: "SportParticipation",
      title: "Section I: Sport  Participation Profile",
       elements: [


        // Add : Before starting to report


        {
        type: "html",
        name: "current_past_subtitle",
        html: `
         <div style="font-weight: bold; font-size: 25px; margin-top: 20px;">
          Before starting to report on the particular (para)sport of this survey, list the three most important current and past
          (para)sport you participate or have participated in, including the one under investigation here.
          </div>
          `
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
          isRequired: false,
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
          isRequired: false,
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
          isRequired: false,
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
          isRequired: false,
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
          isRequired: false,
          width: "25%"
        },


        {
      
          name: "Sport_past_Context",
          title: "Past context",
          cellType: "radiogroup",
          choices: [
            { "value": "non_org", "text": "Non-org" },
            { "value": "club",    "text": "Club" },
            { "value": "school",  "text": "School" }
          ],
          isRequired: false,
          width: "40%"
        },

        //to verify if mainly recreational or competitive is added together or separated (only choose one)
        //1=mainly recreational 2=mainly competitve
        //1= non-org, 2=club 3=school
        {
          name: "Sport_past_level",
          title: "Past level",
          cellType: "radiogroup",
          choices: [
            { "value": "recreational", "text": "Mainly recreational" },
            { "value": "competitive",  "text": "Mainly competitive" }
          ],
          isRequired: false,
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
          isRequired: false,
          width: "25%"
        }
      ]
    },

    //modified 

          {
           name: "SP_How",
           type: "text",
           title: "How did you get into the current (para) sport?",
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
          title: "Please explain:",
          visibleIf: "{SP_Class} = 'yes'",
          isRequired: true
        },


        

          {
          type: 'dropdown',
          title: "How many years have you played/participated in this sport? ",
          name: 'SP_Years',
          choices: Array.from({ length: 50 }, (_, i) => i + 1),
         
         isRequired: true
        },


        {
          type: "radiogroup",
          name: "SP_Context",
          title: "Indicate the context of your participation?",
          colCount:1,
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
          title: "Please explain:",
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
          title: "Please explain:",
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
          title: "Please explain:",
          visibleIf: "{SP_Fac}= 4",
          isRequired: true
        },

         {
           name: "SP_Fac_PC",
           type: "text",
           title: "Can you provide the first 3 characters of the postal code or name of the city of the facility where you play/practice most frequently?",
           minLength: 3,
           isRequired: true
          },


          // question 10 

      {
      type: "html",
      name: "practice_intro",
      html: `
      <div style="font-weight: bold; font-size: 25px; margin-top: 20px;">
       Please provide the following detailed information below about your participation last year. We make a distinction between practices and games/competition.<br><br>
      <b>a) Practices</b><br>
      1. Indicate for each period of last year how often you practiced per week. The different periods are: September till December, Winter Holidays, January till March, April till June, July and August (Summer Holidays).<br>
      2. How much <b>NET</b> time do you spend during one practice? (Excludes travel, changing clothes, socializing.)<br>
      3. How much <b>GROSS</b> time do you spend during one practice? (Includes travel, changing clothes, socializing.)
      `
    },

          
      {
        
      type: "matrixdropdown",
      name: "practice_table",
      title : "Detailed information about your participation last year — Practices",
      isRequired : true,
      columns: [
        { name: "SP_PR_1",        title : "Sept–Dec \n (16 weeks)",      cellType: "text",  inputType : "number",  min: 0 },
        { name: "SP_PR_2",        title : "Winter Holiday \n (2 weeks)", cellType: "text",  inputType:  "number",  min: 0 },
        { name: "SP_PR_3",        title: "Jan–Mar \n (12 weeks)",         cellType: "text",  inputType: "number",  min: 0 },
        {  name: "SP_PR_4",       title: "Apr–Jun \n (13 weeks)",         cellType: "text",  inputType: "number",  min: 0 },
        {  name: "SP_PR_5",       title: "Jul–Aug \n  (9 weeks)",         cellType: "text",  inputType: "number",  min: 0 }
      ],
      rows : [
        { value: "freq",     text: "1. Number of practices per week (exclude games)" },
        { value: "net_time",  text: "2. Hours per practice, NET (excludes travel/changing/socializing)" },
        { value: "gross_time",  text: "3. Total time per practice, GROSS (includes travel/changing/socializing)" }
      ],
      cellErrorLocation: "bottom",
      verticalAlign: "middle"
    
    },

  
      


    //calculation for practice table

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


     // Championships question

      {
      type: "html",
      name: "competitions_intro",
      html: `
      <div style="font-weight: bold; font-size: 30px; margin-top: 20px;">
      <b>b) In this section we will be talking about COMPETITIONS/CHAMPIONSHIPS</b><br><br>
      `
    },


     {
           name: "SP_CC_ODWithout",
           type: "text",
           inputType:"number",
           title: "1. One-day competitions without an overnight stay: On average, how many do you participate in per year?",
           min: 0,
           isRequired: true
          },


        {
           name: "SP_CC_ODWith",
           type: "text",
           inputType:"number",
           title: "2. One-day competitions that require an overnight stay: On average, how many do you participate in per year?",
           min: 0,
           isRequired: true
          },

        {
           name: "SP_CC_Weekend",
           type: "text",
           inputType:"number",
           title: "3. Weekend competitions (2 nights): On average, how many do you participate in per year?",
           min: 0,
           isRequired: true
          },

          {
           name: "SP_CC_Multiday",
           type: "text",
           inputType:"number",
           title: "4. Multi-day competitions (3 or more nights): On average, how many do you participate in per year?",
           min: 0,
           isRequired: true
          },





        ]
    },
   
    // section 3

    {      
      name: "CostActiveSportParticipation",
      title: "Section II: Cost of Active Sport Participation",
       elements: [
      

        //make it two columns

         {
            type: "radiogroup",
            name: "Cost_Gen",
            title: "  How much do you think you spend annually on your sport participation?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": " <  100.00 CAD/yr "},
                    { "value": 2, "text": " 100.00 < 250.00 CAD/yr"},
                    { "value": 3, "text": "250.00 < 500.00 CAD/yr"},
                    { "value": 4, "text": "500.00 < 750.00 CAD/yr"},
                    { "value": 5, "text": "750.00 < 1000.00 CAD/yr"},
                    { "value": 6, "text": "1000.00 < 1500.00 CAD/yr"},
                    { "value": 7, "text": "1500.00 < 3000.00 CAD/yr"},
                    { "value": 8, "text": "3000.00 < 5000.00 CAD/yr"},
                    { "value": 9, "text": "5000.00 < 10000.00 CAD/yr"},
                    { "value": 10, "text": "> 10,000.00 CAD/yr"},
                    
          
                  ],
                colCount: 2,
                },


        {
    type: "html",
    name: "membership_subtitle",
    html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Membership and Entrance / Year
    </div>
    `
    },



        {
            type: "dropdown",
            name: "Cost_Memb",
            title: "Do you pay a membership fee to play/practice your sport",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_Memb_$Y",
          inputType:"number",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_Memb}= 1",
          isRequired: true
        },



        
        {
            type: "dropdown",
            name: "Cost_Lic",
            title: " Do you pay a license fee to play/practice your sport (if not included in the membership fee)? (pays to a sport governing body, league, or federation to be officially registered and eligible to participate in organized competition)",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_Lic_$Y",
          inputType:"number",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_Lic}= 1",
          isRequired: true
        },



          {
            type: "dropdown",
            name: "Cost_PF",
            title: " Did/do you pay any other program fees to play/practice your sport (if not included in the previous questions)?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_PF_$Y",
          inputType:"number",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_PF}= 1",
          isRequired: true
        },




        {
            type: "dropdown",
            name: "Cost_COMP",
            title: " Do you pay fees to participate in tournaments or competitions (if not included in the membership fee)?",
            isRequired: true,
            choices: [
                    { "value": 1, "text": "Yes"},
                    { "value": 2, "text": "No"}
                    
                  ]
                },

          {
          type: "text",
          name: "Cost_COMP_$Y",
          inputType:"number",
          title: "If yes, how much per year:",
          visibleIf: "{Cost_COMP}= 1",
          isRequired: true
        },



        {
            type: "dropdown",
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



      {      
      name: "CostActiveSportParticipation",
      title: "Section II: Cost of Active Sport Participation",
       elements: [


           {
      type: "html",
      name: "coaching_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Coaching / Year
    </div>
    `
    },


         {
            type: "dropdown",
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
      type: "expression",
      name: "Cost_Coach_$Y",
      title: "Estimated yearly coaching cost",
      visibleIf: "{Cost_Coach} = 1",
      expression: "iif({Cost_Coach} = 1 && !isEmpty({Cost_Coach_$U}) && !isEmpty({Cost_Coach_UY}), {Cost_Coach_$U} * {Cost_Coach_UY}, 0)",
      displayStyle: "currency",
      currency: "CAD",
      precision: 2
        },






        
         {
            type: "dropdown",
            name: "Cost_Clinic",
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


          {
      type: "expression",
      name: "Cost_Clinic_$Y",
      title: "Estimated yearly clinic cost",
      visibleIf: "{Cost_Clinic} = 1",
      expression: "iif({Cost_Clinic} = 1 && !isEmpty({Cost_Clinic_$U}) && !isEmpty({Cost_Clinic_UY}), {Cost_Clinic_$U} * {Cost_Clinic_UY}, 0)",
      displayStyle: "currency",
      currency: "CAD",
      precision: 2
        },


        
           {
      type: "html",
      name: "apparel_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Apparel and Equipment / Year
    </div>
    `
    },
   
    //moved to section apparel and Equipment from section I: ability

    {
          type: 'dropdown',
          title: "Does your ability require adaptive apparel/equipment to participate this sport?", 
          name: 'AB_EQ_DL_Ex', 
          choices: [
                      'Yes',
                      'No',
                      
              ]
        },
        
        {
          type: "comment",
          name: "adaptive_equipment_explanation",
          title: "Please explain:",
          visibleIf: "{AB_EQ_DL_Ex} = 'yes'",
          isRequired: true
        },

        // question 10 to adjust
        //fix html text 
         {
      type: "html",
      name: "apparel_subtitle",
      html: `
      <div style="font-weight: bold; font-size: 20px; margin-top: 20px;">
      Provide a list of a) <b>sports apparel</b>, b) <b> sports equipment</b>, and c) <b>other equipment</b> you currently possess to play your sport. Provide information on the item, 
      the quantity, the number of months or years you actually use it, and the price per unit:
      
    </div>
    `
    },


     /* ----------------- (a) Sports apparel ----------------- */ //fixed 
   {
      type: "matrixdynamic",
      name: "SP_APP",
      title: "a) Sports apparel (e.g., shoes, pants, shirts …)",
      addRowText: "Add apparel item",
      removeRowText: "Remove",
      minRowCount: 1,
       rowCount: 0,
      showFooter: true,
      columns: [
        { name: "SP_APP_Describe",  title: "Describe item", cellType: "text", isRequired: false, width: "35%" },
        { name: "SP_APP_Quantity",   title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "10%" },
        { name: "SP_APP_Usage", title: "Years of usage per item", cellType: "text", inputType: "number", min: 0, max: 12, placeholder: "e.g. 6", width: "15%" },
        { name: "SP_APP_$U",  title: "Price per unit (C$)", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "15%" },
        {
      name: "SP_APP_$Y",
      title: "Write-off / year (C$)",
      cellType: "expression",
      expression:
        "iif(or({row.SP_APP_Usage} = 0, isEmpty({row.SP_APP_Usage})), 0," +
        " {row.SP_APP_Quantity} * {row.SP_APP_$U} / {row.SP_APP_Usage})",
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

       {
         type: "expression",
         name: "SP_APP_$Y_Total",
        title: "Sub-total (a): Total write-off per year (all apparel items)",
        expression: "sumInArray({SP_APP}, 'SP_APP_$Y')",
         displayStyle: "currency",
        currency: "CAD",
        currencyDisplay: "code",
        visible: false  
      },

    /* --------------- (b) Sports equipment ----------------- */
    {
      type: "matrixdynamic",
      name: "SP_Equip",
      title: "b) Sports equipment (e.g., skates, golf clubs, bags …)",
      addRowText: "Add equipment item",
      removeRowText: "Remove",
      minRowCount: 1,
      rowCount: 0,
      showFooter: true,
      columns: [
        { name: "SP_Equip_Describe",  title: "Describe item", cellType: "text", isRequired: false, width: "35%" },
        { name: "SP_Equip_Quantity",   title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "10%" },
        { name: "SP_Equip_Usage", title: "Years of usage per item", cellType: "text", inputType: "number", min: 0, max: 12, placeholder: "e.g. 6", width: "15%" },
        { name: "SP_Equip_$U",  title: "Price per unit (C$)", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "15%" },
        {
          
        name: "SP_Equip_$Y",
        title: "Write-off / year (C$)",
        cellType: "expression",
        expression:
        "iif(or({row.SP_Equip_Usage} = 0, isEmpty({row.SP_Equip_Usage})), 0," +
        " {row.SP_Equip_Quantity} * {row.SP_Equip_$U} / {row.SP_Equip_Usage})",
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

      {
         type: "expression",
         name: "SP_Equip_$Y_Total",
        title: "Sub-total b: Total write-off per year (all equipment items)",
        expression: "sumInArray({SP_Equip}, 'SP_Equip_$Y')",
         displayStyle: "currency",
        currency: "CAD",
        currencyDisplay: "code",
        visible: false  
      },

    /*  --------- c) Additional equipment -----------------   */


     {
      type: "matrixdynamic",
      name: "SP_AddEquip",
      title: "C) additional equipment, ex.towels ..",
      addRowText: "Add equipment item",
      removeRowText: "Remove",
      minRowCount: 1,
      rowCount: 0,
      showFooter: true,
      columns: [
        { name: "SP_AddEquip_Describe",  title: "Describe item", cellType: "text", isRequired: false, width: "35%" },
        { name: "SP_AddEquip_Quantity",   title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "10%" },
        { name: "SP_AddEquip_Usage", title: "Years of usage per item", cellType: "text", inputType: "number", min: 0, max: 12, placeholder: "e.g. 6", width: "15%" },
        { name: "SP_AddEquip_$U",  title: "Price per unit (C$)", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "15%" },
        {

        name: "SP_AddEquip_$Y",
        title: "Write-off / year (C$)",
        cellType: "expression",
        expression:
        "iif(or({row.SP_AddEquip_Usage} = 0, isEmpty({row.SP_AddEquip_Usage})), 0," +
        " {row.SP_AddEquip_Quantity} * {row.SP_AddEquip_$U} / {row.SP_AddEquip_Usage})",
        displayStyle: "currency",
        currency: "CAD",

        totalType: "sum",             
        totalDisplayStyle: "currency",
        currencyDisplay: "code",
        width: "15%"
        }
      ],
      footerText: "Sub-total (c)"
    },

      {
         type: "expression",
         name: "SP_AddEquip_$Y_Total",
        title: "Sub-total (c): Total write-off per year (additonal items)",
        expression: "sumInArray({SP_AddEquip}, 'SP_AddEquip_$Y')",
         displayStyle: "currency",
        currency: "CAD",
        currencyDisplay: "code",
        visible: false  
      },








        // question 11

        
      {
      type: "checkbox",
      name: "sports_equipment_sources",
      title: "Where do you usually buy your sports apparel and/or equipment? (Check all that apply)",
      isRequired: true,
      choices: [
        { "value": 1, "text": "In a general store, not specialized in sport (e.g., Walmart, ...)" },
        { "value": 2, "text": "In a general sports store (e.g., Sport Check, ...)" },
        { "value": 3, "text": "In a privately owned sports shop" },
        { "value": 4, "text": "In a shop specialized in your specific sport (ex. golf shop)" },
        { "value": 5, "text": "Buy from individual people or second hand" },
        { "value": 6, "text": "Wholesale" },
        { "value": 7, "text": "Mail order company (e.g., Amazon, eBay, ...)" },
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
            type: "dropdown",
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

         {
      type: "expression",
      name: "EQ_Rent_$Y",
      title: "Estimated yearly rental cost",
      visibleIf: "{EQ_Rent} = 1",
      expression: "iif({EQ_Rent} = 1 && !isEmpty({EQ_Rent_$U}) && !isEmpty({EQ_Rent_UY}), {EQ_Rent_$U} * {EQ_Rent_UY}, 0)",
      displayStyle: "currency",
      currency: "CAD",
      precision: 2
        },


        // question 13



        
        {
            type: "dropdown",
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


         {
      type: "expression",
      name: "EQ_Maint_$Y",
      title: "Estimated yearly rental cost",
      visibleIf: "{EQ_Maint} = 1",
      expression: "iif({EQ_Maint} = 1 && !isEmpty({EQ_Maint_$U}) && !isEmpty({EQ_Maint_UY}), {EQ_Maint_$U} * {EQ_Maint_UY}, 0)",
      displayStyle: "currency",
      currency: "CAD",
      precision: 2
        },





        {
        type: "expression",
        name: "SP_Equip_APP_$Y_Total",
        title: "Apparel & Equipment / YEAR (Total)",
        displayStyle: "decimal",
        precision: 2,
        expression: "{SP_APP_$Y_Total}" + " + {SP_Equip_$Y_Totall}" + " + {SP_AddEquip_$Y_Total}" + " + {EQ_Rent_$Y}" + " + {EQ_Maint_$Y}"
      },


      
      ]

      // to add the sum of maintenance and apparel together 


      },



       {      
      name: "CostActiveSportParticipation",
      title: "Section II: Cost of Active Sport Participation",
       elements: [
        // question 14

              {
      type: "html",
      name: "travel_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Travel Costs / Year
    </div>
    `
    },

     //if select value 8 add a blank box to explain their special transportation

        {
      type: "checkbox",
      name: "TR_Pr",
      title: "For Practices: Which method of transportation do you use? (check all that apply)",
      isRequired: true,
      choices: [
        { "value": 1, "text": "By foot/wheeling" },
        { "value": 2, "text": "By Bike" },
        { "value": 3, "text": "By motorbike" },
        { "value": 4, "text": "By family/own car" },
        { "value": 5, "text": "Public Transportation" },
        { "value": 6, "text": "Have a ride with others/ carpooling" },
        { "value": 7, "text": "Taxi/Private bus" },
        { "value": 8, "text": "Special transportation" },
        { "value": 9, "text": "Other" }
      ],
      showOtherItem: false,
      colCount: 3
      },


        //if by car

        {
    type: "panel",
    name: "TR_Pr_CarPanel",
    title: "<span style='font-size:32px; font-weight:bold;'>If you use a car for practices, answer the following 3 questions:</span>",
    visibleIf: "{TR_Pr} contains 4",
    elements: [

        
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
          title: " How often (in %) do you use the car for practice?",
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


        // parking cost should be added total yearly car travel cost
        {
      type: "expression",
      name: "TR_Pr_Car_$Y",
      title: "Total yearly car travel cost",
      displayStyle: "decimal",
      precision: 2,
      visibleIf: "{TR_Pr} contains 4",
      expression:"{TR_Pr_Car_kmU} * {SP_PR_Freq} * 0.5 * ({TR_Pr_Car_%} / 100)"
      },

      ]

    },



        // if by public transportation

    {
    type: "panel",
    name: "TR_Pr_PublicPanel",
    title: "<span style='font-size:32px; font-weight:bold;'>If you use public transportation for practices, answer the following questions:</span>",
    visibleIf: "{TR_Pr} contains 5",
    elements: [

         {
          type: "text",
          name: "TR_Pr_Pub_$U",
          inputType:"number",
          title: " How much do you spend back and forth per practice?",
          visibleIf: "{TR_Pr} contains 5",
          isRequired: true
        },

       
        {
        type: "text",
         name: "TR_Pr_Pub_%",
        titleLocation: "hidden",        
        inputType: "range",
        min: 0,
        max: 100,
        step: 1,
        visibleIf: "{TR_Pr} contains 5",
        valueName: "TR_Pr_Pub_Perc"      
        },

        {
         type: "text",
         name: "TR_Pr_Pub_%",
        title: "How often (in %) do you use the public transport for practice?",
        inputType: "number",
        min: 0,
        max: 100,
        step: 1,
        textUpdateMode: "onTyping",
        visibleIf: "{TR_Pr} contains 5",
        valueName: "TR_Pr_Pub_%",     
        isRequired: true
      },


      {
    type: "expression",
    name: "TR_Pr_Pub_$Y",
    title: "Total yearly public transport costs",
    displayStyle: "decimal",
    precision: 2,
    visibleIf: "{TR_Pr} contains 5",   // only if they selected public transport
    expression: "{TR_Pr_Pub_$U} * {SP_PR_Freq} * ({TR_Pr_Pub_%} / 100)"
    }



      ]

    },



            
               
              // 14.b
// to fix pop up
        
            {
      type: "checkbox",
      name: "TR_Comp",
      title: "For one-day competitions/championships without overnight stay: Which method of transportation do you use? (check all that apply)",
      isRequired: true,
      choices: [
        { "value": 1, "text": "By foot/wheeling" },
        { "value": 2, "text": "By Bike" },
        { "value": 3, "text": "By motorbike" },
        { "value": 4, "text": "By family car" },
        { "value": 5, "text": "Public Transportation" },
        { "value": 6, "text": "Have a ride with others/ carpooling" },
        { "value": 7, "text": "Taxi/Private bus" },
        { "value": 8, "text": "Special transportation, if yes, please explain" },
        { "value": 9, "text": "Other" }
      ],
      showOtherItem: false,
      colCount: 3
      },


    

 //to remove 2 questions below

      /*{
            type: "dropdown",
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
        },  */


              {
    type: "panel",
    name: "TR_Comp_CarPanel",
    title: "<span style='font-size:32px; font-weight:bold;'>If you use a car for practices, answer the following questions:</span>",
    visibleIf: "{TR_Comp} contains 4",
    elements: [


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
          type: "text",
          name: "TR_Comp_Park_$Y",
          inputType:"number",
          title: " How much do you spend on parking costs per year (in total) for one-day competition/championship without overnight stay?",
          visibleIf: "{TR_Comp} contains 4",
          isRequired: true
        },


        
        {
      type: "expression",
      name: "TR_Comp_Car_$Y",
      title: "Total yearly car travel cost",
      displayStyle: "decimal",
      precision: 2,
      visibleIf: "{TR_Comp} contains 4",
      expression:"{TR_Comp_Car_kmU} * {SP_PR_Freq} * 0.5 * ({TR_Comp_Car_%} / 100)"
      },

      ]

    },


    {
  type: "html",
  name: "tr_comp_subtitle",
  visibleIf: "{TR_PR} contains 4",
  html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      "If you use public transportation for practices, answer the following questions:
    </div>
  `
  },


              {
    type: "panel",
    name: "TR_Comp_PublicPanel",
    //title: "If you use public transportation for practices, answer the following questions:",
    visibleIf: "{TR_Pr} contains 4",
    elements: [


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
          type: "text",
          name: "TR_Comp_Pub_%",
          inputType:"number",
          title: "How often (in 0-100%) do you use the public transport for one-day competition/championship without overnight stay?",
          visibleIf: "{TR_Comp} contains 5",
          isRequired: true
        },


          {
      type: "expression",
      name: "TR_Comp_Pub_$Y",
      title: "Total yearly public transport costs",
      displayStyle: "decimal",
      precision: 2,
      visibleIf: "{TR_Comp} contains 5",   // only if they selected public transport
      expression: "{TR_Comp_Pub_$U} * {SP_PR_Freq} * ({TR_Comp_Pub_%} / 100)"
    }


      ]


    },


    {
      type: "html",
      name: "other_transportation_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Other Transportation Costs
    </div>
    `
    },


        // Special transportation

        // fix pop visible if for special transportation

           {
            type: "dropdown",
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





        // 14.C   to add ifvisible relevant to #9

                 {
      type: "html",
      name: "competitions_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 30px; margin-top: 20px;">
      Cost of competitions/championships with overnight stay (include ALL expenditures for travel, lodging, meals, rental of equipment or facilities, etc. not previously included)
    </div>
    `
    },


          {
          type: "text",
          name: "Cost_O_with_$U",
          inputType:"number",
          title: " ONE-DAY COMPETITIONS WITH OVERNIGHT STAY: How much do you spend on average per ONE-DAY COMPETITION WITH OVERNIGHT STAY?",
          visibleIf: "{SP_CC_ODWith} > 0",
          isRequired: true
        },

        {
        type: "expression",
        name: "Cost_O_with_$Y",
        title: "Total Yearly Cost: One-day competitions with overnight stay",
        displayStyle: "decimal",
        precision: 2,
        visibleIf: "{SP_CC_ODWith} > 0",
        expression: "{Cost_O_with_$U} * {SP_CC_ODWith}"
        },



          {
          type: "text",
          name: "Cost_WE_$U",
          inputType:"number",
          title: " WEEK-END COMPETITIONS: How much do you spend on average per WEEK-END COMPETITION?",
          visibleIf: "{SP_CC_Weekend} > 0",
          isRequired: true
        },



        {
        type: "expression",
        name: "Cost_WE_$Y",
        title: "Total Yearly Cost: One-day competitions with overnight stay",
        displayStyle: "decimal",
        precision: 2,
        visibleIf: "{SP_CC_Weekend} > 0",
        expression: "{Cost_WE_$U} * {SP_CC_Weekend}"
        },



        
          {
          type: "text",
          name: "Cost_Multi_$U",
          inputType:"number",
          title: " MULTI-DAY COMPETITIONS: How much do you spend on average per MULTI-DAY COMPETION?",
           visibleIf: "{SP_CC_Multiday} > 0",
          isRequired: true
        },


          {
        type: "expression",
        name: "Cost_Multi_$Y",
        title: "Total Yearly Cost: One-day competitions with overnight stay",
        displayStyle: "decimal",
        precision: 2,
        visibleIf: "{SP_CC_Multiday} > 0",
        expression: "{Cost_Multi_$U} * {SP_CC_Multiday}"
        },









        //14.d


        
           {
            type: "dropdown",
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
          title: "How much do you spend on average per vacation (include ALL expenditure for travel, lodging, meals, rental of equipment or facilities, etc. not previously included)? ",
          visibleIf: "{Cost_Vaca}= 1",
          isRequired: true
        },


         {
          type: "text",
          name: "Cost_Vaca_UY",
          inputType:"number",
          title: "How many vacations per year?: ",
          visibleIf: "{Cost_Vaca}= 1",
          isRequired: true
        },
        


          {
        type: "expression",
        name: "Cost_Vaca_$Y",
        title: "Total Yearly Vacations cost",
        displayStyle: "decimal",
        precision: 2,
        visibleIf: "{Cost_Vaca} = 1",
        expression: "{Cost_Vaca_$U} * {Cost_Vaca_UY}"
        },



        {
      type: "expression",
      name: "TR_$Y_Total",
      title: "Total Travel & Transportations Costs / YEAR",
      displayStyle: "decimal",
      precision: 2,
      expression: "{TR_Pr_Car_$Y}" + "+ {TR_Pr_Pub_$Y}" + "+ {TR_Comp_Car_$Y}" + "+ {TR_COMP_PUB_$Y}" + "+ {Cost_O_with_$Y}" + "+ {TR_Other_$Y}" +
       "+ {Cost_WE_$Y}" + "+ {Cost_Mult_$Y}" + "+ {Cost_Vaca_$Y}"
      },

      



       {
      type: "html",
      name: "Social_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Social Costs/year
    </div>
    `
    },



              // question 15


              {
            type: "radiogroup",
            name: "SOC_F&B_P",
            title: "Do you purchase drinks or food before, during, or after your participation (consider practices, one-day games and competitions)?",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "Never (0%)"},
                    { "value": 1, "text": "Rarely (25%)"},
                    { "value": 2, "text": "Sometimes (50%)"},
                    { "value": 3, "text": "Often (75%)"},
                    { "value": 4, "text": "Always (100%)"}
                    
                  ]
                },


                  {
          type: "text",
          name: "SOC_F&B_P_$U",
          inputType: "number",
          title: "If yes, how much do you spend on average each time? ",
          visibleIf: "{SOC_F&B_P} >= 1",
          isRequired: true
        },


        {
        type: "expression",
        name: "SOC_F&B_P_$Y",
        title: "Food & Drink Costs / YEAR (Practices)",
        displayStyle: "decimal",
        precision: 2,
        visibleIf: "{SOC_F&B_P} >= 1",
        expression: "{SP_PR_Freq} * ({SOC_F&B_P} * 0.25) * {SOC_F&B_P_$U}"
        },


       // "{SOC_F&B} * {SOC_F&B_$U} * ({SP_PR_Freq} + {SP_CC_ODWithout})"    total practice


    //to add another question to separate between practices and one-day competitions without overnight stay
        
            {
            type: "radiogroup",
            name: "SOC_F&B_O",
            title: "Do you purchase drinks or food before, during, or after  one-day competitions without overnight stay ",
            isRequired: true,
            choices: [
                    { "value": 0, "text": "Never (0%)"},
                    { "value": 1, "text": "Rarely (25%)"},
                    { "value": 2, "text": "Sometimes (50%)"},
                    { "value": 3, "text": "Often (75%)"},
                    { "value": 4, "text": "Always (100%)"}
                    
                  ]
                },


         {
          type: "text",
          name: "SOC_F&B_O_$U",
          inputType: "number",
          title: "If yes, how much do you spend on average each time? ",
          visibleIf: "{SOC_F&B_O} >= 1",
          isRequired: true
        }, 


        {
        type: "expression",
        name: "SOC_F&B_O_$Y",
        title: "Food & Drink Costs / YEAR (One-day competitions without overnight stay)",
        displayStyle: "decimal",
        precision: 2,
        visibleIf: "{SOC_F&B_O} >= 1",
        expression: "{SP_CC_ODWithout} * ({SOC_F&B_O} * 0.25) * {SOC_F&B_O_$U}"
      },


      {
       type: "expression",
       name: "SOC_F&B_$Y",
       title: "Total Food & Drink Costs / YEAR",
       displayStyle: "decimal",
       precision: 2,
       expression: "({SP_PR_Freq} * ({SOC_F&B_P} * 0.25) * {SOC_F&B_P_$U})" + " + ({SP_CC_ODWithout} * ({SOC_F&B_O} * 0.25) * {SOC_F&B_O_$U})"
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


                      {
      type: "html",
      name: "other_indirect_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Other Indirect Costs/year
    </div>
    `
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
            type: "dropdown",
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
            type: "dropdown",
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
            type: "dropdown",
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
            type: "dropdown",
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
            type: "dropdown",
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
            type: "dropdown",
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
      type: "html",
      name: "earnings_subtitle",
      html: `
    <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
      Sports Earnings /year
    </div>
    `
    },


        
              {
            type: "dropdown",
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
          title: "Describe: ",
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
      title: "Section III: General Information",
       elements: [
          {
        type: "dropdown",
        name: "Gender",
        title: "Gender",
        choices: [
        "Male",
        "Female"
        ],
        showOtherItem: true,
        otherText: "You don't have an option that applies to me. I identify as:",
        isRequired: true
    },


//dropdown to 100
        {
          type: "text",
          name: "Age",
          inputType:"number",
          title: "Your age:  ",
          isRequired: true
        },

//dropdown to 20
          {
          type: "text",
          name: "HH_N",
          inputType:"number",
          title: "How many members in your household (under the same roof)?  ",
          isRequired: true
        },



        // to add position in household: add sole occupant to choices

        {
      type: "radiogroup",
      name: "HH_Position",
      title: "What is your position in this household?",
      isRequired: true,
      choices: [
         "Son",
        "Daughter",
        "Spouse",
        "Parent",
        "Guardian",
        "Sole occupant"
      ],
    showOtherItem: true,
    otherText: "Other (please specify):"
    },



        //columns 2

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



                // make it 2 columns
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



    


       
      ]
    },


    {      
      name: "Section Ability",
      title: "Section IV:  Ability",
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
                    { "value": 1, "text": "1 - Total Assistance — Dependent, requires full help from others." },
                    { "value": 2, "text": "2 - Maximal Assistance — Needs 75% help to complete tasks." },
                    { "value": 3, "text": "3 - Moderate Assistance — Needs 50% help to complete tasks." },
                    { "value": 4, "text": "4 - Minimal Assistance — Needs 25% help to complete tasks." },
                    { "value": 5, "text": "5 - Supervision or Setup — Requires supervision or verbal cues." },
                    { "value": 6, "text": "6 - Modified Independance — Uses assistive devices but no help needed." },
                    { "value": 7, "text": "7 - Complete Independance — No assistance, performs safely." }
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
          isRequired: true
        },



      


       /* {
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
          isRequired: true
        },*/

        ]
    },

    


     {      
      name: "GeneralInformation",
      title: "Results: Cost of sports ",
       elements: [


        {
        type: "expression",
        name: "MEMB_ENTR",             
        title: "Total Membership, License, Participation & Entrance Costs / YEAR",
        displayStyle: "decimal",
        precision: 2,
        expression: "{Cost_Memb_$Y}" + " + {Cost_Lic_$Y}" + " + {Cost_PF_$Y}" + " + {Cost_Comp_$Y}" + " + {Cost_Entr_$Y}"
      },


       {
        type: "expression",
        name: "App_Equip",
        title: "Apparel & Equipment / YEAR (Total)",
        displayStyle: "decimal",
        precision: 2,
        expression: "{SP_APP_$Y_Total}" + " + {SP_Equip_$Y_Totall}" + " + {SP_AddEquip_$Y_Total}" + " + {EQ_Rent_$Y}" + " + {EQ_Maint_$Y}"
      },

      {
    type: "expression",
    name: "Coaching_costs",
    title: "Coaching",
    displayStyle: "decimal",
    precision: 2,
    expression: "{Cost_Coach_$Y} + {Cost_Clinic_$Y}"
    },



    {
    type: "expression",
    name: "Travel",
    title: "Total Travel Costs / YEAR",
    displayStyle: "decimal",
    precision: 2,
    expression: "{TR_$Y_Total}" 
    },


{
  type: "expression",
  name: "SOC_Total_$Y",
  title: "Total Social Costs / YEAR",
  displayStyle: "decimal",
  precision: 2,
  expression:
    "{SOC_F&B_$Y}" + " + {SOC_Club_$Y}"
},



  {
  type: "expression",
  name: "Direct_cost",
  title: "Total Direct Costs",
  displayStyle: "decimal",
  precision: 2,
  expression:
    "{MEMB_ENTR}" + " + {Coaching_costs}"+ "+{App_Equip}"
},


  {
  type: "expression",
  name: "OIC_Total",
  title: "Other Indirect Costs / YEAR",
  displayStyle: "decimal",
  precision: 2,
  expression: "{OIC_MED_$Y}" + " + {OIC_Body_$Y}" + " + {OIC_Insur_$Y}" + " + {OIC_BPsitting_$Y}" + " + {OIC_DOC_$Y}" +
    " + {OIC_Spect_$Y}" + " + {OIC_Other_$Y}"
  }, 


  {
  type: "expression",
  name: "total_indirect",
  title: "Total Indirect costs",
  displayStyle: "decimal",
  precision: 2,
  expression:
    "{OIC_Total}" + " + {SOC_Total_$Y}" + "+ {Travel}"
  },


  {
    type: "expression",
    name: "Earning",
    title: "Total Earnings",
    displayStyle: "decimal",
    precision: 2,
    expression: "{SP_Earnings_$Y}" 
    },


    {
    type: "expression",
    name: "Total_Cost_$Y",
    title: "TOTAL COST / YEAR",
    displayStyle: "decimal",
    precision: 2,
    expression: "{Direct_cost} + {total_indirect} - {Earning}"
    }


















       ]


      },
     

   ]
}

// at the end, the excel csv how can the researchers have it if the user does the questionnaire from their phone.

var EN_CostOfSport = {}
EN_CostOfSport.title = title;
EN_CostOfSport.survey_JSON = json;
EN_CostOfSport.shortTitle = shortTitle
EN_CostOfSport.QuestionnaireType = 'Varied'
