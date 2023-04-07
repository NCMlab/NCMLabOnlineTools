// Rey auditory verbal learning test
var ResponseButtons = [1,0]
// The time each word is presented on the screen for
// The amount of time to show a crosshair on the screen between each word
var FixationTimeBetweenWords = 200 // milliseconds



var RAVLT_Default = {
	WordList: 'RAVLT',
	FolderName: 'RAVLTSet001/',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: true, // Check to see if there is a second set of words
	RecallType: 'Manual',
	RecallDuration: 60, // seconds
	TimePerWord: 500, // milliseconds
	DelayedRecallFlag: false,
}

var RAVLT_001 = {
	FolderName: 'RAVLTSet001/',
	FileExtension: '.wav',
	NBlocks: 3,
	BListFlag: true,
	RecallType:'Spoken',
	RecallDuration: 60, // seconds
	TimePerWord: 500, // milliseconds
	DelayedRecallFlag: false,
}

var FaCE_Default = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	TimePerWord: 1000, // milliseconds
	DelayedRecallFlag: false,
}
var FaCE_Default_Delayed = {
	FolderName: 'FaCE_en-US-Neural2-F_Speed70/',
	FileExtension: '.wav',
	NBlocks: 2,
	BListFlag: false,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	TimePerWord: 1000, // milliseconds
	DelayedRecallFlag: true,
}


add('RAVLT_Default', function(){ WordRecall_parameters = RAVLT_Default});
add('RAVLT_001', function(){ WordRecall_parameters = RAVLT_001});
add('FaCE_Default', function(){ WordRecall_parameters = FaCE_Default});
add('FaCE_Default_Delayed', function(){ WordRecall_parameters = FaCE_Default_Delayed});