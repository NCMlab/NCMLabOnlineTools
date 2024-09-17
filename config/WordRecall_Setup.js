// Rey auditory verbal learning test
var ResponseButtons = [1,0]
// The time each word is presented on the screen for
// The amount of time to show a crosshair on the screen between each word
var FixationTimeBetweenWords = 200 // milliseconds



var RAVLT_Manual_Immediate = {
	FolderName: 'RAVLTSet001/',
	WordList: 'RAVLT',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: true, // Check to see if there is a second set of words
	RecallType: 'Manual',
	RecallDuration: 60, // seconds
	TimePerWord: 150, // milliseconds
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
	WordList: 'EN_RAVLT',
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
	WordList: 'FR_RAVLT',
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
	RecallType: 'Manual', // Spoken
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
	WordList: 'EN_RAVLT',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: false, // Check to see if there is a second set of words
	RecallType: 'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 10,
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: true,
	ShowWelcome: false,
	WelcomeSpoken: false,
	WelcomeAudio: 'assets/SoundFiles/Instructions/Welcome_WordRecall.wav',
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	RecordAUDIO: true
}

var RAVLT_Spoken_Delayed_002 = {
	FolderName: 'RAVLT_fr_FR-Neural2-A_Speed100/',
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

var FaCE_Immediate_Spoken_VerA_EN = {
	// specify the word list to use
	WordList: 'EN_FaCE_VerA',
	// Specify the folder of audio files to use. This allows for presentation of different voices
	// without the need to change the word list file
	FolderName: 'FaCE/EN/EN-US-Neural2-F/',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false, // Check to see if there is a second set of words
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType: 'Spoken',
	RecallDuration: 120, // seconds
	DelayBeforeShowingDoneButton: 3, // seconds
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

let FaCE_Immediate_Spoken_VerB_EN = Object.assign({}, FaCE_Immediate_Spoken_VerA_EN)
	FaCE_Immediate_Spoken_VerB_EN.WordList = 'EN_FaCE_VerB'
let FaCE_Immediate_Spoken_Training_EN = Object.assign({}, FaCE_Immediate_Spoken_VerA_EN)
	FaCE_Immediate_Spoken_Training_EN.WordList = 'EN_FaCE_Training'
let FaCE_Delayed_Spoken_VerA_EN = Object.assign({}, FaCE_Immediate_Spoken_VerA_EN)
	FaCE_Delayed_Spoken_VerA_EN.DelayedRecallFlag = true
let FaCE_Delayed_Spoken_VerB_EN = Object.assign({}, FaCE_Immediate_Spoken_VerB_EN)
	FaCE_Delayed_Spoken_VerB_EN.DelayedRecallFlag = true
let FaCE_Delayed_Spoken_Training_EN = Object.assign({}, FaCE_Immediate_Spoken_Training_EN)
	FaCE_Delayed_Spoken_Training_EN.DelayedRecallFlag = true


let FaCE_Immediate_Manual_VerA_EN = Object.assign({}, FaCE_Immediate_Spoken_VerA_EN)
	FaCE_Immediate_Manual_VerA_EN.RecallType = 'Manual'
let FaCE_Immediate_Manual_VerB_EN = Object.assign({}, FaCE_Immediate_Spoken_VerB_EN)
	FaCE_Immediate_Manual_VerB_EN.RecallType = 'Manual'
let FaCE_Immediate_Manual_Training_EN = Object.assign({}, FaCE_Immediate_Spoken_Training_EN)
	FaCE_Immediate_Manual_Training_EN.RecallType = 'Manual'
	FaCE_Immediate_Manual_Training_EN.BListFlag = false

let FaCE_Delayed_Manual_Training_EN = Object.assign({}, FaCE_Immediate_Manual_Training_EN)
	FaCE_Delayed_Manual_Training_EN.DelayedRecallFlag = true
let FaCE_Delayed_Manual_VerA_EN = Object.assign({}, FaCE_Immediate_Manual_VerA_EN)
	FaCE_Delayed_Manual_VerA_EN.DelayedRecallFlag = true
let FaCE_Delayed_Manual_VerB_EN = Object.assign({}, FaCE_Immediate_Manual_VerB_EN)
	FaCE_Delayed_Manual_VerB_EN.DelayedRecallFlag = true
	

var FaCE_Delayed_EN = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	WordList: 'FaCE',
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
	RecordAUDIO: true
}


var FaCE_Delayed_Training_EN = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	WordList: 'FaCE_Training',
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
	RecordAUDIO: true
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
	FolderName: 'RAVLT_en_US-Neural2-F_Speed100/',
	WordList: 'TEST',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: false,
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType:'Spoken',
	RecallDuration: 60, // seconds
	DelayBeforeShowingDoneButton: 2,
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

add('FaCE_Immediate_Spoken_Training_EN', function(){ parameters = FaCE_Immediate_Spoken_Training_EN});
add('FaCE_Immediate_Spoken_VerA_EN', function(){ parameters = FaCE_Immediate_Spoken_VerA_EN});
add('FaCE_Immediate_Spoken_VerB_EN', function(){ parameters = FaCE_Immediate_Spoken_VerB_EN});

add('FaCE_Immediate_Manual_Training_EN', function(){ parameters = FaCE_Immediate_Manual_Training_EN});
add('FaCE_Immediate_Manual_VerA_EN', function(){ parameters = FaCE_Immediate_Manual_VerA_EN});
add('FaCE_Immediate_Manual_VerB_EN', function(){ parameters = FaCE_Immediate_Manual_VerB_EN});

add('FaCE_Delayed_Spoken_Training_EN', function(){ parameters = FaCE_Delayed_Spoken_Training_EN});
add('FaCE_Delayed_Spoken_VerA_EN', function(){ parameters = FaCE_Delayed_Spoken_VerA_EN});
add('FaCE_Delayed_Spoken_VerB_EN', function(){ parameters = FaCE_Delayed_Spoken_VerB_EN});

add('FaCE_Delayed_Manual_Training_EN', function(){ parameters = FaCE_Delayed_Manual_Training_EN});
add('FaCE_Delayed_Manual_VerA_EN', function(){ parameters = FaCE_Delayed_Manual_VerA_EN});
add('FaCE_Delayed_Manual_VerB_EN', function(){ parameters = FaCE_Delayed_Manual_VerB_EN});



// FIX THE MANUAL SCORING OF WORD RECALL



var DemoEN = {
	// specify the word list to use
	WordList: 'EN_Demo',
	// Specify the folder of audio files to use. This allows for presentation of different voices
	// without the need to change the word list file
	FolderName: 'Demo/EN/EN-US-Neural2-F/',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false, // Check to see if there is a second set of words
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType: 'Spoken',
	RecallDuration: 120, // seconds
	DelayBeforeShowingDoneButton: 3, // seconds
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
add('DemoEN', function(){ parameters = DemoEN});

var DemoENDelayed = {
	// specify the word list to use
	WordList: 'EN_Demo',
	// Specify the folder of audio files to use. This allows for presentation of different voices
	// without the need to change the word list file
	FolderName: 'Demo/EN/EN-US-Neural2-F/',
	FileExtension: '.wav',
	NBlocks: 1,
	BListFlag: false, // Check to see if there is a second set of words
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType: 'Spoken',
	RecallDuration: 120, // seconds
	DelayBeforeShowingDoneButton: 3, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: true,
	ShowWelcome: false,
	WelcomeSpoken: false,
	WelcomeAudio: 'assets/SoundFiles/Instructions/Welcome_WordRecall.wav',
	ShowThankYou: false,
	ShowInstructions: true, 
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: true
}
add('DemoENDelayed', function(){ parameters = DemoENDelayed});


var DemoENManual = {
	// specify the word list to use
	WordList: 'EN_Demo',
	// Specify the folder of audio files to use. This allows for presentation of different voices
	// without the need to change the word list file
	FolderName: 'Demo/EN/EN-US-Neural2-F/',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false, // Check to see if there is a second set of words
	AudioPresentation: true,
	VisualPresentation: true,
	RecallType: 'Manual',
	RecallDuration: 120, // seconds
	DelayBeforeShowingDoneButton: 3, // seconds
	TimePerWord: 1500, // milliseconds
	DelayedRecallFlag: false,
	ShowWelcome: true,
	WelcomeSpoken: true,
	WelcomeAudio: 'assets/SoundFiles/Instructions/Welcome_WordRecall.wav',
	ShowThankYou: false,
	ShowInstructions: true, 
	InstructionsSpoken: false,
	Instructions01Time: 10,
	AskForNotes: false,
	RecordAUDIO: true
}
add('DemoENManual', function(){ parameters = DemoENManual});
