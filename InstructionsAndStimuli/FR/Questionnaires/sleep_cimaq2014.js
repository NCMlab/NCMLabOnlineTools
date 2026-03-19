
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
          type: 'dropdown',
          title: "Sexe", 
          name: 'Sexe', 
          choices: [
                      'Homme',
                      'Femme',
              ],
          showOtherItem: true,
          otherText: 'Autre (décrire)',
          placeholder: 'Sélectionner...',
          searchEnabled: false,
          required: true,
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
