// =======================================================================
// Define internal variables
var timeline = [];
// var ListOfTargets = [[1,1],[4,2],[0,2]]
var NRows = 6
var NCols = 52
var NTargets = 104

var grid = create2DArray(NRows,NCols)
var ListOfTargets = CreateCancellationList(NRows, NCols, NTargets)

// =======================================================================

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
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
  	grid: grid,
  	grid_square_width: '5vw',
    grid_square_height: '5vh',
    prompt: "<p>Click on all of the letter <b>H</b></p>",
  	allow_nontarget_responses: true,
  	response_ends_trial: false,
  	target: ListOfTargets,
  	non_target_labels: ["A","B","C","D","E","F","G","I"],
  	target_labels: "H",
  	border_width: 0,
    on_finish: function(data){
        data.target = data.target
        data.task = 'Trial'
    }
}
// =======================================================================
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
        
        trialData = jsPsych.data.get().filter({task:'Trial'})
        console.log(trialData.trials[0])
        data = SingleLetterCancellation_Scoring(data, trialData.trials[0]) 
        
        data.task = 'Sending Data'

      }
    }  
// =======================================================================    
// Define procedures using the stimuli

 var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: SingleLetterCanceelationInstructionText,
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
// Define any logic used in the experiment    
// ======================================================================= 
// Add all procedures to the timeline
timeline.push(instr_procedure)
timeline.push(trial_1)	

timeline.push(thank_you)

