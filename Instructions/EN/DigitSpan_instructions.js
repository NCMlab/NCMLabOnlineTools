var fdsTotalTrials = 3;
var AudioInstructions = [ 
		{'page': '<p class="Instructions">Welcome to the <b>Digit Span Task.</b></p>'},
		{'page': '<p class="Instructions">On each trial, you will hear a sequence of digits and be asked to type them back in the same order in which they were heard.</p>'},
		{'page': '<p class="Instructions">For example, if you heard the digits <b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>, you would respond with <b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
	    ];

var VisualInstructions = [  
		{'page': '<p>Welcome to the <b>digit span task.</b></p>'},
		{'page': '<p class="Instructions">On each trial, you will see a sequence of digits and be asked to type them back in the same order in which they were seen.</p>'},
		{'page': '<p class="Instructions">For example, if you saw the digits <b style="color:blue;">1</b>, <b style="color:blue;">2</b>, '},
		{'page': '<b style="color:blue;">3</b>, you would respond with <b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
		];

var GettingStartedText = [
		{'page': '<p class="Instructions">To ensure high quality data, it is very important that you do not use any memory aid (e.g., pen and paper).<br>Please do the task solely in your head.</p>'},
		{'page': '<p class="Instructions">There will be '+fdsTotalTrials+' total trials. Participation takes around 10 minutes.</p>'},
	];

var ThankYouText = [{'page':'Thank you. Press any key to end the experiment.'}]


var ForwardTrialQuestion = '<p class="Instructions">Enter the number list you heard.</p>'
var BackwardTrialQuestion = '<p class="Instructions">Enter the number list you heard <b>Backward</b>.</p>'