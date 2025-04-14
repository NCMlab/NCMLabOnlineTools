
var title = "老年期うつ病評価尺度"
var shortTitle = 'GDS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'gds',
                title: 'この1週間であなたが感じたことについて、最もあてはまるものに○をつけてください。',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gds01', text: "毎日の生活に満足していますか"},
                    {value: 'gds02', text: "毎日の活動力や周囲に対する興味が低下したと思いますか"},
                    {value: 'gds03', text: "生活が空虚だと思いますか"},
                    {value: 'gds04', text: "毎日が退屈だと思うことが多いですか"},
                    {value: 'gds05', text: "大抵は機嫌よく過ごすことが多いですか"},
                    {value: 'gds06', text: "将来の漠然とした不安に駆られることが多いですか"},
                    {value: 'gds07', text: "多くの場合は自分が幸福だと思いますか"},
                    {value: 'gds08', text: "自分が無力だなあと思うことが多いですか"},
                    {value: 'gds09', text: "外出したり何か新しいことをするより家にいたいと思いますか"},
                    {value: 'gds10', text: "何よりもまず、もの忘れが気になりますか"},
                    {value: 'gds11', text: "いま生きていることが素晴らしいと思いますか"},
                    {value: 'gds12', text: "生きていても仕方がないと思う気持ちになることがありますか"},
                    {value: 'gds13', text: "自分が活気にあふれていると思いますか"},
                    {value: 'gds14', text: "希望がないと思うことがありますか"},
                    {value: 'gds15', text: "周りの人があなたより幸せそうに見えますか"},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": 'はい'
                    },
                    {
                    "value": 1,
                    "text": 'いいえ'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var EN_gdsJSON = {}
EN_gdsJSON.title = title
EN_gdsJSON.shortTitle = shortTitle
EN_gdsJSON.survey_JSON = survey_JSON
//EN_gdsJSON.description = instructions
EN_gdsJSON.QuestionnaireType = 'likert'
EN_gdsJSON.references = references
EN_gdsJSON.notes = notes

