// =======================================================================
// Define internal variables

var timeline = []



//const AudioTestList = ['X1','X2','X3','X4','X5','X6','X7','X8','X9']
var randomElement
var List = []
var ButtonList = []

var NumberCorrect = 0
var Count = 0
// =======================================================================

// preload audio
var preload_audio = {
    type: jsPsychPreload,
    audio: function() {
      document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
      for ( var i = 0; i  < Instructions.AudioTestList.length; i++ ) {
        List.push(parameters.FolderOfAudioFiles + Instructions.AudioTestList[i] + parameters.AudioFileType)
        ButtonList.push(Instructions.AudioTestList[i])
      }
      console.log("PRELOADING AUDIO")
      return List
    },
  };
  
var fixation = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: '<p class="Fixation">+</p>',
    choices: [],
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: '',
    trial_duration: 500
  }

var AudioStim = {
    type: jsPsychAudioButtonResponse,
    stimulus: function(){
      console.log("Audio List length is: "+Instructions.AudioTestList.length)
      randomElement = ReturnElementsFromPermute(1,Instructions.AudioTestList.length)  
      //randomElement = Math.floor(Math.random() * AudioTestList.length) + 1
      console.log('Planning to present element: '+randomElement)
      return List[randomElement]
    },
    choices: ButtonList,
    trial_ends_after_audio: false,
    prompt: function() {
      return '<p class="Instructions">'+Instructions.TrialText + '</p>'
    },
    on_finish: function(data) {
      data.trial = "test"
      jsPsych.setProgressBar(Count/parameters.NumberOfTrials)
        if (randomElement == data.response) {
            NumberCorrect++
            data.correct = 1
        }
        else {data.correct = 0}
        console.log((NumberCorrect-1)/parameters.NumberOfTrials)
    }
};

var present_audio= {
    timeline: [fixation, AudioStim],
    loop_function: function(){
      if ( Count < (parameters.NumberOfTrials -1 )){ 
        Count++
        return true }
      else { return false }
    }
  }

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    console.log(data)
    Results = Listening_Scoring(data)
    jsPsych.finishTrial(Results)
  }
}
timeline.push(UpdateHeaderCall)  
timeline.push(Welcome)
timeline.push(preload_audio)
timeline.push(Instructions01)
timeline.push(present_audio)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)