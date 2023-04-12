Fluency_Animals = {
	Category: '<b>Animals</b>',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowWelcome: false,
	ShowThankYou: false,
}

Fluency_FruitsVegetable = {
	Category: '<b>fruits and vegetables</b>',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowWelcome: false,
	ShowThankYou: false
}

Fluency_F = {
	Category: '<b>words that start with F</b>',
	TimeLimit: 60, // seconds
	RecallType: 'Manual',
	ShowWelcome: false,
	ShowThankYou: false
}


add('Fluency_Animals', function(){ Fluency_parameters = Fluency_Animals});
add('Fluency_FruitsVegetable', function(){ Fluency_parameters = Fluency_FruitsVegetable});
add('Fluency_F', function(){ Fluency_parameters = Fluency_F});
