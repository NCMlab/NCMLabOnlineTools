SerialSubtract_FaCE = {
	StartValue: 101,
	StepValue: 7,
    StopValue: 67,
	ShowWelcome: false,
	ShowThankYou: false,
}

SerialSubtract_Default = {
	StartValue: 100,
	StepValue: 7,
    StopValue: 65,
	ShowWelcome: false,
	ShowThankYou: false,
}


add('SerialSubtract_FaCE', function(){ SerialSubtract_parameters = SerialSubtract_FaCE});
add('SerialSubtract_Default', function(){ SerialSubtract_parameters = SerialSubtract_Default});
