// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
var Current = 4
DMSFontSize = 36
var count = 0
const GridCountX = 6
const GridCountY = 6
const NumberLocations = GridCountX*GridCountY
var CurrentLocations
const CircleColor = 'black'
const CanvasWidth = 600
const CanvasHeight = 600
// Decide circle radius based on the canvas size
const CircleRadius = CalculateRadius(CanvasWidth, CanvasHeight)

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
let stair1 = new Stair(StartValue,MinValue,MaxValue,MaxReversals,MaxTrials,StepSize,NUp,NDown,FastStart);
// =======================================================================

var VisualStimulus = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    CurrentLoad = stair1.Current
    CurrentLocations = ReturnElementsFromPermute(CurrentLoad, NumberLocations)
    for ( var i = 0; i < CurrentLoad; i++ ) {
      var temp = mapLinearIndexToGridIndex(CurrentLocations[i] ,GridCountX, GridCountY)
      filledCirc(c, CircleRadius+(temp[0]*2*CircleRadius),CircleRadius+(temp[1]*2*CircleRadius),CircleRadius, CircleColor);
    }
    CanvasText(c, CanvasWidth/2+0, CanvasWidth/2+0, "+")
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasWidth, CanvasHeight],
  choices: ['dummy'],
  prompt: '',
  trial_duration: StimOnTime,
};

var VisualProbe = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    // decide if this is a positive or negative probe trial
    Probe = Math.round(Math.random())
    var Loc
    if ( Probe == 1 ) {
      console.log("POSITIVE PROBE")
      Loc = shuffle(CurrentLocations).slice(0,1)
    }
    else {
      console.log("NEGATIVE PROBE")
      Loc = NegativeProbeLocation(CurrentLocations, NumberLocations)
    }
    var temp = mapLinearIndexToGridIndex(Loc ,GridCountX, GridCountY)
    filledCirc(c, CircleRadius+(temp[0]*2*CircleRadius),CircleRadius+(temp[1]*2*CircleRadius),CircleRadius, ProbeColor);
    CanvasText(c, CanvasWidth/2+0, CanvasWidth/2+0, "+")
  },
  canvas_size: [CanvasWidth, CanvasHeight],
  choices: [],
  prompt: '',
  trial_duration: ProbeOnTime,
  choices: KeyboardChoices,
  on_finish: function(data){
    var ResponseIndex = ResponseMapping.indexOf(data.response)
    if ( Probe == 1 && ResponseMapping[ResponseIndex] == 1) 
    { 
      data.correct = 1
      stair1.Decide(true)
    }
    else if ( Probe == 0 && ResponseMapping[ResponseIndex] == 0) 
    { 
      data.correct = 1
      stair1.Decide(true)
    } 
    else 
    {
      data.correct = 0
      stair1.Decide(false)
    }
    data.CurrentLocations = CurrentLocations
    data.Load = CurrentLoad
    data.TrialType = 'Probe'
  }
};

var VisualMask = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    for ( var i = 0; i < GridCountX; i++ ) 
    {
      for ( var j = 0; j < GridCountY; j++ ) 
      {
        filledCirc(c, CircleRadius+(i*2*CircleRadius),CircleRadius+(j*2*CircleRadius),CircleRadius, CircleColor);
      }
    }
    CanvasText(c, CanvasWidth/2+0, CanvasWidth/2+0, "+")
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasWidth, CanvasHeight],
  choices: ['dummy'],
  prompt: '',
  trial_duration: StimOnTime,
};

var RetentionCanvas = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    CanvasText(c, CanvasWidth/2+0, CanvasWidth/2+0, "+", 'black')
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasWidth, CanvasHeight],
  choices: ['dummy'],
  prompt: '',
  trial_duration: StimOnTime,
}

var Fix = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    CanvasText(c, CanvasWidth/2+0, CanvasWidth/2+0, "+", 'red')
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasWidth, CanvasHeight],
  choices: ['dummy'],
  prompt: '',
  trial_duration: ITITime,
  // on_finish: function(data){
  //   data.trialType = "fixation"
  // }
} 

// test instructions
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

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    console.log(data)
    console.log(stair1)
    Results = DMS_Scoring(stair1)    
    jsPsych.finishTrial(Results)
    console.log(Results)
  }
}
  // =========================================
// Define any logic used 

var loop_node = {
  timeline: [VisualStimulus, VisualMask, RetentionCanvas, VisualProbe, Fix],
  loop_function: function(data){
    return (! stair1.Finished)
 }
};

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
    Results = SpatialDMS_Scoring(trialData) 
    jsPsych.finishTrial(Results)
  },
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
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( Stroop_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    return Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( SpatialDMS_parameters.ShowWelcome)
        { return true }
        else { return false }
  }
}

var if_Instructions = {
  timeline: [instr_procedure_loop_node],
  conditional_function: function() {
        if ( SpatialDMS_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}


// ======================================================================= 
// Add procedures to the timeline
timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(if_Instructions)
timeline.push(loop_node)
timeline.push(Notes)
timeline.push(SendData)
timeline.push(if_ThankYou)