


var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
 
    this.type.jsPsych.finishTrial(Results)    
  }
}


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

// Make list of images and their <img> strings
var setup = {
  type: jsPsychCallFunction,
  func: function(){ 
    var imageList = []
    for ( var i = 0; i < parameters.images.length; i++ )
    {
      var temp = '<img src="../' + parameters.imageFolder + parameters.images[i] + '">'
      imageList.push(temp)
    }
    console.log(imageList)
    parameters.imageList = imageList
  }
}



var trial01 = {
  type: jsPsychHtmlPictureResponseTouchscreen,
  stimulus: function() { return parameters.question},
  choices: function() { return parameters.choices},
  button_text: function() { return parameters.button_text},
  button_html: function() { return parameters.imageList},
  prompt: function() { return parameters.prompt},
  button_orientation: function() { return parameters.button_orientation },
  left_circle_text: function() { return parameters.left_circle_text },
  right_circle_text: function() { return parameters.right_circle_text},
  left_positions: function() { return parameters.left_positions},
  right_positions: function() { return parameters.right_positions},
  valid_choices: [],

};

timeline.push(Welcome)
timeline.push(setup)
timeline.push(trial01)

timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)