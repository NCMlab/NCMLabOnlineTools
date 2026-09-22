


var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}

var trial01 = {
  type: jsPsychHtmlPictureResponseTouchscreen,
  stimulus: function() { return parameters.question},
  choices: function() { return parameters.choices},
  button_text: function() { return parameters.button_text},
  button_html: function() { return parameters.images},
  prompt: function() { return parameters.prompt},
  valid_choices: [],
  button_orientation: 'horizontal',
  left_circle_text: "Self",
  right_circle_text: "Others",
};

// var trial02 = {
//   type: jsPsychHtmlInclusionOfOtherTouchscreen,
//   stimulus: function() { return parameters02.question},
//   choices: function() { return parameters02.choices},
//   button_html: function() { return parameters02.images},
//   prompt: function() { return parameters02.prompt},
//   valid_choices: [],
//   button_orientation: 'horizontal',
//   left_circle_text: "Self",
//   right_circle_text: "Group",
// };

// var trial03 = {
//   type: jsPsychHtmlInclusionOfOtherTouchscreen,
//   stimulus: function() { return parameters.question},
//   choices: function() { return parameters.choices},
//   button_html: function() { return parameters.images},
//   prompt: function() { return parameters.prompt},
//   valid_choices: [],
//   button_orientation: 'vertical',
//   left_circle_text: "Self",
//   right_circle_text: "Others",
//   left_positions: [0,5,8,13,16,20,35],
//   right_positions: [45,45,45,45,45,45,55],
// };
// timeline.push(Welcome)
timeline.push(trial01)

// timeline.push(Notes)
// timeline.push(ThankYou)
// timeline.push(SendData)