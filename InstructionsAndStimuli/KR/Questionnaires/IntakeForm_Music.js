// KOREAN
var title = "인구 통계학적 설문지"
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "top",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  pages: 
  [
    {      
      name: "Demographic Information",
      title: "인구 통계 정보",
      elements: [
        {
          name: 'dem0101_gender',
          title: "성별",
          type: 'dropdown',
          choices: [
            {value: 1, text: '남성'},
            {value: 2, text: '여성'}
          ],
          showOtherItem: true,
          otherText: "기타 (설명)",
          placeholder: '선택하다...',
          isRequired: true
        },
        {
          name: "dem0102_age",
          title: "나이",
          type: "input",
          inputType: "number",
          min: 0,
          max: 150,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: "dem0103_height",
          title: "높이 (cm 또는 피트/인치)",
          type: "input",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: 'dem0103p1_heightU',
          title: "키를 표현하는 데 사용된 단위는 무엇입니까?",
          type: 'dropdown',
          choices: [
            {value: 1, text: '인치'},
            {value: 2, text: '센티미터'}
          ],
          showOtherItem: false,
          isRequired: true
        },
        {
          name: "dem0104_weight",
          title: "무게 (kg 또는 파운드)",
          type: "input",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: 'dem0104p1_weightU',
          title: "무게를 표현하는 데 어떤 단위를 사용하셨나요?",
          type: 'dropdown',
          choices: [
            {value: 1, text: '파운드'},
            {value: 2, text: '킬로그램'}
          ],
          showOtherItem: false,
          isRequired: true
        },
        {
          name: 'dem0105_edu',
          title: "수료한 교육 중 가장 높은 수준의 교육은 무엇인가요?",
          type: 'dropdown',
          choices: [
            {value: 1, text: '정규 교육 없음'},
            {value: 2, text: '고등학교 졸업장 또는 이와 동등한 학력'},
            {value: 3, text: '대학 또는 전문학교'},
            {value: 4, text: '학사 학위'},
            {value: 5, text: '석사 학위'},
            {value: 6, text: '박사 학위'}
          ],
          showOtherItem: true,
          isRequired: true
        },
        {
          name: 'dem0106_employ',
          title: "귀하의 고용 상태는 무엇입니까?",
          type: 'dropdown',
          choices: [
            {value: 1, text: '정규직 고용'},
            {value: 2, text: '파트타임 고용'},
            {value: 3, text: '은퇴'},
            {value: 4, text: '무직'}
          ],
          showOtherItem: true,
          isRequired: true
        },
        {
          name: 'dem0107_work',
          title: '어떤 종류의 일을 하고 계시나요 (또는 은퇴 전에 하셨나요)?',
          type: 'textarea',
          rows: 2,
          isRequired: true,
          autoGrow: true
        },
        {
          name: 'dem0108_live',
          title: "혼자 살고 있나요, 아니면 다른 사람과 함께 살고 있나요?",
          type: 'dropdown',
          choices: [
            {value: 1, text: '혼자'},
            {value: 2, text: '배우자/파트너와 함께'},
            {value: 3, text: '가족 구성원과 함께'},
            {value: 4, text: '간병인과 함께'},
            {value: 5, text: '생활 보조 시설에서'}
          ],
          showOtherItem: true,
          isRequired: true,
        },
        {
          name: 'dem0109_lang',
          title: '주 언어는 무엇인가요?',
          type: 'textarea',
          isRequired: true,
        },
        {
          name: "dem0110_langProb",
          title: "언어나 의사소통에 어려움이 있나요?",
          type: "dropdown",
          choices: [
            {value: 1, text: "예"},
            {value: 2, text: "아니요"}
          ],
          isRequired: true,
        },
        {
          name: "dem0110p1_langProbDesc",
          title: "언어 또는 의사소통에 어려움을 자세히 설명해 주세요.",
          type: "textarea",
          visibleIf: "{dem0110_langProb} == 예",
          maxLength: 500
        },
        {
          name: 'dem0111_ethn',
          title: "인종적 배경은 무엇인가요 (하나 이상 선택 가능)",
          type: "tagbox",
          choices: [
            '유럽인(예: 백인)',
            '아시아계(예: 중국, 일본, 한국, 동남아시아)',
            '동인도, 파키스탄인',
            '아프리카계 미국인/흑인/카리브해 출신',
            '히스패닉',
            '중동',
            '원주민, 메티스족, 이누이트족'
          ],
          description: "해당되는 모든 항목을 선택해 주세요.",
          isRequired: true,
        },
        {
          name: 'dem0112_marital',
          title: '결혼 상태는 어떻게 되나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '싱글'},
            {value: 2, text: '기혼'},
            {value: 3, text: '이혼'},
            {value: 4, text: '미망인'}
          ],
          showOtherItem: true,
          isRequired: true,
        },
        {
          name: 'dem0113_currNeed',
          title: '다음 중 현재 귀하의 요구가 어느 정도 충족되고 있는지를 가장 잘 설명하는 것은 무엇인가요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '음식, 주거, 의복 및 의료 요구가 충족됨 - 사치품을 살 여유가 있음/월말에 남은 돈이 있음'},
            {value: 2, text: '음식, 주거, 의복 및 의료 요구가 충족됨 - 사치품을 살 여유가 없음'},
            {value: 3, text: '기본 필요(음식, 주거, 의복 또는 의료) 중 하나가 충족되지 않음'},
            {value: 4, text: '기본 욕구 중 두 가지 이상이 충족되지 않음'},
            {value: 5, text: '모르겠음'}
          ],
          isRequired: true,
        },
        {
          name: 'dem0114_pastNeed',
          title: '다음 중 성인 생활의 대부분 동안 귀하의 욕구가 어느 정도 충족되었는지를 가장 잘 설명하는 것은 무엇입니까?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '음식, 주거, 의복 및 의료 요구가 충족됨 - 사치품을 살 여유가 있음'},
            {value: 2, text: '음식, 주거, 의복 및 의료 요구가 충족되었으나 사치품을 살 여유가 없음'},
            {value: 3, text: '기본 욕구(의식주, 의복, 의료) 중 하나가 충족되지 않음'},
            {value: 4, text: '기본 욕구 중 두 가지 이상이 충족되지 않았다.'},
            {value: 99, text: '모르겠음'}
          ],
          isRequired: true,
        }
      ]
    },

    {
      name: "Medical Information",
      title: "의료 정보",
      elements: [
        {
          name: 'dem0201_CogDecDiag',
          title: '치매 또는 인지 기능 저하 진단을 받은 적이 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "예"},
            {value: 2, text: "아니요"},
            {value: 3, text: "잘 모름"}
          ],
          isRequired: true,
        },
        {
          name: 'DementiaTime',
          title: '그렇다면 진단을 받은 지 얼마나 되었나요?',
          type: 'textarea',
          visibleIf: "{dem0201_CogDecDiag} == 예",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'DementiaType',
          title: '그렇다면 어떤 유형의 치매(또는 인지 기능 저하)인가요?',
          type: 'textarea',
          visibleIf: "{dem0201_CogDecDiag} == 예",
          required: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0204_HearLoss',
          title: '청력 손실이 있으신가요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "예"},
            {value: 2, text: "아니요"},
            {value: 3, text: "잘 모름"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0204p1_HearType',
          title: '당신은 어떤 유형의 청력 손실을 겪고 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '양방향'},
            {value: 2, text: '일방적'},
            {value: 99, text: '확실하지 않음'}
          ],
          visibleIf: "{dem0204_HearLoss} == 예",
          isRequired: false,
        },
        {
          name: 'dem0204p2_HearLevel',
          title: '청력 손실 수준',
          type: 'dropdown',
          choices: [
            {value: 1, text: "경도"},
            {value: 2, text: "보통"},
            {value: 3, text: "중증"},
            {value: 99, text: "확실하지 않음"}
          ],
          visibleIf: "{dem0204_HearLoss} == 예",
          isRequired: false,
        },
        {
          name: 'dem0205_OtherHealth',
          title: '다른 건강 문제가 있으신가요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '예'},
            {value: 2, text: '아니요'}
          ],
          isRequired: true,
        },
        {
          name: 'dem0205p1_OtherHealthDesc',
          title: '귀하의 건강 문제를 설명해 주세요.',
          type: 'textarea',
          visibleIf: "{dem0205_OtherHealth} == 예",
          isRequired: false,
          textbox_rows: 3,
        }
      ]
    },

    {
      name: "Habits",
      title: "습관",
      elements: [
        {
          name: 'dem0301_ExeFreq',
          title: '일주일에 며칠 정도 운동을 하나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "0"},
            {value: 1, text: "1"},
            {value: 1, text: "2"},
            {value: 1, text: "3"},
            {value: 1, text: "4"},
            {value: 1, text: "5"},
            {value: 1, text: "6"},
            {value: 1, text: "7"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0302_Exe24',
          title: '지난 24 시간 동안 운동을 하셨나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "예"},
            {value: 2, text: "아니요"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0303_Smoke',
          title: '담배를 피우거나 과거에 담배를 피운 적이 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "현재 흡연 중"},
            {value: 2, text: "년 이상 담배를 피우지 않음"},
            {value: 3, text: "전혀"},
            {value: 4, text: "모름"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0304p1_SmokeStart',
          title: '언제부터 흡연을 시작하셨나요?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == 현재 흡연 중; {dem0303_Smoke} == 년 이상 담배를 피우지 않음",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep: 1,
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0304p2_SmokeQuit',
          title: '언제 담배를 끊으셨나요?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == 년 이상 담배를 피우지 않음",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep: 1,
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0304p3_SmokePacks',
          title: '하루 대략적인 팩 수',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == 현재 흡연 중; {dem0303_Smoke} == 년 이상 담배를 피우지 않음",
          choices: [
            {value: 0, text: "0"},
            {value: 0.5, text: "0.5"},
            {value: 1, text: "1"},
            {value: 2, text: "2"},
            {value: 3, text: "3"},
            {value: 4, text: "4"},
            {value: 5, text: "5"},
            {value: 6, text: "6"},
            {value: 7, text: "&gt;6"}
          ],
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0305_Alc',
          title: '알코올 소비',
          type: 'dropdown',
          choices: [
            {value: 0, text: '없음'},
            {value: 1, text: '하루 2 잔 미만'},
            {value: 2, text: '하루 2~4 잔'},
            {value: 3, text: '하루 4 잔 이상'}
          ],
          isRequired: true,
        }
      ]
    },

    {
      name: "Music Experience",
      title: "음악 경험",
      elements: [
        {
          name: 'dem0401_MusCls',
          title: '음악과 움직임 수업에 참여한 적이 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '예'},
            {value: 2, text: '아니요'}
          ],
          isRequired: true,
        },
        {
          name: 'dem0401p1_MusClsExp',
          title: '이전 경험(어떤 유형의 수업과 기간)을 설명해 주세요.',
          type: 'textarea',
          visibleIf: "{dem0401_MusCls} == 예",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0402_MusGrp',
          title: '그룹 음악 수업에 참여한 적이 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '예'},
            {value: 2, text: '아니요'}
          ],
          isRequired: true,
        },
        {
          name: 'dem0402p1_MusGrpExp',
          title: '이전 경험(어떤 유형의 수업과 기간)을 설명해 주세요.',
          type: 'textarea',
          visibleIf: "{dem0402_MusGrp} == 예",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0403_MusChr',
          title: '합창단 활동을 해본 적이 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '예'},
            {value: 2, text: '아니요'}
          ],
          isRequired: true,
        },
        {
          name: 'dem0403p1_MusChrExp',
          title: '이전 경험(어떤 합창단에서 얼마나 오래 활동했는지)을 설명해 주세요.',
          type: 'textarea',
          visibleIf: "{dem0403_MusChr} == 예",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0404_MusOth',
          title: '다른 음악 경험(즉, 평소에 정기적으로 악기를 연주해 본 적이 있나요?)이 있나요?',
          type: 'dropdown',
          choices: [
            {value: 1, text: '예'},
            {value: 2, text: '아니요'}
          ],
          isRequired: true,
        },
        {
          name: 'dem0405p1_MusOthInst',
          title: '어떤 악기인가요?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == 예",
          required: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p2_MusOthInsAge',
          title: '몇 살에 시작했나요?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == 예",
          required: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p3_MusOthInsYrs',
          title: '이 악기를 얼마나 오랫동안 연주했나요(년)?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == 예",
          required: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p4_MusOthCur',
          title: '지금도 연주하시나요?',
          type: 'dropdown',
          visibleIf: "{dem0404_MusOth} == 예",
          choices: [
            {value: 1, text: '예'},
            {value: 2, text: '아니요'}
          ],
          required: true,
        }
      ]
    },

    {
      name: "Additional Comments",
      title: "추가 의견",
      elements: [
        {
          name: 'dem0501_Comments',
          title: '이 연구 및/또는 음악 수업과 관련이 있다고 생각되는 추가 의견이나 정보가 있으신가요?',
          type: 'textarea',
          required: false,
          textbox_rows: 5,
        }
      ]
    }
  ]
}

var KR_IntakeForm_Music = {}
KR_IntakeForm_Music.title = title;
KR_IntakeForm_Music.survey_JSON = json;
KR_IntakeForm_Music.shortTitle = shortTitle
KR_IntakeForm_Music.QuestionnaireType = 'Varied'
