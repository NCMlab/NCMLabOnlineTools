// =======================================================================
// Define internal variables
var timeline = [];
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}

// =======================================================================

// =======================================================================
// Define all of the different the stimuli 

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
  //https://www.webnots.com/keyboard-shortcuts-for-asterisk-symbol/
    var Stimulus = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function()
      { // The stimulus is based on the conditions laid out in the ANT
        // variable read from the setup file.
        // Recall that the ANT variable is an array of objects. 
        // The object contains everything there is know about this trial.
        // Read how this trial will be made
        var centralArrow = jsPsych.timelineVariable("centralArrow", true)
        var flanker = jsPsych.timelineVariable("flanker", true)
        var position = jsPsych.timelineVariable("position", true)
        
        // make the stimulus for this trial
        var stim = flanker + centralArrow + flanker
        //<p class="ANTArrowSize">'+stim+'</p>'
        stim = ANT_PutStimIntoTable('<p class="ANTArrowSize">'+stim+'</p>', position)
        return stim
      },
      choices: KeyboardChoices,
      on_finish: function(data, correct){
        // find the correct response for this trial
        var correct = jsPsych.timelineVariable("correct", true)
        console.log(correct)
        // in the list of allowable key presses, what is the index of what was pressed?
        var ResponseIndex = TouchscreenChoices.indexOf(data.response)
        console.log(ResponseIndex)
        console.log(ResponseMapping[ResponseIndex])
        
        if (ResponseMapping[ResponseIndex] == correct) 
          {data.correct = 1}
          else {data.correct = 0}
        /* If the ESCAPE key is pressed the current timeline is ended and the thank you screen is shown */
        if (data.key_press == 27) {jsPsych.end();}
          // What data to write to the output data file
          data.flankerType = jsPsych.timelineVariable("flankerType", true);
          data.cuePos = jsPsych.timelineVariable("cuePos", true);
          data.cueType = jsPsych.timelineVariable("cueType", true);
          data.trialType = 'trial';
      },

    } 

    var fixation = {
      // Each trial also has its own specific cue which occurs BEFORE the stimulus presentation
      // The cue itself is actually made in the setup file and not here. This could be changed if desired
      type: jsPsychHtmlButtonResponseTouchscreen,
      choices: KeyboardChoices,
      stimulus: function()
      {
        var position = jsPsych.timelineVariable("cuePos", true)
        return ANT_PutFixIntoTable(position)
      },
      trial_duration: FixationDuration,      
    } 

  var feedback = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function(){
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
      if (last_trial_correct) {
        var stim = '<p style="font-size:'+FeedbackFontSize+'";>Correct</p>';
      } else {
        var stim = '<p style="font-size:'+FeedbackFontSize+'";>Incorrect</p>';
      }
      return ANT_PutStimIntoTable(stim, 'center')
    },
    choices: KeyboardChoices,
    post_trial_gap: 0,
    trial_duration: FeedbackLength,
  }    

    /* define debrief */
    var debrief_block = {
      type: 'jsPsychHtmlKeyboardResponse',
        stimulus: function() {

        var trials = jsPsych.data.get().filter({trialType: 'trial'});
        var correct_trials = trials.filter({correct: true});
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return `<p>You responded correctly on ${accuracy}% of the trials.</p>
          <p>Your average response time was ${rt}ms.</p>
          <p>Press any key to complete the experiment. Thank you!</p>`;

      }
    };
// =======================================================================    
// Define procedures using the stimuli    
   /* Create the initial welcome and instructions for practice.
   This uses the built in instructions module. Make sure it gets imported above */ 


    var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: InstructionText,
      randomize_order: false,
      repetitions: 1,
    }
    var practice_procedure = {
      timeline: [fixation, Stimulus, feedback],
      timeline_variables: ANT,
      randomize_order: true,
      repetitions: 1, 
    }

    var test_procedure = {
      timeline: [fixation, Stimulus],
      timeline_variables: ANT,
      randomize_order: true,
      repetitions: 2, 
    }

// ======================================================================= 
// Add procedures to the timeline
    timeline.push(instr_procedure);
    timeline.push(test_procedure)
    timeline.push(debrief_block);

  