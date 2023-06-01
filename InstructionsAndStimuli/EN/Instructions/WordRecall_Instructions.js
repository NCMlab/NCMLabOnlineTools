
var EN_Instructions = {}
EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Word Recall Task.</p>'},
]
EN_Instructions.RecallInstructions = 'Please repeat the entire word list'
EN_Instructions.GetReadyInstructions = 'Get ready for the next trial'
EN_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">You are going to hear a list of words. Listen carefully. At the end of the list you are to repeat back as many words as you can recall.</p>'},
	{'page': '<p class="Instructions">It does not matter in what order you repeat them, just try to recall as many as you can.<br/><br/>Press Next to begin.</p>'},
	]
EN_Instructions.Instructions02 = [
	{'page': '<p class="Instructions">Now you will hear the same words again, and once again, at the end of the list repeat back as many words as you can recall, including words you said the first time. </p>'},
	{'page': '<p class="Instructions">It does not matter in what order you say them, just say as many words as you can remember, whether or not you said them before.<br/><br/>Press next to begin.</p>'},
	]
EN_Instructions.Instructions03 = [
	{'page': '<p class="Instructions">Now you will hear a second list of words. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. It does not matter in what order you repeat them, just try to remember as many as you can.<br/><br/> Press next to begin.</p>'},
	]
EN_Instructions.Instructions04 = [
	{'page': '<p class="Instructions">Now repeat back all the words you can recall from the first list, the list you saw a number of times.<br/><br/>Press next to begin.</p>'},
	]
EN_Instructions.WordPrompt = 'empty'
EN_Instructions.ThankYouText = [{'page': 'Thank you'}]

EN_Instructions.WordRecallPrompt = 'Which words were recalled?'
add('EN_Instructions', function(){ Instructions = EN_Instructions});

// ======


var FR_Instructions = {}
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">FR: Welcome to the Word Recall Task.</p>'},
]
FR_Instructions.RecallInstructions = 'FR: Please repeat the entire word list'
FR_Instructions.GetReadyInstructions = 'FR: Get ready for the next trial'
FR_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">FR: You are going to hear a list of words. Listen carefully. At the end of the list you are to repeat back as many words as you can recall.</p>'},
	{'page': '<p class="Instructions">FR: It does not matter in what order you repeat them, just try to recall as many as you can.<br/><br/>Press Next to begin.</p>'},
	]
FR_Instructions.Instructions02 = [
	{'page': '<p class="Instructions">FR: Now you will hear the same words again, and once again, at the end of the list repeat back as many words as you can recall, including words you said the first time. </p>'},
	{'page': '<p class="Instructions">FR: It does not matter in what order you say them, just say as many words as you can remember, whether or not you said them before.<br/><br/>Press next to begin.</p>'},
	]
FR_Instructions.Instructions03 = [
	{'page': '<p class="Instructions">FR: Now you will hear a second list of words. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. It does not matter in what order you repeat them, just try to remember as many as you can.<br/><br/> Press next to begin.</p>'},
	]
FR_Instructions.Instructions04 = [
	{'page': '<p class="Instructions">FR: Now repeat back all the words you can recall from the first list, the list you saw a number of times.<br/><br/>Press next to begin.</p>'},
	]
FR_Instructions.WordPrompt = 'empty'
FR_Instructions.ThankYouText = [{'page': 'FR: Thank you'}]
add('FR_Instructions', function(){ Instructions = FR_Instructions});
