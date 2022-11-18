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


var useAudio = true; // change to false if you want this to be a visual task!

var currentDigitList; //current digit list
var totalCorrect = 0; //counter for total correct
var totalTrials = 0; //counter for total trials
var maxSpan; //value that will reflect a participant's maximum span (e.g., 6)
var folder = "digits/"; //folder name for storing the audio files
var fdsTrialNum = 1; //counter for trials
var fdsTotalTrials = 12; //total number of desired trials
var response = []; //for storing partcipants' responses
var fds_correct_ans; //for storing the correct answer on a given trial
var staircaseChecker = []; //for assessing whether the span should move up/down/stay
var staircaseIndex = 0; //index for the current staircase
var digit_list = [1,2,3,4,5,6,7,8,9]; //digits to be used (unlikely you will want to change this)

var startingSpan = 3; //where we begin in terms of span
var currentSpan; //to reference where participants currently are
var spanHistory = []; //easy logging of the participant's trajectory



//var aud_digits = ['../assets/digits/one.wav', '../assets/digits/two.wav', '../assets/digits/three.wav', '../assets/digits/four.wav', '../assets/digits/five.wav', '../assets/digits/six.wav', '../assets/digits/seven.wav', '../assets/digits/eight.wav', '../assets/digits/nine.wav']; //the digits

