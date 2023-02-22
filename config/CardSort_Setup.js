// How many cards before the rules change
var PracticeRuleChangeCount = 4
var RuleChangeCount = 10

// What is the order of rules?
var PracticeRuleList = [2,0,1] // Number, Color, Shape

// Even though the list of rules is quite long, only 64 trials are performed. This is 
// based off of the variable FileNames.
var RuleList = [0,1,2,0,1,2,0,1,2] // Number, Color, Shape
// Card sizes
var CardHeight = '150vh' // this is in elem
var StimCardHeight = '150' // this is in pixels
var FeedbackSize = 5 // this isn in elem