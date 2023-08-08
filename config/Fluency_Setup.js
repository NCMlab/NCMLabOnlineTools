Fluency_Animals = {
	Category: 'Animals',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowWelcome: false,
	ShowThankYou: false,
}

Fluency_FruitsVegetable = {
	Category: 'FruitsVegetables',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowWelcome: false,
	ShowThankYou: false
}

Fluency_F = {
	Category: 'LetterF',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowWelcome: false,
	ShowThankYou: false
}

Fluency_TEST = {
	Category: 'LetterF',
	TimeLimit: 10, // seconds
	RecallType: 'Spoken',
	ShowWelcome: false,
	ShowThankYou: true,
	AskForNotes: true,
}


add('Fluency_Animals', function(){ Fluency_parameters = Fluency_Animals});
add('Fluency_FruitsVegetable', function(){ Fluency_parameters = Fluency_FruitsVegetable});
add('Fluency_F', function(){ Fluency_parameters = Fluency_F});
add('Fluency_TEST', function(){ Fluency_parameters = Fluency_TEST});
