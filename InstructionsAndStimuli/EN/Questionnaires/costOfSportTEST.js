var SUGGEST_ALL_QUESTIONS = false;

var title = "Demographic Questionnaire "
var shortTitle = 'Cost Of Sports'

const json = {
  showProgressBar: "aboveHeader",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: false,
  showCompletedPage: true,
  clearInvisibleValues: "none", //
 pages:
    [
      {
        name: "intro_page",
        elements: 
        [
          {
            type: "matrixdynamic",
            name: "Sport_Curr",
            title: "THIS SURVEY IS ABOUT MY PARTICIPATION IN THE FOLLOWING (PARA)SPORT: " ,
            description: "Context: Non-organized = by yourself or with your family or friends; Club = with a team; School = competing in a school team or doing it at school",
            rowCount: 1,
            minRowCount: 1,
            maxRowCount: 1,
            allowAddRows: false,
            allowRemoveRows: false,
            columns: [
              // Change this to a drop-down menu with other. Start with Wheelchair basketball and other
              {
                name: "Sport_Curr01",
                title: "Sport",
                // cellType: "text",
                cellType: "dropdown",                    
                choices: [ {text: "Basketball", value: 1}],
                showOtherItem: true,
                isRequired: true,
                width: "25%"
              },
              {
                name: "Context",
                title: "Current context",
                cellType: "radiogroup", // change to select all that apply
                // we will add additional levels here too
                choices: [
                  { "value": 1, "text": "Non-organized" }, // Can this be changed to 1,2,3, as per the code book?
                  { "value": 2, "text": "Community Club" },
                  { "value": 3, "text": "School/University" },
                  { "value": 4, "text": "Provincial team" },
                  { "value": 5, "text": "National team" }
                ],
                isRequired: false,
                isSuggested: SUGGEST_ALL_QUESTIONS,
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
                isSuggested: SUGGEST_ALL_QUESTIONS,
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
                isSuggested: SUGGEST_ALL_QUESTIONS,
                width: "25%"
              }
            ],
            rows: [{text: "...", value: 'DDD'}]
          },
            {
            type: "expression",
            name: "CurrentSportName",
            title: "Sport Name",
            visible: true,
            expression:
              "{Sport_Curr01_Text}", // text of the chosen sport; set by updateSportCurrText() in CostOfSport_functions.js
          },
           {
      type: "expression",
      name: "ExpectedCosts",
      title: "Expected Costs",
      visible: true,
      expression: "{Sport_Curr01_Text}"
    },
        ]
      }

       
    ]
  }

var EN_CostOfSport = {}
EN_CostOfSport.title = title;
EN_CostOfSport.survey_JSON = json;
EN_CostOfSport.shortTitle = shortTitle
EN_CostOfSport.QuestionnaireType = 'Varied'

