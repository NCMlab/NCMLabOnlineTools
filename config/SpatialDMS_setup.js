// General parameters used by all versions of the DFMS task
// The following letter list does not include vowels nor w. W is removed because it is the only two syllable 
// letter in the English language. During subvocal rehearsal W therefore takes two syllables to rehearse.
// The letter ELL is in included as a stimulus letter but NOT a probe letter. This is done so that proactive
// interference can be minimized between consecutive trials with a load of 9 letters. Without ELL as a stimulus
// there are simply not enough available letters. ELL is not allowed to be a probe leter because it is difficult 
// to differentiate it from ONE and EYE.

var GridCount = 6 // Number of circles to have on each row
var GridSize = 52*GridCount + 1 // The size of the grid for which the circles on on
var CircleSize = (GridSize*2)/GridCount // The circle size so that they are all just touching
//var OffSet = range(-GridSize+int(CircleSize/2),GridSize-int(CircleSize/2),int(CircleSize))
var MaskLocations


// the following is used for scoring and allows the keyboard choices to be whatever you would like
// This response mapping correspopnds to the order of the above KeyboardChoices
var ResponseMapping = [1, 0];

// This is the time between blocks. Note that between each block of trials there
// is also the 3-2-1 countdown. Therefore, the full interblock interval is this value PLUS 
// the countdown time, which is 3 seconds.
var InterBlockTime = 3000
// TO DO ++++++
// This is a delay component for use after instructions and before the first Block 
var WaitOnTime = 5000

var ProbeColor = 'blue'

// ===================================================
// BLOCK BASED PARAMETERS
// How many trials per block
var NTrialsPerBlock = 6
// The number of blocks to run
var NumberOfBlocks = 5

/* This is for rapid testing
MaxTrials = 15
StimOnTime = 500
RetOnTime = 500
*/

// The following are stimulus lists that are carefully selected to be counterbalanced for 
// probe type and to have six trials per block and minimal proactive interference from 
// previous trials


SpatialDMS_Default = {
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: false,
	ShowInstructions: true,
	MaxTrials: 40,
	NPracticeTrials: 4,
	MaxReversals: 15,
	StartValue: 1,
	MinValue: 1,
	MaxValue: 20,
	StepSize: 1,
	NUp: 3,
	NDown: 1,
	FastStart: true,
	MaskOnTime: 300,
	StimOnTime: 2500,
	RetOnTime: 3200,
	ProbeOnTime: 2500,
// This is the intertrial interval. 
	ITITime: 1000,
}

SpatialDMS_Adaptive = {
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: false,
	ShowInstructions: true,
	MaxTrials: 40,
	NPracticeTrials: 4,
	MaxReversals: 15,
	StartValue: 1,
	MinValue: 1,
	MaxValue: 20,
	StepSize: 1,
	NUp: 3,
	NDown: 1,
	FastStart: true,
	MaskOnTime: 300,
	StimOnTime: 2500,
	RetOnTime: 3200,
	ProbeOnTime: 2500,
// This is the intertrial interval. 
	ITITime: 1000
}

add('SpatialDMS_Adaptive', function(){ parameters = SpatialDMS_Adaptive});

SpatialDMS_AdaptiveSHORT = {
	ShowWelcome: false,
	WelcomeSpoken: false,
	ShowThankYou: false,
	ShowInstructions: true,
	MaxTrials: 4,
	NPracticeTrials: 2,
	MaxReversals: 15,
	StartValue: 1,
	MinValue: 1,
	MaxValue: 20,
	StepSize: 1,
	NUp: 3,
	NDown: 1,
	FastStart: true,
	MaskOnTime: 300,
	StimOnTime: 2500,
	RetOnTime: 3200,
	ProbeOnTime: 2500,
// This is the intertrial interval. 
	ITITime: 1000,
	ButtonLabels: ['Yes','No'],
	KeyboardValues: ['arrowleft','arrowright'],
	KeyboardMappings: [true,false]

}

add('SpatialDMS_AdaptiveSHORT', function(){ parameters = SpatialDMS_AdaptiveSHORT});

SpatialDMS_Adaptive_002 = {
	ShowWelcome: true,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	MaxTrials: 40,
	NPracticeTrials: 4,
	MaxReversals: 15,
	StartValue: 1,
	MinValue: 1,
	MaxValue: 20,
	StepSize: 1,
	NUp: 3,
	NDown: 1,
	FastStart: true,
	MaskOnTime: 300,
	StimOnTime: 2500,
	RetOnTime: 3200,
	ProbeOnTime: 2500,
// This is the intertrial interval. 
	ITITime: 1000,
	ButtonLabels: ['Yes','No'],
	KeyboardValues: ['arrowleft','arrowright'],
	KeyboardMappings: [true,false]

}

add('SpatialDMS_Adaptive_002', function(){ parameters = SpatialDMS_Adaptive_002});

SpatialDMS_Adaptive_003 = {
	ShowWelcome: true,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	MaxTrials: 4,
	NPracticeTrials: 4,
	MaxReversals: 15,
	StartValue: 1,
	MinValue: 1,
	MaxValue: 20,
	StepSize: 1,
	NUp: 3,
	NDown: 1,
	FastStart: true,
	MaskOnTime: 300,
	StimOnTime: 2500,
	RetOnTime: 3200,
	ProbeOnTime: 2500,
// This is the intertrial interval. 
	ITITime: 1000,
	ButtonLabels: ['Yes','No'],
	KeyboardValues: ['arrowleft','arrowright'],
	KeyboardMappings: [true,false]

}

add('SpatialDMS_Adaptive_003', function(){ parameters = SpatialDMS_Adaptive_003});

SpatialDMS_Adaptive_003B = {
	ShowWelcome: true,
	WelcomeSpoken: false,
	ShowThankYou: true,
	ShowInstructions: true,
	MaxTrials: 4,
	NPracticeTrials: 1,
	MaxReversals: 15,
	StartValue: 1,
	MinValue: 1,
	MaxValue: 20,
	StepSize: 1,
	NUp: 3,
	NDown: 1,
	FastStart: true,
	MaskOnTime: 300,
	StimOnTime: 250,
	RetOnTime: 320,
	ProbeOnTime: 250,
// This is the intertrial interval. 
	ITITime: 100,
	ButtonLabels: ['Yes','No'],
	KeyboardValues: ['arrowleft','arrowright'],
	KeyboardMappings: [true,false]
}

add('SpatialDMS_Adaptive_003B', function(){ parameters = SpatialDMS_Adaptive_003B});