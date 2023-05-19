// Hopkins Verbal Learning Word List

var WordListA = [
	{'Word':"Jambe"},		    // 0
	{'Word':'Laine'}, 	    // 1
	{'Word':'Chateau'}, 		// 2
	{'Word':'Tulipe'},		// 3
	{'Word':'Bleu'},	    // 4
	{'Word':'Cheval'},		// 5
	{'Word':'Patate'},		// 6
	]

var AlternatePronunciationsWordListA = [
	]

var WordListB = [
	]
var RecognitionWordList = []

var AlternatePronunciationsWordListB = []
var FolderName = '../../assets/SoundFiles/Words/FaCE_fr-FR-Neural2-A_Speed70/'
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
