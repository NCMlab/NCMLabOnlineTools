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
          choices: [ "En pleine forme et plein de vitalité, alerte, très bien éveillé", 
            "En très bonne forme mais pas en pleine forme ; capable de se concentrer", 
            "Détendu, éveillé ; pas pleinement alerte, apte à réagir",
            "Un peu nébuleux, pas en pleine forme, tendance à se laisser aller",
            "Nébuleux ; commence à ne pas chercher à rester éveillé; ralenti",
            "Somnolence ; préfère demeurer allongé, combat le sommeil, engourdi",
            "Presque en train de rever, sommeil imminent, ne lutte plus pour rester éveillé",
            "Endormi" ],
          separateSpecialChoices: true,
          showClearButton: true
        },
        
      ],
    }]
      
    };
  
  
  var EN_stanfordSleepinessJSON = {}
  EN_stanfordSleepinessJSON.title = "Échelle de somnolence de Stanford",
  EN_stanfordSleepinessJSON.shortTitle = "Sleepiness"
  EN_stanfordSleepinessJSON.survey_JSON = survey_JSON
  EN_stanfordSleepinessJSON.description = ""
  EN_stanfordSleepinessJSON.QuestionnaireType = 'Varied'
  EN_stanfordSleepinessJSON.references = ""
  EN_stanfordSleepinessJSON.notes = ''
  
  