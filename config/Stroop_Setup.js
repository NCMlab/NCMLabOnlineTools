/* If the response choice get modified here they also need to be modified below */
var ResponseChoices = ['v','b','n','m',27]
var ResponseButtons = ['Red','Yellow','Green','Blue']

// Implement with an ITI or without
// Try to mimic teh paper and pencil version using a 100 trials and a time limit
/*
if ( parameters == 'Stroop_Default' ) {
	var ColorPracticeRepeats = 1
	var WordPracticeRepeats = 1
	var ColorWordPracticeRepeats = 1
	var ColorTestRepeats = 4
	var ColorTestQuestionTypes = 4
	var WordTestRepeats = 4
	var WordTestQuestionTypes = 4
	var ColorWordTestRepeats = 4
	var ColorWordTestQuestionTypes = 16
}

else if ( parameters == 'Stroop_001' ) {
	var ColorPracticeRepeats = 5
	var WordPracticeRepeats = 5
	var ColorWordPracticeRepeats = 5
	var ColorTestRepeats = 4
	var ColorTestQuestionTypes = 4
	var WordTestRepeats = 4
	var WordTestQuestionTypes = 4
	var ColorWordTestRepeats = 4
	var ColorWordTestQuestionTypes = 16
}
*/
	var ColorPracticeRepeats = 5
	var WordPracticeRepeats = 5
	var ColorWordPracticeRepeats = 5
	var ColorTestRepeats = 4
	var ColorTestQuestionTypes = 4
	var WordTestRepeats = 4
	var WordTestQuestionTypes = 4
	var ColorWordTestRepeats = 4
	var ColorWordTestQuestionTypes = 16

var Stroop_Default = {
	ColorPracticeRepeats:1,
	WordPracticeRepeats:1,
}

var Stroop_001 = {
	ColorPracticeRepeats:7,
	WordPracticeRepeats:2,
}