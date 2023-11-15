var TEST_Spoken = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Spoken',
	RecogDuration: 10, // seconds
	ShowWelcome: true,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	InstructionsSpoken: false,
	AskForNotes: true,
	RecordAUDIO: true,
}


add('TEST_Spoken', function(){ parameters = TEST_Spoken});