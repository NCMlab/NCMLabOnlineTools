var TEST_Spoken = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed70/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Spoken',
	RecogDuration: 10, // seconds
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: true,
	RecordAUDIO: true,
}


add('TEST_Spoken', function(){ WordRecog_parameters = TEST_Spoken});