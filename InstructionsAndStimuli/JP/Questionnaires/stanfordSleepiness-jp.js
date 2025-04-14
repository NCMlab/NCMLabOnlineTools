const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
    elements: [
      {
            "name": "time",
            "type": "text",
            "title": "最後の眠り",
            "inputType": "time",
            "isRequired": true
          },
          {
            "name": "time",
            "type": "text",
            "title": "前回の目覚め",
            "inputType": "time",
            "isRequired": true
          },
        {
            type: "html",
            name: "introduction",
            html: "<p style=\"text-align: justify;\">"+
            "<b>Instructions:</b> 現在のあなたの眠気について、最も近いものを一つ選び番号に丸をつけて下さい"+
            "</p>"
           },
        {
          type: "radiogroup",
          name: "sleepiness001",
          title: "眠気度",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ "やる気があり、活発で、頭がさえていて、眠くない感じ", 
            "最高とはいえないまでも、頭の働きが活発、集中していられる", 
            "くつろいで起きている、しかしどちらかというとすこし頭がぼんやりし反応が悪い",
            "すこしぼんやりしていて、何かしたいと思わない",
            "ぼんやりしている、集中していられない、起きているのが困難",
            "眠いので横になりたい、ぼおっとしている",
            "まどろんでいる、起きていられない、すぐにねむってしまいそうだ", ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        
      ],
    }]
      
    };
  
  
  var EN_stanfordSleepinessJSON = {}
  EN_stanfordSleepinessJSON.title = "スタンフォード眠気尺度日本語版",
  EN_stanfordSleepinessJSON.shortTitle = "Sleepiness"
  EN_stanfordSleepinessJSON.survey_JSON = survey_JSON
  EN_stanfordSleepinessJSON.description = ""
  EN_stanfordSleepinessJSON.QuestionnaireType = 'Varied'
  EN_stanfordSleepinessJSON.references = ""
  EN_stanfordSleepinessJSON.notes = ''
  
  