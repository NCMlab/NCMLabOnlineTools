// ============== WELCOME ==============

// ============== TIMER ================
// This turns on a progress bar timer when spoken instructions are provided
var Welcome_progress_bar_timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.WelcomeSpoken > 0 ) {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        timer_progress_bar(WelcomeTime) }
    }
}

var Welcome_progress_bar_timer_stop = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.WelcomeSpoken > 0 ) {
        clearInterval(interval);
        document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
         }
    }
}

// Welcome can be presented as written or as written with voice over.
// If voice over is provided then there is a progress bar showing when the next screen will be shown.

// present the written welcome to the task
var WelcomeWritten = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() { 
        var Str = Instructions.WelcomeText[0].page
        Str += "<p>"+LabelNames.PressNext+"</p>"
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
}

// present the spoken and written welcome to the task
var WelcomeSpoken = {
    type: jsPsychAudioButtonResponse,
    stimulus: function() { return parameters.WelcomeAudio },
    choices: ['Repeat?'],
    prompt: function() { return Instructions.WelcomeText[0].page},
    response_allowed_while_playing: false,
    response_ends_trial: true,
    trial_duration: WelcomeTime,
};

// add a repeat button to the spoken welcome so the user can replay the welcome before the progress bar runs out
var WelcomeSpoken_loop = {
    timeline: [Welcome_progress_bar_timer_start, WelcomeSpoken, Welcome_progress_bar_timer_stop],
    loop_function: function(data){
        if ( data.trials[1].response == 0 ) 
        { return true} else { return false}
    }
}

// If the welcome is shown and NOT spoken then present the written welcome
var if_WelcomeWritten = {
    timeline: [WelcomeWritten],
    conditional_function: function() {
      if ( parameters.ShowWelcome & ! parameters.WelcomeSpoken)
      { return true }
      else { return false }
    }
}

// if the welcome is shown AND spoken then present the spoken
var if_WelcomeSpoken = {
    timeline: [WelcomeSpoken_loop],
    conditional_function: function() {
    document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
      if ( parameters.ShowWelcome & parameters.WelcomeSpoken)
      { return true }
      else { return false }
    }
}

// make a time line checking the two welcome conditions
// This makes the import a single line
var Welcome = {
    timeline: [if_WelcomeSpoken, if_WelcomeWritten]
}

// ============== NOTES ==============
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

var if_Notes = {
    timeline: [Notes],
    conditional_function: function() {
        if ( parameters.AskForNotes )
        { return true }
        else { return false }
    }
}

  // ============== THANK YOU ==============
var thank_you = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      return Instructions.ThankYouText[0].page
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
}

var if_ThankYou = {
    timeline: [thank_you],
    conditional_function: function() {
        if ( parameters.ShowThankYou )
        { return true }
        else { return false }
    }
}
// ================ INSTRUCTIONS ===================

var countInstr01 = 0
var countInstr02 = 0
var countInstr03 = 0
var countInstr04 = 0

var Instructions01_progress_bar_timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        timer_progress_bar(parameters.Instructions01Time[countInstr01]) }
    }
}

var Instructions01_progress_bar_timer_stop = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        clearInterval(interval);
        document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
         }
    }
}

var Instructions01Written = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){return Instructions.Instructions01[countInstr01].page},
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}

var Instructions01Spoken = {
    type: jsPsychAudioButtonResponse,
    stimulus: function() { return parameters.InstructionsAudio[countInstr01] },
    choices: ['Repeat?'],
    prompt: function() { return Instructions.Instructions01[countInstr01].page},
    response_allowed_while_playing: false,
    response_ends_trial: true,
    trial_duration: function() { return parameters.Instructions01Time[countInstr01] },
};

// This loop allows the user to repeat the instructions
var Instructions01SpokenRepeat_loop = {
    timeline: [Instructions01_progress_bar_timer_start, Instructions01Spoken, Instructions01_progress_bar_timer_stop],
    loop_function: function(data){
        if ( data.trials[1].response == 0 ) 
        { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions01Spoken_loop = {
    timeline: [Instructions01SpokenRepeat_loop],
    loop_function: function(data){
      console.log(countInstr01)
      countInstr01+=1
      if ( countInstr01 < Instructions.Instructions01.length) 
      { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions01Written_loop = {
    timeline: [Instructions01Written],
    loop_function: function(data){
      console.log(countInstr01)
      countInstr01+=1
      if ( countInstr01 < Instructions.Instructions01.length) 
      { return true} else { return false}
    }
}

var if_Instructions01Written = {
    timeline: [Instructions01Written_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & ! parameters.InstructionsSpoken)
          { return true }
          else { return false }
    }
}

var if_Instructions01Spoken = {
    timeline: [Instructions01Spoken_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & parameters.InstructionsSpoken )
          { return true }
          else { return false }
    }
}
var Instructions01 = {
    timeline: [if_Instructions01Written, if_Instructions01Spoken]
}




  var Instructions02 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){
      console.log("Instr02 count: "+countInstr02)
      return Instructions.Instructions02[countInstr02].page
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}
  
  var Instructions03 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){return Instructions.Instructions03[countInstr03].page},
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}
  
  var Instructions04 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){return Instructions.Instructions04[countInstr04].page},
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}
  


var Instructions02_loop = {
    timeline: [Instructions02],
    loop_function: function(data){
      console.log(countInstr02)
      countInstr02+=1
      if ( countInstr02 < Instructions.Instructions02.length){
          return true} else { return false}
    }
}
var Instructions03_loop = {
    timeline: [Instructions03],
    loop_function: function(data){
        console.log(countInstr03)
        countInstr03+=1
        if ( countInstr03 < Instructions.Instructions03.length){
            return true} else { return false}
    }
}
var Instructions04_loop = {
    timeline: [Instructions04],
    loop_function: function(data){
        console.log(countInstr03)
        countInstr04+=1
        if ( countInstr04 < Instructions.Instructions04.length){
            return true} else { return false}
    }
}




var if_Instructions02 = {
    timeline: [Instructions02_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions)
          { return true }
          else { return false }
    }
}

var if_Instructions03 = {
    timeline: [Instructions03_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions)
          { return true }
          else { return false }
    }
}

var if_Instructions04 = {
    timeline: [Instructions04_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions)
          { return true }
          else { return false }
    }
}

// ================ GIF RECORDING ===================
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

// ================ FULL SCREEN ===================
var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
  }