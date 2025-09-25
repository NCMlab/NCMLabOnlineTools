
var timeline = []
var encoder // needs to be global so sketchpad can use it

var trial = {
  type: jsPsychSketchpad,
  prompt: function(){
    if ( parameters.ShowInstructions )
    { return '<div class="TextAboveCanvas">'+Instructions.Instructions+'</div>' } 
    else { return ''}
  },
  GIFRecord: function() { return parameters.RecordGIF },
  prompt_location: 'abovecanvas',
  canvas_width: 600,
  canvas_height: 600,
  canvas_border_width: 2,
  save_final_image: true,
  finished_button_label: function() {return LabelNames.Finished},
  clear_button_label: function() {return LabelNames.Clear},
  undo_button_label: function() {return LabelNames.Undo},
  redo_button_label: function() {return LabelNames.Redo},
  on_finish: function(data) {
    data.trial = 'Clock Drawing'

  }
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
        var data = jsPsych.data.get()
        console.log(data)
        Results = ClockDrawing_Scoring(data)
        
        // Once the images are added to the output data they can be removed so there are not multiple copies stored.
        //jsPsych.data.allData.trials[1].png = 0
        //jsPsych.data.allData.trials[1].gif = 0
        console.log(jsPsych.data)
        jsPsych.finishTrial(Results)

  },
}

timeline.push(if_GIFRecorder)
timeline.push(Welcome)
timeline.push(trial)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

