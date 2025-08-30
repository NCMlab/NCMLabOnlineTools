var title = "Entrez votre nom"
var shortTitle = 'FirstName'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: 
   [
    {
      name: "Nom",
      title: "Nom",
      
      elements: [
        {
          type: 'comment',
          title: "Entrez le prénom et l'initiale du nom de famille",
          name: 'Name',// Keep this as Name (in English) it is used later to find the participant response
          required: true,
          textbox_rows: 1,
        }
      ]
    }
]
}

var FR_EnterName_MusicJSON = {}
FR_EnterName_MusicJSON.title = title;
FR_EnterName_MusicJSON.survey_JSON = json;
FR_EnterName_MusicJSON.shortTitle = shortTitle
FR_EnterName_MusicJSON.QuestionnaireType = 'Varied'