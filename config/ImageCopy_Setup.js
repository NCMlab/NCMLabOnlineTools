

var ImageCopy_Default = {
	canvas_width:400,
	canvas_height:400,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: true,
	Image: 'NeckerCube.png',
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
var ImageCopy_FaCE = {
	canvas_width:"400vw",
	canvas_height:"400vh",
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true,
	AskForNotes: false,
	Image: 'NeckerCube.png',
	RecordGIF: true,
}



add('ImageCopy_Default', function(){ ImageCopy_parameters = ImageCopy_Default});
add('ImageCopy_CBprotocol', function(){ ImageCopy_parameters = ImageCopy_CBprotocol});
add('ImageCopy_FaCE', function(){ ImageCopy_parameters = ImageCopy_FaCE});

