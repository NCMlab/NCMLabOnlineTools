var WordRecog_Spoken = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Manual',
	RecogDuration: 10, // seconds
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: false,
	ShowInstructions: true,
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: false,
}


add('WordRecog_Spoken', function(){ parameters = WordRecog_Spoken});

var WordRecog_Spoken_002 = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Manual',
	RecogDuration: 10, // seconds
	ShowWelcome: true,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: false,
}


add('WordRecog_Spoken_002', function(){ parameters = WordRecog_Spoken_002});
