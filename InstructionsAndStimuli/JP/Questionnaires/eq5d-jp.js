var title = "健康アンケート"
var shortTitle = "EQ-5D"
const survey_JSON = {

  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
    elements: [
    {
        type: "html",
        name: "introduction",
        html: "各項目において、あなたの今日の健康状態を最もよく表している1つに印をつけてください。"
       },
    {
        type: 'radiogroup',
        title: '移動の程度',
        name: 'mobility',
        choices:
        [
            { value: 1, text: '歩き回るのに問題はない'}, 
            { value: 2, text: '歩き回るのにいくらか問題がある'},
            { value: 3, text: 'ベッド（床）に寝たきりである'},
        ],
    },
    {
        type: 'radiogroup',
        title: '身の回りの管理',
        name: 'selfcare',
        choices: 
        [
            { value: 1, text: '身の回りの管理に問題はない' },
            { value: 2, text: '洗面や着替えを自分でするのにいくらか問題がある' },
            { value: 3, text: '洗面や着替えを自分でできない' },
        ],
    },
    {
        type: 'radiogroup',
        title: 'ふだんの活動　（例：仕事、勉強、家事、家族･余暇活動）',
        name: 'usualactivities',
        choices:     
        [   
            { value: 1, text: 'ふだんの活動を行うのに問題はない' },
            { value: 2, text: 'ふだんの活動を行うのにいくらか問題がある' },
            { value: 3, text: 'ふだんの活動を行うことができない' }, 
        ],
    },
    {
        type: 'radiogroup',
        title: '痛み ╱ 不快感',
        name: 'paindiscomfort',
        choices: 
        [
            { value: 1, text: '痛みや不快感はない' }, 
            { value: 2, text: '中程度の痛みや不快感がある' },
            { value: 3, text: 'ひどい痛みや不快感がある' },
        ],
    },
    {
        type: 'radiogroup',
        title: '不安 ╱ ふさぎ込み',
        name: 'anxietydepression',
        choices: 
        [
            { value: 1, text: '不安でもふさぎ込んでもいない' },
            { value: 2, text: '中程度に不安あるいはふさぎ込んでいる' },
            { value: 3, text: 'ひどく不安あるいはふさぎ込んでいる' },
        ],
    }
    ],
    }]
  };


var EN_eq5dJSON = {}
EN_eq5dJSON.title = title,
EN_eq5dJSON.shortTitle = shortTitle,
EN_eq5dJSON.survey_JSON = survey_JSON
EN_eq5dJSON.description = ""
EN_eq5dJSON.QuestionnaireType = 'radiogroup'
EN_eq5dJSON.references = "references"
EN_eq5dJSON.notes = ''

add('EN_eq5dJSON', function(){ Questionnaire = EN_eq5dJSON});