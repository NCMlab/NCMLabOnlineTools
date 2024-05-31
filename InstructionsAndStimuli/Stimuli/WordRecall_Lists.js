// ====================================================================================
/* This file is used for specifying the word lists only. The config file will handle
everything about the sound file locations and number of trials.
*/

// === TEST RECALL ===========================================================================
var EN_Test = {}
EN_Test.WordListA = [
	{'Word':"Leg"},		    // 0
	]
EN_Test.AlternatePronunciationsWordListA = []
EN_Test.WordListB = []
EN_Test.RecognitionWordList = []
EN_Test.AlternatePronunciationsWordListB = []
EN_Test.FolderName = '../../assets/SoundFiles/Words/FaCE_en-US-Neural2-F_Speed70/'
EN_Test.FileExtension = '.wav'
EN_Test.NWords = EN_Test.WordListA.length
// The number of immediate recall blocks 
EN_Test.NBlocks = 1
add('EN_Test', function(){ WordRecallLists = EN_Test});


// ====================================================================================
// === FaCE ===========================================================================

var EN_FaCE_VerA = {}
EN_FaCE_VerA.WordListA = [
	{'Word':"Leg"},		    // 0
	{'Word':'Wool'}, 	    // 1
	{'Word':'Castle'}, 		// 2
	{'Word':'Tulip'},		// 3
	{'Word':'Blue'},	    // 4
	{'Word':'Horse'},		// 5
	{'Word':'Potato'},		// 6
	]
EN_FaCE_VerA.AlternatePronunciationsWordListA = []
EN_FaCE_VerA.WordListB = []
EN_FaCE_VerA.RecognitionWordList = []
EN_FaCE_VerA.AlternatePronunciationsWordListB = []
EN_FaCE_VerA.NWords = EN_FaCE_VerA.WordListA.length
add('EN_FaCE_VerA', function(){ WordRecallLists = EN_FaCE_VerA});

var EN_FaCE_VerB = {}
EN_FaCE_VerB.WordListA = [
	{'Word':"Neck"},		    // 0
	{'Word':'Wax'}, 	    // 1
	{'Word':'Cable'}, 		// 2
	{'Word':'Turnip'},		// 3
	{'Word':'Red'},	    // 4
	{'Word':'Fish'},		// 5
	{'Word':'Violin'},		// 6
	]
EN_FaCE_VerB.AlternatePronunciationsWordListA = []
EN_FaCE_VerB.WordListB = []
EN_FaCE_VerB.RecognitionWordList = []
EN_FaCE_VerB.AlternatePronunciationsWordListB = []
EN_FaCE_VerB.NWords = EN_FaCE_VerB.WordListA.length
add('EN_FaCE_VerB', function(){ WordRecallLists = EN_FaCE_VerB});
	
// ====================================================================================
// ====== TRAINING FaCE Word List
var EN_FaCE_Training = {}
EN_FaCE_Training.WordListA = [
	{'Word':"Arm"},		    // 0 
	{'Word':'Cotton'}, 	    // 1
	{'Word':'House'}, 		// 2
	]
EN_FaCE_Training.AlternatePronunciationsWordListA = []
EN_FaCE_Training.WordListB = [{'Word':"Neck"},		    // 0
{'Word':'Wax'}, 	    // 1
{'Word':'Cable'}], 		// 2
EN_FaCE_Training.RecognitionWordList = []
EN_FaCE_Training.AlternatePronunciationsWordListB = []
EN_FaCE_Training.FolderName = '../../assets/SoundFiles/Words/FaCE/EN/EN-US-Neural2-F/'
EN_FaCE_Training.FileExtension = '.wav'
EN_FaCE_Training.NWords = EN_FaCE_Training.WordListA.length
add('EN_FaCE_Training', function(){ WordRecallLists = EN_FaCE_Training});

// ====================================================================================

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
	{'Word':'KNOWS','index':10},
	{'Word':'NEWS','index':10},
	{'Word':'PARENTS','index':5},
	{'Word':'BELLE','index':2},
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
	{'Word':'Teacher','Answer':false},
	{'Word':'River','Answer':true},
	{'Word':'Bridge','Answer':false},
	{'Word':'Farmer','Answer':true},
	{'Word':'Pen','Answer':false},
	{'Word':'Forehead','Answer':false},
	{'Word':'Kerchief','Answer':false},
	{'Word':'House','Answer':true},
	{'Word':'Moon','Answer':true},
	{'Word':'Color','Answer':true},
	{'Word':'Beet','Answer':false},
	{'Word':'Curtain','Answer':true},
	{'Word':'Floor','Answer':false},
	{'Word':'Soldier','Answer':false},
	{'Word':'Drum','Answer':true},
	{'Word':'Coffee','Answer':true},
	{'Word':'Road','Answer':false},
	{'Word':'Hat','Answer':true},
	{'Word':'Turkey','Answer':true},
	{'Word':'Minute','Answer':false},
	{'Word':'Nose','Answer':true},
	{'Word':'School','Answer':true},
	{'Word':'Bell','Answer':true},
	{'Word':'Face','Answer':false},
	{'Word':'Garden','Answer':true},
	{'Word':'Classroom','Answer':false},
	{'Word':'Parent','Answer':true},
	{'Word':'Children','Answer':false},
	{'Word':'Broomstick','Answer':false},
	{'Word':'Gun','Answer':false}
]
add('EN_RAVLT', function(){ WordRecallLists = EN_RAVLT});

// ===============================================================
var FR_RAVLT = {}
FR_RAVLT.WordListA = [
	{'Word':'Tambour'}, 	// 0
	{'Word':'Rideau'}, 		// 1
	{'Word':'Sonnette'},	// 2
	{'Word':'Café'},		// 3
	{'Word':'École'},		// 4
	{'Word':'Parent'},		// 5
	{'Word':'Lune'},		// 6
	{'Word':'Jardin'},		// 7
	{'Word':'Chapeau'},		// 8 
	{'Word':'Paysan'},		// 9
	{'Word':'Nez'},			// 10
	{'Word':'Dindon'},		// 11
	{'Word':'Couleur'},		// 12
	{'Word':'Maison'},		// 13
	{'Word':'Rivère'},		// 14
	]
FR_RAVLT.AlternatePronunciationsWordListA = [
	]
FR_RAVLT.WordListB = [
	{'Word':'Bureau'},
	{'Word':'Garde forestier'},
	{'Word':'Oiseau'},
	{'Word':'Chaussure'},
	{'Word':'Poêle'},
	{'Word':'Montagne'},
	{'Word':'Lunettes'},
	{'Word':'Serviette'},
	{'Word':'Nuage'},
	{'Word':'Bateau'},
	{'Word':'Agneau'},
	{'Word':'Fusil'},
	{'Word':'Crayon'},
	{'Word':'Eglise'},
	{'Word':'Poisson'},
	]
FR_RAVLT.AlternatePronunciationsWordListB = []
FR_RAVLT.NWords = FR_RAVLT.WordListA.length
FR_RAVLT.RecognitionWordList = [
	{'Word':'Enseignant','Answer':false},
	{'Word':'Rivère','Answer':true},
	{'Word':'Pont','Answer':false},
	{'Word':'Paysan','Answer':true},
	{'Word':'Stylo','Answer':false},
	{'Word':'Front','Answer':false},
	{'Word':'Mouchoir','Answer':false},
	{'Word':'Maison','Answer':true},
	{'Word':'Lune','Answer':true},
	{'Word':'Couleur','Answer':true},
	{'Word':'Betterave','Answer':false},
	{'Word':'Rideau','Answer':true},
	{'Word':'Sol','Answer':false},
	{'Word':'Soldat','Answer':false},
	{'Word':'Tambour','Answer':true},
	{'Word':'Café','Answer':true},
	{'Word':'Route','Answer':false},
	{'Word':'Chapeau','Answer':true},
	{'Word':'Dindon','Answer':true},
	{'Word':'Minuscule','Answer':false},
	{'Word':'Nez','Answer':true},
	{'Word':'École','Answer':true},
	{'Word':'Sonnette','Answer':true},
	{'Word':'Visage','Answer':false},
	{'Word':'Jardin','Answer':true},
	{'Word':'Salle de Classe','Answer':false},
	{'Word':'Parent','Answer':true},
	{'Word':'Enfants','Answer':false},
	{'Word':'Balais','Answer':false},
	{'Word':'Fusil','Answer':false}
]
add('FR_RAVLT', function(){ WordRecallLists = FR_RAVLT});


// === DEMO ===========================================================================

var EN_Demo = {}
EN_Demo.WordListA = [
	{'Word':"River"},		    // 0
	{'Word':'Flower'}, 	    // 1
	{'Word':'Mountain'}, 		// 2
	//{'Word': 'Garden'},
	//{'Word': 'Bicycle'},
	]
	EN_Demo.AlternatePronunciationsWordListA = [
		{'Word':'FLOUR','index':1},
	]
	EN_Demo.WordListB = []
	EN_Demo.RecognitionWordList = []
	EN_Demo.AlternatePronunciationsWordListB = []
	EN_Demo.NWords = EN_Demo.WordListA.length
add('EN_Demo', function(){ WordRecallLists = EN_Demo});



var EN_FaCE_VerB = {}
EN_FaCE_VerB.WordListA = [
	{'Word':"Neck"},		    // 0
	{'Word':'Wax'}, 	    // 1
	{'Word':'Cable'}, 		// 2
	{'Word':'Turnip'},		// 3
	{'Word':'Red'},	    // 4
	{'Word':'Fish'},		// 5
	{'Word':'Violin'},		// 6
	]
EN_FaCE_VerB.AlternatePronunciationsWordListA = []
EN_FaCE_VerB.WordListB = []
EN_FaCE_VerB.RecognitionWordList = []
EN_FaCE_VerB.AlternatePronunciationsWordListB = []
EN_FaCE_VerB.NWords = EN_FaCE_VerB.WordListA.length
add('EN_FaCE_VerB', function(){ WordRecallLists = EN_FaCE_VerB});
	
