
var timeline = []
var NeckerCubeFileName = 'NeckerCube.png'

var enter_fullscreen = {
      type: jsPsychFullscreen,
      fullscreen_mode: FullScreenMode
    }
    
var trial = {
      type: jsPsychSketchpad,
      prompt: function() {
            return Instructions.Instructions+'<p><img src="'+NeckerCubeFolder+NeckerCubeFileName+'" width="300vw" height="300vh" border="2px">'
      },
      prompt_location: 'abovecanvas',
      canvas_width: function(){return CubeCopy_parameters.canvas_width},
      canvas_height: function(){return CubeCopy_parameters.canvas_height},
      background_color: "#000000",
      //background_image: '../assets/CubeCopyBackground.png',
      canvas_border_width: 2,
      finished_button_label: function() {return LabelNames.Finished},
      clear_button_label: function() {return LabelNames.Clear},
      undo_button_label: function() {return LabelNames.Undo},
      redo_button_label: function() {return LabelNames.Redo},
      show_countdown_trial_duration: true,
      on_finish: function(data) {
            data.trial = 'Cube Copy'
      }
}

var Instructs = {
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
var if_Welcome = {
      timeline: [welcome],
      conditional_function: function() {
            if ( CubeCopy_parameters.ShowWelcome)
            { return true }
            else { return false }
      }
}

var if_ThankYou = {
      timeline: [thank_you],
      conditional_function: function() {
            if ( CubeCopy_parameters.ShowThankYou)
            { return true }
            else { return false }
      }
}

var SendData = {
      type: jsPsychCallFunction,
      func: function() {
            var data = jsPsych.data.get()
            Results = CubeCopy_Scoring(data)
            jsPsych.finishTrial(Results)
      },
}
    
var welcome = {
      timeline: [Instructs],
      timeline_variables: function(){return Instructions.WelcomeText},
      randomize_order: false,
      repetitions: 1,
}

var thank_you = {
      timeline: [Instructs],
      timeline_variables: function(){return Instructions.ThankyouText},
      randomize_order: false,
      repetitions: 1,
 }

timeline.push(enter_fullscreen)
timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(if_ThankYou)
timeline.push(SendData)