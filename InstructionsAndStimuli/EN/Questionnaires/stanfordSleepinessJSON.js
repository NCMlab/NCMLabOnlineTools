const survey_JSON = {
    showQuestionNumbers: "off",
    showCompletedPage: false,
    elements: [
        {
            "name": "time",
            "type": "text",
            "title": "Last time asleep",
            "inputType": "time",
            "isRequired": true
          },
          {
            "name": "time",
            "type": "text",
            "title": "Last time awoke",
            "inputType": "time",
            "isRequired": true
          },
        {
            type: "html",
            name: "introduction",
            html: "<p style=\"text-align: justify;\">"+
            "<b>Instructions:</b> Select the scale rating that best describes how you feel <b>right now</b>"+
            "</p>"
           },
        {
          type: "radiogroup",
          name: "sleepiness001",
          title: "Degree of Sleepiness",
          isRequired: true,
          showNoneItem: false,
          showOtherItem: false,
          colCount: 1,
          choices: [ "Feeling active, vital, alert, or wide awake", 
            "Functioning at high levels, but not at peak; able to concentrate", 
            "Awake, but relaxed; responsive but not fully alert",
            "Somewhat foggy, let down",
            "Foggy; losing interest in remaining awake; slowed down",
            "Sleepy, woozy, fighting sleep; prefer to lie down",
            "No longer fighting sleep, sleep onset soon; having dream-like thoughts",
            "Asleep" ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        
      ],
      showQuestionNumbers: false,
      showCompletedPage: false
    };
  
  
  var EN_stanfordSleepinessJSON = {}
  EN_stanfordSleepinessJSON.title = "Which is the brand of your car?",
  EN_stanfordSleepinessJSON.shortTitle = "car"
  EN_stanfordSleepinessJSON.survey_JSON = survey_JSON
  EN_stanfordSleepinessJSON.description = ""
  EN_stanfordSleepinessJSON.QuestionnaireType = 'likert'
  EN_stanfordSleepinessJSON.references = "references"
  EN_stanfordSleepinessJSON.notes = ''
  
  