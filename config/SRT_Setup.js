// This is the word list with the defined spellings
// The word list may also be modified to have an index mapping added to it. 
var WordList = [
	{'Word':'THROW'}, 	// 0
	{'Word':'LILY'}, 	// 1
	{'Word':'FILM'},	// 2
	{'Word':'DISCREET'},// 3
	{'Word':'LOFT'},	// 4
	{'Word':'BEEF'},	// 5
	{'Word':'STREET'},	// 6
	{'Word':'HELMET'},	// 7
	{'Word':'SNAKE'},	// 8 
	{'Word':'DUG'},		// 9
	{'Word':'PACK'},	// 10
	{'Word':'TIN'},		// 11
	]

var AlternatePronunciationsWordList = [
	{'Word':'THROUGHOUT','index':0},
	{'Word':'THROUGH','index':0},
	{'Word':'ROW','index':0},
	{'Word':'DOUG','index':9},
	{'Word':'10','index':11},
	{'Word':'DOG','index':9}
	]

var ResponseButtons = [1,0]
// The number of immediate recall blocks 
var NBlocks = 6
// The time each word is presented on the screen for
var TimePerWord = 1000 // milliseconds
// The amount of time to show a crosshair on the screen between each word
var FixationTimeBetweenWords = 200 // milliseconds

var RecallDuration = 60 // in seconds

var FolderName = '../../assets/SoundFiles/Words/SRTSet001/'
var FileExtension = '.wav'

NWords = WordList.length
console.log(NWords)

var WordPrompt = "Yo"