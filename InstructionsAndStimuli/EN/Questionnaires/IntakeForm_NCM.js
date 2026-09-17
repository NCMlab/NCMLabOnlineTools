
const ENjson = {
  showProgressBar: "top",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  showTitle: true,
  pages: 
  [

    {      
      name: "Intake Form",
      title: "Intake Form",
      elements: [
        {
          name: 'desc',
          title: "Instructions01",
          type: 'description',
          text: [
            {'text': " <h2>Please, make sure your microphone and speakers are on and that "+
                "the volume is set so you can hear the tasks. "+
                "Please, do not press your browser\'s back or reload buttons.</h2>"},  
            {'text': "<h2>If you have feedback you would like to share "+
                    "with us, there will be a text box at the very end of "+
                    "the experiment where you can type in comments.</h2>"} 
          ],
          showOtherItem: true,
          isRequired: true
        },
    ]},
    {
        name: "Intake Form",
        title: "Intake Form",
        elements: [
            {
                name: 'dem0101_month',
                title: "In what month were you born?", 
                type: 'dropdown',
                choices: [
                    {value: 1, text:'January'},
                    {value: 2, text:'February'},
                    {value: 3, text:'March'},
                    {value: 4, text:'April'},
                    {value: 5, text:'May'},
                    {value: 6, text:'June'},
                    {value: 7, text:'July'},
                    {value: 8, text:'August'},
                    {value: 9, text:'September'},
                    {value: 10, text:'October'},
                    {value: 11, text:'November'},
                    {value: 12, text:'December'},
                ],
                showOtherItem: false,
                isRequired: true,
            },
            {
                name: 'dem0101_year',
                title: "In what year were you born?", 
                type: 'dropdown',
                choicesMin: 1920,
                choicesMax: 2010,
            },
            {
                name: 'dem0101_sex',
                title: "What sex were assigned at birth, on your original birth certificate?", 
                type: 'dropdown',
                choices: [
                    {value: 1, text:'Female'},
                    {value: 2, text:'Male'},
                ],
                showOtherItem: true,
                isRequired: true,
                other_option_text: "You don\’t have an option that applies to me. I identify as (please specify)", 
            },
            {
                name: 'dem0101_gender',
                title: "What is your gender?",
                type: 'dropdown',
                choices: [
                    {value: 1, text:'Woman'},
                    {value: 2, text:'Man'},
                    {value: 3, text:'Trans Woman'},
                    {value: 4, text:'Trans Man'},
                    {value: 5, text:'Non-Binary'},
                ],
                showOtherItem: true,
                isRequired: true,
                other_option_text: "You don\’t have an option that applies to me. I identify as (please specify)", 
            },
            {
                name: 'dem0101_edu',
                title: "How many years of education have you completed? (for example completing high school is 12, completing a BA/BS is 16, completing an MA/MS is 18, completing a PhD is 21)", 
                type: 'dropdown',
                choicesMin: 0,
                choicesMax: 25,
            },
                        {
                name: 'dem0101_hand',
                title: "What hand do you prefer to use?",
                type: 'dropdown',
                choices: [
                    {value: 1, text: "Left"},
                    {value: 2, text: "No preference"},
                    {value: 3, text: "Right"},
                    {value: 4, text: "I don't know"},
                    {value: 5, text: "Prefer not to answer"},
                ],
                showOtherItem: false,
                isRequired: true,                
            },
        ]
    }
  ]
}
     
  var EN_IntakeForm_NCM = {}
    
    EN_IntakeForm_NCM.title = 'Intake Form',
    EN_IntakeForm_NCM.shortTitle = 'Intake Form',
    EN_IntakeForm_NCM.survey_JSON = ENjson
    EN_IntakeForm_NCM.description = ""
    EN_IntakeForm_NCM.QuestionnaireType = 'form'
    EN_IntakeForm_NCM.references = "references"
    EN_IntakeForm_NCM.notes = ''

    
    // EN_IntakeForm_NCM.Instructions01 = [
    // {'page': ' Please, make sure your microphone and speakers are on and that the volume is set so you can hear the tasks. '+
    //   'Please, do not press your browser\'s back or reload buttons.'},
    //   {'page': 'If you have feedback you would like to share '+
    //   'with us, there will be a text box at the very end of the experiment where you can type in comments.'} 
    // ]


// =====================================================

    