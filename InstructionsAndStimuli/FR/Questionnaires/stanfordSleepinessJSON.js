const survey_JSON = {
    showQuestionNumbers: false,
    showCompletedPage: false,
    pages: [{
    elements: [
      {
            "name": "time",
            "type": "text",
            "title": "Dernière fois endormi(e)",
            "inputType": "time",
            "isRequired": true
          },
          {
            "name": "time",
            "type": "text",
            "title": "Dernière fois réveillé(e)",
            "inputType": "time",
            "isRequired": true
          },
        {
            type: "html",
            name: "introduction",
            html: "<p style=\"text-align: justify;\">"+
            "<b>Instructions:</b> Sélectionnez la note sur l'échelle qui décrit le mieux ce que vous ressentez <b>actuellement</b>"+
            "</p>"
           },
        {
          type: "radiogroup",
          name: "sleepiness001",
          title: "Degré de somnolence",
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
  
  
  var FR_stanfordSleepinessJSON = {}
  FR_stanfordSleepinessJSON.title = "Échelle de somnolence de Stanford",
  FR_stanfordSleepinessJSON.shortTitle = "Sleepiness"
  FR_stanfordSleepinessJSON.survey_JSON = survey_JSON
  FR_stanfordSleepinessJSON.description = ""
  FR_stanfordSleepinessJSON.QuestionnaireType = 'Varied'
  FR_stanfordSleepinessJSON.references = ""
  FR_stanfordSleepinessJSON.notes = ''
  
  