var title = "Positive and Negative Affect Schedule (PANAS)"
var shortTitle = 'PANAS'
var scale01 = [
    {value: 0, text: "Very slightly or not at all"},
    {value: 1, text: "A little"},
    {value: 2, text: "Moderately"},
    {value: 3, text: "Quite a bit"},
    {value: 4, text: "Extremely"}
  ]
var instructions = 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.'  
// All questions use the same direction so enter that single flag as an array of size 1
var ReverseScoreDirection = [false]


var EN_pages = [
  [
    {
      type: 'likert',
      prompt: "Excited",
      name: 'panas01',
      likert_scale_values: scale01,
      required: true,
    },
    {
      type: 'likert',
      prompt: "Upset",
      name: 'panas02',
      likert_scale_values: scale01,
      required: true
    },
    {
      type: 'likert',
      prompt: "Strong",
      name: 'panas03',
      likert_scale_values: scale01,
      required: true
    },
    {
      type: 'likert',
      prompt: "Guilty",
      name: 'panas04',
      likert_scale_values: scale01,
      required: true
    },
    {
      type: 'likert',
      prompt: "Scared",
      name: 'panas05',
      likert_scale_values: scale01,
      required: true
    },
   
  ]
]


var references = "Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of brief measures of positive and negative affect: The PANAS scales. *Journal of Personality and Social Psychology, 54*(6), 1063–1070."

var notes = ""

var EN_panas = {}
EN_panas.title = title
EN_panas.shortTitle = shortTitle
EN_panas.pages = EN_pages
EN_panas.description = instructions
EN_panas.QuestionnaireType = 'likert'
EN_panas.references = references
EN_panas.notes = notes



{/* 
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
        {prompt: "Afraid", },*/}