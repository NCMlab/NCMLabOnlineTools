
var SetupSpeechRecognition = {
    type: jsPsychCallFunction,
    func: function() {
      const YesCommand = {
        'yes': () => 
            { $("#jspsych-html-button-response-button-0").click() }
      };
      const NoCommand = {
          'no': () => 
              { $("#jspsych-html-button-response-button-1").click() }
      };  
      annyang.addCommands(YesCommand);
      annyang.addCommands(NoCommand);
      annyang.setLanguage(LANG)
      annyang.addCallback('result', function(userSaid) {
        // userSaid contains multiple possibilities for what was heard
        userSaidWords += userSaid
        userSaidWords += ';'
      });
    }
  }
  