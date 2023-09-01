var TEST_Spoken = {
	FolderName: 'RAVLTSet001/',
	WordList: 'TEST',
	FileExtension: '.wav',
	NBlocks: 4,
	BListFlag: false,
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Spoken',
	RecallDuration: 60, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	RecognitionFlag: true,
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: true,
}


add('TEST_Spoken', function(){ WordRecall_parameters = TEST_Spoken});