// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
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
// General instructions
var Instructions_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.SingleLetterCancellationInstructionText[countInstr].page},
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
    if ( countInstr < Instructions.SingleLetterCancellationInstructionText.length){
        return true} else { return false}
  }
}

var trial_1 = {
	type: jsPsychCancellationMouse,
  	grid: function() {
      console.log(grid)
      console.log(ListOfTargets)
      return grid
    },
  	grid_square_width: '10vw',
    grid_square_height: '5vh',
    font_size: function() {return Cancellation_parameters.font_size},
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
var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: function() {return LabelNames.NoteInputBox},
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    
    Results = SingleLetterCancellation_Scoring(data) 
    jsPsych.finishTrial(Results)
  },
}    
// =======================================================================    
// Define procedures using the stimuli



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
timeline.push(instr_procedure_loop_node)
timeline.push(trial_1)	
timeline.push(Notes)
timeline.push(SendData)
timeline.push(if_ThankYou)

