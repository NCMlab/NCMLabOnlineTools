var title = "건강 관련 삶의 질 관련 척도,"
var shortTitle = "EQ-5D"
const survey_JSON = {

  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
    elements: [
    {
        type: "html",
        name: "introduction",
        html: "각 제목 아래 오늘 귀하의 건강 상태를 가장 잘 나타낸 박스 한 개를 체크해주십시오."
       },
    {
        type: 'radiogroup',
        title: '이동성',
        name: 'mobility',
        choices:
        [
            { value: 1, text: '나는 걷는데 전혀 지장이 없다.'}, 
            { value: 2, text: '나는 걷는데 약간 지장이 있다.'},
            { value: 3, text: '나는 걷는데 중간 정도의 지장이 있다.'},
            { value: 4, text: '나는 걷는데 심한 지장이 있다.'}, 
            { value: 5, text: '나는 걸을 수 없다.'}
        ],
    },
    {
        type: 'radiogroup',
        title: '자기 관리',
        name: 'selfcare',
        choices: 
        [
            { value: 1, text: '나는 혼자 씻거나 옷을 입는데 전혀 지장이 없다.' },
            { value: 2, text: '나는 혼자 씻거나 옷을 입는데 약간 지장이 있다.' },
            { value: 3, text: '나는 혼자 씻거나 옷을 입는데 중간 정도의 지장이 있다.' },
            { value: 4, text: '나는 혼자 씻거나 옷을 입는데 심한 지장이 있다.' },
            { value: 5, text: '나는 혼자 씻거나 옷을 입을 수 없다.' }
        ],
    },
    {
        type: 'radiogroup',
        title: '일상 활동 (예: 일, 공부, 가사일, 가족 또는 여가 활동)',
        name: 'usualactivities',
        choices:     
        [   
            { value: 1, text: '나는 일상 활동을 하는데 전혀 지장이 없다.' },
            { value: 2, text: '나는 일상 활동을 하는데 약간 지장이 있다.' },
            { value: 3, text: '나는 일상 활동을 하는데 중간 정도의 지장이 있다.' },
            { value: 4, text: '나는 일상 활동을 하는데 심한 지장이 있다.' }, 
            { value: 5, text: '나는 일상 활동을 할 수 없다.' }, 
        ],
    },
    {
        type: 'radiogroup',
        title: '통증 / 불편감',
        name: 'paindiscomfort',
        choices: 
        [
            { value: 1, text: '나는 전혀 통증이나 불편감이 없다.' }, 
            { value: 2, text: '나는 약간 통증이나 불편감이 있다.' },
            { value: 3, text: '나는 중간 정도의 통증이나 불편감이 있다.' },
            { value: 4, text: '나는 심한 통증이나 불편감이 있다.' }, 
            { value: 5, text: '나는 극심한 통증이나 불편감이 있다.' },
        ],
    },
    {
        type: 'radiogroup',
        title: '불안 / 우울',
        name: 'anxietydepression',
        choices: 
        [
            { value: 1, text: '나는 전혀 불안하거나 우울하지 않다.' },
            { value: 2, text: '나는 약간 불안하거나 우울하다.' },
            { value: 3, text: '나는 중간 정도로 불안하거나 우울하다.' },
            { value: 4, text: '나는 심하게 불안하거나 우울하다.' }, 
            { value: 5, text: '나는 극도로 불안하거나 우울했다.' },
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