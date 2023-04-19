
// =======================================================================
// Define internal variables
var timeline = [];
var MatrixList
var ImageFileList = []
var MatrixReasoningSetup = {
    type: jsPsychCallFunction,
    func: function() 
    {
        for ( var i = 0; i < MatrixReasoning_parameters.StimList.length; i++ ){
  
            ImageFileList.push(MakeMatrxiReasoningStim(MatrixReasoning_parameters.StimList[i]['stim'], FolderName, MatrixReasoning_parameters.StimulusFolderName))
            OptionNames = MakeMatrxiReasoningOptionsFileNames(MatrixReasoning_parameters.StimList[i]['stim'], FolderName, MatrixReasoning_parameters.StimulusFolderName)
            for (var j = 0; j < 6; j++)
            { 
            ImageFileList.push(OptionNames[j])
            }
        }
        MatrixList = MatrixReasoning_parameters.MatrixList
    } 
}
// Make a list of all images used for preloading


// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 
var preload = {
    type: jsPsychPreload,
    images: ImageFileList,    
}
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p class="Fixation">+</p>',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: function() {return MatrixReasoning_parameters.FixationTimeBetweenTrials},
}

var trial = {
    type: jsPsychImageButtonResponse,
    stimulus: function()
    {
      var stim = MakeMatrxiReasoningStim(jsPsych.timelineVariable('stim'),FolderName, MatrixReasoning_parameters.StimulusFolderName)
      return stim
    },
    choices: function()
    {
      var stim = MakeMatrxiReasoningOptions(jsPsych.timelineVariable('stim'),FolderName, MatrixReasoning_parameters.StimulusFolderName, 
      MatrixReasoning_parameters.StimWidth, MatrixReasoning_parameters.StimHeight)
      return stim
    },
    prompt: OptionsPrompt,
    on_finish: function(data) 
    {
        var response = MatrixReasoning_parameters.OptionMapping[data.response]
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
      timeline_variables: MatrixList,
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
timeline.push(MatrixReasoningSetup)
timeline.push(preload)
timeline.push(instr_procedure)
timeline.push(trial_procedure)
timeline.push(thankyou_procedure)
