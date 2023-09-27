// https://www.cs.columbia.edu/~hgs/audio/harvard.html
// "IEEE Recommended Practice for Speech Quality Measurements."
var List01 = []
List01.push({'stim':"Rice is often served in round bowls."})
List01.push({'stim':"The birch canoe slid on the smooth planks."})
List01.push({'stim':"Glue the sheet to the dark blue background."})
List01.push({'stim':"It's easy to tell the depth of a well."})
List01.push({'stim':"These days a chicken leg is a rare dish."})
List01.push({'stim':"The juice of lemons makes fine punch."})
List01.push({'stim':"The box was thrown beside the parked truck."})
List01.push({'stim':"The hogs were fed chopped corn and garbage."})
List01.push({'stim':"4 hours of steady work faced us."})
List01.push({'stim':"A large size in stockings is hard to sell."})
List01.push({'stim':"The boy was there when the sun rose."})
List01.push({'stim':"A rod is used to catch pink salmon."})
List01.push({'stim':"The source of the huge river is the clear spring."})
List01.push({'stim':"Kick the ball straight and follow through."})
List01.push({'stim':"Help the woman get back to her feet."})
List01.push({'stim':"A pot of tea helps to pass the evening."})
List01.push({'stim':"Smoky fires lack flame and heat."})
List01.push({'stim':"The soft cushion broke the man's fall."})
List01.push({'stim':"The salt breeze came across from the sea."})
List01.push({'stim':"The girl at the booth sold fifty bonds."})

var ReadingListeningList01 = {
	Input: List01,
	ShowWelcome: true,
	ShowInstructions: true,
	ShowThankYou: true,
	AskForNotes: false,
	RecordAUDIO: true,
	ScoreNeeded: 0.8,
	SentencesToRepeat: 5.
}


add('ReadingListeningList01', function(){ ReadingListening_parameters = ReadingListeningList01});