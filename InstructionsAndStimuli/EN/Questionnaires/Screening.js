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
            prompt: "Do you have normal (or correct to normal) vision? This includes glasses, contacts and corrective surgery.", 
            options: ['Yes', 'No'],
            name: 'Vision', 
            required: true,
            correct_response: 'Yes',
        }, 
        {
            type: 'multi-choice',
            prompt: "Do you have normal (or correct to normal) hearing?", 
            options: ['Yes','No'],
            name: 'Hearing', 
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
var EN_BriefScreening = {}
EN_BriefScreening.title = "Screening"
EN_BriefScreening.pages = pages
add('EN_BriefScreening', function(){ parameters = EN_BriefScreening });
// =====================================================
var pages = [
    [
        {
            type: 'text',
            prompt: "Quel âge avez-vous?", 
            placeholder: '',
            input_type: "number",
            name: 'Age', 
            required: true,
            
          }, 
          
          {
            type: 'multi-choice',
            prompt: "L'anglais ou le français est-il votre langue maternelle ou votre langue parlée principale?", 
            options: ['Qui','No'],
            name: 'Language', 
            required: true,
            correct_response: 'Yes',
        }, 
        {
            type: 'multi-choice',
            prompt: "Avez-vous une vision normale (ou correcte à normale) ? Cela comprend les lunettes, les lentilles de contact et la chirurgie correctrice.", 
            options: ['Qui','No'],
            name: 'Vision', 
            required: true,
            correct_response: 'Yes',
        }, 
        {
            type: 'multi-choice',
            prompt: "Avez-vous une audition normale (ou correcte à normale)?", 
            options: ['Qui','No'],
            name: 'Hearing', 
            required: true,
            correct_response: 'Yes',
        },        
        {
            type: 'multi-choice',
            prompt: "Avez-vous des troubles neurologiques? (par exemple lupus)?", 
            options: ['Qui','No'],
            name: 'Neurological', 
            required: true,
            correct_response: 'No',
        },        
        
    ]
]
var FR_BriefScreening = {}
FR_BriefScreening.title = "Dépistage"
FR_BriefScreening.pages = pages
add('FR_BriefScreening', function(){ parameters = FR_BriefScreening });
