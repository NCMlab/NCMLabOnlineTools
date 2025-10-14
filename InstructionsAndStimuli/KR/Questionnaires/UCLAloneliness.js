
var title = "UCLA 외로움 척도"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  pages: [{
    elements: [                
      {
        type: "html",
        name: "introduction",
        html: "다음 각 진술에 설명된 방식을 얼마나 자주 느끼는지 표시하세요."
       },
        {
          type: "radiogroup",
          name: "loneliness001",
          title: "얼마나 자주 사람들과의 교제가 부족하다고 느낍니 까?",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "전혀아니다" }, 
            { value: 2, text: "드 물 지 만 있다"}, 
            { value: 3, text: "가끔있다"},
            { value: 4, text:"항 상그 렇다"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness002",
          title: "얼마나 자주 혼자 남겨졌다고 느낍니까?",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "전혀아니다" }, 
            { value: 2, text: "드 물 지 만 있다"}, 
            { value: 3, text: "가끔있다"},
            { value: 4, text:"항 상그 렇다"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        {
          type: "radiogroup",
          name: "loneliness003",
          title: "얼마나 자주 다른 사람들로부터 고립되어 있다고 느 낍니까?",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "전혀아니다" }, 
            { value: 2, text: "드 물 지 만 있다"}, 
            { value: 3, text: "가끔있다"},
            { value: 4, text:"항 상그 렇다"},
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
      ],
    }]
  };


var KR_UCLAloneliness = {}
KR_UCLAloneliness.title = "UCLA 3-Item Loneliness Scale",
KR_UCLAloneliness.shortTitle = "Loneliness"
KR_UCLAloneliness.survey_JSON = survey_JSON
KR_UCLAloneliness.description = ""
KR_UCLAloneliness.QuestionnaireType = 'radiogroup'
KR_UCLAloneliness.references = "references"
KR_UCLAloneliness.notes = ''

