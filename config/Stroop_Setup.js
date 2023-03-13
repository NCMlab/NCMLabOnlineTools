/* If the response choice get modified here they also need to be modified below */
var ResponseChoices = ['v','b','n','m',27]
var ResponseButtons = ['Red','Yellow','Green','Blue']

// Implement with an ITI or without
// Try to mimic teh paper and pencil version using a 100 trials and a time limit

var Stroop_Default = {ColorPracticeRepeats: 1,
	WordPracticeRepeats: 1,
	ColorWordPracticeRepeats: 1,
	ColorTestRepeats: 4,
	ColorTestQuestionTypes: 4,
	WordTestRepeats: 4,
	WordTestQuestionTypes: 4,
	ColorWordTestRepeats: 4,
	ColorWordTestQuestionTypes: 16
}

var Stroop_001 = {ColorPracticeRepeats: 1,
	WordPracticeRepeats: 1,
	ColorWordPracticeRepeats: 1,
	ColorTestRepeats: 4,
	ColorTestQuestionTypes: 4,
	WordTestRepeats: 4,
	WordTestQuestionTypes: 4,
	ColorWordTestRepeats: 4,
	ColorWordTestQuestionTypes: 16
}