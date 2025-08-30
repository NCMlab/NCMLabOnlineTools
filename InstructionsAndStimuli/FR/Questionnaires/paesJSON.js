var title = "Échelle d'appréciation de l'activité physique"
var shortTitle = "PAES"
const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
    elements: [
        {
            type: "html",
            name: "introduction",
            html: "Veuillez indiquer comment vous vous sentez en ce moment par rapport à l'activité de musique et de mouvement que vous venez de pratiquer."
        },
        {
            type: 'radiogroup',
            name: 'paes001',
            title: 'Je l\'apprécie',
            colCount: 0,
            choices:
            [
                { value: 0, text: 'Pas du tout d\'accord' }, 
                { value: 1, text: 'Pas d\'accord' },
                { value: 2, text: 'Ni d\'accord ni en désaccord' },
                { value: 3, text: 'D\'accord' }, 
                { value: 4, text: 'Tout à fait d\'accord' } 
            ],
        },
        {
            type: 'radiogroup',
            name: 'paes002',
            title: 'Je trouve cela agréable',
            colCount: 0,
            choices:
            [
                { value: 0, text: 'Pas du tout d\'accord' }, 
                { value: 1, text: 'Pas d\'accord' },
                { value: 2, text: 'Ni d\'accord ni en désaccord' },
                { value: 3, text: 'D\'accord' }, 
                { value: 4, text: 'Tout à fait d\'accord' } 
            ],
        },
        {
            type: 'radiogroup',
            title: 'C\'est très plaisant',
            name: 'paes003',
            colCount: 0,
            choices:
            [
                { value: 0, text: 'Pas du tout d\'accord' }, 
                { value: 1, text: 'Pas d\'accord' },
                { value: 2, text: 'Ni d\'accord ni en désaccord' },
                { value: 3, text: 'D\'accord' }, 
                { value: 4, text: 'Tout à fait d\'accord' }  
            ],
        },
        {
            type: 'radiogroup',
            title: 'Cela fait du bien',
            name: 'paes004',
            colCount: 0,
            choices:
            [
                { value: 0, text: 'Pas du tout d\'accord' }, 
                { value: 1, text: 'Pas d\'accord' },
                { value: 2, text: 'Ni d\'accord ni en désaccord' },
                { value: 3, text: 'D\'accord' }, 
                { value: 4, text: 'Tout à fait d\'accord' } 
            ],
        },
    ],
    }]
};


var FR_paesJSON = {}
FR_paesJSON.title = title,
FR_paesJSON.shortTitle = shortTitle,
FR_paesJSON.survey_JSON = survey_JSON
FR_paesJSON.description = ""
FR_paesJSON.QuestionnaireType = 'radiogroup'
FR_paesJSON.references = "references"
FR_paesJSON.notes = ''
