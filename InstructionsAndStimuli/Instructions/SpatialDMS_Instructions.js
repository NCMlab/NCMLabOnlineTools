var EN_Instructions = {}
EN_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">This is a test of short-term memory. You will see one or more dots on the screen and you will need to remember where they are. '+
	'They will be removed from the screen. After a few seconds you will see a single blue dot. '+
	'You need to decide whether or not the blue dot is in one of the locations you studied.</p>'},
	{'page': '<div><img src='+BaseFolderName+'VSTMInstructions.png width=100% alt=Instructional image</image></div></p>'},
	{'page': '<p class="Instructions">Press [Yes] if the dot WAS in the set.<br>Press [No] if the letter WAS NOT in the set.</p>'},
	//{'page': '<p class="Instructions">You will NOT receive feedback after each trial.</p>'},
	{'page': '<p class="Instructions">Try to respond as quickly and as accurately as possible.</p>'},
	]
EN_Instructions.Instructions02 = [
	{'page': '<p class="Instructions">First, there will be some practice trials with feedback.</p>'},
]	
EN_Instructions.Instructions03 = [
	{'page': '<p class="Instructions">Now you will perfom the test with no feedback.</p>'},
]	
EN_Instructions.ThankYouText = [{'page':'Thank you. Press any key to continue.</p>'}]
EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">This is the Spatial Delayed Match to Sample Task.</p>'}]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}
FR_Instructions.instructions = [
	{'page': '<p class="Instructions">FR: This is a test of short-term memory. You will see one or more dots on the screen and you will need to remember where they are. '+
	'They will be removed from the screen. After a few seconds you will see a single blue dot. '+
	'You need to decide whether or not the blue dot is in one of the locations you studied. '},
	{'page': '<div><img src='+BaseFolderName+'VSTMInstructions.png width=100% alt=Instructional image</image></div>'},
	{'page': '<p class="Instructions">FR: Press [Yes] if the dot WAS in the set.<br>Press [No] if the letter WAS NOT in the set.</p>'},
	//{'page': '<p class="Instructions">You will NOT receive feedback after each trial.</p>'},
	{'page': '<p class="Instructions">FR: Try to respond as quickly and as accurately as possible. Press next to begin.</p>'},
	]
FR_Instructions.ThankYouText = [{'page':'FR: Thank you. Press any key to continue.'}]
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">FR: Welcome to the Spatial Delayed Match to Sample  Task.</p>'},
]
add('FR_SpatialDMS_Instructions_Default', function(){ Instructions = FR_Instructions});