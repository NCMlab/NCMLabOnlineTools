var EN_Instructions = {}
EN_Instructions.Instructions = "<div>You are to to draw a clock. Start by drawing the face of the clock, then add the numbers to the clock's face. Finally, add the clock arms showing the time as 10 minutes after 11 o'clock.</div>" 
EN_Instructions.WelcomeText = [{'page': '<p class="Instructions">This is the Clock Drawing Task. Press <b>Next</b> to Continue'}]
EN_Instructions.ThankYouText = [{'page': '<p class="Instructions">Thank you. Press Next to Continue'}]
EN_Instructions.NotesForResultsPage = "Scoring is as follows: 10  Full No Impairment or Unlikely Impairment. 8-9 Other clinical determinants must be present otherwise no impairment. 5-8  Cognitive Impairment. 0-4  Prominent Cognitive Impairment"

var FR_Instructions = {}
FR_Instructions.Instructions = "<div>Vous devez dessiner une horloge. Commencez par dessiner le cadran de l'horloge, puis ajoutez les chiffres au cadran de l'horloge. Enfin, ajoutez les aiguilles de l'horloge indiquant l'heure 10 minutes après 11 heures.</div>" 
FR_Instructions.WelcomeText = [{'page': '<p class="Instructions">C\'est la tâche de dessin d\'horloge. Appuyez sur <b>Suivant</b> pour Continuer.'}]
FR_Instructions.ThankYouText = [{'page': '<p class="Instructions">Merci. Appuyez sur <b>Suivant</b> pour Continuer.'}]
FR_Instructions.NotesForResultsPage = "FR:Scoring is as follows: 10  Full No Impairment or Unlikely Impairment. 8-9 Other clinical determinants must be present otherwise no impairment. 5-8  Cognitive Impairment. 0-4  Prominent Cognitive Impairment"

add('EN_ClockDrawing_Instructions', function(){ Instructions = EN_Instructions});
add('FR_ClockDrawing_Instructions', function(){ Instructions = FR_Instructions});
//Rouleau, I., D. P. Salmon, et al. (1992). "Quantitative and qualitative analyses of clock drawings in
//Alzheimer's and Huntington's disease." Brain Cogn 18(1543577): 70-87.