var title = "신체 활동 즐거움 척도 - 단축 양식"
var shortTitle = "PAES"
const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
    elements: [
        {
            type: "html",
            name: "introduction",
            html: "현재 하고 있는 활동(음악 및 동작 수업)에 대해 현재 기분이 어떤지 평가해 주세요."
        },
        {
            type: 'radiogroup',
            name: 'paes001',
            title: '나는 이것을 즐긴다.',
            colCount: 0,
            choices:
                [
                { value: 0, text: '전혀동 의하지 않음' }, 
                { value: 1, text: '동의하 지 않음' },
                { value: 2, text: '보통' },
                { value: 3, text: '동의함' }, 
                { value: 4, text: '매우 동의함' } 
            ],
        },
        {
            type: 'radiogroup',
            name: 'paes002',
            title: '나는 이것이 기분 좋다고 느낀다.',
            colCount: 0,
            choices:
            [
                { value: 0, text: '전혀동 의하지 않음' }, 
                { value: 1, text: '동의하 지 않음' },
                { value: 2, text: '보통' },
                { value: 3, text: '동의함' }, 
                { value: 4, text: '매우 동의함' } 
            ],
        },
        {
            type: 'radiogroup',
            title: 'It is very pleasant.',
            name: 'paes003',
            colCount: 0,
            choices:
            [
                { value: 0, text: '전혀동 의하지 않음' }, 
                { value: 1, text: '동의하 지 않음' },
                { value: 2, text: '보통' },
                { value: 3, text: '동의함' }, 
                { value: 4, text: '매우 동의함' } 
            ],
        },
        {
            type: 'radiogroup',
            title: 'It feels good.',
            name: 'paes004',
            colCount: 0,
            choices:
            [
                { value: 0, text: '전혀동 의하지 않음' }, 
                { value: 1, text: '동의하 지 않음' },
                { value: 2, text: '보통' },
                { value: 3, text: '동의함' }, 
                { value: 4, text: '매우 동의함' }  
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
