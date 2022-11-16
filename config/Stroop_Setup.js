var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';


/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['v','b','n','m',27]

var ResponseButtons = ['Red','Yellow','Green','Blue']

//var FixationLength = 500; // This is in milliseconds

var ColorPracticeRepeats = 1
var WordPracticeRepeats = 1 
var ColorWordPracticeRepeats = 1

// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var ColorTestRepeats = 1
// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var WordTestRepeats = 1
// Since there are 16 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 4

function PutStimIntoTable(prompt, stim) {
    var html = '';
    html += '<table style="height:100%; text-align:center">'
    html += '<tr style="height:15%">'
    html += '<td>'
    html += prompt
    html += '</td>'
    html += '</tr>'
    html += '<tr>'
    html += '<td>'
    html += stim
    html += '</td>'
    html += '</tr>'
    html += '</table>'
    return html
}
