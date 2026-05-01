var WordRecog_Default = {
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
	RecordAUDIO: true,
}

var RAVLT_WordRecog_Spoken = {
	FolderName: 'Set001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Spoken',
	RecogDuration: 10, // seconds
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: false,
	ShowInstructions: true,
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: true,
}

var RAVLT_WordRecog_Manual = {
	FolderName: 'Set001/',
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

add('RAVLT_WordRecog_Spoken', function(){ parameters = RAVLT_WordRecog_Spoken});
add('RAVLT_WordRecog_Manual', function(){ parameters = RAVLT_WordRecog_Manual});

var CERAD_WordRecog_Spoken = {
	FolderName: 'Set001/',
	WordList: 'CERAD',
	FileExtension: '.wav',
	AudioPresentation: false,
	VisualPresentation: true,
	RecallType:'Manual',
	RecogDuration: 10, // seconds
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: true,
}
add('CERAD_WordRecog_Spoken', function(){ parameters = CERAD_WordRecog_Spoken});

var Hopkins_WordRecog_Spoken = {
	FolderName: 'Set001/',
	WordList: 'Hopkins',
	FileExtension: '.wav',
	AudioPresentation: false,
	VisualPresentation: true,
	RecallType:'Manual',
	RecogDuration: 10, // seconds
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: true,
}
add('Hopkins_WordRecog_Spoken', function(){ parameters = Hopkins_WordRecog_Spoken});

var WordRecog_Spoken_002 = {
	FolderName: 'RAVLT_fr_FR-Neural2-A_Speed100/',
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
	RecordAUDIO: true,
}
add('WordRecog_Spoken_002', function(){ parameters = WordRecog_Spoken_002});


var WordRecog_Spoken_003 = {
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
add('WordRecog_Spoken_003', function(){ parameters = WordRecog_Spoken_003});
