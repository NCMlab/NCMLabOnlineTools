// ============================================
// ====== ENGLISH =========
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
            prompt: "How many years of education have you completed? (completed elementary school: 6 years; completed high school : 5 years; CEGEP and university depending on the program studied)", 
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
        
        {
          type: 'multi-choice',
          prompt: "Which hand is your dominant one?", 
          options: ['Left', 'Right'],
          name: 'Handed', 
          required: false,
        }, 
    ]
  ]
  
  var EN_IntakeForm_FaCE = {}
  EN_IntakeForm_FaCE.title = FormTitle
  EN_IntakeForm_FaCE.pages = pages
  add('EN_IntakeForm_FaCE', function(){ IntakeFormParameters = EN_IntakeForm_FaCE });
  // ============================================
  // ====== FRENCH =========
var FormTitle = 'FaCE Informations générales '
var pages = [
      [
        {
          type: 'text',
          prompt: "Numéro d\’identification", 
          placeholder: '00000000',
          name: 'ParticipantID', 
          required: true,
        }, 
        {
            type: 'drop-down',
            prompt: "Quel est le nombre total d\’années d\’études que vous avez complétées jusqu\’ici? (primaire complété : 6 années; secondaire complété : 5 années; CEGEP et université selon le programme)", 
            name: 'YearsEdu', 
            options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','other'],
            required: false,
          },

        {
          type: 'drop-down',
          prompt: "Quelle est votre MOIS de naissance?", 
          name: 'MonthOfBirth', 
          options: ['January','February','March','April','May','June','July','August','September','October','November','December'],
          required: false,
        },
        {
            type: 'text',
            prompt: "Quelle est votre JOUR de naissance?", 
            placeholder: '1',
            name: 'DayOfBirth', 
            required: false,
          }, 
        {
            type: 'text',
            prompt: "Quelle est votre ANNÈ de naissance", 
            placeholder: '1900',
            name: 'YearOfBirth', 
            required: false,
          }, 
          
        {
          type: 'multi-choice',
          prompt: "Quel est votre sexe?", 
          options: ['Femme', 'Homme', 'Autre', 'Ne veut pas répondre'],
          name: 'Sex', 
          required: false,
        }, 
        {
          type: 'multi-choice',
          prompt: "Quelle est votre main dominante?", 
          options: ['Gauche', 'Droite'],
          name: 'Handed', 
          required: false,
        }, 
      ]
    ]
  
  var FR_IntakeForm_FaCE = {}
  FR_IntakeForm_FaCE.title = FormTitle
  FR_IntakeForm_FaCE.pages = pages
  add('FR_IntakeForm_FaCE', function(){ IntakeFormParameters = FR_IntakeForm_FaCE });
// ============================================
// ======= ENGLISH ============
// FaCE Getting started questions
var FormTitle = 'FaCE Orientation Form'
var EN_pages = [
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
var EN_Orient_parameters = {}
EN_Orient_parameters.title = FormTitle
EN_Orient_parameters.pages = EN_pages
add('EN_OrientationForm_FaCE', function(){ IntakeFormParameters = EN_Orient_parameters });
// ============================================
// ======= FRENCH ============
// FaCE Getting started questions
var FormTitle = 'FaCE Orientation Form'
var FR_pages = [
  [
    {
      type: 'drop-down',
      prompt: "Dans quel MOIS sommes-nous ?", 
      name: 'CurrentMonth', 
      options: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
      required: false,
    },
    {
        type: 'text',
        prompt: "Quel est le DATE d'aujourd'hui?", 
        placeholder: '1',
        name: 'CurrentDate', 
        required: false,
      }, 
    {
        type: 'text',
        prompt: "En quelle ANNEE sommes-nous?", 
        placeholder: '1900',
        name: 'CurrentYear', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: "A quelle SAISON sommes-nous?", 
        placeholder: '',
        name: 'CurrentSeason', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: "Dans quelle VILLE sommes-nous ?", 
        placeholder: '',
        name: 'CurrentCity', 
        required: false,
      }, 
  ]
]
var FR_Orient_parameters = {}
FR_Orient_parameters.title = FormTitle
FR_Orient_parameters.pages = FR_pages
add('FR_OrientationForm_FaCE', function(){ IntakeFormParameters = FR_Orient_parameters });
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