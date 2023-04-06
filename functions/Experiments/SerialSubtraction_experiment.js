// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var responseSerSub = [];
var PreviousResult = SerialSubtract_parameters.StartValue
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}


// =======================================================================
// Define all of the different the stimuli 

var get_response = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
      var prompt = 'Substract '+SerialSubtract_parameters.StepValue+' from '+PreviousResult+ ' and continue to subtract '+SerialSubtract_parameters.StepValue+' from the result, even if the result is wrong.'
      return PutStimIntoTable(prompt+response_gridSerSub) 
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
timeline.push(instr_procedure01)
timeline.push(procedure)
timeline.push(thank_you)
