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
EN_Instructions.ResponsePage01 = 'Say as many <b>'
EN_Instructions.ResponsePage02 = '</b> as possible.<p><span id="clock">1:00</span></p> As the administrator: Press Next for every correct response made. <p />'
EN_Instructions.ResponsePage03 = '</div>When the timer runs out, press Next again to finish.'     

add('EN_Instructions_FaCE', function(){ Instructions = EN_Instructions});
// ============================================================================
var FR_Instructions_FaCE = {}
FR_Instructions_FaCE.Animals = 'Animals'
FR_Instructions_FaCE.FruitsVegetables = 'fruits et de légumes'
FR_Instructions_FaCE.LetterF = 'words that start with F'
FR_Instructions_FaCE.Instructions = [
	{'page': '<p class="Instructions">Je veux que vous me disiez le plus de noms de fruits et légumes différents possible. Ne dites pas plusieurs variétés du même fruit ou légume, par exemple, raisins verts et raisins rouges. Je vais vous dire d’arrêter après une minute. Êtes-vous prêt ? Maintenant, commencez </br></br>Appuyez sur <b>Suivant</b> pour Continuer.</p>'},
	]
FR_Instructions_FaCE.ThankYouText = [{'page':'Merci.'}]
FR_Instructions_FaCE.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Fluency Task.</p>'},
]
FR_Instructions_FaCE.ResponsePage01 = 'Dites-en autant <b>'
FR_Instructions_FaCE.ResponsePage02 = '</b> que possible.<p><span id="clock">1:00</span></p> En tant qu\'administrateur : appuyez sur Suivant pour chaque réponse correcte effectuée. <p /><div>'
FR_Instructions_FaCE.ResponsePage03 = '</div>Lorsque le temps imparti est écoulé, appuyez à nouveau sur Suivant pour terminer.'     

add('FR_Instructions_FaCE', function(){ Instructions = FR_Instructions_FaCE});
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
FR_Instructions.ResponsePage01 = 'Dites-en autant <b>'
FR_Instructions.ResponsePage02 = '</b> que possible.<p><span id="clock">1:00</span></p> En tant qu\'administrateur : appuyez sur Suivant pour chaque réponse correcte effectuée. <p /><div><p>'
FR_Instructions.ResponsePage03 = '</p></div>Lorsque le temps imparti est écoulé, appuyez à nouveau sur Suivant pour terminer.'     

add('FR_Instructions', function(){ Instructions = FR_Instructions});



/*
	Dites-en autant que possible.
    'En tant qu'administrateur : appuyez sur Suivant pour chaque réponse correcte effectuée.
    'Nombre de réponses :
    'Lorsque le temps imparti est écoulé, appuyez à nouveau sur Suivant pour terminer.'
	*/