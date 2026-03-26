
var title = "CompExp_01";
var shortTitle = "compexp04";
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [
    {
      type: "matrix",
      name: "compexp04",
      title: "QUESTIONNAIRE D’EXPÉRIENCE EN INFORMATIQUE ET TECHNOLOGIE",
      description: "Durant la dernière année, à quelle fréquence avez-vous fait les activités suivantes sur internet ?",
      alternateRows: true,
      //className: "compexp04_-matrix",
      isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
      rows: [
        { value: "compexp04_01", text: "Opérations bancaires ou monétaires (ex., payer des factures, acheter/vendre des actions)"},
        { value: "compexp04_02", text: "Communication (ex., courriel, messagerie chat, blog, twitter)"},
        { value: "compexp04_03", text: "Recherche d’informations sur la communauté (ex., événement communautaires ou services religieux)"},
        { value: "compexp04_04", text: "Éducation (ex., participer à un cours en ligne, recherche d’informations à contenu éducatif, logiciels éducatifs)"},
        { value: "compexp04_05", text: "Emploi (ex., poster un CV ou rechercher des informations relatives à l’emploi)"},
        { value: "compexp04_06", text: "Loisirs (ex., acheter des tickets de spectacle, rechercher des informations concernant des événements ou activités de loisirs)"},
        { value: "compexp04_07", text: "Gouvernement (ex., télécharger des formulaires du gouvernement, rechercher des informations sur des programmes gouvernementaux)"},
        { value: "compexp04_08", text: "Santé (ex., rechercher des informations sur une maladie, commander des médicaments ou produits de santé)"},
        { value: "compexp04_09", text: "Nouvelles (ex., lire le journal, consulter la météo)"},
        { value: "compexp04_10", text: "Magasinage (ex., acheter des vêtements, rechercher des informations sur des produits)"},
        { value: "compexp04_11", text: "Voyage (ex., réserver un voyage, rechercher des cartes/directions ou informations de voyage)"},
             ],
        columns: [
            { value: 1, text: "Jamais utilisé" },
            { value: 2, text: "Utilisé une fois" },
            { value: 3, text: "Utilisé occasionellement" },
            { value: 4, text: "Utilisé fréquemment" },
        ],
    },
  ],
};

var references = "";

var notes = "";

var FR_compExp_part04 = {};
FR_compExp_part04.title = title;
FR_compExp_part04.shortTitle = shortTitle;
FR_compExp_part04.survey_JSON = survey_JSON;
//EN_gdsJSON.description = instructions
FR_compExp_part04.QuestionnaireType = "matrix";
FR_compExp_part04.references = references;
FR_compExp_part04.notes = notes;

