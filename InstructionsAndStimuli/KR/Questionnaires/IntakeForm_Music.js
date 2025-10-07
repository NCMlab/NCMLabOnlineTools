
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
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "What units did you use for height?", 
          name: 'HeightUnits', 
          choices: [
                      'Inches',
                      'Centimeters',
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
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "What units did you use for weight?", 
          name: 'HeightUnits', 
          choices: [
                      'Pounds',
                      'Kilograms',
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
          isRequired: true,
        }, 
        {
          name: "LanguageProblemDescription",
          type: "comment",
          title: "언어 또는 의사소통에 어려움을 자세히 설명해 주세요.",
          visibleIf: "{LanguageProblem} == Yes",
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
          title: 'What is your marital status?',
          choices: 
          [   
              'Single',
              'Married',
              'Divorced',
              'Widowed'
          ],
          name: 'marital',
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
          title: 'Which of the following statements best describes the extent to which your needs are met currently?',
          choices: 
          [
            "Food, housing, clothing and medical needs are met - you can afford luxuries/there is money left over at the end of the month",
            "Food, housing, clothing and medical needs are met - you can not afford luxuries",
            "One of the basic needs (food, housing, clothing or medical care) are not met",
            "Two or more of the basic needs are not met",
            "I don't know"
          ],
          name: 'CurrentNeeds',
          isRequired: true,
       },
       {
          type: 'dropdown',
          title: 'Which of the following statements best describes the extent to which your needs were met during the majority of your adult life?',
          choices: 
          [
            "Food, housing, clothing and medical needs were met - you could afford luxuries",
            "Food, housing, clothing and medical needs were met - you could not afford luxuries",
            "One of the basic needs (food, housing, clothing or medical care) were not met",
            "Two or more of the basic needs were not met",
            "I don't know"
          ],
          name: 'PastNeeds',
          isRequired: true,
       }
       ]
     },
     {
       name: "Medical Information",
       title: "Medical Information",
       
       elements: [
        {
          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: 'Have you received a diagnosis of dementia or cognitive decline?',
          choices: 
          [
              "Yes",
              "No",
              "Not sure"
          ],
          isRequired: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'comment',
        title: 'If yes, how long ago were you diagnosed?',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == Yes",
        isRequired: true,
        textbox_rows: 3,
      },
      {
        type: 'comment',
        title: 'If yes, what type of dementia (or cognitive decline), if known?',
        name: 'DementiaType',
        visibleIf: "{CognDeclineDiagnosis} == Yes",
        required: false,
        textbox_rows: 3,
      },
      {
          type: 'dropdown',
          title: 'Do you have hearing loss?',
          choices: 
          [
              "Yes",
              "No",
              "Not sure"
          ],
          name: 'HearingLoss',
          isRequired: true,
          //add_other_option: true,                    
          //other_option_text: 'Yes, how long ago were you diagnosed?',
      },
      {
        type: 'dropdown',
        title: 'What type of hearing loss do you have?',
        choices: 
        [
            "Bilateral",
            "Unilateral",
            "Not sure"
        ],
        name: 'HearingLossType',
        visibleIf: "{HearingLoss} == Yes",
        required: false,
        //add_other_option: true,                    
        //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: 'What is your level of hearing loss?',
      choices: 
      [
          "Mild",
          "Moderate",
          "Severe",
          "Not sure"
      ],
      visibleIf: "{HearingLoss} == Yes",
      name: 'HearingLossLevel',
      required: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: 'Do you have any other health issues?',
      choices: 
      [
          "Yes",
          "No"
      ],
      name: 'OtherHealthIssues',
      isRequired: true,
    },
    {
      type: 'comment',
      title: 'Please explain your health issues.',
      name: 'OtherHealthIssuesDesc',
      visibleIf: "{OtherHealthIssues} == Yes",
      required: false,
      rows: 3,
    },
       ]
     },
     {
       name: "Habits",
       title: "Habits",
       
       elements: [
        {
          type: 'dropdown',
          title: 'How many days do you exercise per week?',
          choices: 
          [
              "0", "1","2","3","4","5","6","7"
          ],
          name: 'ExerciseFrequency',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: 'Have you exercised in the last 24 hours?',
          choices: 
          [
            "Yes",
            "No"
          ],
          name: 'Exercise24',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: 'Do you smoke, or have you smoked in the past?',
          choices: 
          [
            "Currently smoke",
              "Have not smoked for more than 1 year",
              "Never",
              "Unknown"
          ],
          name: 'Smoke',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: 'What year did you start smoking?',
          visibleIf: "{Smoke} == 'Currently smoke' or {Smoke} == 'Have not smoked for more than 1 year'",
          choicesMin: 1920,
          choicesMax: 2024,
          choicesStep:1,
          name: 'SmokeStart',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'What year did you quit smoking?',
          visibleIf: "{Smoke} == 'Have not smoked for more than 1 year'",
          choicesMin: 1920,
          choicesMax: 2024,
          choicesStep:1,
          name: 'SmokeQuit',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Approximately how many packs per day?',
          visibleIf: "{Smoke} == 'Currently smoke' or {Smoke} == 'Have not smoked for more than 1 year'",
          choices: ["0","0.5","1","2","3","4","5","6",">6"],
          name: 'SmokePacksPerDay',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Alcohol consumption',
          choices: 
          [
              "None",
              "Less than 2 drinks per day",
              "2 to 4 drinks per day",
              "More than 4 drinks per day"
          ],
          name: 'Alcohol',
          isRequired: true,
        },
      
  
       ]
     },
     {
      name: "Music Experience",
      title: "Music Experience",
      
      elements: [
          {
            type: 'dropdown',
            title: 'Have you engaged in music and movement classes before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'MusicMovement',
            isRequired: true,
          },
          {
            type: 'comment',
            title: 'Please describe your previous music and movement experience (what type of class and for how long).',
            name: 'MusicExperience',
            visibleIf: "{MusicMovement} == Yes",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Have you participated in group music classes before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'GroupMusic',
            isRequired: true,
          },
          {
            type: 'comment',
            title: 'Please describe your previous group music experience (what type of class and for how long).',
            name: 'GroupMusicExperience',
            visibleIf: "{GroupMusic} == Yes",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Have you been in a choir before?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'Choir',
            isRequired: true,
          },
          {
            type: 'comment',
            title: 'Please describe your previous choir experience (what type of choir and for how long).',
            name: 'ChoirExperience',
            visibleIf: "{Choir} == Yes",
            isRequired: true,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Do you have any other music experience (i.e. have you played a musical instrument at any time in your life on a regular basis)?',
            choices: 
            [
              "Yes",
              "No",
            ],
            name: 'OtherMusic',
            isRequired: true,
          },
          {
            type: 'comment',
            title: 'Which instrument(s) did you play?',
            name: 'WhichInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: 'At what age did you start playing the instrument(s)?',
            name: 'AgeStartInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: 'For how long did you play this instrument (years)?',
            name: 'YearsPlayInstrument',
            visibleIf: "{OtherMusic} == Yes",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Do you still play the instrument(s)?',
            choices: 
            [
              "Yes",
              "No",
            ],
            visibleIf: "{OtherMusic} == Yes",
            name: 'StillPlayInstrument',
            required: true,
          },
      ]
    },
    {
      name: "Additional Comments",
      title: "Additional Comments",
      
      elements: [
        {
          type: 'comment',
          title: 'Do you have any additional comments or information that you think might be relevant to this study and/or music classes?',
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
