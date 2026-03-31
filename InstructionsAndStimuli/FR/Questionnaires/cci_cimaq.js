
var title = "CCI-CIMAQ";
var shortTitle = "cci_cimaq";
// All questions use the same direction so enter that single flag as an array of size 1
option010 = {}
option010.answer = "Oui"
option010.options = []
option010.options[0] = 'Léger'
option010.options[1] = 'Modéré à sévère'
option011 = {}
option011.answer = "Oui"
option011.options = []
option011.options[0] = 'Sans complications'
option011.options[1] = 'Avec complications'
option011.id = 'cci11_etc'
option014 = {}
option014.answer = "Oui"
option014.options = []
option014.options[0] = 'Localisée'
option014.options[1] = 'Métastatique'
var survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [
    {
      type: "matrix",
      name: "parq",
      title: "Cochez les conditions présentes et additionnez les points.",
      alternateRows: true,
      className: "parq-matrix",
      isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
      rows: [
        { value: "cci02", text: "Infarctus du myocarde" },
        { value: "cci03", text: "Insuffisance cardiaque congestive" },
        { value: "cci04", text: "Maladie vasculaire périphérique " },
        { value: "cci05", text: "Maladie cérébrovasculaire" },
        { value: "cci06", text: "Démence" },
        { value: "cci07", text: "Maladie chronique pulmonaire" },
        { value: "cci08", text: "Maladie des tissus conjonctifs" },
        { value: "cci09", text: "Maladie ulcéreuse" },
        { value: "cci10", text: "Maladie du foie", options: option010},
        { value: "cci11", text: "Diabète" , options: option011},
        { value: "cci12", text: "Hémiplégie" },
        { value: "cci13", text: "Maladie rénale modérée ou sévère" },
        { value: "cci14", text: "Tumeur solide" , options: option014},
        { value: "cci15", text: "Leucémie" },
        { value: "cci16", text: "Lymphome" },
        { value: "cci17", text: "SIDA" },
                

      ],
      columns: [
        {
          value: 1,
          text: "Oui",
        },
        {
          value: 0,
          text: "No",
        },
      ],
    },
  ],
};

var references = "";

var notes = "";

var FR_cci_cimaq = {};
FR_cci_cimaq.title = title;
FR_cci_cimaq.shortTitle = shortTitle;
FR_cci_cimaq.survey_JSON = survey_JSON;
//EN_gdsJSON.description = instructions
FR_cci_cimaq.QuestionnaireType = "matrix";
FR_cci_cimaq.references = references;
FR_cci_cimaq.notes = notes;


