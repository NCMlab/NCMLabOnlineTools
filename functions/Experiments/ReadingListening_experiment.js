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

var HeardSentence = []
var DisplayWord = function(tag) {
	HeardSentence = tag
	CompareReadAndHeard(Input, HeardSentence)
}
var Input = []
var InputSentences = []

InputSentences.push({'stim':"Rice is often served in round bowls"})
InputSentences.push({'stim':"The birch canoe slid on the smooth planks"})
InputSentences.push({'stim':"Glue the sheet to the dark blue background"})
InputSentences.push({'stim':"It's easy to tell the depth of a well"})
InputSentences.push({'stim':"These days a chicken leg is a rare dish"})
InputSentences.push({'stim':"The juice of lemons makes fine punch"})
InputSentences.push({'stim':"The box was thrown beside the parked truck"})
InputSentences.push({'stim':"The hogs were fed chopped corn and garbage"})
InputSentences.push({'stim':"Four hours of steady work faced us"})
InputSentences.push({'stim':"A large size in stockings is hard to sell"})

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

var RecallRequest01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      Input = jsPsych.timelineVariable('stim')
      var stim = "Please read the following sentence out load: <p>"+jsPsych.timelineVariable('stim')+"</p>Then press next when you are done."
      return stim
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: 'Yo', //Add this to config file
    on_start: function() {
      // reset the list of indices
      const commands01 = {'*search': DisplayWord};
      annyang.start({autorestart: false, continuous: true});
      annyang.addCommands(commands01);
      //console.log('Started')

		annyang.addCallback('result', function() {
  		console.log('sound stopped');
	});
    },
    on_finish: function(data){
      data.Heard = HeardSentence
      annyang.abort()
      
    },
  }
  var trials = {
      timeline: [RecallRequest01],
      timeline_variables: InputSentences,
      randomize_order: true,
      repetitions: 1,
    }
  timeline.push(trials)
