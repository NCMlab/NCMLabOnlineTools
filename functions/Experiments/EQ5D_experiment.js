var timeline = []



var VAStrial = {
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

var SURVEYtrial = {
    type: jsPsychSurvey,
    survey_json:  function() { 
      return Questionnaire.survey_JSON
    },
    description: function() { return Questionnaire.description },
    on_load: function() {
      document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
    },
    on_finish: function(data) {
      
      data.trial = "Questionnaire"
      data.response = data.response
      data.QuestionnaireType = Questionnaire.QuestionnaireType
      data.Questionnaire = Questionnaire
      data.AlertLimit = Questionnaire.AlertLimit
      data.title = Questionnaire.title
      data.shortTitle = Questionnaire.shortTitle
    }
  }
  
  var SendData = {
    type: jsPsychCallFunction,
    func: function() {
        var data = this.type.jsPsych.data.get()
        Results = EQ5D_Scoring(data)
        this.type.jsPsych.finishTrial(Results)    
    }
  }
timeline.push(Welcome)
timeline.push(SURVEYtrial)
timeline.push(VAStrial)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)