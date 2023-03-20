// =======================================================================
// Define internal variables
var timeline = [];
console.log('==============================')
console.log('CANVAS SIZE FOR B')
sizes = FindCanvasSize(SuggestedWidthB, SuggestedHeightB, 0.7, 0.75) 
CanvasWidthB = sizes.CanvasWidth
CanvasHeightB = sizes.CanvasHeight
console.log('==============================')


sizes = FindCanvasSize(SuggestedWidthSampleB, SuggestedHeightSampleB, 0.95,0.75) 
CanvasWidthSampleB = sizes.CanvasWidth
console.log(CanvasWidthSampleB)
CanvasHeightSampleB = sizes.CanvasHeight
var ShowPractice = false
var Circles

var CheckPracticeFlag = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    console.log(TrailMaking_parameters)
    Circles = TrailMaking_parameters.Circles
    console.log(Circles)
    if ( TrailMaking_parameters.ShowPractice ) {
      ShowPractice = true
      console.log("Practice is turned on")
    }
  }
}


// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 

  var trial_SampleB = {
      type: jsPsychSketchpad,   
      Circles: SampleCirclesB, 
      canvas_width: CanvasWidthSampleB,
      canvas_height: CanvasHeightSampleB,
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: false,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: ShowTimerSampleB
    }

  var trialB = {
      type: jsPsychSketchpad,   
      Circles: function(){ return TrailMaking_parameters.Circles}, 
      canvas_width: CanvasWidthB,
      canvas_height: CanvasHeightB,
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: true,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: ShowTimerB,
      trial_duration: DurationB,
      // on_finish: function() {
      //   // download the drawing as a file
      //   var imageData = jsPsych.data.get().last(1).values()[0].png;
      //   var a = document.createElement('a');
      //   a.href = imageData; //make the link of image
      //   a.download = "TrailsB.png";
      //   document.body.appendChild(a);
      //   a.click();
      //   document.body.removeChild(a);
      // }
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
// Define procedures using the stimuli

  var instrSampleB_procedure = {
      timeline: [Instructions],
      timeline_variables: InstructionsSampleB,
      randomize_order: false,
      repetitions: 1,
    }

  var instrB_procedure = {
      timeline: [Instructions],
      timeline_variables: InstructionsB,
      randomize_order: false,
      repetitions: 1,
    }  

  var instrB_practice_rocedure = {
      timeline: [Instructions],
      timeline_variables: InstructionsSampleBPractice,
      randomize_order: false,
      repetitions: 1,
    }

  var thank_you = {
      timeline: [Instructions],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
    }
  
  var if_node = {
    timeline: [instrB_practice_rocedure, trial_SampleB],
    conditional_function: function(){
      if ( ShowPractice )
        {return true}
      else {return false}
    }
  }    
// =======================================================================    
  //timeline.push(InstructionsSampleA)
  timeline.push(CheckPracticeFlag)
  timeline.push(enter_fullscreen)
  timeline.push(instrSampleB_procedure)
  timeline.push(if_node)
  timeline.push(instrB_procedure)
  timeline.push(trialB)
  timeline.push(thank_you)
  