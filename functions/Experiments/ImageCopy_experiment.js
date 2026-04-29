
var timeline = []
var ImageCount = 0
var encoder // needs to be global so sketchpad can use it


var enter_fullscreen = {
      type: jsPsychFullscreen,
      fullscreen_mode: FullScreenMode
    }

var trial = {
      type: jsPsychSketchpad,
      prompt: function() {
        console.log(parameters)
        const ImageToUse = parameters.Image[ImageCount]
          console.log(ImageToUse)
          if ( parameters.ShowInstructions )
            { return Instructions.Instructions+'<p><img src="'+ImageFolder+parameters.Image[ImageCount]+'" width="300vw" height="300vh" border="2px">'} 
          else { return '<p><img src="'+ImageFolder+parameters.Image[ImageCount]+'" width="300vw" height="300vh" border="2px">'}
      },
      GIFRecord: function() { return parameters.RecordGIF },
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: true,
      save_strokes: false,
      show_clear_button: true,
      show_undo_button: true,
      show_redo_button: false,
      
      prompt_location: 'abovecanvas',
      //canvas_width: function(){return parameters.canvas_width},
      //canvas_height: function(){return parameters.canvas_height},
      canvas_width: 400,
      canvas_height: 400,
      canvas_border_width: 2,
      finished_button_label: function() {return LabelNames.Finished},
      clear_button_label: function() {return LabelNames.Clear},
      undo_button_label: function() {return LabelNames.Undo},
      redo_button_label: function() {return LabelNames.Redo},
      show_countdown_trial_duration: true,
      on_finish: function(data) {
            data.trial = 'Image Copy'
      }
}

var ImageCopy_loop = {
    timeline: [trial],
    loop_function: function(data){
      console.log(parameters)
      console.log(parameters.Image.length)
      if ( ImageCount < parameters.Image.length-1) 
      { 
        ImageCount += 1  
        return true
      } else { return false}
    }
}    
    
var SendData = {
    type: jsPsychCallFunction,
    func: function() {
          var data = jsPsych.data.get()
          Results = ImageCopy_Scoring(data)
          jsPsych.finishTrial(Results)
    },
  }
    
timeline.push(if_GIFRecorder)
timeline.push(enter_fullscreen)
timeline.push(Welcome)
timeline.push(ImageCopy_loop)
timeline.push(Notes)
timeline.push(SendData)
timeline.push(ThankYou)