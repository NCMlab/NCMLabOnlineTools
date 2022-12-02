
// What is needed?
/*
- Ask participant to read a practice list of words to make sure they can be recognized by 
the computer.
- If words can not be identified decide to skip this experiment. 
- Calculate all of the scores.
- Present words a set number of time and modify the word list each time

*/

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
  stimulus: '+',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: FixationTimeBetweenWords,
  data: {task: 'fixation'}
}
// Define the stimuli
var Stimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        var Stim = jsPsych.timelineVariable('Word')
        return Stim
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: TimePerWord,
    prompt: StroopWordPrompt, //Add this to config file
  };

var RecallRequest = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Recall this full list",
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopWordPrompt, //Add this to config file
    on_start: function(SimpleList) {
        const commands2 = {'*search': myFunction2};
      annyang.start({autorestart: false, continuous: true});
      annyang.addCommands(commands2);
      console.log('Started')
    }
  };

// =======================================================================    
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback
  var test_procedure = {
      timeline: [fixation, Stimulus],
      timeline_variables: WordList,
      randomize_order: false,
      repetitions: 1, 
  }

  var block_procedure = {
      timeline: [test_procedure, RecallRequest],
      randomize_order: false,
      repetitions: NBlocks, 
  }
  
// ======================================================================= 
// Add procedures to the timeline
timeline.push(RecallRequest)
timeline.push(block_procedure);



