
// What is needed?
/*
- Ask participant to read a practice list of words to make sure they can be recognized by 
the computer.
- If words can not be identified decide to skip this experiment. 
- Calculate all of the scores.
- Present words a set number of time and modify the word list each time

*/

// =======================================================================
// DEFINE VARIABLES
var timeline = [];

var interval
var time_left
var category
var TempRecall
var bell
// =======================================================================
// INITIAL SETUP
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
var LoadBell = {
  type: jsPsychCallFunction,
  func: function() {
    bell = new Audio('assets/SoundFiles/AudioTest/bell.mp3');
  } 
}

var SetupSpeechRecognition = {
  type: jsPsychCallFunction,
  func: function() {
      annyang.removeCommands()
      const commands01 = {'*search': RecordSpeechRecognition};
      annyang.addCommands(commands01);
      annyang.setLanguage(LANG)
      annyang.addCallback('result', function(userSaid) {
        // userSaid contains multiple possibilities for what was heard
        userSaidWords += userSaid
        userSaidWords += ';'
        console.log(userSaidWords)
      });
  }
}


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = Fluency_Scoring(data)
    jsPsych.finishTrial(Results)
    
  }
}


var GetCategory = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(parameters)
    category = eval('Instructions.'+parameters.Category)
  }
}

var ManualRecall = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: function() { 
            return 'Please, say as many <b>'+category+'</b> as possible.<p><span id="clock">1:00</span></p>'  
          },
        name: 'fluidityText',
        textbox_rows: 10,
        required: false,
      },
      {
        type: 'text',
        prompt: " ",
        textbox_rows: 10,
      }
    ]
  ],
  button_label_next: function() { return LabelNames.Continue },
  button_label_back: function() { return LabelNames.Back },
  button_label_finish: function() { return LabelNames.Submit },
  on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = parameters.TimeLimit * 1000; // in milliseconds
    var start_time = performance.now();
    interval = setInterval(function(){
    time_left = wait_time - (performance.now() - start_time);
    var minutes = Math.floor(time_left / 1000 / 60);
    var seconds = Math.floor((time_left - minutes*1000*60)/1000);
    var seconds_str = seconds.toString().padStart(2,'0');
    
    document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
    if(time_left <= 0){
      bell.play()

      document.querySelector('#clock').innerHTML = "0:00";
      clearInterval(interval);
    }
    }, 250)
  }
};


var SpokenRecallA = {
    type: jsPsychHtmlAudioResponse,
    stimulus: function() {
      
      var stim = '<p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p>'+
      'Please, say as many <b>'+category+'</b> as possible.<p><span id="clock">1:00</span></p>'      
      return stim 
    },
    choices: function() {return [LabelNames.Next]}, 
    show_done_button: true,
    done_button_label: 'Done',//function() {return [LabelNames.Next]},
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    recording_duration: function() { return parameters.TimeLimit * 1000 },

    on_start: function() {
      console.log("Entering on_start")
      HeardList = []
      userSaidWords = []
      userSaid = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
      IntrusionList = []

      annyang.start({autorestart: true, continuous: true});
    },
    on_finish: function(data){
      data.RecallBlock = TempRecall
      data.HeardList = HeardList
      data.IntrusionList = IntrusionList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'Recall'
      data.type = 'A'
      data.userSaid = userSaidWords
      BlockCount++
      clearInterval(interval);
      annyang.abort()
      console.log("Ended recall")
    },
    on_load: function(){ // This inserts a timer on the recall duration
      var wait_time = parameters.TimeLimit * 1000; // in milliseconds
      var start_time = performance.now();
      interval = setInterval(function(){
      time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= (parameters.TimeLimit - parameters.DelayBeforeShowingDoneButton)*1000)
      {
        document.getElementById("finish-trial").style.display='inline-block'
      }
      else 
      {
        document.getElementById("finish-trial").style.display='none'
      }
      if(time_left <= 0){

        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
        // STOP VOICE RECORDING!!!
      }
      }, 250)
    }
};


var if_SpokenResponse01 = {
  timeline: [CheckMicrophone, SetupSpeechRecognition],
  conditional_function: function() {
    console.log("SPOKEN")
      if ( parameters.ResponseType == 'Spoken' )
      { return true }
      else { return false }
  }
}
var if_SpokenResponse02 = {
  timeline: [SpokenRecallA],
  conditional_function: function() {
    console.log("SPOKEN")
      if ( parameters.ResponseType == 'Spoken' )
      { return true }
      else { return false }
  }
}

var if_ManualResponse = {
  timeline: [ManualRecall],
  conditional_function: function() {
    console.log("MANUAL")
      if ( parameters.ResponseType == 'Manual' )
      { return true }
      else { return false }
  }
}

// ======================================================================= 
// Add procedures to the timeline
timeline.push(UpdateHeaderCall)  
timeline.push(enter_fullscreen)
timeline.push(if_SpokenResponse01)
timeline.push(Welcome)
timeline.push(Instructions01)
timeline.push(LoadBell)
timeline.push(GetCategory)
timeline.push(if_SpokenResponse02)
timeline.push(if_ManualResponse)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

