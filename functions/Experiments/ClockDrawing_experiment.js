
var timeline = []

var trial = {
  type: jsPsychSketchpad,
  prompt: function(){return Instructions.Instructions},
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
    choices: function() {return [LabelNames.Next]}, 
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
        var data = jsPsych.data.get()
        Results = ClockDrawing_Scoring(data)
        jsPsych.finishTrial(Results)
  },
}

 var if_Welcome = {
  timeline: [Instructions],
  timeline_variables: function(){return Instructions.WelcomeText},
  conditional_function: function() {
    if ( ClockDrawing_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}
var if_ThankYou = {
  timeline: [Instructions],
  timeline_variables: function(){return Instructions.ThankYouText},
  conditional_function: function() {
    if ( ClockDrawing_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}
timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(if_ThankYou)
timeline.push(SendData)

