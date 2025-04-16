var title = "Échelle des affects positifs et négatifs (PANAS-SF)"
var shortTitle = 'PANAS, baseline'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            {
                type: 'matrix',
                name: 'panas',
                title: 'Indiquez comment vous vous êtes sentis ces derniers jours:',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'panas01', text: "Boulversé(e)"},
                    {value: 'panas02', text: "Hostile"},
                    {value: 'panas03', text: "Vigilant(e)"},
                    {value: 'panas04', text: "Honteux(se)"},
                    {value: 'panas05', text: "Inspiré(e)"},
                    {value: 'panas06', text: "Nerveux(se)"},
                    {value: 'panas07', text: "Déterminé(e)"},
                    {value: 'panas08', text: "Attentif(ve)"},
                    {value: 'panas09', text: "Apeuré(e)"},
                    {value: 'panas10', text: "Actif(ve)"},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'Très peu ou pas du tout'
                    },
                    {
                    "value": 1,
                    "text": 'Un peu'
                    },
                    {
                    "value": 2,
                    "text": 'Moyennement'
                    },
                    {
                    "value": 3,
                    "text": 'Beaucoup'
                    },
                    {
                    "value": 4,
                    "text": 'Énormément'
                    },
                ],
            }
        ]
    }



var references = "Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of brief measures of positive and negative affect: The PANAS scales. *Journal of Personality and Social Psychology, 54*(6), 1063–1070."

var notes = ""

var FR_panasShortBaselineJSON = {}
FR_panasShortBaselineJSON.title = title
FR_panasShortBaselineJSON.shortTitle = shortTitle
FR_panasShortBaselineJSON.survey_JSON = survey_JSON
//FR_panasShortBaselineJSON.description = instructions
FR_panasShortBaselineJSON.QuestionnaireType = 'matrix'
FR_panasShortBaselineJSON.references = references
FR_panasShortBaselineJSON.notes = notes




{/* 
        {prompt: "Boulversé(e)", },
        {prompt: "Hostile",},
        {prompt: "Vigilant(e)", },
        {prompt: "Honteux(se)",},
        {prompt: "Inspiré(e)",},
        {prompt: "Nerveux(se)", },
        {prompt: "Déterminé(e)",},
        {prompt: "Attentif(ve)", },
        {prompt: "Apeuré(e)", },
        {prompt: "Actif(ve)", },*/}