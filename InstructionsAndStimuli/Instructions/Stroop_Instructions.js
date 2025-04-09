var EN_Instructions = {}
EN_Instructions.ColorWelcomeText = [{'page':'Welcome to the Stroop Color experiment.'}]
EN_Instructions.ColorInstrText = [
      {'page':'You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},      
      ];
EN_Instructions.ColorPracticeText = [
      {'page':'Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. Remember to respond as accurately and quickly as possible.'},
      ];
EN_Instructions.ColorInstrPoorPerformanceText = [
      {'page':'There will be another run of practice trials with feedback. Remember to respond as accurately and quickly as possible.'}
      ];

EN_Instructions.ColorTestInstrText = [
      {'page':'Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. '}
      ];

EN_Instructions.WordWelcomeText = [{'page': 'Welcome to the Stroop Word experiment.'}]

EN_Instructions.WordInstrText = [      
      {'page': 'In this task, words will appear in the center of the screen, like this:BLUE'},
      {'page': 'You need to indicate what word is written. </br>You will press the button that corresponds to that color.'},      
      ]
EN_Instructions.WordPracticeText = [
      {'page': 'Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. Remember to respond as accurately and quickly as possible.'}
      ];
EN_Instructions.WordInstrPoorPerformanceText = [
      {'page': 'There will be another run of practice trials with feedback. Remember to respond as accurately and quickly as possible.'}
      ]
EN_Instructions.WordTestInstrText = [
      {'page': 'Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. '}
      ]
EN_Instructions.ColorWordWelcomeText = [{'page': 'Welcome to the Stroop Color/Word experiment.'}]
EN_Instructions.ColorWordInstrText = [
      {'page': 'In this task, words will appear like this:<p style="font-size:'+ StimulusFontSize+'; color:rgb(250,0,0)">BLUE'},
      {'page': 'You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the button that corresponds to that color.' },
      ];
EN_Instructions.ColorWordPracticeText = [
      {'page': 'Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. Remember to respond as accurately and quickly as possible.'},
      ];
EN_Instructions.ColorWordInstrPoorPerformanceText = [
      {'page': 'There will be another run of practice trials with feedback. Remember to respond as accurately and quickly as possible.'}
      ];
EN_Instructions.ColorWordTestInstrText = [
      {'page': 'You will now respond without any feedback. Try to respond as quickly and accurately as possible. '}
      ];
EN_Instructions.ThankYouText = [{'page':'Thank you. Press any key to end the experiment.'}]

EN_Instructions.StroopWordPrompt = "<p class='PromptText'>What word is shown below?";
EN_Instructions.StroopColorPrompt = "<p class='PromptText'>What color is shown below?";
EN_Instructions.StroopColorWordPrompt = "<p class='PromptText'>What color is the word written in?";

EN_Instructions.Color01Name = "Red"
EN_Instructions.Color02Name = "Yellow"
EN_Instructions.Color03Name = "Green"
EN_Instructions.Color04Name = "Blue"
EN_Instructions.ResponseButtons = ['Red','Yellow','Green','Blue']

EN_Instructions.DebriefTextPart01 = "<p>You responded correctly on <strong>"
EN_Instructions.DebriefTextPart02 = "%</strong> of the "
EN_Instructions.DebriefTextPart03 = " trials.<p>Press any key to continue the experiment. ";


add('EN_Stroop_Instructions', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}
FR_Instructions.ColorWelcomeText = [{'page':'FR: Welcome to the Stroop Color experiment.'}]
FR_Instructions.ColorInstrText = [
      {'page':'FR: You need to indicate what color is shown on the screen. </br>You will press the button that corresponds to that color.'},      
      ];
FR_Instructions.ColorPracticeText = [
      {'page':'FR: Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. Remember to respond as accurately and quickly as possible.'},
      ];
FR_Instructions.ColorInstrPoorPerformanceText = [
      {'page':'FR: There will be another run of practice trials with feedback. Remember to respond as accurately and quickly as possible.'}
      ];

FR_Instructions.ColorTestInstrText = [
      {'page':'FR: Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. '}
      ];

FR_Instructions.WordWelcomeText = [{'page': 'FR: Welcome to the Stroop Word experiment.'}]

FR_Instructions.WordInstrText = [      
      {'page': 'FR: In this task, words will appear in the center of the screen, like this:BLUE'},
      {'page': 'FR: You need to indicate what word is written. </br>You will press the button that corresponds to that color.'},      
      ]
FR_Instructions.WordPracticeText = [
      {'page': 'FR: Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. Remember to respond as accurately and quickly as possible.'}
      ];
FR_Instructions.WordInstrPoorPerformanceText = [
      {'page': 'FR: There will be another run of practice trials with feedback. Remember to respond as accurately and quickly as possible.'}
      ]
FR_Instructions.WordTestInstrText = [
      {'page': 'FR: Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. '}
      ]
FR_Instructions.ColorWordWelcomeText = [{'page': 'FR: Welcome to the Stroop Color/Word experiment.'}]
FR_Instructions.ColorWordInstrText = [
      {'page': 'FR: In this task, words will appear like this:<p style="font-size:'+ StimulusFontSize+'; color:rgb(250,0,0)">BLUE'},
      {'page': 'FR: You need to indicate the COLOR that the word is written in (and ignore what the word says). Press the button that corresponds to that color.' },
      ];
FR_Instructions.ColorWordPracticeText = [
      {'page': 'FR: Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. Remember to respond as accurately and quickly as possible.'},
      ];
FR_Instructions.ColorWordInstrPoorPerformanceText = [
      {'page': 'FR: There will be another run of practice trials with feedback. Remember to respond as accurately and quickly as possible.'}
      ];
FR_Instructions.ColorWordTestInstrText = [
      {'page': 'FR: You will now respond without any feedback. Try to respond as quickly and accurately as possible. '}
      ];
FR_Instructions.ColorThankYouText = [{'page':'FR: Thank you. Press any key to end the experiment.'}]
FR_Instructions.WordThankYouText = [{'page': 'FR: Thank you. Press Next to end the experiment.'}]
FR_Instructions.ColorWordThankYouText = [{'page': 'FR: Thank you. Press any key to end the experiment.'}]
FR_Instructions.StroopWordPrompt = "<p class='PromptText'>FR: What word is shown below?";
FR_Instructions.StroopColorPrompt = "<p class='PromptText'>FR: What color is shown below?";
FR_Instructions.StroopColorWordPrompt = "<p class='PromptText'>FR: What color is the word written in?";

FR_Instructions.Color01Name = "Rouge"
FR_Instructions.Color02Name = "Jaune"
FR_Instructions.Color03Name = "Vert"
FR_Instructions.Color04Name = "Bleu"
FR_Instructions.ResponseButtons = ['Rouge','Jaune','Vert','Bleu']
FR_Instructions.DebriefTextPart01 = "<p>FR: You responded correctly on <strong>"
FR_Instructions.DebriefTextPart02 = "%</strong> of the "
FR_Instructions.DebriefTextPart03 = " trials.<p>Press any key to continue the experiment. ";


add('FR_Stroop_Instructions', function(){ Instructions = FR_Instructions});

