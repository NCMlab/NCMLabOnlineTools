
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

var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: function() {return LabelNames.NoteInputBox},
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
    Results = LineBisection_Scoring(data)
    console.log(Results)
    //jsPsych.finishTrial(Results)
  }
}

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( LineBisection_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( LineBisection_parameters.ShowWelcome)
        { 
          return true }
        else { return false }
  }
}

var if_Test_Instructions = {
  timeline: [instr_procedure_loop_node],
  conditional_function: function() {
        if ( LineBisection_parameters.ShowInstructions)
        { 
          return true }
        else { return false }
  }
}


// =======================================================================    
  //timeline.push(InstructionsSampleA)
  timeline.push(if_Welcome)
  timeline.push(FindCanvasSizeTest)
  timeline.push(enter_fullscreen)
  timeline.push(FindNumberOfLines)
  timeline.push(if_Test_Instructions)
  timeline.push(loop_node)
  ///timeline.push(trials)
  timeline.push(Notes)
  timeline.push(SendData)
  timeline.push(if_ThankYou)
  
  
  
  
  