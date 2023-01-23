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
    return List
  },
};
// =======================================================================
// Define all of the different the stimuli 

// Define instructions

// set-up screen
// This screen is required so that the audio can be loaded and played
var setup_fds = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  on_load: function() {
    TrialCount += 1
  },
  stimulus: function() {return '<p>Trial '+ TrialCount +' of '+ FDSMaxTrials +'</p>';},
  choices: [],
  trial_duration: 1000,
  prompt: "",
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

// letter audio presentation
var letter_fds = {
  type: jsPsychAudioKeyboardResponse,
  stimulus: function(){
    return stimListOfFiles[idx]},
  choices: 'NO_KEYS',
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
//From the Experiment Factory Repository
var clearResponse = function() {
    response = [];
    document.getElementById("echoed_txt").innerHTML = response;
  }
//function to push button responses to array
var recordClick = function(elm) {
    response.push(Number($(elm).text()))
    document.getElementById("echoed_txt").innerHTML = response;
  }

var response_grid =
    '<div class = numbox>' +
    '<button id = button_1 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>1</div></div></button>' +
    '<button id = button_2 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>2</div></div></button>' +
    '<button id = button_3 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>3</div></div></button>' +
    '<button id = button_4 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>4</div></div></button>' +
    '<button id = button_5 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>5</div></div></button>' +
    '<button id = button_6 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>6</div></div></button>' +
    '<button id = button_7 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>7</div></div></button>' +
    '<button id = button_8 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>8</div></div></button>' +
    '<button id = button_9 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>9</div></div></button>' +
    '<button class = clear_button id = "ClearButton" onclick = "clearResponse()">Clear</button>'+
    '<p><u><b>Current Answer:</b></u></p><div id=echoed_txt style="font-size: 3vh; color:blue;"><b></b></div></div>'

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
  stimulus: response_grid,
  //function() {
  //  return PutStimIntoTable('What were the numbers <b>in order</b>?',response_grid)
  //},
  choices: ['Enter'],
  on_finish: function(data) {
      var curans = response;
      accuracy = CheckResponse(stimList, response)
      if (Direction == 'Backward') {
        accuracy = CheckResponse(RevereseStimList(stimList), response)   
      }
      else {
        accuracy = CheckResponse(stimList, response)        
      } 
      data.TrialNumber = TrialCount - 1
      data.StimLoad = staircase.Current
      data.task = 'response trial'
      data.correct = accuracy
      data.NumberList = curans
      // update the staircase
      staircase.Decide(accuracy)
      //clear the response for the next trial
      response = []; 

  }
};

// =======================================================================
// Add scoring procedures to the Thank you screen
var SendData = {
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
      on_finish: function(data){
        data = DigitSpan_Forward_Scoring(data,staircase) 
        data.task = 'Sending Data'

      }
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
  timeline: [setup_fds, letter_proc, get_response],//, NumberPadResponse],
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

 var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: instructionText,
      randomize_order: false,
      repetitions: 1,
    }
  var thank_you = {
      timeline: [SendData],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
    }
// ======================================================================= 
// Add all procedures to the timeline
timeline.push(preload_digits)
timeline.push(instr_procedure)
timeline.push(procedure)
timeline.push(thank_you)
  



