
// =======================================================================
// Define internal variables
var timeline = [];
console.log('==============================')
console.log('CANVAS SIZE')
var CanvasHeight
var CanvasWidth
var count = 0
var NLines

var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var FindCanvasSizeTest = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function() {
      sizes = FindCanvasSize(LineBisection_parameters.SuggestedWidth, LineBisection_parameters.SuggestedHeight, 0.7, 0.75) 
       CanvasWidth = sizes.CanvasWidth
       CanvasHeight = sizes.CanvasHeight
      console.log(CanvasWidth)
      console.log(CanvasHeight)
      console.log('==============================')
  }
}
var FindNumberOfLines = {
  type: jsPsychCallFunction,
  func: function() {
    NLines = LineBisection_parameters.Lines.length
    console.log("The number of lines is: "+NLines)
  }
}
// =======================================================================
// Define all of the different the stimuli 

  var trials = {
      type: jsPsychSketchpadLineBisection,   
      Lines: function(){ 
        console.log(LineBisection_parameters.Lines[count])
        return [LineBisection_parameters.Lines[count]]}, 
      canvas_width: function(){return CanvasWidth},
      canvas_height: function(){return CanvasHeight},
      canvas_border_width: 1,
      stroke_width: LineBisection_parameters.stroke_width,
      save_final_image: true,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: LineBisection_parameters.ShowTimer,
      trial_duration: function(){return LineBisection_parameters.Duration},
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
        data.trial = 'trial'
        console.log(jsPsych.data.get().last(1))
        count++
      }
    }

var loop_node = {
  timeline: [trials],
  loop_function: function(data){
      if ( count < NLines ){
          console.log("Count: "+count)
          return true;
      } else {
        console.log("FALSE!!!")
          return false;
      }
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

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = LineBisection_Scoring(data)
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}
var welcome = {
  timeline: [Instructions],
  timeline_variables: WelcomeText,
  randomize_order: false,
  repetitions: 1,
}

var thank_you = {
  timeline: [Instructions],
  timeline_variables: ThankYouText,
  randomize_order: false,
  repetitions: 1,
}
var if_Welcome = {
  timeline: [Instructions],
  timeline_variables: WelcomeText,
  conditional_function: function() {
    //if ( LineBisection_parameters.ShowWelcome)
    if (true) 
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [Instructions],
  timeline_variables: ThankYouText,
  conditional_function: function() {
    if ( LineBisection_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}
// =======================================================================    
// Define procedures using the stimuli
var Instruct = {
  timeline: [Instructions],
  timeline_variables: InstructionText,
  randomize_order: false,
  repetitions: 1,
}

// =======================================================================    
  //timeline.push(InstructionsSampleA)
  timeline.push(if_Welcome)
  timeline.push(FindCanvasSizeTest)
  timeline.push(enter_fullscreen)
  timeline.push(FindNumberOfLines)
  timeline.push(Instruct)
  timeline.push(loop_node)
  ///timeline.push(trials)
  timeline.push(if_ThankYou)
  timeline.push(SendData)
  
  
  
  