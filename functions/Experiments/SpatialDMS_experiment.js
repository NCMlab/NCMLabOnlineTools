// =======================================================================
// Define internal variables
var timeline = [];


var Current = 4
DMSFontSize = 36
var count = 0
const GridCountX = 10
const GridCountY = 10
const NumberLocations = GridCountX*GridCountY
var CurrentLocations
const CircleColor = 'black'


const CanvasWidth = 600
const CanvasHeight = 600
var CurrentLoad = 4
var CircleRadius
// Decide circle radius based on the canvas size
if ( CanvasWidth > CanvasHeight) {
  CircleRadius = (CanvasHeight/GridCountX)/2
}
else {
  CircleRadius = (CanvasWidth/GridCountX)/2
}
console.log("Circle Radius: "+ CircleRadius)
var CircleLocation = 5
// translate the location into coordinates for drawing

function filledCirc(canvas, x, y, radius, color) {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function CanvasText(canvas, x, y, text) {
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = 'middle'; 
  ctx.fillText(text, x, y);
}


function shuffle(array) {
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function ReturnElementsFromPermute(count, N) {
  var shuffledValues = shuffle(Array.from(Array(N).keys()))
  return shuffledValues.slice(0,count)
}

function mapLinearIndexToGridIndex(index, gridX, gridY) {
  var y = Math.floor(index/gridX)
  var x = index % gridX
  return [x,y]
}

function NegativeProbeLocation(CurrentLocations, N) {
  var NonLocations = Array.from(Array(N).keys())
  for ( var i = 0; i < CurrentLocations.length; i ++ ) {
    NonLocations = NonLocations.filter(function(e) { return e !==  CurrentLocations[i]})
  }
  return shuffle(NonLocations).slice(0,1)
}

let stair1 = new Stair(StartValue,MinValue,MaxValue,MaxReversals,MaxTrials,StepSize,NUp,NDown,FastStart);

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

//PosProbeLocation = Locations[np.random.permutation(len(Locations))[0]]
//NotLocations = np.arange(0,GridCount**2)
//NotLocations = [x for x in NotLocations if x not in Locations]
//NegProbeLocation = NotLocations[np.random.permutation(len(NotLocations))[0]]


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
    CanvasText(c, CanvasWidth/2+0, CanvasWidth/2+0, "+")
  },
  canvas_size: [CanvasWidth, CanvasHeight],
  choices: [],
  prompt: '',
  trial_duration: StimOnTime,
};''





var Fix = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p style="font-size:'+DMSFontSize+'px; color:'+ProbeColor+'">+</p>',
  choices: [],
  trial_duration: ITITime,
  // on_finish: function(data){
  //   data.trialType = "fixation"
  // }
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

var procedure = {
timeline: [VisualStimulus, VisualMask, VisualProbe],
randomize_order: false,
repetitions: 4,
}  
var loop_node = {
  timeline: [VisualStimulus, VisualMask, VisualProbe],
  loop_function: function(data){
    return (! stair1.Finished)
 }
};

timeline.push(loop_node)
timeline.push(SendData)