var title = "정신적 웰빙(정신적 건강과 긍정적 정서)척도"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  elements: [
    {
        type: "matrix",
        name: "정신적 웰빙(정신적 건강과 긍정적 정서)척도",
        title: "각 제목 아래에서 오늘의 건강을 가장 잘 설명하는 상자를 선택하세요.",
        alternateRows: true,
        isAllRowRequired: true,
        rows: [
            {value: 'wemwbs001',text: '나는 미래에 대해서 긍정적으로 느낀다.'},
            {value: 'wemwbs002',text: '나는 내가 쓸모 있는 사람이라고 느낀다.'},
            {value: 'wemwbs003',text: '나는 내가 심적으로 편안하다고 느낀다.'},
            {value: 'wemwbs004', text: '나는 다른 사람들에 관심을 가지고 있다.'},
            {value: 'wemwbs005', text: '나는 여분의 에너지를 지니고 있다.'},
            {value: 'wemwbs006', text: '나는 문제들에 잘 대처한다.'},
            {value: 'wemwbs007', text: '나는 명료하게 생각한다.'},
            {value: 'wemwbs008', text: '나는 내 자신에 대해 긍정적으로 느낀다.'},
            {value: 'wemwbs009', text: '나는 다른 사람들에게 친밀감을 느낀다.'},
            {value: 'wemwbs010', text: '나는 자신감이 있다.'},
            {value: 'wemwbs011', text: '나는 내 의지대로 무언가를 결정할 수 있다.'},
            {value: 'wemwbs012', text: '나는 사랑 받고 있다고 느낀다.'},
            {value: 'wemwbs013', text: '나는 새로운 것들에 흥미를 느낀다.'},
            {value: 'wemwbs014', text: '나는 쾌활하다.'},
        ],
        columns: [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
    ],
  }


var KR_wemwbs = {}
KR_wemwbs.title = title,
KR_wemwbs.shortTitle = shortTitle,
KR_wemwbs.survey_JSON = survey_JSON
KR_wemwbs.description = ""
KR_wemwbs.QuestionnaireType = 'radiogroup'
KR_wemwbs.references = "references"
KR_wemwbs.notes = ''
