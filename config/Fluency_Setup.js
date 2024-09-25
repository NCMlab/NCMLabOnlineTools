Fluency_Default = {
	Category: 'Animals',
	TimeLimit: 60, // seconds
	ResponseType: 'Spoken',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: true,
}

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

Fluency_FaCE_VerA_spoken = {
	Category: 'FruitsVegetables',
	TimeLimit: 60, // seconds
	ResponseType: 'Spoken',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: true,
}

FaCE_Training_Spoken = {
	Category: 'DinnerTable',
	TimeLimit: 15, // seconds
	DelayBeforeShowingDoneButton: 5,
	ResponseType: 'Spoken',
	ShowInstructions: true,
    ShowWelcome: false,
	ShowThankYou: false,
    AskForNotes: false,
    RecordAUDIO: true,
	DelayBeforeShowingDoneButton: 5,
}

let FaCE_Training_Manual = Object.assign({}, FaCE_Training_Spoken)
	FaCE_Training_Manual.ResponseType = 'Manual'
	FaCE_Training_Manual.RecordAUDIO = false

let FaCE_VerA_Spoken = Object.assign({}, FaCE_Training_Spoken)
	FaCE_VerA_Spoken.Category = 'FruitsVegetables'
	FaCE_VerA_Spoken.TimeLimit = 60
let FaCE_VerA_Manual = Object.assign({}, FaCE_VerA_Spoken)
	FaCE_VerA_Manual.ResponseType = 'Manual'

let FaCE_VerB_Spoken = Object.assign({}, FaCE_VerA_Spoken)
	FaCE_VerB_Spoken.Category = 'Animals'
	
let FaCE_VerB_Manual = Object.assign({}, FaCE_VerB_Spoken)
	FaCE_VerB_Manual.ResponseType = 'Manual'






add('Fluency_Animals', function(){ parameters = Fluency_Animals});
add('Fluency_FruitsVegetable', function(){ parameters = Fluency_FruitsVegetable});
add('Fluency_F', function(){ parameters = Fluency_F});
add('Fluency_TEST', function(){ parameters = Fluency_TEST});
add('FaCE_Training_Spoken', function(){ parameters = FaCE_Training_Spoken});
add('FaCE_Training_Manual', function(){ parameters = FaCE_Training_Manual});
add('FaCE_VerA_Spoken', function(){ parameters = FaCE_VerA_Spoken});
add('FaCE_VerA_Manual', function(){ parameters = FaCE_VerA_Manual});
add('FaCE_VerB_Spoken', function(){ parameters = FaCE_VerB_Spoken});
add('FaCE_VerB_Manual', function(){ parameters = FaCE_VerB_Manual});
