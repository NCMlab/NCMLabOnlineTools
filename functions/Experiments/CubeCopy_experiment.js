
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

 var ScoreResults = {
      type: jsPsychCallFunction,
      func: function() {
        data = CubeCopy_Scoring(data)
        data.task = 'Sending Data'
      }
    }
timeline.push(enter_fullscreen)
timeline.push(welcome)
timeline.push(trial)
timeline.push(ScoreResults)

