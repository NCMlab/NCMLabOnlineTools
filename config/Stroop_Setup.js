/* If the response choice get modified here they also need to be modified below */
// The following is not used. 
var ResponseChoices = ['v','b','n','m',27]

//These are the buttons shown on the screeen which the user sees and uses.
// They are not color coded, they just have the words
var ResponseButtons = ['Red','Yellow','Green','Blue']
var ColorTestQuestionTypes = 4
var ColorTestQuestionTypes = 4
var ColorWordTestQuestionTypes = 16

var Stroop_Default = {
	ColorPracticeRepeats:1,
	WordPracticeRepeats:1,
	ColorWordPracticeRepeats:1,
	ColorTestRepeats:2, // This is ignored if an allowedTime is provided
	WordTestRepeats:1,
	ColorWordTestRepeats:1,
	ITI_Range: [250, 500, 750, 1000, 1250, 1500, 1750, 2000],// only used if ITI duration < 0
	ITI_Duration: -99,
	AllowedTime: -99, // in seconds
  }

var Stroop_001 = {
	ColorPracticeRepeats:2,
	WordPracticeRepeats:2,
	ColorWordPracticeRepeats:2,
	ColorTestRepeats:2,
	WordTestRepeats:2,
	ColorWordTestRepeats:2,
	ITI_Range: [],
	ITI_Duration: 100,
	AllowedTime: -99, // in seconds
}

var Stroop_Victoria = {
	ColorPracticeRepeats:2,
	WordPracticeRepeats:2,
	ColorWordPracticeRepeats:1,
	ColorTestRepeats:6,
	WordTestRepeats:6,
	ColorWordTestRepeats:2,
	ITI_Range: [],
	ITI_Duration: 100, 
	AllowedTime: 45, // in seconds. If a positive value is provided 
	// then blocks of trials are presented until the timer runs out
}

add('Stroop_Default', function(){ Stroop_parameters = Stroop_Default});
add('Stroop_001', function(){ Stroop_parameters = Stroop_001});
add('Stroop_Victoria', function(){ Stroop_parameters = Stroop_Victoria});

// Fixed ITI --> ITI_Design: 100
// random ITI --> 'function(){return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];}