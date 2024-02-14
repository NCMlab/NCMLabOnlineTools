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

var EN_pages = [
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
EN_stai_state.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then select the response option below to indicate how you feel right now, that is, at this moment. Do not spend too much time on any one statement, but give the answer which seems to describe your present feelings best."
EN_stai_state.pages = EN_pages
EN_stai_state.QuestionnaireType = 'likert'

// ==============================================================
var FR_scale01FORWARD = [
  {value:1, text: "Pas du tout"},
  {value:2, text:"Un peu"},
  {value:3, text:"Moderement"},
  {value:4, text:"Beaucoup"}
]
var FR_scale01BACKWARD = [
  {value:4, text: "Pas du tout"},
  {value:3, text:"Un peu"},
  {value:2, text:"Moderement"},
  {value:1, text:"Beaucoup"}
]

var FR_pages = [
  [
    {
      type: 'likert',
      prompt: "Je me sens calme.",
      name: 'stais01',
      likert_scale_values: FR_scale01BACKWARD,
      required: false,
    },
    {
      type: 'likert',
      prompt: "Je me sens en sécurité.",
      name: 'stais02',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je suis tendu(e).",
      name: 'stais03',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens surmené(e).",
      name: 'stai04',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens tranquille.",
      name: 'stai05',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens bouleversé(e).",
      name: 'stai06',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je suis préoccupé(e) actuellement par des malheurs possibles.",
      name: 'stai07',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens complé(e).",
      name: 'stai08',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens effrayé(e).",
      name: 'stai09',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens à l'aise.",
      name: 'stai10',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens sûr(e) de moi.",
      name: 'stai11',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens nerveux(se).",
      name: 'stai12',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je suis affolé(e).",
      name: 'stai13',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens indécis(e).",
      name: 'stai14',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je suis détendu(e).",
      name: 'stai15',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens satisfait(e).",
      name: 'stai16',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je suis préoccupé(e).",
      name: 'stai17',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens tout mêlé(e).",
      name: 'stai18',
      likert_scale_values: FR_scale01FORWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je sens que j'ai les nerfs solides.",
      name: 'stai19',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    },
    {
      type: 'likert',
      prompt: "Je me sens bien.",
      name: 'stai20',
      likert_scale_values: FR_scale01BACKWARD,
      required: false
    }
  ]
]

var FR_stai_state = {}
FR_stai_state.title = title
FR_stai_state.description = "Vous trouverez c-dessous un certain nombre d'énoncés que les gens ont déjà utilisés pour se décrire. Lisez chaque énoncé, puis en sélect le réponse approprié ci-dessous  de l'énoncé, indiquez comment vous vous sentez maintenant, c'est-à-dire à ce moment précis. Il n'y a pas de bonnes ou de mauvaises réponses. Ne vous attardez pas trop longtemps sur un énoncé ou l'autre mais donnez la réponses qui vous semble décrire le mieux les sentiments que vous éprouvez présentement."

FR_stai_state.pages = FR_pages
FR_stai_state.QuestionnaireType = 'likert'