


var FullScreenMode = true;

var InstructionFontSize = "40px";

// size of each circle
var radius = 15;
// color of circle
var CircleColor = 'white'
// color of circle if correct
var CorrectCircleColor = 'yellow'
// size of text inside each circle
var TextFont = "20px Verdana";
var CircleBorderWidth = 2

// label for first circle
var FirstCircleLabel = 'begin'
// label for last circle
var LastCircleLabel = 'end'

// how close to each circle the cursor needs to be
var tolerance = 0;
// width of the pen
var pen_width = 2;

// This adjust the height so there is room for the Finished button and the timer
var HeightAdj = 160;

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
var CirclesA = [
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
var CirclesB = [
    {centerX:0.507326007326007, centerY:0.436555891238671, radius: radius, label: '1'},
    {centerX:0.703296703296703, centerY:0.743202416918429, radius: radius, label: 'A'},
    {centerX:0.362637362637363, centerY:0.712990936555891, radius: radius, label: '2'},
    {centerX:0.45970695970696, centerY:0.18429003021148, radius: radius, label: 'B'},
    {centerX:0.571428571428571, centerY:0.302114803625378, radius: radius, label: '3'},
    {centerX:0.703296703296703, centerY:0.516616314199396, radius: radius, label: 'C'},
    {centerX:0.6996336996337, centerY:0.134441087613293, radius: radius, label: '4'},
    {centerX:0.847985347985348, centerY:0.151057401812689, radius: radius, label: 'D'},
    {centerX:0.846153846153846, centerY:0.580060422960725, radius: radius, label: '5'},
    {centerX:0.782051282051282, centerY:0.823262839879154, radius: radius, label: 'E'},
    {centerX:0.542124542124542, centerY:0.793051359516616, radius: radius, label: '6'},
    {centerX:0.296703296703297, centerY:0.889728096676737, radius: radius, label: 'F'},
    {centerX:0.234432234432234, centerY:0.442598187311178, radius: radius, label: '7'},
    {centerX:0.153846153846154, centerY:0.566465256797583, radius: radius, label: 'G'},
    {centerX:0.119047619047619, centerY:0.0574018126888218, radius: radius, label: '8'},
    {centerX:0.267399267399267, centerY:0.27190332326284, radius: radius, label: 'H'},
    {centerX:0.265567765567766, centerY:0.126888217522659, radius: radius, label: '9'},
    {centerX:0.617216117216117, centerY:0.0438066465256798, radius: radius, label: 'I'},
    {centerX:0.926739926739927, centerY:0.0574018126888218, radius: radius, label: '10'},
    {centerX:0.877289377289377, centerY:0.675226586102719, radius: radius, label: 'J'},
    {centerX:0.924908424908425, centerY:0.913897280966767, radius: radius, label: '11'},
    {centerX:0.0732600732600733, centerY:0.933534743202417, radius: radius, label: 'K'},
    {centerX:0.0567765567765568, centerY:0.486404833836858, radius: radius, label: '12'},
    {centerX:0.168498168498169, centerY:0.741691842900302, radius: radius, label: 'L'},
]
// canvas width
var SuggestedWidthB = 850;
// canvas height
var SuggestedHeightB = 1100;
// use timer?
var ShowTimerB = true;
// task duration
var DurationB = 1000*60*5



var InstructionsSampleA = ['For this task you will see numbers in circles.</br> Please draw a line with the mouse or your finger (on a touch screen) from one number to the next, in order.</br> Start at 1, then go to 2, then go to 3, and so on.</br> Please try not to lift the pen as you move from one number to the next. Work as quickly and accurately as you can.</br> When you have finished press the Finished button at the bottom of the screen.', 
    'When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.', 'First, you will tray a practice test. Press next to practice'];

var InstructionsA = ['Now you will perform the actual test.</br> Remember, start at 1, then go to 2, then go to 3, and so on.</br> Please try not to lift the pen as you move from one number to the next. Work as quickly and accurately as you can.</br> When you have finished press the Finished button at the bottom of the screen.', 'When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.', 'Press next to begin.'];


var InstructionsSampleB = ['For this task you will see numbers and letters in circles.</br> Please draw a line with the mouse or your finger (on a touch screen) from one number/letter to the next, in order.</br> Start at 1, then go to A, then go to 2, then B, and so on.</br> Please try not to lift the pen as you move from one number to the next. Work as quickly and accurately as you can.<br> When you have finished press the Finished button at the bottom of the screen.', 'When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.', 'First, you will try a practice test. Press next to practice'];

var InstructionsB = ['Now you will perform the actual test.</br> Remember, start at 1, then go to A, then go to 2, then B, and so on.</br> Please try not to lift the pen as you move from one number to the next. Work as quickly and accurately as you can.</br> When you have finished press the Finished button at the bottom of the screen.', 'When your line enters a correct circle it will change color, indicating that this is the next correct circle in the sequence.</br> If the circle does not change color, you have made a mistake and need to draw your line to a different circle.', 'Press next to begin.'];

