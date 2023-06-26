var EN_Instructions = {}
EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Serial Subtraction Task.</p>'},
]
EN_Instructions.Instructions = [
	{'page': '<p class="Instructions">This is a test of attention. You will be given a large number and asked to subtract a value from it and to continue subtracting the value from the result, even if the result is wrong.  </br></br>Press next to begin.</p>'},
	]
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions.GetResponse01 = '<p class="Instructions">Subtract '
EN_Instructions.GetResponse02 = ' from '
EN_Instructions.GetResponse03 = ' and continue to subtract '
EN_Instructions.GetResponse04 = ' from the result, even if the result is wrong.</p>'
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
// =============================================================
var EN_Instructions = {}
EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Serial Subtraction Task.</p>'},
]
EN_Instructions.Instructions = [
	{'page': '<p class="Instructions">This is a test of attention. You will be given a large number and asked to subtract a value from it and to continue subtracting the value from the result, even if the result is wrong.  </br></br>Press next to begin.</p>'},
	]
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions.GetResponse01 = '<p class="Instructions">Calculate '
EN_Instructions.GetResponse02 = ' - '
EN_Instructions.GetResponse03 = ' and then continue to subtract '
EN_Instructions.GetResponse04 = ' from the result until you are stopped</p>'
add('EN_Instructions_FaCE', function(){ Instructions = EN_Instructions});
// =============================================================
var FR_Instructions = {}
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Task de Soustraire.</p>'},
]
FR_Instructions.Instructions = [
	{'page': '<p class="Instructions">C\'est un test d\'attention. On vous donnera un grand nombre et on vous demandera d\'en soustraire une valeur et de continuer à soustraire la valeur du résultat même si le résultat est erroné.  </br></p>'},
	]
FR_Instructions.ThankYouText = [{'page':'Merci'}]

FR_Instructions.GetResponse01 = '<p class="Instructions">Soustraire '
FR_Instructions.GetResponse02 = ' de '
FR_Instructions.GetResponse03 = ' et continuer à soustraire '
FR_Instructions.GetResponse04 = ' du résultat, même si le résultat est erroné.</p>'
add('FR_Instructions', function(){ Instructions = FR_Instructions});
// =============================================================
