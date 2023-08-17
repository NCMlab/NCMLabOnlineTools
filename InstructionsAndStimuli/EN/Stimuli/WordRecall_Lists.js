// ====================================================================================
// === FaCE ===========================================================================
var EN_FaCE = {}
EN_FaCE.WordListA = [
	{'Word':"Leg"},		    // 0
	{'Word':'Wool'}, 	    // 1
	{'Word':'Castle'}, 		// 2
	{'Word':'Tulip'},		// 3
	{'Word':'Blue'},	    // 4
	{'Word':'Horse'},		// 5
	{'Word':'Potato'},		// 6
	]

EN_FaCE.AlternatePronunciationsWordListA = []
EN_FaCE.WordListB = []
EN_FaCE.RecognitionWordList = []
EN_FaCE.AlternatePronunciationsWordListB = []
EN_FaCE.FolderName = '../../assets/SoundFiles/Words/FaCE_en-US-Neural2-F_Speed70/'
EN_FaCE.FileExtension = '.wav'
EN_FaCE.NWords = EN_FaCE.WordListA.length
// The number of immediate recall blocks 
EN_FaCE.NBlocks = 3

add('EN_FaCE', function(){ WordRecallLists = EN_FaCE});
// ====================================================================================
var FR_FaCE = {}
FR_FaCE.WordListA = [
	{'Word':"Jambe"},		    // 0
	{'Word':'Laine'}, 	    // 1
	{'Word':'Chateau'}, 		// 2
	{'Word':'Tulipe'},		// 3
	{'Word':'Bleu'},	    // 4
	{'Word':'Cheval'},		// 5
	{'Word':'Patate'},		// 6
	]
FR_FaCE.AlternatePronunciationsWordListA = []
FR_FaCE.WordListB = []
FR_FaCE.RecognitionWordList = []
FR_FaCE.AlternatePronunciationsWordListB = []
FR_FaCE.FolderName = '../../assets/SoundFiles/Words/FaCE_fr-FR-Neural2-A_Speed70/'
FR_FaCE.FileExtension = '.wav'
FR_FaCE.NWords = EN_FaCE.WordListA.length
// The number of immediate recall blocks 
FR_FaCE.NBlocks = 3
add('FR_FaCE', function(){ WordRecallLists = FR_FaCE});
// ====================================================================================
// ===== RAVLT ========================================================================
// Rey auditory verbal learning test
var EN_RAVLT = {}
EN_RAVLT.WordListA = [
	{'Word':'Drum'}, 		// 0
	{'Word':'Curtain'}, 	// 1
	{'Word':'Bell'},		// 2
	{'Word':'Coffee'},		// 3
	{'Word':'School'},		// 4
	{'Word':'Parent'},		// 5
	{'Word':'Moon'},		// 6
	{'Word':'Garden'},		// 7
	{'Word':'Hat'},			// 8 
	{'Word':'Farmer'},		// 9
	{'Word':'Nose'},		// 10
	{'Word':'Turkey'},		// 11
	{'Word':'Color'},		// 12
	{'Word':'House'},		// 13
	{'Word':'River'},		// 14
	]
EN_RAVLT.AlternatePronunciationsWordListA = [
	{'Word':'COLOUR','index':12},
	{'Word':'KNOWS','index':10}
	]
EN_RAVLT.WordListB = [
	{'Word':'Desk'},
	{'Word':'Ranger'},
	{'Word':'Bird'},
	{'Word':'Shoe'},
	{'Word':'Stove'},
	{'Word':'Mountain'},
	{'Word':'Glasses'},
	{'Word':'Towel'},
	{'Word':'Cloud'},
	{'Word':'Boat'},
	{'Word':'Lamb'},
	{'Word':'Gun'},
	{'Word':'Pencil'},
	{'Word':'Church'},
	{'Word':'Fish'},
	]
EN_RAVLT.AlternatePronunciationsWordListB = []
EN_RAVLT.NWords = EN_RAVLT.WordListA.length
EN_RAVLT.RecognitionWordList = [
	{'Word':'Teacher'},
	{'Word':'River'},
	{'Word':'Bridge'},
	{'Word':'Farmer'},
	{'Word':'Pen'},
	{'Word':'Forehead'},
	{'Word':'Kerchief'},
	{'Word':'House'},
	{'Word':'Moon'},
	{'Word':'Color'},
	{'Word':'Beet'},
	{'Word':'Curtain'},
	{'Word':'Floor'},
	{'Word':'Soldier'},
	{'Word':'Drum'},
	{'Word':'Coffee'},
	{'Word':'Road'},
	{'Word':'Hat'},
	{'Word':'Turkey'},
	{'Word':'Minute'},
	{'Word':'Nose'},
	{'Word':'School'},
	{'Word':'Bell'},
	{'Word':'Face'},
	{'Word':'Garden'},
	{'Word':'Classroom'},
	{'Word':'Parent'},
	{'Word':'Children'},
	{'Word':'Broomstick'},
	{'Word':'Gun'}
]
add('EN_RAVLT', function(){ WordRecallLists = EN_RAVLT});

// === TEST ===========================================================================
var EN_TEST = {}
EN_TEST.WordListA = [
	{'Word':'Pencil'},
	{'Word':'Church'},
	{'Word':'Fish'},
	]

	EN_TEST.AlternatePronunciationsWordListA = []
	EN_TEST.WordListB = []
	EN_TEST.RecognitionWordList = [
		{'Word':'Pencil'},
		{'Word':'Church'},
		{'Word':'Fish'},
		{'Word':'Children'},
		{'Word':'Broomstick'},
		{'Word':'Gun'}
	]
	EN_TEST.AlternatePronunciationsWordListB = []
	EN_TEST.NWords = EN_FaCE.WordListA.length
// The number of immediate recall blocks 
EN_TEST.NBlocks = 1

add('EN_TEST', function(){ WordRecallLists = EN_TEST});