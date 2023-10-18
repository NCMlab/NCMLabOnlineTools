var title = "Stait-Trait Anxiety Index - Trait"

var instructions = 'Read each statement and then choose the answer to indicate how you generally feel.'

var scale01FORWARD = [
    "Almost never",
    "Sometimes",
    "Often",
    "Almost always"
  ]
  var scale01BACKWARD = [
    "Almost always",
    "Often",
    "Sometimes",
    "Almost never"
  ]

var pages = [
              [
                {
                  type: 'likert',
                  prompt: "I feel fine.",
                  name: 'stai01',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I tire quickly.",
                  name: 'stai02',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I feel like crying.",
                  name: 'stai03',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I wish I could be as happy as others seem to be.",
                  name: 'stai04',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I feel like a failure.",
                  name: 'stai05',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I feel rested.",
                  name: 'stai06',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: 'I am "calm, cool, and collected".',
                  name: 'stai07',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I feel that difficulties are piling up so that I cannot overcome them.",
                  name: 'stai08',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I worry too much over something that doesn't really matter.",
                  name: 'stai09',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I am happy.",
                  name: 'stai10',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I have disturbing thoughts.",
                  name: 'stai11',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I lack self-confidence.",
                  name: 'stai12',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I feel secure.",
                  name: 'stai13',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I make decisions easily.",
                  name: 'stai14',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I feel inadequate.",
                  name: 'stai15',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I am content.",
                  name: 'stai16',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "Some unimportant thought runs through my mind and bothers me.",
                  name: 'stai17',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I take disappointments so keenly that I can't put them out of my mind.",
                  name: 'stai18',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I am a steady person.",
                  name: 'stai19',
                  likert_scale_values: scale01BACKWARD,
                  required: true
                },
                {
                  type: 'likert',
                  prompt: "I get in a state of tension or turmoil as I think over my recent concerns and interest.",
                  name: 'stai20',
                  likert_scale_values: scale01FORWARD,
                  required: true
                },
              ]
]

var stai_trait = {}
stai_trait.title = title
stai_trait.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then circle the appropriate number to the right of the statement to indicate how you generally feel. There are no right or wrong answers. Do not spend too much time on a single statement, but give the answer that comes closest to how you generally feel."
stai_trait.pages = pages
