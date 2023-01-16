
// =======================================================================
// Define internal variables
var timeline = [];

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 

var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p class="Fixation">+</p>',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: FixationTimeBetweenTrials
}

var trial = {
    type: jsPsychImageButtonResponse,
    stimulus: function()
    {
      var stim = MakeICARMatrxiReasoningStim(jsPsych.timelineVariable('stim'),StimulusFolderName)
      return stim
    },
    choices: function()
    {
      var stim = MakeICARMatrxiReasoningOptions(jsPsych.timelineVariable('stim'),StimulusFolderName)
      return stim
    },
    prompt: OptionsPrompt,
    on_finish: function(data) 
    {
        var response = OptionMapping[data.response]

        var correct = jsPsych.timelineVariable('correct')
        if ( response == correct ) 
        {
          data.correct = 1
        }
        else {data.correct = 0}
    }
    
};
// Define instructions
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
// =======================================================================    
// Define procedures using the stimuli
 var trial_procedure = {
      timeline: [fixation, trial],
      timeline_variables: ICAR_MatrixList,
      randomize_order: false,
      repetitions: 1,
    }
  var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: MatrixReasoning_Instructions,
      randomize_order: false,
      repetitions: 1,
    }
  var thankyou_procedure = {
      timeline: [Instructions],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
    }    
// ======================================================================= 

timeline.push(instr_procedure)
timeline.push(trial_procedure)
timeline.push(thankyou_procedure)
