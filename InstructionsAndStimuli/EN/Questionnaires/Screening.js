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
      name: "Screening",
      title: "Screening",
      elements: [
     
        {
          name: "screen0102_age",
          title: "What is your age",
          type: "input",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 150,
          defaultValue: '',
          isRequired: true,
          criteria: ">=18",
        },
                {
          name: 'screen0101_EngFre',
          title: "Is English or French your maternal or primary spoken language?",
          type: 'radiogroup',
          choices: [
            {value: 1, text:'Yes'},
            {value: 2, text:'No'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 1,
        },
                {
          name: 'screen0101_Vision',
          title: "Do you have normal (or correct to normal) vision? This includes glasses, contacts and corrective surgery.",
          type: 'radiogroup',
          choices: [
            {value: 1, text:'Yes'},
            {value: 2, text:'No'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 1,
        },        
        {
          name: 'screen0101_Hearing',
          title: "Do you have normal (or correct to normal) hearing?",
          type: 'radiogroup',
          choices: [
            {value: 1, text:'Yes'},
            {value: 2, text:'No'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 1,
        },        
        {
          name: 'screen0101_Neurological',
          title: "Do you have any neurological disorders? (e.g. lupus)?",
          type: 'radiogroup',
          choices: [
            {value: 1, text:'Yes'},
            {value: 2, text:'No'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 2,
        },
    ]
}
  ]
}

var EN_BriefScreening = {}
EN_BriefScreening.title = "Screening"
EN_BriefScreening.pages = ENjson
EN_BriefScreening.ShowInstructions = true
add('EN_BriefScreening', function(){ parameters = EN_BriefScreening });


const FRjson = {
  showProgressBar: "top",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  showTitle: true,
  pages: 
  [

    {      
      name: "Dépistage",
      title: "Dépistage",
      elements: [
     
        {
          name: "screen0102_age",
          title: "Quel âge avez-vous?", 
          type: "input",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 150,
          defaultValue: '',
          isRequired: true,
          criteria: ">=18",
        },
                {
          name: 'screen0101_EngFre',
          title: "L'anglais ou le français est-il votre langue maternelle ou votre langue parlée principale?", 
          type: 'dropdown',
          choices: [
            {value: 1, text:'Oui'},
            {value: 2, text:'Non'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 1,
        },
                {
          name: 'screen0101_Vision',
          title: "Avez-vous une vision normale (ou correcte à normale) ? Cela comprend les lunettes, les lentilles de contact et la chirurgie correctrice.", 
          type: 'dropdown',
          choices: [
            {value: 1, text:'Oui'},
            {value: 2, text:'Non'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 1,
        },        
        {
          name: 'screen0101_Hearing',
          title: "Avez-vous une audition normale (ou correcte à normale)?", 
          type: 'dropdown',
          choices: [
            {value: 1, text:'Oui'},
            {value: 2, text:'Non'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 1,
        },        
        {
          name: 'screen0101_Neurological',
          title: "Avez-vous des troubles neurologiques? (par exemple lupus)?", 
          type: 'dropdown',
          choices: [
            {value: 1, text:'Oui'},
            {value: 2, text:'Non'},
          ],
          showOtherItem: false,
          isRequired: true,
          criteria: 2,
        },
    ]
}
  ]
}

var FR_BriefScreening = {}
FR_BriefScreening.title = "Screening"
FR_BriefScreening.pages = FRjson
FR_BriefScreening.ShowInstructions = true
add('FR_BriefScreening', function(){ parameters = FR_BriefScreening });
// =====================================================


// ========================= DEMO =============================
var pages = [
    [
        {
            type: 'text',
            prompt: "What is your Age?", 
            placeholder: '',
            input_type: "number",
            name: 'Age', 
            required: true,
            
          }, 
          
          {
            type: 'multi-choice',
            prompt: "Is English or French your maternal or primary spoken language?", 
            options:  ['Yes','No'],
            name: 'Language', 
            required: true,
            correct_response: 'Yes',
        }, 
        {
            type: 'multi-choice',
            prompt: "Do you have any neurological disorders? (e.g. lupus)?", 
            options: ['Yes','No'],
            name: 'Neurological', 
            required: true,
            correct_response: 'No',
        },        
        
    ]
]
var EN_BriefScreening_DEMO = {}
EN_BriefScreening_DEMO.title = "Screening"
EN_BriefScreening_DEMO.pages = pages
add('EN_BriefScreening_DEMO', function(){ parameters = EN_BriefScreening_DEMO });