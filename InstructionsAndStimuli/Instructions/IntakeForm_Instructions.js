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
  
  EN_IntakeForm_FaCE.Instructions01 = [
    {'page': ' Please, make sure your microphone and speakers are on and that the volume is set so you can hear the tasks. '+
      'If you want to finish the experiment early, press the <em>Stop</em> button in the top left. If you want to remove yourself '+
      'from the experiment press the <em>Quit</em> button. Please, do not press your browser\'s back or reload buttons.'},
      {'page': 'If a task freezes on you, you can press the <em>Skip</em> button. If you have feedback you would like to share '+
      'with us, there will be a text box at the end where you can type in comments.'}
  ]

add('EN_Instructions_IntakeFaCE', function(){ Instructions = EN_IntakeForm_FaCE });



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
  add('FR_IntakeForm_FaCE', function(){ parameters = FR_IntakeForm_FaCE });
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
add('EN_Instructions_OrientationFaCE', function(){ Instructions = EN_Orient_parameters });

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
add('FR_OrientationForm_FaCE', function(){ parameters = FR_Orient_parameters });

// ============================================
// ============================================
var FormTitle = 'Intake Form'
var pages = [
      [
        {
          type: 'text',
          prompt: "In what month and year were you born?", 
          name: 'Year-Month of Birth', 
          input_type: "month",
          required: false,
        },
        {
          type: 'multi-choice',
          prompt: "What sex were assigned at birth, on your original birth certificate?", 
          options: ['Female','Male'],
          add_other_option: true,
          other_option_text: 'You don\’t have an option that applies to me. I identify as (please specify)',
          name: 'Sex', 
          required: false,
        }, 
        {
          type: 'multi-choice',
          prompt: 'What is your gender?', 
          options: ['Woman','Man','Trans Woman','Trans Man','Non-Binary'],
          add_other_option: true,
          other_option_text: 'You don\’t have an option that applies to me. I identify as (please specify)',
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
    var EN_IntakeForm_Generic = {}
    EN_IntakeForm_Generic.title = FormTitle
    EN_IntakeForm_Generic.pages = pages  
    
    EN_IntakeForm_Generic.Instructions01 = [
      {'page': ' Please, make sure your microphone and speakers are on and that the volume is set so you can hear the tasks. '+
        'If you want to finish the experiment early, press the <em>Stop</em> button in the top left. If you want to remove yourself '+
        'from the experiment press the <em>Quit</em> button. Please, do not press your browser\'s back or reload buttons.'},
        {'page': 'If a task freezes on you, you can press the <em>Skip</em> button. If you have feedback you would like to share '+
        'with us, there will be a text box at the end where you can type in comments.'}
    ]

  add('EN_Instructions_Default', function(){ Instructions = EN_IntakeForm_Generic });

  // ============================================
var FormTitle = 'Formulaire d\'admission'
var pages = [
      [
        {
          type: 'text',
          prompt: "En quel mois et en quelle année êtes-vous né?", 
          name: 'MonthOfBirth02', 
          input_type: "month",
          required: false,
        },
        {
          type: 'multi-choice',
          prompt: "Quel sexe vous a été attribué à la naissance, sur votre acte de naissance original?", 
          options: ['Femelle', 'Mâle'],
          add_other_option: true,
          other_option_text: 'Vous n’avez pas d’option qui s’applique à moi. Je m\'identifie comme (veuillez préciser)',
          name: 'Sex', 
          required: false,
        }, 
        
        {
          type: 'multi-choice',
          prompt: 'Quel est votre genre?', 
          options: ['Femme','Homme','Femme trans','Homme trans','Non binaire'],
          add_other_option: true,
          other_option_text: 'Vous n\'avez pas d’option qui s’applique à moi. Je m\'identifie comme (veuillez préciser)',
          name: 'Gender', 
          required: false,
        },
        {
            type: 'drop-down',
            prompt: "Combien d'années d'études avez-vous complétées ? (par exemple, terminer ses études secondaires est de 12 ans, terminer un BA/BS est de 16 ans, terminer une MA/MS est de 18 ans, terminer un doctorat est de 21 ans.", 
            name: 'YearsEdu', 
            options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','autre'],
            required: false,
          },
        {
          type: 'multi-choice',
          prompt: 'Quelle main préférez-vous utiliser?', 
          options: ['Gauche','Aucune préférence','Droite','Je ne sais pas','Je préfère ne pas répondre'],
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
    var FR_IntakeForm_Generic = {}
    FR_IntakeForm_Generic.title = FormTitle
    FR_IntakeForm_Generic.pages = pages  

    FR_IntakeForm_Generic.Instructions01 = [
      {'page': ' Veuillez-vous assurer que votre microphone et vos haut-parleurs sont allumés et que le volume est réglé pour que vous puissiez entendre les tâches. '+
        'Si vous souhaitez terminer la tâche plus tôt, appuyez sur le bouton <em>Arrêt</em> en haut à gauche. Si vous souhaitez vous supprimer '+
        'de la tâche, appuyez sur le bouton <em>Quitter</em>. S\'il vous plaît, n\'appuyez pas sur les boutons de retour ou de rechargement de votre navigateur.'},
        {'page': 'Si une tâche se bloque, vous pouvez appuyer sur le bouton <em>Passer</em>. Si vous avez des commentaires, et que vous aimeriez les partager '+
        'avec nous, il y aura une zone de texte à la fin où vous pourrez écrire des commentaires.'}
    ]
  add('FR_Instructions_Default', function(){ console.log("Loading Instructions"); Instructions = FR_IntakeForm_Generic });

// =============================
// T and E Getting started questions
var FormTitle = 'E et T Intake Form'
var FR_pages = [
  [
    {
      type: 'multi-choice',
      prompt: "Quel sexe vous a été attribué à la naissance, sur votre acte de naissance original?", 
      options: ['Femelle', 'Mâle'],
      add_other_option: true,
      other_option_text: 'Vous n’avez pas d’option qui s’applique à moi. Je m\'identifie comme (veuillez préciser)',
      name: 'Sex', 
      required: false,
    }, 
    {
      type: 'drop-down',
      prompt: "Combien d'heures de sommeil avez-vous eu hier soir?",
      name: 'SleepLastNight', 
      options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
      required: false,
    },
    {
      type: 'drop-down',
      prompt: "Combien d'heures de sommeil avez vous eu au cours des derniers sept jours?",
      name: 'SleepLastWeek', 
      options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
      required: false,
    },
  ]
]
var FR_IntakeForm_EetT = {}
FR_IntakeForm_EetT.title = FormTitle
FR_IntakeForm_EetT.pages = FR_pages
add('FR_Instructions_EetT', function(){ Instructions = FR_IntakeForm_EetT });


// ==================================================

var FormTitle = 'MHRI Intake Form'
var pages = [
    [
        {
            type: 'multi-choice',
            prompt: 'Gender',
            name: 'Gender',
            options: ['Male', 'Female', 'Neutral'],
            required: true,
        },
        {
          type: 'text',
          prompt: 'Age',
          name: 'Age',
          required: true,
      },
      {
          type: 'text',
          prompt: 'Height (cm or feet/inches)',
          name: 'Height',
          required: true,
      },
      {
          type: 'text',
          prompt: 'Weight (kg or lbs)',
          name: 'Weight',
          required: true,
      },
    ]
]

var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': 'Instructions are written here.',
    }
]
add('EN_Instructions_Music', function(){ Instructions = EN_IntakeForm_Music });

