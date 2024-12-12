// =======================================================================
// Define internal variables
var timeline = [];



var trial = {
    type: jsPsychHtmlVerticalSliderResponse,
    stimulus: function() {
        console.log(parameters)
          return parameters.Instructions 
    },
    min: function() {return parameters.min},
    max: function() {return parameters.max},
    sliderStart: function() {return parameters.sliderStart}, 
    sliderStepSize: function() {return parameters.sliderStepSize},
    showSmallTicks: function() {return parameters.showSmallTicks},
    distanceBetweenLabeledValues: function() {return parameters.distanceBetweenLabeledValues},
    textAboveSlider: function() {return parameters.textAboveSlider},
    textBelowSlider: function() {return parameters.textBelowSlider},

    slider_width: 200,
    require_movement: true,
    prompt: '<p>Is this color closer to purple or blue? Use the slider above.</p>',
    on_finish: function(data) {
      data.trial = 'VAS'
    }
  };

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    
    Results = VAS_Scoring(data)
    jsPsych.finishTrial(Results)
    console.log(Results)
  }
}

timeline.push(Welcome)
timeline.push(trial)
timeline.push(Notes)
timeline.push(ThankYou);
timeline.push(SendData)


//timeline.push(SendData)