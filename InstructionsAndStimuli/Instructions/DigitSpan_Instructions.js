var fdsTotalTrials = 3;

var EN_Instructions = {}

EN_Instructions.WelcomeText = [
	{'page': '<p class="Instructions">Welcome to the Digit Span Task.</p>'}
]
EN_Instructions.ForwardAudioInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will hear a sequence of digits and be asked to enter them back in the <b>SAME</b> order in which they were heard.</p>'},
		{'page': '<p class="Instructions">For example, if you heard the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
	    ];
EN_Instructions.BackwardAudioInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will hear a sequence of digits and be asked to enter them in the <b>REVERSE</b> order in which they were heard.</p>'},
		{'page': '<p class="Instructions">For example, if you heard the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">3</b>, <b style="color:blue;">2</b>, <b style="color:blue;">1</b></p>'},
	    ];
EN_Instructions.ForwardVisualInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will see a sequence of digits and be asked to enter them back in the <b>SAME</b> order in which they were seen.</p>'},
		{'page': '<p class="Instructions">For example, if you saw the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
		];
EN_Instructions.BackwardVisualInstructions = [ 
		{'page': '<p class="Instructions">On each trial, you will see a sequence of digits and be asked to enter them in the <b>REVERSE</b> order in which they were seen.</p>'},
		{'page': '<p class="Instructions">For example, if you saw the digits<br><b style="color:blue;">one</b>, <b style="color:blue;">two</b>, <b style="color:blue;">three</b>,<br> you would respond with<br><b style="color:blue;">3</b>, <b style="color:blue;">2</b>, <b style="color:blue;">1</b></p>'},
		];
EN_Instructions.GettingStartedText = [
		{'page': '<p class="Instructions">To ensure high quality data, it is very important that you do not use any memory aid (e.g., pen and paper).<br>Please do the task solely in your head.</p>'},
	];
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions.ForwardTrialQuestion = '<p class="Instructions">Enter the number list in the SAME order.</p>'
EN_Instructions.BackwardTrialQuestion = '<p class="Instructions">Enter the number list <b>Backwards</b>.</p>'
EN_Instructions.TrialNumber = 'Trial number'
EN_Instructions.FolderOfAudioFiles = 'assets/SoundFiles/Digits/Set_en-US-Neural2-F_Speed70/'
EN_Instructions.NotesForResultsPage = "The digit span task presented a list of number sequences to the participant who needed to repeat those sequences. The Load List is the length of each number sequence presented. The <b> Accuracy List refers to which sequencers were repeated correctlt, 1 = correct, 0 = incorrect. The overall score for this test is the Threshold. This calculation depends on the Scoring Type used. For numberErrors the threshold is highest sequence length correctly repeated."

var FR_Instructions = {}
FR_Instructions.WelcomeText = [
	{'page': '<p class="Instructions">C\'est la tâche de Mémoire des Chiffres</p>'}
]

FR_Instructions.ForwardAudioInstructions = [ 
		{'page': '<p class="Instructions">À chaque essai, vous entendrez une séquence de chiffres et on vous demandera de les écrire à nouveau dans le <b>MÊME</b> ordre dans lequel ils ont été entendus.</p>'},
		{'page': '<p class="Instructions">Par exemple, si vous entendiez les chiffres <br><b style="color:blue;">un</b>, <b style="color:blue;">deux</b>, <b style="color:blue;">trois</b> vous répondriez par <br><b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
	];
FR_Instructions.BackwardAudioInstructions = [ 
		{'page': '<p class="Instructions">À chaque essai, vous entendrez une séquence de chiffres et on vous demandera de les écrire à nouveau dans le <b>INVERSE</b> ordre dans lequel ils ont été entendus.</p>'},
		{'page': '<p class="Instructions">Par exemple, si vous entendiez les chiffres <br><b style="color:blue;">un</b>, <b style="color:blue;">deux</b>, <b style="color:blue;">trois</b> vous répondriez par <br><b style="color:blue;">3</b>, <b style="color:blue;">2</b>, <b style="color:blue;">1</b></p>'},
	    ];
FR_Instructions.ForwardVisualInstructions = [ 
		{'page': '<p class="Instructions">À chaque essai, vous verrez une séquence de chiffres et on vous demandera de les écrire à nouveau dans le <b>MÊME</b> ordre dans lequel ils ont été vus.</p>'},
		{'page': '<p class="Instructions">Par exemple, si vous verrez les chiffres <br><b style="color:blue;">un</b>, <b style="color:blue;">deux</b>, <b style="color:blue;">trois</b> vous répondriez par <br><b style="color:blue;">1</b>, <b style="color:blue;">2</b>, <b style="color:blue;">3</b></p>'},
		];
FR_Instructions.BackwardVisualInstructions = [ 
		{'page': '<p class="Instructions">À chaque essai, vous verrez une séquence de chiffres et on vous demandera de les écrire à nouveau dans le <b>INVERSE</b> ordre dans lequel ils ont été vus.</p>'},
		{'page': '<p class="Instructions">Par exemple, si vous verrez les chiffres <br><b style="color:blue;">un</b>, <b style="color:blue;">deux</b>, <b style="color:blue;">trois</b> vous répondriez par <br><b style="color:blue;">3</b>, <b style="color:blue;">2</b>, <b style="color:blue;">1</b></p>'},
		];
FR_Instructions.GettingStartedText = [
		{'page': '<p class="Instructions">Pour garantir des données de haute qualité, il est très important que vous n\'utilisiez aucun aide-mémoire (par exemple, un stylo et du papier).<br>Veuillez effectuer la tâche uniquement dans votre tête.</p>'},
	];
FR_Instructions.ThankYouText = [{'page':'Merci'}]
FR_Instructions.ForwardTrialQuestion = '<p class="Instructions">Entrez la liste des numéros dans le <b>MÊME</b> ordre</p>'
FR_Instructions.BackwardTrialQuestion = '<p class="Instructions">Entrez la liste des numéros dans le <b>INVERSE</b> ordre</p>'
FR_Instructions.TrialNumber = 'Essai numéro'
FR_Instructions.FolderOfAudioFiles = 'assets/SoundFiles/Digits/Set_fr_FR-Neural2-A_Speed70/'
FR_Instructions.NotesForResultsPage = "FR: The digit span task presented a list of number sequences to the participant who needed to repeat those sequences. The <b>Load List</b> is the length of each number sequence presented. The <b> Accuracy List refers to which sequencers were repeated correctlt, 1 = correct, 0 = incorrect. The overall score for this test is the <b>Threshold</b>. This calculation depends on the <b>Scoring Type</b> used. For <b> numberErrors </b> the threshold is highest sequence length correctly repeated."

add('EN_DigitSpan_Instructions_Default', function(){ DigitSpan_Instructions = EN_Instructions});
add('FR_DigitSpan_Instructions_Default', function(){ DigitSpan_Instructions = FR_Instructions});

