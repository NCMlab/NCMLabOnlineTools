// Hopkins Verbal Learning Word List

var WordListA = [
	{'Word':"Leg"},		    // 0
	{'Word':'Wool'}, 	    // 1
	{'Word':'Castle'}, 		// 2
	{'Word':'Tulip'},		// 3
	{'Word':'Blue'},	    // 4
	{'Word':'Horse'},		// 5
	{'Word':'Potato'},		// 6
	]

var AlternatePronunciationsWordListA = [
	]

var WordListB = [
	]
var RecognitionWordList = []

var AlternatePronunciationsWordListB = []
var FolderName = '../../assets/SoundFiles/Words/FaCE_en-US-Neural2-F_Speed70/'
var FileExtension = '.wav'

var NWords = WordListA.length

// The number of immediate recall blocks 
var NBlocks = 3


var FaCE = {}
FaCE.WordListA = WordListA
FaCE.AlternatePronunciationsWordListA = AlternatePronunciationsWordListA
FaCE.WordListB = WordListB
FaCE.AlternatePronunciationsWordListB = AlternatePronunciationsWordListB
FaCE.NWords = WordListA.length
