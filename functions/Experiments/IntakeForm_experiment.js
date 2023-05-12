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
            required: true,
          }, 
        {
          type: 'multi-choice',
          prompt: "What sex were assigned at birth, on your original borth certificate?", 
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
            type: 'likert-table',
            prompt: 'What hand do you prefer to use when:',
            name: "Handedness",
            statements: [{name:'Writing'},{name:'Drawing'},
            {name:'Throwing'},{name:'Using scissors'},{name:'Using a toothbrush'},
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
  