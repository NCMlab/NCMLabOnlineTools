
// Format notes.
// Make question names a bit bigger font, since the responses are typically a larger font size. Be consistent with left or center align across question types.
// How to make PDF of this questionnaire.
https://surveyjs.io/pdf-generator?gad_source=1&gad_campaignid=23252761383&gbraid=0AAAAAo0HYCrfGtaRe57eePxaRVY4HIrau&gclid=Cj0KCQjwrs7RBhDuARIsAIVfBD2d8TUVZyLox1uiR6GnoQ9Ebp2-Fdo7TfTcbfZl58eYrclG0Z9bRoMaAiIbEALw_wcB

var title = "Demographic Questionnaire "
var shortTitle = 'Cost Of Sports'
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: false,
  showCompletedPage: true,
  // ################################################################
  // ##### CALCULATIONS #############################################
  "calculatedValues": [
    // {
    //   type: "expression",
    //   name: "MEMB_ENTR",
    //   title: "Total Membership, License, Participation & Entrance Costs / YEAR",
    //   displayStyle: "decimal",
    //   precision: 2,
    //   expression: "{Cost_Memb_$Y}" + " + {Cost_Lic_$Y}" + " + {Cost_PF_$Y}" + " + {Cost_Comp_$Y}" + " + {Cost_Entr_$Y}"
    // },
    // {
    //   type: "expression",
    //   name: "App_Equip",
    //   title: "Apparel & Equipment / YEAR (Total)",
    //   displayStyle: "decimal",
    //   precision: 2,
    //   expression: "{SP_APP_$Y_Total}" + " + {SP_Equip_$Y_Totall}" + " + {SP_AddEquip_$Y_Total}" + " + {EQ_Rent_$Y}" + " + {EQ_Maint_$Y}"
    // },
    // {
    //   type: "expression",
    //   name: "Coaching_costs",
    //   title: "Coaching",
    //   displayStyle: "decimal",
    //   precision: 2,
    //   expression: "{Cost_Coach_$Y} + {Cost_Clinic_$Y}"
    // },
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
        "{Total_Fees_$Y}" + " + {Cost_Coach_$Y}" + "+{SP_Equip_APP_$Y_Total}"
    },
    {
      type: "expression",
      name: "OIC_Total",
      title: "Other Indirect Costs per Year",
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
  ],

  // ################################################################
  // ##### REPORT CARD ##############################################
  completedHtml: `
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
                <strong>{Total_Fees_$Y}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Apparel & equipment (total)</span>
                <strong>{SP_Equip_APP_$Y_Total}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin:4px 0;">
                <span>Coaching</span>
                <strong>{Cost_Coach_$Y}</strong>
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

  // ################################################################
  // ##### QUESTIONNAIRE ############################################
  pages:
    [
      //make question font size bigger than choices in radiogroups
      // ################################################################
      // ##### SECTION 0    #############################################
     
      {
        name: "Intro",
        title: "Reference Sport",
        elements: [
        
          // {
          //   name: "Sport",
          //   title: "THIS SURVEY IS ABOUT MY PARTICIPATION IN THE FOLLOWING (PARA)SPORT:",
          //   type: "text",
          //   isRequired: false
          // },
          // The following question type creates data that is an array.
          // The array is an array of objects with object names the names of the columns
           {
            type: "matrixdynamic",
            name: "Sport_Curr",
            title: "THIS SURVEY IS ABOUT MY PARTICIPATION IN THE FOLLOWING (PARA)SPORT: " ,
            description: "Context: Non-organized = by yourself or with your famly or friends; Club = with a team; School = competing in a school team or doing it at school",
            rowCount: 1,
            minRowCount: 1,
            maxRowCount: 1,
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
                name: "Context",
                title: "Main current context",
                cellType: "radiogroup",
                choices: [
                  { "value": 1, "text": "Non-organized" }, // Can this be changed to 1,2,3, as per the code book?
                  { "value": 2, "text": "Club" },
                  { "value": 3, "text": "School" }
                ],
                isRequired: false,
                width: "40%"
              },
              {
                name: "Level",
                title: "Current level",
                cellType: "radiogroup",
                choices: [
                  { "value": 1, "text": "Mainly recreational" },
                  { "value": 2, "text": "Mainly competitive" },
                  { "value": 3, "text": "Both equally" }
                ],
                isRequired: false,
                width: "35%"
              },
              {
                name: "nY",
                title: "Years",
                cellType: "text",
                inputType: "number",
                min: 0,
                max: 99,
                placeholder: "0",
                isRequired: false,
                width: "25%"
              }
            ],
            rows: [{text: "...", value: 'DDD'}]
          },
  {
            type: "expression",
            name: "temp",
            title: "Sport Name",
            displayStyle: "text",
            expression:
              "{Sport_current.DDD.Sport_Curr}",
          },

         
        ]
      },
      // ################################################################
      // ##### SECTION 1    #############################################
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
          List up to three other important current and past (para)sport you participate(d) in. Also include the context, the level and the number of years you participate(d) in those sports.
          </div>
          <div>Context: Non-organized = by yourself or with your famly or friends; Club = with a team; School = competing in a school team or doing it at school,
          </div>
          `
          },
          {
            type: "matrixdynamic",
            name: "Sport_Curr",
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
                name: "Context",
                title: "Main current context",
                cellType: "radiogroup",
                choices: [
                  { "value": 1, "text": "Non-organized" },
                  { "value": 2, "text": "Club" },
                  { "value": 3, "text": "School" }
                ],
                isRequired: false,
                width: "40%"
              },
              {
                name: "Level",
                title: "Current level",
                cellType: "radiogroup",
                choices: [
                  { "value": 1, "text": "Mainly recreational" },
                  { "value": 2, "text": "Mainly competitive" },
                  { "value": 3, "text": "Both equally" }
                ],
                isRequired: false,
                width: "35%"
              },
              {
                name: "nY",
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
            name: "Sport_Past",
            title: "IN THE PAST (top three)",
            rowCount: 3,
            minRowCount: 3,
            maxRowCount: 3,
            allowAddRows: false,
            allowRemoveRows: false,
            columns: [
              {
                name: "Sport_Past",
                title: "Sport",
                cellType: "text",
                isRequired: false,
                width: "25%"
              },
              {
                name: "Context",
                title: "Past context",
                cellType: "radiogroup",
                choices: [
                  { "value": 1, "text": "Non-organized" },
                  { "value": 2, "text": "Club" },
                  { "value": 3, "text": "School" }
                ],
                isRequired: false,
                width: "40%"
              },
              {
                name: "Level",
                title: "Past level",
                cellType: "radiogroup",
                choices: [
                  { "value": 1, "text": "Mainly recreational" },
                  { "value": 2, "text": "Mainly competitive" },
                  { "value": 3, "text": "Both equally" }
                ],
                isRequired: false,
                width: "35%"
              },
              {
                name: "nY",
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
            title: "How did you get into the current (para)sport?",
            minLength: 10,
            isRequired: false
          },
          {
            type: "radiogroup",
            name: "SP_Class",
            title: "Do you have classification and/or specialty and/or player position in this sport?",
            isRequired: false,
            colCount: 3,   // horizontal layout for Yes / No / N/A
            choices: [
              { value: 1, text: "Yes" },
              { value: 0, text: "No" },
              { value: 2, text: "N/A" }
            ]
          },
          {
            type: "comment",
            name: "SP_Class_Ex",
            title: "Please explain:",
            visibleIf: "{SP_Class} = 1",
            isRequired: false
          },
          //   {
          //   type: 'dropdown',
          //   title: "How many years have you played/participated in this sport? ",
          //   name: 'SP_Years',
          //   choices: Array.from({ length: 50 }, (_, i) => i + 1),

          //  isRequired: false
          // },


          // {
          //   type: "radiogroup",
          //   name: "SP_Context",
          //   title: "Indicate the context of your participation?",
          //   colCount:1,
          //   isRequired: false,
          //   choices: [
          //             { "value": 1, "text": "Non-organized"},
          //             { "value": 2, "text": "Organized"},
          //             { "value": 3, "text": "Both"},
          //             { "value": 4, "text": "Other"},

          //           ]
          // },
          {
            type: "comment",
            name: "SP_Context_Ex",
            title: "Please explain:",
            visibleIf: "{SP_Context}= 4",
            isRequired: false
          },
          // {
          //   type: "radiogroup",
          //   name: "SP_Level",
          //   title: "Indicate your level of participation: ",
          //   isRequired: false,
          //   choices: [
          //             { "value": 1, "text": "Recreational Only"},
          //             { "value": 2, "text": "Mainly recreational, but also competitive"},
          //             { "value": 3, "text": "Mainly competitive, but also recreational"},
          //             { "value": 4, "text": "Competitive only"},
          //             { "value": 5, "text": "Other"},

          //           ]
          // },

          {
            type: "comment",
            name: "SP_Level_Ex",
            title: "Please explain:",
            visibleIf: "{SP_Level}=5",
            isRequired: false
          },
          // {
          //    name: "SP_Level_Current",
          //    type: "text",
          //    title: "What is your current level of participation?",
          //    minLength: 10,
          //    isRequired: false
          //   },

          //  {
          //  name: "SP_Level_Highest",
          //  type: "text",
          //  title: "What was your highest level in this sport?",
          //  minLength: 10,
          //  isRequired: false
          // },
          {
            type: "radiogroup",
            name: "SP_Fac",
            title: "The sports facility you mainly play/practice is: ",
            isRequired: false,
            choices: [
              { "value": 1, "text": "No sports facility" },
              { "value": 2, "text": "A public facility (community sport complex run by the city)" },
              { "value": 3, "text": "A private facility (owned by the club or a private person)" },
              { "value": 4, "text": "Other" },
            ]
          },
          {
            type: "comment",
            name: "SP_Fac_Ex",
            title: "Please explain:",
            visibleIf: "{SP_Fac}= 4",
            isRequired: false
          },
          {
            name: "SP_Fac_PC",
            type: "text",
            title: "Can you provide the first 3 characters of the postal code or name of the city of the facility where you play/practice most frequently?",
            minLength: 3,
            isRequired: false
          },
          // question 10 

          {
            type: "html",
            name: "practice_intro",
            html: `<b>Please tell us about your practices and competitions over the past year for the (para)sport under investigation. Answer the practice questions and competition questions separately.</b>`
          },
          {
            type: "matrixdropdown",
            name: "practice_table",
            title: "PRACTICES (TRAINING SESSIONS)",
            description: "For each period, estimate your usual number of practices per week and the time spent per practice.",
            isRequired: false,
            columns: [
              { name: "SP_PR_1", title: "Sept–Dec \n (16 weeks)", cellType: "text", inputType: "number", min: 0, step:0.5, defaultValue:0},
              { name: "SP_PR_2", title: "Winter Holiday \n (2 weeks)", cellType: "text", inputType: "number", min: 0, step:0.5, defaultValue:0},
              { name: "SP_PR_3", title: "Jan–Mar \n (12 weeks)", cellType: "text", inputType: "number", min: 0, step:0.5, defaultValue:0},
              { name: "SP_PR_4", title: "Apr–Jun \n (13 weeks)", cellType: "text", inputType: "number", min: 0, step:0.5, defaultValue:0},
              { name: "SP_PR_5", title: "Jul–Aug \n  (9 weeks)", cellType: "text", inputType: "number", min: 0, step:0.5, defaultValue:0}
            ],
            rows: [
              { value: "FREQ", text: "1. Number of practices per week" },
              { value: "NT", text: "2. Practice time only, per practice" },
              { value: "GT", text: "3. Total time per practice, including travel/changing/socializing" }
            ],
            cellErrorLocation: "bottom",
            verticalAlign: "middle"

          },
          
          // calculation for practice table
          // These expressions work, but they display the results. 
          // This may be good or bad right now.
          {
            type: "expression",
            name: "SP_PR_Freq",
            title: "Total practices last year",
            displayStyle: "decimal",
            precision: 2,
            expression:
              "{practice_table.FREQ.SP_PR_1} * 16 + " + // keep this idea, but use the new format
              "{practice_table.FREQ.SP_PR_2} * 2  + " +
              "{practice_table.FREQ.SP_PR_3} * 12 + " +
              "{practice_table.FREQ.SP_PR_4} * 13 + " +
              "{practice_table.FREQ.SP_PR_5} * 9"
          },
          {
            type: "expression",
            name: "SP_PR_NT_Total",
            title: "Total NET hours (all periods)",
            displayStyle: "decimal",
            precision: 2,
            expression:
              "{practice_table.FREQ.SP_PR_1} * {practice_table.NT.SP_PR_1} * 16 + " +
              "{practice_table.FREQ.SP_PR_2} * {practice_table.NT.SP_PR_2} * 2  + " +
              "{practice_table.FREQ.SP_PR_3} * {practice_table.NT.SP_PR_3} * 12 + " +
              "{practice_table.FREQ.SP_PR_4} * {practice_table.NT.SP_PR_4} * 13 + " +
              "{practice_table.FREQ.SP_PR_5} * {practice_table.NT.SP_PR_5} * 9"
          },
          {
            type: "expression",
            name: "SP_PR_GT_Total",
            title: "Total GROSS hours (all periods)",
            displayStyle: "decimal",
            precision: 2,
            expression:
              "{practice_table.FREQ.SP_PR_1} * {practice_table.GT.SP_PR_1} * 16 +" +
              "{practice_table.FREQ.SP_PR_2} * {practice_table.GT.SP_PR_2} * 2  + " +
              "{practice_table.FREQ.SP_PR_3} * {practice_table.GT.SP_PR_3} * 12 + " +
              "{practice_table.FREQ.SP_PR_4} * {practice_table.GT.SP_PR_4} * 13 + " +
              "{practice_table.FREQ.SP_PR_5} * {practice_table.GT.SP_PR_5} * 9"
          },
          // Championships question


          // CHANGE THIS TO BE NUMBER INPUT WITH ZERO AS DEFAULT AND STEP SIZE OF 1.
          {
            "type": "matrixdropdown",
            "name": "COMP_Freq",
            "title": "COMPETITIONS (GAMES, TOURNAMENTS, OR CHAMPIONSHIPS)",
            description: 'Estimate how many competitions, games, tournaments, or championships you participated in over the past year.',

            "columnMinWidth": "130px",
            "columns": [
              // {
              //   "name": "usage",
              //   "title": "Do you pay?",
              //   "cellType": "radiogroup",
              //   "choices": [ "Yes", "No" ],
              //   "defaultValue": "No"
              // },
              {
                "name": "SP_CC",
                "title": "On average, how many do you participate in per year?",
                "choices": [
                  { "text": "0", "value": 0 },
                  { "text": "1", "value": 1 },
                  { "text": "2", "value": 2 },
                  { "text": "3", "value": 3 },
                  { "text": "4", "value": 4 },
                  { "text": "5", "value": 5 },
                  { "text": "6", "value": 6 },
                  { "text": "7", "value": 7 },
                  { "text": "8", "value": 8 },
                  { "text": "9", "value": 9 },
                  { "text": "10 or more", "value": 10 }
                ],
              },
            ],
            "rows": [
              { "text": "One-day competitions without an overnight stay.", "value": "ODWithout" }, 
              // Using numerical values may make it hard to perform calculations later. 
              // Consider using text values or descriptive labels instead.
              { "text": "One-day competitions with one overnight stay.", "value": "ODWith" },
              { "text": "Competitions with two overnight stays", "value.": "TWONIGHTS" },
              { "text": "Competitions with three or more overnight stays.", "value": "Multiday" },
              { "text": "Vacations (the PRIMARY purpose of your travel is to participate in your sport)", "value": "Vacations" }
            ],
            "transposeData": false
          },

          // {
          //   name: "SP_CC_ODWithout",
          //   type: "text",
          //   inputType: "number",
          //   title: "1. One-day competitions without an overnight stay: On average, how many do you participate in per year?",
          //   min: 0,
          //   isRequired: false
          // },
          // {
          //   name: "SP_CC_ODWith",
          //   type: "text",
          //   inputType: "number",
          //   title: "2. One-day competitions that require an overnight stay: On average, how many do you participate in per year?",
          //   min: 0,
          //   isRequired: false
          // },
          // {
          //   name: "SP_CC_Weekend",
          //   type: "text",
          //   inputType: "number",
          //   title: "3. Weekend competitions (2 nights): On average, how many do you participate in per year?",
          //   min: 0,
          //   isRequired: false
          // },
          // {
          //   name: "SP_CC_Multiday",
          //   type: "text",
          //   inputType: "number",
          //   title: "4. Multi-day competitions (3 or more nights): On average, how many do you participate in per year?",
          //   min: 0,
          //   isRequired: false
          // },
        ]
      },
//       // ################################################################
//       // ##### SECTION II    #############################################
      {
        name: "CostActiveSportParticipation",
        title: "Section II: Cost of Active (Para)Sport Participation",
        elements: [
          //make it two columns
          {
            type: "radiogroup",
            name: "Cost_Gen",
            title: "How much do you think you spend annually on your (para)sport participation?",
            isRequired: false,
            choices: [
              { "value": 1, "text": " <  100 CAD/yr " },
              { "value": 2, "text": "100 < 250 CAD/yr" },
              { "value": 3, "text": "250 < 500 CAD/yr" },
              { "value": 4, "text": "500 < 750 CAD/yr" },
              { "value": 5, "text": "750 < 1,000 CAD/yr" },
              { "value": 6, "text": "1,000 < 1,500 CAD/yr" },
              { "value": 7, "text": "1,500 < 3,000 CAD/yr" },
              { "value": 8, "text": "3,000 < 5,000 CAD/yr" },
              { "value": 9, "text": "5,000 < 10,000 CAD/yr" },
              { "value": 10, "text": "> 10,000 CAD/yr" },
            ],
            colCount: 3,
          },
          {
            type: "html",
            name: "membership_subtitle",
            html: `
                <div style="font-weight: bold; font-size: 40px; margin-top: 20px;">
                II.1. Membership and Entrance Fees / Year
                </div>`
          },
// Can the text in () below be in italics or grey?  
// One solution could be: to have a column of just text, with no input it just includes the stuff in ()
// Can the inputType: number be changed so that there are no up/down arrows???
// Add a column name above the first column???
// make it say: ANNUAL FEES
// Can the yes/no responses be centered under their column name

    {
      "type": "matrixdropdown",
      "name": "annual_membership_fees",
      "title": "ANNUAL FEES",
      //"titleLocation": "hidden",
      "columnMinWidth": "130px",
      "columns": [
        {
          "name": "Cost",
          "title": "Did you pay this fee?",
          "cellType": "radiogroup",
          "choices": [ "Yes", "No" ],
          "defaultValue": "No"
        },
        {
          "name": "Cost_$Y",
          "title": "If yes, how much $/year?",
          "cellType": "text",
          "inputType": "number",
          "enableIf": "{row.Cost} = 'Yes'",
          "allowResize": false,
        },
      ],
      "rows": [
        { "text": "Membership fee", "value": "Memb" },
        { "text": "License or registration fee (Paid to a sport governing body, league, or federation to be officially registered and eligible to participate in organized competition, if not included in the membership fee.)", "value": "Lic" },
        { "text": "Other program fees (If not included in the previous questions.)", "value": "PF" },
        { "text": "Tournament or competition fees (If not included in the membership fee.)", "value": "Comp" }
      ],
      "transposeData": false
    },
    // These expressions are correct (Aug 10, 2026)
      {
          type: "expression",
          name: "Annual_Fees_$Y",
          title: "Estimated annual fees",
          displayStyle: "decimal",
          precision: 2,
          expression:
            "{annual_membership_fees.Memb.Cost_$Y} + {annual_membership_fees.Lic.Cost_$Y} + {annual_membership_fees.PF.Cost_$Y} + {annual_membership_fees.Comp.Cost_$Y}"
  },
  
// ADD A COLUMN NAME TO COLUMN ONE: 
// PER-USE FEES
// Aug 26, the following question does not work
          {
      "type": "matrixdropdown",
      "name": "per_use_fees",
      "title": "PER-USE FEES",

      "showHeader": true,
      "columnMinWidth": "130px",
      "columns": [
        {
          "name": "Cost",
          "title": "Did you pay this fee?",
          "cellType": "radiogroup",
          "choices": [ "Yes", "No" ],
          "defaultValue": "No"
        },
        {
          "name": "Cost_$U",
          "title": "If yes, average $ per usage?",
          "cellType": "text",
          "inputType": "number",
          "enableIf": "{row.usage} = 'Yes'",
          "allowResize": false,
        },
                {
          "name": "Cost_UY",
          "title": "How many times per year?",
          "cellType": "text",
          "inputType": "number",
          "enableIf": "{row.usage} = 'Yes'",
          "allowResize": false,
        },
      ],
      "rows": [
        { "text": "Entrance and/or rental fees (e.g., green fee, renting a tennis court, drop-in fee)" , value: "Entr" },
      ],
      "transposeData": false
    },
// These expressions are correct (Aug 10, 2026)
    {
        type: "expression",
        name: "Per_Use_Fees_$Y",
        title: "Estimated annual per use fees",
        displayStyle: "decimal",
        precision: 2,
        expression:
          "{per_use_fees.fee_entrance.avg_per_use_fee} * {per_use_fees.fee_entrance.freq_per_use_fee}"
    },
        {
        type: "expression",
        name: "Total_Fees_$Y",
        title: "Estimated annual fees",
        displayStyle: "decimal",
        precision: 2,
        displayStyle: "currency",
        currency: "CAD",
        expression:
          "{Per_Use_Fees_$Y} + {Annual_Fees_$Y}"
    },
        ]
      },



//       {
//         name: "CostActiveSportParticipation",
//         title: "Section II.2. Cost of Coaching and Clinics",
//         elements: [


//           {
//                 "type": "matrixdropdown",
//                 "name": "coaching_costs",
//                 "title": "Coaching and Clinics / Year",
//                 "titleLocation": "hidden",
//                 "showHeader": true,
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Did you pay this fee?",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                     "defaultValue": "No"
//                   },
//                   {
//                     "name": "cost_per_usage",
//                     "title": "If yes, average cost per use",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                           {
//                     "name": "frequency_per_year",
//                     "title": "Number of times per year",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "Lessons, guidance or coaching?", "name":"lesson_cost", "value": 'lessons' },
//                   { "text": "Clinics regarding your sport practice?","value": 'clinics' } 
                  
//                 ],
//                 "transposeData": false
//               },
//               {
//                 type: "expression",
//                 name: "Cost_Coach_$Y",
//                 title: "Estimated yearly coaching cost",
//                 displayStyle: "decimal",
//                 precision: 2,
//                 displayStyle: "currency",
//                 currency: "CAD",
//                 expression:
//                   "{coaching_costs.lessons.cost_per_usage} * {coaching_costs.lessons.frequency_per_year} + " +
//                   "{coaching_costs.clinics.cost_per_usage} * {coaching_costs.clinics.frequency_per_year}"  // keep this idea, but use the new format
//               },


//     //    {
//     //         type: "expression",
//     //         name: "Cost_Coach_$Y",
//     //         title: "Estimated yearly coaching cost",
//     //         //visibleIf: "{Cost_Coach} = 1",
//     //         //expression: "iif({Cost_Coach} = 1 && !isEmpty({Cost_Coach_$U}) && !isEmpty({Cost_Coach_UY}), {Cost_Coach_$U} * {Cost_Coach_UY}, 0)",
//     //         expression: "iif({coaching_costs.lessons.usage} == 'Yes', {coaching_costs.lessons.cost_per_usage} * {coaching_costs.lessons.frequency_per_year}, -99)",
//     //         displayStyle: "decimal",
//     //         //currency: "CAD",
//     //         precision: 2
//     //       },
//     // {
//     //         type: "expression",
//     //         name: "Clinic_Coach_$Y",
//     //         title: "Estimated yearly clinic cost",
//     //         //visibleIf: "{Cost_Coach} = 1",
//     //         //expression: "iif({Cost_Coach} = 1 && !isEmpty({Cost_Coach_$U}) && !isEmpty({Cost_Coach_UY}), {Cost_Coach_$U} * {Cost_Coach_UY}, 0)",
//     //         expression: "iif({coaching_costs.clinics.usage} == 'Yes', {coaching_costs.clinics.cost_per_usage} * {coaching_costs.clinics.frequency_per_year}, -99)",
//     //         displayStyle: "decimal",
//     //         //currency: "CAD",
//     //         precision: 2
//     //       },
//     //       {
//     //         type: "expression",
//     //         name: "Cost_Clinic_$Y",
//     //         title: "Estimated yearly clinic cost",
//     //         visibleIf: "{Cost_Clinic} = 1",
//     //         expression: "iif({Cost_Clinic} = 1 && !isEmpty({Cost_Clinic_$U}) && !isEmpty({Cost_Clinic_UY}), {Cost_Clinic_$U} * {Cost_Clinic_UY}, 0)",
//     //         displayStyle: "currency",
//     //         currency: "CAD",
//     //         precision: 2
//     //       },

//         ]
//       },
//       {
//         name: "CostActiveSportParticipation",
//         title: "Section II.3: Cost of Apparel and Equipment",
//         elements: [

//           //moved to section apparel and Equipment from section I: ability

//           {
//             type: "radiogroup",
//             title: "Does your ability require adaptive apparel/equipment to participate this sport?",
//             name: 'AB_EQ_DL_Ex',
//             titleLocation: "left",
//             colCount: 0,
//             choices: [
//               'Yes',
//               'No',
//             ]
//           },

//           {
//             type: "comment",
//             name: "adaptive_equipment_explanation",
//             title: "Please explain:",
//             visibleIf: "{AB_EQ_DL_Ex} = 'yes'",
//             isRequired: false
//           },

//           // question 10 to adjust
//           //fix html text 
//           {
//             type: "html",
//             name: "apparel_subtitle",
//             html: `
//       <div style="font-weight: bold; font-size: 20px; margin-top: 20px;">
//       List ALL a) sports apparel, b) sports equipment, and c) other equipment you currently possess and purchased specifically to play your sport. 
//       How much did you pay and how long are you/have you been using this/these item(s)? 
//       </div>`
//           },


//           /* ----------------- (a) Sports apparel ----------------- */ //fixed 
//           {
//             type: "matrixdynamic",
//             name: "SP_APP",
//             title: "a) Sports apparel (e.g., shoes, pants, shirts …)",
//             addRowText: "➕ Add apparel item",
//             removeRowText: "➖ Remove",
//             minRowCount: 1,
//             rowCount: 0,
//             showFooter: true,
//             columns: [
//               { name: "SP_APP_Describe", title: "Describe items", cellType: "text", placeholder: "e.g., 6 t-shirts", isRequired: false, width: "35%" },
//               { name: "SP_APP_Cost", title: "How much did you pay in total?", cellType: "text", inputType: "number", placeholder: "e.g., $120", width: "15%" },
//               { name: "SP_APP_Years_of_Usage", title: "How many years of usage?", cellType: "text", inputType: "number", placeholder: "e.g., 2 years", min: 0, isRequired: false, width: "15%" },
//               {
//                 name: "SP_APP_$Y",
//                 title: "Write-off / year (C$)",
//                 cellType: "expression",
//                 /* expression:
//                   "iif(or({row.SP_APP_Usage} = 0, isEmpty({row.SP_APP_Usage})), 0," +
//                   " {row.SP_APP_Quantity} * {row.SP_APP_$U} / {row.SP_APP_Usage})",
//                   */
//                 expression: "{row.SP_APP_Cost}/{row.SP_APP_Years_of_Usage}",
//                 displayStyle: "currency",
//                 currency: "CAD",

//                 totalType: "sum",
//                 totalDisplayStyle: "currency",
//                 currencyDisplay: "code",
//                 visible: false,
//                 width: "15%"
//               } 
//             ],
//             footerText: "Sub-total (a)"
//           },
//           {
//             type: "expression",
//             name: "SP_APP_$Y_Total",
//             title: "Sub-total (a): Total write-off per year (all apparel items)",
//             expression: "{SP_APP-total.SP_APP_$Y}",
//             //expression: "{SP_APP.SP_APP_Cost}",
//             displayStyle: "currency",
//             currency: "CAD",
//             //currencyDisplay: "code",
//             visible: true
//           },

//           /* --------------- (b) Sports equipment ----------------- */
//           {
//             type: "matrixdynamic",
//             name: "SP_Equip",
//             title: "b) Sports equipment (e.g., skates, golf clubs, bags …)",
//             addRowText: "➕ Add equipment item",
//             removeRowText: "➖ Remove",
//             minRowCount: 1,
//             rowCount: 0,
//             showFooter: true,
//             columns: [
//               { name: "SP_Equip_Describe", title: "Describe items", cellType: "text", placeholder: "e.g., specialized wheelchair", isRequired: false, width: "35%" },
//               //{ name: "SP_Equip_Quantity", title: "Quantity", cellType: "text", inputType: "number", min: 0, isRequired: false, width: "10%" },
//               { name: "SP_Equip_Cost", title: "How much did you pay in total?", cellType: "text", placeholder: "e.g., $5000",inputType: "number", width: "15%" },
//               { name: "SP_Equip_Years_of_Usage", title: "How many years of usage?", cellType: "text", placeholder: "e.g., 10 years", inputType: "number", isRequired: false, width: "15%" },
//               {
//                 name: "SP_Equip_$Y",
//                 title: "Write-off / year (C$)",
//                 cellType: "expression",
//                 expression: "{row.SP_Equip_Cost}/{row.SP_Equip_Years_of_Usage}",
//                 displayStyle: "currency",
//                 currency: "CAD",
//                 totalType: "sum",
//                 totalDisplayStyle: "currency",
//                 currencyDisplay: "code",
//                 visible: false,
//                 width: "15%"
//               },
//             ],
//             footerText: "Sub-total (b)"
//           },
//           {
//             type: "expression",
//             name: "SP_Equip_$Y_Total",
//             title: "Sub-total (a): Total write-off per year (all equipment items)",
//             expression: "{SP_Equip-total.SP_Equip_$Y}",
//             displayStyle: "currency",
//             currency: "CAD",
//             //currencyDisplay: "code",
//             visible: true
//           },

//           /*  --------- c) Additional equipment -----------------   */
//           {
//             type: "matrixdynamic",
//             name: "SP_AddEquip",
//             title: "C) Additional equipment, ex.towels ..",
//             addRowText: "➕ Add equipment item",
//             removeRowText: "➖ Remove",
//             minRowCount: 1,
//             rowCount: 0,
//             showFooter: true,
//             columns: [
//               { name: "SP_AddEquip_Describe", title: "Describe items", cellType: "text", placeholder: "e.g., towel", isRequired: false, width: "35%" },
//               { name: "SP_AddEquip_Cost", title: "How much did you pay in total?", cellType: "text", inputType: "number", placeholder: "e.g., $40", width: "15%" },
//               { name: "SP_AddEquip_Years_of_Usage", title: "How many years of usage?", cellType: "text", inputType: "number", placeholder: "e.g., 5 years", isRequired: false, width: "15%" },
//               {
//                 name: "SP_AddEquip_$Y",
//                 title: "Write-off / year (C$)",
//                 cellType: "expression",
//                 expression: "{row.SP_AddEquip_Cost}/{row.SP_AddEquip_Years_of_Usage}",
//                 displayStyle: "currency",
//                 currency: "CAD",
//                 totalType: "sum",
//                 totalDisplayStyle: "currency",
//                 currencyDisplay: "code",
//                 visible: false,
//                 width: "15%"
//               },
//             ],
//             footerText: "Sub-total (c)"
//           },

//          {
//             type: "expression",
//             name: "SP_AddEquip_$Y_Total",
//             title: "Sub-total (a): Total write-off per year (all additional equipment items)",
//             expression: "{SP_AddEquip-total.SP_AddEquip_$Y}",
//             displayStyle: "currency",
//             currency: "CAD",
//             //currencyDisplay: "code",
//             visible: true
//           },

//           // question 11


//           {
//             type: "checkbox",
//             name: "sports_equipment_sources",
//             title: "Where do you usually buy your sports apparel and/or equipment? (Check all that apply)",
//             isRequired: false,
//             itemLayout: "horizontal",
//             choices: [
//               { "value": 1, "text": "In a general store, not specialized in sport (e.g., Walmart, ...)" },
//               { "value": 2, "text": "In a general sports store (e.g., Sport Check, ...)" },
//               { "value": 3, "text": "In a privately owned sports shop" },
//               { "value": 4, "text": "In a shop specialized in your specific sport (ex. golf shop)" },
//               { "value": 5, "text": "Buy from individual people or second hand" },
//               { "value": 6, "text": "Wholesale" },
//               { "value": 7, "text": "Mail order company (e.g., Amazon, eBay, ...)" },
//               { "value": 8, "text": "Other (please describe)" }
//             ],
//             colCount: 2
//           },

//           {
//             type: "comment",
//             name: "sports_equipment_sources_other",
//             title: "If you selected 'Other (please describe)', please specify:",
//             visibleIf: "{sports_equipment_sources} contains 8"
//           },

//           // question 12 

//         {
//                 "type": "matrixdropdown",
//                 "name": "EQ_RentMaintenance",
//                 "title": "Rental Fees and Maintenance Costs",
//                 //"titleLocation": "hidden",
//                 "showHeader": true,
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Did you pay?",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                     "defaultValue": "No"
//                   },
//                   {
//                     "name": "cost_per_usage",
//                     "title": "If yes, average cost per use",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                           {
//                     "name": "frequency_per_year",
//                     "title": "Number of times per year",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "Rental fees for sports apparel or equipment", "value": 'rental_equipment' },
//                   { "text": "Maintenance costs for sports apparel or equipment? (e.g., maintenance, repair, dry cleaning, …)", "value": 'maintenance_equipment' },                  
//                 ],
//                 "transposeData": false
//               },
         
//  {
//             type: "expression",
//             name: "EQ_RentMaintenance_$Y_Total",
//             title: "Estimated yearly rental cost",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2,
//             visible: true,
//             expression:
//               "{EQ_RentMaintenance.rental_equipment.cost_per_usage} * {EQ_RentMaintenance.rental_equipment.frequency_per_year}+" + 
//               "{EQ_RentMaintenance.maintenance_equipment.cost_per_usage} * {EQ_RentMaintenance.maintenance_equipment.frequency_per_year}"
//           },
//           {
//             type: "expression",
//             name: "SP_Equip_APP_$Y_Total",
//             title: "Apparel & Equipment / YEAR (Total)",
//             displayStyle: "decimal",
//             precision: 2,
//             expression: "{SP_APP_$Y_Total}" + " + {SP_Equip_$Y_Total}" + " + {SP_AddEquip_$Y_Total}" + " + {EQ_RentMaintenance_$Y_Total}",
//             displayStyle: "currency",
//             currency: "CAD",
//           },

//         ]

//         // to add the sum of maintenance and apparel together 


//       },



//       {
//         name: "CostActiveSportParticipation",
//         title: "Section II.4: Travel Costs",
//         elements: [
//           // question 14


//           //if select value 8 add a blank box to explain their special transportation
//            {
//                 "type": "matrixdropdown",
//                 "name": "TR_Pr",
//                 "title": "Check all the transportation modes you use for your PRACTICE sessions.",
//                 "showHeader": true,
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Yes/No",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                     "defaultValue": "No"
//                   },
//                   {
//                     "name": "usage_percentage",
//                     "title": "How often in %?",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "Foot/Wheeling", "value": 'travel_foot_wheeling' },
//                   { "text": "Bike", "value": 'travel_bike' },
//                   { "text": "Motorbike", "value": 'travel_motorbike' },
//                   { "text": "Family/Own Car", "value": 'travel_family_own_car' },
//                   { "text": "Public Transportation", "value": 'travel_public_transportation' },
//                   { "text": "Carpooling", "value": 'travel_carpooling' },
//                   { "text": "Taxi/Private Bus", "value": 'travel_taxi_private_bus' },
//                   { "text": "Special Transportation", "value": 'travel_special_transportation' },
//                   { "text": "Other", "value": 'travel_other' }
//                 ],
//                 "transposeData": false
//               },
//           {
//             name: "TR_Distance_OneWay_MotorbikeCar",
//             type: "text",
//             inputType: "number",
//             title: "If by Motorbike or Car, how many km one way per practice?",
//             visibleIf: "{TR_Pr.travel_family_own_car.usage} = 'Yes' || {TR_Pr.travel_motorbike.usage} = 'Yes'", 
//             minLength: 10,
//             isRequired: false
//           },
//           {
//             name: "TR_Cost_Oneway_PublicTransport",
//             type: "text",
//             inputType: "number",
//             title: "If by Public Transportation, what is the one-way cost?",
//             visibleIf: "{TR_Pr.travel_public_transportation.usage} = 'Yes'",
//             minLength: 10,
//             isRequired: false
//           },
//           {
//             name: "TR_Cost_Oneway_Carpool",
//             type: "text",
//             inputType: "number",
//             title: "If Carpooling, what is the one-way cost?",
//             visibleIf: "{TR_Pr.travel_carpooling.usage} = 'Yes'", 
//             minLength: 10,
//             isRequired: false
//           },
//           {
//             name: "TR_Cost_Oneway_TaxiPrivateBus",
//             type: "text",
//             inputType: "number",
//             title: "If by Taxi/Private Bus, what is the one-way cost?",
//             visibleIf: "{TR_Pr.travel_taxi_private_bus.usage} = 'Yes'", 
//             minLength: 10,
//             isRequired: false
//           },          
//           {
//             name: "TR_Cost_Oneway_SpecialTransport",
//             type: "text",
//             inputType: "number",
//             title: "If by Special Transport, what is the one-way cost?",
//             visibleIf: "{TR_Pr.travel_special_transportation.usage} = 'Yes'", 
//             minLength: 10,
//             isRequired: false
//           },          

//           {
//             name: "TR_Cost_Oneway_Other",
//             type: "text",
//             inputType: "number",
//             title: "If by Other, what is the one-way cost?",
//             visibleIf: "{TR_Pr.travel_other.usage} = 'Yes'", 
//             minLength: 10,
//             isRequired: false
//           },        
          
//           // Calculated costs for each transporation mode
//           //
//           // The gas rate used is 0.5
//           // This value needs to be added and loaded from a configuration file
//           {
//             type: "expression",
//             name: "Motorbike_Cost_$Y",
//             title: "Estimated yearly motorbike transportation cost",
//             expression: "0.5 * {SP_PR_Freq}*{TR_Pr.travel_motorbike.usage_percentage}/100*2*{TR_Distance_OneWay_MotorbikeCar}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },
//           {
//             type: "expression",
//             name: "Car_Cost_$Y",
//             title: "Estimated yearly car transportation cost",
//             expression: "0.5 * {SP_PR_Freq}*{TR_Pr.travel_family_own_car.usage_percentage}/100*2*{TR_Distance_OneWay_MotorbikeCar}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },

//           {
//             type: "expression",
//             name: "PublicTransport_Cost_$Y",
//             title: "Estimated yearly public transportation cost",
//             expression: "{SP_PR_Freq}*{TR_Pr.travel_public_transportation.usage_percentage}/100*2*{TR_Cost_Oneway_PublicTransport}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },
//            {
//             type: "expression",
//             name: "Carpool_Cost_$Y",
//             title: "Estimated yearly public transportation cost",
//             expression: "{SP_PR_Freq}*{TR_Pr.travel_carpooling.usage_percentage}/100*2*{TR_Cost_Oneway_Carpool}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },
//           {
//             type: "expression",
//             name: "Taxi_Cost_$Y",
//             title: "Estimated yearly taxi cost",
//             expression: "{SP_PR_Freq}*{TR_Pr.travel_taxi_private_bus.usage_percentage}/100*2*{TR_Cost_Oneway_TaxiPrivateBus}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },

//           {
//             type: "expression",
//             name: "Taxi_SpecialTransport_$Y",
//             title: "Estimated yearly special transportation cost",
//             expression: "{SP_PR_Freq}*{TR_Pr.travel_special_transportation.usage_percentage}/100*2*{TR_Cost_Oneway_SpecialTransport}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },
//           {
//             type: "expression",
//             name: "Other_Cost_$Y",
//             title: "Estimated yearly other transportation cost",
//             expression: "{SP_PR_Freq}*{TR_Pr.travel_other.usage_percentage}/100*2*{TR_Cost_Oneway_Other}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },

//           {
//             type: "expression",
//             name: "Total_transport_cost_$Y",
//             title: "Estimated yearly TOTAL transportation cost",
//             expression: "{Motorbike_Cost_$Y} + {Car_Cost_$Y} + " +
//               "{PublicTransport_Cost_$Y} + {Carpool_Cost_$Y} + {Taxi_Cost_$Y} + " + 
//               "{Taxi_SpecialTransport_$Y} + {Other_Cost_$Y}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },

//           // ****************** TO DO, TO DO, TO DO ************************

//             // make response not as wide and left aligned.


// {
//                 "type": "matrixdropdown",
//                 "name": "TR_Pr",
//                 "title": "Parking costs for PRACTICE",
//                 "showHeader": true,
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Yes/No",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                     "defaultValue": "No"
//                   },
//                   {
//                     "name": "travel_parking_cost_per_usage",
//                     "title": "How much $ per year?",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "Do you pay for parking?", "value": 'travel_parking' },
//                 ],
//                 "transposeData": false
//               },


//           //if by car

       

//               {
//                 "type": "matrixdropdown",
//                 "name": "TR_Comp",
//                 "title": "Travel Costs for COMPETITIONS (include ALL expenditures for travel, lodging, meals, etc. not previously included)",
//                 "showHeader": true,
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "In the past year, did you spend money on:",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                     "defaultValue": "No"
//                   },
//                   {
//                     "name": "cost_per_usage",
//                     "title": "Average $ per time",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "One-day games/competitions/championships without an overnight stay.", "value": 'other_oneday_no_overnight' },
//                   { "text": "One-day games/competitions/championships with one overnight stay.", "value": 'other_oneday_with_overnight' },
//                   { "text": "Games/competitions/championships with two-night stay.", "value": 'other_twonight' },
//                   { "text": "Games/competitions/championships with three or more overnight stay.", "value": 'other_threenight' },
//                   { "text": "Vacations (the PRIMARY purpose of your travel is to participate in your sport)", "value": 'other_vacations' },
//                 ],
//                 "transposeData": false
//               },
//           {
//             type: "expression",
//             name: "Total_competition_cost_$Y",
//             title: "Estimated yearly TOTAL competition cost",
//             expression: "{TR_Comp.other_oneday_no_overnight.cost_per_usage}*{COMP_Freq.Comp_Freq_OnedayNoOvernight.Comp_Freq_Value} + " + 
//               "{TR_Comp.other_oneday_with_overnight.cost_per_usage}*{COMP_Freq.Comp_Freq_OnedayWithOvernight.Comp_Freq_Value} + " +
//               "{TR_Comp.other_twonight.cost_per_usage}*{COMP_Freq.Comp_Freq_TwodayWithOvernight.Comp_Freq_Value} + " + 
//               "{TR_Comp.other_threenight.cost_per_usage}*{COMP_Freq.Comp_Freq_ThreedayWithOvernight.Comp_Freq_Value} + " +
//               "{TR_Comp.other_vacations.cost_per_usage}*{COMP_Freq.Comp_Freq_Vacations.Comp_Freq_Value}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },

//         ]
//       },
//       {
//         name: "CostActiveSportParticipation",
//         title: "Section II.5: Social Costs",
//         elements: [
//               {
//                 "type": "matrixdropdown",
//                 "name": "SocialCosts_Practice",
//                 "title": "Social Costs",
//                 "titleLocation": "hidden",
//                 "showHeader": true,
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Did you purchase?",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ]
//                   },
//                   {
//                     "name": "usage_frequency",
//                     "title": "How many times per year?:",
//                     "cellType": "dropdown",
//                     //"choices": [ "Never (0%)", "Rarely (25%)", "Sometimes (50%)", "Often (75%)", "Always (100%)" ],
//                     "choices": [ {text: "Never (0%)", value: 0}, {text: "Rarely (25%)", value: 25},
//                       {text: "Sometimes (50%)", value: 50}, {text: "Often (75%)", value: 75}, {text: "Always (100%)", value: 100}
//                      ],
//                     "defaultValue": 0,
//                   },
//                   {
//                     "name": "cost_per_usage",
//                     "title": "Average $ per time?",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "Drinks or food before, during, or after your PRACTICES?", "value": 'social_costs' },
//                 ],
//                 "transposeData": false
//               },

//           // question 16
//             { 
//                 "type": "matrixdropdown",
//                 "name": "SocialCosts_Club",
//                 "title": "Social Club",
//                 "showHeader": true,
//                 "titleLocation": "hidden",
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Did you pay?",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                   },
//                   {
//                     "name": "cost_per_usage",
//                     "title": "How much $/year?",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "To participate in club activities (e.g., fundraisers, diner, chocolate bar sales, …)?", "value": "social_club_costs" },
//                 ],
//                 "transposeData": false
//               },

//           {
//             type: "expression",
//             name: "Total_Practice_Social_cost_$Y",
//             title: "Estimated yearly TOTAL social cost during practices",
//             expression: "{SP_PR_Freq}*{SocialCosts_Practice.social_costs.cost_per_usage}*{SocialCosts_Practice.social_costs.usage_frequency}/100 + " +
//               "{SocialCosts_Club.social_club_costs.cost_per_usage}",
//             displayStyle: "currency",
//             currency: "CAD",
//             precision: 2
//           },


//           // Other indirect costs
//         ]
//       },
// // DONE UP TO HERE (AUGUST 12)
//       // IDEA IDEA IDEA
//       // Can the text enetered on page one, the sport name, be used throughout the survey??
//       // IDEA 
//       {
//         name: "CostIndirectCosts",
//         title: "Section II.6: Other Indirect Costs Related to THIS (Para)Sport Participation",
//         // Can I edit the CSS to make the description a bit larger and keep it black?
//         // If so then every section will have this description.
//         // IDEAL would be to replace THIS with the name of the actual sport they typed in,
//         //description: "Related to THIS (para)sport participation",
//         elements: [
//           // question 17
//            { 
//                 "type": "matrixdropdown",
//                 "name": "B_P",
//                 "title": "Related to THIS sport",
//                 "showHeader": true,
//                 "titleLocation": "hidden",
//                 "columnMinWidth": "130px",
//                 "columns": [
//                   {
//                     "name": "usage",
//                     "title": "Did you pay for?",
//                     "cellType": "radiogroup",
//                     "choices": [ "Yes", "No" ],
//                   },
//                   {
//                     "name": "cost_per_usage",
//                     "title": "How much $/year?",
//                     "cellType": "text",
//                     "inputType": "number",
//                     "enableIf": "{row.usage} = 'Yes'",
//                     "allowResize": false,
//                   },
//                 ],
//                 "rows": [
//                   { "text": "Extra medical costs and/or care costs (e.g., physiotherapy, medication, …)", "value": 'other_medical' },
//                   { "text": "Extra costs to take care of your body (e.g., body creme, …) or to buy special nutrition (e.g., supplements, …)", "value": 'other_body_care' },
//                   { "text": "Extra insurance costs related to your (para)sports participation (if not already included in the membership fee)", "value": 'other_insurance' },
//                   { "text": "Extra costs for baby-sitting/pet sitting", "value": 'other_babysitting' },
//                   { "text": "Specific documentation (ex. online subscriptions, eBooks, newspapers, books, magazines, …)", "value": 'other_documentation' },
//                   { "text": "Attending competitions as a spectator", "value": 'other_spectator' },
//                   { "text": "Any other indirect costs not already included", "value": 'other_indirect' },
//                 ],
//                 "transposeData": false
//               },

//               {
//                 type: "expression",
//                 name: "Total_other_indirect_cost_$Y",
//                 title: "Estimated yearly TOTAL other indirect costs",
//                 expression: "{B_P.other_medical.cost_per_usage} + {B_P.other_body_care.cost_per_usage} + " +
//                   "{B_P.other_insurance.cost_per_usage} + {B_P.other_babysitting.cost_per_usage} + " +
//                   "{B_P.other_documentation.cost_per_usage} + {B_P.other_spectator.cost_per_usage} + " +
//                   "{B_P.other_indirect.cost_per_usage}",
//                 displayStyle: "currency",
//                 currency: "CAD",
//                 precision: 2
//               },
//             ]
//           },

        
//           // question 24

//       {
//         name: "CostActiveSportParticipation",
//         title: "Section II.7: Sports Earnings/year",
//         // description: "Related to THIS (Para)Sport Participation"
//         elements: [
//           {
//             type: "radiogroup",
//             name: "SP_earn_YN",
//             title: "Did you earn money related to your (para)sports participation (e.g., prize money, any other monetary returns,)?",
//             choices: [
//               "Yes",
//               "No"
//             ],
//             colCount: 2,
//             showOtherItem: false,
//             isRequired: false
//           },
//           {
//             type: "matrixdynamic",
//             name: "SP_Earnings",
//             title: "If yes, describe",
//             titleLocation: "hidden",
//             addRowText: "➕ Add source",
//             removeRowText: "➖ Remove",
//             minRowCount: 1,
//             rowCount: 0,
//             showFooter: true,
//             columns: [
//               { name: "SP_Earn_Describe", title: "If yes, describe source", cellType: "text", placeholder: "Describe source", isRequired: false, width: "35%" },
//               { name: "SP_Earn_$Y", title: "How much per year?", cellType: "text", inputType: "number", isRequired: false, width: "15%" },
//               {
//                 name: "SP_Earnings_$Y",
//                 title: "Write-off / year (C$)",
//                 cellType: "expression",
//                 expression: "{row.SP_Earn_$Y}",
//                 displayStyle: "currency",
//                 currency: "CAD",
//                 totalType: "sum",
//                 totalDisplayStyle: "currency",
//                 currencyDisplay: "code",
//                 visible: true,
//                 width: "15%"
//               } 
//             ],
//           },
//           {
//             type: "expression",
//             name: "SP_Earnings_$Y_Total",
//             title: "Sub-total (a): Total write-off per year (all apparel items)",
//             expression: "{SP_Earnings-total.SP_Earnings_$Y}",
//             displayStyle: "currency",
//             currency: "CAD",
//             //currencyDisplay: "code",
//             visible: true
//           },
          
//         ]
//       },


//       // SECTION IV : General information
//       {
//         name: "GeneralInformation",
//         title: "Section III: General Information",
//         elements: [
//           {
//             type: "dropdown",
//             name: "Gender",
//             title: "Gender",
//             choices: [
//               "Male",
//               "Female"
//             ],
//             showOtherItem: true,
//             otherText: "You don't have an option that applies to me. I identify as:",
//             isRequired: false
//           },


//           //dropdown to 100
//           {
//             type: "dropdown",
//             name: "Age",
//             title: "Your age:",
//             isRequired: false,
//             choices: Array.from({ length: 100 }, (_, i) => i + 1) // 1–100
//           },

//       {
//           type: "radiogroup",
//           name: "HH_FirstNations",
//           title: "Do you identify as First Nations, Inuk/Inuit and/or Métis?",
          
//           choices: [ "Yes, First Nations",
//                     "Yes, Inuk/Inuit",
//                     "Yes, Métis",
//                     "No",
//                     "Do not know",
//                     "Prefer not to answer"
//           ],
//           "isRequired": false,
//           "colCount": 2,
//           "showNoneItem": false,
//           "showOtherItem": false,
//           "showSelectAllItem": false,
//           "separateSpecialChoices": false
//         },
//       {
//           type: "checkbox",
//           name: "HH_Race",
//           title: "Which category(ies) best describes your race or racial background? Check all that apply:",
          
//           choices: [ "Black",
//                     "East Asian",
//                     "Indigenous (First Nations, Inuk/Inuit, Métis)",
//                     "Latin American",
//                     "Middle Eastern",
//                     "South Asian",
//                     "Southeast Asian",
//                     "White",
//                     "Do not know",
//                     "Prefer not to answer"
//           ],
//           "isRequired": false,
//           "colCount": 2,
//           "showNoneItem": false,
//           "showOtherItem": true,
//           "otherText": "Another race category",
//           "showSelectAllItem": false,
//           "separateSpecialChoices": false
//         },

//                     //dropdown to 20
//           {
//             type: "dropdown",
//             name: "HH_Npeople",
//             title: "How many people live in your household (under the same roof) including yourself?",
//             isRequired: false,
//             choices: [
//               "1",
//               "2",
//               "3",
//               "4",
//               "5",
//               "6 or more"],
//             defaultValue: 0,
//           },
//           {
//             type: "dropdown",
//             name: "HH_Nchildren",
//             title: "How many children under the age of 18 live in your household?",
//             isRequired: false,
//             choices: [
//               "0",
//               "1",
//               "2",
//               "3",
//               "4 or more"
//               ],
//             defaultValue: 0,
//           },
//           {
//             type: "radiogroup",
//             name: "HH_Position",
//             title: "What is your position in this household?",
//             isRequired: false,
//             choices: [
//               "Son",
//               "Daughter",
//               "Spouse",
//               "Parent",
//               "Guardian",
//               "Sole occupant"
//             ],
//             colCount: 2,
//             showOtherItem: true,
//             otherText: "Other (please specify):"
//           },



//           //columns 2

//           {
//             type: "radiogroup",
//             name: "HH_Educ",
//             title: "  Select the highest level of education achieved by any member in your household? ",
//             isRequired: false,
//             choices: [
//               { "value": 1, "text": "Not completed high school" },
//               { "value": 2, "text": " High school or an equivalent certificate" },
//               { "value": 3, "text": "Some college or university" },
//               { "value": 4, "text": "Apprenticeship or other trades certificate or diploma" },
//               { "value": 5, "text": "College diploma" },
//               { "value": 6, "text": "Undergraduate degree" },
//               { "value": 7, "text": "Graduate/master’s" },
//               { "value": 8, "text": "Professional" },
//               { "value": 9, "text": "Doctoral" },
//               { "value": 10, "text": "Prefer not to answer" },


//             ],
//             colCount: 2,
//           },



//           // make it 2 columns
//           {
//             type: "radiogroup",
//             name: "HH_Income_ExcludeBenefits",
//             title: " What is your annual household income BEFORE taxes, EXCLUDING provincial or federal disability benefits",
//             colCount: 2,
//             isRequired: false,
//             choices: [
//               { "value": 1, "text": "less than $20,000 " },
//               { "value": 2, "text": "$20,000-$39,999" },
//               { "value": 3, "text": "$40,000-$59,999" },
//               { "value": 4, "text": "$60,000-$79,999" },
//               { "value": 5, "text": "$80,000-$99,999" },
//               { "value": 6, "text": "$100,000-$124,999" },
//               { "value": 7, "text": "$125,000-$149,999" },
//               { "value": 8, "text": "$150,000-$199,999" },
//               { "value": 9, "text": "$200,000 or more" },
//               { "value": 10, "text": "Prefer not to answer" },
//             ]
//           },
//           {
//             type: "radiogroup",
//             name: "HH_Income_IncludeBenefits",
//             title: " What is your annual household income BEFORE taxes, INCLUDING provincial or federal disability benefits",
//             colCount: 2,
//             isRequired: false,
//             choices: [
//               { "value": 0, "text": "No difference"},
//               { "value": 1, "text": "less than $20,000" },
//               { "value": 2, "text": "$20,000-$39,999" },
//               { "value": 3, "text": "$40,000-$59,999" },
//               { "value": 4, "text": "$60,000-$79,999" },
//               { "value": 5, "text": "$80,000-$99,999" },
//               { "value": 6, "text": "$100,000-$124,999" },
//               { "value": 7, "text": "$125,000-$149,999" },
//               { "value": 8, "text": "$150,000-$199,999" },
//               { "value": 9, "text": "$200,000 or more" },
//               { "value": 10, "text": "Prefer not to answer" },            ]
//           },
//         ]
//       },


//       {
//         name: "Section Ability",
//         title: "Section IV:  Ability",
//         elements: [
          
//           {
//             type: "radiogroup",
//             title: "Timing of Impairement?",
//             name: "Time_Disability",
//             colCount: 2,
//             choices: [
//               'Congenital',
//               'Acquired',
//               'Able-Bodied',
//               'Prefer not to answer'
//             ]
//           },
//           {
//             type: "checkbox",
//             title: "Classification of disabilities (check all that apply)?",
//             name: "Class_Disability",
//             colCount: 2,
//             choices: [
//               'Mobility',
//               'Vision',
//               'Hearing',
//               'Cognitive function',
//               'Not Applicable'
//             ]
//           },


//           {
//             type: "radiogroup",
//             name: "AB_Loi",
//             title: "How would you rate your ability to perform daily tasks?",
//             isRequired: false,
//             choices: [
//               { "value": 1, "text": "1 - Total Assistance — Dependent, requires full help from others." },
//               { "value": 2, "text": "2 - Maximal Assistance — Needs 75% help to complete tasks." },
//               { "value": 3, "text": "3 - Moderate Assistance — Needs 50% help to complete tasks." },
//               { "value": 4, "text": "4 - Minimal Assistance — Needs 25% help to complete tasks." },
//               { "value": 5, "text": "5 - Supervision or Setup — Requires supervision or verbal cues." },
//               { "value": 6, "text": "6 - Modified Independance — Uses assistive devices but no help needed." },
//               { "value": 7, "text": "7 - Complete Independance — No assistance, performs safely." }
//             ]
//           },

//           {
//             type: "radiogroup",
//             name: "Future_Research",
//             title: "Would you be interested in participating in future research regarding socio-economic and financial barriers of WCB participation?",
//             isRequired: false,
//             colCount: 2,
//             choices: [
//               { value: "Yes", text: "Yes" },
//               { value: "No", text: "No" }
//             ]
//           },

//           {
//             type: "text",
//             name: "Future_Research_Email",
//             inputType: "email",
//             title: "If yes, please provide your e-mail:",
//             visibleIf: "{Future_Research} = 'Yes'",
//             isRequired: false
//           },






//         ]
//       },


    ]
}

// at the end, the excel csv how can the researchers have it if the user does the questionnaire from their phone.

var EN_CostOfSport = {}
EN_CostOfSport.title = title;
EN_CostOfSport.survey_JSON = json;
EN_CostOfSport.shortTitle = shortTitle
EN_CostOfSport.QuestionnaireType = 'Varied'

