var title = "Stait-Trait Anxiety Index"

var scale01 = [
    "Almost never",
    "Sometimes",
    "Often",
    "Almost always"
  ]

// var ReverseScoreDirection = [false, true, false, true, true, false, false, false, false, false, true, true, false, false, true, false, true, true, false, true]
var ReverseScoreDirection = [true, false, true, false, false, true, true, false, false, true, false, false, true, true, false, true, false, false, true, false]

var items = [
    {prompt: "I feel pleasant.", labels: scale01},
    {prompt: "I feel nervous and restless.", labels: scale01},
    {prompt: "I feel satisfied with myself.",labels: scale01},
    {prompt: "I wish I could be as happy as others seem to be.",labels: scale01},
    {prompt: "I feel like a failure.",labels: scale01},
    {prompt: "I feel rested.",labels: scale01},
    {prompt: 'I am "calm, cool, and collected".',labels: scale01},
    {prompt: "I feel that difficulties are piling up so that I cannot overcome them.",labels: scale01},
    {prompt: "I worry too much over something that doesn't really matter.",labels: scale01},
    {prompt: "I am happy.",labels: scale01},
    {prompt: "I have disturbing thoughts.",labels: scale01},
    {prompt: "I lack self-confidence.",labels: scale01},
    {prompt: "I feel secure.",labels: scale01},
    {prompt: "I make decisions easily.",labels: scale01},
    {prompt: "I feel inadequate.",labels: scale01},
    {prompt: "I am content.",labels: scale01},
    {prompt: "Some unimportant thought runs through my mind and bothers me.",labels: scale01},
    {prompt: "I take disappointments so keenly that I can't put them out of my mind.",labels: scale01},
    {prompt: "I am a steady person.",labels: scale01},
    {prompt: "I get in a state of tension or turmoil as I think over my recent concerns and interest.", labels: scale01},
  ]

  var instructions = 'Read each statement and then choose the answer to indicate how you generally feel.'
