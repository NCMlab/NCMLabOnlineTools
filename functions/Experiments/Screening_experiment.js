var timeline = []

var trial = {
    type: jsPsychSurvey,
    pages: function() { 
      return parameters.pages
    },
    title: function() { return ' ' },
    button_label_next: function() { return LabelNames.Continue },
    button_label_back: function() { return LabelNames.Previous },
    button_label_finish: function() { return LabelNames.Submit },
    show_question_numbers: 'onPage',
    //description: function() { return Questionnaire.description },
    on_load: function() {
      document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
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
      console.log(Object.keys(trialData.response))
    }
};


var CheckEligibilityData = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(jatos)
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
timeline.push(trial)
timeline.push(Notes)
timeline.push(CheckEligibilityData)
timeline.push(if_Eligibile)
//timeline.push(if_BrowserEligibile)
timeline.push(SendData)






