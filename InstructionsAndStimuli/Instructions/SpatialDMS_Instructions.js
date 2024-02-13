var EN_Instructions = {}
EN_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">This is a test of short-term memory. You will see one or more dots on the screen and you will need to remember where they are. '+
	'They will be removed from the screen. After a few seconds you will see a single blue dot. '+
	'You need to decide whether or not the blue dot is in one of the locations you studied.</p>'},
	{'page': '<div class="InstructImage"><img src='+BaseFolderName+'VSTMInstructions.png max-width="600px" alt=Instructional image</img></div></p>'},
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
FR_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">Il s\'agit d\'un test de mémoire à court terme. Vous verrez un ou plusieurs points à l\'écran et vous devrez vous rappeler où ils se trouvent. Ils seront supprimés de l\'écran après quelques secondes. Vous verrez un seul point bleu. Vous devez décider si le point bleu se trouve ou non dans l’un des endroits que vous avez étudiés.'},{'page': '<div class="InstructImage"><img src='+BaseFolderName+'VSTMInstructions.png max-width="600px" alt=Instructional image</img></div></p>'},
	{'page': '<p class="Instructions">Appuyez sur [Oui] si le point ÉTAIT dans l\'ensemble.<br>Appuyez sur [Non] si le point N\'ÉTAIT PAS dans l\'ensemble.'},
	

	//{'page': '<p class="Instructions">You will NOT receive feedback after each trial.</p>'},
	{'page': '<p class="Instructions">Essayez de répondre le plus rapidement et le plus précisément possible.'},
	]
FR_Instructions.Instructions02 = [
	{'page': '<p class="Instructions">Vous effectuerez quelques essais avec des retours pour vous entraîner.'},
]	
FR_Instructions.Instructions03 = [
	{'page': '<p class="Instructions">Vous allez maintenant commencer la véritable tâche sans rétroaction.'},
]	
FR_Instructions.ThankYouText = [{'page':'Merci'}]
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Bienvenu(e) dans la tâche de correspondance spatial retardé</p>'}]
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions});