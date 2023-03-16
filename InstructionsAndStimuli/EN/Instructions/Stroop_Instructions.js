
var ColorInstrText = [
      {'page':'<p class="Instructions">Welcome to the Stroop Color experiment.</p>'},
      {'page':'<p class="Instructions">You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},      
      ];

var ColorPracticeText = [
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
      ]

var WordPracticeText = [
      {'page': '<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];

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

/* ========================================================= 
	This is the stimuli list for both stroop color and word
   The green is very bright. TO make it less bright change it to something like (0,200,0)
*/
var StroopWordPrompt = "<p class='PromptText'>What word is shown below?</p>";
var StroopColorPrompt = "<p class='PromptText'>What color is shown below?</p>";
var StroopColorWordPrompt = "<p class='PromptText'>What color is the word written in?</p>";

