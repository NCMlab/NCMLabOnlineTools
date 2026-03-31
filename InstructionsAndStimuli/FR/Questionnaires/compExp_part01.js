
var title = "CompExp_01";
var shortTitle = "compexp01";
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [
    {
      type: "matrix",
      name: "compexp01",
      title: "QUESTIONNAIRE D’EXPÉRIENCE EN INFORMATIQUE ET TECHNOLOGIE",
      description: "Le but de ce questionnaire est d’évaluer votre familiarité et expérience avec la technologie. Répondez à chaque question en cochant la réponse qui vous correspond le mieux. Durant la dernière année, à quelle fréquence avez-vous utilisé chacune des technologies listées ci-dessous ?",
      alternateRows: true,
      //className: "compexp01_-matrix",
      isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
      rows: [
        { value: "compexp01_01", text: "Répondeur téléphonique"},
        { value: "compexp01_02", text: "Machine d’enregistrement automatique à l’aéroport"},
        { value: "compexp01_03", text: "Machine de paiement automatique de parking"},
        { value: "compexp01_04", text: "Menu déroulant d’un téléphone intelligent"},
        { value: "compexp01_05", text: "Distributeur automatique de billets (ATM)"},
        { value: "compexp01_06", text: "Machine automatique d’achat de tickets"},
        { value: "compexp01_07", text: "Livres enregistrés (CD, DVDs)"},
        { value: "compexp01_08", text: "Téléphone portable"},
        { value: "compexp01_09", text: "Jeu video ou jeu d’ordinateur (ex., PlayStation, Wii, Nintendo, XBox)"},
        { value: "compexp01_10", text: "Photographie numérique (ex., camera, camescope)"},
        { value: "compexp01_11", text: "Service de banque au volant (‘drive’)"},
        { value: "compexp01_12", text: "Courriel"},
        { value: "compexp01_13", text: "Machine de fax "},
        { value: "compexp01_14", text: "Appareil sportif (ex., pédomètre, compteur de pouls, tapis de course)"},
        { value: "compexp01_15", text: "Système d’alarme pour la maison"},
        { value: "compexp01_16", text: "Système de navigation pour voiture (ex., GPS, OnStar)"},
        { value: "compexp01_17", text: "Machine automatisée en magasin (ex., caisse automatique, scanneur de prix, localisateur de produit)"},
        { value: "compexp01_18", text: "Kindle (livre électronique)"},
        { value: "compexp01_19", text: "Four à micro-onde"},
        { value: "compexp01_20", text: "Lecteur de musique MP3/IPod"},
        { value: "compexp01_21", text: "Assistant personnel numérique (ex., agenda électronique)"},
        { value: "compexp01_22", text: "Programmateurs d’appareils (ex., pour lumière, thermostat, arrosage automatique, cafetière ou appareils électroménagers programmables)"},
        { value: "compexp01_23", text: "Appareil d’enregistrement et visionnage (ex., CD, DVD, VCR)"},
        { value: "compexp01_24", text: "Appareil de démarrage de voiture à distance"},
        { value: "compexp01_25", text: "Téléphone "},
        { value: "compexp01_26", text: "Décodeur numérique de TV (ex., programme TV, TV à la carte, stations musicales, TiVo)"},
        { value: "compexp01_27", text: "Vidéophone"},
      ],
      columns: [
        { value: 1, text: "Pas sûr(e) de savoir ce que c’est" },
        { value: 2, text: "Jamais utilisé" },
        { value: 3, text: "Utilisé une fois" },
        { value: 4, text: "Utilisé occasionellement" },
        { value: 5, text: "Utilisé fréquemment" },
      ],
    },
  ],
};

var references = "";

var notes = "";

var FR_compExp_part01 = {};
FR_compExp_part01.title = title;
FR_compExp_part01.shortTitle = shortTitle;
FR_compExp_part01.survey_JSON = survey_JSON;
//EN_gdsJSON.description = instructions
FR_compExp_part01.QuestionnaireType = "matrix";
FR_compExp_part01.references = references;
FR_compExp_part01.notes = notes;

