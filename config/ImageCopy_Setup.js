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

var ImageCopy_Default = {
	canvas_width:400,
	canvas_height:400,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'NeckerCube.png',
	RecordGIF: true,
}

var ImageCopy_Smile = {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'SmileFace.png',
	RecordGIF: true,
}

var ImageCopy_TwoCircles = {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'TwoCircles.png',
	RecordGIF: true,
}


var ImageCopy_CBprotocol = {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: true,
	ShowThankYou: false,
	ShowInstructions: false,
	AskForNotes: false,
	Image: 'NeckerCube.png',
	RecordGIF: true,
}

var ImageCopy_FaCE_Training = {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'TwoCircles.png',
	RecordGIF: true,
}

var ImageCopy_FaCE_VerA= {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'NeckerCube.png',
	RecordGIF: true,
}

var ImageCopy_FaCE_VerB= {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'InverseNeckerCube.png',
	RecordGIF: true,
}


add('ImageCopy_Default', function(){ parameters = ImageCopy_Default});
add('ImageCopy_Smile', function(){ parameters = ImageCopy_Smile});
add('ImageCopy_TwoCircles', function(){ parameters = ImageCopy_TwoCircles});
add('ImageCopy_CBprotocol', function(){ parameters = ImageCopy_CBprotocol});
add('ImageCopy_FaCE', function(){ parameters = ImageCopy_FaCE});
add('ImageCopy_FaCE_Training', function(){ parameters = ImageCopy_FaCE_Training});
add('ImageCopy_FaCE_VerA', function(){ parameters = ImageCopy_FaCE_VerA});
add('ImageCopy_FaCE_VerB', function(){ parameters = ImageCopy_FaCE_VerB});

