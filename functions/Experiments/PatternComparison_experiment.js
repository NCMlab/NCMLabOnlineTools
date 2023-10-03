
var timeline = []

var enter_fullscreen = {
      type: jsPsychFullscreen,
      fullscreen_mode: FullScreenMode
    }
    
 

    /* define fixation and test trials */
    var fixation = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: "NO_KEYS",
      trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
      },
      data: {
        task: 'fixation'
      }
    };

    var test = {
      type: jsPsychImageButtonResponse,
      stimulus: function() { 
        //console.log(jsPsych.timelineVariable('stimulus'))
        //return jsPsych.timelineVariable('stimulus') 
        return ["assets/Images/PatternComparison/Fig4.png"]
      },
      choices: ['Yes', 'No'],
      data: {
        task: 'response',
        correct_response: function() { return jsPsych.timelineVariable('correct_response') }
      },
      on_finish: function(data){
        data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
      }
    };

    /* define test procedure */
    var trial = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli,
      repetitions: 5,
      randomize_order: true
    };

    var test_stimuli = [
      { stimulus: "assets/Icons/CardSort.png",  correct_response: 'f'},
      { stimulus: "assets/Icons/Fluency.png",  correct_response: 'j'}
    ];

var Notes = {
      type: jsPsychSurvey, 
      pages: [[{
            type: 'text',
            prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
            textbox_rows: 10,
            name: 'Notes', 
            required: false,
          }]],
      on_finish: function(data)
      { data.trial = "Notes" 
      console.log(jsPsych.data.get())
      },
    }
    
    var SendData = {
      type: jsPsychCallFunction,
      func: function() {
            var data = jsPsych.data.get()
            Results = ImageCopy_Scoring(data)
            jsPsych.finishTrial(Results)
      },
    }
    
    var thank_you = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
        console.log(Instructions)
        return Instructions.ThankYouText[0].page},
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: 'PROMPT',
      choices: function() {return [LabelNames.Next]}, 
    }
    var if_ThankYou = {
      timeline: [thank_you],
      conditional_function: function() {
            if ( ImageCopy_parameters.ShowThankYou)
            { return true }
            else { return false }
      }
    }
    
    var welcome = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
        console.log(Instructions)
        return Instructions.WelcomeText[0].page},
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: 'PROMPT',
      choices: function() {return [LabelNames.Next]}, 
    }
    
    var if_Welcome = {
      timeline: [welcome],
      conditional_function: function() {
            if ( ImageCopy_parameters.ShowWelcome)
            { console.log("SHOWING WELCOME")
              return true }
            else { return false }
      }
    }

    var if_Notes = {
      timeline: [Notes],
      conditional_function: function() {
        if ( ImageCopy_parameters.AskForNotes)
        { return true }
        else { return false }
      }
    }

//timeline.push(enter_fullscreen)
//timeline.push(if_Welcome)
timeline.push(trial)
//timeline.push(if_Notes)
//timeline.push(if_ThankYou)
//timeline.push(SendData)