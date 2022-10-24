// This variable affects the distance between the center of
// the screen and the high and low line


// How many times to cycle over all different trials for PRACTICE
var NumberOfCyclesForPractice = 1
// How many times to cycle over all different trials for TESTING
var NumberOfCyclesForTesting = 2

var InstructionText = 'For this task you will see...'

var ScreenSpacing = 300
// Set the fixation time between trials, in milliseconds
var FixationDuration = 300
// how many flankers should be on either side of the central arrow
var NFlankers = 2;
// define the flankers as empty strings
var flankersL = '';
var flankersR = '';
var flankersN = '';
// append to the empty strings the different number of flankers
for (i = 0; i < NFlankers; i++) 
   {
	// the following are the codes for the specific arrows and star to use
	// https://www.fileformat.info/info/unicode/char/2190/index.htm
      flankersL += "\u2190";
      flankersR += "\u2192";
      flankersN += "\u2014";
    }
// font size of the stimuli
var FontSize = 72

// What are the keyboard keys to record responses from
var KeyboardChoices = ['arrowleft', 'arrowright'];
// The above key codes need to be mapped onto text descriptions used later for scoring
var ResponseMapping = ['left', 'right'];

// format the stimuli on the screen. This uses the fontsize specified above
// The stimuli are presented with some at the top of the screen, some in the middle and some at the bottom. Build an
// html formatted table of the stimuli.
function PutIntoTable(top='top', middle='mid', bottom='bot', width=600, height=ScreenSpacing) {
      return '<table margin-left="auto" margin-right="auto" border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:'+FontSize+'px;">'+middle+'</div></td></tr> <tr height="'+height+'"><td>'+bottom+'</td></tr></table>';
    }

         // What type of trial is this?
          // Factors: 
          // flanker: left, right, none [3]
          // central arrow direction: left, right [2]
          // star: top&bot, top, bot, none, middle [5]
          // position: top, bottom [2]


// Create the array of objects dynamically
// https://stackoverflow.com/questions/7858385/how-to-add-values-to-an-array-of-objects-dynamically-in-javascript

// The order of these is important and needs to map onto the for loops below which index these lists
var flankers = [flankersL, flankersR, flankersN];
var centralArrow = ["\u2190", "\u2192"]; // left, right
var fixation = [PutIntoTable("\u2217","+","\u2217"), PutIntoTable("\u2217","+"," "), PutIntoTable(" ","+","\u2217"), PutIntoTable(" ","+"," "), PutIntoTable(" ","\u2217"," ")];
var position = ["high","low"];
var count = 0;
var ANT = [];

// The test procedure in the HTML specifies how many times to repeat the stimuli presentation
// The following sets up the stimuli for all cells across the different factors
// This also adds text descriptions which will go into the resulatnt data file and will be used for scoring
for(var i=0; i<3; i++) { // flanker type: LEFT, RIGHT, NEUTRAL
	for (var j = 0; j < 2; j++) { // cycle over central arrow directions
		for (var k = 0; k < 1; k++) { // cycle over fixation positions
			for (var m = 0; m < 2; m++) { // cycle over stimulus position
				// Set up all the stimuli
				ANT[count] = {};
				ANT[count].flanker = flankers[i]; // left/right/neutral
				ANT[count].centralArrow = centralArrow[j]; // right/left
				ANT[count].fixation = fixation[k]; //upper/lower/both/center/none
				ANT[count].position = position[m]; // upper/lower
				// 	THE FOLLOWING NEEDS TO BE CHECKED AND CONFIRMED

				// Define what is considered correct and incorrect for each trial
				// The central arrow points to the LEFT
				if (j==0) {ANT[count].correct = 'left'}
				// The central arrow points to the RIGHT
				if (j==1) {ANT[count].correct = 'right'}

				// map the stim to the type
				// using the indices is a convenience. It would be better if this was more explicit
				// This information will be used for scoring this experiment

				// Flankers are LEFT
				// Central arrow is LEFT
				if (i==0 & j==0) {ANT[count].flankerType = 'conFlanker';}
				// Central arrow is RIGHT
				if (i==0 & j==1) {ANT[count].flankerType = 'incFlanker';}
				// Flankers are RIGHT
				// Central arrow is RIGHT
				if (i==1 & j==1) {ANT[count].flankerType = 'conFlanker';}
				// Central arrow is LEFT
				if (i==1 & j==0) {ANT[count].flankerType = 'incFlanker';}
				// Flankers are NEURAL
				if (i==2) {ANT[count].flankerType = 'neuFlanker';}
				// Position of the CUE

				if (k==0) {ANT[count].cuePos = 'both';}
				if (k==1) {ANT[count].cuePos = 'upper';}
				if (k==2) {ANT[count].cuePos = 'lower';}
				if (k==3) {ANT[count].cuePos = 'none';}
				if (k==4) {ANT[count].cuePos = 'center';}
				// Code whether the stim is congruent with the CUE
				// Stimulus is HIGH (m = 0)
				if (k==0 & m==0) {ANT[count].cueType = 'bothCue';}
				if (k==1 & m==0) {ANT[count].cueType = 'conCue';}
				if (k==2 & m==0) {ANT[count].cueType = 'incCue';}
				if (k==3 & m==0) {ANT[count].cueType = 'noCue';}
				if (k==4 & m==0) {ANT[count].cueType = 'centerCue';}
				// Stimulus is LOW (m = 1)
				if (k==2 & m==1) {ANT[count].cueType = 'conCue';}
				if (k==1 & m==1) {ANT[count].cueType = 'incCue';}
				if (k==0 & m==1) {ANT[count].cueType = 'bothCue';}
				if (k==3 & m==1) {ANT[count].cueType = 'noCue';}
				if (k==4 & m==1) {ANT[count].cueType = 'centerCue';}
				count += 1;
			}
		}
	}
}
