

//var InstructionFontSize = "40px";

// size of each circle
var radius = 15;
// color of circle
var CircleColor = 'white'
// color of circle if correct
var CorrectCircleColor = 'yellow'
// size of text inside each circle
var TextFont = "20px Verdana";
var CircleBorderWidth = 2

// canvas width
var SuggestedWidthA = 850;
// canvas height
var SuggestedHeightA = 1100;
// use timer?
var ShowTimerA = true;
// task duration
var DurationA = 1000*60*3

// canvas width
var SuggestedWidthB = 850;
// canvas height
var SuggestedHeightB = 1100;
// use timer?
var ShowTimerB = true;
// task duration
var DurationB = 1000*60*3

// canvas width
var SuggestedWidthFaCE = 850;
var SuggestedHeightFaCE = 475;
// use timer?
var ShowTimerFaCE = false;
// task duration
var DurationFaCE = 1000*60*5


// how close to each circle the cursor needs to be
var tolerance = 3;
// width of the pen
var pen_width = 2;

// This adjust the height so there is room for the Finished button and the timer
var HeightAdj = 400;

//Whether or not to change the color of the circle when response is correct
var GiveFeedback = true;          
// How are the circle locations specified?
var LocationsAsProportions = true;


var SuggestedWidthSampleA = 610;
// canvas height
var SuggestedHeightSampleA = 348;
// use timer?
var ShowTimerSampleA = false;

// ideal canvas size
// canvas width
var SuggestedWidthSampleB = 610;
// canvas height
var SuggestedHeightSampleB = 348;
// use timer?
var ShowTimerSampleB = false;

// SETUP FOR SAMPLE OF TRAILS A 
// The order in this list is the correct and expected order
var SampleCirclesA = [
    {centerX:0.540983606557377, centerY:0.660919540229885, radius: radius, label: '1'},
    {centerX:0.79672131147541, centerY:0.186781609195402, radius: radius, label: '2'},
    {centerX:0.959016393442623, centerY:0.718390804597701, radius: radius, label: '3'},
    {centerX:0.763934426229508, centerY:0.554597701149425, radius: radius, label: '4'},
    {centerX:0.814754098360656, centerY:0.92551724137931, radius: radius, label: '5'},
    {centerX:0.178688524590164, centerY:0.928390804597701, radius: radius, label: '6'},
    {centerX:0.168852459016393, centerY:0.376436781609195, radius: radius, label: '7'},
    {centerX:0.49016393442623, centerY:0.333333333333333, radius: radius, label: '8'}
]

// Hand measured off printout
var CirclesA_005 = [
    {centerX:0.711, centerY:0.534, radius: radius, label: '1'},
    {centerX:0.486, centerY:0.652, radius: radius, label: '2'},
    {centerX:0.78, centerY:0.703, radius: radius, label: '3'},
    {centerX:0.757, centerY:0.333, radius: radius, label: '4'},
    {centerX:0.427, centerY:0.355, radius: radius, label: '5'},
    {centerX:0.601, centerY:0.437, radius: radius, label: '6'},
    {centerX:0.413, centerY:0.527, radius: radius, label: '7'},
    {centerX:0.271, centerY:0.685, radius: radius, label: '8'},
    {centerX:0.321, centerY:0.796, radius: radius, label: '9'},
    {centerX:0.394, centerY:0.674, radius: radius, label: '10'},
    {centerX:0.656, centerY:0.821, radius: radius, label: '11'},
    {centerX:0.165, centerY:0.857, radius: radius, label: '12'},
    {centerX:0.248, centerY:0.513, radius: radius, label: '13'},
    {centerX:0.138, centerY:0.566, radius: radius, label: '14'},
    {centerX:0.087, centerY:0.075, radius: radius, label: '15'},
    {centerX:0.248, centerY:0.226, radius: radius, label: '16'},
    {centerX:0.532, centerY:0.054, radius: radius, label: '17'},
    {centerX:0.491, centerY:0.254, radius: radius, label: '18'},
    {centerX:0.789, centerY:0.14, radius: radius, label: '19'},
    {centerX:0.624, centerY:0.129, radius: radius, label: '20'},
    {centerX:0.867, centerY:0.054, radius: radius, label: '21'},
    {centerX:0.881, centerY:0.326, radius: radius, label: '22'},
    {centerX:0.922, centerY:0.849, radius: radius, label: '23'},
    {centerX:0.839, centerY:0.516, radius: radius, label: '24'},
    {centerX:0.817, centerY:0.821, radius: radius, label: '25'},
]

var CirclesA_005mirrorX = [
    {centerX:0.289, centerY:0.534, radius: radius, label: '1'},
    {centerX:0.514, centerY:0.652, radius: radius, label: '2'},
    {centerX:0.22, centerY:0.703, radius: radius, label: '3'},
    {centerX:0.243, centerY:0.333, radius: radius, label: '4'},
    {centerX:0.573, centerY:0.355, radius: radius, label: '5'},
    {centerX:0.399, centerY:0.437, radius: radius, label: '6'},
    {centerX:0.587, centerY:0.527, radius: radius, label: '7'},
    {centerX:0.729, centerY:0.685, radius: radius, label: '8'},
    {centerX:0.679, centerY:0.796, radius: radius, label: '9'},
    {centerX:0.606, centerY:0.674, radius: radius, label: '10'},
    {centerX:0.344, centerY:0.821, radius: radius, label: '11'},
    {centerX:0.835, centerY:0.857, radius: radius, label: '12'},
    {centerX:0.752, centerY:0.513, radius: radius, label: '13'},
    {centerX:0.862, centerY:0.566, radius: radius, label: '14'},
    {centerX:0.913, centerY:0.075, radius: radius, label: '15'},
    {centerX:0.752, centerY:0.226, radius: radius, label: '16'},
    {centerX:0.468, centerY:0.054, radius: radius, label: '17'},
    {centerX:0.509, centerY:0.254, radius: radius, label: '18'},
    {centerX:0.211, centerY:0.14, radius: radius, label: '19'},
    {centerX:0.376, centerY:0.129, radius: radius, label: '20'},
    {centerX:0.133, centerY:0.054, radius: radius, label: '21'},
    {centerX:0.119, centerY:0.326, radius: radius, label: '22'},
    {centerX:0.078, centerY:0.849, radius: radius, label: '23'},
    {centerX:0.161, centerY:0.516, radius: radius, label: '24'},
    {centerX:0.183, centerY:0.821, radius: radius, label: '25'},
]
var CirclesA_005mirrorY = [
    {centerX:0.711, centerY:0.466, radius: radius, label: '1'},
    {centerX:0.486, centerY:0.348, radius: radius, label: '2'},
    {centerX:0.78, centerY:0.297, radius: radius, label: '3'},
    {centerX:0.757, centerY:0.667, radius: radius, label: '4'},
    {centerX:0.427, centerY:0.645, radius: radius, label: '5'},
    {centerX:0.601, centerY:0.563, radius: radius, label: '6'},
    {centerX:0.413, centerY:0.473, radius: radius, label: '7'},
    {centerX:0.271, centerY:0.315, radius: radius, label: '8'},
    {centerX:0.321, centerY:0.204, radius: radius, label: '9'},
    {centerX:0.394, centerY:0.326, radius: radius, label: '10'},
    {centerX:0.656, centerY:0.179, radius: radius, label: '11'},
    {centerX:0.165, centerY:0.143, radius: radius, label: '12'},
    {centerX:0.248, centerY:0.487, radius: radius, label: '13'},
    {centerX:0.138, centerY:0.434, radius: radius, label: '14'},
    {centerX:0.087, centerY:0.925, radius: radius, label: '15'},
    {centerX:0.248, centerY:0.774, radius: radius, label: '16'},
    {centerX:0.532, centerY:0.946, radius: radius, label: '17'},
    {centerX:0.491, centerY:0.746, radius: radius, label: '18'},
    {centerX:0.789, centerY:0.86, radius: radius, label: '19'},
    {centerX:0.624, centerY:0.871, radius: radius, label: '20'},
    {centerX:0.867, centerY:0.946, radius: radius, label: '21'},
    {centerX:0.881, centerY:0.674, radius: radius, label: '22'},
    {centerX:0.922, centerY:0.151, radius: radius, label: '23'},
    {centerX:0.839, centerY:0.484, radius: radius, label: '24'},
    {centerX:0.817, centerY:0.179, radius: radius, label: '25'},
]

var CirclesA_005mirrorXY = [
    {centerX:0.289, centerY:0.466, radius: radius, label: '1'},
    {centerX:0.514, centerY:0.348, radius: radius, label: '2'},
    {centerX:0.22, centerY:0.297, radius: radius, label: '3'},
    {centerX:0.243, centerY:0.667, radius: radius, label: '4'},
    {centerX:0.573, centerY:0.645, radius: radius, label: '5'},
    {centerX:0.399, centerY:0.563, radius: radius, label: '6'},
    {centerX:0.587, centerY:0.473, radius: radius, label: '7'},
    {centerX:0.729, centerY:0.315, radius: radius, label: '8'},
    {centerX:0.679, centerY:0.204, radius: radius, label: '9'},
    {centerX:0.606, centerY:0.326, radius: radius, label: '10'},
    {centerX:0.344, centerY:0.179, radius: radius, label: '11'},
    {centerX:0.835, centerY:0.143, radius: radius, label: '12'},
    {centerX:0.752, centerY:0.487, radius: radius, label: '13'},
    {centerX:0.862, centerY:0.434, radius: radius, label: '14'},
    {centerX:0.913, centerY:0.925, radius: radius, label: '15'},
    {centerX:0.752, centerY:0.774, radius: radius, label: '16'},
    {centerX:0.468, centerY:0.946, radius: radius, label: '17'},
    {centerX:0.509, centerY:0.746, radius: radius, label: '18'},
    {centerX:0.211, centerY:0.86, radius: radius, label: '19'},
    {centerX:0.376, centerY:0.871, radius: radius, label: '20'},
    {centerX:0.133, centerY:0.946, radius: radius, label: '21'},
    {centerX:0.119, centerY:0.674, radius: radius, label: '22'},
    {centerX:0.078, centerY:0.151, radius: radius, label: '23'},
    {centerX:0.161, centerY:0.484, radius: radius, label: '24'},
    {centerX:0.183, centerY:0.179, radius: radius, label: '25'},
]


// SETUP FOR SAMPLE OF TRAILS B
var SampleCirclesB = [
    {centerX:0.480327868852459, centerY:0.589673913043478, radius: radius, label: '1'},
    {centerX:0.740983606557377, centerY:0.171195652173913, radius: radius, label: 'A'},
    {centerX:0.945901639344262, centerY:0.644021739130435, radius: radius, label: '2'},
    {centerX:0.726229508196721, centerY:0.494565217391304, radius: radius, label: 'B'},
    {centerX:0.790163934426229, centerY:0.934782608695652, radius: radius, label: '3'},
    {centerX:0.214754098360656, centerY:0.888586956521739, radius: radius, label: 'C'},
    {centerX:0.139344262295082, centerY:0.179347826086957, radius: radius, label: '4'},
    {centerX:0.454098360655738, centerY:0.230978260869565, radius: radius, label: 'D'},
]

// SETUP FOR TRAILS B
// Hand measured off printout
var CirclesB_005 = [
    {centerX:0.486, centerY:0.419, radius: radius, label: '1'},
    {centerX:0.665, centerY:0.681, radius: radius, label: 'A'},
    {centerX:0.261, centerY:0.756, radius: radius, label: '2'},
    {centerX:0.431, centerY:0.183, radius: radius, label: 'B'},
    {centerX:0.431, centerY:0.301, radius: radius, label: '3'},
    {centerX:0.628, centerY:0.534, radius: radius, label: 'C'},
    {centerX:0.541, centerY:0.168, radius: radius, label: '4'},
    {centerX:0.789, centerY:0.133, radius: radius, label: 'D'},
    {centerX:0.771, centerY:0.466, radius: radius, label: '5'},
    {centerX:0.789, centerY:0.832, radius: radius, label: 'E'},
    {centerX:0.413, centerY:0.767, radius: radius, label: '6'},
    {centerX:0.165, centerY:0.846, radius: radius, label: 'F'},
    {centerX:0.294, centerY:0.398, radius: radius, label: '7'},
    {centerX:0.174, centerY:0.606, radius: radius, label: 'G'},
    {centerX:0.142, centerY:0.122, radius: radius, label: '8'},
    {centerX:0.183, centerY:0.484, radius: radius, label: 'H'},
    {centerX:0.303, centerY:0.122, radius: radius, label: '9'},
    {centerX:0.642, centerY:0.125, radius: radius, label: 'I'},
    {centerX:0.904, centerY:0.079, radius: radius, label: '10'},
    {centerX:0.807, centerY:0.695, radius: radius, label: 'J'},
    {centerX:0.862, centerY:0.9, radius: radius, label: '11'},
    {centerX:0.073, centerY:0.889, radius: radius, label: 'K'},
    {centerX:0.069, centerY:0.558, radius: radius, label: '12'},
    {centerX:0.128, centerY:0.778, radius: radius, label: 'L'},
    {centerX:0.078, centerY:0.061, radius: radius, label: '13'},
]
var CirclesB_005mirrorX = [
    {centerX:0.514, centerY:0.419, radius: radius, label: '1'},
    {centerX:0.335, centerY:0.681, radius: radius, label: 'A'},
    {centerX:0.739, centerY:0.756, radius: radius, label: '2'},
    {centerX:0.569, centerY:0.183, radius: radius, label: 'B'},
    {centerX:0.569, centerY:0.301, radius: radius, label: '3'},
    {centerX:0.372, centerY:0.534, radius: radius, label: 'C'},
    {centerX:0.459, centerY:0.168, radius: radius, label: '4'},
    {centerX:0.211, centerY:0.133, radius: radius, label: 'D'},
    {centerX:0.229, centerY:0.466, radius: radius, label: '5'},
    {centerX:0.211, centerY:0.832, radius: radius, label: 'E'},
    {centerX:0.587, centerY:0.767, radius: radius, label: '6'},
    {centerX:0.835, centerY:0.846, radius: radius, label: 'F'},
    {centerX:0.706, centerY:0.398, radius: radius, label: '7'},
    {centerX:0.826, centerY:0.606, radius: radius, label: 'G'},
    {centerX:0.858, centerY:0.122, radius: radius, label: '8'},
    {centerX:0.817, centerY:0.484, radius: radius, label: 'H'},
    {centerX:0.697, centerY:0.122, radius: radius, label: '9'},
    {centerX:0.358, centerY:0.125, radius: radius, label: 'I'},
    {centerX:0.096, centerY:0.079, radius: radius, label: '10'},
    {centerX:0.193, centerY:0.695, radius: radius, label: 'J'},
    {centerX:0.138, centerY:0.9, radius: radius, label: '11'},
    {centerX:0.927, centerY:0.889, radius: radius, label: 'K'},
    {centerX:0.931, centerY:0.558, radius: radius, label: '12'},
    {centerX:0.872, centerY:0.778, radius: radius, label: 'L'},
    {centerX:0.922, centerY:0.061, radius: radius, label: '13'},
]
var CirclesB_005mirrorY = [
    {centerX:0.486, centerY:0.581, radius: radius, label: '1'},
    {centerX:0.665, centerY:0.319, radius: radius, label: 'A'},
    {centerX:0.261, centerY:0.244, radius: radius, label: '2'},
    {centerX:0.431, centerY:0.817, radius: radius, label: 'B'},
    {centerX:0.431, centerY:0.699, radius: radius, label: '3'},
    {centerX:0.628, centerY:0.466, radius: radius, label: 'C'},
    {centerX:0.541, centerY:0.832, radius: radius, label: '4'},
    {centerX:0.789, centerY:0.867, radius: radius, label: 'D'},
    {centerX:0.771, centerY:0.534, radius: radius, label: '5'},
    {centerX:0.789, centerY:0.168, radius: radius, label: 'E'},
    {centerX:0.413, centerY:0.233, radius: radius, label: '6'},
    {centerX:0.165, centerY:0.154, radius: radius, label: 'F'},
    {centerX:0.294, centerY:0.602, radius: radius, label: '7'},
    {centerX:0.174, centerY:0.394, radius: radius, label: 'G'},
    {centerX:0.142, centerY:0.878, radius: radius, label: '8'},
    {centerX:0.183, centerY:0.516, radius: radius, label: 'H'},
    {centerX:0.303, centerY:0.878, radius: radius, label: '9'},
    {centerX:0.642, centerY:0.875, radius: radius, label: 'I'},
    {centerX:0.904, centerY:0.921, radius: radius, label: '10'},
    {centerX:0.807, centerY:0.305, radius: radius, label: 'J'},
    {centerX:0.862, centerY:0.1, radius: radius, label: '11'},
    {centerX:0.073, centerY:0.111, radius: radius, label: 'K'},
    {centerX:0.069, centerY:0.442, radius: radius, label: '12'},
    {centerX:0.128, centerY:0.222, radius: radius, label: 'L'},
    {centerX:0.078, centerY:0.939, radius: radius, label: '13'},
]
var CirclesB_005mirrorXY = [
    {centerX:0.514, centerY:0.581, radius: radius, label: '1'},
    {centerX:0.335, centerY:0.319, radius: radius, label: 'A'},
    {centerX:0.739, centerY:0.244, radius: radius, label: '2'},
    {centerX:0.569, centerY:0.817, radius: radius, label: 'B'},
    {centerX:0.569, centerY:0.699, radius: radius, label: '3'},
    {centerX:0.372, centerY:0.466, radius: radius, label: 'C'},
    {centerX:0.459, centerY:0.832, radius: radius, label: '4'},
    {centerX:0.211, centerY:0.867, radius: radius, label: 'D'},
    {centerX:0.229, centerY:0.534, radius: radius, label: '5'},
    {centerX:0.211, centerY:0.168, radius: radius, label: 'E'},
    {centerX:0.587, centerY:0.233, radius: radius, label: '6'},
    {centerX:0.835, centerY:0.154, radius: radius, label: 'F'},
    {centerX:0.706, centerY:0.602, radius: radius, label: '7'},
    {centerX:0.826, centerY:0.394, radius: radius, label: 'G'},
    {centerX:0.858, centerY:0.878, radius: radius, label: '8'},
    {centerX:0.817, centerY:0.516, radius: radius, label: 'H'},
    {centerX:0.697, centerY:0.878, radius: radius, label: '9'},
    {centerX:0.358, centerY:0.875, radius: radius, label: 'I'},
    {centerX:0.096, centerY:0.921, radius: radius, label: '10'},
    {centerX:0.193, centerY:0.305, radius: radius, label: 'J'},
    {centerX:0.138, centerY:0.1, radius: radius, label: '11'},
    {centerX:0.927, centerY:0.111, radius: radius, label: 'K'},
    {centerX:0.931, centerY:0.442, radius: radius, label: '12'},
    {centerX:0.872, centerY:0.222, radius: radius, label: 'L'},
    {centerX:0.922, centerY:0.939, radius: radius, label: '13'},
]

var CirclesB_003 = [
    {centerX:0.53808962264151, centerY:0.356519, radius: radius, label: '1'},
    {centerX:0.746108490566038, centerY:0.689199, radius: radius, label: 'A'},
    {centerX:0.384198113207547, centerY:0.644019, radius: radius, label: '2'},
    {centerX:0.488207547169811, centerY:0.143056, radius: radius, label: 'B'},
    {centerX:0.606014150943396, centerY:0.206304, radius: radius, label: '3'},
    {centerX:0.746108490566038, centerY:0.393139, radius: radius, label: 'C'},
    {centerX:0.742924528301887, centerY:0.124656, radius: radius, label: '4'},
    {centerX:0.9, centerY:0.130351, radius: radius, label: 'D'},
    {centerX:0.897877358490566, centerY:0.4654, radius: radius, label: '5'},
    {centerX:0.829952830188679, centerY:0.818479, radius: radius, label: 'E'},
    {centerX:0.575235849056604, centerY:0.768499, radius: radius, label: '6'},
    {centerX:0.315212264150943, centerY:0.9366, radius: radius, label: 'F'},
]


var Circles_FaCE = [
    {centerX:0.316901408450704, centerY:0.468354430379747, radius:radius,label: '1'},
    {centerX:0.5, centerY:0.227848101265823, radius:radius,label: 'A'},
    {centerX:0.640845070422535, centerY:0.556962025316456, radius:radius,label: '2'},
    {centerX:0.676056338028169, centerY:0.164556962025317, radius:radius,label: 'B'},
    {centerX:0.816901408450704, centerY:0.215189873417722, radius:radius,label: '3'},
    {centerX:0.76056338028169, centerY:0.493670886075949, radius:radius,label: 'C'},
    {centerX:0.915492957746479, centerY:0.379746835443038, radius:radius,label: '4'},
    {centerX:0.76056338028169, centerY:0.683544303797468, radius:radius,label: 'D'},
    {centerX:0.753521126760563, centerY:0.911392405063291, radius:radius,label: '5'},
    {centerX:0.549295774647887, centerY:0.683544303797468, radius:radius,label: 'E'},
    {centerX:0.450704225352113, centerY:0.873417721518987, radius:radius,label: '6'},
    {centerX:0.232394366197183, centerY:0.810126582278481, radius:radius,label: 'F'},
    {centerX:0.408450704225352, centerY:0.645569620253165, radius:radius,label: '7'},
    {centerX:0.0704225352112676, centerY:0.620253164556962, radius:radius,label: 'G'},
    {centerX:0.190140845070423, centerY:0.392405063291139, radius:radius,label: '8'},
    {centerX:0.0915492957746479, centerY:0.20253164556962, radius:radius,label: 'H'},
]


var TrailMakingA_Default = {
    Circles: CirclesA_005,
    SuggestedWidth: SuggestedWidthA,
    SuggestedHeight: SuggestedHeightA,
    ShowTimer: true,
    Duration: DurationA,
    ShowPractice: true,
    PracticeCircles: SampleCirclesA,
    PracticeSuggestedWidth: SuggestedWidthSampleA,
    PracticeSuggestedHeight: SuggestedHeightSampleA,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: true,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails A'
}
var TrailMakingA_DefaultMirrorX = {
    Circles: CirclesA_005mirrorX,
    SuggestedWidth: SuggestedWidthA,
    SuggestedHeight: SuggestedHeightA,
    ShowTimer: true,
    Duration: DurationA,
    ShowPractice: true,
    PracticeCircles: SampleCirclesA,
    PracticeSuggestedWidth: SuggestedWidthSampleA,
    PracticeSuggestedHeight: SuggestedHeightSampleA,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: true,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails A'
}
var TrailMakingA_DefaultMirrorY = {
    Circles: CirclesA_005mirrorY,
    SuggestedWidth: SuggestedWidthA,
    SuggestedHeight: SuggestedHeightA,
    ShowTimer: true,
    Duration: DurationA,
    ShowPractice: true,
    PracticeCircles: SampleCirclesA,
    PracticeSuggestedWidth: SuggestedWidthSampleA,
    PracticeSuggestedHeight: SuggestedHeightSampleA,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: true,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails A'
}
var TrailMakingA_DefaultMirrorXY = {
    Circles: CirclesA_005mirrorXY,
    SuggestedWidth: SuggestedWidthA,
    SuggestedHeight: SuggestedHeightA,
    ShowTimer: true,
    Duration: DurationA,
    ShowPractice: true,
    PracticeCircles: SampleCirclesA,
    PracticeSuggestedWidth: SuggestedWidthSampleA,
    PracticeSuggestedHeight: SuggestedHeightSampleA,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: true,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails A'
}
var TrailMakingB_Default = {
    Circles: CirclesB_005,
    SuggestedWidth: SuggestedWidthB,
    SuggestedHeight: SuggestedHeightB,
    ShowTimer: true,
    Duration: DurationB,
    ShowPractice: true,
    PracticeCircles: SampleCirclesB,
    PracticeSuggestedWidth: SuggestedWidthSampleB,
    PracticeSuggestedHeight: SuggestedHeightSampleB,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: false,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails B'
}
var TrailMakingB_DefaultMirrorX = {
    Circles: CirclesB_005mirrorX,
    SuggestedWidth: SuggestedWidthB,
    SuggestedHeight: SuggestedHeightB,
    ShowTimer: true,
    Duration: DurationB,
    ShowPractice: true,
    PracticeCircles: SampleCirclesB,
    PracticeSuggestedWidth: SuggestedWidthSampleB,
    PracticeSuggestedHeight: SuggestedHeightSampleB,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: false,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails B'
}
var TrailMakingB_DefaultMirrorY = {
    Circles: CirclesB_005mirrorY,
    SuggestedWidth: SuggestedWidthB,
    SuggestedHeight: SuggestedHeightB,
    ShowTimer: true,
    Duration: DurationB,
    ShowPractice: true,
    PracticeCircles: SampleCirclesB,
    PracticeSuggestedWidth: SuggestedWidthSampleB,
    PracticeSuggestedHeight: SuggestedHeightSampleB,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: false,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails B'
}
var TrailMakingB_DefaultMirrorXY = {
    Circles: CirclesB_005mirrorXY,
    SuggestedWidth: SuggestedWidthB,
    SuggestedHeight: SuggestedHeightB,
    ShowTimer: true,
    Duration: DurationB,
    ShowPractice: true,
    PracticeCircles: SampleCirclesB,
    PracticeSuggestedWidth: SuggestedWidthSampleB,
    PracticeSuggestedHeight: SuggestedHeightSampleB,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: false,
    WelcomeSpoken: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails B'
}

var TrailMaking_FaCE = {
    Circles: Circles_FaCE,
    SuggestedWidth: SuggestedWidthFaCE,
    SuggestedHeight: SuggestedHeightFaCE,
    ShowTimer: false,
    Duration: DurationFaCE,
    ShowPractice: false,
    PracticeCircles: null,
    PracticeSuggestedWidth: null,
    PracticeSuggestedHeight: null,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    change_circle_color_only_when_correct: false,
    RecordGIF: true,
}

var FaCE_Training = [
    {centerX:0.2, centerY:0.2, radius:radius,label: '1'},
    {centerX:0.8, centerY:0.2, radius:radius,label: 'A'},
    {centerX:0.8, centerY:0.5, radius:radius,label: '2'},
    {centerX:0.2, centerY:0.5, radius:radius,label: 'B'},
    {centerX:0.2, centerY:0.8, radius:radius,label: '3'},
    {centerX:0.8, centerY:0.8, radius:radius,label: 'C'},
]

var TrailMaking_FaCE_Training = {
    Circles: FaCE_Training,
    SuggestedWidth: 450,
    SuggestedHeight: 700,
    ShowTimer: false,
    Duration: DurationFaCE,
    ShowPractice: false,
    PracticeCircles: null,
    PracticeSuggestedWidth: null,
    PracticeSuggestedHeight: null,
    ShowInstructions: true,
    InstructionsSpoken: false,
    ShowWelcome: false,
    ShowThankYou: false,
    AskForNotes: false,
    change_circle_color_only_when_correct: false,
    RecordGIF: true,
}

var DemonstrationPractice = [
    {centerX:0.2, centerY:0.2, radius:radius,label: '1'},
    {centerX:0.8, centerY:0.2, radius:radius,label: '2'},
    {centerX:0.8, centerY:0.8, radius:radius,label: '3'},
    {centerX:0.2, centerY:0.8, radius:radius,label: '4'},

]

var Demonstration = [
    {centerX:0.2, centerY:0.2, radius:radius,label: '1'},
    {centerX:0.8, centerY:0.2, radius:radius,label: '2'},
    {centerX:0.6, centerY:0.5, radius:radius,label: '3'},
    {centerX:0.8, centerY:0.8, radius:radius,label: '4'},
    {centerX:0.2, centerY:0.8, radius:radius,label: '5'},
    {centerX:0.4, centerY:0.5, radius:radius,label: '6'},
    {centerX:0.2, centerY:0.5, radius:radius,label: '7'},
]
var TrailMaking_Demonstration = {
    Circles: Demonstration,
    SuggestedWidth: 450,
    SuggestedHeight: 450,
    ShowTimer: true,
    Duration: 2*60*1000,
    ShowPractice: false,
    PracticeCircles: DemonstrationPractice,
    PracticeSuggestedWidth: 450,
    PracticeSuggestedHeight: 450,
    ShowInstructions: false,
    InstructionsSpoken: false,
    ShowWelcome: false,
    ShowThankYou: true,
    AskForNotes: false,
    change_circle_color_only_when_correct: false,
    RecordGIF: true,
    shortTitle: 'TrailsA'
}

add('TrailMakingA_Default', function(){ parameters = TrailMakingA_Default});
add('TrailMakingA_DefaultMirrorX', function(){ parameters = TrailMakingA_DefaultMirrorX});
add('TrailMakingA_DefaultMirrorY', function(){ parameters = TrailMakingA_DefaultMirrorY});
add('TrailMakingA_DefaultMirrorXY', function(){ parameters = TrailMakingA_DefaultMirrorXY});
add('TrailMakingB_Default', function(){ parameters = TrailMakingB_Default});
add('TrailMakingB_DefaultMirrorX', function(){ parameters = TrailMakingB_DefaultMirrorX});
add('TrailMakingB_DefaultMirrorY', function(){ parameters = TrailMakingB_DefaultMirrorY});
add('TrailMakingB_DefaultMirrorXY', function(){ parameters = TrailMakingB_DefaultMirrorXY});


add('TrailMaking_FaCE', function(){ parameters = TrailMaking_FaCE});
add('TrailMaking_FaCE_Training', function(){ parameters = TrailMaking_FaCE_Training});
add('TrailMaking_Demonstration', function(){ parameters = TrailMaking_Demonstration});
add('TrailMakingB_DefaultTEST', function(){ parameters = TrailMakingB_DefaultTEST});