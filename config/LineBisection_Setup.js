var LineWidth = 5;
var LineColor = 'black'
var pen_width = 2;

var Lines_test = [
    {LeftX:0.3, LeftY:0.1, RightX:0.9, RightY:0.1},
    {LeftX:0.15, LeftY:0.2, RightX:0.8, RightY:0.2},
    {LeftX:0.05, LeftY:0.3, RightX:0.55, RightY:0.3},
    {LeftX:0.1, LeftY:0.4, RightX:0.9, RightY:0.4},
    {LeftX:0.12, LeftY:0.5, RightX:0.85, RightY:0.5},
    {LeftX:0.05, LeftY:0.6, RightX:0.4, RightY:0.6},
    {LeftX:0.2, LeftY:0.7, RightX:0.7, RightY:0.7},
    {LeftX:0.5, LeftY:0.8, RightX:0.95, RightY:0.8},
    {LeftX:0.3, LeftY:0.9, RightX:0.7, RightY:0.9},    
]
var Lines_001 = [
    {LeftX:0.27, LeftY:0.06, RightX:0.97, RightY:0.06},
    {LeftX:0.11, LeftY:0.11, RightX:0.89, RightY:0.11},
    {LeftX:0.03, LeftY:0.17, RightX:0.59, RightY:0.17},
    {LeftX:0.06, LeftY:0.22, RightX:0.97, RightY:0.22},
    {LeftX:0.08, LeftY:0.28, RightX:0.92, RightY:0.28},
    {LeftX:0.03, LeftY:0.33, RightX:0.38, RightY:0.33},
    {LeftX:0.19, LeftY:0.39, RightX:0.81, RightY:0.39},
    {LeftX:0.48, LeftY:0.44, RightX:0.97, RightY:0.44},
    {LeftX:0.29, LeftY:0.5, RightX:0.71, RightY:0.5},
    {LeftX:0.03, LeftY:0.56, RightX:0.52, RightY:0.56},
    {LeftX:0.19, LeftY:0.61, RightX:0.82, RightY:0.61},
    {LeftX:0.62, LeftY:0.67, RightX:0.97, RightY:0.67},
    {LeftX:0.08, LeftY:0.72, RightX:0.92, RightY:0.72},
    {LeftX:0.03, LeftY:0.78, RightX:0.94, RightY:0.78},
    {LeftX:0.41, LeftY:0.83, RightX:0.97, RightY:0.83},
    {LeftX:0.11, LeftY:0.89, RightX:0.88, RightY:0.89},
    {LeftX:0.03, LeftY:0.94, RightX:0.73, RightY:0.94},
]

var LocationsAsProportions = true;

// ideal canvas size
// canvas width
var SuggestedWidth = 610;
// canvas height
var SuggestedHeight = 348;

var LineBisection_001 = {
    Lines: Lines_001,
    SuggestedWidth: 1000,
    SuggestedHeight: 1000,
    ShowTimer: false,
    Duration: 1000*60*3, // milliseconds,
    ShowWelcome: true,
	ShowThankYou: true,
    ShowInstructions: false, 
    stroke_width: 10,
}

add('LineBisection_001', function(){ LineBisection_parameters = LineBisection_001});
