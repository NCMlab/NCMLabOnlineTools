
// Define Table size
// Need to add conditional style based on portrait or landscape orientation
console.log(parameters)


// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
var count = 0;
var FeedbackFlag = false
var FeedbackText

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
var setupPractice = {
  type: jsPsychCallFunction,
  func: function() {
    stair1 = new Stair(parameters.StartValue, parameters.MinValue, 
        parameters.MaxValue, parameters.MaxReversals, parameters.NPracticeTrials,
        parameters.StepSize, parameters.NUp, parameters.NDown, 
        parameters.FastStart);
    stimList = new AdaptiveStimulusList();    
    console.log(parameters)
    console.log(stair1)
      document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
      document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
      jsPsych.setProgressBar(0)
    FeedbackFlag = true
    }
  }

var setupTest = {
  type: jsPsychCallFunction,
  func: function() {
    stair1 = new Stair(parameters.StartValue, parameters.MinValue, 
        parameters.MaxValue, parameters.MaxReversals, parameters.MaxTrials,
        parameters.StepSize, parameters.NUp, parameters.NDown, 
        parameters.FastStart);
    stimList = new AdaptiveStimulusList();    
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
        jsPsych.setProgressBar(0)
    FeedbackFlag = false
    }
  }

// =======================================================================
// Define all of the different the stimuli 

    var Stimulus = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function(){
        console.log("Current: "+stair1.Current)
        console.log("Last Stim: "+stimList.getLastStim())
        console.log("Last Probe: "+stimList.getLastProbe())
        output = MakeAdaptiveStimulus(stair1.Current, stimList.getLastStim(), stimList.getLastProbe())
        console.log(output)
        return PutLettersInGridV2(output[0],3,3,700,20,60)
        //return StimulusLetters
      },
      trial_duration: function() { return parameters.StimOnTime },
      choices: [],
      valid_choices: [],
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
      valid_choices: [],
      trial_duration: function() { return parameters.RetOnTime},
      //on_finish: function(data){
              // data.trialType = "Retention"
      //},
    } 

    var Probe = {
      type:jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
        return '<p style="color:'+ProbeColor+'; font-size:'+DMSFontSize+'px">'+stimList.CurrentProbe+'</p>'
      },
      choices: function() { return parameters.ButtonLabels},
      valid_choices: function() { return parameters.KeyboardValues },
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
        // in the list of allowable key presses, what is the index of wehat was pressed?
        var ResponseMapping = parameters.KeyboardValues
        var KeyboardMappings = parameters.KeyboardMappings

        var ResponseIndex = ResponseMapping.indexOf(data.response)

        if ( KeyboardMappings[ResponseIndex] == correct) 
          {
            data.correct = 1,
            stair1.Decide(true)
            FeedbackText = LabelNames.Correct
          }
        else {
          data.correct = 0
          stair1.Decide(false)
          FeedbackText = LabelNames.Incorrect
        }
        /* If the ESCAPE key is pressed the current timeline is ended and the thank you screen is shown */
        if (data.response == 27) {jsPsych.end();}

      }
    }

    var Fix = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function(data) {
        console.log(FeedbackFlag)
        console.log(data)
        if ( FeedbackFlag )
        {return '<p style="font-size:'+DMSFontSize+'px; color:'+ProbeColor+'">'+FeedbackText+'</p>'}
        else 
          {return '<p style="font-size:'+DMSFontSize+'px; color:'+ProbeColor+'">+</p>'}
      },
      choices: [],
      trial_duration: function() { return parameters.ITITime},
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
      trial_duration: function() { return parameters.WaitOnTime},
    } 



    var debrief_block = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      choices: [],
      stimulus: function() {
        return "The Reversals are: "+stair1.ReversalList+"The mean Reversal is : "+stair1.CalculateAverage()
      }
    }

// =======================================================================
// Add scoring procedures to the Thank you screen
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = DMS_Scoring(stair1, data)    
    jsPsych.finishTrial(Results)
  }
}
// =========================================
// Define any logic used 
    var loop_node = {
      timeline: [Stimulus, Retention, Probe, Fix],
      loop_function: function(data){
        console.log((stair1.TrialCount)/(stair1.MaxTrials))
        jsPsych.setProgressBar((stair1.TrialCount)/(stair1.MaxTrials))
        return (! stair1.Finished)
     }
    };
 
// ======================================================================= 
// Add procedures to the timeline
timeline.push(enter_fullscreen)
timeline.push(Welcome)
timeline.push(Instructions01)
timeline.push(setupPractice)
//timeline.push(WaitTime)
timeline.push(loop_node)

timeline.push(Instructions03)
timeline.push(setupTest)
timeline.push(loop_node)

timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

