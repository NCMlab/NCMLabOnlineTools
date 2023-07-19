
var timeline = []

var encoder = new GIFEncoder();
encoder.setRepeat(0); //0  -> loop forever
//1+ -> loop n times then stop
encoder.setDelay(100); //go to next frame every n milliseconds
console.log(encoder)


var trial = {
  type: jsPsychSketchpad,
  prompt: function(){
    if ( ClockDrawing_parameters.ShowInstructions )
    { return Instructions.Instructions } 
    else { return ''}
  },
  
  prompt_location: 'abovecanvas',
  canvas_width: 600,
  canvas_height: 600,
  canvas_border_width: 2,
  finished_button_label: function() {return LabelNames.Finished},
  clear_button_label: function() {return LabelNames.Clear},
  undo_button_label: function() {return LabelNames.Undo},
  redo_button_label: function() {return LabelNames.Redo},
  on_finish: function(data) {
    data.trial = 'Clock Drawing'

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
        Results = ClockDrawing_Scoring(data)
        jsPsych.finishTrial(Results)
  },
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
        if ( ClockDrawing_parameters.ShowThankYou)
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
        if ( ClockDrawing_parameters.ShowWelcome)
        { console.log("SHOWING WELCOME")
          return true }
        else { return false }
  }
}


timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(Notes)
timeline.push(SendData)
timeline.push(if_ThankYou)
