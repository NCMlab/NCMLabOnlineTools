
// =======================================================================
// Define internal variables
var timeline = [];
console.log('==============================')
console.log('CANVAS SIZE')
var CanvasHeight
var CanvasWidth
var PracticeCanvasHeight
var PracticeCanvasWidth
var InstructionText

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

var GetInstructionValuesFromInputParameters = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    const InstructionText = TrailMaking_parameters.Instructions
    console.log(InstructionText)
    console.log(InstructionsA)
    console.log(WelcomeText)
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
      show_countdown_trial_duration: TrailMaking_parameters.ShowTimer
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
  var TestInstructionsPage01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
     stimulus: function()
    {
      var stim = TrailMaking_parameters.Instructions
      var output = stim[0]
      return output.page
    },
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: '',
    choices: ['Next'], 
}
var TestInstructionsPage02 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
   stimulus: function()
  {
    var stim = TrailMaking_parameters.Instructions
    var output = stim[1]
    return output.page
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: ['Next'], 
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = TrailMaking_Scoring(data)
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}

var thank_you = {
  timeline: [Instructions],
  timeline_variables: ThankYouText,
  randomize_order: false,
  repetitions: 1,
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    if ( TrailMaking_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    if ( TrailMaking_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}
// =======================================================================    
// Define procedures using the stimuli

var welcome = {
  timeline: [Instructions],
  timeline_variables: WelcomeText,
  randomize_order: false,
  repetitions: 1,
}



var StartPracticePrompt = {
  timeline: [Instructions],
  timeline_variables: PracticePrompt,
  randomize_order: false,
  repetitions: 1,
}
  
var StartTaskPrompt = {
  timeline: [Instructions],
  timeline_variables: RealTaskPrompt,
  randomize_order: false,
  repetitions: 1,
}



var if_node = {
  timeline: [StartPracticePrompt, trial_Practice],
  conditional_function: function(){
    if ( TrailMaking_parameters.ShowPractice )
      {return true}
    else {return false}
  }
}
// =======================================================================    
  //timeline.push(InstructionsSampleA)
  timeline.push(FindCanvasSizeTest)
  timeline.push(FindCanvasSizePractice)
  timeline.push(CheckPracticeFlag)
  timeline.push(GetInstructionValuesFromInputParameters)
  timeline.push(enter_fullscreen)
  timeline.push(if_Welcome)
  timeline.push(TestInstructionsPage01)
  timeline.push(TestInstructionsPage02)
  timeline.push(if_node)
  timeline.push(StartTaskPrompt)
  timeline.push(trials)
  timeline.push(SendData)
  timeline.push(if_ThankYou)
  
  