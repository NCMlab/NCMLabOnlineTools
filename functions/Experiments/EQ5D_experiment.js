var timeline = []

var Questionnaire = []
var CriteriaToUse = 0


var LoadQuestionnaire = {
  type: jsPsychCallFunction,  
  func: function() {
    console.log(parameters)
    text = 'Questionnaire = ' + parameters.Language + "_" + parameters.Questionnaire
    console.log(parameters)
    console.log(text)
    eval(text)

    console.log(Questionnaire)
    if ( typeof Questionnaire.survey_JSON !== 'undefined' )
    { console.log('>>>> JSON <<<<<')}
    if ( typeof Questionnaire.pages !== 'undefined' )
      { console.log('>>>> PAGES <<<<<<')}

  }
}

var VAStrial = {
    type: jsPsychHtmlVerticalSliderResponse,
    stimulus: function() {
        console.log(parameters)
          return parameters.Instructions 
    },
    on_load: function() {

      // Set the height of teh slider based on the rendered size of the cell it is in        
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        console.log("JASONJASONJASON")
        //console.log(document.getElementById('VASTable').offsetHeight)
        console.log(document.getElementById('VAStableElement').offsetHeight)
        var VAScellHeight = 0.9*document.getElementById('VAStableElement').offsetHeight
        //VAScellHeight = document.getElementById('VASTable').offsetHeight - 20
        console.log(VAScellHeight)
        var NewHeight = VAScellHeight + 'px'
        r.style.setProperty('--sliderHeight', NewHeight)
        //r.style.setProperty('--sliderCellHeight', NewHeight)
        
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


var form_trial = {
    type: jsPsychSurveyHtmlForm,
    survey_json: function() {
      console.log(EN_eq5dJSON)
        return Questionnaire.survey_JSON
    },
    button_label: function() { return LabelNames.Submit},
    missed_question_label: function() { return LabelNames.missed_question_label},
    missed_question_text: function() { return LabelNames.missed_question_text},
    required: true,
    on_load: function() {
        
        //console.log(document.getElementById("jspsych-progressbar-container"))
        //document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
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
};
  
  var SendData = {
    type: jsPsychCallFunction,
    func: function() {
        var data = this.type.jsPsych.data.get()
        Results = EQ5D_Scoring(data)
        this.type.jsPsych.finishTrial(Results)    
    }
  }
timeline.push(Welcome)
//timeline.push(LoadQuestionnaire)
//timeline.push(form_trial)
timeline.push(VAStrial)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)