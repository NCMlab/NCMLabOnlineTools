var LineWidth = 5;
var LineColor = 'black'
var pen_width = 2;

var Lines_001 = [
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
var Duration_001 = 1000*60*1 // milliseconds
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
    Duration: Duration_001,
    Instructions: Instructions,
    ShowWelcome: false,
	ShowThankYou: false,
    stroke_width: 10,
}

add('LineBisection_001', function(){ LineBisection_parameters = LineBisection_001});
