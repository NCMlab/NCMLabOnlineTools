
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
EN_Instructions.ResponsePage02 = '</b> as possible.<p><span id="clock">1:00</span></p> As the administrator: Press Next for every correct response made. <p /><div>'
EN_Instructions.ResponsePage03 = '</div>When the timer runs out, press Next again to finish.'     

add('EN_Instructions_FaCE', function(){ Instructions = EN_Instructions});
// ============================================================================
