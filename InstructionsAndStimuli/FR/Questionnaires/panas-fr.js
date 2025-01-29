var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS-FR'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        elements: [
            {
                type: 'matrix',
                name: 'panas',
                title: 'Indiquez comment vous vous sentez en ce moment:',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'panas01', text: "Intéressé(e)"},
                    {value: 'panas02', text: "Perturbé(e)"},
                    {value: 'panas03', text: "Excité(e)"},
                    {value: 'panas04', text: "Bouleversé(e)"},
                    {value: 'panas05', text: "Fort(e)"},
                    {value: 'panas06', text: "Coupable"},
                    {value: 'panas07', text: "Effrayé(e)"},
                    {value: 'panas08', text: "Hostile"},
                    {value: 'panas09', text: "Enthousiaste"},
                    {value: 'panas10', text: "Fier(ière)"},
                    {value: 'panas11', text: "Irritable"},
                    {value: 'panas12', text: "Vigilant(e)"},
                    {value: 'panas13', text: "Honteux(se)"},
                    {value: 'panas14', text: "Inspiré(e)"},
                    {value: 'panas15', text: "Nerveux(se)"},
                    {value: 'panas16', text: "Déterminé(e)"},
                    {value: 'panas17', text: "Attentif(ve)"},
                    {value: 'panas18', text: "Agité(e)"},
                    {value: 'panas19', text: "Actif(ve)"},
                    {value: 'panas20', text: "Apeuré(e)"},
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

var EN_panasJSON = {}
EN_panasJSON.title = title
EN_panasJSON.shortTitle = shortTitle
EN_panasJSON.survey_JSON = survey_JSON
EN_panasJSON.description = instructions
EN_panasJSON.QuestionnaireType = 'likert'
EN_panasJSON.references = references
EN_panasJSON.notes = notes



{/* 
        {prompt: "Excited", },
        {prompt: "Upset", },
        {prompt: "Strong", },
        {prompt: "Guilty", },
        {prompt: "Scared", },
        {prompt: "Hostile",},
        {prompt: "Enthusiastic", },
        {prompt: "Proud", },
        {prompt: "Irritable",},
        {prompt: "Alert", },
        {prompt: "Ashamed",},
        {prompt: "Inspired",},
        {prompt: "Nervous", },
        {prompt: "Determined",},
        {prompt: "Attentive", },
        {prompt: "Jittery", },
        {prompt: "Active", },
        {prompt: "Afraid", },*/}