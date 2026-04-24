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

var EN_RAVLTSHORT = {}
EN_RAVLTSHORT.WordListA = [
	{'Word':'Drum'}, 		// 0
	{'Word':'Curtain'}, 	// 1
	{'Word':'Bell'},		// 2
	{'Word':'Coffee'},		// 3
]
EN_RAVLTSHORT.AlternatePronunciationsWordListA = []
EN_RAVLTSHORT.WordListB = [
	{'Word':'Desk'},
	{'Word':'Ranger'},
	{'Word':'Bird'},
	{'Word':'Shoe'},
]
EN_RAVLTSHORT.AlternatePronunciationsWordListB = []
EN_RAVLTSHORT.NWords = EN_RAVLT.WordListA.length
EN_RAVLTSHORT.RecognitionWordList = [
	{'Word':'Teacher','Answer':false},
	{'Word':'River','Answer':true},
	{'Word':'Bridge','Answer':false},
	{'Word':'Farmer','Answer':true},
	{'Word':'Pen','Answer':false},
]
add('EN_RAVLTSHORT', function(){ WordRecallLists = EN_RAVLTSHORT});

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
	{'Word':"napkin"},
	{'Word':"rocket"},
	{'Word':"basket"},
	{'Word':"velvet"},
	{'Word':"goblin"}
	]
	EN_Demo.AlternatePronunciationsWordListA = [
	{'Word':'Cheque','index':2},
	{'Word':'Tin','index':3},
	]
	EN_Demo.WordListB = []
	EN_Demo.RecognitionWordList = [
		{'Word':'Dog',	'Answer':true},
		{'Word':'Cat',	'Answer':false},
		{'Word':'City',	'Answer':true},
		{'Word':'Town',	'Answer':false},
		{'Word':'Check','Answer':true},
		{'Word':'Paper','Answer':false},
		{'Word':'Ten',	'Answer':true},
		{'Word':'Four',	'Answer':false},
		{'Word':'Ocean','Answer':true},
		{'Word':'Sea',	'Answer':false},
	]
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
	


// ===== CERAD ========================================================================
// Rey auditory verbal learning test
// Only visual presentation of words
// Free recall of words
// Three trials
// Ten minute delay
// This is often filled with:
/* Constructional Praxis Test: tests visuoconstructive abilities by asking patients to copy a
circle, a diamond, intersecting rectangles, and a three-dimensional cube (maximum score
= 11). After 5 minutes, patients are asked to reproduce as many of the drawings as
possible, without seeing them (constructional praxis recall; maximum score = 11). */
// Free recall
// Recognition trial

var EN_CERAD = {}
EN_CERAD.WordListA = [
	{'Word':'Butter'}, 		// 0
	{'Word':'Arm'}, 		// 1
	{'Word':'Shore'},		// 2
	{'Word':'Letter'},		// 3
	{'Word':'Queen'},		// 4
	{'Word':'Cabin'},		// 5
	{'Word':'Pole'},		// 6
	{'Word':'Ticket'},		// 7
	{'Word':'Grass'},		// 8 
	{'Word':'Engine'}		// 9
]

EN_CERAD.RecognitionWordList = [
	{'Word':'School',	'Answer':false},
	{'Word':'Coffee',	'Answer':false},
	{'Word':'Butter',	'Answer':true},
	{'Word':'Dollar',	'Answer':false},
	{'Word':'Arm',		'Answer':true},
	{'Word':'Shore',	'Answer':true},
	{'Word':'Five',		'Answer':false},
	{'Word':'Letter',	'Answer':true},
	{'Word':'Hotel',	'Answer':false},
	{'Word':'Mountain',	'Answer':false},
	{'Word':'Queen',	'Answer':true},
	{'Word':'Cabin',	'Answer':true},
	{'Word':'Slipper',	'Answer':false},
	{'Word':'Pole',		'Answer':true},
	{'Word':'Village',	'Answer':false},
	{'Word':'String',	'Answer':false},
	{'Word':'Ticket',	'Answer':true},
	{'Word':'Troops',	'Answer':false},
	{'Word':'Grass',	'Answer':true},
	{'Word':'Engine',	'Answer':true}
]
	
// =====================================================
// Word rate of one word every 2 sec
// No visual presentation of words only auditory
// Three trials, each followed by a recall
// Then a recognition trial
// Score: Number of true positive (out of 12)
// Number of false positives: Related (out of 6); Unrelated (out of 6) 
// Discrimination index: (#TP - #FP)
// https://static1.squarespace.com/static/548f3b5ce4b0ab0288d52cf5/t/5502073be4b0e85d639f7ec1/1426196283131/Hopkins.pdf
// "prompt": "Read aloud in a warm, welcoming tone.",  
// "voice": {
//     "languageCode": "en-us",
//     "modelName": "gemini-3.1-flash-tts-preview",
//     "name": "Achernar"
// Need to fix manual scoring of tasks
EN_Hopkins = {}
EN_Hopkins.WordList01 = [
	{'Word':'LION'},   	// 0
	{'Word':'EMERALD'},   // 1
	{'Word':'HORSE'},     // 2
	{'Word':'TENT'},      // 3
	{'Word':'SAPPHIRE'},  // 4
	{'Word':'HOTEL'},     // 5
	{'Word':'CAVE'},      // 6
	{'Word':'OPAL'},      // 7
	{'Word':'TIGER'},     // 8
	{'Word':'PEARL'},     // 9
	{'Word':'COW'},       // 10
	{'Word':'HUT'},       // 11
]
EN_Hopkins.RecognitionWordList01 = [
	{'Word':'Horse',     'Answer':true},
	{'Word':'Ruby',      'Answer':false},
	{'Word':'Cave',      'Answer':true},
	{'Word':'Balloon',   'Answer':false},
	{'Word':'Coffee',    'Answer':false},
	{'Word':'Lion',      'Answer':true},
	{'Word':'House',     'Answer':false},
	{'Word':'Opal',      'Answer':true},
	{'Word':'Tiger',     'Answer':true},
	{'Word':'Boat',      'Answer':false},
	{'Word':'Scarf',     'Answer':false},
	{'Word':'Pearl',     'Answer':true},
	{'Word':'Hut',       'Answer':true},
	{'Word':'Emerald',   'Answer':true},
	{'Word':'Sapphire',  'Answer':true},
	{'Word':'Dog',       'Answer':false},
	{'Word':'Apartment', 'Answer':false},
	{'Word':'Penny',     'Answer':false},
	{'Word':'Tent',      'Answer':true},
	{'Word':'Mountain',  'Answer':false},
	{'Word':'Cat',       'Answer':false},
	{'Word':'Hotel',     'Answer':true},
	{'Word':'Cow',       'Answer':true},
	{'Word':'Diamond',   'Answer':false}
]

EN_Hopkins.WordList01 = [
	{'Word':'Fork'},     // 0
	{'Word':'Rum'},      // 1
	{'Word':'Pan'},      // 2
	{'Word':'Pistol'},   // 3
	{'Word':'Sword'},    // 4
	{'Word':'Spatula'},  // 5
	{'Word':'Bourbon'},  // 6
	{'Word':'Vodka'},    // 7
	{'Word':'Pot'},      // 8
	{'Word':'Cow'},      // 9
	{'Word':'Hut'},      // 10
	{'Word':'Wine'},     // 11
]
EN_Hopkins.RecognitionWordList01 = [
	{'Word':'Spoon',      'Answer':false},
	{'Word':'Pistol',     'Answer':true},
	{'Word':'Doll',       'Answer':false},
	{'Word':'Whiskey',    'Answer':false},
	{'Word':'Fork',       'Answer':true},
	{'Word':'Pot',        'Answer':true},
	{'Word':'Harmonica',  'Answer':false},
	{'Word':'Can Opener', 'Answer':false},
	{'Word':'Sword',      'Answer':true},
	{'Word':'Pencil',     'Answer':false},
	{'Word':'Gun',        'Answer':false},
	{'Word':'Vodka',      'Answer':true},
	{'Word':'Knife',      'Answer':false},
	{'Word':'Rum',        'Answer':true},
	{'Word':'Trout',      'Answer':false},
	{'Word':'Bomb',       'Answer':true},
	{'Word':'Pan',        'Answer':true},
	{'Word':'Gold',       'Answer':false},
	{'Word':'Wine',       'Answer':true},
	{'Word':'Lemon',      'Answer':false},
	{'Word':'Spatula',    'Answer':true},
	{'Word':'Bourbon',    'Answer':true},
	{'Word':'Beer',       'Answer':false},
	{'Word':'Rifle',      'Answer':true},
]
EN_Hopkins.WordList01 = [
	{'Word':'Sugar'},     // 0
	{'Word':'Trumpet'},  // 1
	{'Word':'Violin'},   // 2
	{'Word':'Coal'},     // 3
	{'Word':'Garlic'},   // 4
	{'Word':'Kerosine'}, // 5
	{'Word':'Vanilla'},  // 6
	{'Word':'Wood'},     // 7
	{'Word':'Clarinet'}, // 8
	{'Word':'Flute'},    // 9
	{'Word':'Cinnamon'}, // 10
	{'Word':'Gasoline'}, // 11
]
EN_Hopkins.RecognitionWordList01 = [
	{'Word':'Pepper',      'Answer':false},
	{'Word':'Garlic',      'Answer':true},
	{'Word':'Wood',        'Answer':true},
	{'Word':'Drum',        'Answer':false},
	{'Word':'Oil',         'Answer':false},
	{'Word':'Sugar',       'Answer':true},
	{'Word':'Harmonica',   'Answer':false},
	{'Word':'Salt',        'Answer':false},
	{'Word':'Priest',      'Answer':false},
	{'Word':'Chair',       'Answer':false},
	{'Word':'Coal',        'Answer':true},
	{'Word':'Clarinet',    'Answer':true},
	{'Word':'Trumpet',     'Answer':true},
	{'Word':'Basement',    'Answer':false},
	{'Word':'Cinnamon',    'Answer':true},
	{'Word':'Flute',       'Answer':true},
	{'Word':'Electricity', 'Answer':false},
	{'Word':'Moon',        'Answer':false},
	{'Word':'Kerosine',    'Answer':true},
	{'Word':'Vanilla',     'Answer':true},
	{'Word':'Gasoline',    'Answer':true},
	{'Word':'Sand',        'Answer':false},
	{'Word':'Piano',       'Answer':false},
	{'Word':'Violin',      'Answer':true},
]
EN_Hopkins.WordList01 = [
	{'Word':'Canary'},      // 0
	{'Word':'Shoes'},       // 1
	{'Word':'Eagle'},       // 2
	{'Word':'Blouse'},      // 3
	{'Word':'Nails'},       // 4
	{'Word':'Crow'},        // 5
	{'Word':'Bluebird'},    // 6
	{'Word':'Screwdriver'}, // 7
	{'Word':'Pants'},       // 8
	{'Word':'Chisel'},      // 9
	{'Word':'Skirt'},       // 10
	{'Word':'Wrench'},      // 11
]
EN_Hopkins.RecognitionWordList01 = [
	{'Word':'Bluebird',     'Answer':true},
	{'Word':'Shirt',        'Answer':false},
	{'Word':'Chisel',       'Answer':true},
	{'Word':'Eagle',        'Answer':true},
	{'Word':'Chocolate',    'Answer':false},
	{'Word':'Robin',        'Answer':false},
	{'Word':'Chapel',       'Answer':false},
	{'Word':'Screwdriver',  'Answer':true},
	{'Word':'Crow',         'Answer':true},
	{'Word':'Sparrow',      'Answer':false},
	{'Word':'Wrench',       'Answer':true},
	{'Word':'Pants',        'Answer':true},
	{'Word':'Nails',        'Answer':true},
	{'Word':'Socks',        'Answer':false},
	{'Word':'Child',        'Answer':false},
	{'Word':'Shoes',        'Answer':true},
	{'Word':'Hair',         'Answer':false},
	{'Word':'Hammer',       'Answer':false},
	{'Word':'Canary',       'Answer':true},
	{'Word':'Apple',        'Answer':false},
	{'Word':'Skirt',        'Answer':true},
	{'Word':'Saw',          'Answer':false},
	{'Word':'Silver',       'Answer':false},
	{'Word':'Blouse',       'Answer':true},
]
EN_Hopkins.WordList01 = [
	{'Word':'Teacher'},     // 0
	{'Word':'Basketball'},  // 1
	{'Word':'Lettuce'},     // 2
	{'Word':'Dentist'},     // 3
	{'Word':'Tennis'},      // 4
	{'Word':'Bean'},        // 5
	{'Word':'Engineer'},    // 6
	{'Word':'Potato'},      // 7
	{'Word':'Professor'},   // 8
	{'Word':'Golf'},        // 9
	{'Word':'Corn'},        // 10
	{'Word':'Soccer'},      // 11
]
EN_Hopkins.RecognitionWordList01 = [
	{'Word':'Tennis',      'Answer':true},
	{'Word':'Football',    'Answer':false},
	{'Word':'Professor',   'Answer':true},
	{'Word':'Spinach',     'Answer':false},
	{'Word':'Lawyer',      'Answer':false},
	{'Word':'Submarine',   'Answer':false},
	{'Word':'Golf',        'Answer':true},
	{'Word':'Dentist',     'Answer':true},
	{'Word':'Lettuce',     'Answer':true},
	{'Word':'Spider',      'Answer':false},
	{'Word':'Water',       'Answer':false},
	{'Word':'Bean',        'Answer':true},
	{'Word':'Basketball',  'Answer':true},
	{'Word':'Doctor',      'Answer':false},
	{'Word':'Corn',        'Answer':true},
	{'Word':'Baseball',    'Answer':false},
	{'Word':'Teacher',     'Answer':true},
	{'Word':'Snake',       'Answer':false},
	{'Word':'Carrot',      'Answer':false},
	{'Word':'Engineer',    'Answer':true},
	{'Word':'Glove',       'Answer':false},
	{'Word':'Soccer',      'Answer':true},
	{'Word':'Potato',      'Answer':true},
	{'Word':'Tulip',       'Answer':false},
]
EN_Hopkins.WordList01 = [
	{'Word':'Shark'},   // 0
	{'Word':'Wall'},    // 1
	{'Word':'Herring'}, // 2
	{'Word':'Rain'},    // 3
	{'Word':'Floor'},   // 4
	{'Word':'Hail'},    // 5
	{'Word':'Catfish'}, // 6
	{'Word':'Roof'},    // 7
	{'Word':'Salmon'},  // 8
	{'Word':'Storm'},   // 9
	{'Word':'Ceiling'}, // 10
	{'Word':'Snow'},    // 11
]

EN_Hopkins.RecognitionWordList01 = [
	{'Word':'Hail',      'Answer':true},
	{'Word':'Bass',      'Answer':false},
	{'Word':'Snow',      'Answer':true},
	{'Word':'Bank',      'Answer':false},
	{'Word':'Floor',     'Answer':true},
	{'Word':'Mustard',   'Answer':false},
	{'Word':'Window',    'Answer':false},
	{'Word':'Ceiling',   'Answer':true},
	{'Word':'Canyon',    'Answer':false},
	{'Word':'Rain',      'Answer':true},
	{'Word':'Ladder',    'Answer':false},
	{'Word':'Storm',     'Answer':true},
	{'Word':'Herring',   'Answer':true},
	{'Word':'Salmon',    'Answer':true},
	{'Word':'Tornado',   'Answer':false},
	{'Word':'Trout',     'Answer':false},
	{'Word':'Melon',     'Answer':false},
	{'Word':'Roof',      'Answer':true},
	{'Word':'Shark',     'Answer':true},
	{'Word':'Hurricane', 'Answer':false},
	{'Word':'Elbow',     'Answer':false},
	{'Word':'Catfish',   'Answer':true},
	{'Word':'Wall',      'Answer':true},
	{'Word':'Door',      'Answer':false},
]