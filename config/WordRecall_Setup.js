// Rey auditory verbal learning test
var ResponseButtons = [1,0]
// The time each word is presented on the screen for
// The amount of time to show a crosshair on the screen between each word
var FixationTimeBetweenWords = 200 // milliseconds



var RAVLT_Manual_Immediate = {
	FolderName: 'RAVLTSet001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 6,
	BListFlag: true, // Check to see if there is a second set of words
	RecallType: 'Manual',
	RecallDuration: 60, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true, // not implemented
	AskForNotes: true,
	RecordAUDIO: false,
}

var RAVLT_Spoken_Immediate = {
	FolderName: 'RAVLTSet001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 6,
	BListFlag: true, // Check to see if there is a second set of words
	RecallType: 'Spoken',
	RecallDuration: 60, // seconds
	TimePerWord: 500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true, // not implemented
	AskForNotes: true,
	RecordAUDIO: false,
}

var RAVLT_Manual_Delayed = {
	FolderName: 'RAVLTSet001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: true, // Check to see if there is a second set of words
	RecallType: 'Manual',
	RecallDuration: 60, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: true,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,
}

var RAVLT_001 = {
	FolderName: 'RAVLTSet001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 5,
	BListFlag: true,
	RecallType:'Spoken',
	RecallDuration: 60, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,
}

var FaCE_Default = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	WordList: 'FaCE',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,
}

var FaCE_Default_FR = {
	FolderName: 'FaCE_fr-FR-Neural2-A_Speed70/',
	WordList: 'FaCE',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: false,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,

}

var FaCE_Default_Delayed = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	WordList: 'FaCE',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: true,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,

}
var FaCE_Spoken = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	WordList: 'FaCE',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Spoken',
	RecallDuration: 120, // seconds
	TimePerWord: 500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,
}
var FaCE_Spoken_FR = {
	FolderName: 'FaCE_fr-FR-Neural2-A_Speed70/',
	WordList: 'FaCE',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Spoken',
	RecallDuration: 120, // seconds
	TimePerWord: 500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: false,
}

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
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: true,
}


add('RAVLT_Manual_Immediate', function(){ WordRecall_parameters = RAVLT_Manual_Immediate});
add('RAVLT_Spoken_Immediate', function(){ WordRecall_parameters = RAVLT_Spoken_Immediate});
add('RAVLT_Manual_Delayed', function(){ WordRecall_parameters = RAVLT_Manual_Delayed});
add('FaCE_Default', function(){ WordRecall_parameters = FaCE_Default});
add('FaCE_Default_Delayed', function(){ WordRecall_parameters = FaCE_Default_Delayed});
add('FaCE_Default_FR', function(){ WordRecall_parameters = FaCE_Default_FR});
add('FaCE_Spoken', function(){ WordRecall_parameters = FaCE_Spoken});
add('FaCE_Spoken_FR', function(){ WordRecall_parameters = FaCE_Spoken_FR});
add('TEST_Spoken', function(){ WordRecall_parameters = TEST_Spoken});