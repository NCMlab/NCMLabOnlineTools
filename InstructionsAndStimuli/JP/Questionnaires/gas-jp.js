
var title = "Geriatric Anxiety Scal 日体語版"
var shortTitle = 'GAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'gas',
                title: '下記の項目は、不安やストしスに共通してみられる症状のリストです。リストにある各項目を よく読んでください。今日も含め、この一週間であなたが各症状をどのくらいの頻度で体験し たかを教えてください。1番から順番に、あなたに当てはまる数字に〇印をつけてください。',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gas01', text: "イライラした。"},
                    {value: 'gas02', text: "自分はひとりぼっち、または他人から切り難 されているよに感じた。"},
                    {value: 'gas03', text: "ぼ一つとしているよに感じた。"},
                    {value: 'gas04', text: "じっと座っていることが難しかった。"},
                    {value: 'gas05', text: "心配をコントロールできなかった。"},
                    {value: 'gas06', text: "落ち着きがなかったり、緊張したり、ピリピ リした。"},
                    {value: 'gas07', text: "疲れていた。"},
                    {value: 'gas08', text: "筋肉が緊張していた"},
                    {value: 'gas09', text: "私の人生はど することもできなかったと感 じた"},
                    {value: 'gas10', text: "何か恐ろしいことが自分の身に起こるのでは ないかと感じた"},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": '全くなかった'
                    },
                    {
                    "value": 1,
                    "text": 'ときどきおった'
                    },
                    {
                    "value": 2,
                    "text": 'よくあった'
                    },
                    {
                    "value": 3,
                    "text": '常にあった'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var EN_gasJSON = {}
EN_gasJSON.title = title
EN_gasJSON.shortTitle = shortTitle
EN_gasJSON.survey_JSON = survey_JSON
//EN_gasJSON.description = instructions
EN_gasJSON.QuestionnaireType = 'likert'
EN_gasJSON.references = references
EN_gasJSON.notes = notes
