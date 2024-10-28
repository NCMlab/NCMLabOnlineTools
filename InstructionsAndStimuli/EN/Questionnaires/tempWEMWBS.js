
var title = "The Warwick – Edinburgh Mental Well-being Scale (WEMWBS)"
var shortTitle = 'WEMWBS'
var scale01FORWARD = [
  {value:1, text: "None of the time"},
  {value:2, text: "Rarely"},
  {value:3, text: "Some of the time"},
  {value:4, text: "Often"},
  {value:5, text: "All of the time"}
]

var instructions = 'Below are some statements about feelings and thoughts. Please tick the box that best describes your experience of each over the last 2 weeks'

var EN_pages = [
              [
                {
                  type: 'likert',
                  prompt: "I’ve been feeling optimistic about the future:",
                  name: 'WEMWBS01',
                  likert_scale_values: scale01FORWARD,
                  required: false,
                },
                {
                  type: 'likert',
                  prompt: "I’ve been feeling useful:",
                  name: 'WEMWBS02',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I’ve been feeling relaxed:",
                  name: 'WEMWBS03',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
               
              ]
]

var EN_tempWEMWBS = {}
EN_tempWEMWBS.title = title
EN_tempWEMWBS.shortTitle = shortTitle
EN_tempWEMWBS.description = 'Below are some statements about feelings and thoughts. Please tick the box that best describes your experience of each over the last 2 weeks'
EN_tempWEMWBS.pages = EN_pages
EN_tempWEMWBS.QuestionnaireType = 'likert'
