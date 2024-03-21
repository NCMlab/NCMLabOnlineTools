// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
// var ListOfTargets = [[1,1],[4,2],[0,2]]
var grid
var ListOfTargets
var NTargets


// =======================================================================
var StartGIFRecorder = {
  type: jsPsychCallFunction,
  func: function() {
    encoder = new GIFEncoder();
    encoder.setRepeat(0); //0  -> loop forever
    //1+ -> loop n times then stop
    encoder.setDelay(GIFDisplayTime); //go to next frame every n milliseconds
  }
}
var if_GIFRecorder = {
  timeline: [StartGIFRecorder],
  conditional_function: function() {
        if ( parameters.RecordGIF )
        { return true }
        else { return false }
  }
}
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var InitialSetup = {
  type: jsPsychCallFunction,
  func: function(){
    grid = create2DArray(parameters.NRows,parameters.NCols)
    ListOfTargets = CreateCancellationList(parameters.NRows, parameters.NCols, parameters.NTargets)
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
    font_size: function() {return parameters.font_size},
    GIFRecord: function() { return parameters.RecordGIF },
    prompt: function() {
      var stim = "<p>Click on all of the <b>"+parameters.target_labels+"</b> that you see</p>"
      console.log(stim)
      return stim
    },
  	allow_nontarget_responses: true,
  	response_ends_trial: false,
  	target: function(){ return ListOfTargets},
  	non_target_labels: function(){return parameters.non_target_labels},
  	target_labels: function(){return parameters.target_labels},
  	border_width: 0,
    on_finish: function(data){
        data.target = data.target
        data.task = 'Trial'
        console.log(jsPsych.data.get())
    }
}
// =======================================================================
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    console.log(data)
    Results = SingleLetterCancellation_Scoring(data) 
    jsPsych.finishTrial(Results)
  },
}    


// =======================================================================
// Define any logic used in the experiment    
// ======================================================================= 
// Add all procedures to the timeline
timeline.push(enter_fullscreen)
timeline.push(if_GIFRecorder)
timeline.push(Welcome)
timeline.push(InitialSetup)
timeline.push(instr_procedure_loop_node)
timeline.push(trial_1)	

timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)
