const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
    pages: [{
    elements: [
        {
            "name": "timeAsleep",
            "type": "text",
            "title": "Last time asleep",
            "inputType": "time",
            "isRequired": true
          },
          {
            "name": "timeAwoke",
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
          choices: [ 
            { value: 1, text: "Feeling active, vital, alert, or wide awake"}, 
            { value: 2, text: "Functioning at high levels, but not at peak; able to concentrate"}, 
            { value: 3, text: "Awake, but relaxed; responsive but not fully alert"},
            { value: 4, text: "Somewhat foggy, let down"},
            { value: 5, text: "Foggy; losing interest in remaining awake; slowed down"},
            { value: 6, text: "Sleepy, woozy, fighting sleep; prefer to lie down"},
            { value: 7, text: "No longer fighting sleep, sleep onset soon; having dream-like thoughts"},
            { value: 8, text: "Asleep"}
           ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        
      ],
    }]
      
    };
  
  
  var EN_stanfordSleepiness = {}
  EN_stanfordSleepiness.title = "The Stanford Sleepiness Scale",
  EN_stanfordSleepiness.shortTitle = "Sleepiness"
  EN_stanfordSleepiness.survey_JSON = survey_JSON
  EN_stanfordSleepiness.description = ""
  EN_stanfordSleepiness.QuestionnaireType = 'Varied'
  EN_stanfordSleepiness.references = ""
  EN_stanfordSleepiness.notes = ''
  
  