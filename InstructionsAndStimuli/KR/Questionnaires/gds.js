
var title = "단축형 노인 우울 척도"
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
                title: '“이제부터 평상시의 생각이나 느낌에 대해서 여쭈어 보겠습니다. 제가 말씀드리는 내용이 지난 일주일 동안의 자신의 기분이나 생각과 같다고 생각하시면 ‘네’, 그렇지 않다고 생각하시면 ‘아니오’라고 대답하 여 주십시오.',
                alternateRows: true,
                className: "gds-matrix",
                isAllRowRequired: true,
                rows: [
                    {value: 'gds01', text: "현재의 생활에 대체적으로 만족하십니까?"},
                    {value: 'gds02', text: "요즈음 들어 활동량이나 의욕이 많이 떨어지셨습니까?"},
                    {value: 'gds03', text: "자신이 헛되이 살고 있다고 느끼십니까?"},
                    {value: 'gds04', text: "생활이 지루하게 느껴질 때가 많습니까?"},
                    {value: 'gds05', text: "평소에 기분은 상쾌한 편이십니까?"},
                    {value: 'gds06', text: "자신에게 불길한 일이 닥칠 것 같아 불안하십니까?"},
                    {value: 'gds07', text: "대체로 마음이 즐거운 편이십니까?"},
                    {value: 'gds08', text: "절망적이라는 느낌이 자주 드십니까?"},
                    {value: 'gds09', text: "바깥에 나가기가 싫고 집에만 있고 싶습니까?"},
                    {value: 'gds10', text: "비슷한 나이의 다른 노인들보다 기억력이 더 나쁘다고 느끼십니까?"},
                    {value: 'gds11', text: "현재 살아있다는 것이 즐겁게 생각되십니까?"},
                    {value: 'gds12', text: "지금의 내 자신이 아무 쓸모없는 사람이라고 느끼십니까?"},
                    {value: 'gds13', text: "기력이 좋으신 편이십니까?"},
                    {value: 'gds14', text: "지금 자신의 처지가 아무런 희망도 없다고 느끼십니까?"},
                    {value: 'gds15', text: "자신이 다른 사람들의 처지보다 더 못하다고 느끼십니까?"},
                ],
                columns: [
                    {
                        value: 1,
                        text: '예'
                    },
                    {
                        value: 0,
                        text: '아니오'
                    },
                ],
            },
        ],
    };



var references = ""

var notes = ""

var KR_gds = {}
KR_gds.title = title
KR_gds.shortTitle = shortTitle
KR_gds.survey_JSON = survey_JSON
//KR_gds.description = instructions
KR_gds.QuestionnaireType = 'matrix'
KR_gds.references = references
KR_gds.notes = notes

