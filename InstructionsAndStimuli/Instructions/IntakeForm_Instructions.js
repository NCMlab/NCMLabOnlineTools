// ============================================
var FormTitle = 'FaCE Intake Form'
var pages = [
      [
        {
          type: 'text',
          prompt: "Participant ID", 
          placeholder: '00000000',
          name: 'ParticipantID', 
          required: true,
        }, 
        {
            type: 'drop-down',
            prompt: "How many years of education have you completed? (for example completing high school is 12, completing a BA/BS is 16, completing an MA/MS is 18, completing a PhD is 21", 
            name: 'YearsEdu', 
            options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','other'],
            required: false,
          },

        {
          type: 'drop-down',
          prompt: "In what MONTH were you born?", 
          name: 'MonthOfBirth', 
          options: ['January','February','March','April','May','June','July','August','September','October','November','December'],
          required: false,
        },
        {
            type: 'text',
            prompt: "What is your DAY of birth?", 
            placeholder: '1',
            name: 'DayOfBirth', 
            required: false,
          }, 
        {
            type: 'text',
            prompt: "What is your YEAR of birth?", 
            placeholder: '1900',
            name: 'YearOfBirth', 
            required: false,
          }, 
          
        {
          type: 'multi-choice',
          prompt: "What is your sex?", 
          options: ['Female', 'Male', 'Other', 'Do not want to answer'],
          name: 'Sex', 
          required: false,
        }, 
        
          /*{
            type: 'likert-table',
            prompt: 'What hand do you prefer to use when:',
            name: "Handedness",
            statements: [{name:'Writing'},{name:'Drawing'},
            {name:'Throwing'},{name:'Using scissors'},{name:'Using a toothbrush'},
            {name:'Using a knife (without a fork)'},{name:'Using a spoon'},
            {name:'Striking a match'},{name:'Using a broom (upper hand)'},
            {name:'Opening a box (lid)'}],
            options: ['Left','No preference','Right',"I don't know",'Prefer not to answer'],
          }*/
      ]
    ]
  
  var Intake_parameters = {}
  Intake_parameters.title = FormTitle
  Intake_parameters.pages = pages
  add('EN_IntakeForm_FaCE', function(){ IntakeFormParameters = Intake_parameters });
  
// ============================================
// FaCE Getting started questions
var FormTitle = 'FaCE Orientation Form'
var pages = [
  [
    {
      type: 'drop-down',
      prompt: "What MONTH are we in?", 
      name: 'CurrentMonth', 
      options: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      required: false,
    },
    {
        type: 'text',
        prompt: "What is today's DATE?", 
        placeholder: '1',
        name: 'CurrentDate', 
        required: false,
      }, 
    {
        type: 'text',
        prompt: "What YEAR are we in?", 
        placeholder: '1900',
        name: 'CurrentYear', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: "What SEASON are we in?", 
        placeholder: '',
        name: 'CurrentSeason', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: "What CITY are we in?", 
        placeholder: '',
        name: 'CurrentCity', 
        required: false,
      }, 
  ]
]
var Orient_parameters = {}
Orient_parameters.title = FormTitle
Orient_parameters.pages = pages
add('EN_OrientationForm_FaCE', function(){ IntakeFormParameters = Orient_parameters });
// ============================================
    pages: [
      [
        {
          type: 'text',
          prompt: "Participant ID", 
          placeholder: '00000000',
          name: 'ParticipantID', 
          required: true,
        }, 

        {
          type: 'drop-down',
          prompt: "In what month were you born?", 
          name: 'MonthOfBirth', 
          options: ['January','February','March','April','May','June','July','August','September','October','November','December'],
          required: false,
        },
        {
            type: 'text',
            prompt: "What is your year of birth?", 
            placeholder: '1900',
            name: 'YearOfBirth', 
            required: false,
          }, 
        {
          type: 'multi-choice',
          prompt: "What sex were assigned at birth, on your original birth certificate?", 
          options: ['Female','Male'],
          name: 'Sex', 
          required: false,
        }, 
        {
          type: 'multi-choice',
          prompt: 'What is your gender?', 
          options: ['Woman','Man','Trans Woman','Trans Man','Non-Binary','Other'],
          name: 'Gender', 
          required: false,
        },
        {
            type: 'drop-down',
            prompt: "How many years of education have you completed? (for example completing high school is 12, completing a BA/BS is 16, completing an MA/MS is 18, completing a PhD is 21", 
            name: 'YearsEdu', 
            options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','other'],
            required: false,
          },
        {
          type: 'multi-choice',
          prompt: 'What hand do you prefer to use?', 
          options: ['Left','No preference','Right',"I don't know",'Prefer not to answer'],
          name: 'Handedness', 
          required: false,
        }
        
          /*{
            type: 'likert-table',
            prompt: 'What hand do you prefer to use when:',
            name: "Handedness",
            statements: [{name:'Writing'},{name:'Drawing'},
            {name:'Throwing'},{name:'Using scissors'},{name:'Using a toothbrush'},
            {name:'Using a knife (without a fork)'},{name:'Using a spoon'},
            {name:'Striking a match'},{name:'Using a broom (upper hand)'},
            {name:'Opening a box (lid)'}],
            options: ['Left','No preference','Right',"I don't know",'Prefer not to answer'],
          }*/
      ]
    ]
  add('EN_IntakeForm_Generic', function(){ IntakeFormParameters = pages });