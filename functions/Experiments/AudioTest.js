// =======================================================================
// Define internal variables

var timeline = []
const AudioTestList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
var randomElement
var List = []
var NumberOfTrials = 7
var NumberCorrect = 0
// =======================================================================
// preload audio
var preload_audio = {
    type: jsPsychPreload,
    audio: function() {
      
      for ( var i = 0; i  < AudioTestList.length; i++ ) {
        List.push(FolderOfAudioFiles + AudioTestList[i] + AudioFileType)
      }
      console.log(List)
      console.log("PRELOADING AUDIO")
      return List
    },
  };
var Instructions = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: "You will hear a series of letters and numbers.<p> Make sure that your sound is turned on and that you can hear. ",
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: '',
      choices: ['Next'], 
}

var thank_you = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Thank you",
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    trial_duration: 500,
    prompt: '', 
    choices:''
}
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
        randomElement = Math.floor(Math.random() * AudioTestList.length) + 1
        return List[randomElement]
    },
    choices: AudioTestList,
    trial_ends_after_audio: false,
    prompt: '<p class="Fixation">Press the letter or number you heard</p>',
    on_finish: function(data) {
        if (randomElement == data.response) {
            NumberCorrect++
            data.correct = 1
        }
        else {data.correct = 0}
        console.log(NumberCorrect/NumberOfTrials)
    }
};
var Count = 0
var present_audio= {
    timeline: [fixation, AudioStim],
    loop_function: function(){
      if ( Count < NumberOfTrials ){ 
        Count++
        return true }
      else { return false }
    }
  }

timeline.push(preload_audio)
timeline.push(Instructions)
timeline.push(present_audio)
timeline.push(thank_you)