

var PatternComparison_Default = {
	canvas_width:400,
	canvas_height:400,
	ShowWelcome: true,
	ShowThankYou: true,
	ShowInstructions: true,
	AskForNotes: true, 
	Image: 'NeckerCube.png',
	RecordGIF: true,
}

PatternComparisonSetup = [
	['AFig8a.bmp','AFig8b.bmp','right','1'],
	['AFig7a.bmp','AFig7b.bmp','right','1'],
	['AFig6a.bmp','AFig6b.bmp','right','1'],
	['AFig5a.bmp','AFig5b.bmp','right','1'],
]

add('PatternComparison_Default', function(){ parameters = PatternComparison_Default});

