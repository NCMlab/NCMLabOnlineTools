
var title = "인구통계학적 설문지 (참가자용)"
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: [
     {
      
      name: "Demographic Information",
      title: "인구통계학적 정보",
       elements: [
        {
          type: 'dropdown',
          title: "성별", 
          name: 'Gender', 
          choices: [
                      '남성',
                      '여성',
              ],
          showOtherItem: true,
          required: true,
        },
        {
          name: "Height",
          type: "text",
          title: "키를 인치 또는 센티미터 단위로 입력합니다",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: 0,
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "키는 어떤 단위를 사용했나요?", 
          name: 'HeightUnits', 
          choices: [
                      '인치',
                      '센티미터',
              ],
          showOtherItem: false,
          required: true,
        },
        {
          name: "Weight",
          type: "text",
          title: "체중을 파운드 또는 킬로그램 단위로 입력합니다",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: 0,
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "무게는 어떤 단위를 사용했나요?", 
          name: 'WeightUnits', 
          choices: [
                      '파운드',
                      '킬로그램',
              ],
          showOtherItem: false,
          required: true,
        },
        {
          type: 'dropdown',
          title: "최종 학력은 무엇인가요?", 
          name: 'Edu', 
          choices: [
                      '공식 교육 경험 없음',
                      '고등학교 졸업 혹은 이와 동등한 학력',
                      '전문대/직업학교',
                      '학사 학위',
                      '석사 학위',
                      '박사 학위'
              ],
          showOtherItem: true,
          required: true,
        },
        {
          type: 'dropdown',
          title: "현재 고용 상태는 어떠신가요?", 
          name: 'Employ', 
          choices: [
                      '정규직',
                      '시간제 근무',
                      '은퇴',
                      '실업'
              ],
          showOtherItem: true,
          required: true,
        },
        {
          type: 'comment',
          title: 'What was your occupation (current or before retirement)?',
          name: 'WorkType',
          rows: 2,
          required: true,
          autoGrow: true
        },          
        {
          type: 'dropdown',
          title: "혼자 사시나요, 아니면 다른 사람과 함께 사시나요?", 
          name: 'Living', 
          choices: [
                  '혼자',
                  '배우자/파트너와 함께',
                  '가족과 함께',
                  '간병인과 함께',
                  '요양시설'
              ],
          showOtherItem: true,
          required: true,
        },
        {
          type: 'text',
          title: '주 사용 언어는 무엇인가요?',
          name: 'PrimaryLanguage',
          required: true,
        },
        {
          name: "LanguageProblem",
          type: "dropdown",
          title: "언어나 의사소통에 어려움이 있으신가요?",
          choices: ["예", "아니오"]
        }, 
        {
          name: "LanguageProblemDescription",
          type: "comment",
          title: "'예'인 경우 구체적으로 설명해주세요",
          visibleIf: "{LanguageProblem} == 예",
          maxLength: 500
        },
        {
          type: "tagbox",
          isRequired: true,
          choices: [
              '유럽계 (예: 백인)',
              '아시아계 (예: 중국, 일본, 한국, 동남아 등)',
              '인도/파키스탄계',
              '아프리카계 미국인/흑인/카리브계 ',
              '히스패닉계',
              '중동계',
              '원주민/메티스/이누이트',
              ],
          name: 'Ethnicity',
          title: "민족적 배경은 무엇인가요? (복수선택 가능)",
          "description": "해당되는 항목을 모두 선택해 주세요."
        },
        {
          type: 'dropdown',
          title: '혼인 상태는 어떻게 되시나요?',
          choices: 
          [   
              '미혼',
              '기혼',
              '이혼',
              '사별'
          ],
          name: 'marital',
          showOtherItem: true,                    
          required: true,
        },
        {
          type: 'dropdown',
          title: '현재 기본적인 생계가 얼마나 충족되나요?',
          choices: 
          [
              "기본적인 필요(음식, 주거, 의류, 의료)가 충족됨-사치품을 살 여유가 있음/ 월말에 남은돈이 있음",
              "기본적인 필요(음식, 주거, 의류, 의료)는 충족되지만 사치품을 살 여유가 없음",
              "기본적인 필요(음식, 주거, 의류, 의료) 중 한 가지가 충족되지 않음",
              "기본적인 필요(음식, 주거, 의류, 의료) 중 두 가지 이상이 충족되지 않음",
              "잘 모르겠음",
          ],
          name: 'NeedsCurrently',
          required: true,
        },
        {
            type: 'dropdown',
            title: '성인기 대부분 동안의 생계 수준은 어떠셨나요?',
            choices: 
            [
                "기본적인 필요(음식, 주거, 의류, 의료)가 충족됨-사치품을 살 여유가 있음/ 월말에 남은돈이 있음",
                "기본적인 필요(음식, 주거, 의류, 의료)는 충족되지만 사치품을 살 여유가 없음",
                "기본적인 필요(음식, 주거, 의류, 의료) 중 한 가지가 충족되지 않음",
                "기본적인 필요(음식, 주거, 의류, 의료) 중 두 가지 이상이 충족되지 않음",
                "잘 모르겠음",
            ],
            name: 'NeedsAdult',
            required: true,
          }
       ]
     },
     {
       name: "Medical Information",
       title: "건강 정보",
       
       elements: [
        {
          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: '치매나 인지 저하 진단을 받은 적이 있나요?',
          choices: 
          [
              "예",
              "아니오",
              "잘 모르겠음"
          ],
          required: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'comment',
        title: '그렇다면 진단받은 지 얼마나 되었나요??',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == 예",
        required: false,
        textbox_rows: 3,
      },
      {
        type: 'comment',
        title: 'If yes, what type of dementia/cognitive decline has been diagnosed (if known)?',
        name: 'DementiaType',
        visibleIf: "{CognDeclineDiagnosis} == 예",
        required: false,
        textbox_rows: 3,
      },
      {
          type: 'dropdown',
          title: '청력 손실이 있으신가요?',
          choices: 
          [
              "예",
              "아니오",
              "확실하지 않음"
          ],
          name: 'HearingLoss',
          required: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'dropdown',
        title: '어떤 유형의 청력 손실이 있나요?',
        choices: 
        [
            "양쪽",
            "한쪽",
            "모름"
        ],
        name: 'HearingLossType',
        visibleIf: "{HearingLoss} == 예",
        required: false,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: '청력 손실 정도는 어느 정도인가요?',
      choices: 
      [
          "경도",
          "중등도",
          "심각",
          "확실히 모름"
      ],
      visibleIf: "{HearingLoss} == 예",
      name: 'HearingLossLevel',
      required: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: ' 다른 건강 문제가 있으신가요?',
      choices: 
      [
          "예",
          "아니오"
      ],
      name: 'OtherHealthIssues',
      required: true,
    },
    {
      type: 'comment',
      title: '있다면 구체적으로 설명해 주세요',
      name: 'OtherHealthIssues',
      visibleIf: "{OtherHealthIssues} == 예",
      required: false,
      textbox_rows: 3,
    },
       ]
     },
     {
       name: "Habits",
       title: "생활 습관",
       
       elements: [
        {
          type: 'dropdown',
          title: '주 몇 회 운동하시나요?',
          choices: 
          [
              "0","1","2","3","4","5","6","7"
          ],
          name: 'ExerciseFrequency',
          required: true,
        },
        {
          type: 'dropdown',
          title: '지난 24시간 동안 운동하셨나요?',
          choices: 
          [
            "예",
            "아니오"
          ],
          name: 'Exercise24',
          required: true,
        },
        {
          type: 'dropdown',
          title: '흡연 중이거나 과거에 흡연한 적이 있나요?',
          choices: 
          [
              "현재 흡연 중",
              "1년 이상 금연 중",
              "비흡연자",
              "모름"
          ],
          name: 'Smoke',
          required: true,
        },
        {
          type: 'dropdown',
          title: '몇 년도에 흡연을 시작하셨나요?',
          visibleIf: "{Smoke} == '현재 흡연 중' or {Smoke} == '1년 이상 금연 중'",
          choicesMin: 1920,
          choicesMax: 2024,
          choicesStep:1,
          name: 'SmokeStart',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: '몇 년도에 담배를 끊으셨나요?',
          visibleIf: "{Smoke} == '1년 이상 금연 중'",
          choicesMin: 1920,
          choicesMax: 2024,
          choicesStep:1,
          name: 'SmokeQuit',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: '하루에 대략 몇 팩을 먹어야 하나요?',
          visibleIf: "{Smoke} == '현재 흡연 중' or {Smoke} == '1년 이상 금연 중'",
          choices: ["0","0.5","1","2","3","4","5","6",">6"],
          name: 'SmokePacksPerDay',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'How often do you drink?',
          choices: 
          [
              "없음",
              "하루 2잔 미만",
              "하루 2~4잔",
              "하루 4잔 이상"
          ],
          name: 'Alcohol',
          required: true,
        },
      
  
       ]
     },
     {
      name: "Music Experience",
      title: "음악 경험",
      
      elements: [
          {
            type: 'dropdown',
            title: 'Have you ever participated in a music and movement class?',
            choices: 
            [
              "예",
              "아니오",
            ],
            name: 'MusicMovement',
            required: true,
          },
          {
            type: 'comment',
            title: '있다면 이전 경험(어떤 유형의 수업이었는지, 얼마동안 참가했는지)에 대해 설명해주세요.',
            name: 'MusicExperience',
            visibleIf: "{MusicMovement} == 예",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '그룹 음악 수업 경험에 참여한 경험이 있으신가요?',
            choices: 
            [
              "예",
              "아니오",
            ],
            name: 'GroupMusic',
            required: true,
          },
          {
            type: 'comment',
            title: '있다면 이전 경험(어떤 유형의 수업이었는지, 얼마동안 참가했는지)에 대해 설명해주세요.',
            name: 'GroupMusicExperience',
            visibleIf: "{GroupMusic} == 예",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '합창단 활동을 해본 적이 있나요?',
            choices: 
            [
              "예",
              "아니오",
            ],
            name: 'Choir',
            required: true,
          },
          {
            type: 'comment',
            title: '있다면 이전 경험(어떤 유형의 합창단이었는지, 얼마나 오래 활동했는지)에 대해 설명해주세요.',
            name: 'ChoirExperience',
            visibleIf: "{Choir} == 예",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '있다면 이전 경험(어떤 유형의 합창단이었는지, 얼마나 오래 활동했는지)에 대해 설명해주세요.',
            choices: 
            [
              "예",
              "아니오",
            ],
            name: 'OtherMusic',
            required: true,
          },
          {
            type: 'comment',
            title: '어떤 악기를 연주했나요?',
            name: 'WhichInstrument',
            visibleIf: "{OtherMusic} == 예",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: '몇 살에 시작했나요?',
            name: 'AgeStartInstrument',
            visibleIf: "{OtherMusic} == 예",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: '그 악기를 얼마나 오랫동안 연주했나요?(년)',
            name: 'YearsPlayInstrument',
            visibleIf: "{OtherMusic} == 예",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '지금도 연주하시나요?',
            choices: 
            [
              "예",
              "아니오",
            ],
            visibleIf: "{OtherMusic} == 예",
            name: 'StillPlayInstrument',
            required: true,
          },
      ]
    },
    {
      name: "Additional Comments",
      title: "추가 의견",
      
      elements: [
        {
          type: 'comment',
          title: '이 연구 또는 음악 수업과 관련하여 추가로 공유하고 싶은 의견이나 정보가 있나요?',
          name: 'AdditionalCOmments',
          required: false,
          textbox_rows: 5,
        }
      ]
    }
   ]
 }


var EN_IntakeForm_MusicJSON = {}
EN_IntakeForm_MusicJSON.title = title;
EN_IntakeForm_MusicJSON.survey_JSON = json;
EN_IntakeForm_MusicJSON.shortTitle = shortTitle
EN_IntakeForm_MusicJSON.QuestionnaireType = 'Varied'
EN_IntakeForm_MusicJSON.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]
