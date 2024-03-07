// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var responseSerSub = [];
var PreviousResult
var count = 0
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}


var SetupSpeechRecognition = {
  type: jsPsychCallFunction,
  func: function() {
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
  
// =======================================================================
// Define all of the different the stimuli 


var GetPreviousResult = {
  type: jsPsychCallFunction,
  func: function(){
    PreviousResult = parameters.StartValue
  }
}

var get_response = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(response_gridSerSub)
    response_gridSerSub = response_gridSerSub.replace('XCLEARX',LabelNames.Clear)
    response_gridSerSub = response_gridSerSub.replace('XCURRENTANSWERX',LabelNames.CurrentAnswer)
    console.log(response_gridSerSub)
      var prompt = 
        Instructions.GetResponse01+PreviousResult+
        Instructions.GetResponse02+parameters.StepValue+
        Instructions.GetResponse03+parameters.StepValue+
        Instructions.GetResponse04
      return PutStimIntoTable(prompt+response_gridSerSub,'') 
  },
  choices: function() { return [LabelNames.Enter] },
  prompt:'',
  on_finish: function(data) {
      var curans = responseSerSub;
      // check to see if subtraction is correct or not
      var ExpectedResult = PreviousResult - parameters.StepValue
      if ( ExpectedResult == curans ) {
        data.correct = 1
      }
      else {
        data.correct = 0
      }
      data.trial = 'task'
      data.NumberList = curans
      PreviousResult = curans
      // update the staircase
      //staircase.Decide(accuracy)
      //clear the response for the next trial
      responseSerSub = []; 
  }
};

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = SerialSubtraction_Scoring(data)   
    console.log("RECEIVED RESULTS: ") 
    console.log(Results)
    jsPsych.finishTrial(Results)
  }
}
// ==========
var get_response2 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: "HELLO WORLD",
  choices: ['Enter'],
  prompt:'',
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
};


var SpokenSubtraction = {
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
  show_done_button: true,
  done_button_label: 'Done',
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  recording_duration: function() {return parameters.ResponseDuration*1000},
  on_start: function() {
    /* HeardList = []
    const commands01 = {'*search': RecordSpokenWords};
    const commands02 = {'result': RecordUserSaid};
    annyang.addCommands(commands02);
    annyang.start({autorestart: true, continuous: true});      
    */
    userSaidWords = []
    annyang.start({autorestart: true, continuous: true});
    //WaitForWords()
  },
  on_finish: function(data){
    //data.HeardList = TotalList
    data.HeardList = HeardList
    data.task = 'SerialSubtract'
    console.log(data.HeardList)
    console.log(userSaidWords)
    data.userSaid = userSaidWords
    clearInterval(interval);
    annyang.abort()
  },
  on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = parameters.ResponseDuration * 1000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = false;
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
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
        // STOP VOICE RECORDING!!!
      }
    }, 250)
  }
}



// =======================================================================    
// Define procedures using the stimuli

var if_SpokenResponse = {
  timeline: [if_MicrophoneInitialized, SetupSpeechRecognition, SpokenSubtraction],
  conditional_function: function() {
    if ( parameters.ResponseType == 'Spoken' )
    { 
      console.log("SPOKEN RESPONSES")
      return true }
    else { return false }
  }
}

var if_ManualResponse = {
  timeline: [procedure],
  conditional_function: function() {
    if ( parameters.ResponseType == 'Manual' )
    { 
      console.log("MANUAL!!!")
      return true 
    }
    else { return false }
  }
}

// ======================================================================= 
// Add procedures to the timeline

var procedure = {
  timeline: [get_response],
  loop_function: function(){
    if ( PreviousResult < parameters.StopValue )
    {return false}
    else {return true}
  }
};

timeline.push(Welcome)
timeline.push(enter_fullscreen)
timeline.push(GetPreviousResult)
timeline.push(Instructions01)
timeline.push(if_ManualResponse)
timeline.push(if_SpokenResponse)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

