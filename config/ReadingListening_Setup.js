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

var List02 = []
List02.push({'stim':"The boy was there when the sun rose."})
List02.push({'stim':"A rod is used to catch pink salmon."})
List02.push({'stim':"The source of the huge river is the clear spring."})
List02.push({'stim':"Kick the ball straight and follow through."})
List02.push({'stim':"Help the woman get back to her feet."})
List02.push({'stim':"A pot of tea helps to pass the evening."})
List02.push({'stim':"Smoky fires lack flame and heat."})
List02.push({'stim':"The soft cushion broke the man's fall."})
List02.push({'stim':"The salt breeze came across from the sea."})
List02.push({'stim':"The girl at the booth sold fifty bonds."})

var ReadingListeningList01 = {
	Input: List02,
	ShowWelcome: true,
	ShowThankYou: true,
	AskForNotes: true,
	RecordAUDIO: true,
	ScoreNeeded: 0.7,
}


add('ReadingListeningList01', function(){ ReadingListening_parameters = ReadingListeningList01});