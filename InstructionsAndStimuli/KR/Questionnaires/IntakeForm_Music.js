
// KOREAN
var title = "인구 통계학적 설문지"
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1


const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pageNextText: '다음 페이지',
   pagePrevText: '이전 페이지',
   completeText: '설문조사 완료',
   requiredError: '응답이 필요해요',
   pages: 
   [
    /*{
      name: "Name",
      title: "Name",
      
      elements: [
        {
          type: 'comment',
          title: 'Enter first name and initial of last name',
          name: 'Name',
          required: true,
          textbox_rows: 1,
        }
      ]
    },*/
    {      
      name: "Demographic Information",
      title: "인구 통계 정보",
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
          otherText: "기타 (설명)",
          placeholder: '선택하다...',
          isRequired: true
        },
        {
          name: "Height",
          type: "text",
          title: "높이 (cm 또는 피트/인치)",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: '',
          isRequired: true,
          maxErrorText: '값은 300을 초과할 수 없습니다.'
        }, // Make sure the warning is in the correct language
        {
          type: 'dropdown',
          title: "키를 표현하는 데 사용된 단위는 무엇입니까?", 
          name: 'HeightUnits', 
          choices: [
                      '인치',
                      '센티미터',
              ],
          showOtherItem: false,
          placeholder: '선택하다...',
          isRequired: true
        },
        {
          name: "Weight",
          type: "text",
          title: "무게 (kg 또는 파운드)",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: '',
          isRequired: true,
          maxErrorText: '값은 1000을 초과할 수 없습니다.'
        },
        {
          type: 'dropdown',
          title: "무게를 표현하는 데 어떤 단위를 사용하셨나요?", 
          name: 'HeightUnits', 
          choices: [
                      '파운드',
                      '킬로그램',
              ],
          showOtherItem: false,
          placeholder: '선택하다...',
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "수료한 교육 중 가장 높은 수준의 교육은 무엇인가요?", 
          name: 'Edu', 
          choices: [
                      '정규 교육 없음',
                      '고등학교 졸업장 또는 이와 동등한 학력',
                      '대학 또는 전문학교',
                      '학사 학위',
                      '석사 학위',
                      '박사 학위'
              ],
          showOtherItem: true,
          otherText: '기타',
          placeholder: '선택하다...',
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "귀하의 고용 상태는 무엇입니까?", 
          name: 'Employ', 
          choices: [
                      '정규직 고용',
                      '파트타임 고용',
                      '은퇴',
                      '무직'
              ],
          showOtherItem: true,
          otherText: '기타',
          placeholder: '선택하다...',
          isRequired: true
        },
        {
          type: 'comment',
          title: '어떤 종류의 일을 하고 계시나요 (또는 은퇴 전에 하셨나요)?',
          name: 'WorkType',
          rows: 2,
          isRequired: true,
          autoGrow: true
        },          
        {
          type: 'dropdown',
          title: "혼자 살고 있나요, 아니면 다른 사람과 함께 살고 있나요?", 
          name: 'Living', 
          choices: [
                  '혼자',
                  '배우자/파트너와 함께',
                  '가족 구성원과 함께',
                  '간병인과 함께',
                  '생활 보조 시설에서'
              ],
          showOtherItem: true,
          otherText: '기타',
          placeholder: '선택하다...',
          isRequired: true,
        },
        {
          type: 'text',
          title: '주 언어는 무엇인가요?',
          name: 'PrimaryLanguage',
          isRequired: true,
        },
        {
          name: "LanguageProblem",
          type: "dropdown",
          title: "언어나 의사소통에 어려움이 있나요?",
          choices: ["예", "아니요"],
          placeholder: '선택하다...',
          isRequired: true,
        }, 
        {
          name: "LanguageProblemDescription",
          type: "comment",
          title: "언어 또는 의사소통에 어려움을 자세히 설명해 주세요.",
          visibleIf: "{LanguageProblem} == '예'",
          maxLength: 500
        },
        {
          type: "tagbox",
          isRequired: true,
          choices: [
              '유럽인(예: 백인)',
              '아시아계(예: 중국, 일본, 한국, 동남아시아)',
              '동인도, 파키스탄인',
              '아프리카계 미국인/흑인/카리브해 출신',
              '히스패닉',
              '중동',
              '원주민, 메티스족, 이누이트족',
              ],
          name: 'Ethnicity',
          title: "인종적 배경은 무엇인가요 (하나 이상 선택 가능)",
          "description": "해당되는 모든 항목을 선택해 주세요.",
          otherText: '기타',
          placeholder: '선택하다...',

        },
        {
          type: 'dropdown',
          title: '결혼 상태는 어떻게 되나요?',
          choices: 
          [   
              '싱글',
              '기혼',
              '이혼',
              '미망인',
          ],
          name: 'marital',
          otherText: '기타 (지정해 주세요)',
          placeholder: '선택하다...',
          showOtherItem: true,                    
          isRequired: true,
        },
        /*{
          type: 'dropdown',
          title: 'What is your annual household income?',
          choices: 
          [
              "Less than $20,000",
              "$20,000 - $40,000",
              "$40,001 - $60,000",
              "$60,001 - $80,000",
              "$80,001 - $100,000",
              "Above $100,000"
          ],
          name: 'Income',
          required: true,
        }*/
       {
          type: 'dropdown',
          title: '다음 중 현재 귀하의 요구가 어느 정도 충족되고 있는지를 가장 잘 설명하는 것은 무엇인가요?',
          choices: 
          [
            '음식, 주거, 의복 및 의료 요구가 충족됨 - 사치품을 살 여유가 있음/월말에 남은 돈이 있음',
            '음식, 주거, 의복 및 의료 요구가 충족됨 - 사치품을 살 여유가 없음',
            '기본 필요(음식, 주거, 의복 또는 의료) 중 하나가 충족되지 않음',
            '기본 욕구 중 두 가지 이상이 충족되지 않음',
            '모르겠음'
          ],
          name: 'CurrentNeeds',
          placeholder: '선택하다...',
          isRequired: true,
       },
       {
          type: 'dropdown',
          title: '다음 중 성인 생활의 대부분 동안 귀하의 욕구가 어느 정도 충족되었는지를 가장 잘 설명하는 것은 무엇입니까?',
          choices: 
          [
            '음식, 주거, 의복 및 의료 요구가 충족됨 - 사치품을 살 여유가 있음',
            '음식, 주거, 의복 및 의료 요구가 충족되었으나 사치품을 살 여유가 없음',
            '기본 욕구(의식주, 의복, 의료) 중 하나가 충족되지 않음',
            '기본 욕구 중 두 가지 이상이 충족되지 않았다.',
            '모르겠음'
          ],
          name: 'PastNeeds',
          placeholder: '선택하다...',
          isRequired: true,
       }
       ]
     },
     {
       name: "Medical Information",
       title: "의료 정보",
       
       elements: [
        {
          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: '치매 또는 인지 기능 저하 진단을 받은 적이 있나요?',
          choices: 
          [
              "예",
              "아니요",
              "잘 모름"
          ],
          placeholder: '선택하다...',
          isRequired: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'comment',
        title: '그렇다면 진단을 받은 지 얼마나 되었나요?',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == '예'",
        isRequired: true,
        textbox_rows: 3,
      },
      {
        type: 'comment',
        title: '그렇다면 어떤 유형의 치매(또는 인지 기능 저하)인가요?',
        name: 'DementiaType',
        visibleIf: "{CognDeclineDiagnosis} == '예'",
        required: false,
        textbox_rows: 3,
      },
      {
          type: 'dropdown',
          title: '청력 손실이 있으신가요?',
          choices: 
          [
              "예",
              "아니요",
              "잘 모름"
          ],
          name: 'HearingLoss',
          isRequired: true,
          placeholder: '선택하다...',
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'dropdown',
        title: '당신은 어떤 유형의 청력 손실을 겪고 있나요?',
        choices: 
        [
            '양방향',
            '일방적',
            '확실하지 않음',

        ],
        name: 'HearingLossType',
        visibleIf: "{HearingLoss} == '예'",
        required: false,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: '청력 손실 수준',
      choices: 
      [
          "경도",
          '보통',
          '중증',
          '확실하지 않음'
      ],
      visibleIf: "{HearingLoss} == '예'",
      name: 'HearingLossLevel',
      required: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: '다른 건강 문제가 있으신가요?',
      choices: 
      [
          '예',
          '아니요'
      ],
      name: 'OtherHealthIssues',
      isRequired: true,
    },
    {
      type: 'comment',
      title: '귀하의 건강 문제를 설명해 주세요.',
      name: 'OtherHealthIssuesDesc',
      visibleIf: "{OtherHealthIssues} == '예'",
      required: false,
      rows: 3,
    },
       ]
     },
     {
       name: "Habits",
       title: "습관",
       
       elements: [
        {
          type: 'dropdown',
          title: '일주일에 며칠 정도 운동을 하나요?',
          choices: 
          [
              "0", "1","2","3","4","5","6","7"
          ],
          name: 'ExerciseFrequency',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: '지난 24 시간 동안 운동을 하셨나요?',
          choices: 
          [
            '예',
            '아니요'
          ],
          name: 'Exercise24',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: '담배를 피우거나 과거에 담배를 피운 적이 있나요?',
          choices: 
          [
            '현재 흡연 중',
            '년 이상 담배를 피우지 않음',
            '전혀',
            '모름'
          ],
          name: 'Smoke',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: '언제부터 흡연을 시작하셨나요?',
          visibleIf: "{Smoke} == '현재 흡연 중' or {Smoke} == '년 이상 담배를 피우지 않음'",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          name: 'SmokeStart',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: '언제 담배를 끊으셨나요?',
          visibleIf: "{Smoke} == '년 이상 담배를 피우지 않음'",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          name: 'SmokeQuit',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: '하루 대략적인 팩 수',
          visibleIf: "{Smoke} == '현재 흡연 중' or {Smoke} == '년 이상 담배를 피우지 않음'",
          choices: ["0","0.5","1","2","3","4","5","6",">6"],
          name: 'SmokePacksPerDay',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: '알코올 소비',
          choices: 
          [
            '없음',
            '하루 2 잔 미만',
            '하루 2~4 잔',
            '하루 4 잔 이상'          
          ],
          name: 'Alcohol',
          isRequired: true,
        },
       ]
     },
     {
      name: "Music Experience",
      title: "음악 경험",
      
      elements: [
          {
            type: 'dropdown',
            title: '음악과 움직임 수업에 참여한 적이 있나요?',
            choices: 
            [
              '예',
              '아니요'
            ],
            name: 'MusicMovement',
            isRequired: true,
          },
          {
            type: 'comment',
            title: '이전 경험(어떤 유형의 수업과 기간)을 설명해 주세요.',
            name: 'MusicExperience',
            visibleIf: "{MusicMovement} == '예'",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '그룹 음악 수업에 참여한 적이 있나요?',
            choices: 
            [
              '예',
              '아니요'
            ],
            name: 'GroupMusic',
            isRequired: true,
          },
          {
            type: 'comment',
            title: '이전 경험(어떤 유형의 수업과 기간)을 설명해 주세요.',
            name: 'GroupMusicExperience',
            visibleIf: "{GroupMusic} == '예'",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '합창단 활동을 해본 적이 있나요?',
            choices: 
            [
              '예',
              '아니요'
            ],
            name: 'Choir',
            isRequired: true,
          },
          {
            type: 'comment',
            title: '이전 경험(어떤 합창단에서 얼마나 오래 활동했는지)을 설명해 주세요.',
            name: 'ChoirExperience',
            visibleIf: "{Choir} == '예'",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '다른 음악 경험(즉, 평소에 정기적으로 악기를 연주해 본 적이 있나요?)이 있나요?',
            choices: 
            [
              '예',
              '아니요'
            ],
            name: 'OtherMusic',
            isRequired: true,
          },
          {
            type: 'comment',
            title: '어떤 악기인가요?',
            name: 'WhichInstrument',
            visibleIf: "{OtherMusic} == '예'",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: '몇 살에 시작했나요?',
            name: 'AgeStartInstrument',
            visibleIf: "{OtherMusic} == '예'",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: '이 악기를 얼마나 오랫동안 연주했나요(년)?',
            name: 'YearsPlayInstrument',
            visibleIf: "{OtherMusic} == '예'",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: '지금도 연주하시나요?',
            choices: 
            [
              "예",
              "아니요",
            ],
            visibleIf: "{OtherMusic} == '예'",
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
          title: '이 연구 및/또는 음악 수업과 관련이 있다고 생각되는 추가 의견이나 정보가 있으신가요?',
          name: 'AdditionalCOmments',
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
