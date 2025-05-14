const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
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
            html:  "<b>Instructions:</b> Select the scale rating that best describes how you feel <b>right now</b>"+
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
    }]
      
    };
  
  
  var EN_stanfordSleepinessJSON = {}
  EN_stanfordSleepinessJSON.title = "The Stanford Sleepiness Scale",
  EN_stanfordSleepinessJSON.shortTitle = "Sleepiness"
  EN_stanfordSleepinessJSON.survey_JSON = survey_JSON
  EN_stanfordSleepinessJSON.description = ""
  EN_stanfordSleepinessJSON.QuestionnaireType = 'Varied'
  EN_stanfordSleepinessJSON.references = ""
  EN_stanfordSleepinessJSON.notes = ''
  
  