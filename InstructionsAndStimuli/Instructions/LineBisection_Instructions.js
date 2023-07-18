var EN_Instructions = {}
EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Line Bisection Task.</p>'},
]
EN_Instructions.InstructionText = [
    {'page': '<p class="Instructions">For this task you will see lines. You are to mark the center of each line as closely as possible. <br/> Press Next to Begin.</p>'},
]
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]
// The following notes show up on teh results page
EN_Instructions.NotesForResultsPage = 'The scores on this test range from -50 to +50. The negative numbers represent a bias to the left. Positive numbers reflect a right hand bias.'
add('EN_LineBisection_Instructions_Default', function(){ Instructions = EN_Instructions});
// =========================================================
// FRENCH 
var FR_Instructions = {}
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">FR: Welcome to the Line Bisection Task.</p>'},
]
FR_Instructions.InstructionText = [
    {'page': '<p class="Instructions">FR: For this task you will see lines. You are to mark the center of each line as closely as possible. <br/> Press Next to Begin.</p>'},
]
FR_Instructions.ThankYouText = [{'page':'FR: Thank you.'}]
// The following notes show up on teh results page
FR_Instructions.NotesForResultsPage = 'FR: The scores on this test range from -50 to +50. The negative numbers represent a bias to the left. Positive numbers reflect a right hand bias.'
add('FR_LineBisection_Instructions_Default', function(){ Instructions = FR_Instructions});