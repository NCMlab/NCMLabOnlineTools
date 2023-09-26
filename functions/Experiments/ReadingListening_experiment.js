var timeline = []
var HeardSentence = ''

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
var InputSentences = []

InputSentences.push({'stim':"Rice is often served in round bowls"})
InputSentences.push({'stim':"The birch canoe slid on the smooth planks"})
InputSentences.push({'stim':"Glue the sheet to the dark blue background"})
InputSentences.push({'stim':"It's easy to tell the depth of a well"})
InputSentences.push({'stim':"These days a chicken leg is a rare dish"})
InputSentences.push({'stim':"The juice of lemons makes fine punch"})
InputSentences.push({'stim':"The box was thrown beside the parked truck"})
InputSentences.push({'stim':"The hogs were fed chopped corn and garbage"})
InputSentences.push({'stim':"4 hours of steady work faced us"})
InputSentences.push({'stim':"A large size in stockings is hard to sell"})

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
      if ( Score > ReadingListening_parameters.ScoreNeeded )
      { console.log("GOOD JOB")
      document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/GreenCheck.png" width="30" height="30"></img>'
      }  
      else {document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/redX.png" width="30" height="30"></img>'}
      document.getElementById("id_sent_heard").style.color="blue"
      Output.ReadSentence = ReadSentence
      Output.HeardSentence = userSaid[0]
      Output.HeardSentence02 = userSaid[1]
    });  
      
        
        // userSaid contains multiple possibilities for what was heard
      //  console.log(userSaid)
        // Parse userSaid. It provides five possibilities for what it heard for each word
        // Make a table of rows for eahc unique word and columns for each possibility


    return Output  
  }

        /* // i is the columns
        var NWords = -99
        for ( var i = 0; i < userSaid.length; i++ ) { // cycle over possible pronunciations
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
          if ( NWords < 0 ) {NWords = HeardWords.length} // cycle over words 
        }
        var Words = create2DArray(NWords,userSaid.length)
      //  console.log(Words)
        for ( var i = 0; i < userSaid.length; i++ ) { // number of words
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
      //    console.log(HeardWords)
          for ( var j = 0; j < HeardWords.length; j++ ) // number of pronunciations
          {
            //console.log('i: '+i+" j: "+j+"Word: "+HeardWords[j])
            Words[j][i] = HeardWords[j]
          }
        }
        //console.log(Words)
        for ( var i = 0; i < NWords; i++ ) {
          TotalList.push(ThisGetRow(Words,i))
        }
        //console.log(TotalList)
        //console.log(userSaid.length)
        //console.log(ReadSentence)
        //jsPsych.finishTrial();
        //console.log(document.getElementById("JASON").style.color="blue")
        document.getElementById("JASON").innerHTML = userSaid
        document.getElementById("jspsych-html-button-response-button-0").disabled = true;
    //    console.log(document.getElementById("jspsych-html-button-response-button-0"))
       });
      
} */

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
      ReadSentence = jsPsych.timelineVariable('stim')
      //console.log(ReadSentence)
      var stim = 'Please read the following sentence out load: <div id="id_sent_to_read">'+ReadSentence+'</div><div id="id_sent_heard">'+'-'+'</div>Then press next when you are done.'
      return stim
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function(data) {
      console.log('================================')
      
      

      // start listening
      annyang.start({autorestart: false, continuous: true});
      //console.log('Started')
      // perform this when the sound stops
      Output = WaitForWords()
      console.log(Output)
      
    },
    on_finish: function(data){  
      data.task = 'read'
      data.Results = {}
      data.Results = Output
      annyang.abort()
    },
  }

  var trials = {
      timeline: [RecallRequest01],
      timeline_variables: InputSentences,
      randomize_order: true,
      repetitions: 1,
      sample: {
        type: 'without-replacement',
        size: 3 
    }
  }

var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: function() {return LabelNames.NoteInputBox},
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
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

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( ReadingListening_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( ReadingListening_parameters.ShowWelcome)
        { 
          return true }
        else { return false }
  }
}

timeline.push(if_Welcome)
timeline.push(trials)
timeline.push(SendData)
timeline.push(Notes)
timeline.push(if_ThankYou);

