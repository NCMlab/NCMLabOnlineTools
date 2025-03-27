
var title = "노인불안척도"
var shortTitle = 'GAS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'gas',
                title: '아래는 불안과 스트레스로 인해 흔히 나타나는 증상입니다. 오늘을 포함해서 지난 1주일 간 아래의 증 상들을 얼마나 자주 경험했는지 작성해 주십시오.',
                alternateRows: true,
                isAllRowRequired: true,
                rows: [
                    {value: 'gas01', text: "나는 짜증이 났다."},
                    {value: 'gas02', text: "나는 다른 사람들로부터 분리되거나 고립된 느낌을 받았다."},
                    {value: 'gas03', text: "나는 멍한 느낌이 들었다."},
                    {value: 'gas04', text: "나는 가만히 앉아있는 것이 어려웠다."},
                    {value: 'gas05', text: "나는 걱정을 제어할 수 없었다."},
                    {value: 'gas06', text: "나는 초조하고, 긴장되어 있거나 신경이 곤두선 느낌 이었다."},
                    {value: 'gas07', text: "나는 피로감을 느꼈다."},
                    {value: 'gas08', text: "근육이 긴장되어 있었다."},
                    {value: 'gas09', text: "내 인생에서 통제력을 잃은 듯한 느낌이 들었다."},
                    {value: 'gas10', text: "왠지 나에게 매우 안 좋은 일이 생길 것 같은 느낌이 들었다."},
                ],
                columns: [
                    {
                    "value": 0,
                    "text": '전혀 아님'
                    },
                    {
                    "value": 1,
                    "text": '가끔'
                    },
                    {
                    "value": 2,
                    "text": '자주'
                    },
                    {
                    "value": 3,
                    "text": '항상'
                    },
                ],
            }
        ]
    }



var references = ""

var notes = ""

var EN_gasJSON = {}
EN_gasJSON.title = title
EN_gasJSON.shortTitle = shortTitle
EN_gasJSON.survey_JSON = survey_JSON
//EN_gasJSON.description = instructions
EN_gasJSON.QuestionnaireType = 'matrix'
EN_gasJSON.references = references
EN_gasJSON.notes = notes