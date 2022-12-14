
// =======================================================================
// Define internal variables
var timeline = [];

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 

// Define the fixation cross
var fixation = {
  type: jspsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    stim = PutStimIntoTable(StroopWordPrompt, '<p class="Fixation">+</p>');
    return stim
  },
  choices: ResponseButtons,
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: StroopColorPrompt,
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  },
  data: {task: 'fixation'}
}

// Define the stimuli
  var Stimulus = {
    type: jspsychHtmlButtonResponseTouchscreen,
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
  type: jspsychHtmlButtonResponseTouchscreen,
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
  type: jspsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(4*WordPracticeRepeats)
        console.log(DataFromThisPracticeRun)
        var total_trials = DataFromThisPracticeRun.count();
        var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
        var accuracy = Math.round(NumberCorrect / total_trials * 100);
        return "<p>You responded correctly on <strong>"+accuracy+"%</strong> of the "+total_trials+" trials.</p> " +
        "<p>Press any key to continue the experiment. </p>";
      },
  choices: ['Next'], 
}

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
// Define any logic used in the experiment

// This a conditional block which checks to see if the performance during practice was good enough
// if performance on the practice is above 50% accurate then the test procedure is done.
// otherwise practice is done again
// If accuracy is below 50% then run what is in the  if_node timeline, else skip it
var if_node = {
  timeline: [instr_poor_performance, practice_procedure, debrief],
  conditional_function: function(){
    // check performance on the practice
        var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(4*WordPracticeRepeats)
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
var thank_you = {
    timeline: [Instructions],
    timeline_variables: WordThankYouText,
    randomize_order: false,
    repetitions: 1,
  }
// Define a practie procedure which provides feedback
  var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: WordInstrText,
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
      timeline: [Instructions],
      timeline_variables: WordThankYouText,
      randomize_order: false,
      repetitions: 1,
    }

  var practice_procedure = {
      timeline: [fixation, prac_stimulus, feedback],
      timeline_variables: StroopWordList,
      randomize_order: true,
      repetitions: WordPracticeRepeats,
    }
  // Define the test procedure which does NOT provide feedback
  var test_procedure = {
      timeline: [fixation, test_stimulus],
      timeline_variables: StroopWordList,
      randomize_order: true,
      repetitions: WordTestRepeats, 
  }
// ======================================================================= 
  // Add procedures to the timeline
  timeline.push(instr_procedure);
  // run the practice trials
  timeline.push(practice_procedure);
  // provide feedback as to their performance
  timeline.push(debrief);
  // decide if the person did well enough
  timeline.push(if_node);
  // decide if the person did well enough
  timeline.push(if_node);
  // Present test instructions
  timeline.push(instr_test_procedure);
  // run the test
  timeline.push(test_procedure);
  timeline.push(thank_you);