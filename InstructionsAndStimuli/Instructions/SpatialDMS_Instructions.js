var EN_Instructions = {}
EN_Instructions.Instructions01 = [
	{'page': 'This is a test of short-term memory. You will see one or more dots on the screen and you will need to remember where they are. '+
	'They will be removed from the screen. After a few seconds you will see a single blue dot. '+
	'You need to decide whether or not the blue dot is in one of the locations you studied.'},
	{'page': '<div class="InstructImage"><img src='+BaseFolderName+'EN_VSTMInstructions.png max-width="600px" alt=Instructional image</img></div>'},
	{'page': 'Press [Yes] on the screen or Left-Arrow on the keyboard if the dot WAS in the set.<br>Press [No] on the screen or Right-Arrow on the keyboard if the letter WAS NOT in the set.'},
	//{'page': 'You will NOT receive feedback after each trial.'},
	{'page': 'Try to respond as quickly and as accurately as possible.'},
	]
EN_Instructions.Instructions02 = [
	{'page': 'First, there will be some practice trials with feedback.'},
]	
EN_Instructions.Instructions03 = [
	{'page': 'Now you will perfom the test with no feedback.'},
]	
EN_Instructions.ThankYouText = [{'page':'Thank you. Press any key to continue.'}]
EN_Instructions.WelcomeText = [
    {'page': 'This is the Spatial Delayed Match to Sample Task.'}]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}
FR_Instructions.Instructions01 = [
	{'page': 'Il s\'agit d\'un test de mémoire à court terme. Vous verrez un ou plusieurs points à l\'écran et vous devrez vous rappeler où ils se trouvent. Ils seront supprimés de l\'écran après quelques secondes. Vous verrez un seul point bleu. Vous devez décider si le point bleu se trouve ou non dans l’un des endroits que vous avez étudiés.'},{'page': '<div class="InstructImage"><img src='+BaseFolderName+'FR_VSTMInstructions.png max-width="600px" alt=Instructional image</img></div>'},
	{'page': 'Appuyez sur [Oui] sur l\'écran ou flèche gauche sur le clavier si le point ÉTAIT dans l\'ensemble.<br>Appuyez sur [Non] sur l\'écran ou flèche driote sur le clavier si le point N\'ÉTAIT PAS dans l\'ensemble.'},
	

	//{'page': 'You will NOT receive feedback after each trial.'},
	{'page': 'Essayez de répondre le plus rapidement et le plus précisément possible.'},
	]
FR_Instructions.Instructions02 = [
	{'page': 'Vous effectuerez quelques essais avec des retours pour vous entraîner.'},
]	
FR_Instructions.Instructions03 = [
	{'page': 'Vous allez maintenant commencer la véritable tâche sans rétroaction.'},
]	
FR_Instructions.ThankYouText = [{'page':'Merci'}]
FR_Instructions.WelcomeText = [
    {'page': 'Bienvenu(e) dans la tâche de correspondance spatial retardé'}]
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions});