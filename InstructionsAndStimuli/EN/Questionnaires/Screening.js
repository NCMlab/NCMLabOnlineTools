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
            options: ['Yes','No'],
            name: 'Language', 
            required: true,
            correct_response: 'Yes',
        }, 
        {
            type: 'multi-choice',
            prompt: "Do you have normal (or correct to normal) vision? This includes glasses, contacts and corrective surgery.", 
            options: ['Yes','No'],
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
EN_BriefScreening.ScoringMethod = 'screening'
add('EN_BriefScreening', function(){ IntakeFormParameters = EN_BriefScreening });
//