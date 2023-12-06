var title = "Stait-Trait Anxiety Index - Trait"

var scale01FORWARD = [
    {value:1, text: "Almost never"},
    {value:2, text:"Sometimes"},
    {value:3, text:"Often"},
    {value:4, text:"Almost always"}
  ]
  var scale01BACKWARD = [
    {value:4, text: "Almost never"},
    {value:3, text:"Sometimes"},
    {value:2, text:"Often"},
    {value:1, text:"Almost always"}
  ]

var pages = [
              [
                {
                  type: 'likert',
                  prompt: "I feel fine.",
                  name: 'stait01',
                  likert_scale_values: scale01BACKWARD,
                  required: false,
                  alert: "Almost never"
                },
                {
                  type: 'likert',
                  prompt: "I tire quickly.",
                  name: 'stait02',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel like crying.",
                  name: 'stait03',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I wish I could be as happy as others seem to be.",
                  name: 'stait04',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am losing opportunities because I cannot make decisions fast.",
                  name: 'stait05',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel rested.",
                  name: 'stait06',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: 'I am calm.',
                  name: 'stait07',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel that difficulties are piling up in such a way that cannot overcome them.",
                  name: 'stait08',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I worry too much about things that do not really matter.",
                  name: 'stait09',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am happy.",
                  name: 'stait10',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am inclined to take things hard.",
                  name: 'stait11',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I lack self-confidence.",
                  name: 'stait12',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel secure.",
                  name: 'stait13',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I try to avoid facing a crisis or difficulty.",
                  name: 'stait14',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I feel blue.",
                  name: 'stait15',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am content.",
                  name: 'stait16',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Some unimportant thoughts run through my mind and bother me.",
                  name: 'stait17',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I take disappointments so keenly that I cannot get them out of my mind.",
                  name: 'stait18',
                  likert_scale_values: scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I am a steady person.",
                  name: 'stait19',
                  likert_scale_values: scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "I become tense and upset when I think about my current concerns.",
                  name: 'stait20',
                  likert_scale_values: scale01FORWARD,
                  required: false
                }
              ]
]

var EN_stai_trait = {}
EN_stai_trait.title = title
EN_stai_trait.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then circle the appropriate number to the right of the statement to indicate how you generally feel. There are no right or wrong answers. Do not spend too much time on a single statement, but give the answer that comes closest to how you generally feel."
EN_stai_trait.pages = pages
// This is used for scoring
EN_stai_trait.QuestionnaireType = 'likert'
