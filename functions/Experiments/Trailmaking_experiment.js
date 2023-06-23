
var timeline = []
var count = 0

console.log('==============================')
console.log('CANVAS SIZE')
var CanvasHeight
var CanvasWidth
var PracticeCanvasHeight
var PracticeCanvasWidth

var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var FindCanvasSizeTest = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function() {
      sizes = FindCanvasSize(TrailMaking_parameters.SuggestedWidth, TrailMaking_parameters.SuggestedHeight, 0.7, 0.75) 
       CanvasWidth = sizes.CanvasWidth
       CanvasHeight = sizes.CanvasHeight
      console.log(CanvasWidth)
      console.log(CanvasHeight)
      console.log('==============================')
      console.log(TrailMaking_Instructions)
  }
}

var FindCanvasSizePractice = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function() {
      sizes = FindCanvasSize(TrailMaking_parameters.PracticeSuggestedWidth, TrailMaking_parameters.PracticeSuggestedHeight, 0.95, 0.75) 
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
    Circles = TrailMaking_parameters.Circles
    if ( TrailMaking_parameters.ShowPractice ) {
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
      Circles: function(){return TrailMaking_parameters.PracticeCircles}, 
      canvas_width: PracticeCanvasWidth,
      canvas_height: PracticeCanvasHeight,
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: false,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      prompt: TrailMaking_parameters.InstructionsShownWithPractice,
      show_countdown_trial_duration: TrailMaking_parameters.ShowTimer,
      finished_button_label: function() {return LabelNames.Finished},
    }
  
  var trials = {
      type: jsPsychSketchpadTrailMaking,   
      Circles: function(){ 
        return TrailMaking_parameters.Circles}, 
      canvas_width: function(){return CanvasWidth},
      canvas_height: function(){return CanvasHeight},
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: true,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: TrailMaking_parameters.ShowTimer,
      trial_duration: TrailMaking_parameters.Duration,
      finished_button_label: function() {return LabelNames.Finished},
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
        console.log(jsPsych.data.get().last(1))
      }
    }

var Instruct = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return TrailMaking_parameters.InstructionText[count].page},
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
    if ( count < TrailMaking_parameters.InstructionText.length){
        
        return true;
      } else {
          return false;
      }
  }
}

var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    console.log(data)
    Results = TrailMaking_Scoring(data)
    jsPsych.finishTrial(Results)
    console.log(Results)
  }
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return TrailMaking_Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var thankyou = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return TrailMaking_Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var practicePrompt = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return TrailMaking_Instructions.PracticePrompt[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var taskPrompt = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return TrailMaking_Instructions.RealTaskPrompt[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    console.log(TrailMaking_Instructions)
    if ( TrailMaking_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [thankyou],
  conditional_function: function() {
    console.log(TrailMaking_Instructions)
    if ( TrailMaking_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}

var if_Practice = {
  timeline: [practicePrompt, trial_Practice],
  conditional_function: function(){
    if ( TrailMaking_parameters.ShowPractice )
      {return true}
    else {return false}
  }
}

var if_Instructions = {
  timeline: [Instructions_loop_node],
  conditional_function: function() {
        if ( TrailMaking_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}

var if_Notes = {
  timeline: [Notes],
  conditional_function: function() {
    if ( TrailMaking_parameters.AskForNotes)
    { return true }
    else { return false }
  }
}
// ======================================================================= 
// Add procedures to the timeline

timeline.push(FindCanvasSizeTest)
timeline.push(FindCanvasSizePractice)
timeline.push(CheckPracticeFlag)


timeline.push(if_Welcome)

timeline.push(if_Instructions)
timeline.push(if_Practice)
timeline.push(taskPrompt)
timeline.push(trials)

timeline.push(if_ThankYou)
timeline.push(if_Notes)
timeline.push(SendData)
