


var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}

var trial = {
  type: jsPsychHtmlInclusionOfOtherTouchscreen,
  stimulus: function() { return parameters.question},
  choices: function() { return parameters.choices},
  button_html: function() { return parameters.images},
  prompt: function() { return parameters.prompt},
  valid_choices: [],
  button_orientation: 'vertical',
  left_circle_text: "Self",
  right_circle_text: "Others",
  left_positions: [0,5,8,13,16,20,35],
  right_positions: [45,45,45,45,45,45,55],
};
// timeline.push(Welcome)
timeline.push(trial)

// timeline.push(Notes)
// timeline.push(ThankYou)
// timeline.push(SendData)