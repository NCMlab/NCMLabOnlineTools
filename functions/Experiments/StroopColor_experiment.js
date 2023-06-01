// =======================================================================
// Use the correct parameter set
console.log(parameters)
console.log(Stroop_parameters)
// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
var countInstrPractice = 0
var countInstrTest = 0
var time_left
var StopFlag
var wait_time 
var RunPracticeFlag = -9999

var CalculateWaitTime = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    if ( Stroop_parameters.AllowedTime > 0 ) {
      wait_time = Stroop_parameters.AllowedTime * 1000; // in milliseconds
      console.log("The wait time is set to: "+wait_time)
    }
  }
}


// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
// Define all of the different the stimuli 

// Define the fixation cross
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    stim = PutStimIntoTable(Instructions.StroopColorPrompt, '<p class="Fixation">+</p>');
    return stim
  },
  choices:  function() {return Instructions.ResponseButtons},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: function() {return Instructions.StroopColorPrompt},
  trial_duration: function() {
    console.log("In the fixation block")
    if (Stroop_parameters.ITI_Duration > 0 ) {return  Stroop_parameters.ITI_Duration}
      else {
        return jsPsych.randomization.sampleWithoutReplacement(Stroop_parameters.ITI_Range, 1)[0]
      }
  },
}


// Define the stimuli
var Stimulus = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    var color = jsPsych.timelineVariable('Color')
    var stim = '<svg width="200" height="100"><rect width="200" height="100" style="fill:rgb'+color+'; stroke-width:3;stroke:rgb(0,0,0)" /></svg>'
    stim = PutStimIntoTable(Instructions.StroopColorPrompt, stim) 
    return stim
  },
  choices: function() {return Instructions.ResponseButtons}, 
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt: function() {return Instructions.StroopColorPrompt}, //Add this to config file
  on_finish: function(data){
    data.button = jsPsych.timelineVariable('button'),
    // check to see if the response is correct 
    data.correct = data.response == data.button;
  },
};

// Define the feedback
var feedback = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function(){
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    console.log(last_trial_correct)
    if (last_trial_correct) {
      var stim = '<p style="font-size:'+FeedbackFontSize+'";>'+
      LabelNames.Correct+'</p>';
    } else {
      var stim = '<p style="font-size:'+FeedbackFontSize+'";>'+
      LabelNames.Incorrect+'</p>';
    }
    return PutStimIntoTable(Instructions.StroopColorPrompt, stim)
  },
  choices:  function() {return Instructions.ResponseButtons},
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt: function() {return Instructions.StroopColorPrompt},
  trial_duration: FeedbackLength,
  on_finish: function(data){
    data.task = 'feedback'
  }
}  

// Prepare debriefing for after the practice trials
var debrief = {
  prompt: '',
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(parseInt(ColorTestQuestionTypes)*parseInt(Stroop_parameters.ColorPracticeRepeats))
        console.log(DataFromThisPracticeRun)
        var total_trials = DataFromThisPracticeRun.count();
        var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
        var accuracy = Math.round(NumberCorrect / total_trials * 100);
        return Instructions.DebriefTextPart01+accuracy+Instructions.DebriefTextPart02+total_trials+Instructions.DebriefTextPart03
      },
  choices: function() {return [LabelNames.Next]}, 
  on_finish: function() {
    // reset the counter for the if loop
    PracticeLoopCount = 1
  }
}
// This is used for labelling trials in the output data
// This allows the same stimuli to be used for both practice and test trials
var prac_stimulus = Object.assign({}, Stimulus)
  prac_stimulus = Object.assign(prac_stimulus, {    
    data: {
      task: 'practice trial',
    }
})

var test_stimulus = Object.assign({}, Stimulus)
  test_stimulus = Object.assign(test_stimulus, {    
    data: {
      task: 'test trial',
    }
})
// Define instructions

// General instructions
var Instructions_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.ColorInstrText[countInstr].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var instr_procedure_loop_node = {
  timeline: [Instructions_Procedure],
  loop_function: function(data){
    console.log("Instructional Loop Count is: "+countInstr)
    countInstr+=1
    if ( countInstr < Instructions.ColorInstrText.length){
        return true} else { return false}
  }
}
// Practice instructions
var InstructionsPractice_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.ColorPracticeText[countInstrPractice].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var instr_practice_procedure_loop_node = {
  timeline: [InstructionsPractice_Procedure],
  loop_function: function(data){
    console.log("Instructional Loop Count is: "+countInstrPractice)
    countInstrPractice+=1
    if ( countInstrPractice < Instructions.ColorPracticeText.length){
        return true} else { return false}
  }
}
// test instructions
var InstructionsTest_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.ColorTestInstrText[countInstrTest].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var instr_test_procedure_loop_node = {
  timeline: [InstructionsTest_Procedure],
  loop_function: function(data){
    console.log("Instructional Loop Count is: "+countInstrTest)
    countInstrTest+=1
    if ( countInstrTest < Instructions.ColorTestInstrText.length){
        return true} else { return false}
  }
}


// =======================================================================
// Define the practice procedure which DOES provide feedback
var PracticeLoopCount = 1
var practice_loop_node = {
  timeline: [fixation, prac_stimulus, feedback],
  timeline_variables: StroopWordList,
  randomize_order: true,
  loop_function: function(data){
      console.log('Working on loop: '+PracticeLoopCount+" of "+parseInt(Stroop_parameters.ColorPracticeRepeats))
      if (PracticeLoopCount < parseInt(Stroop_parameters.ColorPracticeRepeats)){
          PracticeLoopCount += 1
          return true;
      } else {
          return false;
      }
  }
}

// Define the test procedure which does NOT provide feedback
var TestLoopCount = 1
var test_loop_node = {
    timeline: [fixation, test_stimulus],
    // The word list contains four stimuli, so that test_stimulus is actually a loop
    timeline_variables: StroopWordList,
    // The order of teh four stimuli is randomized
    randomize_order: true,
    // The number of times the four stimuli are preseneted is looped over
    // This loop will always complete at least once.
    // This is why there is an if/then check below in case the number of practice repeats is set to 0
    loop_function: function(data){
        // is the stopping condition number of trials or time
        if ( Stroop_parameters.AllowedTime < 0 ) {
          if (TestLoopCount < parseInt(Stroop_parameters.ColorTestRepeats)){
              TestLoopCount += 1
              StopFlag = true;
          } else {
              StopFlag = false;
          } 
        } else if ( time_left > 0 ) { StopFlag = true }
        else { StopFlag = false }
        return StopFlag
    }
}

var timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( Stroop_parameters.AllowedTime > 0 ) {
        timer_function(wait_time) }
    }
}

var timer_stop = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    if ( Stroop_parameters.AllowedTime > 0 ) {
      clearInterval(interval);
      document.querySelector('#clock').innerHTML = '00:00'
    }
  }
}

var CheckNumberRepeats = {
    type: jsPsychCallFunction,
    func: function(){
     console.log("The practice flag is set to (should be empty): "+RunPracticeFlag)
     RunPracticeFlag = Stroop_parameters.ColorPracticeRepeats > 0 
     console.log("The practice flag is set to (should have a value: "+RunPracticeFlag)
     return RunPracticeFlag
    }
}



var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: function() {return LabelNames.NoteInputBox},
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var trialData = jsPsych.data.get()//.filter({task:'Trial'})
    console.log(trialData)
    Results = StroopSimple_Scoring(trialData) 
    jsPsych.finishTrial(Results)
  },
}    

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ColorThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( Stroop_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ColorWelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}
var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( Stroop_parameters.ShowWelcome)
        { console.log(Stroop_parameters)
          return true }
        else { return false }
  }
}
// ======================================================================= 
// Add procedures to the timeline
// Split the instructions into General intro, practice instruct, Test Instructs
// This allows the user to skip the practice 

timeline.push(CalculateWaitTime) // works
timeline.push(CheckNumberRepeats) // works
timeline.push(enter_fullscreen)

timeline.push(if_Welcome)
timeline.push(instr_practice_procedure_loop_node);
timeline.push(practice_loop_node);


timeline.push(debrief);
timeline.push(instr_test_procedure_loop_node);

timeline.push(timer_start);
timeline.push(test_loop_node);
// If there is a timer, stop it
timeline.push(timer_stop);
timeline.push(Notes)
timeline.push(SendData)
timeline.push(if_ThankYou);


/*

// add instructions that the following trials are practice

timeline.push(practice_loop_node);  // works
  // provide feedback as to their performance


// Present test instructions
timeline.push(instr_test_procedure);
// run the test 
// If there is a timer, start it
timeline.push(timer_start);
timeline.push(test_loop_node);
// If there is a timer, stop it
timeline.push(timer_stop);
timeline.push(Notes)
timeline.push(SendData)
timeline.push(if_ThankYou);
*/