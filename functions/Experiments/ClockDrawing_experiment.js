
var timeline = [];
var encoder; 

var Instructions = {
  Instructions: "<div>You are to draw a clock. Start by drawing the face of the clock, then add the numbers to the clock's face. Finally, add the clock arms showing the time as 10 minutes after 11 o'clock.</div>",
  WelcomeText: [{'page': '<p class="Instructions">Welcome to the Clock Drawing Task.</p>'}],
  ThankYouText: [{'page': '<p class="Instructions">Thank you.</p>'}],
  NotesForResultsPage: "Scoring is as follows: 10  Full No Impairment or Unlikely Impairment. 8-9 Other clinical determinants must be present otherwise no impairment. 5-8  Cognitive Impairment. 0-4  Prominent Cognitive Impairment"
};

var StartGIFRecorder = {
  type: jsPsychCallFunction,
  func: function() {
    encoder = new GIFEncoder();
    encoder.setRepeat(0); 
    encoder.setDelay(GIFDisplayTime); //go to next frame every n milliseconds
  }
};

var if_GIFRecorder = {
  timeline: [StartGIFRecorder],
  conditional_function: function() {
    return parameters.RecordGIF;
  }
};

var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
};


var trial = {
  type: jsPsychSketchpad,
  prompt: function(){
      if (parameters.ShowInstructions) {
          return Instructions.Instructions;
      } else {
          return '';
      }
  },
  GIFRecord: function() { return parameters.RecordGIF },
  prompt_location: 'abovecanvas',
  canvas_width: 600,
  canvas_height: 600,
  canvas_border_width: 2,
  finished_button_label: function() {return LabelNames.Finished},
  clear_button_label: function() {return LabelNames.Clear},
  undo_button_label: function() {return LabelNames.Undo},
  redo_button_label: function() {return LabelNames.Redo},
  on_finish: function(data) {
      data.trial = 'Clock Drawing';
      var canvas = document.querySelector('canvas'); // Access the canvas element
      var imageData;
      if (canvas) {
          // Capture the drawn image data if the canvas is available
          imageData = canvas.toDataURL();
      } else {
          // Handle the case where the canvas is not available
          console.error('Canvas element not found.');
          return;
      }
      // Store the image data in the experiment data
      jsPsych.data.get().addToLast({ 'drawnImage': imageData });
  }
};




var SendData = {
  type: jsPsychCallFunction,
  func: function() {
      var data = jsPsych.data.get().last(1).values()[0]; // Get the data from the last trial
      console.log(data);
      var Results = ClockDrawing_Scoring(data);
      console.log(Results);
      // Display the score on the page
      var scoreElement = '<p>Your score: ' + Results.score + '</p>';
      jsPsych.endExperiment(scoreElement);
  },
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
  on_finish: function(data) {
    data.trial = "Notes";
    console.log(jsPsych.data.get());
  }
};




var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions);
    return Instructions.ThankYouText[0].page;
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next];}
};

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    return parameters.ShowThankYou;
  }
};

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions);
    return Instructions.WelcomeText[0].page;
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next];}
};

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    return parameters.RecordGIF.ShowWelcome;
  }
};

var if_Notes = {
  timeline: [Notes],
  conditional_function: function() {
    return parameters.AskForNotes;
  }
};

timeline.push(if_GIFRecorder);
timeline.push(enter_fullscreen);
timeline.push(if_Welcome);
timeline.push(trial);
timeline.push(if_Notes);
timeline.push(SendData);
timeline.push(if_ThankYou);
