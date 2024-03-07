
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
var PreviousResult
var TempRecall
// =======================================================================
// INITIAL SETUP
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
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
    Results = SerialSubtraction_Scoring(data)
    jsPsych.finishTrial(Results)
    
  }
}


var GetPreviousResult = {
  type: jsPsychCallFunction,
  func: function(){
    PreviousResult = parameters.StartValue
  }
}

var SpokenRecallA = {
    type: jsPsychHtmlAudioResponse,
    stimulus: function() {
      var prompt = 
      Instructions.GetResponse01+PreviousResult+
      Instructions.GetResponse02+parameters.StepValue+
      Instructions.GetResponse03+parameters.StepValue+
      Instructions.GetResponse04
      var stim = '<p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p>'+
      prompt+'<p><span id="clock">1:00</span></p>'
      return stim 
    },
    choices: function() {return [LabelNames.Next]}, 
    show_done_button: true,
    done_button_label: 'Done',//function() {return [LabelNames.Next]},
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    recording_duration: 60000,

    on_start: function(SimpleList) {
      userSaidWords = []
      annyang.start({autorestart: true, continuous: true});
    },
    on_finish: function(data){
      data.RecallBlock = TempRecall
      data.HeardList = HeardList
      data.IntrusionList = IntrusionList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'SerialSubtract'
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
      // Check heard words
      console.log(HeardList)
      for ( var i = 0; i < HeardList.length; i++ )
        {	if ( (!isNaN(parseInt(HeardList[i])) ) &&  ( parseInt(HeardList[i]) < parameters.StopValue ))
          { 
            console.log("STOP")
            document.getElementById("finish-trial").click();
          }
        }

      // Check each word in the list to see if there is a number less than the provided limit
      //

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


// ======================================================================= 
// Add procedures to the timeline
timeline.push(UpdateHeaderCall)  
timeline.push(Welcome)
timeline.push(CheckMicrophone)
timeline.push(GetPreviousResult)
timeline.push(SetupSpeechRecognition)
timeline.push(enter_fullscreen)
timeline.push(SpokenRecallA)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

