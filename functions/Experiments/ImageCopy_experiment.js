
var timeline = []
var encoder // needs to be global so sketchpad can use it
var StartGIFRecorder = {
  type: jsPsychCallFunction,
  func: function() {
    encoder = new GIFEncoder();
    encoder.setRepeat(0); //0  -> loop forever
    //1+ -> loop n times then stop
    encoder.setDelay(GIFDisplayTime); //go to next frame every n milliseconds
  }
}
var if_GIFRecorder = {
  timeline: [StartGIFRecorder],
  conditional_function: function() {
        if ( ImageCopy_parameters.RecordGIF )
        { return true }
        else { return false }
  }
}
var enter_fullscreen = {
      type: jsPsychFullscreen,
      fullscreen_mode: FullScreenMode
    }
    
var trial = {
      type: jsPsychSketchpad,
      prompt: function() {
        console.log(ImageCopy_parameters)
        const ImageToUse = ImageCopy_parameters.Image
          console.log(ImageToUse)
          if ( ImageCopy_parameters.ShowInstructions )
            { return Instructions.Instructions+'<p><img src="'+ImageFolder+ImageCopy_parameters.Image+'" width="300vw" height="300vh" border="2px">'} 
          else { return '<p><img src="'+ImageFolder+ImageCopy_parameters.Image+'" width="300vw" height="300vh" border="2px">'}
      },
      GIFRecord: function() { return ImageCopy_parameters.RecordGIF },
      prompt_location: 'abovecanvas',
      canvas_width: function(){return ImageCopy_parameters.canvas_width},
      canvas_height: function(){return ImageCopy_parameters.canvas_height},
      //canvas_width: 400,
      //canvas_height: 400,
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
      { data.trial = "Notes" 
      console.log(jsPsych.data.get())
      },
    }
    
    var SendData = {
      type: jsPsychCallFunction,
      func: function() {
            var data = jsPsych.data.get()
            Results = ImageCopy_Scoring(data)
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
            if ( ImageCopy_parameters.ShowThankYou)
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
            if ( ImageCopy_parameters.ShowWelcome)
            { console.log("SHOWING WELCOME")
              return true }
            else { return false }
      }
    }

    var if_Notes = {
      timeline: [Notes],
      conditional_function: function() {
        if ( ImageCopy_parameters.AskForNotes)
        { return true }
        else { return false }
      }
    }
timeline.push(if_GIFRecorder)
timeline.push(enter_fullscreen)
timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(if_Notes)
timeline.push(if_ThankYou)
timeline.push(SendData)