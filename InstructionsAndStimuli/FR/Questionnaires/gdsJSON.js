
var title = "Échelle de Dépression Gériatrique"
var shortTitle = 'GDS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        elements: [
            { 
                type: 'matrix',
                name: 'gds',
                title: 'Cocher la réponse qui convient',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gds01', text: "Êtes-vous dans l'ensemble satisfait de votre vie ?"},
                    {value: 'gds02', text: "Avez-vous renoncé à nombre de vos activités et intérêts ?"},
                    {value: 'gds03', text: "Avez-vous le sentiment que votre vie est vide ?"},
                    {value: 'gds04', text: "Vous ennuyez-vous souvent ?"},
                    {value: 'gds05', text: "Êtes-vous de bonne humeur la plupart du temps ?"},
                    {value: 'gds06', text: "Avez-vous peur qu'il ne vous arrive quelque chose de mauvais ?"},
                    {value: 'gds07', text: "Êtes-vous heureux/-se la plupart du temps ?"},
                    {value: 'gds08', text: "Vous sentez-vous souvent faible et dépendant ?"},
                    {value: 'gds09', text: "Préférez-vous rester chez vous, plutôt que de sortir et faire quelque chose de nouveau ?"},
                    {value: 'gds10', text: "Estimez-vous avoir plus de troubles de la mémoire que la plupart des gens ?"},
                    {value: 'gds11', text: "Vous dites-vous qu'il est merveilleux d'être vivant en ce moment ?"},
                    {value: 'gds12', text: "Vous sentez-vous inutile tel que vous êtes aujourd'hui ?"},
                    {value: 'gds13', text: "Vous sentez-vous plein d'énergie ?"},
                    {value: 'gds14', text: "Avez-vous l'impression que votre situation est désespérée ?"},
                    {value: 'gds15', text: "Croiyez-vous que la plupart des gens soient plus à l'aise que vous ?"},
                ],
                columns: [
                    {
                    "value": 1,
                    "text": 'Oui'
                    },
                    {
                    "value": 0,
                    "text": 'Non'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var FR_gdsJSON = {}
FR_gdsJSON.title = title
FR_gdsJSON.shortTitle = shortTitle
FR_gdsJSON.survey_JSON = survey_JSON
//FR_gdsJSON.description = instructions
FR_gdsJSON.QuestionnaireType = 'likert'
FR_gdsJSON.references = references
FR_gdsJSON.notes = notes