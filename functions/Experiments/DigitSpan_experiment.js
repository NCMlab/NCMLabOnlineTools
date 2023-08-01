// =======================================================================
// Define internal variables
console.log(DigitSpan_parameters)
var timeline = [];
var count = 0
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
var PreviousListLength = -99
var stim
var initList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    
    var List = MakeListOfStimuli(DigitSpan_Instructions.FolderOfAudioFiles, initList)
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
        // change this so that it presents two trials of each load
        if (DigitSpan_parameters.DeliveryMethod == 'numberErrors') {
          console.log("Previous Length: "+ PreviousListLength)
          console.log("Current Length: "+ CurrentListLength)
          if ( PreviousListLength == CurrentListLength ) 
          {
            CurrentListLength += 1  
          }
          else {PreviousListLength = CurrentListLength}
          if (accuracy == false ) 
            { MaxErrorsInRow += 1 }
            // if correct, reset the counter
          else   { MaxErrorsInRow = 0 }
        }
        if (DigitSpan_parameters.DeliveryMethod == 'fixed') {
          CurrentListLength += 1
        }
        console.log("Previous Length: "+ PreviousListLength)
          console.log("Current Length: "+ CurrentListLength)
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


var SetupTrial = {
    type: jsPsychCallFunction,
    func: function(data){
        console.log("Current List Length: "+CurrentListLength)
        stimList = CreateDigitList(CurrentListLength)
        if ( DigitSpan_parameters.StimulusMode == 'audio' ) {
            stim = MakeListOfStimuli(DigitSpan_Instructions.FolderOfAudioFiles, stimList)
            console.log("Made this list of stimuli: "+stim)
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
    stimulus: function() {return '<p>'+DigitSpan_Instructions.TrialNumber+': '+ String(TrialCount) + '</p>';},
    choices: [],
    prompt: "",
    trial_duration: DurationToWaitBetweenTrials,
    post_trial_gap: TimeGapBetweenAudioLetters,
};

// Audio presentation
var OLDAudioStim = {
    type: jsPsychAudioButtonResponse,
    stimulus: function(){
      console.log("The stim list is: "+stim)
      console.log("The idx is: "+idx)
      console.log("Presenting: "+stim[idx])
      return stim[idx]},
    choices: [],
    post_trial_gap: TimeGapBetweenAudioLetters,
    prompt: '<p class="Fixation">+</p>',
    trial_duration: function(){return 1500},
    on_finish: function(data){
      console.log("Finished presenting")
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

var AudioStim = {
  type: jsPsychAudioButtonResponse,
  stimulus: function(){
    console.log("Audio List length is: "+9)
     
    //randomElement = Math.floor(Math.random() * AudioTestList.length) + 1
    console.log('Planning to present element: '+idx)
    console.log("The stim list is: "+stim)
    console.log(stim[idx])
    return stim[idx]
  },
  choices: [],
  trial_ends_after_audio: false,
  trial_duration: 1500,
  response_ends_trial: false,
  prompt: '<p class="Fixation">+</p>',
  on_finish: function(data) {
    console.log("Finished presenting")
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
  stimulus: function (){return jsPsych.timeline_variables('page')},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}
var AudioForward_Instructions = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return DigitSpan_Instructions.ForwardAudioInstructions[count].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var AudioBackward_Instructions = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return DigitSpan_Instructions.BackwardAudioInstructions[count].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}
var VisualForward_Instructions = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return DigitSpan_Instructions.ForwardVisualInstructions[count].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var VisualBackward_Instructions = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return DigitSpan_Instructions.BackwardVisualInstructions[count].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var get_response = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      if ( DigitSpan_parameters.direction == 'forward' ) {
        return PutStimIntoTable(DigitSpan_Instructions.ForwardTrialQuestion + response_grid,'') 
      }
      else {return PutStimIntoTable(DigitSpan_Instructions.BackwardTrialQuestion + response_grid,'') }
    },
    on_load: function() {
      
      document.getElementById('ClearButton').innerHTML = LabelNames.Clear;
      console.log(document.getElementById('current_answer'))
      document.getElementById('current_answer').innerHTML = LabelNames.CurrentAnswer

      
    },
    choices: function() {return [LabelNames.Enter]},
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
        data.StimList = stimList
        data.ResponseList = curans
        console.log(data)
        // update the staircase
        //staircase.Decide(accuracy)
        //clear the response for the next trial
        response = []; 
    }
};

var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { 
    data.trial = "Notes" 
  },
}

// =======================================================================

var AudioForward_Instructions_loop_node = {
  timeline: [AudioForward_Instructions],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < DigitSpan_Instructions.ForwardAudioInstructions.length){
        return true} else { return false}
  }
}
var AudioBackward_Instructions_loop_node = {
  timeline: [AudioBackward_Instructions],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < DigitSpan_Instructions.BackwardAudioInstructions.length){
        return true} else { return false}
  }
}
var VisualForward_Instructions_loop_node = {
  timeline: [VisualForward_Instructions],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < DigitSpan_Instructions.ForwardVisualInstructions.length){
        return true} else { return false}
  }
}
var VisualBackward_Instructions_loop_node = {
  timeline: [VisualBackward_Instructions],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < DigitSpan_Instructions.BackwardVisualInstructions.length){
        return true} else { return false}
  }
}

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
    timeline: [AudioForward_Instructions_loop_node],
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'audio' && DigitSpan_parameters.direction =='forward' )
            { return true }
        else { return false }
    }
}
var if_audio_backward_instr = {
    timeline: [AudioBackward_Instructions_loop_node],
    timeline_variables: function() {return DigitSpan_Instructions.BackwardAudioInstructions},
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'audio' && DigitSpan_parameters.direction =='backward' )
            { return true }
        else { return false }
    }
}
var if_visual_forward_instr = {
    timeline: [VisualForward_Instructions_loop_node],
    timeline_variables: function() {return DigitSpan_Instructions.ForwardVisualInstructions},
    conditional_function: function() {
        if ( DigitSpan_parameters.StimulusMode == 'visual' && DigitSpan_parameters.direction =='forward' )
            { return true }
        else { return false }
    }
}
var if_visual_backward_instr = {
    timeline: [VisualBackward_Instructions_loop_node],
    timeline_variables: function() {return DigitSpan_Instructions.BackwardVisualInstructions},
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
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return DigitSpan_Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(DigitSpan_Instructions)
    return DigitSpan_Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
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
var if_Test_Instructions = {
  timeline: [if_audio_forward_instr, if_visual_forward_instr, if_audio_backward_instr, if_visual_backward_instr],
  conditional_function: function() {
        if ( DigitSpan_parameters.ShowInstructions)
        { 
          return true }
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

timeline.push(if_Test_Instructions)
timeline.push(procedure)
timeline.push(Notes)
timeline.push(if_ThankYou)
timeline.push(SendData)

