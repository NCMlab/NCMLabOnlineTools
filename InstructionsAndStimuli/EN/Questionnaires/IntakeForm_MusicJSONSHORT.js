
var title = "Demographic Questionnaire "
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: 
   [
    /*{
      name: "Name",
      title: "Name",
      
      elements: [
        {
          type: 'comment',
          title: 'Enter first name and initial of last name',
          name: 'Name',
          required: true,
          textbox_rows: 1,
        }
      ]
    },*/
    {      
      name: "Demographic Information",
      title: "Demographic Information",
       elements: [
        {
          type: 'dropdown',
          title: "Gender", 
          name: 'Gender', 
          choices: [
                      'Male',
                      'Female',
              ],
          showOtherItem: true,
          isRequired: true
        },
        {
          name: "Height",
          type: "text",
          title: "Enter your height in inches or centimeters",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: '',
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "What units did you use for height?", 
          name: 'HeightUnits', 
          choices: [
                      'Inches',
                      'Centimeters',
              ],
          showOtherItem: false,
          isRequired: true
        },
        {
          name: "Weight",
          type: "text",
          title: "Enter your weight in pounds or kilograms",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: '',
          isRequired: true
        },

      ]
    }
   ]
 }


var EN_IntakeForm_MusicJSONSHORT = {}
EN_IntakeForm_MusicJSONSHORT.title = title;
EN_IntakeForm_MusicJSONSHORT.survey_JSON = json;
EN_IntakeForm_MusicJSONSHORT.shortTitle = shortTitle
EN_IntakeForm_MusicJSONSHORT.QuestionnaireType = 'Varied'
