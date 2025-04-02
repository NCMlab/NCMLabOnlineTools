
var EN_Instructions_Default = {}
EN_Instructions_Default.WelcomeText = [
    {'page': 'Welcome to the Word Recall Task.'},
]
EN_Instructions_Default.RecallInstructions = 'Please repeat the entire word list'
EN_Instructions_Default.GetReadyInstructions = 'Get ready for the next trial'
EN_Instructions_Default.Instructions01 = [
	{'page': 'You are going to hear a list of words, this is <b>List A</b>. Listen carefully. At the end of the list you are to repeat back as many words as you can recall.'},
	{'page': 'It does not matter in what order you repeat them, just try to recall as many as you can.'},
	]
EN_Instructions_Default.Instructions02 = [
	{'page': 'Now you will hear the same words again, and once again, at the end of the list repeat back as many words as you can recall, including words you said the first time. '},
	{'page': 'It does not matter in what order you say them, just say as many words as you can remember, whether or not you said them before.'},
	]
EN_Instructions_Default.Instructions03 = [
	{'page': 'Now you will hear a second list of words, this is <b>List B</b>. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. '},
	{'page': 'It does not matter in what order you repeat them, just try to remember as many as you can.'},
	]
EN_Instructions_Default.Instructions04 = [
	{'page': 'Now repeat back all the words you can recall from <b>List A</b>, the list you heard a number of times.'},
	]

EN_Instructions_Default.InstructionsDelayed = [
	{'page': 'Recall all the words you can remember from the list you heard a number of times, <b>List A</b>.'},
	]	

EN_Instructions_Default.WordPrompt = 'empty'
EN_Instructions_Default.ThankYouText = [{'page': 'Thank you'}]

EN_Instructions_Default.WordRecallPrompt = 'Which words were recalled?'
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions_Default});

// ====================================================


var FR_Instructions_Default = {}
FR_Instructions_Default.WelcomeText = [
    {'page': 'Bienvenu(e) dans la tâche de rappel de mots.'},
]
FR_Instructions_Default.RecallInstructions = 'Veuillez répéter toute la liste de mots'
FR_Instructions_Default.GetReadyInstructions = 'Préparez-vous pour le prochain essai'
FR_Instructions_Default.Instructions01 = [
	{'page': 'Vous entendrez une liste de mots. Ecoutez attentivement, en fin de liste vous devrez répéter tous les mots dont vous vous souviendrez. '},
	{'page': 'Peu importe l\'ordre dans lequel vous les répétez, essayez juste de vous souvenir d\'autant que vous le pouvez.'},
	]
	FR_Instructions_Default.Instructions02 = [
	{'page': 'Maintenant vous entendrez les mêmes mots, et encore une fois en fin de liste vous dites autant de mots dont vous vous souvenez, y compris les mots que vous avez dits la première fois. '},
	{'page': 'Peu importe l\'ordre dans lequel vous les dites, dites simplement autant de mots dont vous pouvez vous souvenir, que vous les aviez dits ou pas avant.'},
	]

	FR_Instructions_Default.Instructions03 = [
	{'page': 'Vous allez maintenant entendre une deuxième liste de mots, c\'est la <b>Liste B</b>. Écoutez attentivement, car à la fin de la liste, vous devez répéter autant de mots dont vous vous souvenez. '},
	{'page': 'Peu importe l\'ordre dans lequel vous les dites, dites simplement autant de mots dont vous pouvez vous souvenir, que vous les aviez dits ou pas avant.'},

	]
	FR_Instructions_Default.Instructions04 = [
	{'page': 'Dites tous les mots dont vous vous souvenez parmi <b>Liste A</b>, la liste que vous avez entendue à plusieurs reprises.'},
	]

	FR_Instructions_Default.InstructionsDelayed = [
		{'page': 'Dites tous les mots dont vous vous souvenez parmi <b>Liste A</b>, la liste que vous avez entendue à plusieurs reprises.'},
		]	
	
	FR_Instructions_Default.WordPrompt = 'empty'
	FR_Instructions_Default.ThankYouText = [{'page': 'Merci'}]

	FR_Instructions_Default.WordRecallPrompt = 'Quels mots ont été rappelés?'
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions_Default});



// ====================================================

var EN_Instructions = {}
EN_Instructions.WelcomeText = [
    {'page': 'Welcome to the Word Recall Task.'},
]
EN_Instructions.RecallInstructions = 'Please repeat the entire word list'
EN_Instructions.GetReadyInstructions = 'Get ready for the next trial'
EN_Instructions.Instructions01 = [
	{'page': 'You are going to hear a wordlist that you will have to remember. Pay close attention. When the list is done, you are to say as many words as possible that you remember from that list, in any given order'},	
	]
EN_Instructions.Instructions02 = [
	{'page': 'Now, you will hear the same wordlist a second time. Try to remember and say as many words as you can from that list, even the ones that you recalled during your first try, in any given order'},
	]
EN_Instructions.Instructions03 = [
	{'page': 'Now you will hear a second list of words. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. It does not matter in what order you repeat them, just try to remember as many as you can.<br/><br/> Press next to begin.'},
	]
EN_Instructions.Instructions04 = [
	{'page': 'Now repeat back all the words you can recall from the first list, the list you heard a number of times.<br/><br/>Press next to begin.'},
	]
EN_Instructions.InstructionsDelayed = [
	{'page': 'Earlier, you heard a wordlist that you were asked you to remember. Now, you are to name every word that you remember from that list.'},
	]	

EN_Instructions.WordPrompt = 'empty'
EN_Instructions.ThankYouText = [{'page': 'Try to remember the words from the list, you will be asked to repeat them at the end of the test.'}]
EN_Instructions.title = 'Word Recall'
EN_Instructions.WordRecallPrompt = 'Which words were recalled?'
EN_Instructions.IntrusionPrompt = 'Intrusion? (Words not in the list)'
add('EN_Instructions_FaCE', function(){ Instructions = EN_Instructions});

// ====================================================

var FR_Instructions = {}
FR_Instructions.WelcomeText = [
    {'page': 'Welcome to the Word Recall Task.'},
]
FR_Instructions.RecallInstructions = 'FR: Please repeat the entire word list'
FR_Instructions.GetReadyInstructions = 'Get ready for the next trial'
FR_Instructions.Instructions01 = [
	{'page': 'Je vais vous lire une liste de mots que vous aurez à retenir. Écoutez-les attentivement. Quand j\’aurai terminé, je veux que vous me redisiez le plus de mots possible dont vous vous rappelez, dans l\’ordre que vous voulez'},	
	]
	FR_Instructions.Instructions02 = [
	{'page': 'Maintenant je vais lire la même liste de mots une seconde fois. Essayez de vous rappeler du plus grand nombre de mots possible, y compris ceux que vous avez énoncés la première fois et dites les moi, dans l\’ordre que vous souhaitez'},
	]
	FR_Instructions.Instructions03 = [
	{'page': 'Now you will hear a second list of words. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. It does not matter in what order you repeat them, just try to remember as many as you can.<br/><br/> Press next to begin.'},
	]
	FR_Instructions.Instructions04 = [
	{'page': 'Now repeat back all the words you can recall from the first list, the list you heard a number of times.<br/><br/>Press next to begin.'},
	]
	FR_Instructions.InstructionsDelayed = [
	{'page': 'Je vous ai lu une série de mots plus tôt dont je vous ai demandé de vous rappeler. Maintenant, dites-moi tous les mots dont vous vous rappelez.'},
	]	

FR_Instructions.WordPrompt = 'empty'
FR_Instructions.ThankYouText = [{'page': 'Gardez-en mémoire les mots que je vous ai lus, je vais vous demander de les répéter à la fin du test.'}]
FR_Instructions.title = 'Rappel différé'
FR_Instructions.WordRecallPrompt = 'Quels mots ont été rappelés?'
FR_Instructions.IntrusionPrompt = 'Intrusion? (Mots absents de la liste)'
add('FR_Instructions_FaCE', function(){ Instructions = FR_Instructions});