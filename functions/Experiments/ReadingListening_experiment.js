var timeline = []
var HeardSentence = ''
var HeardSentence01 = ''
var HeardSentence02 = ''
var userSaid
var Score
var count = 0
var InputSentences
var count = 1
var ReadSentence 
var SentenceOrder
var SentenceCount = 0
var Output = {}

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
    SentenceOrder = ReturnElementsFromPermute(parameters.SentencesToRepeat, Instructions.List.length)
    ReadSentence = InputSentences[SentenceOrder[SentenceCount]].stim
    console.log("Sentence Order: " + SentenceOrder)
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
    console.log("Get List")
    var NAV = navigator;
    var ComputerInfo = {}
    console.log("COMPUTER LANGUAGE: "+NAV.languages)

    InputSentences = Instructions.List
    console.log(InputSentences)
    document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
    jsPsych.setProgressBar(0)
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

var SetupSpeechRecognition = {
    type: jsPsychCallFunction,
    func: function() {
      const commands01 = {'*search': WhatWasSaid};
      annyang.addCommands(commands01);
      annyang.setLanguage(LanguageMapping(LANG))
      annyang.addCallback('result', function(userSaid) {
      console.log(userSaid)
      Score = CompareReadAndHeard(ReadSentence, userSaid[0])
      Output.Score = Score
      console.log(Score)
      console.log(parameters.ScoreNeeded)
      if ( Score > parameters.ScoreNeeded )
      { 
          console.log("GOOD JOB")
          document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/GreenCheck.png" width="30" height="30"></img>'
          document.getElementById("id_next").innerHTML = LabelNames.PressNext
          //var x = document.getElementById("jspsych-html-button-response-button-0")
          //x.style.display = 'block'
      }  
      else 
      {
          document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/redX.png" width="30" height="30"></img>'}
          document.getElementById("id_sent_heard").style.color="blue"
          document.getElementById("id_next").innerHTML = LabelNames.PressNext
          //var x = document.getElementById("jspsych-html-button-response-button-0")
          //x.style.display = 'block'

          HeardSentence01 = userSaid[0]
          HeardSentence02 = userSaid[1]
      })
  }
}
  

var WaitForWords = function() {
      var Output = {}
      annyang.removeCommands()
      const commands01 = {'*search': WhatWasSaid};
      annyang.addCommands(commands01);
      console.log("USING LANGUAGE MAPPING")

      if ( LANG == 'EN' )
      {
        console.log('Using Language: '+'en')
        annyang.setLanguage('en')
      }
      else if ( LANG == 'FR' )
      {
        console.log('Using Language: '+'fr')
        annyang.setLanguage('fr')
      }
      else
      {
        console.log('Using Language: '+'en')
        annyang.setLanguage('en')
      }
      annyang.addCallback('result', function(userSaid) {
        console.log(userSaid)
        Score = CompareReadAndHeard(ReadSentence, userSaid[0])
        Output.Score = Score
        console.log(Score)
        console.log(parameters.ScoreNeeded)
        if ( Score > parameters.ScoreNeeded )
        { 
          console.log("GOOD JOB")
          document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/GreenCheck.png" width="30" height="30"></img>'
          document.getElementById("id_next").innerHTML = LabelNames.PressNext
          var x = document.getElementById("jspsych-html-button-response-button-0")
          x.style.display = 'block'
        }  
        else 
        {
          document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/redX.png" width="30" height="30"></img>'}
          document.getElementById("id_sent_heard").style.color="blue"
          document.getElementById("id_next").innerHTML = LabelNames.PressNext
          var x = document.getElementById("jspsych-html-button-response-button-0")
          x.style.display = 'block'

          HeardSentence01 = userSaid[0]
          HeardSentence02 = userSaid[1]
        }
      );  
    return Output  
  }



var CompareReadAndHeard = function(ReadSentence, HeardSentence) {
  ReadSentenceWords = ReadSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	HeardSentenceWords = HeardSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	var NWords = ReadSentenceWords.length
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

var RecallRequest02 = {
    type: jsPsychHtmlAudioResponse,
    stimulus: function() {
      var stim = 
      '<div><img src="assets/Icons/Recording.gif" alt="microphone" style="width:120px;height:120px;">'+
      '<br/>'+LabelNames.PleaseRead+
      '<h4><div id="id_sent_to_read">'+ReadSentence+'</div></h4>'+
      '<h4><div id="id_sent_heard">'+'-'+'</div></h4>'+
      '<div id="id_next">-</div></div>'
      return stim
    },
    choices: function() {return [LabelNames.Next]}, 
    show_done_button: true,
    done_button_label: function() {return [LabelNames.Next]},
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    recording_duration: 60000,

    on_start: function(SimpleList) {
      console.log('================================')
      // start listening
      annyang.start({autorestart: false, continuous: true})    },
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
    },
    on_load: function(){ // This inserts a timer on the recall duration      
      annyang.addCallback('soundstart', function() {
        ListeningFlag = true
      })
      annyang.addCallback('result', function() {
        ListeningFlag = false
      })
      annyang.addCallback('end', function() {
        ListeningFlag = false        
      })
    }
};

var RecallRequest01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      //console.log(jsPsych.timelineVariable('stim'))
      //ReadSentence = jsPsych.timelineVariable('stim')
      console.log(ReadSentence)
      var stim = 
      '<div><img src="assets/Icons/Recording.gif" alt="microphone" style="width:120px;height:120px;">'+
      '<br/>'+LabelNames.PleaseRead+
      '<h4><div id="id_sent_to_read">'+ReadSentence+'</div></h4>'+
      '<h4><div id="id_sent_heard">'+'-'+'</div></h4>'+
      '<div id="id_next">-</div></div>'
      return stim
    },
    choices: function() { return [LabelNames.Next] }, 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function(data) {
      console.log('================================')
      Output = WaitForWords()
      console.log(Output)
    
      // start listening
      // Set the listening langueg to the battery language
      annyang.setLanguage(jatos.studySessionData.Language);
      annyang.start({autorestart: false, continuous: true})

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

var SentenceLoop = {
  timeline: [RecallRequest02],
  loop_function: function(data){
    console.log("In sentence loop")
    console.log(SentenceCount)
    if ( SentenceCount < SentencesToRepeat - 1 )
    { 
      SentenceCount+=1
      ReadSentence = InputSentences[SentenceOrder[SentenceCount]].stim
      console.log(ReadSentence)
      
      return true }
    else { return false }
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

timeline.push(Welcome)
timeline.push(GetList)
timeline.push(GetSentenceCount)
timeline.push(Instructions01)
timeline.push(CheckMicrophone)
timeline.push(SetupSpeechRecognition)


timeline.push(SentenceLoop)
timeline.push(Notes)
timeline.push(ThankYou);
timeline.push(SendData)
