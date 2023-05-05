// =======================================================================
// Define internal variables
console.log(DigitSpan_parameters)
var timeline = [];
var stimList; //this is going to house the ordering of the stimuli for each trial
var stimListOfFiles;
var idx = 0; //for indexing the current letter to be presented
var exitLetters; //for exiting the letter loop
var TrialCount = 1;
var response = [];
var staircase
var accuracy 
var MaxErrorsInRow = 0
var CurrentListLength
var StopFlag = true // will stop procedure if false, but only checks AFTER ONE TRIAL
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Initial setup procedures
var ReadParametersAndSetup = {
  type: jsPsychCallFunction,
  func: function(){
    if (DigitSpan_parameters.DeliveryMethod == 'staircase'){
      console.log("STAIRCASE")
      staircase = new Stair(DigitSpan_parameters.Parameters.Current, DigitSpan_parameters.Parameters.MinValue, DigitSpan_parameters.Parameters.MaxValue, DigitSpan_parameters.Parameters.MaxReversals, DigitSpan_parameters.Parameters.MaxTrials, DigitSpan_parameters.Parameters.StepSize, DigitSpan_parameters.Parameters.NUp, DigitSpan_parameters.Parameters.NDown, DigitSpan_parameters.Parameters.FastStart, DigitSpan_parameters.Parameters.MaxTime)
      CurrentListLength = staircase.Current
    }
    else if (DigitSpan_parameters.DeliveryMethod == 'fixed'){
      console.log("FIXED")
      CurrentListLength = DigitSpan_parameters.Parameters.Current
    }
    else if (DigitSpan_parameters.DeliveryMethod == 'numberErrors'){
      console.log("NUMBER OF ERRORS")
      CurrentListLength = DigitSpan_parameters.Parameters.Current
    }
  }
}
// preload audio
var preload_digits = {
  type: jsPsychPreload,
  audio: function() {
    var initList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var List = MakeListOfStimuli(FolderOfAudioFiles, initList)
    console.log(List)
    console.log("PRELOADING AUDIO")
    return List
  },
};
// Only preload audio if it will be used
var if_node = {
  timeline: [preload_digits],
  conditional_function: function(){
    if ( DigitSpan_parameters.StimulusMode == 'audio' )
      { return true }
    else { return false }
  }
}

var UpdateListLength = {
    type: jsPsychCallFunction,
    func: function(){
        if (DigitSpan_parameters.DeliveryMethod == 'staircase') {
          staircase.Decide(accuracy)
          CurrentListLength = staircase.Current
        }
        if (DigitSpan_parameters.DeliveryMethod == 'numberErrors') {
          CurrentListLength += 1
          if (accuracy == false ) 
            { MaxErrorsInRow += 1 }
            // if correct, reset the counter
          else   { MaxErrorsInRow = 0 }
        }
        if (DigitSpan_parameters.DeliveryMethod == 'fixed') {
          CurrentListLength += 1
        }
    }
}

var CheckWhetherToStop = {
  type: jsPsychCallFunction,
  func: function(){
      if (DigitSpan_parameters.DeliveryMethod == 'staircase') {
        if ( TrialCount > DigitSpan_parameters.Parameters.MaxTrials )
          { StopFlag = false}
      }
      if (DigitSpan_parameters.DeliveryMethod == 'numberErrors') {
        if (MaxErrorsInRow == DigitSpan_parameters.Parameters.Nerrors )
        { StopFlag = false}
      }
      if (DigitSpan_parameters.DeliveryMethod == 'fixed') {
        if ( TrialCount > DigitSpan_parameters.Parameters.MaxTrials )
          { StopFlag = false}
      }
    }
}

var stim
var SetupTrial = {
    type: jsPsychCallFunction,
    func: function(data){
        console.log("Current List Length: "+CurrentListLength)
        stimList = CreateDigitList(CurrentListLength)
        if ( DigitSpan_parameters.StimulusMode == 'audio' ) {
            stim = MakeListOfStimuli(FolderOfAudioFiles, stimList)
        }
        else { // visual
            stim = stimList
        }
        console.log("The stimulus is: "+stim)
        idx = 0; //reset the index prior to the letter presentation
        //data.TrialNumber = TrialCount - 1
        //data.task = 'test trial'
        //data.NumberList = stimList
    }
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
  trial_duration: 500
}

// set-up screen
// Display the trial number onthe screen
var TrialNumber = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    on_load: function() {
        TrialCount += 1
    },
    stimulus: function() {return '<p>Trial number: '+ String(TrialCount) + '</p>';},
    choices: [],
    prompt: "",
    trial_duration: DurationToWaitBetweenTrials,
    post_trial_gap: TimeGapBetweenAudioLetters,
};

// Audio presentation
var AudioStim = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: function(){
      console.log(stim[idx])
      return stim[idx]},
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
// Visual presentation
var VisualStim = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    console.log(stim[idx])
    return '<p class="Fixation">'+stim[idx] +'</p>'},
  choices: [],
  post_trial_gap: TimeGapBetweenAudioLetters,
  trial_duration: NumberDurationVisual,
  on_finish: function(data){
    data.TrialNumber = TrialCount - 1
    data.task = 'visual'
    idx += 1; //update the index
    //check to see if we are at the end of the letter array
    if (idx == stimList.length) {
        exitLetters = 1;
    } else  {
        exitLetters = 0;
    }
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

 var get_response = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    if ( DigitSpan_parameters.direction == 'forward' ) {
      return PutStimIntoTable(ForwardTrialQuestion + response_grid) 
    }
    else {return PutStimIntoTable(BackwardTrialQuestion + response_grid) }
  },
  choices: ['Enter'],
  on_finish: function(data) {
      var curans = response;
      accuracy = CheckResponse(stimList, response)
      if (DigitSpan_parameters.direction == 'backward') {
        accuracy = CheckResponse(RevereseStimList(stimList), response)   
      }
      else {
        accuracy = CheckResponse(stimList, response)        
      } 
      data.TrialNumber = TrialCount - 1
      data.StimLoad = CurrentListLength
      data.task = 'response trial'
      data.correct = accuracy
      data.NumberList = curans
      console.log(data)
      // update the staircase
      //staircase.Decide(accuracy)
      //clear the response for the next trial
      response = []; 
  }
};

// =======================================================================
// Add scoring procedures to the Thank you screen
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get() 
    console.log(data)
    Results = DigitSpan_Scoring(data)
    jsPsych.finishTrial(Results)
  }
}

// =======================================================================
// Define any logic used in the experiment
var present_audio = {
    timeline: [AudioStim],
    loop_function: function(){
      if ( exitLetters == 0 ){ return true }
      else { return false }
    }
}
var present_visual = {
  timeline: [VisualStim],
  loop_function: function(){
    if ( exitLetters == 0 ){ return true }
    else { return false }
  }
}
// This is a clunky way to present the correct instructions.
// The problem is that the timeline_variables does not accept functions
var if_audio_forward_instr = {
    timeline: [Instructions],
    timeline_variables: ForwardAudioInstructions,
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'audio' && DigitSpan_parameters.direction =='forward' )
            { return true }
        else { return false }
    }
}
var if_audio_backward_instr = {
    timeline: [Instructions],
    timeline_variables: BackwardAudioInstructions,
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'audio' && DigitSpan_parameters.direction =='backward' )
            { return true }
        else { return false }
    }
}
var if_visual_forward_instr = {
    timeline: [Instructions],
    timeline_variables: ForwardVisualInstructions,
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'visual' && DigitSpan_parameters.direction =='forward' )
            { return true }
        else { return false }
    }
}
var if_visual_backward_instr = {
    timeline: [Instructions],
    timeline_variables: BackwardVisualInstructions,
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'visual' && DigitSpan_parameters.direction =='backward' )
            { return true }
        else { return false }
    }
}

var if_audio = {
  timeline: [present_audio],
  conditional_function: function(){
    if ( DigitSpan_parameters.StimulusMode == 'audio' )
      { return true }
    else { return false }
  }
}

var if_visual = {
  timeline: [present_visual],
  conditional_function: function(){
    if ( DigitSpan_parameters.StimulusMode == 'visual' )
      { return true }
    else { return false }
  }
}

var procedure = {
  timeline: [SetupTrial, TrialNumber, if_audio, if_visual, get_response, UpdateListLength, CheckWhetherToStop],//, NumberPadResponse],
  loop_function: function(){
    return StopFlag
  }
};

var welcome = {
  timeline: [Instructions],
  timeline_variables: [{'page':"Welcome"}],
  randomize_order: false,
  repetitions: 1,
}

var thank_you = {
    timeline: [Instructions],
    timeline_variables: ThankYouText,
    randomize_order: false,
    repetitions: 1,
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    if ( DigitSpan_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    if ( DigitSpan_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}
// =======================================================================    
// Define procedures using the stimuli

// ======================================================================= 
// Add all procedures to the timeline

timeline.push(if_Welcome)
timeline.push(if_node)
timeline.push(ReadParametersAndSetup)
timeline.push(if_audio_forward_instr)
timeline.push(if_visual_forward_instr)
timeline.push(if_audio_backward_instr)
timeline.push(if_visual_backward_instr)
timeline.push(procedure)
timeline.push(SendData)
timeline.push(if_ThankYou)