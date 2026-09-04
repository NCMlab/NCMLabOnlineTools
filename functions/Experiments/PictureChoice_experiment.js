


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
    '<img src="../assets/Images/Smiley/smiley_1.png" width="100">',
    '<img src="../assets/Images/Smiley/smiley_2.png" width="100">',
    '<img src="../assets/Images/Smiley/smiley_3.png" width="100">',
    '<img src="../assets/Images/Smiley/smiley_4.png" width="100">',
    '<img src="../assets/Images/Smiley/smiley_5.png" width="100">',  
  ],
parameters.prompt = 'click one'

var trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return parameters.question},
  choices: function() { return parameters.choices},
  button_html: function() { return parameters.images},
  prompt: function() { return parameters.prompt}
};

// timeline.push(Welcome)
timeline.push(trial)
// timeline.push(Notes)
// timeline.push(ThankYou)
// timeline.push(SendData)