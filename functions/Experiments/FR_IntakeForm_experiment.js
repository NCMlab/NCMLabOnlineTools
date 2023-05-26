var timeline = []
var trial = {
    type: jsPsychSurvey,
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
          prompt: "En quel mois êtes-vous né ?", 
          name: 'MonthOfBirth', 
          options: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
          required: false,
        },
        {
            type: 'text',
            prompt: "Quelle est votre année de naissance ?", 
            placeholder: '1900',
            name: 'YearOfBirth', 
            required: true,
          }, 
        {
          type: 'multi-choice',
          prompt: "Quel sexe a été attribué à la naissance, sur votre certificat de naissance original?", 
          options: ['Femelle','Mâle'],
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
            prompt: "Combien d'années d'études avez-vous complétées ? (par exemple, terminer le lycée est de 12, terminer un BA / BS est de 16, terminer une MA / MS est de 18, terminer un doctorat est de 21", 
            name: 'YearsEdu', 
            options: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','autre'],
            required: false,
          },
          {
            type: 'likert-table',
            prompt: 'Quelle main préférez-vous utiliser lorsque :',
            name: "Handedness",
            statements: [{name:'En écrivant'},{name:'Dessin'},
            {name:'Throwing'},{name:'Utiliser des ciseaux'},{name:'Using a toothbrush'},
            {name:'Using a knife (without a fork)'},{name:'Using a spoon'},
            {name:'Striking a match'},{name:'Using a broom (upper hand)'},
            {name:'Opening a box (lid)'}],
            options: ['Left','No preference','Right',"I don't know",'Prefer not to answer'],
          }
      ]
    ],
    title: 'Intake Form',
    button_label_next: 'Continue',
    button_label_back: 'Previous',
    button_label_finish: 'Submit',
    show_question_numbers: 'onPage',
    on_finish: function(data) {
      data.trial = "Intake Form"
    }
  };

  var Instructions = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
    {
      var stim = jsPsych.timelineVariable('page') // Variable in the config file
      return stim
    },
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: '',
    choices: ['Next'], 
  }  

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data)
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}

timeline.push(trial)
timeline.push(SendData)
  