var EN_Instructions = {}
EN_Instructions.Instructions = [
	{'page': '<p class="Instructions">This is a test of short-term memory. You will see one through nine letters on the screen that you will need to remember.'+
	'They will be removed from the screen. After a few seconds you will see a single blue letter. '+
	'You need to decide whether or not the blue letter was one of the set you studied.'},
	{'page': '<div><img src='+BaseFolderName+'DMSInstructions.png width=100% alt=Instructional image</image></div>'},
	{'page': '<p class="Instructions">Press [Yes] if the letter WAS in the set.<br>Press [No] if the letter WAS NOT in the set.</p>'},
	//{'page': '<p class="Instructions">You will NOT receive feedback after each trial.</p>'},
	{'page': '<p class="Instructions">Remember that the letters to study will be in white and CAPITALIZED. The test letter will be in blue and will be lowercase.</p>'},
	{'page': '<p class="Instructions">Try to respond as quickly and as accurately as possible. Press next to begin.</p>'},
	]

EN_Instructions.ThankYouText = [{'page':'Thank you. Press any key to continue.'}]

EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Verbal Delayed Match to Sample  Task.</p>'},
]

add('EN_vDMS_Instructions', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}

FR_Instructions.Instructions = [
	{'page': '<p class="Instructions">FR: This is a test of short-term memory. You will see one through nine letters on the screen that you will need to remember.'+
	'They will be removed from the screen. After a few seconds you will see a single blue letter. '+
	'You need to decide whether or not the blue letter was one of the set you studied.'},
	{'page': '<div><img src='+BaseFolderName+'DMSInstructions.png width=100% alt=Instructional image</image></div>'},
	{'page': '<p class="Instructions">Press [Yes] if the letter WAS in the set.<br>Press [No] if the letter WAS NOT in the set.</p>'},
	//{'page': '<p class="Instructions">You will NOT receive feedback after each trial.</p>'},
	{'page': '<p class="Instructions">FR: Remember that the letters to study will be in white and CAPITALIZED. The test letter will be in blue and will be lowercase.</p>'},
	{'page': '<p class="Instructions">FR: Try to respond as quickly and as accurately as possible. Press next to begin.</p>'},
	]

FR_Instructions.ThankYouText = [{'page':'FR: Thank you. Press any key to continue.'}]

FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">FR: Welcome to the Verbal Delayed Match to Sample  Task.</p>'},
]
add('FR_vDMS_Instructions', function(){ Instructions = FR_Instructions});