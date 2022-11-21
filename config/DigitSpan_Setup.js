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
var FDSMaxTrials = 10



