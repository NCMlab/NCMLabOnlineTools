var title = "Stait-Trait Anxiety Index - State"

var scale01FORWARD = [
  {value:1, text: "Not at all"},
  {value:2, text:"Somewhat"},
  {value:3, text:"Moderately"},
  {value:4, text:"Very Much"}
]
var scale01BACKWARD = [
  {value:4, text: "Not at all"},
  {value:3, text:"Somewhat"},
  {value:2, text:"Moderately"},
  {value:1, text:"Very Much"}
]

var instructions = 'Read each statement and then choose the answer to indicate how you generally feel.'

var pages = [
              [
                {
                  type: 'likert',
                  prompt: "I feel calm.",
                  name: 'stais01',
                  likert_scale_values: scale01BACKWARD,
                  required: false,
                },
                {
                  type: 'likert',
                  prompt: "I feel secure.",
                  name: 'stais02',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am tense.",
                  name: 'stais03',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am regretful.",
                  name: 'stai04',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel at ease.",
                  name: 'stai05',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel upset.",
                  name: 'stai06',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am currently worried about possible misfortunes.",
                  name: 'stai07',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel rested.",
                  name: 'stai08',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel anxious.",
                  name: 'stai09',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel comfortable.",
                  name: 'stai10',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel self-confident.",
                  name: 'stai11',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel nervous.",
                  name: 'stai12',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am jittery.",
                  name: 'stai13',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel 'high-strung.'",
                  name: 'stai14',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am relaxed.",
                  name: 'stai15',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel content.",
                  name: 'stai16',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am worried.",
                  name: 'stai17',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel overexcited and rattled.",
                  name: 'stai18',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel joyful.",
                  name: 'stai19',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel fine.",
                  name: 'stai20',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                }
              ]
]

var EN_stai_state = {}
EN_stai_state.title = title
EN_stai_state.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then circle the response option to the right to indicate how you feel right now, that is, at this moment. Do not spend too much time on any one statement, but give the answer which seems to describe your present feelings best."
EN_stai_state.pages = pages
EN_stai_state.QuestionnaireType = 'likert'