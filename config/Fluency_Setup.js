Fluency_Animals = {
	Category: 'Animals',
	TimeLimit: 60, // seconds
	ResponseType: 'Manual',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: false,
}

Fluency_FruitsVegetable = {
	Category: 'FruitsVegetables',
	TimeLimit: 60, // seconds
	ResponseType: 'Spoken',
	ShowInstructions: true,
    ShowWelcome: true,
	ShowThankYou: true,
    AskForNotes: false,
    RecordAUDIO: true,
	DelayBeforeShowingDoneButton: 10,
}

Fluency_F = {
	Category: 'LetterF',
	TimeLimit: 60, // seconds
	ResponseType: 'Manual',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: false,
}

Fluency_TEST = {
	Category: 'FruitsVegetables',
	TimeLimit: 60, // seconds
	ResponseType: 'Spoken',
	ShowInstructions: true,
    ShowWelcome: true,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: true,
}

Fluency_FaCE_Training = {
	Category: 'DinnerTable',
	TimeLimit: 5, // seconds
	DelayBeforeShowingDoneButton: 5,
	ResponseType: 'Manual',
	ShowInstructions: true,
    ShowWelcome: true,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: true,
	DelayBeforeShowingDoneButton: 0,
}


add('Fluency_Animals', function(){ parameters = Fluency_Animals});
add('Fluency_FruitsVegetable', function(){ parameters = Fluency_FruitsVegetable});
add('Fluency_F', function(){ parameters = Fluency_F});
add('Fluency_TEST', function(){ parameters = Fluency_TEST});
add('Fluency_FaCE_Training', function(){ parameters = Fluency_FaCE_Training});
