
// =======================================================================
// Define internal variables
var timeline = [];
console.log('==============================')
console.log('CANVAS SIZE FOR A')
sizes = FindCanvasSize(SuggestedWidthA, SuggestedHeightA, 0.7, 0.85) 
CanvasWidthA = sizes.CanvasWidth
CanvasHeightA = sizes.CanvasHeight
console.log('==============================')


sizes = FindCanvasSize(SuggestedWidthSampleA, SuggestedHeightSampleA, 0.95,0.85) 
CanvasWidthSampleA = sizes.CanvasWidth
console.log(CanvasWidthSampleA)
CanvasHeightSampleA = sizes.CanvasHeight

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 
  var trial_SampleA = {
      type: jsPsychSketchpad,   
      Circles: SampleCirclesA, 
      canvas_width: CanvasWidthSampleA,
      canvas_height: CanvasHeightSampleA,
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: false,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: ShowTimerSampleA
    }
  
  var trialA = {
      type: jsPsychSketchpad,   
      Circles: CirclesA, 
      canvas_width: CanvasWidthA,
      canvas_height: CanvasHeightA,
      canvas_border_width: 1,
      stroke_width: pen_width,
      save_final_image: true,
      save_strokes: false,
      show_clear_button: false,
      show_undo_button: false,
      show_redo_button: false,
      show_countdown_trial_duration: ShowTimerA,
      trial_duration: DurationA,
      // on_finish: function() {
      //   // download the drawing as a file
      //   var imageData = jsPsych.data.get().last(1).values()[0].png;
      //   var a = document.createElement('a');
      //   a.href = imageData; //make the link of image
      //   a.download = "TrailsA.png";
      //   document.body.appendChild(a);
      //   a.click();
      //   document.body.removeChild(a);
      // }
    }

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

// =======================================================================    
// Define procedures using the stimuli

  var instrSampleA_procedure = {
      timeline: [Instructions],
      timeline_variables: InstructionsSampleA,
      randomize_order: false,
      repetitions: 1,
    }
  
  var instrA_procedure = {
      timeline: [Instructions],
      timeline_variables: InstructionsA,
      randomize_order: false,
      repetitions: 1,
    }
  
  var thank_you = {
      timeline: [Instructions],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
    }
// =======================================================================    
  //timeline.push(InstructionsSampleA)
  timeline.push(enter_fullscreen)
  timeline.push(instrSampleA_procedure)
  timeline.push(trial_SampleA)
  timeline.push(instrA_procedure)
  timeline.push(trialA)
  timeline.push(thank_you)
  
  