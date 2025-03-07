
var title = "Échelle d'anxiété gériatrique"
var shortTitle = 'GAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'gas',
                title: 'Vous trouverez ci-dessous une liste de symptômes courants d\'anxiété ou de stress. Veuillez lire attentivement chaque élément de la liste. Indiquez la fréquence à laquelle vous avez ressenti chaque symptôme au cours de la SEMAINE ÉCOULÉE, Y COMPRIS AUJOURD\'HUI, en cochant la réponse correspondante.',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gas01', text: "J'étais irritable."},
                    {value: 'gas02', text: "Je me sentais détaché ou isolé des autres."},
                    {value: 'gas03', text: "J'avais l'impression d'être dans un état second."},
                    {value: 'gas04', text: "J'ai du mal à rester immobile."},
                    {value: 'gas05', text: "Je ne pouvais pas contrôler mon inquiétude."},
                    {value: 'gas06', text: "Je me sentais agité, excité ou nerveux."},
                    {value: 'gas07', text: "Je me sentais fatigué."},
                    {value: 'gas08', text: "Mes muscles étaient tendus."},
                    {value: 'gas09', text: "J'avais l'impression de n'avoir aucun contrôle sur ma vie."},
                    {value: 'gas10', text: "J'avais l'impression que quelque chose de terrible allait m'arriver."},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'Pas du tout'
                    },
                    {
                    "value": 1,
                    "text": 'Parfois'
                    },
                    {
                    "value": 2,
                    "text": 'La plupart du temps'
                    },
                    {
                    "value": 3,
                    "text": 'Tout le temps'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var EN_gasJSON = {}
EN_gasJSON.title = title
EN_gasJSON.shortTitle = shortTitle
EN_gasJSON.survey_JSON = survey_JSON
//EN_gasJSON.description = instructions
EN_gasJSON.QuestionnaireType = 'matrix'
EN_gasJSON.references = references
EN_gasJSON.notes = notes
