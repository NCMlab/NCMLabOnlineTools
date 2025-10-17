var title = "신체 활동 즐거움 척도 - 단축 양식"
var shortTitle = "PAES"

var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'PAES',
                title: 'Please rate how you feel <em>at the moment</em> about the music and movement activity you have been doing',
                alternateRows: true,
                isAllRowRequired: true,
                
                rows: [

                    {value: 'paes001', text: 'I enjot it. 나는 이것을 즐긴다.'},
                    {value: 'paes002', text: 'I find it pleasurable. 나는 이것이 기분 좋다고 느낀다.'},
                    {value: 'paes003', text: 'It is very pleasant. 이것은 매우 즐겁다.'},
                    {value: 'paes004', text: 'It feels good. 이것은 기분 좋다.'},
                ],
                columns: [
                    { "value": 0, text: '전혀동 의하지 않음' }, 
                    { "value": 1, text: '동의하 지 않음' },
                    { "value": 2, text: '보통' },
                    { "value": 3, text: '동의함' }, 
                    { "value": 4, text: '매우 동의함'}
                ],
            }
        ]
    }


var KR_paes = {}
KR_paes.title = title,
KR_paes.shortTitle = shortTitle,
KR_paes.survey_JSON = survey_JSON
KR_paes.description = ""
KR_paes.QuestionnaireType = 'radiogroup'
KR_paes.references = "references"
KR_paes.notes = ''
