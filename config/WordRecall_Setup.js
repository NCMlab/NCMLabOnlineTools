// Rey auditory verbal learning test
var ResponseButtons = [1,0]
// The time each word is presented on the screen for
// The amount of time to show a crosshair on the screen between each word
var FixationTimeBetweenWords = 200 // milliseconds



var RAVLT_Default = {
	FolderName: 'RAVLTSet001/',
	FileExtension: '.wav',
	NBlocks:2,
	RecallType:'Manual',
	RecallDuration: 60, // seconds
	TimePerWord: 500, // milliseconds
}

var RAVLT_001 = {
	FolderName: 'RAVLTSet001/',
	FileExtension: '.wav',
	NBlocks:3,
	RecallType:'Spoken',
	RecallDuration: 60, // seconds
	TimePerWord: 500, // milliseconds
}

var FaCE_Default = {
	FolderName: 'FaCESet001/',
	FileExtension: '.wav',
	NBlocks:2,
	RecallType:'Manual',
	RecallDuration: 120, // seconds
	TimePerWord: 500, // milliseconds
}


add('RAVLT_Default', function(){ RAVLT_parameters = RAVLT_Default});
add('RAVLT_001', function(){ RAVLT_parameters = RAVLT_001});