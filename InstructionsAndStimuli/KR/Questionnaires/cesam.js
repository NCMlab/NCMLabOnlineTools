var title = "The Centre of Excellence Self-Administered questionnaire"
var shortTitle = "CESAM"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "dropdown",
        name: "cesam001",
        title: "지난 1년간 의도하지 않은 체중 감량이 있었나요?",
        choices: [
            { value: 2, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam001p1",
        title: "체중이 3kg 이상 감소했나요?",
        choices: [
            { value: 1, text: "예"},
            { value: 2, text: "아니요"}
        ],
        visibleIf: "{cesam001} == 예",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam002",
        title: "매일 복용하는 약물의 개수는 몇 개인가요?",
        choices: [
          { value: 0, text: '<5' },
          { value: 1, text: '5-9' },
          { value: 2, text: '≥10' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam003",
        title: "시력 문제가 있나요?",
        choices: [
          { value: 1, text: '예' },
          { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam004",
        title: "청력 문제가 있나요?",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam005",
        title: "주변 사람들이 기억력 문제를 지적한 적이 있나요?",
        choices: [
            { value: 2, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006",
        title: "홈 케어 지원을 받고 있나요?",
        choices: [
            { value: 2, text: "예"},
            { value: 0, text: "아니요"}
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006p1",
        title: "누구로부터?",
        choices: [
            {text: "가족"},
            {text: "친구"},
            {text: "전문가"}
        ],
        visibleIf: "{cesam006} == 예",
        isRequired: true,
        showClearButton: true
      },

      {
        type: "dropdown",
        name: "cesam007",
        title: "몸단장 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam008",
        title: "목욕 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam009",
        title: "옷 입기 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam010",
        title: "보행 및 계단 오르기 도움필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam011",
        title: "화장실 이용 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam012",
        title: "전화 사용 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam013",
        title: "대중교통 이용 도움 필요여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam014",
        title: "약물 관리 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam015",
        title: "재정 관리 도움 필요 여부",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam016",
        title: "배뇨/배변 실금이 있나요?",
        choices: [
            { value: 2, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam017",
        title: "오늘 기분이 어떻습니까?",
        choices: [
            { value: 2, text: "행복" },
            { value: 1, text: "불행" },
            { value: 0, text: "중립" },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam018",
        title: "에너지가 있나요?",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam019",
        title: "지난달 신체 활동(걷기, 자전거 타기 등)을 주당 최소 1시간 이상 했나요?",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam020",
        title: "지난 해 낙상한 적이 있나요?",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021",
        title: "이 설문지를 작성하는 데 도움을 받으셨나요?",
        choices: [
            { value: 1, text: '예' },
            { value: 0, text: '아니요' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021p1",
        title: "누가 도와줬나요?",
        choices: [
            {value: 1, text: "가족"},
            {value: 2, text: "친구"},
            {value: 3, text: "전문가"}
        ],
        visibleIf: "{cesam021} == 예",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021p2",
        title: "어떤 가족 구성원이 도움을 주었나요?",
        choices: [
            {value: 1, text: "배우자"},
            {value: 2, text: "파트너"},
            {value: 3, text: "자녀"},
            {value: 4, text: "기타"}
        ],
        visibleIf: "{cesam021p1} == 가족",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam022",
        title: "이 설문지에 본인 또는 다른 사람을 위해 답변하셨나요?",
        choices: [
            {value:1, text: "나 자신"},
            {value:2, text: "다른 사람"}
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam023",
        title: "만성 질환을 앓고 있는 사람의 간병인이신가요?",
        choices: [
            {value:2, text: "예"},
            {value:0, text: "아니요"}
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam023p1",
        title: "그 사람의 상태는 어떤가요?",
        choices: [
            {text: "알츠하이머병"},
            {text: "기타"}
        ],
        visibleIf: "{cesam023} == 예",
        isRequired: true,
        showClearButton: true
      },
    ],
  }]
};


var KR_cesam = {}
KR_cesam.title = title,
KR_cesam.shortTitle = shortTitle,
KR_cesam.survey_JSON = survey_JSON
KR_cesam.description = ""
KR_cesam.QuestionnaireType = 'Varied'
KR_cesam.references = "references"
KR_cesam.notes = ''
