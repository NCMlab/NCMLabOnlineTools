var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS'
var scale01 = [
    "Very slightly or not at all",
    "A little",
    "Moderately",
    "Quite a bit",
    "Extremely"
  ]
  
// All questions use the same direction so enter that single flag as an array of size 1
var ReverseScoreDirection = [false]
var EN_pages = [
  [
    {
      type: 'likert-table',
      prompt: ' ',
      statements: [
        {prompt: "Interested",name: 'panas01'},
        {prompt: "Distressed",},
        {prompt: "Excited", },
        {prompt: "Upset", },
        {prompt: "Strong", },
        {prompt: "Guilty", },
        {prompt: "Scared", },
        {prompt: "Hostile",},
        {prompt: "Enthusiastic", },
        {prompt: "Proud", },
        {prompt: "Irritable",},
        {prompt: "Alert", },
        {prompt: "Ashamed",},
        {prompt: "Inspired",},
        {prompt: "Nervous", },
        {prompt: "Determined",},
        {prompt: "Attentive", },
        {prompt: "Jittery", },
        {prompt: "Active", },
        {prompt: "Afraid", },
      ],
      options: scale01,
    }
  ]
]

var instructions = 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.'

var references = "Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of brief measures of positive and negative affect: The PANAS scales. *Journal of Personality and Social Psychology, 54*(6), 1063–1070."

var notes = ""

var EN_panas = {}
EN_panas.title = title
EN_panas.shortTitle = shortTitle
EN_panas.pages = EN_pages
EN_panas.description = instructions
//EN_panas.QuestionnaireType
EN_panas.references = references
EN_panas.notes = notes


