var timeline = []
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

var WaitForWords = function() {
  annyang.addCallback('result', function(userSaid) {
        console.log('sound stopped');
        // userSaid contains multiple possibilities for what was heard
        console.log(userSaid)
        console.log(ReadSentence)
        //jsPsych.finishTrial();
        console.log(document.getElementById("JASON").style.color="blue")
        document.getElementById("jspsych-html-button-response-button-0").disabled = true;
        console.log(document.getElementById("jspsych-html-button-response-button-0"))
       });

}

var CompareReadAndHeard = function(ReadSentence, HeardSentence) {
	ReadSentenceWords = ReadSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	HeardSentenceWords = HeardSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	console.log(ReadSentenceWords)
	console.log(HeardSentenceWords)
	// compare sentences
	var NWords = ReadSentenceWords.length
	var MatchedWords = 0
	for (var i = 0; i < NWords; i++ ) {
		for (var j = 0; j < HeardSentenceWords.length; j++ ){
			if (ReadSentenceWords[i].toLowerCase() === HeardSentenceWords[j].toLowerCase()) {
				MatchedWords++
			}
		}
	}
	Score = MatchedWords/NWords
	console.log(Score)
}
var ReadSentence = ''
var RecallRequest01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      ReadSentence = jsPsych.timelineVariable('stim')
      console.log(ReadSentence)
      var stim = 'Please read the following sentence out load: <div id="JASON">'+ReadSentence+'</div>Then press next when you are done.'
      return stim
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function() {
      console.log('================================')
      // start listening
      annyang.start({autorestart: false, continuous: true});
      //console.log('Started')
      // perform this when the sound stops
		 console.log(WaitForWords())

    },
    on_finish: function(data){  
      annyang.abort()
    },
  }

  var trials = {
      timeline: [RecallRequest01],
      timeline_variables: InputSentences,
      randomize_order: false,
      repetitions: 1,
    }
  timeline.push(trials)
