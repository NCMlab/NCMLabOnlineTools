
// =======================================================================
// Define internal variables
var count = 0
var PracticeCount = 0

var PracticeCurrentRuleCount = 0
var Accuracy = ''

FileNames = MakeCSTFileNames()
var timeline = [];
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 
var trial = {
    type: jsPsychImageButtonResponse,
    render_on_canvas: false,
    stimulus_height: StimCardHeight,
    
    stimulus: function()
    {
      var stim = ImageFolder+jsPsych.timelineVariable('stim')
      return stim
    },
    choices: function()
    {
      var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+CardHeight+'>',
        '<img src="'+ImageFolder+'2-red-cross.png" height='+CardHeight+'>',
        '<img src="'+ImageFolder+'3-yellow-star.png" height='+CardHeight+'>',
        '<img src="'+ImageFolder+'4-green-triangle.png" height='+CardHeight+'>']
      return stim
    },
    prompt: '-',
    on_finish: function(data) 
    {   
        var response = data.response
        console.log("RESPONSE: "+response)
        var correct = jsPsych.timelineVariable('FactorMapping') 
        if ( response == correct[0][RuleList[CurrentRuleCount]])
          {
            console.log("CORRECT")
            Accuracy = "Correct"
            data.correct = true;
          }
          else 
          {
            console.log('INCORRECT')
            Accuracy = "Incorrect"
            data.correct = false;
          }
    }
  };

var trialBlank = {
    type: jsPsychImageButtonResponse,
    render_on_canvas: false,
    stimulus_height: StimCardHeight,
    stimulus: function()
    {
      var stim = ImageFolder+'blank.png'
      return stim
    },
    
    choices: function()
    {
      var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+CardHeight+'>',
        '<img src="'+ImageFolder+'2-red-cross.png" height='+CardHeight+'>',
        '<img src="'+ImageFolder+'3-yellow-star.png" height='+CardHeight+'>',
        '<img src="'+ImageFolder+'4-green-triangle.png" height='+CardHeight+'>']
      return stim
    },
    prompt: function(data)
    {
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if(last_trial_correct){
          return '<p style="font-size:'+FeedbackSize+'vh">Correct!</p>'; // the parameter value has to be returned from the function
        } else {
          return '<p style="font-size:'+FeedbackSize+'vh">Incorrect!</p>'; // the parameter value has to be returned from the function
        }
    },
    trial_duration:500
  };

var debrief_block = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {

        var trials = jsPsych.data.get().filter({task: 'practice trial'});
        var correct_trials = trials.filter({correct: true});
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return `<p>You responded correctly on ${accuracy}% of the trials.</p>
          <p>Press any key to perform the experiment.</p>`;

      }
    };

var Instructions = {
      type: jsPsychHtmlButtonResponseTouchscreen,
       stimulus: function()
      {
        var stim = jsPsych.timelineVariable('page') // Variable in the config file
        return stim
      },
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: '',
      choices: ['Next'], 
  }
// =======================================================================
// This is used for labelling trials in the output data
var prac_stimulus = Object.assign({}, trial)
  prac_stimulus = Object.assign(prac_stimulus, {    
    data: {
      task: 'practice trial',
    }
})
var test_stimulus = Object.assign({}, trial)
  test_stimulus = Object.assign(test_stimulus, {    
    data: {
      task: 'test trial',
    }
})    

// =======================================================================    
// Define procedures using the stimuli

// Add scoring procedures to the Thank you screen
var SendData = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function()
      {
        var stim = jsPsych.timelineVariable('page') // Variable in the config file
        return stim
      },
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: '',
      choices: ['Next'], 
      on_finish: function(data){
        data = CardSort_Scoring(data)
        console.log(data)
        data.task = 'Sending Data'
        
      }
    }  

var Practice_procedure = {
      timeline: [prac_stimulus, trialBlank],
      timeline_variables: FileNames,
      randomize_order: true,
      repetitions: 1,
      sample: {
        type: 'without-replacement',
        size: PracticeRuleChangeCount*PracticeRuleList.length
      },
      on_finish: function() {
        PracticeCount++

        console.log("Trial count: "+PracticeCount+", Rule count: "+PracticeRuleList[PracticeCurrentRuleCount])
        if ( (PracticeCount % PracticeRuleChangeCount) == 0 )
        {
          CurrentRuleCount++
        }
      }
    }

var trial_procedure = {
      timeline: [test_stimulus, trialBlank],
      timeline_variables: FileNames,
      randomize_order: true,
      repetitions: 1,
      sample: {
        type: 'without-replacement',
        size: RuleChangeCount*RuleList.length
      },
      on_finish: function() {
        count++

        console.log("Trial count: "+count+", Rule count: "+RuleList[CurrentRuleCount])
        if ( (count % RuleChangeCount) == 0 )
        {
          CurrentRuleCount++
        }
      }
    }


var welcome = {
      timeline: [Instructions],
      timeline_variables: WelcomeText,
      randomize_order: false,
      repetitions: 1,
    }
  
  var instructions = {
      timeline: [Instructions],
      timeline_variables: InstructionText,
      randomize_order: false,
      repetitions: 1,
    }
  
  var thank_you = {
      timeline: [SendData],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
    }    
// =======================================================================    
  //timeline.push()
timeline.push(welcome)
timeline.push(instructions)    
var CurrentRuleCount = 0
timeline.push(Practice_procedure)
timeline.push(debrief_block);
timeline.push(welcome)
var CurrentRuleCount = 0
timeline.push(trial_procedure)
timeline.push(thank_you)


