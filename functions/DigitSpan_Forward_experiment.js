// =======================================================================
// Define internal variables
var timeline = [];
var stimList; //this is going to house the ordering of the stimuli for each trial
var stimListOfFiles;
var idx = 0; //for indexing the current letter to be presented
var exitLetters; //for exiting the letter loop
var TrialCount = 1;
var FDSMaxTrials = 5;
var Direction = 'Forward'
// =======================================================================
var FDSstaircase = new Stair(FDSCurrent, MinValue, MaxValue, MaxReversals, FDSMaxTrials, StepSize, NUp, NDown, FastStart, MaxTime)
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Initial setup procedures
// preload audio
var preload_digits = {
  type: jsPsychPreload,
  audio: function() {
    var initList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var List = MakeListOfStimuli(FolderOfAudioFiles, initList)
    return List
  },
};
// =======================================================================
// Define all of the different the stimuli 

// Define instructions

// set-up screen
// This screen is required so that the audio can be loaded and played
var setup_fds = {
  type: jspsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return '<p>Trial '+ TrialCount +' of '+ FDSMaxTrials +'</p>';},
  choices: [],
  trial_duration: 1000,
  prompt: "",
  post_trial_gap: TimeGapBetweenAudioLetters,
  on_finish: function(){
    stimList = CreateDigitList(FDSstaircase.Current)
    stimListOfFiles = MakeListOfStimuli(FolderOfAudioFiles, stimList)
    TrialCount += 1
    idx = 0; //reset the index prior to the letter presentation
  },
};

// letter audio presentation
var letter_fds = {
  type: jsPsychAudioKeyboardResponse,
  stimulus: function(){
    return stimListOfFiles[idx]},
  choices: 'NO_KEYS',
  post_trial_gap: TimeGapBetweenAudioLetters,
  trial_ends_after_audio: true,
  prompt: '<p class="Fixation">+</p>',
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

var NumberPadResponse = {
    type: jsPsychNumberPadResponse,
    //button_html: '<button class="jspsych-btn">%choice%</button>',
    button_html: '<button class="button" >%choice%</button>',

    stimulus: function() {
      if ( Direction == 'Backward' ) {return BackwardTrialQuestion}
      else {return ForwardTrialQuestion}
    },
    choices: ['1','2','3','4','5','6','7','8','9','0','<i class="material-icons">backspace</i>','Enter'],
    margin_vertical: '2px',
    response_ends_trial: false,
    response_disables: false,
    prompt: '',
    on_finish() {
      // get the entered response
      var trial_data = jsPsych.data.getLastTrialData().values();
      var response = trial_data[0].response;
      // Is this the correct response?
      if (Direction == 'Backward') {
        accuracy = CheckResponse(stimList, response)
      }
      else {
        accuracy = CheckResponse(RevereseStimList(stimList), response)
        } 
      // update the staircase
      FDSstaircase.Decide(accuracy)
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
 
// =======================================================================
// Define any logic used in the experiment
var letter_proc = {
    timeline: [letter_fds],
    loop_function: function(){
      if ( exitLetters == 0 ){
        return true;
      } else {
        return false;
      }
    }
  };

var procedure = {
  timeline: [setup_fds, letter_proc, NumberPadResponse],//, NumberPadResponse],
  loop_function: function(){
    // The criteria for stopping are: 
    //    reached the max number of trials.
    // This will differ based on the type of experiment
    if ( TrialCount > FDSMaxTrials ) { 
      return false;
    } else {
      return true;
    }
  }
};

// =======================================================================    
// Define procedures using the stimuli
// procedure that loops over trials

 var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: AudioInstructions,
      randomize_order: false,
      repetitions: 1,
    }

// ======================================================================= 
  // Add procedures to the timeline
timeline.push(preload_digits)
timeline.push(instr_procedure)
timeline.push(procedure)

  



