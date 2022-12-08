var WordList = [
	{'Word':'THROW'},
	{'Word':'LILY'},
	{'Word':'FILM'},
	{'Word':'DISCREET'},
	{'Word':'LOFT'},
	{'Word':'BEEF'},
	{'Word':'STREET'},
	{'Word':'HELMET'},
	{'Word':'SNAKE'},
	{'Word':'DUG'},
	{'Word':'PACK'},
	{'Word':'TIN'},
	]
var WordListAlt01 = [
	{'Word':'THROUGHOUT'},
	{'Word':'LILY'},
	{'Word':'FILM'},
	{'Word':'DISCREET'},
	{'Word':'LOFT'},
	{'Word':'BEEF'},
	{'Word':'STREET'},
	{'Word':'HELMET'},
	{'Word':'SNAKE'},
	{'Word':'DOUG'},
	{'Word':'PACK'},
	{'Word':'10'},
	]
// Use this list to make sure the voice recognition works well
var WordListAlt02 = [
	{'Word':'ROW'},
	{'Word':'LILY'},
	{'Word':'FILM'},
	{'Word':'DISCREET'},
	{'Word':'LOFT'},
	{'Word':'BEEF'},
	{'Word':'STREET'},
	{'Word':'HELMET'},
	{'Word':'SNAKE'},
	{'Word':'DUG'},
	{'Word':'PACK'},
	{'Word':'TIN'},
	]

var ResponseButtons = [1,0]

var NBlocks = 5
var TimePerWord = 200 // milliseconds
var FixationTimeBetweenWords = 200 // milliseconds
var RecallInstructions = 'Please repeat the entire word list'
var GetReadyInstructions = 'Get ready for the next trial'
var Instructions = [
	{'page': 'You will see and hear a list of 12 words, presented one by one.'},
	{'page': 'After you see and hear the list, you will have to recall as many of the words as you can in 1 minute by speaking them out loud.'},
	{'page': 'For the words that were not recalled during the trial, they will be repeated and you will be asked to recall the entire list of words again.'},
	{'page': '(including the original list of words and the words you may have forgot). This procedure is repeated for 5 trials. Press Next to begin'},
	]

//ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]


