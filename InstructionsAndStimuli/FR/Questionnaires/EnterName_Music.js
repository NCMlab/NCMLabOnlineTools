var title = "Enter Name"
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
      name: "Name",
      title: "Name",
      
      elements: [
        {
          type: 'comment',
          title: "Entrez le prénom et l'initiale du nom de famille.",
          name: 'Name',// Keep this as Name (in English) it is used later to find the participant response
          required: true,
          textbox_rows: 1,
       
        },
        {
          name: "email",
          type: "text",
          title: "Adresse email",
          inputType: "email",
          placeholder: "joe@example.com",
          isRequired: false,
          autocomplete: "email"
  }, 
      ]
    }
]
}

var FR_EnterName_Music = {}
FR_EnterName_Music.title = title;
FR_EnterName_Music.survey_JSON = json;
FR_EnterName_Music.shortTitle = "First Name"
FR_EnterName_Music.QuestionnaireType = 'FirstName'