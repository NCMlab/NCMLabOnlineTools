// ENGLISH
var title = "Demographic Questionnaire "
var shortTitle = 'Music Intake'
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
    showProgressBar: "none",
    progressBarType: "pages",
    progressBarShowPageNumbers: true,
    progressBarShowPageTitles: false,
    showCompletedPage: false,
    showTitle: false,
    pages:
        [

            {
                name: "Demographic Information",
                title: "Demographic Information",
                elements: [

                    {
                        name: 'mmse_year',
                        title: "What year is this? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_season',
                        title: "What season is this? (accept either: last week of the old season or first week of a new season)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_month',
                        title: "What month is this? (accept either: the first day of a new month or the last day of the previous month)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_date',
                        title: "What is today’s date? (accept previous or next date)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_day',
                        title: "What day of the week is this? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_country',
                        title: "What country are we in? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_province',
                        title: "What province are we in? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_city',
                        title: "What city/town are we in? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_address',
                        title: "(In home) What is the street address of this house? (accept street name and house number or equivalent in rural areas)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_building',
                        title: "(In facility) What is the name of this building? (accept exact name of institution only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_room',
                        title: "(In home) What room are we in? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_floor',
                        title: "(In facility) What floor of the building are we on? (accept exact answer only)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_learning',
                        title: "Say: I am going to name three objects. When I am finished, I want you to repeat them. Remember what they are because I am going to ask you to name them again in a few minutes. (Say the following words slowly at approximately one-second intervals): <br />Ball / Car / Man. <br /><br />For repeated use: <br />Bell, jar, fan;<br /> Bill, tar, can; <br />Bull, bar, pan. <br />Please repeat the three items for me. (score one point for each correct reply on the first attempt.) If the person did not repeat all three, repeat until they are learned or up to a maximum of five times (but only score first attempt).",
                        type: "tagbox",
                        choices: [
                            'Word 1',
                            'Word 2',
                            'Word 3',
                        ],
                        description: "Please select all that apply.",
                        isRequired: true
                    },
                    {
                        name: 'mmse_world',
                        title: 'Spell the word WORLD. (you may help the person to spell the word correctly) Say: Now spell it backwards please. If the subject cannot spell world even with assistance, score 0. Refer to Page 3 for scoring instructions.',
                        type: 'textarea',
                        textbox_rows: 1,
                    },
                    {
                        name: 'mmse_delayed',
                        title: "Now what were the three objects I asked you to remember?",
                        type: "tagbox",
                        choices: [
                            'Word 1',
                            'Word 2',
                            'Word 3',
                        ],
                        description: "Please select all that apply.",
                        isRequired: true
                    },
                     {
                        name: 'mmse_floor',
                        title: "Show wristwatch. Ask: What is this called? (score one point for correct response: accept “wristwatch” or “watch”; do not accept “clock” or “time”, etc.).",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_pencil',
                        title: "Show pencil. Ask: What is this called? (score one point for correct response; accept ”pencil” only; score 0 for pen)",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_phrase',
                        title: "I would like you to repeat a phrase after me: No ifs, ands or buts",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_close_eyes',
                        title: "Read the words on this page and then do what it says. Then, hand the person the sheet with CLOSE YOUR EYES on it. If the subject just reads and does not close eyes, you may repeat: Read the words on this page and then do what it says, (a maximum of three times. Score one point only if the subject closes eyes. The subject does not have to read aloud.",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_write_sentence',
                        title: "Hand the person a pencil and paper (Page 3). Say: Write any complete sentence on that piece of paper. Score one point. The sentence must make sense. Ignore spelling errors.",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_copy_design',
                        title: "Place design, eraser and pencil in front of the person. Say: Copy this design please. Allow multiple tries. Wait until the person is finished and hands it back. Score one point for a correctly copied diagram. The person must have drawn a four-sided figure between two five-sided figures.",
                        type: 'radiogroup',
                        choices: [{ value: 1, text: 'Yes' },
                        { value: 0, text: 'No' }],
                    },
                    {
                        name: 'mmse_paperFold',
                        title: "Ask the person if he is right or left handed. Take a piece of paper, hold it up in front of the person and say: Take this paper in your right/left hand (whichever is non-dominant), fold the paper in half once with both hands and put the paper down on the floor. Score one point for each instruction executed correctly.",
                        type: "tagbox",
                        choices: [
                            'Takes paper in correct hand',
                            'Folds it in half',
                            'Puts it on the floor',
                        ],
                        description: "Please select all that apply.",
                        isRequired: true
                    },
                ]
            }
        ]
}

var EN_ScoringMMSE = {}
EN_ScoringMMSE.title = title;
EN_ScoringMMSE.survey_JSON = json;
EN_ScoringMMSE.shortTitle = shortTitle
EN_ScoringMMSE.QuestionnaireType = 'Varied'
