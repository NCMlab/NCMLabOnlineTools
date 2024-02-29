Fluency_Animals = {
	Category: 'Animals',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: false,
}

Fluency_FruitsVegetable = {
	Category: 'FruitsVegetables',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: false,
}

Fluency_F = {
	Category: 'LetterF',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: false,
}

Fluency_TEST = {
	Category: 'FruitsVegetables',
	TimeLimit: 60, // seconds
	RecallType: 'Spoken',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: true,
}


add('Fluency_Animals', function(){ parameters = Fluency_Animals});
add('Fluency_FruitsVegetable', function(){ parameters = Fluency_FruitsVegetable});
add('Fluency_F', function(){ parameters = Fluency_F});
add('Fluency_TEST', function(){ parameters = Fluency_TEST});
