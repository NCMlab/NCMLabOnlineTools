var EN_Instructions = {}
EN_Instructions.ColorWelcomeText = [{'page':'<p class="Instructions">Welcome to the Stroop Color experiment.</p>'}]
EN_Instructions.ColorInstrText = [
      {'page':'<p class="Instructions">You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},      
      ];
EN_Instructions.ColorPracticeText = [
      {'page':'<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'},
      ];
EN_Instructions.ColorInstrPoorPerformanceText = [
      {'page':'<p class="Instructions">There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];

EN_Instructions.ColorTestInstrText = [
      {'page':'<p class="Instructions">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ];

EN_Instructions.WordWelcomeText = [{'page': '<p class="Instructions">Welcome to the Stroop Word experiment.</p>'}]

EN_Instructions.WordInstrText = [      
      {'page': '<p class="Instructions">In this task, words will appear in the center of the screen, like this:</p><p class="Instructions">BLUE</p>'},
      {'page': '<p class="Instructions">You need to indicate what word is written. </br>You will press the button that corresponds to that color.'},      
      ]
EN_Instructions.WordPracticeText = [
      {'page': '<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];
EN_Instructions.WordInstrPoorPerformanceText = [
      {'page': '<p class="Instructions">There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ]
EN_Instructions.WordTestInstrText = [
      {'page': '<p class="Instructions">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ]
EN_Instructions.ColorWordWelcomeText = [{'page': '<p class="Instructions">Welcome to the Stroop Color/Word experiment.</p>'}]
EN_Instructions.ColorWordInstrText = [
      {'page': '<p class="Instructions">In this task, words will appear like this:</p><p style="font-size:'+ StimulusFontSize+'; color:rgb(250,0,0)">BLUE</p>'},
      {'page': '<p class="Instructions">You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the button that corresponds to that color.' },
      ];
EN_Instructions.ColorWordPracticeText = [
      {'page': '<p class="Instructions">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'},
      ];
EN_Instructions.ColorWordInstrPoorPerformanceText = [
      {'page': '<p class="Instructions">There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];
EN_Instructions.ColorWordTestInstrText = [
      {'page': '<p class="Instructions">You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'}
      ];
EN_Instructions.ColorThankYouText = [{'page':'Thank you. Press any key to end the experiment.'}]
EN_Instructions.WordThankYouText = [{'page': 'Thank you. Press Next to end the experiment.'}]
EN_Instructions.ColorWordThankYouText = [{'page': 'Thank you. Press any key to end the experiment.'}]
EN_Instructions.StroopWordPrompt = "<p class='PromptText'>What word is shown below?</p>";
EN_Instructions.StroopColorPrompt = "<p class='PromptText'>What color is shown below?</p>";
EN_Instructions.StroopColorWordPrompt = "<p class='PromptText'>What color is the word written in?</p>";

EN_Instructions.Color01Name = "Red"
EN_Instructions.Color02Name = "Yellow"
EN_Instructions.Color03Name = "Green"
EN_Instructions.Color04Name = "Blue"
EN_Instructions.ResponseButtons = ['Red','Yellow','Green','Blue']

EN_Instructions.DebriefTextPart01 = "<p>You responded correctly on <strong>"
EN_Instructions.DebriefTextPart02 = "%</strong> of the "
EN_Instructions.DebriefTextPart03 = " trials.</p><p>Press any key to continue the experiment. </p>";


add('EN_Stroop_Instructions', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}
FR_Instructions.ColorWelcomeText = [{'page':'<p class="Instructions">FR: Welcome to the Stroop Color experiment.</p>'}]
FR_Instructions.ColorInstrText = [
      {'page':'<p class="Instructions">FR: You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},      
      ];
FR_Instructions.ColorPracticeText = [
      {'page':'<p class="Instructions">FR: Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'},
      ];
FR_Instructions.ColorInstrPoorPerformanceText = [
      {'page':'<p class="Instructions">FR: There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];

FR_Instructions.ColorTestInstrText = [
      {'page':'<p class="Instructions">FR: Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ];

FR_Instructions.WordWelcomeText = [{'page': '<p class="Instructions">FR: Welcome to the Stroop Word experiment.</p>'}]

FR_Instructions.WordInstrText = [      
      {'page': '<p class="Instructions">FR: In this task, words will appear in the center of the screen, like this:</p><p class="Instructions">BLUE</p>'},
      {'page': '<p class="Instructions">FR: You need to indicate what word is written. </br>You will press the button that corresponds to that color.'},      
      ]
FR_Instructions.WordPracticeText = [
      {'page': '<p class="Instructions">FR: Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];
FR_Instructions.WordInstrPoorPerformanceText = [
      {'page': '<p class="Instructions">FR: There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ]
FR_Instructions.WordTestInstrText = [
      {'page': '<p class="Instructions">FR: Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'}
      ]
FR_Instructions.ColorWordWelcomeText = [{'page': '<p class="Instructions">FR: Welcome to the Stroop Color/Word experiment.</p>'}]
FR_Instructions.ColorWordInstrText = [
      {'page': '<p class="Instructions">FR: In this task, words will appear like this:</p><p style="font-size:'+ StimulusFontSize+'; color:rgb(250,0,0)">BLUE</p>'},
      {'page': '<p class="Instructions">FR: You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the button that corresponds to that color.' },
      ];
FR_Instructions.ColorWordPracticeText = [
      {'page': '<p class="Instructions">FR: Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'},
      ];
FR_Instructions.ColorWordInstrPoorPerformanceText = [
      {'page': '<p class="Instructions">FR: There will be another run of practice trials with feedback.</p> <p class="Instructions">Remember to respond as accurately and quickly as possible.</p>'}
      ];
FR_Instructions.ColorWordTestInstrText = [
      {'page': '<p class="Instructions">FR: You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'}
      ];
FR_Instructions.ColorThankYouText = [{'page':'FR: Thank you. Press any key to end the experiment.'}]
FR_Instructions.WordThankYouText = [{'page': 'FR: Thank you. Press Next to end the experiment.'}]
FR_Instructions.ColorWordThankYouText = [{'page': 'FR: Thank you. Press any key to end the experiment.'}]
FR_Instructions.StroopWordPrompt = "<p class='PromptText'>FR: What word is shown below?</p>";
FR_Instructions.StroopColorPrompt = "<p class='PromptText'>FR: What color is shown below?</p>";
FR_Instructions.StroopColorWordPrompt = "<p class='PromptText'>FR: What color is the word written in?</p>";

FR_Instructions.Color01Name = "Rouge"
FR_Instructions.Color02Name = "Jaune"
FR_Instructions.Color03Name = "Vert"
FR_Instructions.Color04Name = "Bleu"
FR_Instructions.ResponseButtons = ['Rouge','Jaune','Vert','Bleu']
FR_Instructions.DebriefTextPart01 = "<p>FR: You responded correctly on <strong>"
FR_Instructions.DebriefTextPart02 = "%</strong> of the "
FR_Instructions.DebriefTextPart03 = " trials.</p><p>Press any key to continue the experiment. </p>";


add('FR_Stroop_Instructions', function(){ Instructions = FR_Instructions});

