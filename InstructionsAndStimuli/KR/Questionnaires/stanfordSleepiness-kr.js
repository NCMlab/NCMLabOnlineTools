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
          choices: [ "전혀 졸립지 않고, 정신이 맑고 활기참을 느낀다.", 
            "최상의 상태는 아니지만 집중해서 일을 할 수 있다.", 
            "정신을 차리고는 있지만 다소 나른해진 상태이다.",
            "약간 정신이 몽롱하고 기운이 없다.",
            "몽롱해서 정신을 집중할 수가 없고, 정신을 계속 차리고 있기가 힘들다.",
            "졸립고 멍한 상태이며, 눕고 싶다.",
            "눈은 뜨고 있지만 깨어 있을 수가 없다. 금세 잠들 것 같다.", ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        
      ],
    }]
      
    };
  
  
  var EN_stanfordSleepinessJSON = {}
  EN_stanfordSleepinessJSON.title = "주관적 졸음 평가 척도",
  EN_stanfordSleepinessJSON.shortTitle = "Sleepiness"
  EN_stanfordSleepinessJSON.survey_JSON = survey_JSON
  EN_stanfordSleepinessJSON.description = ""
  EN_stanfordSleepinessJSON.QuestionnaireType = 'Varied'
  EN_stanfordSleepinessJSON.references = ""
  EN_stanfordSleepinessJSON.notes = ''
  
  