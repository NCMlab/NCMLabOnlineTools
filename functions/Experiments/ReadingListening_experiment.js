var timeline = []
var HeardSentence = ''
var HeardSentence01 = ''
var HeardSentence02 = ''
var userSaid
var Score
var count = 0
var InputSentences
var count = 1
var List01 = []
List01.push({stim:"Rice is often served in round bowls."})
List01.push({stim:"The birch canoe slid on the smooth planks."})
List01.push({stim:"Glue the sheet to the dark blue background."})
List01.push({stim:"It's easy to tell the depth of a well."})
List01.push({stim:"These days a chicken leg is a rare dish."})
List01.push({stim:"The juice of lemons makes fine punch."})
List01.push({stim:"The box was thrown beside the parked truck."})
List01.push({stim:"The hogs were fed chopped corn and garbage."})
InputSentences = List01

var SentencesToRepeat
/*
var InitializeMicrophone = {
  type: jsPsychInitializeMicrophone,
  on_finish: function() {
    // after choice and initialization, save the microphone info to the jatos session data
    recorder = jsPsych.pluginAPI.getMicrophoneRecorder();
    MicrophoneInfo = jsPsych.pluginAPI.getMicrophoneRecorder()
    // jatos cannot store the microphone object, so just save the microphone ID
     jatos.studySessionData.Microphone = MicrophoneInfo.stream.id
  }
};

var CheckMicrophone = {
  timeline: [InitializeMicrophone],
  conditional_function: function() {
    // if there is no microphone stored in the jatos session data
    // then initialize it
    if ( jatos.studySessionData.Microphone == null )
    { return true }
    // get the jatos session data and give it to the current jspsych task
    else { 
      console.log("INITIAL MICRO")
      console.log(jatos.studySessionData)
      // recreate the microphone object
      const stream = window.navigator.mediaDevices.getUserMedia({ audio: { deviceId: jatos.studySessionData.Microphone} });
      stream.then(function(result) {
      // initialize the microphone
      jsPsych.pluginAPI.initializeMicrophoneRecorder(result)
      console.log(result)
    })

  };
  return false }
}
*/
var GetSentenceCount = {
  type: jsPsychCallFunction,
  func: function() {
    SentencesToRepeat = parameters.SentencesToRepeat
    console.log(SentencesToRepeat)
  }
}


var WhatWasSaid = function(tag) {
    HeardSentence = tag
    // console.log(HeardSentence)
    return HeardSentence
}
// https://en.wikipedia.org/wiki/Harvard_sentences
var VisualStimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Please repeat the following sentence: <p>Rice is often served in round bowls.</p>",
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: 1000,
    prompt: "Read this Word",
  };


var TotalList = []

var GetList = {
  type: jsPsychCallFunction,
  func: function() {
    //InputSentences = Instructions.List
    document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
    jsPsych.setProgressBar(0)
    console.log(List01)
    console.log(InputSentences)
  },
}    

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
      var Output = {}
      annyang.removeCommands()
      const commands01 = {'*search': WhatWasSaid};
      annyang.addCommands(commands01);
      annyang.addCallback('result', function(userSaid) {
        
        
        //document.getElementById("jspsych-html-button-response-button-0").disabled = true;
      Score = CompareReadAndHeard(ReadSentence, userSaid[0])
      Output.Score = Score
      console.log(Score)
      console.log(parameters.ScoreNeeded)
      if ( Score > parameters.ScoreNeeded )
      { console.log("GOOD JOB")
      document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/GreenCheck.png" width="30" height="30"></img>'
      document.getElementById("id_next").innerHTML = 'Press next to continue'
      var x = document.getElementById("jspsych-html-button-response-button-0")
      x.style.display = 'block'
      }  
      else {document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/redX.png" width="30" height="30"></img>'}
      document.getElementById("id_sent_heard").style.color="blue"
      document.getElementById("id_next").innerHTML = 'Press next to continue'
      var x = document.getElementById("jspsych-html-button-response-button-0")
      x.style.display = 'block'

      HeardSentence01 = userSaid[0]
      HeardSentence02 = userSaid[1]
    });  
      
        
        // userSaid contains multiple possibilities for what was heard
      //  console.log(userSaid)
        // Parse userSaid. It provides five possibilities for what it heard for each word
        // Make a table of rows for eahc unique word and columns for each possibility


    return Output  
  }



var CompareReadAndHeard = function(ReadSentence, HeardSentence) {
  ReadSentenceWords = ReadSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	HeardSentenceWords = HeardSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	//console.log(ReadSentenceWords)
	//console.log(HeardSentenceWords)
	// compare sentences
	var NWords = ReadSentenceWords.length
  //console.log('The read sentence has '+NWords+' words in it')
  //console.log('I heard the sentence: ')
  //console.log(HeardSentence)
	var MatchedWords = 0
	for (var i = 0; i < NWords; i++ ) {
		for (var j = 0; j < HeardSentenceWords.length; j++ ){
			if (ReadSentenceWords[i].toLowerCase() === HeardSentenceWords[j].toLowerCase()) {
				MatchedWords++
			}
		}
	}
  //console.log('There is a match for '+MatchedWords+' words')
	Score = MatchedWords/NWords
	console.log('Score: '+Score)
  return Score
}
var ReadSentence = ''

var RecallRequest01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      console.log(jsPsych.timelineVariable('stim'))
      ReadSentence = jsPsych.timelineVariable('stim')
      console.log(ReadSentence)
      var stim = 
      '<div><p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p><p>Please read the following sentence out loud:</p> <h1><div id="id_sent_to_read">'+ReadSentence+'</div></h1><br/><h1><div id="id_sent_heard">'+'-'+'</div></h1><p><div id="id_next">-</div></p></div>'
      return stim
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function(data) {
      console.log('================================')
      Output = WaitForWords()
      console.log(Output)
      

      // start listening
      annyang.start({autorestart: false, continuous: true});
      //console.log('Started')
      // perform this when the sound stops
      
      
      
    },
    on_load: function() {
      var x = document.getElementById("jspsych-html-button-response-button-0")
      x.style.display = 'none'
    },
    on_finish: function(data){  
      jsPsych.setProgressBar(count/parameters.SentencesToRepeat)
      count += 1
      console.log(HeardSentence01)
      console.log(Score)
      data.task = 'read'
      data.Results = {}
      data.Results.ReadSentence = ReadSentence
      data.Results.HeardSentence01 = HeardSentence01
      data.Results.HeardSentence02 = HeardSentence02
      data.Results.Score = Score
      annyang.abort()
    },
  }

var trials = {
    timeline: [RecallRequest01],
    timeline_variables: InputSentences,
    randomize_order: true,
    sample: {
      type: 'custom',
      fn: function(t) {
        return ReturnElementsFromPermute(parameters.SentencesToRepeat, List01.length)
      }
    }  
  }


var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var trialData = jsPsych.data.get()//.filter({task:'Trial'})
    console.log(trialData)
    Results = ReadingListening_Scoring(trialData) 
    jsPsych.finishTrial(Results)
  },
}    

//timeline.push(CheckMicrophone)
timeline.push(UpdateHeaderCall)
timeline.push(Welcome)
timeline.push(GetList)
timeline.push(GetSentenceCount)
timeline.push(Instructions01)
timeline.push(trials)
timeline.push(Notes)
timeline.push(ThankYou);
timeline.push(SendData)
