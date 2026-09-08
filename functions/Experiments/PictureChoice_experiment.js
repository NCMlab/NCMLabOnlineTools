


var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}
parameters = {}
parameters.question = 'How do you feel?'
parameters.choices = [1,2,3,4,5]
parameters.images = [
    '<img src="../assets/Images/Smiley/smiley_1.png">',
    '<img src="../assets/Images/Smiley/smiley_2.png">',
    '<img src="../assets/Images/Smiley/smiley_3.png">',
    '<img src="../assets/Images/Smiley/smiley_4.png">',
    '<img src="../assets/Images/Smiley/smiley_5.png">',
  ],
parameters.prompt = 'click one'

parameters02 = {}
parameters02.question = 'How do you feel?'
parameters02.choices = [1,2,3,4,5,6,7]
parameters02.images = [
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_1.png">',
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_2.png">',
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_3.png">',
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_4.png">',
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_5.png">',
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_6.png">',
    '<img src="../assets/Images/InclusionOfOther/InclusionOfOther_7.png">',
  ],
parameters02.prompt = 'click one'

parameters= parameters02
var trial = {
  type: jsPsychHtmlInclusionOfOtherTouchscreen,
  stimulus: function() { return parameters.question},
  choices: function() { return parameters.choices},
  button_html: function() { return parameters.images},
  prompt: function() { return parameters.prompt},
  valid_choices: [],
  button_orientation: 'horizontal',
  left_circle_text: "JASON",
  right_circle_text: "OTHER",
  
};

// timeline.push(Welcome)
timeline.push(trial)
// timeline.push(Notes)
// timeline.push(ThankYou)
// timeline.push(SendData)