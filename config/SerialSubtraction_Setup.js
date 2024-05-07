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

SerialSubtract_FaCE_Training_Spoken = {
	StartValue: 12,
	StepValue: 2,
    StopValue: 4,
    ShowInstructions: false,
    ShowWelcome: true,
	ShowThankYou: false,
    AskForNotes: false,
    ResponseType: 'Spoken',
    TimeLimit: 30, // seconds
    DelayBeforeShowingDoneButton: 5,
    RecordAUDIO: true,
}
SerialSubtract_FaCE_Training_Manual = {
	StartValue: 12,
	StepValue: 2,
    StopValue: 4,
    ShowInstructions: false,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    ResponseType: 'Manual',
    TimeLimit: 30, // seconds
    DelayBeforeShowingDoneButton: 5,
    RecordAUDIO: false,
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
add('SerialSubtract_FaCE_Training_Spoken', function(){ parameters = SerialSubtract_FaCE_Training_Spoken});
add('SerialSubtract_FaCE_Training_Manual', function(){ parameters = SerialSubtract_FaCE_Training_Manual});

