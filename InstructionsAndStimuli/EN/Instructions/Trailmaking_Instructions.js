var WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Trail Making Task.</p>'},
]

var PracticePrompt = [
    {'page':'<p class="Instructions">First, you will perform a practice test.'},
    ];

var RealTaskPrompt = [
    {'page':'<p class="Instructions">Press Next to begin the task.'},
    ];


var InstructionsA = [
    {'page': '<p class="Instructions">For this task you will see some numbers in circles. Please, draw a line from one number to the next, in order. Start at 1, then go to 2, then go to 3, and so on. Continue until you reach the number labeled end.'},
    {'page': '<p class="Instructions">Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}
]

var InstructionsShownWithPracticeA = 'Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the number labeled end.</br>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br>If the circle does not change color, you have made a mistake and need to draw your line to a different circle'

var InstructionsB = [
    {'page': '<p class="Instructions">For this task you will see  numbers and letters in circles. Please, draw a line switching in order between numbers and lettters. Start at number 1, then go to lettter A, then go to number 2, and then the next letter B, and so on. Continue in order, until you reach the letter labeled end.'},
    {'page': '<p class="Instructions">Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}   
] 
var InstructionsShownWithPracticeB = 'Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B and so on, in order, until you reach the letter labeled end.<br/>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'

var ThankYouText = [{'page':'Thank you.'}]


var EN_Instructions = {}
EN_Instructions.WelcomeText = [{'page': '<p class="Instructions">Welcome to the Trail Making Task.</p>'}]
EN_Instructions.PracticePrompt = [{'page':'<p class="Instructions">First, you will perform a practice test.'}];
EN_Instructions.RealTaskPrompt = [{'page':'<p class="Instructions">Press <b>Next</b> to begin the task.'}];
EN_Instructions.InstructionsA = [
    {'page': '<p class="Instructions">For this task you will see some numbers in circles. Please, draw a line from one number to the next, in order. Start at 1, then go to 2, then go to 3, and so on. Continue until you reach the number labeled end.'},
    {'page': '<p class="Instructions">Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}
]
EN_Instructions.InstructionsShownWithPracticeA = 'Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the number labeled end.</br>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br>If the circle does not change color, you have made a mistake and need to draw your line to a different circle'

EN_Instructions.InstructionsB = [
    {'page': '<p class="Instructions">For this task you will see  numbers and letters in circles. Please, draw a line switching in order between numbers and lettters. Start at number 1, then go to lettter A, then go to number 2, and then the next letter B, and so on. Continue in order, until you reach the letter labeled end.'},
    {'page': '<p class="Instructions">Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'}   
] 
EN_Instructions.InstructionsShownWithPracticeB = 'Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B and so on, in order, until you reach the letter labeled end.<br/>Draw your line as fast as you can. When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.'
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]


var FR_Instructions = {}
FR_Instructions.WelcomeText = [{'page': '<p class="Instructions">C\'est la tâche de Sentiers.</p>'}]

FR_Instructions.PracticePrompt = [{'page':'<p class="Instructions">Tout d\'abord, vous effectuerez un test pratique.'}];
FR_Instructions.RealTaskPrompt = [{'page':'<p class="Instructions">Appuyez sur <b>Suivant</b> pour Continuer.'}];
FR_Instructions.InstructionsA = [
    {'page': '<p class="Instructions">Pour cette tâche, vous verrez des nombres dans des cercles. Veuillez tracer une ligne d\'un nombre à l\'autre, dans l\'ordre. Commencez à 1, puis passez à 2, puis passez à 3, et ainsi de suite. Continuez jusqu\'à ce que vous atteigniez le numéro marqué end.'},
    {'page': '<p class="Instructions">Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'}
]
FR_Instructions.InstructionsShownWithPracticeA = 'Commencez au numéro 1 et tracez une ligne de 1 à 2, 2 à 3, 3 à 4 et ainsi de suite, dans l\'ordre, jusqu\'à ce que vous atteigniez le chiffre marqué fin.</br> Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle'

FR_Instructions.InstructionsB = [
    {'page': '<p class="Instructions">Pour cette tâche, vous verrez des chiffres et des lettres dans des cercles. Veuillez tracer une ligne alternant dans l\'ordre entre les chiffres et les lettres. Commencez au numéro 1, puis passez à la lettre A, puis passez au numéro 2, puis à la lettre B suivante, et ainsi de suite. Continuez dans l\'ordre, jusqu\'à ce que vous atteigniez la lettre marquée fin.'},
    {'page': '<p class="Instructions">Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'}   
] 
FR_Instructions.InstructionsShownWithPracticeB = 'Commencez au numéro 1 et tracez une ligne de 1 à A, A à 2, 2 à B et ainsi de suite, dans l\'ordre, jusqu\'à ce que vous atteigniez la lettre étiquetée end.<br/>Trace votre ligne aussi vite que possible. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'
FR_Instructions.ThankYouText = [{'page':'Merci'}]

add('EN_TrailMaking_Instructions', function(){ TrailMaking_Instructions = EN_Instructions});
add('FR_TrailMaking_Instructions', function(){ TrailMaking_Instructions = FR_Instructions});


var TESTInstructions = {}
TESTInstructions.A = [
    {'page': '<p class="Instructions">Pour cette tâche, vous verrez des nombres dans des cercles. Veuillez tracer une ligne d\'un nombre à l\'autre, dans l\'ordre. Commencez à 1, puis passez à 2, puis passez à 3, et ainsi de suite. Continuez jusqu\'à ce que vous atteigniez le numéro marqué end.'},
    {'page': '<p class="Instructions">Tracez votre ligne aussi vite que vous le pouvez. Lorsque votre ligne entre dans un cercle correct, elle change de couleur, indiquant qu\'il s\'agit du prochain cercle correct dans la séquence.</br> Si le cercle ne change pas de couleur, vous avez fait une erreur et devez tracer votre ligne vers un autre cercle.'}
]