var title = "Apathy Evaluation Scale (AES)"


var scale01 = [
    "Not at all",
    "Slightly",
    "Somewhat",
    "A lot"
]

var ReverseScoreDirection = [false, false, false, false, false, true, false, false, false, true, true, false,false, false, false, false, false, false]

var items = [
    {prompt: "I am interested in things.", labels: scale01},
    {prompt: "I get things done during the day.", labels: scale01},
    {prompt: "Getting things started on my own is important to me.", labels: scale01},
    {prompt: "I am interested in having new experiences.", labels: scale01},
    {prompt: "I am interested in learning new things.", labels: scale01},
    {prompt: "I put little effort into anything.", labels: scale01},
    {prompt: "I approach life with intensity.", labels: scale01},
    {prompt: "Seeing a job through to the end is important to me.", labels: scale01},
    {prompt: "I spend time doing things that interest me.", labels: scale01},
    {prompt: "Someone has to tell me what to do each day.", labels: scale01},
    {prompt: "I am less concerned about my problems than I should be.", labels: scale01},
    {prompt: "I have friends.", labels: scale01},
    {prompt: "Getting together with friends is important to me.", labels: scale01},
    {prompt: "When something good happens, I get excited.", labels: scale01},
    {prompt: "I have an accurate understanding of my problems.", labels: scale01},
    {prompt: "Getting things done during the day is important to me.", labels: scale01},
    {prompt: "I have initiative.", labels: scale01},
    {prompt: "I have motivation.", labels: scale01}
  ]
  
var instructions = 'For each statement, choose the answer that best describes the your thoughts, feelings, and activity in the past 4 weeks.'

var references = "Marin, R. S., Biedrzycki, R. C., & Firinciogullari, S. (1991). Reliability and validity of the Apathy Evaluation Scale. Psychiatry research, 38(2), 143-162."

var notes = "The Apathy Evaluation Scale (AES) (46): Apathy was quantified using the AES, consisting of 18 items relating to apathy, each scored on a 4-point Likert-type scale. The score range for the complete AES (total AES score) is 18 to 72, with a lower score indicating greater apathy."