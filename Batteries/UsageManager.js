var timeline = []
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var trial0 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: "",
    trial_duration: 10
}

var if_node_ALaCarte = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(data.trials[0].Battery)
        if (Number(data.trials[0].Battery) > 100 ) {
            jatos.startComponent(UserChoiceHtmlID)
        }
    }
}

var if_node_Battery = {
    type: jsPsychCallFunction,
    func: function() {    
        data = jsPsych.data.get()
        console.log(data.trials[0].Battery)
        if (Number(data.trials[0].Battery) < 100 ) {
           jatos.startComponent(BatteryHtmlID)
        }
    }
}

timeline.push(enter_fullscreen)
timeline.push(trial0)
timeline.push(if_node_ALaCarte)
timeline.push(if_node_Battery)