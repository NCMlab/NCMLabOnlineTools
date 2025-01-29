var title = "Stait-Trait Anxiety Index - Trait"
var shortTitle = 'STAI-T'
console.log("Loading... "+title)
var scale01FORWARD = [
  {value:1, text: "Almost never"},
  {value:2, text: "Sometimes"},
  {value:3, text: "Often"},
  {value:4, text: "Almost always"}
]
var scale01BACKWARD = [
  {value:4, text: "Almost never"},
  {value:3, text: "Sometimes"},
  {value:2, text: "Often"},
  {value:1, text: "Almost always"}
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
EN_stai_trait.shortTitle = shortTitle
EN_stai_trait.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then circle the appropriate response below the statement to indicate how you generally feel. There are no right or wrong answers. Do not spend too much time on a single statement, but give the answer that comes closest to how you generally feel."
EN_stai_trait.pages = pages
// This is used for scoring
EN_stai_trait.QuestionnaireType = 'likert'


// ====================================================

var title = "Stait-Trait Anxiety Index - Trait"

var FR_scale01FORWARD = [
  {value:1, text: "Presque jamais"},
  {value:2, text: "Quelquefois"},
  {value:3, text: "Souvent"},
  {value:4, text: "Presque toujours"}
]
var FR_scale01BACKWARD = [
  {value:4, text: "Presque jamais"},
  {value:3, text: "Quelquefois"},
  {value:2, text: "Souvent"},
  {value:1, text: "Presque toujours"}
]


var FR_pages = [
              [
                {
                  type: 'likert',
                  prompt: "Je me sens bien.",
                  name: 'stait01',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false,
                  alert: "Almost never"
                },
                {
                  type: 'likert',
                  prompt: "Je me sens nerveux(se) et agité(e).",
                  name: 'stait02',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je me sens content(e) de moi-même.",
                  name: 'stait03',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je voudrais être aussi heureux(se) que les autres semblent l'être.",
                  name: 'stait04',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "J'ai l'impression d'être un(e) raté(e).",
                  name: 'stait05',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je me sens reposé(e).",
                  name: 'stait06',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: 'Je suis d\'un grand calme.',
                  name: 'stait07',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je sens que les difficultés s'accumulent au point où je n'arrive pas à les surmonter.",
                  name: 'stait08',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je m'en fais trop pour des choses qui n'en valent pas vraiment la peine.",
                  name: 'stait09',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je suis heureux(se).",
                  name: 'stait10',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "J'ai des pensées troublantes.",
                  name: 'stait11',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je manque de confiance en moi.",
                  name: 'stait12',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je me sens en sécurité.",
                  name: 'stait13',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Prendre des décisions m'est facile.",
                  name: 'stait14',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je sens que je ne suis pas à la hauteur de la situation.",
                  name: 'stait15',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je suis satisait(e).",
                  name: 'stait16',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Des idées sans importance me passent par la tête et me tracassent.",
                  name: 'stait17',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je prends les désappointements tellement à couer que je n'arrive pas à les chasser de mon espirit.",
                  name: 'stait18',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je suis une personne qui a les nerfs solides.",
                  name: 'stait19',
                  likert_scale_values: FR_scale01BACKWARD,
                  required: false
                },
                {
                  type: 'likert',
                  prompt: "Je deviens tendu(e) ou bouleversé(e) quand je songe à mes préoccupations et à mes intérêts récents.",
                  name: 'stait20',
                  likert_scale_values: FR_scale01FORWARD,
                  required: false
                }
              ]
]

var FR_stai_trait = {}
FR_stai_trait.title = title
FR_stai_trait.shortTitle = shortTitle
FR_stai_trait.description = "Vous trouverez ci-dessous un certain nombre d'énocés qui ont déjà été utilisés par les gens pour se décrire. Lisez chaque énouncé, puis en select le réponse approprié ci-dessous de l'énouncé, indiquez comment vous vous sentez en général. Il n'y a pas de bonnes ou de mauvaises réponses. Ne vous attardez pas trop longtemps sur en énouncé ou l'autre mais donnez la réponse qui vous semble décrirw le mieux les sentiments que vous éprouvez en général."
FR_stai_trait.pages = FR_pages
// This is used for scoring
FR_stai_trait.QuestionnaireType = 'likert'

