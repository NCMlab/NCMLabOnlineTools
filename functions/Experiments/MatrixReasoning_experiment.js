
// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
var MatrixList
var ImageFileList = []
var MatrixReasoningSetup = {
    type: jsPsychCallFunction,
    func: function() 
    {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        jsPsych.setProgressBar(1)
        for ( var i = 0; i < MatrixReasoning_parameters.StimList.length; i++ ){
  //  MakeMatrxiReasoningStim(StimulusID, BaseFolderName, StimulusFolderName ) 
            ImageFileList.push(MakeMatrxiReasoningStim(MatrixReasoning_parameters.StimList[i]['stim'], BaseFolderName, MatrixReasoning_parameters.StimulusFolderName))
            OptionNames = MakeMatrxiReasoningOptionsFileNames(MatrixReasoning_parameters.StimList[i]['stim'], BaseFolderName, MatrixReasoning_parameters.StimulusFolderName)
            for (var j = 0; j < 6; j++)
            { 
            ImageFileList.push(OptionNames[j])
            }
        }
        MatrixList = MatrixReasoning_parameters.MatrixList
    } 
}

var CalculateWaitTime = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    
    if ( MatrixReasoning_parameters.AllowedTime > 0 ) {
      wait_time = MatrixReasoning_parameters.AllowedTime * 1000; // in milliseconds
      console.log("The wait time is set to: "+wait_time)
    }
  }
}

// Make a list of all images used for preloading


// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
// Define all of the different the stimuli 
var preload = {
    type: jsPsychPreload,
    images: ImageFileList,    
}
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p class="Fixation">+</p>',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: function() {return MatrixReasoning_parameters.FixationTimeBetweenTrials},
}

var trial = {
    type: jsPsychImageButtonResponse,
    stimulus: function()
    {
      console.log(jsPsych.data.get())
      var stim = MakeMatrxiReasoningStim(jsPsych.timelineVariable('stim'),BaseFolderName, MatrixReasoning_parameters.StimulusFolderName)
      return stim
    },
    choices: function()
    {
      var stim = MakeMatrxiReasoningOptions(jsPsych.timelineVariable('stim'),BaseFolderName, MatrixReasoning_parameters.StimulusFolderName, 
      MatrixReasoning_parameters.StimWidth, MatrixReasoning_parameters.StimHeight)
      return stim
    },
    prompt: function() { return Instructions.OptionsPrompt },
    on_finish: function(data) 
    {
      data.task = 'test trial'  
      var response = MatrixReasoning_parameters.OptionMapping[data.response]
        var correct = jsPsych.timelineVariable('correct')
        if ( response == correct ) 
        {
          data.correct = 1
        }
        else {data.correct = 0}
    }
    
};

// =======================================================================
// Scoring procedure
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
    var trialData = jsPsych.data.get()//.filter({task:'Trial'})
    console.log(trialData)
    Results = MatrixReasoning_Scoring(trialData) 
    console.log(Results)
    jsPsych.finishTrial(Results)
    
  },
}    


var timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( MatrixReasoning_parameters.AllowedTime > 0 ) {
        timer_function(wait_time) }
    }
}
  
var timer_stop = {
  // This stops the interval timer and resets the clock to 00:00
  type: jsPsychCallFunction,
  func: function(){
    if ( MatrixReasoning_parameters.AllowedTime > 0 ) {
      clearInterval(interval);
      document.querySelector('#clock').innerHTML = '00:00'
    }
  }
}    

// =======================================================================    
// Define procedures using the stimuli
 var trial_procedure = {
      timeline: [fixation, trial],
      timeline_variables: MatrixList,
      randomize_order: false,
      repetitions: 1,
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
        return Instructions.ThankYouText[0].page},
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: 'PROMPT',
      choices: function() {return [LabelNames.Next]}, 
    }

    
    var if_Instructions = {
      timeline: [instr_procedure_loop_node],
      conditional_function: function() {
            if ( MatrixReasoning_parameters.ShowInstructions)
            { return true }
            else { return false }
      }
    }
    
    
// ======================================================================= 
timeline.push(CalculateWaitTime) // works
timeline.push(enter_fullscreen)
timeline.push(Welcome)
timeline.push(MatrixReasoningSetup)
timeline.push(preload)
timeline.push(if_Instructions)
timeline.push(timer_start)
timeline.push(trial_procedure)
timeline.push(timer_stop)
timeline.push(Notes)
timeline.push(SendData)
timeline.push(ThankYou);
