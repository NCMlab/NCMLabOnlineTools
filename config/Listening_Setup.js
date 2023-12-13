
var Listening_001 = {
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
	WelcomeSpoken: false,
	AskForNotes: false,
	InstructionsSpoken: false,
	NumberOfTrials: 5
}


var Listening_002 = {
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true, 
	WelcomeSpoken: false,
	AskForNotes: false,
	InstructionsSpoken: false,
	NumberOfTrials: 5
}


add('Listening_001', function(){ parameters = Listening_001});
add('Listening_002', function(){ parameters = Listening_002});
