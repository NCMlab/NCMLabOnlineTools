var IntakeForm = {
	ShowWelcome: false,
	WelcomeSpoken: false,
	WelcomeAudio: '',
	ShowThankYou: false,
	ShowInstructions: true, 
	InstructionsSpoken: false,
	AskForNotes: false,
	RecordAUDIO: false
}

IntakeForm.Instructions01Audio = []
IntakeForm.Instructions01Audio.push('assets/SoundFiles/Instructions/IntakeForm_InstructionsPage01.wav')
IntakeForm.Instructions01Audio.push('assets/SoundFiles/Instructions/IntakeForm_InstructionsPage02.wav')
IntakeForm.Instructions01Time = []
IntakeForm.Instructions01Time.push(24000)
IntakeForm.Instructions01Time.push(15000)
add('EN_IntakeForm', function(){ parameters = IntakeForm })


IntakeForm.Instructions01Audio = []
IntakeForm.Instructions01Audio.push('assets/SoundFiles/Instructions/IntakeForm_InstructionsPage01.wav')
IntakeForm.Instructions01Audio.push('assets/SoundFiles/Instructions/IntakeForm_InstructionsPage02.wav')
IntakeForm.Instructions01Time = []
IntakeForm.Instructions01Time.push(24000)
IntakeForm.Instructions01Time.push(15000)
add('FR_IntakeForm', function(){ parameters = IntakeForm })