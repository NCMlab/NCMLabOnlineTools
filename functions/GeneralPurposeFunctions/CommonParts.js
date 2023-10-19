  
// ============== WELCOME ==============
var welcome = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() { return Instructions.WelcomeText[0].page},
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
}


var if_Welcome = {
    timeline: [welcome],
    conditional_function: function() {
      if ( parameters.ShowWelcome)
      { return true }
      else { return false }
    }
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


var Instructions01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){return Instructions.Instructions01[countInstr01].page},
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
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
  

var Instructions01_loop = {
    timeline: [Instructions01],
    loop_function: function(data){
      console.log(countInstr01)
      countInstr01+=1
      if ( countInstr01 < Instructions.Instructions01.length) 
      { return true} else { return false}
    }
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


var if_Instructions = {
    timeline: [Instructions01_loop],
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