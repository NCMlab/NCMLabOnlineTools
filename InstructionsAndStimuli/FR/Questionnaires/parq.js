
var title = "Physical Activity Readiness Questionaire";
var shortTitle = "PARQ";
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  elements: [
    {
      type: "matrix",
      name: "parq",
      title: "Appréciation de la disposition à l’activité physique",
      alternateRows: true,
      className: "parq-matrix",
      isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
      rows: [
        { value: "parq01", text: "Un médecin a-t-il une fois constaté chez vous un problème cardiaque et vous a-t-il conseillé de pratiquer du sport uniquement sous contrôle médical?" },
        { value: "parq02", text: "Ressentez-vous des douleurs thoraciques lors d\’efforts physiques?" },
        { value: "parq03", text: "Avez-vous ressenti des douleurs thoraciques lors d\’efforts physiques durant le mois passé?" },
        { value: "parq04", text: "Avez-vous déjà perdu connaissance une ou plusieurs fois ou êtes-vous tombé suite à des vertiges?" },
        { value: "parq05", text: "Avez-vous des problèmes aux os ou aux articulations pouvant s\’aggraver durant une activité sportive?" },
        { value: "parq06", text: "Un médecin vous a-t-il prescrit un médicament contre l’hypertension ou à cause d’un problème cardiaque?" },
        { value: "parq07", text: "Avez-vous connaissance, personnellement ou selon l’avis d’un médecin, d’une autre raison qui vous empêcherait de pratiquer du sport sans contrôle médical?" },
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

var FR_parq = {};
FR_parq.title = title;
FR_parq.shortTitle = shortTitle;
FR_parq.survey_JSON = survey_JSON;
//EN_gdsJSON.description = instructions
FR_parq.QuestionnaireType = "matrix";
FR_parq.references = references;
FR_parq.notes = notes;

