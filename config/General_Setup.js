var FeedbackLength = 400; // This is in milliseconds
var FeedbackFontSize = "30px";
var GapBetweenButtons = "0px";

var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';

var SaveLocalFile = false

var EN_LabelNames = {}
EN_LabelNames.Home = 'Home'
EN_LabelNames.Restart = 'Restart'
EN_LabelNames.End = 'End'
EN_LabelNames.Quit = 'Quit'
EN_LabelNames.Finished = 'Finished'

var FR_LabelNames = {}
FR_LabelNames.Home = "Page d'accueil"
FR_LabelNames.Restart = 'Recommencer'
FR_LabelNames.End = 'Fin'
FR_LabelNames.Quit = 'Quittier'
FR_LabelNames.Finished = 'Fini'

add('EN_LabelNames', function(){ LabelNames = EN_LabelNames});
add('FR_LabelNames', function(){ LabelNames = FR_LabelNames});