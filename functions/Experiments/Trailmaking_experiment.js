// NOTES:
// Something about the "trials" makes it so no additional trial can be displayed afterwards.
// The goal is to have trails be completed, then to show the trails along with the mouse capture overlay
// Then to perform analyses and measurements on the mouse data
//
var timeline = []
var encoder // needs to be global so sketchpad can use it

var count = 0

console.log('==============================')
console.log('CANVAS SIZE')
var CanvasHeight
var CanvasWidth
var PracticeCanvasHeight
var PracticeCanvasWidth
var WidthAdjustment = 0.76
var HeightAdjustment = 0.76

var WidthAdjustment = 0.9
var HeightAdjustment = 0.9

var FindCanvasSizeTest = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function() {
      sizes = FindCanvasSize(parameters.SuggestedWidth, parameters.SuggestedHeight, HeightAdjustment, WidthAdjustment) 
       CanvasWidth = sizes.CanvasWidth
       CanvasHeight = sizes.CanvasHeight
      console.log(CanvasWidth)
      console.log(CanvasHeight)
      console.log('==============================')
      console.log(Instructions)
  }
}

var FindCanvasSizePractice = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function() {
      sizes = FindCanvasSize(parameters.PracticeSuggestedWidth, parameters.PracticeSuggestedHeight, 0.95, 0.75) 
      const PracticeCanvasWidth = sizes.CanvasWidth
      const PracticeCanvasHeight = sizes.CanvasHeight
      console.log('==============================')
  }
}

var ShowPractice = false
var Circles

var CheckPracticeFlag = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    Circles = parameters.Circles
    if ( parameters.ShowPractice ) {
      ShowPractice = true
      console.log("Practice is turned on")
    }
  }
}

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: false
}
// =======================================================================
// Define all of the different the stimuli 
  var trial_Practice = {
      type: jsPsychSketchpadTrailMaking,   
      Circles: function(){return parameters.PracticeCircles}, 
      canvas_width: PracticeCanvasWidth,
      canvas_height: PracticeCanvasHeight,
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: false,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      change_circle_color_only_when_correct: parameters.change_circle_color_only_when_correct,
      prompt: parameters.InstructionsShownWithPractice,

      show_countdown_trial_duration: parameters.ShowTimer,
      extensions: [
        {type: jsPsychExtensionMouseTracking, params: {targets: ['#sketchpad-canvas'], events: ['mousemove','mousedown','mouseup']}}
      ],
      first_circle_label: function() {return Instructions.FirstCircleLabel},
      last_circle_label: function() {return Instructions.LastCircleLabel},
      finished_button_label: function() {return Instructions.FinishedLabel},
      countdown_timer_label: function() {return Instructions.TimeRemainingLabel},
    }
  
  var trials = {
      type: jsPsychSketchpadTrailMaking,   
      on_start: function(data){
        // The following line removes the header line from being displayed
        document.getElementById("header-btn-group").style = 'display:none'
      },
      Circles: function(){ 
        return parameters.Circles}, 
      canvas_width: function(){
        console.log("Canvas Width: "+CanvasWidth)
        return CanvasWidth
      },
      canvas_height: function(){
        console.log("Canvas Height: "+CanvasHeight)
        return CanvasHeight
      },
      GIFRecord: function() { return parameters.RecordGIF },
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: true,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      
      change_circle_color_only_when_correct: function() {return parameters.change_circle_color_only_when_correct},
      show_countdown_trial_duration: function() { return parameters.ShowTimer},
      trial_duration: function() { return parameters.Duration },
      first_circle_label: function() {return Instructions.FirstCircleLabel},
      last_circle_label: function() {return Instructions.LastCircleLabel},
      finished_button_label: function() {return Instructions.FinishedLabel},
      countdown_timer_label: function() {return Instructions.TimeRemainingLabel},
      /*extensions: [
        {type: jsPsychExtensionMouseTracking, params: {targets: ['#sketchpad-canvas'], events: ['mousemove','mousedown','mouseup']}}
      ],*/
      // on_finish: function() {
      //   // download the drawing as a file
      //   var imageData = jsPsych.data.get().last(1).values()[0].png;
      //   var a = document.createElement('a');
      //   a.href = imageData; //make the link of image
      //   a.download = "TrailsA.png";
      //   document.body.appendChild(a);
      //   a.click();
      //   document.body.removeChild(a);
      // }
      on_finish: function(data) {
        data.trial = 'Trail Making'
        data.CanvasHeight = CanvasHeight
        data.CanvasWidth = CanvasWidth
      }
    }


var Instruct = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.Instructions[count].page
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices:  function() {return [LabelNames.Next]}, 
}

var Instructions_loop_node = {
  timeline: [Instruct],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < Instructions.Instructions.length){
        
        return true;
      } else {
          return false;
      }
  }
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    data.shortTitle = parameters.shortTitle
    console.log(data)
    Results = TrailMaking_Scoring(data)
    jsPsych.finishTrial(Results)
    console.log(Results)
  }
}

var practicePrompt = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    return Instructions.PracticePrompt[0].page
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var taskPrompt = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return Instructions.RealTaskPrompt[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}


var if_Practice = {
  timeline: [practicePrompt, trial_Practice],
  conditional_function: function(){
    if ( parameters.ShowPractice )
      {return true}
    else {return false}
  }
}

var if_Instructions = {
  timeline: [Instructions_loop_node],
  conditional_function: function() {
        if ( parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}

// ======================================================================= 
// Add procedures to the timeline

timeline.push(FindCanvasSizeTest)
timeline.push(FindCanvasSizePractice)
timeline.push(CheckPracticeFlag)

timeline.push(if_GIFRecorder)
timeline.push(Welcome)
timeline.push(if_Instructions)


timeline.push(if_Practice)

//timeline.push(taskPrompt)
timeline.push(trials)
//timeline.push(trialREPLAY)

timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

