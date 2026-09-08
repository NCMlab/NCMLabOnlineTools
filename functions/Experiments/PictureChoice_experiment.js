


var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}
parameters01 = {}
parameters01.question = 'How do you feel?'
parameters01.choices = [1,2,3,4,5]
parameters01.images = [
    '<img src="../assets/Images/Smiley/smiley_1.png">',
    '<img src="../assets/Images/Smiley/smiley_2.png">',
    '<img src="../assets/Images/Smiley/smiley_3.png">',
    '<img src="../assets/Images/Smiley/smiley_4.png">',
    '<img src="../assets/Images/Smiley/smiley_5.png">',
  ],
parameters01.prompt = 'Select One'

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
parameters02.prompt = 'Select One'


var trial01 = {
  type: jsPsychHtmlPictureResponseTouchscreen,
  stimulus: function() { return parameters01.question},
  choices: function() { return parameters01.choices},
  button_html: function() { return parameters01.images},
  prompt: function() { return parameters01.prompt},
  valid_choices: [],
  button_orientation: 'vertical',
  left_circle_text: "Self",
  right_circle_text: "Others",
};

var trial02 = {
  type: jsPsychHtmlInclusionOfOtherTouchscreen,
  stimulus: function() { return parameters02.question},
  choices: function() { return parameters02.choices},
  button_html: function() { return parameters02.images},
  prompt: function() { return parameters02.prompt},
  valid_choices: [],
  button_orientation: 'horizontal',
  left_circle_text: "Self",
  right_circle_text: "Group",
  
};

// timeline.push(Welcome)
timeline.push(trial02)
// timeline.push(Notes)
// timeline.push(ThankYou)
// timeline.push(SendData)