var CardSort_001 = {}
// How many cards before the rules change
CardSort_001.PracticeRuleChangeCount = 4
CardSort_001.RuleChangeCount = 2

// What is the order of rules?
CardSort_001.PracticeRuleList = [2,0,1] // Number, Color, Shape

// Even though the list of rules is quite long, only 64 trials are performed. This is 
// based off of the variable FileNames.
CardSort_001.RuleList = [0,1,2,1,2,0] // Number, Color, Shape
// Card sizes
CardSort_001.CardHeight = '150vh' // this is in elem
CardSort_001.StimCardHeight = '150' // this is in pixels
CardSort_001.FeedbackSize = 4 // this isn in elem
CardSort_001.FeedbackDuration = '750' // millisecond
CardSort_001.ShowWelcome = true,
CardSort_001.ShowThankYou = true,
CardSort_001.ShowInstructions = true, 

add('CardSort_001', function(){ CardSort_parameters = CardSort_001});