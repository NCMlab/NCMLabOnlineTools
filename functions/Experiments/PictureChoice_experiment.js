


var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}
parameters01 = {}
parameters01.question = 'How do you feel at this moment?'
parameters01.choices = [1,2,3,4,5]
parameters01.button_text = ['Very Sad', 'Somewhat Sad', 'Neutral', 'Somewhat Happy', 'Very Happy'],
parameters01.images = [
    '<img src="../assets/Images/Smiley/smiley_noColor_1.png">',
    '<img src="../assets/Images/Smiley/smiley_noColor_2.png">',
    '<img src="../assets/Images/Smiley/smiley_noColor_3.png">',
    '<img src="../assets/Images/Smiley/smiley_noColor_4.png">',
    '<img src="../assets/Images/Smiley/smiley_noColor_5.png">',
  ],
parameters01.prompt = 'Select One'

parameters02 = {}
parameters02.question = 'How do you feel?'
parameters02.choices = [1,2,3,4,5,6,7],
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

parameters03 = {}
parameters03.question = 'What best describes your relationship with your other Music and Movement classmates.'
parameters03.choices = [1,2,3,4,5,6,7],
parameters03.images = [
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_1.png">',
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_2.png">',
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_3.png">',
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_4.png">',
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_5.png">',
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_6.png">',
    '<img src="../assets/Images/InclusionOfOther/IOOpeople_7.png">',
  ],
parameters03.prompt = 'Select One'


var trial01 = {
  type: jsPsychHtmlPictureResponseTouchscreen,
  stimulus: function() { return parameters01.question},
  choices: function() { return parameters01.choices},
  button_text: function() { return parameters01.button_text},
  button_html: function() { return parameters01.images},
  prompt: function() { return parameters01.prompt},
  valid_choices: [],
  button_orientation: 'horizontal',
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

var trial03 = {
  type: jsPsychHtmlInclusionOfOtherTouchscreen,
  stimulus: function() { return parameters03.question},
  choices: function() { return parameters03.choices},
  button_html: function() { return parameters03.images},
  prompt: function() { return parameters03.prompt},
  valid_choices: [],
  button_orientation: 'vertical',
  left_circle_text: "Self",
  right_circle_text: "Others",
  left_positions: [0,5,8,13,16,20,35],
  right_positions: [45,45,45,45,45,45,55],
};
// timeline.push(Welcome)
timeline.push(trial03)
timeline.push(trial01)
// timeline.push(Notes)
// timeline.push(ThankYou)
// timeline.push(SendData)