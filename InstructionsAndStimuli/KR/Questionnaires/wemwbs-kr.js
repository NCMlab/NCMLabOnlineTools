var title = "정신적 웰빙(정신적 건강과 긍정적 정서)척도"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "html",
        name: "introduction",
        html: "각 제목 아래에서 오늘의 건강을 가장 잘 설명하는 상자를 선택하세요."
       },
    {
        type: 'radiogroup',
        title: '나는 미래에 대해서 긍정적으로 느낀다.',
        name: 'wemwbs001',
        colCount: 0,
        choices:
            [
              { value: 1, text: '전혀 없었음' }, 
              { value: 2, text: '드물게 있었음' },
              { value: 3, text: '때때로 있었음' },
              { value: 4, text: '자주 있었음' }, 
              { value: 5, text: '항상 그랬음'}
            ],
    },
    {
        type: 'radiogroup',
        title: '나는 내가 쓸모 있는 사람이라고 느낀다.',
        name: 'wemwbs002',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 내가 심적으로 편안하다고 느낀다.',
        name: 'wemwbs003',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },

      {
        type: 'radiogroup',
        title: '나는 다른 사람들에 관심을 가지고 있다.',
        name: 'wemwbs004',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 여분의 에너지를 지니고 있다.',
        name: 'wemwbs005',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 문제들에 잘 대처한다.',
        name: 'wemwbs006',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 명료하게 생각한다.',
        name: 'wemwbs007',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 내 자신에 대해 긍정적으로 느낀다.',
        name: 'wemwbs008',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 다른 사람들에게 친밀감을 느낀다.',
        name: 'wemwbs009',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 자신감이 있다.',
        name: 'wemwbs010',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },

      {
        type: 'radiogroup',
        title: '나는 내 의지대로 무언가를 결정할 수 있다.',
        name: 'wemwbs011',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 사랑 받고 있다고 느낀다.',
        name: 'wemwbs012',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 새로운 것들에 흥미를 느낀다.',
        name: 'wemwbs013',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '나는 쾌활하다.',
        name: 'wemwbs014',
        colCount: 0,
        choices:
        [
            { value: 1, text: '전혀 없었음' }, 
            { value: 2, text: '드물게 있었음' },
            { value: 3, text: '때때로 있었음' },
            { value: 4, text: '자주 있었음' }, 
            { value: 5, text: '항상 그랬음'}
        ],    
      },

    ],
  }]
}

var EN_wemwbsJSON = {}
EN_wemwbsJSON.title = title,
EN_wemwbsJSON.shortTitle = shortTitle,
EN_wemwbsJSON.survey_JSON = survey_JSON
EN_wemwbsJSON.description = ""
EN_wemwbsJSON.QuestionnaireType = 'radiogroup'
EN_wemwbsJSON.references = "references"
EN_wemwbsJSON.notes = ''
