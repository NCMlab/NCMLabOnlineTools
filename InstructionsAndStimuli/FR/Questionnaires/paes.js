var title = "Échelle d'appréciation de l'activité physique"
var shortTitle = "PAES"
const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    elements: [
        {
            type: "matrix",
            name: "PAES",
            title: "Veuillez indiquer comment vous vous sentez en ce moment par rapport à l'activité de musique et de mouvement que vous venez de pratiquer.",
            alternateRows: true,
            isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
        
            rows: [

                {value: 'paes001', text: 'Je l\'apprécie'},
                {value: 'paes002', text: 'Je trouve cela agréable'},
                {value: 'paes003', text: 'C\'est très plaisant'},
                {value: 'paes004', text: 'Cela fait du bien'},
            ],
            columns: [
                { "value": 1, text: 'Pas du tout d\'accord' }, 
                { "value": 2, text: 'Pas d\'accord' },
                { "value": 3, text: 'Ni d\'accord ni en désaccord' },
                { "value": 4, text: 'D\'accord' }, 
                { "value": 5, text: 'Tout à fait d\'accord' }
            ],
        }
    ]
}

var FR_paes = {}
FR_paes.title = title,
FR_paes.shortTitle = shortTitle,
FR_paes.survey_JSON = survey_JSON
FR_paes.description = ""
FR_paes.QuestionnaireType = 'matrix'
FR_paes.references = "references"
FR_paes.notes = ''
