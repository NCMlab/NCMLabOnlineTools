// Rey auditory verbal learning test

var WordListA = [
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

var AlternatePronunciationsWordListA = [
	{'Word':'COLOUR','index':12},
	{'Word':'KNOWS','index':10}
	]

var WordListB = [
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
var AlternatePronunciationsWordListB = []

NWords = WordListA.length

var RAVLT = {}
RAVLT.WordListA = WordListA
RAVLT.AlternatePronunciationsWordListA = AlternatePronunciationsWordListA
RAVLT.WordListB = WordListB
RAVLT.AlternatePronunciationsWordListB = AlternatePronunciationsWordListB
RAVLT.NWords = WordListA.length


var RecognitionWordList = [
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


/*

Tambour Bureau
Rideau Garde forestier
Sonnette Oiseau
Café Chaussure
Ecole Poêle
Parent Montagne
Lune Lunettes
Jardin Serviette
Chapeau Nuage
Paysan Bateau
Nez Agneau
Dindon Fusil
Couleur Crayon
Maison Eglise
Rivière Poisson

*/