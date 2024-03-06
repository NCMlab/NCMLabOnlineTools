// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var category
var itemCount = 0
var count = 0
var HasCounterStarted = false
var userSaidWords = []
var HeardList = []

/*
const sleep = async (milliseconds) => {
  await new Promise(resolve => {
      return setTimeout(resolve, milliseconds)
  });
};

const testSleep = async () => {
  console.log('Step 1 - Called');
  await sleep(5000);
  console.log('Step 2 - Called');
}
*/

// =======================================================================


var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var SetupSpeechRecognition = {
  type: jsPsychCallFunction,
  func: function() {
    console.log("SETTING uP SPEECH RECOGNITION")
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

var GetCategory = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(parameters)
    category = eval('Instructions.'+parameters.Category)
  }
}

var TotalList = []
var SimpleList = []
function ThisGetRow(Input, Row) {
  // extract the data for a single block
   const dimensions = [ Input.length, Input[0].length ];
   var row = []
   for (var i = 0; i < dimensions[1]; i++) {
    row.push(Input[Row][i])
   }
   return row
  }

var WaitForWords = function() {
      
      annyang.addCallback('result', function(userSaid) {
      console.log('sound stopped');
        
        // userSaid contains multiple possibilities for what was heard
      console.log(userSaid)
      SimpleList.push(userSaid)
       /* // Parse userSaid. It provides five possibilities for what it heard for each word
        // Make a table of rows for eahc unique word and columns for each possibility
        
        // i is the columns
        var NWords = -99
        for ( var i = 0; i < userSaid.length; i++ ) { // cycle over possible pronunciations
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
          if ( NWords < 0 ) {NWords = HeardWords.length} // cycle over words 
        }
        var Words = create2DArray(NWords,userSaid.length)
        for ( var i = 0; i < userSaid.length; i++ ) { // number of words
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
          for ( var j = 0; j < HeardWords.length; j++ ) // number of pronunciations
          {
            Words[j][i] = HeardWords[j]
          }
        }
        //console.log(Words)
        for ( var i = 0; i < NWords; i++ ) {
          TotalList.push(ThisGetRow(Words,i))
        }
        console.log(TotalList)*/
        //jsPsych.finishTrial();
        //document.getElementById("jspsych-html-button-response-button-0").disabled = true;
        document.getElementById("finish-trial").disabled = false;
       });

}
// =======================================================================
// Define all of the different the stimuli 

var FluencyOLD = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {

      var stim = 'Please, say as many <b>'+category+'</b> as possible.<p><span id="clock">1:00</span></p>'
      return stim 
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function() {
      /* HeardList = []
      const commands01 = {'*search': RecordSpokenWords};
      const commands02 = {'result': RecordUserSaid};
      annyang.addCommands(commands02);
      annyang.start({autorestart: true, continuous: true});      
      */
      annyang.start({autorestart: false, continuous: true});
      //WaitForWords()
    },
    on_finish: function(data){
      //data.HeardList = TotalList
      data.SimpleList = SimpleList
      data.task = 'Recall'
      clearInterval(interval);
      console.log(data.HeardList)
      annyang.abort()
      
    },
    on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = parameters.TimeLimit * 1000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = false;
    interval = setInterval(function(){
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

  var Fluency = {
    type: jsPsychHtmlAudioResponse,
    stimulus: function() {
      var stim = '<p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p>'+
      'Please, say as many <b>'+category+'</b> as possible.<p><span id="clock">1:00</span></p>'
      
      return stim 
    },
    choices: function() {return [LabelNames.Next]}, 
    show_done_button: true,
    done_button_label: 'Done',
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    recording_duration: 60000,
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
      data.SimpleList = SimpleList
      data.HeardList = HeardList
      data.task = 'Recall'
      console.log(data.HeardList)
      console.log(userSaidWords)
      data.userSaid = userSaidWords
      clearInterval(interval);
      annyang.abort()
    },
    on_load: function(){ // This inserts a timer on the recall duration
      var wait_time = parameters.TimeLimit * 1000; // in milliseconds
      var start_time = performance.now();
      document.querySelector('button').disabled = false;
      interval = setInterval(function(){
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

var Counter = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    console.log(Instructions)
    var stim = 
      Instructions.ResponsePage01 + category + Instructions.ResponsePage02 +
        itemCount + Instructions.ResponsePage03
    return stim
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'TESTER',
  response_ends_trial: true,
  choices: function() { return [LabelNames.Next] }, 
  on_load: function(){ // This inserts a timer on the recall duration
    if ( ! HasCounterStarted ) {
      var wait_time = parameters.TimeLimit * 1000; // in milliseconds
      var start_time = performance.now();
      document.querySelector('button').disabled = false;
      interval = setInterval(function(){
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
      HasCounterStarted = true
      }
    },
    on_finish: function(data) {
      data.task = 'Recall'
      data.count = itemCount
    }
}  

var CountResponses = {
  timeline: [Counter],
  loop_function: function() {
    if ( time_left > 0 ) 
    { 
      itemCount++
      return true 
    }
    else { return false }
  },
  on_finish: function(data){
    //data.HeardList = TotalList
    console.log(data)
    data.itemCount = itemCount
    data.task = 'Recall'
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
// =======================================================================    
// Define procedures using the stimuli
var if_SpokenResponse = {
  timeline: [SetupSpeechRecognition, Fluency],
  conditional_function: function() {
    if ( parameters.RecallType == 'Spoken' )
    { 
      console.log("SPOKEN RESPONSES")
      return true }
    else { return false }
  }
}

var if_ManualResponse = {
  timeline: [CountResponses],
  conditional_function: function() {
    if ( parameters.RecallType == 'Manual' )
    { 
      console.log("MANUAL!!!")
      return true 
    }
    else { return false }
  }
}


// ======================================================================= 
// Add procedures to the timeline


timeline.push(Welcome)
timeline.push(CheckMicrophone)
timeline.push(GetCategory)

timeline.push(if_ManualResponse)
timeline.push(if_SpokenResponse)
timeline.push(Notes)
timeline.push(ThankYou)
//timeline.push(SendData)
