Parameters = {
	Current: 3, // value to start at
	MinValue: 1, // minimum value possible
	MaxValue: 30, // maximum value possible
	StepSize: 1, // step size
	NUp: 2, // number of required correct answers in a row before increasing load
	NDown: 1, // number of required incorrect answers in a row before decreasing load
	FastStart: true, // At the bginning increase load after each correct response until the 
	// first incorrect response is made
	MaxReversals: 50, // Not implemented
	MaxTime: 420, // Not implemented
	MaxTrials: 14,
}
var DigitSpan_Default = {
	direction: 'forward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'fixed',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}

// ===================================================
var TimeGapBetweenAudioLetters = 500 // milliseconds
var NumberDurationVisual = 1000 // milliseconds
var DurationToWaitBetweenTrials = 1000 // milliseconds
// ===================================================
// == DigitSpan_Audio_Forward_Adaptive_14 ==
Parameters = {
	Current: 3, // value to start at
	MinValue: 1, // minimum value possible
	MaxValue: 30, // maximum value possible
	StepSize: 1, // step size
	NUp: 2, // number of required correct answers in a row before increasing load
	NDown: 1, // number of required incorrect answers in a row before decreasing load
	FastStart: true, // At the bginning increase load after each correct response until the 
	// first incorrect response is made
	MaxReversals: 50, // Not implemented
	MaxTime: 420, // Not implemented
	MaxTrials: 14,
}
var DigitSpan_Audio_Forward_Adaptive_14 = {
	direction: 'forward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'staircase',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Visual_Forward_Adaptive_14 ==
Parameters = {
	Current: 3, // value to start at
	MinValue: 1, // minimum value possible
	MaxValue: 30, // maximum value possible
	StepSize: 1, // step size
	NUp: 2, // number of required correct answers in a row before increasing load
	NDown: 1, // number of required incorrect answers in a row before decreasing load
	FastStart: true, // At the bginning increase load after each correct response until the 
	// first incorrect response is made
	MaxReversals: 50, // Not implemented
	MaxTime: 420, // Not implemented
	MaxTrials: 14
}
var DigitSpan_Visual_Forward_Adaptive_14 = {
	direction: 'forward',
	StimulusMode: 'visual', // 'visual',
	DeliveryMethod: 'staircase',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Audio_Backward_Adaptive_14 ==
Parameters = {
	Current: 2, // value to start at
	MinValue: 1, // minimum value possible
	MaxValue: 30, // maximum value possible
	StepSize: 1, // step size
	NUp: 2, // number of required correct answers in a row before increasing load
	NDown: 1, // number of required incorrect answers in a row before decreasing load
	FastStart: true, // At the bginning increase load after each correct response until the 
	// first incorrect response is made
	MaxReversals: 50, // Not implemented
	MaxTime: 420, // Not implemented
	MaxTrials: 14
}
var DigitSpan_Audio_Backward_Adaptive_14 = {
	direction: 'backward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'staircase',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Visual_Backward_Adaptive_14 ==
Parameters = {
	Current: 2, // value to start at
	MinValue: 1, // minimum value possible
	MaxValue: 30, // maximum value possible
	StepSize: 1, // step size
	NUp: 2, // number of required correct answers in a row before increasing load
	NDown: 1, // number of required incorrect answers in a row before decreasing load
	FastStart: true, // At the bginning increase load after each correct response until the 
	// first incorrect response is made
	MaxReversals: 50, // Not implemented
	MaxTime: 420, // Not implemented
	MaxTrials: 14
}
var DigitSpan_Visual_Backward_Adaptive_14 = {
	direction: 'backward',
	StimulusMode: 'visual', // 'visual',
	DeliveryMethod: 'staircase',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Visual_Forward_TwoErrors ==
Parameters = {
	Current: 3,
	MaxValue: 30,
	StepSize: 1,
	Nerrors: 2,
	MaxTrials: 20 // ignored
}
var DigitSpan_Visual_Forward_TwoErrors = {
	direction: 'forward',
	StimulusMode: 'visual', // 'visual',
	DeliveryMethod: 'numberErrors',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Visual_Backward_TwoErrors ==
Parameters = {
	Current: 2,
	MaxValue: 30,
	StepSize: 1,
	Nerrors: 2,
	MaxTrials: 20 // ignored
}
var DigitSpan_Visual_Backward_TwoErrors = {
	direction: 'backward',
	StimulusMode: 'visual', // 'visual',
	DeliveryMethod: 'numberErrors',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Audio_Forward_TwoErrors ==
Parameters = {
	Current: 3,
	MaxValue: 30,
	StepSize: 1,
	Nerrors: 2,
	MaxTrials: 20 // ignored
}
var DigitSpan_Audio_Forward_TwoErrors = {
	direction: 'forward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'numberErrors',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Audio_Backward_TwoErrors ==
Parameters = {
	Current: 2,
	MaxValue: 30,
	StepSize: 1,
	Nerrors: 2,
	MaxTrials: 20 // ignored
}
var DigitSpan_Audio_Backward_TwoErrors = {
	direction: 'backward',
	StimulusMode: 'audio', // 'visual',
	DeliveryMethod: 'numberErrors',//'staircase','fixed','numberErrors'
	Parameters: Parameters,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true, 
	AskForNotes: false,
}
// ===================================================
// == DigitSpan_Visual_Forward_Fixed01_Load05 ==
Parameters = {
	Current: 5,
	MaxTrials: 1
}
var DigitSpan_Visual_Forward_Fixed01_Load05 = {
	direction: 'forward',
	StimulusMode: 'visual',
	DeliveryMethod: 'fixed',
	Parameters: Parameters,	
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Visual_Backward_Fixed01_Load03 ==
Parameters = {
	Current: 3,
	MaxTrials: 1
}
var DigitSpan_Visual_Backward_Fixed01_Load03 = {
	direction: 'backward',
	StimulusMode: 'visual',
	DeliveryMethod: 'fixed',
	Parameters: Parameters,	
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Audio_Forward_Fixed01_Load05 ==
Parameters = {
	Current: 5,
	MaxTrials: 1
}
var DigitSpan_Audio_Forward_Fixed01_Load05 = {
	direction: 'forward',
	StimulusMode: 'audio',
	DeliveryMethod: 'fixed',
	Parameters: Parameters,	
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================
// == DigitSpan_Audio_Backward_Fixed01_Load03 ==
Parameters = {
	Current: 3,
	MaxTrials: 1
}
var DigitSpan_Visual_Forward_Fixed01_Load05 = {
	direction: 'backward',
	StimulusMode: 'audio',
	DeliveryMethod: 'fixed',
	Parameters: Parameters,	
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
}
// ===================================================

add('DigitSpan_Audio_Forward_Adaptive_14', function(){ DigitSpan_parameters = DigitSpan_Audio_Forward_Adaptive_14});
add('DigitSpan_Visual_Forward_Adaptive_14', function(){ DigitSpan_parameters = DigitSpan_Visual_Forward_Adaptive_14});
add('DigitSpan_Audio_Backward_Adaptive_14', function(){ DigitSpan_parameters = DigitSpan_Audio_Backward_Adaptive_14});
add('DigitSpan_Visual_Backward_Adaptive_14', function(){ DigitSpan_parameters = DigitSpan_Visual_Backward_Adaptive_14});
add('DigitSpan_Visual_Forward_TwoErrors', function(){ DigitSpan_parameters = DigitSpan_Visual_Forward_TwoErrors});
add('DigitSpan_Visual_Backward_TwoErrors', function(){ DigitSpan_parameters = DigitSpan_Visual_Backward_TwoErrors});
add('DigitSpan_Audio_Forward_TwoErrors', function(){ DigitSpan_parameters = DigitSpan_Audio_Forward_TwoErrors});
add('DigitSpan_Audio_Backward_TwoErrors', function(){ DigitSpan_parameters = DigitSpan_Audio_Backward_TwoErrors});
add('DigitSpan_Visual_Forward_Fixed01_Load05', function(){ DigitSpan_parameters = DigitSpan_Visual_Forward_Fixed01_Load05});
add('DigitSpan_Visual_Backward_Fixed01_Load03', function(){ DigitSpan_parameters = DigitSpan_Visual_Backward_Fixed01_Load03});
add('DigitSpan_Audio_Forward_Fixed01_Load05', function(){ DigitSpan_parameters = DigitSpan_Audio_Forward_Fixed01_Load05});
add('DigitSpan_Audio_Backward_Fixed01_Load03', function(){ DigitSpan_parameters = DigitSpan_Audio_Backward_Fixed01_Load03});

