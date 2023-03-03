// =======================================================================
// Define internal variables
var timeline = [];
var stimList; //this is going to house the ordering of the stimuli for each trial
var stimListOfFiles;
var idx = 0; //for indexing the current letter to be presented
var exitLetters; //for exiting the letter loop
var TrialCount = 1;
var MaxTrials = 14;
//var Direction = 'Forward'
var response = [];
// =======================================================================
if ( Direction == 'Forward' ) {
  var staircase = new Stair(FDSCurrent, MinValue, MaxValue, MaxReversals, MaxTrials, StepSize, NUp, NDown, FastStart, MaxTime)
  var instructionText = ForwardAudioInstructions
}
else { // Backward span
  var staircase = new Stair(BDSCurrent, MinValue, MaxValue, MaxReversals, MaxTrials, StepSize, NUp, NDown, FastStart, MaxTime)
  var instructionText =  BackwardAudioInstructions
}

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
    console.log(List)
    return List
  },
};
var setup_fds = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  on_load: function() {
    TrialCount += 1
  },
  stimulus: function() {return '<p>Trial '+ TrialCount +' of '+ FDSMaxTrials +'</p>';},
  choices: ['Next'],
  prompt: "Press next to Continue",
  post_trial_gap: TimeGapBetweenAudioLetters,
  on_finish: function(data){
    stimList = CreateDigitList(staircase.Current)
    stimListOfFiles = MakeListOfStimuli(FolderOfAudioFiles, stimList)
    idx = 0; //reset the index prior to the letter presentation
    data.TrialNumber = TrialCount - 1
    data.task = 'test trial'
    data.NumberList = stimList
  },
};

// Define the stimuli
var AudioStimulus = {
 type: jsPsychAudioKeyboardResponse,
  stimulus: function(){
    console.log(stimListOfFiles[idx])
    return stimListOfFiles[idx]},
  choices: [],
  post_trial_gap: TimeGapBetweenAudioLetters,
  trial_ends_after_audio: true,
  prompt: '<p class="Fixation">+</p>',
  on_finish: function(data){
    data.TrialNumber = TrialCount - 1
    data.task = 'audio'
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
var letter_proc = {
    timeline: [AudioStimulus],
    loop_function: function(){
      if ( exitLetters == 0 ){
        return true;
      } else {
        return false;
      }
    }
  };

var procedure = {
  timeline: [setup_fds, letter_proc],//, NumberPadResponse],
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

timeline.push(preload_digits)
timeline.push(procedure)

