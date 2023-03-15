// =======================================================================
// Use the correct parameter set



var timer_start = {
  type: jsPsychCallFunction,
  func: function(){
    var start_time = performance.now();
    interval = setInterval(function(){
        time_left = wait_time - (performance.now() - start_time);
        var minutes = Math.floor(time_left / 1000 / 60);
        var seconds = Math.floor((time_left - minutes*1000*60)/1000);
        var seconds_str = seconds.toString().padStart(2,'0');
        document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      }, 250
    )
  }
}

var timer_stop = {
  type: jsPsychCallFunction,
  func: function(){
    clearInterval(interval);
    document.querySelector('#clock').innerHTML = '00:00'
  }
}

// =======================================================================
// Define internal variables
var timeline = [];
var PracticeLoopCount = 1
var RepeatPractice = 1
var MaxRepeatPractice = 2
var RecallDuration = 120
var testFlag = false

var wait_time = RecallDuration * 1000; // in milliseconds

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 

// Define the fixation cross
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    stim = PutStimIntoTable(StroopColorPrompt, '<p class="Fixation">+</p>');
    return stim
  },
  choices: ResponseButtons,
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: StroopColorPrompt,
  trial_duration: Stroop_parameters.ITI_Design,
  //function(){
  //  return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  //},
  data: {task: 'fixation'}
}


// Define the stimuli
var Stimulus = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    var color = jsPsych.timelineVariable('Color')
    var stim = '<svg width="200" height="100"><rect width="200" height="100" style="fill:rgb'+color+'; stroke-width:3;stroke:rgb(0,0,0)" /></svg>'
    stim = PutStimIntoTable(StroopColorPrompt, stim) 
    return stim
  },
  choices: ResponseButtons, 
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt: StroopColorPrompt, //Add this to config file
  on_finish: function(data){
    data.button = jsPsych.timelineVariable('button'),
    // check to see if the response is correct 
    data.correct = data.response == data.button;
    // Update the timer if this is a test trial
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
    return PutStimIntoTable(StroopColorPrompt, stim)
  },
  choices: ResponseButtons,
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt: StroopColorPrompt,
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
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(parseInt(Stroop_parameters.ColorTestQuestionTypes)*parseInt(Stroop_parameters.ColorPracticeRepeats))
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
        //data = StroopColor_Scoring(data)
        data.task = 'Sending Data'
        
      }
    }

// =======================================================================
// Define any logic used in the experiment

// This a conditional block which checks to see if the performance during practice was good enough
// if performance on the practice is above 50% accurate then the test procedure is done.
// otherwise practice is done again
// If accuracy is below 50% then run what is in the  if_node timeline, else skip it
var if_node = {
  timeline: [instr_poor_performance, practice_loop_node, debrief],
  conditional_function: function(){
    // check performance on the practice
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(parseInt(Stroop_parameters.ColorTestQuestionTypes)*parseInt(Stroop_parameters.ColorPracticeRepeats))
          var total_trials = DataFromThisPracticeRun.count();
          var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
          var accuracy = Math.round(NumberCorrect / total_trials * 100);
      if (accuracy < 50) {
        return true;
      } else {
        return false;
      }
  }
}


  
// =======================================================================    
// Define procedures using the stimuli

var instr_procedure = {
    timeline: [Instructions],
    timeline_variables: ColorInstrText,
    randomize_order: false,
    repetitions: 1,
  }

var instr_test_procedure = {
    timeline: [Instructions],
    timeline_variables: ColorTestInstrText,
    randomize_order: false,
    repetitions: 1,
  }

var instr_poor_performance = {
    timeline: [Instructions],
    timeline_variables: ColorInstrPoorPerformanceText,
    randomize_order: false,
    repetitions: 1,
  }

var thank_you = {
    timeline: [SendData],
    timeline_variables: ColorThankYouText,
    randomize_order: false,
    repetitions: 1,
  }

// Define the practice procedure which DOES provide feedback
var repeat_practice_as_needed = {
  timeline: [practice_loop_node],
  loop_function: function(){
    var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(parseInt(Stroop_parameters.ColorTestQuestionTypes)*parseInt(Stroop_parameters.ColorPracticeRepeats))
    var total_trials = DataFromThisPracticeRun.count();
    var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
    var accuracy = Math.round(NumberCorrect / total_trials * 100);
    if (RepeatPractice)
  },
}

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
    timeline_variables: StroopWordList,
    randomize_order: true,
    loop_function: function(data){
        console.log('Working on loop: '+TestLoopCount+" of "+parseInt(Stroop_parameters.ColorTestRepeats))
        if (TestLoopCount < parseInt(Stroop_parameters.ColorTestRepeats)){
            TestLoopCount += 1
            return true;
        } else {
            return false;
        }
    }
}

// ======================================================================= 
// Add procedures to the timeline
timeline.push(instr_procedure);
// run the practice trials
timeline.push(timer_start)
timeline.push(practice_loop_node)
timeline.push(timer_stop)
// provide feedback as to their performance
timeline.push(debrief);
// decide if the person did well enough
timeline.push(if_node);
// decide if the person did well enough
timeline.push(if_node);
// Present test instructions
timeline.push(instr_test_procedure);
// run the test 
timeline.push(timer_start)
timeline.push(test_loop_node);
timeline.push(timer_stop)
timeline.push(thank_you);