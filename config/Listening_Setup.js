
var Listening_001 = {
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
	WelcomeSpoken: false,
	AskForNotes: false,
	InstructionsSpoken: false,
	NumberOfTrials: 5,
	FolderOfAudioFiles: 'assets/SoundFiles/AudioTest/en_US-Neural2-F_Speed100/',
	AudioFileType: '.wav'
}

var Listening_002 = {
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
	WelcomeSpoken: false,
	AskForNotes: false,
	InstructionsSpoken: false,
	NumberOfTrials: 5,
	FolderOfAudioFiles: 'assets/SoundFiles/AudioTest/fr_FR-Neural2-F_Speed100/',
	AudioFileType: '.wav'
}

add('Listening_001', function(){ parameters = Listening_001});
add('Listening_002', function(){ parameters = Listening_002});
