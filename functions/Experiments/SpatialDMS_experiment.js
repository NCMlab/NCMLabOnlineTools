// =======================================================================
// Define internal variables
var timeline = [];
var countInstr = 0
var Current = 4
DMSFontSize = 36
var count = 0
var stair1
var FeedbackFlag = false
var FeedbackText
const GridCountX = 6
const GridCountY = 6
const NumberLocations = GridCountX*GridCountY
var CurrentLocations
const CircleColor = 'black'
console.log(window)
if ( window.innerWidth < window.innerHeight )
  { 
     CanvasHeight = window.innerWidth
     CanvasWidth = window.innerWidth
  }
else
  { 
     CanvasHeight = window.innerHeight
     CanvasWidth = window.innerHeight
  }
const CanvasScale = 0.65


// Decide circle radius based on the canvas size
const CircleRadius = CalculateRadius(CanvasScale*CanvasWidth, CanvasScale*CanvasHeight)

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
// =======================================================================
var setupPractice = {
  type: jsPsychCallFunction,
  func: function() {
    stair1 = new Stair(parameters.StartValue, parameters.MinValue, 
        parameters.MaxValue, parameters.MaxReversals, parameters.NPracticeTrials,
        parameters.StepSize, parameters.NUp, parameters.NDown, 
        parameters.FastStart);
      document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
      document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
      jsPsych.setProgressBar(0)
    FeedbackFlag = true
    }
  }

var setupTest = {
  type: jsPsychCallFunction,
  func: function() {
    stair1 = new Stair(parameters.StartValue, parameters.MinValue, 
        parameters.MaxValue, parameters.MaxReversals, parameters.MaxTrials,
        parameters.StepSize, parameters.NUp, parameters.NDown, 
        parameters.FastStart);
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
        jsPsych.setProgressBar(0)
    FeedbackFlag = false
    }
  }

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
    CanvasText(c, (CanvasScale*CanvasWidth)/2+0, (CanvasScale*CanvasHeight)/2+0, "+")
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasScale*CanvasHeight, CanvasScale*CanvasWidth],
  choices: ['dummy'],
  valid_choices: function() { return parameters.KeyboardValues },
  prompt: '',
  trial_duration: function() { return parameters.StimOnTime },
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
    CanvasText(c, CanvasScale*CanvasWidth/2+0, CanvasScale*CanvasHeight/2+0, "+")
  },
  canvas_size: [CanvasScale*CanvasHeight, CanvasScale*CanvasWidth ],
  choices: function() { return parameters.ButtonLabels},
  valid_choices: function() { return parameters.KeyboardValues },

  prompt: '',
  trial_duration: function() { return parameters.ProbeOnTime },
  
  on_finish: function(data){
    var ResponseMapping = parameters.KeyboardValues
    var KeyboardMappings = parameters.KeyboardMappings

    var ResponseIndex = ResponseMapping.indexOf(data.response)

    // Note that the response buttons are in the order of 0,1,2,3,4
    // Therefore, the left button is a zero and the right button is a one
    // Response mapping (using one and zero) indicates which values are yes (one)
    // and which is no (zero)
    if ( Probe == 1 && KeyboardMappings[ResponseIndex]) 
    { 
      data.correct = 1
      FeedbackText = LabelNames.Correct
      stair1.Decide(true, data.rt)
    }
    else if ( Probe == 0 && ! KeyboardMappings[ResponseIndex]) 
    { 
      data.correct = 1
      FeedbackText = LabelNames.Correct
      stair1.Decide(true, data.rt)
    } 
    else 
    {
      data.correct = 0
      FeedbackText = LabelNames.Incorrect
      stair1.Decide(false, data.rt)
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
    CanvasText(c, CanvasScale*CanvasWidth/2+0, CanvasScale*CanvasHeight/2+0, "+")
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasScale*CanvasHeight, CanvasScale*CanvasWidth],
  choices: ['dummy'],
  valid_choices: function() { return parameters.KeyboardValues },
  prompt: '',
  trial_duration: function() { return parameters.MaskOnTime },
};

var RetentionCanvas = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    CanvasText(c, CanvasScale*CanvasWidth/2+0, CanvasScale*CanvasHeight/2+0, "+", 'black')
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasScale*CanvasHeight, CanvasScale*CanvasWidth],
  choices: ['dummy'],
  valid_choices: function() { return parameters.KeyboardValues },
  prompt: '',
  trial_duration: function() { return parameters.RetOnTime },
}

var Fix = {
  type: jsPsychCanvasButtonResponse,
  stimulus: function(c) {
    if ( FeedbackFlag )
    { CanvasText(c,CanvasScale*CanvasWidth/2+0, CanvasScale*CanvasHeight/2+0, FeedbackText, 'black') }
    else
    { CanvasText(c, CanvasScale*CanvasWidth/2+0, CanvasScale*CanvasHeight/2+0, "+", 'red') }
    document.getElementById('jspsych-canvas-button-response-button-0').style.visibility = 'hidden';
  },
  canvas_size: [CanvasScale*CanvasHeight, CanvasScale*CanvasWidth],
  choices: ['dummy'],
  valid_choices: function() { return parameters.KeyboardValues },
  prompt: '',
  trial_duration: function() { return parameters.ITITime },
  // on_finish: function(data){
  //   data.trialType = "fixation"
  // }
} 


  // =========================================
// Define any logic used 

var loop_node = {
  timeline: [VisualStimulus, VisualMask, RetentionCanvas, VisualProbe, Fix],
  loop_function: function(data){
    console.log((stair1.TrialCount)/(stair1.MaxTrials))
    jsPsych.setProgressBar((stair1.TrialCount)/(stair1.MaxTrials))
    return (! stair1.Finished)
 }
};

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = DMS_Scoring(stair1, data)    
    jsPsych.finishTrial(Results)
  },
}    




// ======================================================================= 
// Add procedures to the timeline

timeline.push(Welcome)
timeline.push(enter_fullscreen)
timeline.push(Instructions01)
timeline.push(Instructions02)
timeline.push(setupPractice)
timeline.push(loop_node)
timeline.push(Instructions03)
timeline.push(setupTest)
timeline.push(loop_node)
timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)
