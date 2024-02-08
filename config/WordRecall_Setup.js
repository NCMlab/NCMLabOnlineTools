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
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, // not implemented
	AskForNotes: false,
	RecordAUDIO: false,
}

var RAVLT_Spoken_Immediate = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	//FolderName: 'RAVLT_en_GB-Neural2-B_Speed70/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 5,
	BListFlag: true, // Check to see if there is a second set of words
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType: 'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 8, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	WelcomeSpoken: false,
	WelcomeAudio: 'assets/SoundFiles/Instructions/Welcome_WordRecall.wav',
	ShowThankYou: false,
	ShowInstructions: true, 
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: true
}

var RAVLT_Spoken_Immediate_002 = {
	FolderName: 'RAVLT_fr_FR-Neural2-A_Speed100/',
	//FolderName: 'RAVLT_en_GB-Neural2-B_Speed70/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: true, // Check to see if there is a second set of words
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType: 'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 8, // seconds
	TimePerWord: 150, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: true,
	WelcomeSpoken: false,
	WelcomeAudio: 'assets/SoundFiles/Instructions/Welcome_WordRecall.wav',
	ShowThankYou: true,
	ShowInstructions: true, 
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: true
}


RAVLT_Spoken_Immediate.Instructions01Audio = []
RAVLT_Spoken_Immediate.Instructions01Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions01A.wav')
RAVLT_Spoken_Immediate.Instructions01Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions01B.wav')
RAVLT_Spoken_Immediate.Instructions01Time = []
RAVLT_Spoken_Immediate.Instructions01Time.push(10000)
RAVLT_Spoken_Immediate.Instructions01Time.push(8000)

RAVLT_Spoken_Immediate.Instructions02Audio = []
RAVLT_Spoken_Immediate.Instructions02Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions02A.wav')
RAVLT_Spoken_Immediate.Instructions02Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions02B.wav')
RAVLT_Spoken_Immediate.Instructions02Time = []
RAVLT_Spoken_Immediate.Instructions02Time.push(10000)
RAVLT_Spoken_Immediate.Instructions02Time.push(8000)

RAVLT_Spoken_Immediate.Instructions03Audio = []
RAVLT_Spoken_Immediate.Instructions03Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions03A.wav')
RAVLT_Spoken_Immediate.Instructions03Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions03B.wav')
RAVLT_Spoken_Immediate.Instructions03Time = []
RAVLT_Spoken_Immediate.Instructions03Time.push(10000)
RAVLT_Spoken_Immediate.Instructions03Time.push(8000)

RAVLT_Spoken_Immediate.Instructions04Audio = []
RAVLT_Spoken_Immediate.Instructions04Audio.push('assets/SoundFiles/Instructions/WordRecall_Instructions04.wav')
RAVLT_Spoken_Immediate.Instructions04Time = []
RAVLT_Spoken_Immediate.Instructions04Time.push(10000)


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

var RAVLT_Spoken_Delayed = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: false, // Check to see if there is a second set of words
	RecallType: 'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 10,
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: true,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
}

var RAVLT_Spoken_Delayed_002 = {
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: false, // Check to see if there is a second set of words
	RecallType: 'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 10,
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: true,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
}

var RAVLT_001 = {
	FolderName: 'RAVLTSet001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 5,
	BListFlag: true,
	RecallType:'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 10,
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: true,
}

var FaCE_Default = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	WordList: 'FaCE',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	DelayBeforeShowingDoneButton: 10,
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
	DelayBeforeShowingDoneButton: 10,
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
	DelayBeforeShowingDoneButton: 10,
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
	DelayBeforeShowingDoneButton: 10,
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
	DelayBeforeShowingDoneButton: 10,
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
	DelayBeforeShowingDoneButton: 10,
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	RecognitionFlag: true,
	ShowWelcome: false,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: true,
}


add('RAVLT_Manual_Immediate', function(){ parameters = RAVLT_Manual_Immediate});
add('RAVLT_Spoken_Immediate', function(){ parameters = RAVLT_Spoken_Immediate});
add('RAVLT_Spoken_Immediate_002', function(){ parameters = RAVLT_Spoken_Immediate_002});
add('RAVLT_Manual_Delayed', function(){ parameters = RAVLT_Manual_Delayed});
add('RAVLT_Spoken_Delayed', function(){ parameters = RAVLT_Spoken_Delayed});
add('RAVLT_Spoken_Delayed_002', function(){ parameters = RAVLT_Spoken_Delayed_002});

add('FaCE_Default', function(){ parameters = FaCE_Default});
add('FaCE_Default_Delayed', function(){ parameters = FaCE_Default_Delayed});
add('FaCE_Default_FR', function(){ parameters = FaCE_Default_FR});
add('FaCE_Spoken', function(){ parameters = FaCE_Spoken});
add('FaCE_Spoken_FR', function(){ parameters = FaCE_Spoken_FR});
add('TEST_Spoken', function(){ parameters = TEST_Spoken});