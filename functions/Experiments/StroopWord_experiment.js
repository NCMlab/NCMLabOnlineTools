
// =======================================================================
// Define internal variables
var timeline = [];
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
    stim = PutStimIntoTable(StroopWordPrompt, '<p class="Fixation">+</p>');
    return stim
  },
  choices: ResponseButtons,
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: StroopColorPrompt,
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
        //var Stim = jsPsych.timelineVariable('Word')
        var Stim = '<p  class="Fixation">' +jsPsych.timelineVariable('Word')+'</p>'
        Stim = PutStimIntoTable(StroopWordPrompt, Stim) 
        return Stim
      },
    choices: ResponseButtons, 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopWordPrompt, //Add this to config file
    on_finish: function(data){
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
    console.log(last_trial_correct)
    if (last_trial_correct) {
      var stim = '<p style="font-size:'+FeedbackFontSize+'";>Correct</p>';
    } else {
      var stim = '<p style="font-size:'+FeedbackFontSize+'";>Incorrect</p>';
    }
    return PutStimIntoTable(StroopWordPrompt, stim)
  },
  choices: ResponseButtons,
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt: StroopWordPrompt,
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
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(parseInt(WordTestQuestionTypes)*parseInt(Stroop_parameters.WordPracticeRepeats))
        console.log(DataFromThisPracticeRun)
        var total_trials = DataFromThisPracticeRun.count();
        var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
        var accuracy = Math.round(NumberCorrect / total_trials * 100);
        return "<p>You responded correctly on <strong>"+accuracy+"%</strong> of the "+total_trials+" trials.</p> " +
        "<p>Press any key to continue the experiment. </p>";
      },
  choices: ['Next'], 
  on_finish: function() {
    // reset the counter for the if loop
    PracticeLoopCount = 1
  }
}

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
        data = StroopWord_Scoring(data)
        data.task = 'Sending Data'
      }
    }

// =======================================================================
// Define any logic used in the experiment


// =======================================================================    
  // Define procedures using the stimuli

  // Define a practie procedure which provides feedback
  var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: WordInstrText,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_practice_procedure = {
    timeline: [Instructions],
    timeline_variables: WordPracticeText,
    randomize_order: false,
    repetitions: 1,
  }

  var instr_test_procedure = {
      timeline: [Instructions],
      timeline_variables: WordTestInstrText,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_poor_performance = {
      timeline: [Instructions],
      timeline_variables: WordInstrPoorPerformanceText,
      randomize_order: false,
      repetitions: 1,
    }
  
  var thank_you = {
      timeline: [SendData],
      timeline_variables: WordThankYouText,
      randomize_order: false,
      repetitions: 1,
    }

 // Define the practice procedure which DOES provide feedback
  var PracticeLoopCount = 1
  var practice_loop_node = {
      timeline: [fixation, prac_stimulus, feedback],
      timeline_variables: StroopWordList,
      randomize_order: true,
      loop_function: function(data){
          console.log('Working on loop: '+PracticeLoopCount+" of "+parseInt(Stroop_parameters.WordPracticeRepeats))
          if (PracticeLoopCount < parseInt(Stroop_parameters.WordPracticeRepeats)){
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
     RunPracticeFlag = Stroop_parameters.WordPracticeRepeats > 0 
     console.log("The practice flag is set to (should have a value: "+RunPracticeFlag)
     return RunPracticeFlag
    }
}

// ======================================================================= 
  // Add procedures to the timeline
timeline.push(CalculateWaitTime) // works
timeline.push(CheckNumberRepeats) // works
timeline.push(enter_fullscreen)
timeline.push(instr_procedure);
// add instructions that the following trials are practice
 timeline.push(instr_practice_procedure); 
timeline.push(practice_loop_node);  // works
  // provide feedback as to their performance
timeline.push(debrief);

// Present test instructions
timeline.push(instr_test_procedure);
// run the test 
// If there is a timer, start it
timeline.push(timer_start);
timeline.push(test_loop_node);
// If there is a timer, stop it
timeline.push(timer_stop);
timeline.push(thank_you);