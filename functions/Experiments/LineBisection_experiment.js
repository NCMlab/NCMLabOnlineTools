
// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
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
      sizes = FindCanvasSize(parameters.SuggestedWidth, parameters.SuggestedHeight, 0.7, 0.75) 
       CanvasWidth = sizes.CanvasWidth
       CanvasHeight = sizes.CanvasHeight
      console.log(CanvasWidth)
      console.log(CanvasHeight)
      console.log('==============================')
  },
  on_finish: function(data) {
      data.trial = 'FindCanvasSize'
      data.CanvasWidth = CanvasWidth
      data.CanvasHeight = CanvasHeight
  }
}

var FindNumberOfLines = {
  type: jsPsychCallFunction,
  func: function() {
    NLines = parameters.Lines.length
    console.log("The number of lines is: "+NLines)
  }
}
// =======================================================================
// Define all of the different the stimuli 

  var trials = {
      type: jsPsychSketchpadLineBisection,   
      Lines: function(){ 
        console.log(parameters.Lines[count])
        return [parameters.Lines[count]]}, 
      canvas_width: function(){return CanvasWidth},
      canvas_height: function(){return CanvasHeight},
      canvas_border_width: 1,
      stroke_width: function(){return parameters.stroke_width},
      save_final_image: false,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: function() { return parameters.ShowTimer },
      trial_duration: function(){return parameters.Duration},
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

// test instructions
var Instructions_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.InstructionText[countInstr].page},
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
    if ( countInstr < Instructions.InstructionText.length){
        return true} else { return false}
  }
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


var if_Test_Instructions = {
  timeline: [instr_procedure_loop_node],
  conditional_function: function() {
        if ( parameters.ShowInstructions)
        { 
          return true }
        else { return false }
  }
}


// =======================================================================    
  //timeline.push(InstructionsSampleA)
  timeline.push(Welcome)
  timeline.push(FindCanvasSizeTest)
  timeline.push(enter_fullscreen)
  timeline.push(FindNumberOfLines)
  timeline.push(Instructions01)
  timeline.push(loop_node)
  ///timeline.push(trials)

  timeline.push(SendData)
  timeline.push(Notes)
timeline.push(ThankYou)

  
  
  
  
  