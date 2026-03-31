
var title = "Questionnaire démographique"
var shortTitle = 'Sleep CIMAQ'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: [
     {
      
      name: "Information démographique",
      title: "Information démographique",
       elements: [
       {
          name: "sleep001",
          type: "input",
          title: "Durant le mois précédant la date de cette entrevue, à quelle heure vous êtes-vous couché(e) en général?",
          inputType: "time",
          defaultValue: '',
          isRequired: true
        },
               {
          name: "sleep002",
          type: "input",
          title: "Durant le mois précédant la date de cette entrevue, combien de temps (en minutes) avez-vous pris en moyenne pour vous endormir à chaque soir?",
          inputType: "number",
          defaultValue: '',
          isRequired: true
        },
                      {
          name: "sleep003",
          type: "input",
          title: "Durant le mois précédant la date de cette entrevue, combien de temps (en minutes) vous êtes-vous réveillé(e) en moyenne au cours de la nuit, après vous être endormi(e)?",
          inputType: "number",
          defaultValue: '',
          isRequired: true
        },
                       {
          name: "sleep004",
          type: "input",
          title: "Durant le mois précédant la date de cette entrevue, à quelle heure vous êtes-vous levé(e) le matin en général?",
          inputType: "number",
          defaultValue: '',
          isRequired: true
        },
                       {
          name: "sleep005",
          type: "input",
          title: "Durant le mois précédant la date de cette entrevue, combien d'heures de sommeil avez- vous eu par nuit en moyenne?",
          inputType: "number",
          defaultValue: '',
          isRequired: true
        },
        {
          type: 'dropdown',
          title: 'Durant le mois précédant la date de cette entrevue, vous sentiez-vous repose(e) en vous réveillant le matin? Choisir entre:',
          choices: 
          [
              {value: 1, text: "pas du tout reposé(e)"},
              {value: 2, text: "légèrement reposé(e)"},
              {value: 3, text: "assez reposé(e)"},
              {value: 4, text: "bien reposé(e)"},
              {value: 5, text: "très bien reposé(e)"}
          ],
          name: 'sleep006',
          isRequired: true,
        },



      ]
    }
   ]
 }


var FR_sleep_cimaq2014 = {}
FR_sleep_cimaq2014.title = title;
FR_sleep_cimaq2014.survey_JSON = json;
FR_sleep_cimaq2014.shortTitle = shortTitle
FR_sleep_cimaq2014.QuestionnaireType = 'Varied'
//FR_IntakeForm_MusicJSON.Instructions01 = [
//    {        'page': '<p class="Instructions">Instructions are written here.'   }
//]
