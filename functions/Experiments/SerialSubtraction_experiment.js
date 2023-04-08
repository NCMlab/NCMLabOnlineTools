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
    console.log(SerialSubtract_parameters)
      var prompt = 'Subtract '+SerialSubtract_parameters.StepValue+' from '+PreviousResult+ ' and continue to subtract '+SerialSubtract_parameters.StepValue+' from the result, even if the result is wrong.'
      return PutStimIntoTable(prompt+response_gridSerSub,'') 
  },
  choices: ['Enter'],
  prompt:'',
  on_finish: function(data) {
      var curans = responseSerSub;
      console.log(curans)
      data.NumberList = curans
      PreviousResult = curans
      // update the staircase
      //staircase.Decide(accuracy)
      //clear the response for the next trial
      responseSerSub = []; 
  }
};
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
  choices: '',
  trial_duration: 400, 
  on_finish: function(data){
        console.log(data)
    data = SerialSubtraction_Scoring(data)
    data.task = 'Sending Data'
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
  var thank_you = {
    timeline: [SendData],
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


timeline.push(enter_fullscreen)
timeline.push(GetPreviousResult)
timeline.push(instr_procedure01)
timeline.push(procedure)
timeline.push(ScoreResults)
