
var SetupSpeechRecognition = {
    type: jsPsychCallFunction,
    func: function() {
      const YesCommand = {
        'yes': () => 
            { 
              console.log("YES YES YES")
              $("#jspsych-html-button-response-button-0").click() 
              $("#jspsych-audio-button-response-button-0").click() 
            }
      };
      const NoCommand = {
          'no': () => 
              { 
                console.log("NO NO NO")
                $("#jspsych-html-button-response-button-1").click() 
                $("#jspsych-audio-button-response-button-1").click() 
              }
      };  
      annyang.addCommands(YesCommand);
      annyang.addCommands(NoCommand);
      alert("Using Language: "+LANG)
      annyang.setLanguage(LanguageMapping(LANG))
      annyang.addCallback('result', function(userSaid) {
        // userSaid contains multiple possibilities for what was heard
        console.log(userSaid)
        userSaidWords += userSaid
        userSaidWords += ';'
      });
    }
  }
  