
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
      console.log("The wiat time is set to: "+wait_time)
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
    stim = PutStimIntoTable(Instructions.StroopColorWordPrompt, '<p class="Fixation">+</p>');
    return stim
  },
  choices: function() {return Instructions.ResponseButtons},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: function() {return Instructions.StroopColorWordPrompt},
  trial_duration: function() {
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
        //var Stim = jsPsych.timelineVariable('Word')
        var Stim = '<p class="stimulus" style="color:rgb'+jsPsych.timelineVariable('Color')+'; font-size:'+StimulusFontSize+'">' +jsPsych.timelineVariable('Word')+'</p>'
        Stim = PutStimIntoTable(Instructions.StroopColorWordPrompt, Stim) 
        return Stim
      },
    choices: function() {return Instructions.ResponseButtons}, 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: function() {return Instructions.StroopColorPrompt},
    on_finish: function(data){
      data.word = jsPsych.timelineVariable('Word'), 
      data.color = jsPsych.timelineVariable('Color'), 
      data.congruency = jsPsych.timelineVariable('Congruency'),
      data.button = jsPsych.timelineVariable('button'),
      // check to see if teh response is correct 
      data.correct = data.response == data.button;
      },
  };

// Define the feedback
var feedback = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function(){
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    if (last_trial_correct) {
      var stim = '<p style="font-size:'+FeedbackFontSize+'";>Correct</p>';
    } else {
      var stim = '<p style="font-size:'+FeedbackFontSize+'";>Incorrect</p>';
    }
    return PutStimIntoTable(Instructions.StroopColorWordPrompt, stim)
  },
  choices:  function() {return Instructions.ResponseButtons},
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt:  function() {return Instructions.StroopColorWordPrompt},
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
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(parseInt(ColorWordTestQuestionTypes)*parseInt(Stroop_parameters.ColorWordPracticeRepeats))
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
// =======================================================================
// This is used for labelling trials in the output data
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
// =======================================================================

// Define instructions

// General instructions
var Instructions_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.ColorWordInstrText[countInstr].page},
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
    if ( countInstr < Instructions.ColorWordInstrText.length){
        return true} else { return false}
  }
}
// Practice instructions
var InstructionsPractice_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.ColorWordPracticeText[countInstrPractice].page},
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
    if ( countInstrPractice < Instructions.ColorWordPracticeText.length){
        return true} else { return false}
  }
}
// test instructions
var InstructionsTest_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.ColorWordTestInstrText[countInstrTest].page},
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
    if ( countInstrTest < Instructions.ColorWordTestInstrText.length){
        return true} else { return false}
  }
}

// =======================================================================
// Define the practice procedure which DOES provide feedback
var PracticeLoopCount = 1
var practice_loop_node = {
  timeline: [fixation, prac_stimulus, feedback],
  timeline_variables: StroopColorWordList,
  randomize_order: true,
  loop_function: function(data){
      console.log('Working on loop: '+PracticeLoopCount+" of "+parseInt(Stroop_parameters.ColorWordPracticeRepeats))
      if (PracticeLoopCount < parseInt(Stroop_parameters.ColorWordPracticeRepeats)){
          PracticeLoopCount += 1
          return true;
      } else {
          return false;
      }
  }
}
var TestLoopCount = 1
var test_loop_node = {
    timeline: [fixation, test_stimulus],
    // The word list contains four stimuli, so that test_stimulus is actually a loop
    timeline_variables: StroopColorWordList,
    // The order of teh four stimuli is randomized
    randomize_order: true,
    // The number of times the four stimuli are preseneted is looped over
    // This loop will always complete at least once.
    // This is why there is an if/then check below in case the number of practice repeats is set to 0
    loop_function: function(data){
        // is the stopping condition number of trials or time
        if ( Stroop_parameters.AllowedTime < 0 ) {
          if (TestLoopCount < parseInt(Stroop_parameters.ColorWordTestRepeats)){
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
     RunPracticeFlag = Stroop_parameters.ColorWordPracticeRepeats > 0 
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
// =======================================================================
// Add scoring procedures to the Thank you screen
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var trialData = jsPsych.data.get()//.filter({task:'Trial'})
    console.log(trialData)
    Results = StroopColorWord_Scoring(trialData) 
    jsPsych.finishTrial(Results)
  },
}    


var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ColorWordThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ColorWordWelcomeText[0].page},
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

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( Stroop_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}
// ======================================================================= 
  // Add procedures to the timeline
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
timeline.push(SendData)
timeline.push(if_ThankYou);