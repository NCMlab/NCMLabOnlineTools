var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';

var keyboard_path = "./assets/images/StroopColorsKeyboard.png"

var ColorInstrText = [
      {'page':'<p class="Instructions">Welcome to the Stroop Color experiment.</p>'},
      {'page':'<p class="Instructions">You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},
      {'page':'<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'},
      ];

var ColorInstrPoorPerformanceText = [
      {'page':'<p class="Instructions">There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];

var ColorTestInstrText = [
      {'page':'<p class="Instructions">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ];

var WordInstrText = [
      {'page': '<p class="Instructions">Welcome to the Stroop Word experiment.</p>'},
      {'page': '<p class="Instructions">In this task, words will appear in the center of the screen, like this:</p><p class="Instructions">BLUE</p>'},
      {'page': '<p class="Instructions">You need to indicate what word is written. </br>You will press the button that corresponds to that color.'},
      {'page': '<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ]

var WordInstrPoorPerformanceText = [
      {'page': '<p class="Instructions">There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ]


var WordTestInstrText = [
      {'page': '<p class="Instructions">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ]
    
var ColorWordInstrText = [
      {'page': '<p class="Instructions">Welcome to the Stroop Color/Word experiment.</p>'},
      {'page': '<p class="Instructions">In this task, words will appear like this:</p><p style="font-size:'+ StimulusFontSize+'; color:rgb(250,0,0)">BLUE</p>'},
      {'page': '<p class="Instructions">You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the button that corresponds to that color.' },
      {'page': '<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'},
      ];

var ColorWordInstrPoorPerformanceText = [
      {'page': '<p class="Instructions">There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];

var ColorWordTestInstrText = [
      {'page': '<p class="Instructions">You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'}
      ];

var ColorThankYouText = [{'page':'Thank you. Press any key to end the experiment.'}]

var WordThankYouText = [{'page': 'Thank you. Press Next to end the experiment.'}]

var ColorWordThankYouText = [{'page': 'Thank you. Press any key to end the experiment.'}]

/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['v','b','n','m',27]

var ResponseButtons = ['Red','Yellow','Green','Blue']

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
	This is the stimuli list for both stroop color and word
   The green is very bright. TO make it less bright change it to something like (0,200,0)
*/
var StroopWordPrompt = "<p class='PromptText'>What word is shown below?</p>";
var StroopColorPrompt = "<p class='PromptText'>What color is shown below?</p>";
var StroopColorWordPrompt = "<p class='PromptText'>What color is the word written in?</p>";


function PutStimIntoTable(prompt, stim) {
    var html = '';
    html += '<table style="height:100%; text-align:center">'
    html += '<tr style="height:15%">'
    html += '<td>'
    html += prompt
    html += '</td>'
    html += '</tr>'
    html += '<tr>'
    html += '<td>'
    html += stim
    html += '</td>'
    html += '</tr>'
    html += '</table>'
    return html
}

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