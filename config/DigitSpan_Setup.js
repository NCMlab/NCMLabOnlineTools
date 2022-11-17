// ===================================================
// ADAPTIVE VERSION PARAMETERS
var MaxTrials = 14
var MaxReversals = 5
var StartValue = 4
var MinValue = 1
var MaxValue = 20
var StepSize = 1
var NUp = 2
var NDown = 1
var FastStart = true
// ===================================================

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
var stimList; //this is going to house the ordering of the stimuli for each trial
var idx = 0; //for indexing the current letter to be presented
var exitLetters; //for exiting the letter loop

var aud_digits = ['digits/one.wav', 'digits/two.wav', 'digits/three.wav', 'digits/four.wav', 'digits/five.wav', 'digits/six.wav', 'digits/seven.wav', 'digits/eight.wav', 'digits/nine.wav']; //the digits

