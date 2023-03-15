/* If the response choice get modified here they also need to be modified below */
var ResponseChoices = ['v','b','n','m',27]
var ResponseButtons = ['Red','Yellow','Green','Blue']


var Stroop_Default = {
	ColorPracticeRepeats:1,
	WordPracticeRepeats:1,
	ColorWordPracticeRepeats:1,
	ColorTestRepeats:1,
	ColorTestQuestionTypes:4,
	WordTestRepeats:1,
	WordTestQuestionTypes:4,
	ColorWordTestRepeats:1,
	ColorWordTestQuestionTypes:16,
	ITI_Design: function(){return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];},
	showTime: true,
}

var Stroop_001 = {
	ColorPracticeRepeats:2,
	WordPracticeRepeats:2,
	ColorWordPracticeRepeats:2,
	ColorTestRepeats:2,
	ColorTestQuestionTypes:4,
	WordTestRepeats:2,
	WordTestQuestionTypes:4,
	ColorWordTestRepeats:2,
	ColorWordTestQuestionTypes:16,
	ITI_Design: 100,
	showTime: true,
}

add('Stroop_Default', function(){ Stroop_parameters = Stroop_Default});
add('Stroop_001', function(){ Stroop_parameters = Stroop_001});

// Fixed ITI --> ITI_Design: 100
// random ITI --> 'function(){return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];}