
var title = "COG_QUOT";
var shortTitle = "cog_quot";
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [
    {
      type: "matrix",
      name: "cog_quot",
      title: "Cochez les conditions présentes et additionnez les points.",
      alternateRows: true,
      className: "cog_quot-matrix",
      isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
      rows: [
        { value: "cog_quot01", text: "Lire un journal. Par exemple : le Journal de Montréal, la Presse, le journal Métro, le journal de votre quartier, etc." },
        { value: "cog_quot02", text: "Lire un magazine. Par exemple : magazine féminin, magazine de bricolage, de loisirs, etc." },
        { value: "cog_quot03", text: "Lire un livre. Par exemple : roman, fiction, livre historique ou éducatif, etc" },
        { value: "cog_quot04", text: "Jouer à des jeux. Par exemple : jouer aux cartes, faire des mots croisés, des sudokus, jouer à des jeux de société, aux échecs, etc." },
        { value: "cog_quot05", text: "Être à l’ordinateur. Par exemple : utiliser internet, faire des recherches ou des achats en ligne, lire et écrire des courriels, découvrir des nouvelles applications, etc." },

              
      ],
      columns: [
        {
          value: 1,
          text: "Une fois par mois ou moins",
        },
        {
          value: 2,
          text: "2-3 fois par mois",
        },
        {
          value: 3,
          text: "1-2 fois par semaine",
        },
        {
          value: 4,
          text: "3-4 fois par semaine",
        },
        {
          value: 5,
          text: "5-6 fois par semaine",
        },
        {
          value: 0,
          text: "Tous les jours",
        },
      ],
    },
  ],
};

var references = "";

var notes = "";

var FR_cog_quot = {};
FR_cog_quot.title = title;
FR_cog_quot.shortTitle = shortTitle;
FR_cog_quot.survey_JSON = survey_JSON;
//EN_gdsJSON.description = instructions
FR_cog_quot.QuestionnaireType = "matrix";
FR_cog_quot.references = references;
FR_cog_quot.notes = notes;

