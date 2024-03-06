SerialSubtract_FaCE = {
	StartValue: 101,
	StepValue: 7,
    StopValue: 67,
    ShowInstructions: false,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
}

SerialSubtract_FaCE_02 = {
	StartValue: 103,
	StepValue: 7,
    StopValue: 67,
    ShowInstructions: false,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
}
SerialSubtract_Default = {
	StartValue: 100,
	StepValue: 7,
    StopValue: 65,
    ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    ResponseType: 'Spoken',
    ResponseDuration: 120, // seconds
    RecordAUDIO: true,
}


add('SerialSubtract_FaCE', function(){ parameters = SerialSubtract_FaCE});
add('SerialSubtract_FaCE_02', function(){ parameters = SerialSubtract_FaCE});
add('SerialSubtract_Default', function(){ parameters = SerialSubtract_Default});
