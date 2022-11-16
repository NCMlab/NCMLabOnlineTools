var title = "Positive and Negative Affect Schedule (PANAS)"

var scale01 = [
    "Very slightly or not at all",
    "A little",
    "Moderately",
    "Quite a bit",
    "Extremely"
  ]
  
// All questions use the same direction so enter that single flag as an array of size 1
var ReverseScoreDirection = [false]

var items = [
    {prompt: "Interested", labels: scale01},
    {prompt: "Distressed", labels: scale01},
    {prompt: "Excited", labels: scale01},
    {prompt: "Upset", labels: scale01},
    {prompt: "Strong", labels: scale01},
    {prompt: "Guilty", labels: scale01},
    {prompt: "Scared", labels: scale01},
    {prompt: "Hostile", labels: scale01},
    {prompt: "Enthusiastic", labels: scale01},
    {prompt: "Proud", labels: scale01},
    {prompt: "Irritable", labels: scale01},
    {prompt: "Alert", labels: scale01},
    {prompt: "Ashamed", labels: scale01},
    {prompt: "Inspired", labels: scale01},
    {prompt: "Nervous", labels: scale01},
    {prompt: "Determined", labels: scale01},
    {prompt: "Attentive", labels: scale01},
    {prompt: "Jittery", labels: scale01},
    {prompt: "Active", labels: scale01},
    {prompt: "Afraid", labels: scale01},
  ]

var instructions = 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.'

var references = "Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of brief measures of positive and negative affect: The PANAS scales. *Journal of Personality and Social Psychology, 54*(6), 1063–1070."

