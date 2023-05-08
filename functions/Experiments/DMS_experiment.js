
// Define Table size
// Need to add conditional style based on portrait or landscape orientation
console.log(screen.orientation)


// =======================================================================
// Define internal variables
var timeline = [];
let stair1 = new Stair(StartValue,MinValue,MaxValue,MaxReversals,MaxTrials,StepSize,NUp,NDown,FastStart);
let stimList = new AdaptiveStimulusList();
    // Keep track of how many trials have been presented.
    // After a certain count present a long duration ITI
var count = 0;
console.log(stair1)
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
// Define all of the different the stimuli 

    var instr = {
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

    var Stimulus = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function(){
        console.log("Current: "+stair1.Current)
        console.log("Last Stim: "+stimList.getLastStim())
        console.log("Last Probe: "+stimList.getLastProbe())
        output = MakeAdaptiveStimulus(stair1.Current, stimList.getLastStim(), stimList.getLastProbe())
        console.log(output)
        return PutLettersInGrid(output[0],3,3,700,20,60)
        //return StimulusLetters
      },
      trial_duration: StimOnTime,
      choices: [],
      prompt: '',
      on_finish: function(data){
        stimList.addStim(output[2])
        stimList.addProbe(output[1][0])
        stimList.addCorrect(output[1][1])
        //data.trialType = "Stimulus",
        count += 1
        },
    }

     var Retention = {
      // Each trial also has its own specific cue which occurs BEFORE the stimulus presentation
      // The cue itself is actually made in the setup file and not here. This could be changed if desired
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: '<p style="font-size:'+DMSFontSize+'px; color:black">+</p>',
      choices: [],
      trial_duration: RetOnTime,
      //on_finish: function(data){
              // data.trialType = "Retention"
      //},
    } 

    var Probe = {
      type:jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
        return '<p style="color:'+ProbeColor+'; font-size:'+DMSFontSize+'px">'+stimList.CurrentProbe+'</p>'
      },
      choices: KeyboardChoices,
      trial_duration: ProbeOnTime,
      on_finish: function(data){
        // NEED TO UPDATE THIS BASED ON TEH ADAPTIVE NATURE OF THE TRIALS
        // This puts the stimulus letters on the same line as the trial response
        data.ProbeLetter = stimList.CurrentProbe
        // tag this trial
        data.trialType = "Probe"
        data.StimLetters = stimList.getCurrentStim()
        data.Load = data.StimLetters.length
        var correct = stimList.getCurrentCorrect() //jsPsych.timelineVariable("Correct", true)
        console.log("Correct Answer is:")
        console.log(correct)
        console.log("Participant Response is:")
        console.log(data.response)
        // in the list of allowable key presses, what is the index of wehat was pressed?
        var ResponseIndex = ResponseMapping.indexOf(data.response)
        console.log(ResponseMapping)
        console.log(ResponseIndex)
        console.log("Program thinks this answer is:")
        console.log(ResponseMapping[ResponseIndex])
        console.log(data)
        if (ResponseMapping[ResponseIndex] == correct) 
          {
            data.correct = 1,
            stair1.Decide(true)
          }
        else {
          data.correct = 0
          stair1.Decide(false)
        }
        /* If the ESCAPE key is pressed the current timeline is ended and the thank you screen is shown */
        if (data.response == 27) {jsPsych.end();}

      }
    }

    var Fix = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: '<p style="font-size:'+DMSFontSize+'px; color:'+ProbeColor+'">+</p>',
      choices: [],
      trial_duration: ITITime,
     // on_finish: function(data){
     //   data.trialType = "fixation"
     // }
    } 

    var WaitTime = {
      // Each trial also has its own specific cue which occurs BEFORE the stimulus presentation
      // The cue itself is actually made in the setup file and not here. This could be changed if desired
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: '<p style="font-size:'+DMSFontSize+'px; color:black">+</p>',
      choices: [],
      trial_duration: WaitOnTime,
    } 



    var debrief_block = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      choices: [],
      stimulus: function() {
        return "The Reversals are: "+stair1.ReversalList+"The mean Reversal is : "+stair1.CalculateAverage()
      }
    }
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
// Add scoring procedures to the Thank you screen
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = DMS_Scoring(data)    
    jsPsych.finishTrial(Results)
  }
}
// =========================================
// Define any logic used 
    var loop_node = {
      timeline: [Stimulus, Retention, Probe, Fix],
      loop_function: function(data){
        return (! stair1.Finished)
     }
    };
   // =======================================================================    
// Define procedures using the stimuli
var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    if ( vDMS_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    if ( vDMS_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}
var welcome = {
  timeline: [Instructions],
  timeline_variables: WelcomeText,
  randomize_order: false,
  repetitions: 1,
}
        
var instr_procedure = {
  timeline: [instr],
  timeline_variables: instructions,
  randomize_order: false,
  repetitions: 1,
}
  
var thank_you = {
  timeline: [Instructions],
  timeline_variables: ThankYouText,
  randomize_order: false,
  repetitions: 1,
}    
// ======================================================================= 
// Add procedures to the timeline
timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(instr_procedure)
timeline.push(WaitTime)
timeline.push(loop_node)
timeline.push(debrief_block)
timeline.push(SendData)
timeline.push(if_ThankYou)
