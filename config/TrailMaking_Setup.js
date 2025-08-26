

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



// how close to each circle the cursor needs to be
var tolerance = 15;
// width of the pen
var pen_width = 2;

// This adjust the height so there is room for the Finished button and the timer
var HeightAdj = 400;

//Whether or not to change the color of the circle when response is correct
var GiveFeedback = true;          
// How are the circle locations specified?
var LocationsAsProportions = true;

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
// canvas width
var SuggestedWidthSampleA = 610;
// canvas height
var SuggestedHeightSampleA = 348;
// use timer?
var ShowTimerSampleA = false;


// SETUP FOR TRAILS A
var CirclesA_001 = [
    {centerX:0.54, centerY:0.712727272727273, radius: radius, label: '1'},
    {centerX:0.408, centerY:0.825454545454545, radius: radius, label: '2'},
    {centerX:0.624, centerY:0.832727272727273, radius: radius, label: '3'},
    {centerX:0.64, centerY:0.378181818181818, radius: radius, label: '4'},
    {centerX:0.4, centerY:0.490909090909091, radius: radius, label: '5'},
    {centerX:0.512, centerY:0.589090909090909, radius: radius, label: '6'},
    {centerX:0.356, centerY:0.650909090909091, radius: radius, label: '7'},
    {centerX:0.16, centerY:0.814545454545455, radius: radius, label: '8'},
    {centerX:0.204, centerY:0.905454545454545, radius: radius, label: '9'},
    {centerX:0.3, centerY:0.814545454545455, radius: radius, label: '10'},
    {centerX:0.396, centerY:0.934545454545455, radius: radius, label: '11'},
    {centerX:0.06, centerY:0.941818181818182, radius: radius, label: '12'},
    {centerX:0.116, centerY:0.527272727272727, radius: radius, label: '13'},
    {centerX:0.044, centerY:0.614545454545455, radius: radius, label: '14'},
    {centerX:0.048, centerY:0.123636363636364, radius: radius, label: '15'},
    {centerX:0.132, centerY:0.290909090909091, radius: radius, label: '16'},
    {centerX:0.288, centerY:0.0581818181818182, radius: radius, label: '17'},
    {centerX:0.344, centerY:0.287272727272727, radius: radius, label: '18'},
    {centerX:0.556, centerY:0.214545454545455, radius: radius, label: '19'},
    {centerX:0.4, centerY:0.2, radius: radius, label: '20'},
    {centerX:0.456, centerY:0.0509090909090909, radius: radius, label: '21'},
    {centerX:0.792, centerY:0.152727272727273, radius: radius, label: '22'},
    {centerX:0.82, centerY:0.909090909090909, radius: radius, label: '23'},
    {centerX:0.72, centerY:0.516363636363636, radius: radius, label: '24'},
    {centerX:0.692, centerY:0.934545454545455, radius: radius, label: '25'},
]

// SETUP FOR TRAILS A.
//  This is a MIRRORED AROUND X Version. X = 1-X 

// Wagner S, Helmreich I, Dahmen N, Lieb K, Tadic A. 
// Reliability of three alternate forms of the trail making 
// tests a and B. Arch Clin Neuropsychol. 2011;26(4):314-321.
  
var CirclesA_011 = [
    {centerX:0.46,  centerY:0.712727272727273,  radius, label:  '1'},
    {centerX:0.592,  centerY:0.825454545454545,  radius, label:  '2'},
    {centerX:0.376,  centerY:0.832727272727273,  radius, label:  '3'},
    {centerX:0.36,  centerY:0.378181818181818,  radius, label:  '4'},
    {centerX:0.6,  centerY:0.490909090909091,  radius, label:  '5'},
    {centerX:0.488,  centerY:0.589090909090909,  radius, label:  '6'},
    {centerX:0.644,  centerY:0.650909090909091,  radius, label:  '7'},
    {centerX:0.84,  centerY:0.814545454545455,  radius, label:  '8'},
    {centerX:0.796,  centerY:0.905454545454545,  radius, label:  '9'},
    {centerX:0.7,  centerY:0.814545454545455,  radius, label:  '10'},
    {centerX:0.604,  centerY:0.934545454545455,  radius, label:  '11'},
    {centerX:0.94,  centerY:0.941818181818182,  radius, label:  '12'},
    {centerX:0.884,  centerY:0.527272727272727,  radius, label:  '13'},
    {centerX:0.956,  centerY:0.614545454545455,  radius, label:  '14'},
    {centerX:0.952,  centerY:0.123636363636364,  radius, label:  '15'},
    {centerX:0.868,  centerY:0.290909090909091,  radius, label:  '16'},
    {centerX:0.712,  centerY:0.0581818181818182,  radius, label:  '17'},
    {centerX:0.656,  centerY:0.287272727272727,  radius, label:  '18'},
    {centerX:0.444,  centerY:0.214545454545455,  radius, label:  '19'},
    {centerX:0.6,  centerY:0.2,  radius, label:  '20'},
    {centerX:0.544,  centerY:0.0509090909090909,  radius, label:  '21'},
    {centerX:0.208,  centerY:0.152727272727273,  radius, label:  '22'},
    {centerX:0.18,  centerY:0.909090909090909,  radius, label:  '23'},
    {centerX:0.28,  centerY:0.516363636363636,  radius, label:  '24'},
    {centerX:0.308,  centerY:0.934545454545455,  radius, label:  '25'},
]

// SETUP FOR TRAILS A
//  This is a MIRRORED AROUND Y Version. Y = 1-Y
var CirclesA_021 = [
    {centerX:0.54,  centerY:0.287272727272727,  radius, label:  '1'},
    {centerX:0.408,  centerY:0.174545454545455,  radius, label:  '2'},
    {centerX:0.624,  centerY:0.167272727272727,  radius, label:  '3'},
    {centerX:0.64,  centerY:0.621818181818182,  radius, label:  '4'},
    {centerX:0.4,  centerY:0.509090909090909,  radius, label:  '5'},
    {centerX:0.512,  centerY:0.410909090909091,  radius, label:  '6'},
    {centerX:0.356,  centerY:0.349090909090909,  radius, label:  '7'},
    {centerX:0.16,  centerY:0.185454545454545,  radius, label:  '8'},
    {centerX:0.204,  centerY:0.094545454545455,  radius, label:  '9'},
    {centerX:0.3,  centerY:0.185454545454545,  radius, label:  '10'},
    {centerX:0.396,  centerY:0.065454545454545,  radius, label:  '11'},
    {centerX:0.06,  centerY:0.058181818181818,  radius, label:  '12'},
    {centerX:0.116,  centerY:0.472727272727273,  radius, label:  '13'},
    {centerX:0.044,  centerY:0.385454545454545,  radius, label:  '14'},
    {centerX:0.048,  centerY:0.876363636363636,  radius, label:  '15'},
    {centerX:0.132,  centerY:0.709090909090909,  radius, label:  '16'},
    {centerX:0.288,  centerY:0.941818181818182,  radius, label:  '17'},
    {centerX:0.344,  centerY:0.712727272727273,  radius, label:  '18'},
    {centerX:0.556,  centerY:0.785454545454545,  radius, label:  '19'},
    {centerX:0.4,  centerY:0.8,  radius, label:  '20'},
    {centerX:0.456,  centerY:0.949090909090909,  radius, label:  '21'},
    {centerX:0.792,  centerY:0.847272727272727,  radius, label:  '22'},
    {centerX:0.82,  centerY:0.0909090909090911,  radius, label:  '23'},
    {centerX:0.72,  centerY:0.483636363636364,  radius, label:  '24'},
    {centerX:0.692,  centerY:0.065454545454545,  radius, label:  '25'},
]
// SETUP FOR TRAILS A
//  This is a MIRRORED AROUND X and Y Version. X = 1-X.  Y = 1-Y
var CirclesA_031 = [
    {centerX:0.46,  centerY:0.287272727272727,  radius, label:  '1'},
    {centerX:0.592,  centerY:0.174545454545455,  radius, label:  '2'},
    {centerX:0.376,  centerY:0.167272727272727,  radius, label:  '3'},
    {centerX:0.36,  centerY:0.621818181818182,  radius, label:  '4'},
    {centerX:0.6,  centerY:0.509090909090909,  radius, label:  '5'},
    {centerX:0.488,  centerY:0.410909090909091,  radius, label:  '6'},
    {centerX:0.644,  centerY:0.349090909090909,  radius, label:  '7'},
    {centerX:0.84,  centerY:0.185454545454545,  radius, label:  '8'},
    {centerX:0.796,  centerY:0.094545454545455,  radius, label:  '9'},
    {centerX:0.7,  centerY:0.185454545454545,  radius, label:  '10'},
    {centerX:0.604,  centerY:0.065454545454545,  radius, label:  '11'},
    {centerX:0.94,  centerY:0.058181818181818,  radius, label:  '12'},
    {centerX:0.884,  centerY:0.472727272727273,  radius, label:  '13'},
    {centerX:0.956,  centerY:0.385454545454545,  radius, label:  '14'},
    {centerX:0.952,  centerY:0.876363636363636,  radius, label:  '15'},
    {centerX:0.868,  centerY:0.709090909090909,  radius, label:  '16'},
    {centerX:0.712,  centerY:0.941818181818182,  radius, label:  '17'},
    {centerX:0.656,  centerY:0.712727272727273,  radius, label:  '18'},
    {centerX:0.444,  centerY:0.785454545454545,  radius, label:  '19'},
    {centerX:0.6,  centerY:0.8,  radius, label:  '20'},
    {centerX:0.544,  centerY:0.949090909090909,  radius, label:  '21'},
    {centerX:0.208,  centerY:0.847272727272727,  radius, label:  '22'},
    {centerX:0.18,  centerY:0.0909090909090911,  radius, label:  '23'},
    {centerX:0.28,  centerY:0.483636363636364,  radius, label:  '24'},
    {centerX:0.308,  centerY:0.065454545454545,  radius, label:  '25'},
]

var CirclesA_002 = [
    {centerX:0.54, centerY:0.712727272727273, radius: radius, label: '1'},
    {centerX:0.408, centerY:0.825454545454545, radius: radius, label: '2'},
    {centerX:0.624, centerY:0.832727272727273, radius: radius, label: '3'},
    {centerX:0.64, centerY:0.378181818181818, radius: radius, label: '4'},
    {centerX:0.4, centerY:0.490909090909091, radius: radius, label: '5'},
    {centerX:0.512, centerY:0.589090909090909, radius: radius, label: '6'},
]
var CirclesA_003 = [
    {centerX:0.759375, centerY:0.54357629, radius: radius, label: '1'},
    {centerX:0.57375, centerY:0.721875, radius: radius, label: '2'},
    {centerX:0.8775, centerY:0.73502429, radius: radius, label: '3'},
    {centerX:0.9, centerY:0.161784, radius: radius, label: '4'},
    {centerX:0.5625, centerY:0.265631, radius: radius, label: '5'},
    {centerX:0.72, centerY:0.376371, radius: radius, label: '6'},
    {centerX:0.500625, centerY:0.456351, radius: radius, label: '7'},
    {centerX:0.225, centerY:0.704975, radius: radius, label: '8'},
    {centerX:0.286875, centerY:0.864275, radius: radius, label: '9'},
    {centerX:0.421875, centerY:0.703296, radius: radius, label: '10'},
    {centerX:0.556875, centerY:0.919056, radius: radius, label: '11'},
    {centerX:0.084375, centerY:0.934464, radius: radius, label: '12'},
]
// canvas width
var SuggestedWidthA = 850;
// canvas height
var SuggestedHeightA = 1100;
// use timer?
var ShowTimerA = true;
// task duration
var DurationA = 1000*60*2.5


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
// ideal canvas size
// canvas width
var SuggestedWidthSampleB = 610;
// canvas height
var SuggestedHeightSampleB = 348;
// use timer?
var ShowTimerSampleB = false;


// SETUP FOR TRAILS B
var CirclesB_001 = [
    {centerX:0.507326007326007, centerY:0.436555891238671, radius: radius, label: '1'},
    {centerX:0.703296703296703, centerY:0.743202416918429, radius: radius, label: 'A'},
    {centerX:0.362637362637363, centerY:0.712990936555891, radius: radius, label: '2'},
    {centerX:0.45970695970696,  centerY:0.18429003021148,  radius: radius, label: 'B'},
    {centerX:0.571428571428571, centerY:0.302114803625378, radius: radius, label: '3'},
    {centerX:0.703296703296703, centerY:0.516616314199396, radius: radius, label: 'C'},
    {centerX:0.6996336996337,   centerY:0.134441087613293, radius: radius, label: '4'},
    {centerX:0.847985347985348, centerY:0.151057401812689, radius: radius, label: 'D'},
    {centerX:0.846153846153846, centerY:0.580060422960725, radius: radius, label: '5'},
    {centerX:0.782051282051282, centerY:0.823262839879154, radius: radius, label: 'E'},
    {centerX:0.542124542124542, centerY:0.793051359516616, radius: radius, label: '6'},
    {centerX:0.296703296703297, centerY:0.889728096676737, radius: radius, label: 'F'},
    {centerX:0.234432234432234, centerY:0.442598187311178, radius: radius, label: '7'},
    {centerX:0.153846153846154, centerY:0.566465256797583, radius: radius, label: 'G'},
    {centerX:0.119047619047619, centerY:0.0574018126888218,radius: radius, label: '8'},
    {centerX:0.267399267399267, centerY:0.27190332326284,  radius: radius, label: 'H'},
    {centerX:0.265567765567766, centerY:0.126888217522659, radius: radius, label: '9'},
    {centerX:0.617216117216117, centerY:0.0438066465256798,radius: radius, label: 'I'},
    {centerX:0.926739926739927, centerY:0.0574018126888218,radius: radius, label: '10'},
    {centerX:0.877289377289377, centerY:0.675226586102719, radius: radius, label: 'J'},
    {centerX:0.924908424908425, centerY:0.913897280966767, radius: radius, label: '11'},
    {centerX:0.0732600732600733,centerY:0.933534743202417, radius: radius, label: 'K'},
    {centerX:0.0567765567765568,centerY:0.486404833836858, radius: radius, label: '12'},
    {centerX:0.168498168498169, centerY:0.741691842900302, radius: radius, label: 'L'},
]
//  This is a MIRRORED AROUND X Version. X = 1-X.  
var CirclesB_011 = [
   {centerX:0.492673992673993,  centerY:0.436555891238671,  radius, label:  '1'},
    {centerX:0.296703296703297,  centerY:0.743202416918429,  radius, label:  'A'},
    {centerX:0.637362637362637,  centerY:0.712990936555891,  radius, label:  '2'},
    {centerX:0.54029304029304,  centerY:0.18429003021148,  radius, label:  'B'},
    {centerX:0.428571428571429,  centerY:0.302114803625378,  radius, label:  '3'},
    {centerX:0.296703296703297,  centerY:0.516616314199396,  radius, label:  'C'},
    {centerX:0.3003663003663,  centerY:0.134441087613293,  radius, label:  '4'},
    {centerX:0.152014652014652,  centerY:0.151057401812689,  radius, label:  'D'},
    {centerX:0.153846153846154,  centerY:0.580060422960725,  radius, label:  '5'},
    {centerX:0.217948717948718,  centerY:0.823262839879154,  radius, label:  'E'},
    {centerX:0.457875457875458,  centerY:0.793051359516616,  radius, label:  '6'},
    {centerX:0.703296703296703,  centerY:0.889728096676737,  radius, label:  'F'},
    {centerX:0.765567765567766,  centerY:0.442598187311178,  radius, label:  '7'},
    {centerX:0.846153846153846,  centerY:0.566465256797583,  radius, label:  'G'},
    {centerX:0.880952380952381,  centerY:0.0574018126888218,  radius, label:  '8'},
    {centerX:0.732600732600733,  centerY:0.27190332326284,  radius, label:  'H'},
    {centerX:0.734432234432234,  centerY:0.126888217522659,  radius, label:  '9'},
    {centerX:0.382783882783883,  centerY:0.0438066465256798,  radius, label:  'I'},
    {centerX:0.073260073260073,  centerY:0.0574018126888218,  radius, label:  '10'},
    {centerX:0.122710622710623,  centerY:0.675226586102719,  radius, label:  'J'},
    {centerX:0.0750915750915751,  centerY:0.913897280966767,  radius, label:  '11'},
    {centerX:0.926739926739927, centerY:0.933534743202417,  radius, label:  'K'},
    {centerX:0.943223443223443, centerY:0.486404833836858,  radius, label:  '12'},
    {centerX:0.831501831501831,  centerY:0.741691842900302,  radius, label:  'L'},
]
//  This is a MIRRORED AROUND Y Version.  Y = 1-Y
var CirclesB_021 = [
    {centerX:0.507326007326007,  centerY:0.563444108761329,  radius, label:  '1'},
    {centerX:0.703296703296703,  centerY:0.256797583081571,  radius, label:  'A'},
    {centerX:0.362637362637363,  centerY:0.287009063444109,  radius, label:  '2'},
    {centerX:0.45970695970696,  centerY:0.81570996978852,  radius, label:  'B'},
    {centerX:0.571428571428571,  centerY:0.697885196374622,  radius, label:  '3'},
    {centerX:0.703296703296703,  centerY:0.483383685800604,  radius, label:  'C'},
    {centerX:0.6996336996337,  centerY:0.865558912386707,  radius, label:  '4'},
    {centerX:0.847985347985348,  centerY:0.848942598187311,  radius, label:  'D'},
    {centerX:0.846153846153846,  centerY:0.419939577039275,  radius, label:  '5'},
    {centerX:0.782051282051282,  centerY:0.176737160120846,  radius, label:  'E'},
    {centerX:0.542124542124542,  centerY:0.206948640483384,  radius, label:  '6'},
    {centerX:0.296703296703297,  centerY:0.110271903323263,  radius, label:  'F'},
    {centerX:0.234432234432234,  centerY:0.557401812688822,  radius, label:  '7'},
    {centerX:0.153846153846154,  centerY:0.433534743202417,  radius, label:  'G'},
    {centerX:0.119047619047619,  centerY:0.942598187311178,  radius, label:  '8'},
    {centerX:0.267399267399267,  centerY:0.72809667673716,  radius, label:  'H'},
    {centerX:0.265567765567766,  centerY:0.873111782477341,  radius, label:  '9'},
    {centerX:0.617216117216117,  centerY:0.95619335347432,  radius, label:  'I'},
    {centerX:0.926739926739927,  centerY:0.942598187311178,  radius, label:  '10'},
    {centerX:0.877289377289377,  centerY:0.324773413897281,  radius, label:  'J'},
    {centerX:0.924908424908425,  centerY:0.086102719033233,  radius, label:  '11'},
    {centerX:0.0732600732600733, centerY:0.066465256797583,  radius, label:  'K'},
    {centerX:0.0567765567765568, centerY:0.513595166163142,  radius, label:  '12'},
    {centerX:0.168498168498169,  centerY:0.258308157099698,  radius, label:  'L'},
]
//  This is a MIRRORED AROUND X and Y Version. X = 1-X.  Y = 1-Y
var CirclesB_031 = [
   {centerX:0.492673992673993,  centerY:0.563444108761329,  radius, label:  '1'},
    {centerX:0.296703296703297,  centerY:0.256797583081571,  radius, label:  'A'},
    {centerX:0.637362637362637,  centerY:0.287009063444109,  radius, label:  '2'},
    {centerX:0.54029304029304,  centerY:0.81570996978852,  radius, label:  'B'},
    {centerX:0.428571428571429,  centerY:0.697885196374622,  radius, label:  '3'},
    {centerX:0.296703296703297,  centerY:0.483383685800604,  radius, label:  'C'},
    {centerX:0.3003663003663,  centerY:0.865558912386707,  radius, label:  '4'},
    {centerX:0.152014652014652,  centerY:0.848942598187311,  radius, label:  'D'},
    {centerX:0.153846153846154,  centerY:0.419939577039275,  radius, label:  '5'},
    {centerX:0.217948717948718,  centerY:0.176737160120846,  radius, label:  'E'},
    {centerX:0.457875457875458,  centerY:0.206948640483384,  radius, label:  '6'},
    {centerX:0.703296703296703,  centerY:0.110271903323263,  radius, label:  'F'},
    {centerX:0.765567765567766,  centerY:0.557401812688822,  radius, label:  '7'},
    {centerX:0.846153846153846,  centerY:0.433534743202417,  radius, label:  'G'},
    {centerX:0.880952380952381,  centerY:0.942598187311178,  radius, label:  '8'},
    {centerX:0.732600732600733,  centerY:0.72809667673716,  radius, label:  'H'},
    {centerX:0.734432234432234,  centerY:0.873111782477341,  radius, label:  '9'},
    {centerX:0.382783882783883,  centerY:0.95619335347432,  radius, label:  'I'},
    {centerX:0.073260073260073,  centerY:0.942598187311178,  radius, label:  '10'},
    {centerX:0.122710622710623,  centerY:0.324773413897281,  radius, label:  'J'},
    {centerX:0.0750915750915751,  centerY:0.086102719033233,  radius, label:  '11'},
    {centerX:0.926739926739927, centerY:0.066465256797583,  radius, label:  'K'},
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
// canvas width
var SuggestedWidthB = 850;
// canvas height
var SuggestedHeightB = 1100;
// use timer?
var ShowTimerB = true;
// task duration
var DurationB = 1000*60*5


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
// canvas width
var SuggestedWidthFaCE = 850;
var SuggestedHeightFaCE = 475;
// use timer?
var ShowTimerFaCE = false;
// task duration
var DurationFaCE = 1000*60*5


var TrailMaking_Default = {
    Circles: CirclesA_001,
    SuggestedWidth: SuggestedWidthA,
    SuggestedHeight: SuggestedHeightA,
    ShowTimer: true,
    Duration: DurationA,
    ShowPractice: true,
    PracticeCircles: SampleCirclesA,
    PracticeSuggestedWidth: SuggestedWidthSampleA,
    PracticeSuggestedHeight: SuggestedHeightSampleA,
    ShowInstructions: false,
    InstructionsSpoken: false,
    ShowWelcome: true,
	ShowThankYou: true,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails A'
}

var TrailMakingA_Default = {
    Circles: CirclesA_001,
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
var TrailMakingA_Default011 = {
    Circles: CirclesA_011,
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
var TrailMakingA_Default021 = {
    Circles: CirclesA_021,
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
var TrailMakingA_Default031 = {
    Circles: CirclesA_031,
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
    Circles: CirclesB_001,
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

var TrailMakingA_Default_02 = {
    Circles: CirclesA_001,
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
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails A'
}

var TrailMakingB_Default_02 = {
    Circles: CirclesB_001,
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
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'Trails B'
}

var TrailMakingA_003 = {
    Circles: CirclesA_003,
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
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordGIF: true,
    shortTitle: 'TrailsA'
}

var TrailMakingB_003 = {
    Circles: CirclesB_003,
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
add('TrailMakingA_Default011', function(){ parameters = TrailMakingA_Default011});
add('TrailMakingA_Default021', function(){ parameters = TrailMakingA_Default021});
add('TrailMakingA_Default031', function(){ parameters = TrailMakingA_Default031});
add('TrailMakingB_Default', function(){ parameters = TrailMakingB_Default});
add('TrailMakingB_Default011', function(){ parameters = TrailMakingB_Default011});
add('TrailMakingB_Default021', function(){ parameters = TrailMakingB_Default021});
add('TrailMakingB_Default031', function(){ parameters = TrailMakingB_Default031});

add('TrailMakingA_Default_02', function(){ parameters = TrailMakingA_Default_02});
add('TrailMakingB_Default_02', function(){ parameters = TrailMakingB_Default_02});

//add('TrailMakingA_001', function(){ parameters = TrailMakingA_001});
//add('TrailMakingB_001', function(){ parameters = TrailMakingB_001});
add('TrailMakingA_003', function(){ parameters = TrailMakingA_003});
add('TrailMakingB_003', function(){ parameters = TrailMakingB_003});
add('TrailMaking_FaCE', function(){ parameters = TrailMaking_FaCE});
add('TrailMaking_FaCE_Training', function(){ parameters = TrailMaking_FaCE_Training});
add('TrailMaking_Demonstration', function(){ parameters = TrailMaking_Demonstration});