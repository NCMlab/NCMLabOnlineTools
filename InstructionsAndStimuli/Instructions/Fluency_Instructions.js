// ============================================================================
var EN_Instructions = {}
EN_Instructions.Animals = 'Animals'
EN_Instructions.FruitsVegetables = 'fruits and vegetables'
EN_Instructions.LetterF = 'words that start with F'
EN_Instructions.Instructions = [
	{'page': '<p class="Instructions">This is a test of word fluency. You will be given a category and will need to say as many items from that category as possible within one minute. Proper nouns are not accepted. </br></br>Press next to begin.</p>'},
	]
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]

EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Fluency Task.</p>'},
]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
// ============================================================================
var EN_Instructions = {}
EN_Instructions.Animals = 'Animals'
EN_Instructions.FruitsVegetables = 'fruits and vegetables'
EN_Instructions.LetterF = 'words that start with F'
EN_Instructions.Instructions = [
	{'page': '<p class="Instructions">This is a test of word fluency. You will be given a category and will need to name as many items from that category as possible within one minute. Do not name varieties of the same item. </br></br>Press next to begin.</p>'},
	]
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]

EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Fluency Task.</p>'},
]
add('EN_Instructions_FaCE', function(){ Instructions = EN_Instructions});
// ============================================================================
var FR_Instructions = {}
FR_Instructions.Animals = 'Animaux'
FR_Instructions.FruitsVegetables = 'fruits et légumes'
FR_Instructions.LetterF = 'mots commençant par F'
FR_Instructions.Instructions = [
	{'page': '<p class="Instructions">Langage et rapidité d\’idéation. Vous recevrez une catégorie et devrez dire autant d\'éléments de cette catégorie que possible en une minute. Les noms propres ne sont pas acceptés. </br></br>Appuyez sur <b>Suivant</b> pour Continuer.</p>'},
]
FR_Instructions.ThankYouText = [{'page':'Merci'}]
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Langage et rapidité d\’idéation.</p>'},
]
add('FR_Instructions', function(){ Instructions = FR_Instructions});