var title = "Stait-Trait Anxiety Index - State"

var scale01FORWARD = [
  {value:0, text: "Almost never"},
  {value:1, text:"Sometimes"},
  {value:2, text:"Often"},
  {value:3, text:"Almost always"}
]
var scale01BACKWARD = [
  {value:3, text: "Almost never"},
  {value:2, text:"Sometimes"},
  {value:1, text:"Often"},
  {value:0, text:"Almost always"}
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
                  alert: "Almost always",
                },
                {
                  type: 'likert',
                  prompt: "I feel secure.",
                  name: 'stais02',
                  likert_scale_values: scale01FORWARD,
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
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel upset.",
                  name: 'stai06',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: 'I am "calm, cool, and collected".',
                  name: 'stai07',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel that difficulties are piling up so that I cannot overcome them.",
                  name: 'stai08',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I worry too much over something that doesn't really matter.",
                  name: 'stai09',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am happy.",
                  name: 'stai10',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I have disturbing thoughts.",
                  name: 'stai11',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I lack self-confidence.",
                  name: 'stai12',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel secure.",
                  name: 'stai13',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I make decisions easily.",
                  name: 'stai14',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel inadequate.",
                  name: 'stai15',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am content.",
                  name: 'stai16',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Some unimportant thought runs through my mind and bothers me.",
                  name: 'stai17',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I take disappointments so keenly that I can't put them out of my mind.",
                  name: 'stai18',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am a steady person.",
                  name: 'stai19',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I get in a state of tension or turmoil as I think over my recent concerns and interest.",
                  name: 'stai20',
                  likert_scale_values: scale01FORWARD,
                  required: false
                }
              ]
]

var EN_stai_state = {}
EN_stai_state.title = title
EN_stai_state.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then circle the response option to the right to indicate how you feel right now, that is, at this moment. Do not spend too much time on any one statement, but give the answer which seems to describe your present feelings best."
EN_stai_state.pages = pages
EN_stai_state.QuestionnaireType = 'likert'