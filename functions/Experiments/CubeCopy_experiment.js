
var timeline = []
var NeckerCubeFileName = 'NeckerCube.png'

var enter_fullscreen = {
      type: jsPsychFullscreen,
      fullscreen_mode: FullScreenMode
    }
    
var trial = {
      type: jsPsychSketchpad,
      prompt: Instructions+'<p><img src="'+NeckerCubeFolder+NeckerCubeFileName+'" width="300vw" height="300vh" border="2px">',
      prompt_location: 'abovecanvas',
      canvas_width: function(){return CubeCopy_parameters.canvas_width},
      canvas_height: function(){return CubeCopy_parameters.canvas_height},
      background_color: "#000000",
      //background_image: '../assets/CubeCopyBackground.png',
      canvas_border_width: 2,
      show_countdown_trial_duration: true,
      on_finish: function(data) {
            data.trial = 'Cube Copy'
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

timeline.push(enter_fullscreen)
timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(if_ThankYou)
timeline.push(Notes)
timeline.push(SendData)