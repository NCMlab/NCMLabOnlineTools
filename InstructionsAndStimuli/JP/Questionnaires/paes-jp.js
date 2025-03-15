var title = "Physical Activity Enjoyment Scale"
var shortTitle = "PAES"
const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
    elements: [
        {
            type: "html",
            name: "introduction",
            html: "現在, あなたが身体活動についてどう感じているかを評価してください。"
        },
        {
            type: 'radiogroup',
            name: 'paes001',
            title: '楽しんでいる',
            colCount: 0,
            choices:
                [
                    { value: 0, text: '全くそう思わない' }, 
                    { value: 1, text: 'あまりそう思わない' },
                    { value: 2, text: 'どちらとも言えない' },
                    { value: 3, text: 'ややそう思う' }, 
                    { value: 4, text: 'とてもそう思う' } 
            ],
        },
        {
            type: 'radiogroup',
            name: 'paes002',
            title: '楽しいと思う',
            colCount: 0,
            choices:
            [
                    { value: 0, text: '全くそう思わない' }, 
                    { value: 1, text: 'あまりそう思わない' },
                    { value: 2, text: 'どちらとも言えない' },
                    { value: 3, text: 'ややそう思う' }, 
                    { value: 4, text: 'とてもそう思う' } 
            ],
        },
        {
            type: 'radiogroup',
            title: 'とても愉快だ',
            name: 'paes003',
            colCount: 0,
            choices:
            [
                    { value: 0, text: '全くそう思わない' }, 
                    { value: 1, text: 'あまりそう思わない' },
                    { value: 2, text: 'どちらとも言えない' },
                    { value: 3, text: 'ややそう思う' }, 
                    { value: 4, text: 'とてもそう思う' }
            ],
        },
        {
            type: 'radiogroup',
            title: 'とてもいい気分転換になる',
            name: 'paes004',
            colCount: 0,
            choices:
            [
                    { value: 0, text: '全くそう思わない' }, 
                    { value: 1, text: 'あまりそう思わない' },
                    { value: 2, text: 'どちらとも言えない' },
                    { value: 3, text: 'ややそう思う' }, 
                    { value: 4, text: 'とてもそう思う' }  
            ],
        },
    ],
    }]
};


var EN_paesJSON = {}
EN_paesJSON.title = title,
EN_paesJSON.shortTitle = shortTitle,
EN_paesJSON.survey_JSON = survey_JSON
EN_paesJSON.description = ""
EN_paesJSON.QuestionnaireType = 'radiogroup'
EN_paesJSON.references = "references"
EN_paesJSON.notes = ''
