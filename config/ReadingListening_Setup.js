// https://www.cs.columbia.edu/~hgs/audio/harvard.html
// "IEEE Recommended Practice for Speech Quality Measurements."


var ReadingListeningList01 = {} 
ReadingListeningList01.ShowWelcome = false,
ReadingListeningList01.WelcomeSpoken = false,
ReadingListeningList01.ShowInstructions = true,
ReadingListeningList01.InstructionsSpoken = false,
ReadingListeningList01.ShowThankYou = false,
ReadingListeningList01.AskForNotes = false,
ReadingListeningList01.RecordAUDIO = true,
ReadingListeningList01.ScoreNeeded = 0.7,
ReadingListeningList01.SentencesToRepeat = 5.

add('ReadingListeningList01', function(){ parameters = ReadingListeningList01});
// ===================================================================================
