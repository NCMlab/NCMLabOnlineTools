// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var responseSerSub = [];
var PreviousResult
var count = 0
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
    console.log(response_gridSerSub)
    response_gridSerSub = response_gridSerSub.replace('XCLEARX',LabelNames.Clear)
    response_gridSerSub = response_gridSerSub.replace('XCURRENTANSWERX',LabelNames.CurrentAnswer)
    console.log(response_gridSerSub)
      var prompt = 
        Instructions.GetResponse01+PreviousResult+
        Instructions.GetResponse02+SerialSubtract_parameters.StepValue+
        Instructions.GetResponse03+SerialSubtract_parameters.StepValue+
        Instructions.GetResponse04
      return PutStimIntoTable(prompt+response_gridSerSub,'') 
  },
  choices: function() { return [LabelNames.Enter] },
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

var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
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
  stimulus: function (){return Instructions.Instructions[count].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var instr_procedure01_loop = {
  timeline: [Instructions],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < Instructions.Instructions.length){
        return true} else { return false}
  }
}


// =======================================================================    
// Define procedures using the stimuli



var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    if ( Instructions.ShowWelcome)
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    if ( Instructions.ShowThankYou)
    { return true }
    else { return false }
  }
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

var if_Instructions = {
  timeline: [instr_procedure01_loop],
  conditional_function: function() {
        if ( SerialSubtract_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}

var if_Notes = {
  timeline: [Notes],
  conditional_function: function() {
    if ( SerialSubtract_parameters.AskForNotes)
    { return true }
    else { return false }
  }
}
timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(GetPreviousResult)
timeline.push(if_Instructions)
timeline.push(procedure)
timeline.push(if_ThankYou)
timeline.push(if_Notes)
timeline.push(SendData)

