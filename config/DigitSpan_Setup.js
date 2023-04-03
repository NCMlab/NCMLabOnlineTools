// ===================================================
// ADAPTIVE VERSION PARAMETERS
var FDSCurrent = 3 // value to start at
var BDSCurrent = 2 // value to start at
var MinValue = 1 // minimum value possible
var MaxValue = 30 // maximum value possible
var StepSize = 1 // step size
var NUp = 2 // number of required correct answers in a row before increasing load
var NDown = 1 // number of required incorrect answers in a row before decreasing load
var FastStart = true // At the bginning increase load after each correct response until the 
				   	// first incorrect response is made
var MaxReversals = 5 // Max number of reversals can be used as a stopping criteria
var MaxTime = 420 //the amount of time for the experiment can also be used as a stopping criteria
 



// ===================================================
var TimeGapBetweenAudioLetters = 500 // milliseconds
var BDSMaxTrials = 14
var FDSMaxTrials = 14

// There should also be the option of two incorrect in a row
// Or just a single trial with a given length
Parameters = {
	Current: 3,
	MinValue: 1,
	MaxValue: 30,
	StepSize: 1,
	NUp: 2,
	NDown: 1,
	FastStart: true,
	MaxReversals: 50,
	MaxTime: 420,
	MaxTrials: 14
}

var DigitSpan_Forward_Adaptive_14 = {
	instructionText: ForwardAudioInstructions,
	direction: 'forward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'staircase',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
}


Parameters = {
	Current: 3,
	MaxValue: 30,
	StepSize: 1,
	Nerrors: 2,
	MaxTrials: 14
}

var DigitSpan_Forward_TwoErrors = {
	instructionText: ForwardAudioInstructions,
	direction: 'forward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'numberErrors',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
}


Parameters = {
	Current: 5
}
var DigitSpan_OneTrial_Load5 = {
	instructionText: ForwardAudioInstructions,
	direction: 'forward',
	StimulusMode: 'audio',
	DeliveryMethod: 'fixed',
	Parameters: Parameters,	
}

add('DigitSpan_Forward_Adaptive_14', function(){ DigitSpan_parameters = DigitSpan_Forward_Adaptive_14});
add('DigitSpan_Forward_TwoErrors', function(){ DigitSpan_parameters = DigitSpan_Forward_TwoErrors});
add('DigitSpan_OneTrial_Load5', function(){ DigitSpan_parameters = DigitSpan_OneTrial_Load5});


