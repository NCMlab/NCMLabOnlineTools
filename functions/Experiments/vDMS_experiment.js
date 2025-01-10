
// Define Table size
// Need to add conditional style based on portrait or landscape orientation



// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
var count = 0;
var stair1
var stimList
var SetupTask = {
  type: jsPsychCallFunction,
  func: function() {  
    console.log(parameters)
    stair1 = new Stair(parameters.Parameters.StartValue,parameters.Parameters.MinValue, parameters.Parameters.MaxValue,parameters.Parameters.MaxReversals,parameters.Parameters.MaxTrials,parameters.Parameters.StepSize,parameters.Parameters.NUp,parameters.Parameters.NDown,parameters.Parameters.FastStart, parameters.Parameters.MaxTime);
    stimList = new AdaptiveStimulusList();
    // Keep track of how many trials have been presented.
    // After a certain count present a long duration ITI
  }
}

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
// Define all of the different the stimuli 

    var Stimulus = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function(){
        // console.log("Current: "+stair1.Current)
        // console.log("Last Stim: "+stimList.getLastStim())
        // console.log("Last Probe: "+stimList.getLastProbe())
        // if ( parameters.AdaptiveLoad == true )
        // {
          output = MakeAdaptiveStimulus(stair1.Current, stimList.getLastStim(), stimList.getLastProbe())
        //}
        // console.log(output)
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
      type:jsPsychHtmlButtonKeyboardResponseTouchscreen,
      stimulus: function() {
        return '<p style="color:'+ProbeColor+'; font-size:'+DMSFontSize+'px">'+stimList.CurrentProbe+'</p>'
      },
      choicesKeyboard: ['arrowleft','arrowright'],
      choices: ['y', 'n'],
      trial_duration: ProbeOnTime,
      on_finish: function(data){

        data.ProbeLetter = stimList.CurrentProbe
        // tag this trial
        data.trialType = "Probe"
        data.StimLetters = stimList.getCurrentStim()
        data.Load = data.StimLetters.length
        var correct = stimList.getCurrentCorrect() //jsPsych.timelineVariable("Correct", true)
        // is the participant response the first entry in the ResponseMapping array?
        // in the list of allowable key presses, what is the index of what was pressed?
        
        if ( data.type == 'button' )
        { var ResponseIndex = parameters.ResponseMappingButtons.indexOf(data.response) }
        else { var ResponseIndex = parameters.choicesKeyboard.indexOf(data.response) }
        
        if ( (ResponseIndex == 0 ) == correct) 
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
        return (! stair1.Finished)
     }
    };
   // =======================================================================    
   var Instructions_Procedure = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){return Instructions.Instructions[countInstr].page},
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
      if ( countInstr < Instructions.Instructions.length){
          return true} else { return false}
    }
  }
  

var if_Instructions = {
  timeline: [instr_procedure_loop_node],
  conditional_function: function() {
        if ( vDMS_parameters.ShowInstructions)
        { 
          return true }
        else { return false }
  }
}
// ======================================================================= 
// Add procedures to the timeline
timeline.push(enter_fullscreen)

timeline.push(Welcome)
timeline.push(SetupTask)
timeline.push(Instructions01)
timeline.push(init_camera)
//timeline.push(calibration_instructions)
//timeline.push(calibration)
  
timeline.push(WaitTime)
timeline.push(loop_node)
//timeline.push(debrief_block)
timeline.push(Notes)
timeline.push(SendData)
timeline.push(ThankYou)


