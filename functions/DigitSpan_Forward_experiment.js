// =======================================================================
// Define internal variables
var timeline = [];

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Initial setup procedures
// preload audio
var preload_digits = {
  type: 'preload',
  audio: aud_digits
};
// =======================================================================
// Define all of the different the stimuli 
var NumberPadResponse = {
    type: jsPsychNumberPadResponse,
    //button_html: '<button class="jspsych-btn">%choice%</button>',
    button_html: '<button class="button" >%choice%</button>',
    stimulus: '<p style="font-size:24px; color:black;">GREEN</p>',
    choices: ['1','2','3','4','5','6','7','8','9','0','<i class="material-icons">backspace</i>','Enter'],
    margin_vertical: '4px',
    response_ends_trial: false,
    response_disables: false,
    prompt: "<p>What color is the ink?</p>",
    on_finish() {
      // get the entered response
      var trial_data = jsPsych.data.getLastTrialData().values();
      var response = trial_data[0].response;
      console.log(response)
    }
  };


// Define instructions
var Instructions = {
      type: jspsychHtmlButtonResponseTouchscreen,
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

//letter presentation
var letter_fds = {
  type: jsPsychAudioKeyboardResponse,
  stimulus: MakeListOfStimuli(FolderOfAudioFiles, CreateDigitList(3)), 
  choices: 'NO_KEYS',
  post_trial_gap: 250,
  trial_ends_after_audio: true,
  on_finish: function(){
    idx += 1; //update the index
    //check to see if we are at the end of the letter array
    if (idx == stimList.length) {
      exitLetters = 1;
    } else  {
      exitLetters = 0;
    }
  }
};
// =======================================================================
// Define any logic used in the experiment
  var loop_node = {
      timeline: [trial_procedure, NumberPadResponse],
      loop_function: function(data){
      return (! stair1.Finished)
     }
    }


// =======================================================================    
// Define procedures using the stimuli
  var trial_procedure = {
      timeline: [letter_fds],
      randomize_order: false,
      repetitions: 1,
    }



// ======================================================================= 
  // Add procedures to the timeline

  timeline.push(preload_digits)
  timeline.push(loop_node)



