var title = "The Cannabis Use Disorder Identification Test - Revised (CUDIT-R) "

var scale01 = [
    "Never",
    "Monthly or less",
    "2-4 times a month",
    "2-3 times a week",
    "4 or more times a week"
    ]

var scale02 = [
    "Less than 1",
    "1 or 2",
    "3 or 4",
    "5 or 6",
    "7 or more"
    ]

var scale03 = [
    "Never",
    "Less than monthly",
    "Monthly",
    "Weekly",
    "Daily or almost daily"]

var scale04 = [
    "Never",
    "Yes, but not in the past 6 months",
    "Yes, during the past 6 months"]

var ReverseScoreDirection = [false]
// The last question has three positions which are scored as 0,2,4
var QuestionScoreWeights = [1,1,1,1,1,1,1,2]

var items = [
    {prompt: "How often do you use cannabis? ", labels: scale01},
    {prompt: "How many hours were you “stoned” on a typical day when you had been using cannabis?", labels: scale02},
    {prompt: "How often during the past 6 months did you find that you were not able to stop using cannabis once you had started?",labels: scale03},
    {prompt: "How often during the past 6 months did you fail to do what was normally expected from you because of using cannabis?",labels: scale03},
    {prompt: "How often in the past 6 months have you devoted a great deal of your time to getting, using, or recovering from cannabis? ",labels: scale03},
    {prompt: "How often in the past 6 months have you had a problem with your memory or concentration after using cannabis?",labels: scale03},
    {prompt: "How often do you use cannabis in situations that could be physically hazardous, such as driving, operating machinery, or caring for children:",labels: scale03},
    {prompt: "Have you ever thought about cutting down, or stopping, your use of cannabis?",labels: scale04},
  ]

  var instructions = 'Please answer the following questions about your cannabis use. Circle the response that is most correct for you in relation to your cannabis use over the past six months'
