var EN_Instructions = {}
EN_Instructions.Instructions01 = [
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

add('EN_vDMS_Instructions_Default', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}

FR_Instructions.Instructions = [
	{'page': '<p class="Instructions">Il s\'agit d\'un test de mémoire à court terme. Vous verrez une à neuf lettres à l\’écran dont vous devrez vous souvenir. Ils seront supprimés de l\'écran après quelques secondes. Vous verrez une seule lettre bleue. Vous devez décider si la lettre bleue faisait partie de l’ensemble que vous avez étudié.'},
	{'page': '<div><img src='+BaseFolderName+'DMSInstructions.png width=100% alt=Instructional image</image></div>'},
	{'page': '<p class="Instructions">Appuyez sur [Oui] si la lettre ÉTAIT dans l\'ensemble.<br>Appuyez sur [Non] si la lettre N\'ÉTAIT PAS dans l\'ensemble.</p>'},
	//{'page': '<p class="Instructions">Vous ne recevrez PAS de commentaires après chaque essai.</p>'},
	{'page': '<p class="Instructions">N\'oubliez pas que les lettres à étudier seront en blanc et en MAJUSCULES. La lettre de test sera en bleu et en minuscule.</p>'},
	{'page': '<p class="Instructions">Essayez de répondre le plus rapidement et le plus précisément possible. </p>'},
	]

FR_Instructions.ThankYouText = [{'page':'Merci.'}]

FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Bienvenu(e) dans la tâche de correspondance verbale retardée</p>'},
]
add('FR_vDMS_Instructions_Default', function(){ Instructions = FR_Instructions});