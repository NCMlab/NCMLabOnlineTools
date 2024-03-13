SerialSubtract_FaCE = {
	StartValue: 101,
	StepValue: 7,
    StopValue: 67,
    ShowInstructions: false,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    ResponseType: 'Spoken',
    TimeLimit: 120, // seconds
    DelayBeforeShowingDoneButton: 10,
    RecordAUDIO: true,
}

SerialSubtract_FaCE_Training = {
	StartValue: 12,
	StepValue: 2,
    StopValue: 4,
    ShowInstructions: false,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    ResponseType: 'Spoken',
    TimeLimit: 120, // seconds
    DelayBeforeShowingDoneButton: 0,
    RecordAUDIO: true,
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
	ShowThankYou: false,
    AskForNotes: false,
    ResponseType: 'Spoken',
    TimeLimit: 120, // seconds
    DelayBeforeShowingDoneButton: 10,
    RecordAUDIO: true,
}


add('SerialSubtract_FaCE', function(){ parameters = SerialSubtract_FaCE});
add('SerialSubtract_FaCE_02', function(){ parameters = SerialSubtract_FaCE});
add('SerialSubtract_Default', function(){ parameters = SerialSubtract_Default});
add('SerialSubtract_FaCE_Training', function(){ parameters = SerialSubtract_FaCE_Training});

