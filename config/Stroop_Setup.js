/* If the response choice get modified here they also need to be modified below */
var ResponseChoices = ['v','b','n','m',27]

var ResponseButtons = ['Red','Yellow','Green','Blue']

//var FixationLength = 500; // This is in milliseconds

var ColorPracticeRepeats = 1
var WordPracticeRepeats = 1 
var ColorWordPracticeRepeats = 1

// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var ColorTestRepeats = 4
var ColorTestQuestionTypes = 4
// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var WordTestRepeats = 4
var WordTestQuestionTypes = 4
// Since there are 16 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 4
var ColorWordTestQuestionTypes = 16


// Implement with an ITI or without
// Try to mimic teh paper and pencil version using a 100 trials and a time limit

var Stroop_Setup = {ColorPracticeRepeats: 1,
	WordPracticeRepeats: 1,
	ColorWordPracticeRepeats: 1,
	ColorTestRepeats = 4,
	ColorTestQuestionTypes = 4,
	WordTestRepeats: 4,
	WordTestQuestionTypes: 4,
	ColorWordTestRepeats: 4,
	ColorWordTestQuestionTypes: 16
}