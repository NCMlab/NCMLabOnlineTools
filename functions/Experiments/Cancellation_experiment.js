// =======================================================================
// Define internal variables
var timeline = [];
// var ListOfTargets = [[1,1],[4,2],[0,2]]
var grid
var ListOfTargets
var NTargets

// =======================================================================

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var InitialSetup = {
  type: jsPsychCallFunction,
  func: function(){
    grid = create2DArray(Cancellation_parameters.NRows,Cancellation_parameters.NCols)
    ListOfTargets = CreateCancellationList(Cancellation_parameters.NRows, Cancellation_parameters.NCols, Cancellation_parameters.NTargets)
  }
}
// =======================================================================
// Define all of the different the stimuli 


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
      on_finish: function(data){
        data.task = 'Instructions'
    }
    }


var trial_1 = {
	type: jsPsychCancellationMouse,
  	grid: function() {
      console.log(grid)
      console.log(ListOfTargets)
      return grid
    },
  	grid_square_width: '5vw',
    grid_square_height: '5vh',
    prompt: function() {
      var stim = "<p>Click on all of the <b>"+Cancellation_parameters.target_labels+"</b> that you see</p>"
      console.log(stim)
      return stim
    },
  	allow_nontarget_responses: true,
  	response_ends_trial: false,
  	target: function(){ return ListOfTargets},
  	non_target_labels: function(){return Cancellation_parameters.non_target_labels},
  	target_labels: function(){return Cancellation_parameters.target_labels},
  	border_width: 0,
    on_finish: function(data){
        data.target = data.target
        data.task = 'Trial'
    }
}
// =======================================================================
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var trialData = jsPsych.data.get().filter({task:'Trial'})
    console.log(trialData.trials[0])
    Results = SingleLetterCancellation_Scoring(trialData.trials[0]) 
    jsPsych.finishTrial(Results)
  },
}    
// =======================================================================    
// Define procedures using the stimuli



var instr_procedure = {
  timeline: [Instructions],
  timeline_variables: SingleLetterCancellationInstructionText,
  randomize_order: false,
  repetitions: 1,
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

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( Cancellation_parameters.ShowWelcome)
        { console.log(Cancellation_parameters)
          return true }
        else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( Cancellation_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}


// =======================================================================
// Define any logic used in the experiment    
// ======================================================================= 
// Add all procedures to the timeline
timeline.push(enter_fullscreen)
timeline.push(if_Welcome)
timeline.push(InitialSetup)
timeline.push(instr_procedure)
timeline.push(trial_1)	
timeline.push(SendData)
timeline.push(if_ThankYou)

