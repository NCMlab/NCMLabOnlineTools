var FeedbackLength = 400; // This is in milliseconds
var FeedbackFontSize = "30px";
var GapBetweenButtons = "0px";

var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';
var GIFDisplayTime = 100; // milliseconds
var GIFRecorderTime = 500; // milliseconds

var WelcomeTime = 4000; // milliseconds

var SaveLocalFile = false

var EN_LabelNames = {}
EN_LabelNames.YesNo = ['Yes','No']
EN_LabelNames.Home = 'Home'
EN_LabelNames.Restart = 'Restart'
EN_LabelNames.Stop = 'Stop'
EN_LabelNames.Quit = 'Quit'
EN_LabelNames.Finished = 'Finished'
EN_LabelNames.Clear = 'Clear'
EN_LabelNames.Undo = 'Undo'
EN_LabelNames.Redo = 'Redo'
EN_LabelNames.Repeat = 'Repeat'
EN_LabelNames.Next = 'Next'
EN_LabelNames.Enter = 'Enter'
EN_LabelNames.Submit = 'Submit'
EN_LabelNames.CurrentAnswer = 'Current Answer'
EN_LabelNames.Correct = 'Correct'
EN_LabelNames.Incorrect = 'Incorrect'
EN_LabelNames.PressNext = 'Press Next to Continue'
EN_LabelNames.NoteInputBox = "Please, type in any notes or feedback you have about this task. (Optional)"
EN_LabelNames.NonEligible = (" I am sorry to say that you are not eligible for this study.")

var FR_LabelNames = {}
FR_LabelNames.YesNo = ['Oui','No']
FR_LabelNames.Home = "Page d'accueil"
FR_LabelNames.Restart = 'Recommencer'
FR_LabelNames.Stop = 'Arrêt'
FR_LabelNames.Quit = 'Quitter'
FR_LabelNames.Finished = 'Fini'
FR_LabelNames.Clear = 'Effacer'
FR_LabelNames.Undo = 'Dénouer'
FR_LabelNames.Redo = 'Refaire'
FR_LabelNames.Next = 'Suivant'
FR_LabelNames.Enter = 'Entrée'
FR_LabelNames.Submit = 'Soumettre'
FR_LabelNames.CurrentAnswer = 'Réponse Actuelle'
FR_LabelNames.Correct = 'Correct'
FR_LabelNames.Incorrect = 'Incorrect'
FR_LabelNames.PressNext = 'Appuyez sur Suivant pour continuer'
FR_LabelNames.NoteInputBox = "FR: Please, type in any notes or feedback you have about this task. (Optional)"
FR_LabelNames.NonEligible = ("(FR) I am sorry to say that you are not eligible for this study.")

add('EN_LabelNames', function(){ LabelNames = EN_LabelNames});
add('FR_LabelNames', function(){ LabelNames = FR_LabelNames});