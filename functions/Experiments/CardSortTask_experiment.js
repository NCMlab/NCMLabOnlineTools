
// =======================================================================
// Define internal variables
var count = 0
var PracticeCount = 0
var countInstr = 0
var t
var tPrac
var PracticeCurrentRuleCount = 0
var Accuracy = ''

var PreviousCard = ImageFolder+'Blank.png'
var TrialCount = 0
FileNames = MakeCSTFileNames()
var timeline = [];
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// Calculate the number of practice trials


// Calculate the number of trials
var NTrials = 0
var CalculateNumberofTrials = {
  type: jsPsychCallFunction,
  func: function() {
    NTrials = CardSort_parameters.RuleChangeCount*CardSort_parameters.RuleList.length
    var flag = true
    var temp = [...Array(FileNames.length).keys()]
    t = shuffle(temp)

    if ( t.length <= NTrials )
      { t = t.concat(shuffle(temp)) }
      if ( t.length <= NTrials )
      { t = t.concat(shuffle(temp)) }
  }
}


// =======================================================================
// Define all of the different the stimuli 



var trial = {
    type: jsPsychImageButtonResponseCST,
    render_on_canvas: false,
    stimulus_height: function() { 
      return CardSort_parameters.StimCardHeight 
    },
    stimulus: function()
    {
      console.log('Got Here. Trial count '+ TrialCount)
      var stim = ImageFolder+jsPsych.timelineVariable('stim')
      console.log("The stimulus is: "+stim)
      return stim
    },
    discardPile: function()
    {
      
      if ( TrialCount > 0 ) {//
        //var discard = ImageFolder+jsPsych.timelineVariable('stim')
        var temp = jsPsych.data.get().last(2)
        console.log("DISCARD PILE: "+TrialCount+'   '+temp.select('stimulus').values)

        var discard = temp.select('stimulus').values[0]
        console.log('Discard: '+ discard)
      }
      else {
        console.log(PreviousCard)
        discard = PreviousCard 
      }
      return discard
    },
    choices: function()
    {
      var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+CardSort_parameters.CardHeight+'>',
        '<img src="'+ImageFolder+'2-red-cross.png" height='+CardSort_parameters.CardHeight+'>',
        '<img src="'+ImageFolder+'3-yellow-star.png" height='+CardSort_parameters.CardHeight+'>',
        '<img src="'+ImageFolder+'4-green-triangle.png" height='+CardSort_parameters.CardHeight+'>']
      return stim
    },
    prompt: '+',
    on_finish: function(data) 
    {   
        TrialCount += 1
        var response = data.response
        console.log("RESPONSE: "+response)
        var correct = jsPsych.timelineVariable('FactorMapping') 
        if ( response == correct[0][CardSort_parameters.RuleList[CurrentRuleCount]])
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
    type: jsPsychImageButtonResponseCST,
    render_on_canvas: false,
    stimulus_height:  function() { return CardSort_parameters.StimCardHeight },
    stimulus: function()
    {
      var stim = ImageFolder+'Blank.png'
      return stim
    },
    discardPile: function()
    {
      if ( TrialCount > 1 ) {
        var temp = jsPsych.data.get().last(2)
        var discard = temp.select('stimulus').values[1]
      }
      else {
        discard = PreviousCard 
      }
      return discard
    },
    choices: function()
    {
      var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+CardSort_parameters.CardHeight+'>',
        '<img src="'+ImageFolder+'2-red-cross.png" height='+CardSort_parameters.CardHeight+'>',
        '<img src="'+ImageFolder+'3-yellow-star.png" height='+CardSort_parameters.CardHeight+'>',
        '<img src="'+ImageFolder+'4-green-triangle.png" height='+CardSort_parameters.CardHeight+'>']
      return stim
    },
    prompt: function(data)
    {
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if(last_trial_correct){
          return '<p style="font-size:'+CardSort_parameters.FeedbackSize+'vh">Correct!</p>'; // the parameter value has to be returned from the function
        } else {
          return '<p style="font-size:'+CardSort_parameters.FeedbackSize+'vh">Incorrect!</p>'; // the parameter value has to be returned from the function
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
        type: 'custom',
        fn: function(tPrac){ 
          NPracTrials = CardSort_parameters.PracticeRuleChangeCount*CardSort_parameters.PracticeRuleList.length
          var flag = true
          var temp = [...Array(FileNames.length).keys()]
          tPrac = shuffle(temp)

          if ( tPrac.length <= NPracTrials )
            { tPrac = tPrac.concat(shuffle(temp)) }
            if ( tPrac.length <= NPracTrials )
            { tPrac = tPrac.concat(shuffle(temp)) }
          tPrac = tPrac.slice(0,NPracTrials)
          console.log('Running '+tPrac.length+" trials")
          return tPrac

       }
    },
      on_finish: function() {
        PracticeCount++

        console.log("Trial count: "+PracticeCount+", Rule count: "+CardSort_parameters.PracticeRuleList[PracticeCurrentRuleCount])
        if ( (PracticeCount % CardSort_parameters.PracticeRuleChangeCount) == 0 )
        {
          CurrentRuleCount++
        }
      }
    }

var trial_procedure = {
      timeline: [test_stimulus, trialBlank ],
      timeline_variables: FileNames,
      //randomize_order: true,
      //repetitions: 1,
      sample: {
        type: 'custom',
        fn: function(t){ 
              NTrials = CardSort_parameters.RuleChangeCount*CardSort_parameters.RuleList.length
              var flag = true
              var temp = [...Array(FileNames.length).keys()]
              t = shuffle(temp)
          
              if ( t.length <= NTrials )
                { t = t.concat(shuffle(temp)) }
                if ( t.length <= NTrials )
                { t = t.concat(shuffle(temp)) }
                t = t.slice(0,NTrials)
                console.log("Will do "+t.length+" trials")
            return t
        }     
      },
      on_finish: function() {
        count++

        console.log("Trial count: "+count+", Rule count: "+CardSort_parameters.RuleList[CurrentRuleCount])
        if ( (count % CardSort_parameters.RuleChangeCount) == 0 )
        {
          CurrentRuleCount++
        }
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
        if ( CardSort_parameters.ShowWelcome)
        { console.log("SHOWING WELCOME")
          return true }
        else { return false }
  }
}  
 

var Instructions_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.Instructions[countInstr].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var instr_procedure_loop_node = {
  timeline: [Instructions_Procedure],
  loop_function: function(data){
    console.log("Instructional Loop Count is: "+countInstr)
    countInstr+=1
    if ( countInstr < Instructions.Instructions.length){
        return true} else { return false}
  }
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
        if ( CardSort_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}
// =======================================================================    
  //timeline.push()
timeline.push(if_Welcome)



var CurrentRuleCount = 0
timeline.push(Practice_procedure)
timeline.push(debrief_block);

var CurrentRuleCount = 0
timeline.push(trial_procedure)
timeline.push(thank_you)


