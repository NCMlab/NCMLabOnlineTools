
// ==================================================================================
var EN_Instructions_DefaultA = {}
EN_Instructions_DefaultA.WelcomeText = [{'page': 'Welcome to the Trail Making Task.</p>'}]
EN_Instructions_DefaultA.PracticePrompt = [{'page':'First, you will perform a practice test.'}];
EN_Instructions_DefaultA.RealTaskPrompt = [{'page':'Press <b>Next</b> to begin the task.'}];
EN_Instructions_DefaultA.Instructions = [
    {'page': 'For this task you will see some numbers in circles. Please, draw a line from one number to the next, in order. Start at 1, then go to 2, then go to 3, and so on. Continue until you reach the number labeled end.'},
    {'page': 'Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}
]
EN_Instructions_DefaultA.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the number labeled end.</br>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br>If the circle does not change color, you have made a mistake and need to draw your line to a different circle'
EN_Instructions_DefaultA.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions_DefaultA.NotesForResultsPage = 'The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'
EN_Instructions_DefaultA.FirstCircleLabel = "begin"
EN_Instructions_DefaultA.LastCircleLabel = "end"
EN_Instructions_DefaultA.FinishedLabel = "Finished"
add('EN_Instructions_DefaultA', function(){ Instructions = EN_Instructions_DefaultA});

// ==================================================================================
var EN_Instructions_DefaultB = {}
EN_Instructions_DefaultB.WelcomeText = [{'page': 'Welcome to the Trail Making Task.</p>'}]
EN_Instructions_DefaultB.PracticePrompt = [{'page':'First, you will perform a practice test.'}];
EN_Instructions_DefaultB.RealTaskPrompt = [{'page':'Press <b>Next</b> to begin the task.'}];

EN_Instructions_DefaultB.Instructions = [
    {'page': 'For this task you will see  numbers and letters in circles. Please, draw a line switching in order between numbers and lettters. Start at number 1, then go to lettter A, then go to number 2, and then the next letter B, and so on. Continue in order, until you reach the letter labeled end.'},
    {'page': 'Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}   
] 
EN_Instructions_DefaultB.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B and so on, in order, until you reach the letter labeled end.<br/>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'
EN_Instructions_DefaultB.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions_DefaultB.NotesForResultsPage = 'The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'
EN_Instructions_DefaultB.FirstCircleLabel = "begin"
EN_Instructions_DefaultB.LastCircleLabel = "end"
EN_Instructions_DefaultB.FinishedLabel = "Finished"
add('EN_Instructions_DefaultB', function(){ Instructions = EN_Instructions_DefaultB});

// ==================================================================================
var EN_Instructions_Demo = {}
EN_Instructions_Demo.WelcomeText = [{'page': 'Welcome to the Trail Making Task.</p>'}]
EN_Instructions_Demo.PracticePrompt = [{'page':'First, you will perform a practice test.'}];
EN_Instructions_Demo.RealTaskPrompt = [{'page':'Press <b>Next</b> to begin the task.'}];
EN_Instructions_Demo.Instructions = [
    {'page': 'For this task you will see some numbers in circles. Please, draw a line from one number to the next, in order. Start at 1, then go to 2, then go to 3, and so on. Continue until you reach the number labeled end.'},
    //{'page': 'Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}
]
EN_Instructions_Demo.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the number labeled end.</br>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br>If the circle does not change color, you have made a mistake and need to draw your line to a different circle'

EN_Instructions_Demo.InstructionsB = [
    {'page': 'For this task you will see  numbers and letters in circles. Please, draw a line switching in order between numbers and lettters. Start at number 1, then go to lettter A, then go to number 2, and then the next letter B, and so on. Continue in order, until you reach the letter labeled end.'},
    {'page': 'Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}   
] 
EN_Instructions_Demo.InstructionsShownWithPracticeB = 'Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B and so on, in order, until you reach the letter labeled end.<br/>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'
EN_Instructions_Demo.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions_Demo.NotesForResultsPage = 'The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'

add('EN_Instructions_Demo', function(){ Instructions = EN_Instructions_Demo});
// ==================================================================================
var FR_InstructionsA = {}
FR_InstructionsA.WelcomeText = [{'page': 'C\'est la tâche de Sentiers'}]

FR_InstructionsA.PracticePrompt = [{'page':'Tout d\'abord, vous effectuerez un test pratique.'}];
FR_InstructionsA.RealTaskPrompt = [{'page':'Appuyez sur <b>Suivant</b> pour Continuer.'}];
FR_InstructionsA.Instructions = [
    {'page': 'Pour cette tâche, vous verrez des nombres dans des cercles. Veuillez tracer une ligne d\'un nombre à l\'autre, dans l\'ordre. Commencez à 1, puis passez à 2, puis passez à 3, et ainsi de suite. Continuez jusqu\'à ce que vous atteigniez le numéro marqué end.'},
    {'page': 'Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'}
]

FR_InstructionsA.InstructionsShownWithPractice = 'Commencez au numéro 1 et tracez une ligne de 1 à 2, 2 à 3, 3 à 4 et ainsi de suite, dans l\'ordre, jusqu\'à ce que vous atteigniez le chiffre marqué fin.</br> Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle'

FR_InstructionsA.ThankYouText = [{'page':'Merci'}]
FR_InstructionsA.NotesForResultsPage = 'FR: The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'
FR_InstructionsA.FirstCircleLabel = "commencer"
FR_InstructionsA.LastCircleLabel = "fin"
FR_InstructionsA.FinishedLabel = "Fini"
FR_InstructionsA.TimeRemainingLabel = "restant"
add('FR_Instructions_DefaultA', function(){ Instructions = FR_InstructionsA});
// ==================================================================================
var FR_InstructionsB = {}
FR_InstructionsB.WelcomeText = [{'page': 'C\'est la tâche de Sentiers'}]

FR_InstructionsB.PracticePrompt = [{'page':'Tout d\'abord, vous effectuerez un test pratique.'}];
FR_InstructionsB.RealTaskPrompt = [{'page':'Appuyez sur <b>Suivant</b> pour Continuer.'}];

FR_InstructionsB.Instructions = [
    {'page': 'Pour cette tâche, vous verrez des chiffres et des lettres dans des cercles. Veuillez tracer une ligne alternant dans l\'ordre entre les chiffres et les lettres. Commencez au numéro 1, puis passez à la lettre A, puis passez au numéro 2, puis à la lettre B suivante, et ainsi de suite. Continuez dans l\'ordre, jusqu\'à ce que vous atteigniez la lettre marquée fin.'},
    {'page': 'Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'}   
] 
FR_InstructionsB.InstructionsShownWithPractice = 'Commencez au numéro 1 et tracez une ligne de 1 à A, A à 2, 2 à B et ainsi de suite, dans l\'ordre, jusqu\'à ce que vous atteigniez la lettre étiquetée end.<br/>Trace votre ligne aussi vite que possible. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'
FR_InstructionsB.ThankYouText = [{'page':'Merci'}]
FR_InstructionsB.NotesForResultsPage = 'FR: The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'
FR_InstructionsB.FirstCircleLabel = "commencer"
FR_InstructionsB.LastCircleLabel = "fin"
FR_InstructionsB.FinishedLabel = "Fini"
FR_InstructionsB.TimeRemainingLabel = "restant"
add('FR_Instructions_DefaultB', function(){ Instructions = FR_InstructionsB});
// ==================================================================================

/*
var EN_Instructions_FaCE = {}
EN_Instructions_FaCE.FirstCircleLabel = 'begin'
EN_Instructions_FaCE.LastCircleLabel = 'end'
EN_Instructions_FaCE.WelcomeText = [{'page': 'Welcome to the Trail Making Task.</p>'}]
EN_Instructions_FaCE.PracticePrompt = [{'page':'First, you will perform a practice test.'}];
EN_Instructions_FaCE.RealTaskPrompt = [{'page':'Press <b>Next</b> to begin the task.'}];
EN_Instructions_FaCE.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the number labeled end.</br>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br>If the circle does not change color, you have made a mistake and need to draw your line to a different circle'

EN_Instructions_FaCE.Instructions = [
    {'page': 'You are to draw a line without lifting the pencil, alternating from a number to a letter, while respecting the ascending numerical order and the alphabetical order. Start at the <b>1</b> and draw the line to the letter <b>A</b>, then to the <b>2</b>, and so on. Stop at the circle marked  <b>End.</b>'}, 
] 
EN_Instructions_FaCE.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B and so on, in order, until you reach the letter labeled end.<br/>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'
EN_Instructions_FaCE.ThankYouText = [{'page':'Thank you.'}]
EN_Instructions_FaCE.NotesForResultsPage = 'The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'

add('EN_Instructions_FaCE', function(){ Instructions = EN_Instructions_FaCE});
// ==================================================================================
var FR_Instructions = {}
FR_Instructions.FirstCircleLabel = 'Début'
FR_Instructions.LastCircleLabel = 'Fin'
FR_Instructions.WelcomeText = [{'page': 'Welcome to the Trail Making Task.</p>'}]
FR_Instructions.PracticePrompt = [{'page':'First, you will perform a practice test.'}];
FR_Instructions.RealTaskPrompt = [{'page':'Press <b>Next</b> to begin the task.'}];
FR_Instructions.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the number labeled end.</br>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br>If the circle does not change color, you have made a mistake and need to draw your line to a different circle'

FR_Instructions.Instructions = [
    {'page': 'Je veux que vous traciez une ligne sans lever le crayon, en alternant d’un chiffre à une lettre, tout en respectant l’ordre numérique ascendant et l’ordre alphabétique. Commencez ici (indiquez le 1) et tracez la ligne vers la lettre A, ensuite vers le 2,  et ainsi de suite. Terminez ici » (indiquez le H). '}, 
] 
FR_Instructions.InstructionsShownWithPractice = 'Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B and so on, in order, until you reach the letter labeled end.<br/>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'
FR_Instructions.ThankYouText = [{'page':'Thank you.'}]
FR_Instructions.NotesForResultsPage = 'The provided Response Time is how long it took to complete the entire trail and press the Finish button. Note that thios time is in milliseconds. The errors refer to the number of times a participant drew a trail to a number/letter that was not the next correct item.'

add('FR_Instructions_FaCE', function(){ Instructions = FR_Instructions}); */
