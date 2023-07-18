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
    ShowWelcome: true,
	ShowThankYou: true,
    AskForNotes: true,
}


add('SerialSubtract_FaCE', function(){ SerialSubtract_parameters = SerialSubtract_FaCE});
add('SerialSubtract_FaCE_02', function(){ SerialSubtract_parameters = SerialSubtract_FaCE});
add('SerialSubtract_Default', function(){ SerialSubtract_parameters = SerialSubtract_Default});
