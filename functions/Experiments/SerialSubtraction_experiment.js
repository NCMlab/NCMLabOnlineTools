// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var responseSerSub = [];
var PreviousResult
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}


// =======================================================================
// Define all of the different the stimuli 


var GetPreviousResult = {
  type: jsPsychCallFunction,
  func: function(){
    PreviousResult = SerialSubtract_parameters.StartValue
  }
}

var get_response = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
      var prompt = '<p class="Instructions">Subtract '+SerialSubtract_parameters.StepValue+' from '+PreviousResult+ ' and continue to subtract '+SerialSubtract_parameters.StepValue+' from the result, even if the result is wrong.</p>'
      return PutStimIntoTable(prompt+response_gridSerSub,'') 
  },
  choices: ['Enter'],
  prompt:'',
  on_finish: function(data) {
      var curans = responseSerSub;
      // check to see if subtraction is correct or not
      var ExpectedResult = PreviousResult - SerialSubtract_parameters.StepValue
      if ( ExpectedResult == curans ) {
        data.correct = 1
      }
      else {
        data.correct = 0
      }
      data.trial = 'task'
      data.NumberList = curans
      PreviousResult = curans
      // update the staircase
      //staircase.Decide(accuracy)
      //clear the response for the next trial
      responseSerSub = []; 
  }
};
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = SerialSubtraction_Scoring(data)    
    jsPsych.finishTrial(Results)
  }
}
// ==========
var get_response2 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: "HELLO WORLD",
  choices: ['Enter'],
  prompt:'',
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
};



// Define instructions
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
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback
var instr_procedure01 = {
  timeline: [Instructions],
  timeline_variables: SerialSubtraction_Instructions,
  randomize_order: false,
  repetitions: 1,
}
var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    if ( SerialSubtract_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    if ( SerialSubtract_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}

var welcome = {
  timeline: [Instructions],
  timeline_variables: WelcomeText,
  randomize_order: false,
  repetitions: 1,
}
        
var thank_you = {
  timeline: [Instructions],
  timeline_variables: ThankYouText,
  randomize_order: false,
  repetitions: 1,
}  
// ======================================================================= 
// Add procedures to the timeline

var procedure = {
  timeline: [get_response],
  loop_function: function(){
    if ( PreviousResult < SerialSubtract_parameters.StopValue )
    {return false}
    else {return true}
  }
};

timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(GetPreviousResult)
timeline.push(instr_procedure01)
timeline.push(procedure)
timeline.push(SendData)
timeline.push(if_ThankYou)
