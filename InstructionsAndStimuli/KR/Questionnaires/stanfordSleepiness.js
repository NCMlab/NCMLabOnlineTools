const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
    elements: [
      {
            "name": "time",
            "type": "text",
            "title": "마지막으로 잠든 시간",
            "inputType": "time",
            "isRequired": true
          },
          {
            "name": "time",
            "type": "text",
            "title": "마지막으로 깨어난 시간",
            "inputType": "time",
            "isRequired": true
          },
        {
            type: "html",
            name: "introduction",
            html: "<p style=\"text-align: justify;\">"+
            "<b>Instructions:</b> 다음 중 당신의 현재 느낌과 가장 가까운 번호에 동그라미를 하십시오."+
            "</p>"
           },
        {
          type: "radiogroup",
          name: "sleepiness001",
          title: "졸음 정도",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ 
            { value: 1, text: "최상의 상태는 아니지만 집중해서 일을 할 수 있다."}, 
            { value: 2, text: "전혀 졸립지 않고, 정신이 맑고 활기참을 느낀다."}, 
            { value: 3, text: "정신을 차리고는 있지만 다소 나른해진 상태이다."},
            { value: 4, text: "약간 정신이 몽롱하고 기운이 없다."},
            { value: 5, text: "몽롱해서 정신을 집중할 수가 없고, 정신을 계속 차리고 있기가 힘들다."},
            { value: 6, text: "졸립고 멍한 상태이며, 눕고 싶다."},
            { value: 7, text: "눈은 뜨고 있지만 깨어 있을 수가 없다. 금세 잠들 것 같다."} 
            ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        
      ],
    }]
      
    };
  
  
  var KR_stanfordSleepiness = {}
  KR_stanfordSleepiness.title = "주관적 졸음 평가 척도",
  KR_stanfordSleepiness.shortTitle = "Sleepiness"
  KR_stanfordSleepiness.survey_JSON = survey_JSON
  KR_stanfordSleepiness.description = ""
  KR_stanfordSleepiness.QuestionnaireType = 'Varied'
  KR_stanfordSleepiness.references = ""
  KR_stanfordSleepiness.notes = ''
  
  