var timeline = []


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data)
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}

timeline.push(trial)
timeline.push(SendData)
  