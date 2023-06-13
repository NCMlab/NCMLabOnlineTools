
var timeline = []
var NeckerCubeFileName = 'NeckerCube.png'

var enter_fullscreen = {
      type: jsPsychFullscreen,
      fullscreen_mode: FullScreenMode
    }
    
var trial = {
      type: jsPsychSketchpad,
      prompt: function() {
            if ( CubeCopy_parameters.ShowInstructions )
            { return Instructions.Instructions+'<p><img src="'+NeckerCubeFolder+NeckerCubeFileName+'" width="300vw" height="300vh" border="2px">'} 
            else { return '<p><img src="'+NeckerCubeFolder+NeckerCubeFileName+'" width="300vw" height="300vh" border="2px">'}
    },

      prompt_location: 'abovecanvas',
      canvas_width: function(){return CubeCopy_parameters.canvas_width},
      canvas_height: function(){return CubeCopy_parameters.canvas_height},
      //background_image: '../assets/CubeCopyBackground.png',
      canvas_border_width: 2,
      background_color: '#ffffff',
      finished_button_label: function() {return LabelNames.Finished},
      clear_button_label: function() {return LabelNames.Clear},
      undo_button_label: function() {return LabelNames.Undo},
      redo_button_label: function() {return LabelNames.Redo},
      show_countdown_trial_duration: true,
      on_finish: function(data) {
            data.trial = 'Cube Copy'
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
            Results = CubeCopy_Scoring(data)
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
            if ( CubeCopy_parameters.ShowThankYou)
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
            if ( CubeCopy_parameters.ShowWelcome)
            { console.log("SHOWING WELCOME")
              return true }
            else { return false }
      }
    }
timeline.push(enter_fullscreen)
timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(Notes)
timeline.push(SendData)
timeline.push(if_ThankYou)