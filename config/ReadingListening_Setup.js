// https://www.cs.columbia.edu/~hgs/audio/harvard.html
// "IEEE Recommended Practice for Speech Quality Measurements."


var ReadingListeningList_Default = {} 
ReadingListeningList01.ShowWelcome = false,
ReadingListeningList01.WelcomeSpoken = false,
ReadingListeningList01.ShowInstructions = true,
ReadingListeningList01.InstructionsSpoken = false,
ReadingListeningList01.ShowThankYou = false,
ReadingListeningList01.AskForNotes = false,
ReadingListeningList01.RecordAUDIO = true,
ReadingListeningList01.ScoreNeeded = 0.7,
ReadingListeningList01.SentencesToRepeat = 3


var ReadingListeningList01 = {} 
ReadingListeningList01.ShowWelcome = false,
ReadingListeningList01.WelcomeSpoken = false,
ReadingListeningList01.ShowInstructions = true,
ReadingListeningList01.InstructionsSpoken = false,
ReadingListeningList01.ShowThankYou = false,
ReadingListeningList01.AskForNotes = false,
ReadingListeningList01.RecordAUDIO = true,
ReadingListeningList01.ScoreNeeded = 0.7,
ReadingListeningList01.SentencesToRepeat = 3

add('ReadingListeningList01', function(){ parameters = ReadingListeningList01});

var ReadingListeningList02 = {} 
ReadingListeningList02.ShowWelcome = true,
ReadingListeningList02.WelcomeSpoken = false,
ReadingListeningList02.ShowInstructions = true,
ReadingListeningList02.InstructionsSpoken = false,
ReadingListeningList02.ShowThankYou = true,
ReadingListeningList02.AskForNotes = false,
ReadingListeningList02.RecordAUDIO = true,
ReadingListeningList02.ScoreNeeded = 0.7,
ReadingListeningList02.SentencesToRepeat = 5

add('ReadingListeningList02', function(){ parameters = ReadingListeningList02});

// ===================================================================================
