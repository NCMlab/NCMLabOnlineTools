var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';
var FeedbackFontSize = "30px";

var keyboard_path = "./assets/images/StroopColorsKeyboard.png"

var ColorInstrText = [
      {'page': '<p style="font-size:'+TextFontSize+'">Welcome to the Stroop Color experiment.</p>'},
      {'page':'<p style="font-size:'+TextFontSize+'">You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},
      {'page':'<p style="font-size:'+TextFontSize+'">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'},
      ];

var ColorInstrPoorPerformanceText = [
      {'page':'<p style="font-size:'+TextFontSize+'">There will be another run of practice trials with feedback.</p> <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'}
      ];

var ColorTestInstrText = [
      {'page':'<p style="font-size:'+TextFontSize+'">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ];

var WordInstrText = [
      {'page': '<p style="font-size:'+TextFontSize+'">Welcome to the Stroop Word experiment.</p>'},
      {'page': '<p style="font-size:'+TextFontSize+'">In this task, words will appear in the center of the screen, like this:</p><p style="font-size:'+TextFontSize+'">BLUE</p>'},
      {'page': '<p style="font-size:'+TextFontSize+'">You need to indicate what word is written. </br>You will press the button that corresponds to that color.'},
      {'page': '<p style="font-size:'+TextFontSize+'">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'}
      ]

var WordInstrPoorPerformanceText = [
      {'page': '<p style="font-size:'+TextFontSize+'">There will be another run of practice trials with feedback.</p> <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'}
      ]


var WordTestInstrText = [
      {'page': '<p style="font-size:'+TextFontSize+'">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ]
    
var ColorWordInstrText = [
      {'page': '<p style="font-size:'+TextFontSize+'">Welcome to the Stroop Color/Word experiment.</p>'},
      {'page': '<p style="font-size:'+TextFontSize+'">In this task, words will appear like this:</p><p style="font-size:'+ StimulusFontSize+'; color:rgb(250,0,0)">BLUE</p>'},
      {'page': '<p style="font-size:'+TextFontSize+'">You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the button that corresponds to that color.' },
      {'page': '<p style="font-size:'+TextFontSize+'">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'},
      ];

var ColorWordInstrPoorPerformanceText = [
      {'page': '<p style="font-size:'+TextFontSize+'">There will be another run of practice trials with feedback.</p> <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'}
      ];

var ColorWordTestInstrText = [
      {'page': '<p style="font-size:'+TextFontSize+'">You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'}
      ];

var ColorThankYouText = [{'page':'Thank you. Press any key to end the experiment.'}]

var WordThankYouText = [{'page': 'Thank you. Press Next to end the experiment.'}]

var ColorWordThankYouText = [{'page': 'Thank you. Press any key to end the experiment.'}]

/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['v','b','n','m',27]

var ResponseButtons = ['Red','Yellow','Green','Blue']

var FeedbackLength = 400; // This is in milliseconds

//var FixationLength = 500; // This is in milliseconds

var ColorPracticeRepeats = 1
var WordPracticeRepeats = 1 
var ColorWordPracticeRepeats = 1

// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var ColorTestRepeats = 1
// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var WordTestRepeats = 1
// Since there are 16 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 4



/* ========================================================= 
	This is a function for positioning the instruction figure and stimuli on the screen
	If the instruction keyboard mapping figure is too low change the 'height' value below.
*/

function PutIntoTable(top='top', middle='mid', width=600, height=300, img_path=keyboard_path) {
   return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'">'+
          '<td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'">'+
          '<td valign="bottom"><img src="'+ keyboard_path +'"></td></tr></table>';
 }
/* ========================================================= 
	This is the stimuli list for both stroop color and word
   The green is very bright. TO make it less bright change it to something like (0,200,0)
*/
var StroopWordPrompt = "<p>What word is shown below?</p>";
var StroopColorPrompt = "<p>What color is shown below?</p>";
var StroopColorWordPrompt = "<p>What color is the word written in?</p>";

var StroopWordList = [
   {
      "Word": "Red",
      "letter": "v",
      "button": 0,
      "Color": "(255,0,0)"
    },
    {
      "Word": "Yellow",
      "letter": "b",
      "button": 1,
      "Color": "(255,255,0)"
    },
    {
      "Word": "Green",
      "letter": "n",
      "button": 2,
      "Color": "(0,255,0)"
    },
    {
      "Word": "Blue",
      "letter": "m",
      "button": 3,
      "Color": "(0,0,255)"
    }
]

/* ========================================================= 
	This is the stimuli list for stroop color/word
*/
var StroopColorWordList = [
 {
   "Word": "Red",
   "Congruency": "Con",
   "letter": "v",
   "button": 0,
   "Color": "(255,0,0)"
 },
 {
   "Word": "Red",
   "Congruency": "Incon",
   "letter": "b",
   "button": 1,
   "Color": "(255,255,0)"
 },
 {
   "Word": "Red",
   "Congruency": "Incon",
   "letter": "m",
   "button": 3,
   "Color": "(0,0,255)"
 },
 {
   "Word": "Red",
   "Congruency": "Incon",
   "letter": "n",
   "button": 2,
   "Color": "(0,255,0)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Incon",
   "letter": "v",
   "button": 0,
   "Color": "(255,0,0)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Con",
   "letter": "b",
   "button": 1,
   "Color": "(255,255,0)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Incon",
   "letter": "m",
   "button": 3,
   "Color": "(0,0,255)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Incon",
   "letter": "n",
   "button": 2,
   "Color": "(0,255,0)"
 },
 {
   "Word": "Blue",
   "Congruency": "Incon",
   "letter": "v",
   "button": 0,
   "Color": "(255,0,0)"
 },
 {
   "Word": "Blue",
   "Congruency": "Incon",
   "letter": "b",
   "button": 1,
   "Color": "(255,255,0)"
 },
 {
   "Word": "Blue",
   "Congruency": "Con",
   "letter": "m",
   "button": 3,
   "Color": "(0,0,255)"
 },
 {
   "Word": "Blue",
   "Congruency": "Incon",
   "letter": "n",
   "button": 2,
   "Color": "(0,255,0)"
 },
 {
   "Word": "Green",
   "Congruency": "Incon",
   "letter": "v",
   "button": 0,
   "Color": "(255,0,0)"
 },
 {
   "Word": "Green",
   "Congruency": "Incon",
   "letter": "b",
   "button": 1,
   "Color": "(255,255,0)"
 },
 {
   "Word": "Green",
   "Congruency": "Incon",
   "letter": "m",
   "button": 3,
   "Color": "(0,0,255)"
 },
 {
   "Word": "Green",
   "Congruency": "Con",
   "letter": "n",
   "button": 2,
   "Color": "(0,255,0)"
 }
]