var CardSort_001 = {}
// How many cards before the rules change
CardSort_001.PracticeRuleChangeCount = 6
CardSort_001.RuleChangeCount = 10

// What is the order of rules?
CardSort_001.PracticeRuleList = [2,0] // Number, Color, Shape

// Even though the list of rules is quite long, only 64 trials are performed. This is 
// based off of the variable FileNames.
CardSort_001.RuleList = [0,1,2,1,2,0] // Number, Color, Shape
// Card sizes
CardSort_001.CardHeight = '150vh' // this is in elem
CardSort_001.StimCardHeight = '150' // this is in pixels
CardSort_001.FeedbackSize = 4 // this isn in elem
CardSort_001.FeedbackDuration = '750' // millisecond
CardSort_001.ShowWelcome = false,
CardSort_001.WelcomeSpoken = false,
CardSort_001.WelcomeAudio = 'assets/SoundFiles/Instructions/WCST_Welcome.wav',
CardSort_001.ShowThankYou = false,
CardSort_001.ShowInstructions = true, 
CardSort_001.InstructionsSpoken = false
// Overall task instructions
CardSort_001.Instructions01Audio = []
CardSort_001.Instructions01Audio.push('assets/SoundFiles/Instructions/WCST_Instructions01.wav'),
CardSort_001.Instructions01Audio.push('assets/SoundFiles/Instructions/WCST_Instructions02.wav'),
CardSort_001.Instructions01Time = []
CardSort_001.Instructions01Time.push(30000)
CardSort_001.Instructions01Time.push(20000)
// Gte ready for practice
CardSort_001.Instructions02Audio = []
CardSort_001.Instructions02Audio.push('assets/SoundFiles/Instructions/WCST_Practice.wav'),
CardSort_001.Instructions02Time = []
CardSort_001.Instructions02Time.push(5000)
// Get ready for real task
CardSort_001.Instructions03Audio = []
CardSort_001.Instructions03Audio.push('assets/SoundFiles/Instructions/WCST_Test.wav'),
CardSort_001.Instructions03Time = []
CardSort_001.Instructions03Time.push(5000)

add('CardSort_001', function(){ parameters = CardSort_001});