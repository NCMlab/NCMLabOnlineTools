var title = "QUESTIONNAIRE D’EXPÉRIENCE EN INFORMATIQUE ET TECHNOLOGIE"
var shortTitle = "compexp03"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "dropdown",
        name: "compexp03_01",
        title: "Avez-vous de l’expérience avec internet?",
        choices: [
            { value: 1, text: 'Oui' },
            { value: 2, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
    },
    {
        type: "dropdown",
        name: "compexp03_02",
        title: "Depuis combien de temps utilisez-vous internet ?",
        choices: [
            { value: 1, text: 'Moins de 6 mois' },
            { value: 2, text: 'Entre 6 mois e 1 an' },
            { value: 3, text: 'Entre 1 et 3 ans' },
            { value: 4, text: 'Entre 3 et 5 ans' },
            { value: 5, text: 'Plus de 5 ans' }
        ],
        visibleIf: "{compexp03_01} == Oui",
        isRequired: true,
        showClearButton: true
    },
    {
        type: "dropdown",
        name: "compexp03_03",
        title: "Quand avez-vous utilisé internet pour la dernière fois ?",
        choices: [
            { value: 1, text: 'Dans les 5 derniers jours'},
            { value: 2, text: 'La semaine dernière'},
            { value: 3, text: 'Dans les 6 derniers mois'},
            { value: 4, text: 'L’année dernière'},
            { value: 5, text: 'Il y a plus d’un an'},
        ],
        visibleIf: "{compexp03_01} == Oui",
        isRequired: true,
        showClearButton: true
    },
    {
        type: "dropdown",
        name: "compexp03_04",
        title: "En moyenne, combien d’heures par semaine passez-vous sur internet ?",
        choices: [
            { value: 1, text: 'Moins d’une heure par semaine'},
            { value: 2, text: 'Entre 1 et 5 heures par semaine'},
            { value: 3, text: 'Entre 6 et 10 heures par semaine'},
            { value: 4, text: 'Plus de 10 heures par semaine'},
        ],
        visibleIf: "{compexp03_01} == Oui",
        isRequired: true,
        showClearButton: true
    },
    {
        type: "dropdown",
        name: "compexp03_05",
        title: "Où utilisez-vous internet ? (Cochez toutes les réponses qui vous correspondent)",
        choices: [
            { value: 1, text: 'A la maison'},
            { value: 2, text: 'Chez un ami ou un parent'},
            { value: 3, text: 'Au travail'},
            { value: 4, text: 'A la bibliothèque'},
            { value: 5, text: 'Au centre communautaire '},
        ],
        visibleIf: "{compexp03_01} == Oui",
        isRequired: true,
        showClearButton: true,
        showOtherItem: true,        
    },

    ]
}]
}

var references = "";

var notes = "";

var FR_compExp_part03 = {};
FR_compExp_part03.title = title;
FR_compExp_part03.shortTitle = shortTitle;
FR_compExp_part03.survey_JSON = survey_JSON;
//EN_gdsJSON.description = instructions
FR_compExp_part03.QuestionnaireType = "dropdown";
FR_compExp_part03.references = references;
FR_compExp_part03.notes = notes;

