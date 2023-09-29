var pages = [
    [
        {
            type: 'text',
            prompt: "What is your Age?", 
            placeholder: '1',
            name: 'Age', 
            required: true,
          }, 
        {
            type: 'multi-choice',
            prompt: "Do you have normal (or correct to normal) vision? This includes glasses, contacts and corrective surgery.", 
            options: ['Yes','No'],
            name: 'Vision', 
            required: true,
        }, 
        {
            type: 'multi-choice',
            prompt: "Do you have normal (or correct to normal) hearing?", 
            options: ['Yes','No'],
            name: 'Hearing', 
            required: true,
        },        
    ]
]
    
var EN_BriefScreening = {}
EN_BriefScreening.title = FormTitle
EN_BriefScreening.pages = pages
add('EN_BriefScreening', function(){ IntakeFormParameters = EN_BriefScreening });
//