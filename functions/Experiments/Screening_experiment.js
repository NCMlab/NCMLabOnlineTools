var timeline = []


var form_trial = {
    type: jsPsychSurveyHtmlForm,
    survey_json: function() {
        return parameters.pages
    },
    button_label: function() { return LabelNames.Submit},
    button_label_empty_responses: function() { return LabelNames.SubmitAnyway},
    missed_question_label: function() { return LabelNames.missed_question_label},
    missed_question_text: function() { return LabelNames.missed_question_text},
    next_button_label: function() { return LabelNames.Next },
    previous_button_label: function() { return LabelNames.Previous },
    submit_button_label: function() { return LabelNames.Submit },
    required: function() { return Questionnaire.survey_JSON.isAllRowRequired },
    on_load: function() {
      
        //console.log(document.getElementById("jspsych-progressbar-container"))
        //document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
    },
    on_finish: function(data) {
      data.trial = "Screening"
      data.pages = parameters.pages
      data.values = parameters.values
      var NAV = navigator;
      var ComputerInfo = {}
      ComputerInfo.CurrentLanguage = NAV.language
      ComputerInfo.AvailableLanguage = NAV.languages
      ComputerInfo.appVersion = NAV.appVersion
      data.ComputerInfo = ComputerInfo


      var TTT = jsPsych.data.get()
      console.log(TTT)
      trialData = TTT.filter({trial: 'Screening'}).trials[0]
      console.log(trialData)
      
      console.log(trialData.response.map(a => a.responseValue))
    }
};

// var trial = {
//     type: jsPsychSurvey,
//     pages: function() { 
//       console.log(parameters.pages)
//       return parameters.pages
//     },
//     title: function() { return ' ' },
//     button_label_next: function() { return LabelNames.Continue },
//     button_label_back: function() { return LabelNames.Previous },
//     button_label_finish: function() { return LabelNames.Submit },
//     show_question_numbers: 'onPage',
//     //description: function() { return Questionnaire.description },
//     on_load: function() {
//       document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
//       console.log(parameters.pages)
//     },
//     on_finish: function(data) {
//       data.trial = "Screening"
//       data.pages = parameters.pages
//       data.values = parameters.values
//       var NAV = navigator;
//       var ComputerInfo = {}
//       ComputerInfo.CurrentLanguage = NAV.language
//       ComputerInfo.AvailableLanguage = NAV.languages
//       ComputerInfo.appVersion = NAV.appVersion
//       data.ComputerInfo = ComputerInfo


//       var TTT = jsPsych.data.get()
//       console.log(TTT)
//       trialData = TTT.filter({trial: 'Screening'}).trials[0]
//       console.log(Object.keys(trialData.response))
//     }
// };


var CheckEligibilityData = {
    type: jsPsychCallFunction,
    func: function() {
        // console.log(jatos)
      var data = jsPsych.data.get()
      console.log(data)
      Results = Screening_Scoring(data)
      console.log(Results)
    }
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    if ( ! Results.AllResults['Accuracy'] ) 
    { jatos.endStudyAndRedirect("https://ncmlab.github.io/", [Results]) } 
    else { jsPsych.finishTrial(Results) }
    
  }
}

timeline.push(Instructions01)
timeline.push(form_trial)
timeline.push(Notes)
timeline.push(CheckEligibilityData)
timeline.push(if_Eligibile)
timeline.push(if_BrowserEligibile)
timeline.push(SendData)






