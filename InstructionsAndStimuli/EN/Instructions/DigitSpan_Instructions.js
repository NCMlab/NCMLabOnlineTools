var fdsTotalTrials = 3;

var Forward_WelcomeText = [
	{'page': '<p class="Instructions">Welcome to the <b>Foward Digit Span Task.</b></p>'}
]

var Backward_WelcomeText = [
	{'page': '<p class="Instructions">Welcome to the <b>Backward Digit Span Task.</b></p>'}
]

var ForwardAudioInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will hear a sequence of digits and be asked to enter them back in the <b>SAME</b> order in which they were heard.</p>'},
		{'page': '<p class="Instructions">For example, if you heard the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
	    ];

var BackwardAudioInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will hear a sequence of digits and be asked to enter them in the <b>REVERSE</b> order in which they were heard.</p>'},
		{'page': '<p class="Instructions">For example, if you heard the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">3</b>, <b style="color:blue;">2</b>, <b style="color:blue;">1</b></p>'},
	    ];

var ForwardVisualInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will see a sequence of digits and be asked to enter them back in the <b>SAME</b> order in which they were seen.</p>'},
		{'page': '<p class="Instructions">For example, if you saw the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
		];

var BackwardVisualInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will see a sequence of digits and be asked to enter them in the <b>REVERSE</b> order in which they were seen.</p>'},
		{'page': '<p class="Instructions">For example, if you saw the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">3</b>, <b style="color:blue;">2</b>, <b style="color:blue;">1</b></p>'},
		];
	

var GettingStartedText = [
		{'page': '<p class="Instructions">To ensure high quality data, it is very important that you do not use any memory aid (e.g., pen and paper).<br>Please do the task solely in your head.</p>'},
		{'page': '<p class="Instructions">There will be '+fdsTotalTrials+' total trials. Participation takes around 10 minutes.</p>'},
	];

var ThankYouText = [{'page':'Thank you.'}]

var ForwardTrialQuestion = '<p class="Instructions">Enter the number list.</p>'
var BackwardTrialQuestion = '<p class="Instructions">Enter the number list <b>Backwards</b>.</p>'