var TEST_Spoken = {
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


add('TEST_Spoken', function(){ parameters = TEST_Spoken});