
// =======================================================================
// Define internal variables
var timeline = [];
var MatrixList
var ImageFileList = []
var MatrixReasoningSetup = {
    type: jsPsychCallFunction,
    func: function() 
    {
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
    prompt: OptionsPrompt,
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

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( MatrixReasoning_parameters.ShowWelcome)
        { console.log(MatrixReasoning_parameters)
          return true }
        else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( MatrixReasoning_parameters.ShowThankYou)
        { return true }
        else { return false }
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
  var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: MatrixReasoning_Instructions,
      randomize_order: false,
      repetitions: 1,
    }
  
// ======================================================================= 
timeline.push(CalculateWaitTime) // works
timeline.push(enter_fullscreen)
timeline.push(if_Welcome)
timeline.push(MatrixReasoningSetup)
timeline.push(preload)
timeline.push(instr_procedure)
timeline.push(timer_start)
timeline.push(trial_procedure)
timeline.push(timer_stop)
timeline.push(if_ThankYou);
timeline.push(SendData)