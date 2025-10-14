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
          title: 'Enter first name and initial of last name',
          name: 'Name',// Keep this as Name (in English) it is used later to find the participant response
          required: true,
          textbox_rows: 1,
       
        },
        {
          name: "email",
          type: "text",
          title: "E-mail address",
          inputType: "email",
          placeholder: "joe@example.com",
          isRequired: false,
          autocomplete: "email"
  }, 
      ]
    }
]
}

var EN_EnterName_Music = {}
EN_EnterName_Music.title = title;
EN_EnterName_Music.survey_JSON = json;
EN_EnterName_Music.shortTitle = "First Name"
EN_EnterName_Music.QuestionnaireType = 'FirstName'