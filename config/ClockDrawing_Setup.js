
var ClockDrawing_Default = {
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
	RecordGIF: true,
	AskForNotes: false,
}

var ClockDrawing_001 = {
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true, 
	RecordGIF: true,
	AskForNotes: false,
}
var ClockDrawing_CBprotocol = {
	ShowWelcome: true,
	ShowInstructions: false, 
	ShowThankYou: false,
	ShowInstructions: false, 
	RecordGIF: true,
	AskForNotes: true,
}
add('ClockDrawing_001', function(){ parameters = ClockDrawing_001});
add('ClockDrawing_CBprotocol', function(){ parameters = ClockDrawing_CBprotocol});