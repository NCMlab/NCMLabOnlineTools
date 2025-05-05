
var Results
// ============== UPDATE HEADER ELEMENTS  ================
var UpdateHeaderCall = {
    type: jsPsychCallFunction,
    func: function() {
        UpdateHeader()
    }
  }
  

function OLDUpdateHeader() {
    //hide  the information button for now
    //
    // set the header button language
    //console.log(document.getElementById('header-home-button'))
   
   // window.onload = function() {
        try {
            
            console.log(document.getElementById('header-home-button'))
            document.getElementById('header-home-button').textContent = LabelNames.Home;
            document.getElementById('header-restart-button').textContent = LabelNames.Restart;
            document.getElementById('header-stop-button').textContent = LabelNames.Stop;
            document.getElementById('header-quit-button').textContent = LabelNames.Quit;
            document.getElementById('header-skip-button').textContent = LabelNames.Skip;
            //document.getElementById('header-info-button').style.visibility = "hidden"
            
            //document.getElementById('header-home-button').style.visibility = "hidden"
            //document.getElementById('header-quit-button').style.visibility = "hidden"
            //document.getElementById('header-skip-button').style.visibility = "hidden"
            //document.getElementById('header-stop-button').style.visibility = "hidden"
        } catch (error) {
            console.log(error);
        }
            // Check to see if we are in the User Choice screen, if so turn off restart and home

        
   // }

            
    
}
function SetLanguagePulldown() {
    //window.onload = function() {
        // Has the language already been selected?
        console.log(jatos.batchSession.getAll())
        var LangIsSetTo = jatos.batchSession.get(jatos.workerId+"_Language")
        //jatos.batchSession.set(jatos.workerId+"_Language", sel.options[sel.selectedIndex].text) 
        console.log("LANGUAGE IS SET TO: "+LangIsSetTo) 
        console.log("Current worker is: "+jatos.workerId)
        console.log(jatos.batchSession.getAll())
        var elem = document.getElementById('LanguageSelectPulldown')
        console.log(elem)
        console.log(elem.value)
        elem.value = LangIsSetTo
        console.log(elem.value)
    //}
}
function GetLanguagePulldown() {
    //window.onload = function() {
        var elem = document.getElementById('LanguageSelectPulldown')
        console.log(elem)
        console.log(elem.value)

    //}
}


// ============== INITIAL MICROPHONE IF NEEDED ================



// ============== TIMER ================
// This turns on a progress bar timer when spoken instructions are provided
var Welcome_progress_bar_timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.WelcomeSpoken > 0 ) {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
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

// ============== MENTAL HEALTH ALERT ==============
var mentalHealthFeedback = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      return MentalHealthResourcesLong.text },
    post_trial_gap: 0,
    duration:30000,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
  }
  
  var MentalHealthCheck = {
    timeline: [mentalHealthFeedback],
    conditional_function: function(){
      if ( Results.Alert )
      { return true }
      else { return false }
    }
  }

  // ============== SCREENING ==============
var EligibilityCheck = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
        console.log(Results.AllResults['Computer Information'].indexOf("Chrome"))
      return LabelNames.NonEligible
    },
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
    on_finish: function() {
        console.log(Results.AllResults['Computer Information'].indexOf("Chrome"))
        //jsPsych.finishTrial(Results)    
        //jatos.endStudyAndRedirect("https://ncmlab.github.io/", Results);
    }
  }
  
  var if_Eligibile = {
    timeline: [EligibilityCheck],
    conditional_function: function(){
        console.log(Results.AllResults['Computer Information'].indexOf("Chrome"))
      if ( Results.AllResults['Accuracy'] )
      { return false }
      else { return true }
    }
  }

  var BrowserEligibilityCheck = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      return LabelNames.BroswerNonEligible
    },
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
    on_finish: function() {
        jatos.endStudyAndRedirect("https://ncmlab.github.io/", [Results])
        //jsPsych.finishTrial(Results)    
        //jatos.endStudyAndRedirect("https://ncmlab.github.io/", Results);
    }
  }
  
  var if_BrowserEligibile = {
    timeline: [BrowserEligibilityCheck],
    conditional_function: function(){
    let chromeAgent = Results.AllResults['Computer Information'].indexOf("Chrome") > -1; 
      if ( chromeAgent )
      { return false }
      else { return true }
    }
  }


// ============== WELCOME ==============
// Welcome can be presented as written or as written with voice over.
// If voice over is provided then there is a progress bar showing when the next screen will be shown.

// present the written welcome to the task
var WelcomeWritten = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() { 
        console.log("WELCOME WRITTEN")
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
    choices: function() { return [LabelNames.Repeat] },
    prompt: function() { 
        console.log("HELLO FROM WELCOME")
        return Instructions.WelcomeText[0].page
    },
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

      console.log("HELLO WORLDS")
      if ( parameters.ShowWelcome & !(parameters.WelcomeSpoken))
      { return true }
      else { return false }
    }
}

// if the welcome is shown AND spoken then present the spoken
 var if_WelcomeSpoken = {
    timeline: [WelcomeSpoken_loop],
    conditional_function: function() {
        try {
            document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
        } catch (err) {}
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

var notes = {
    type: jsPsychSurveyText,
    questions: [
      {prompt: function() { return LabelNames.NoteInputBox },
      columns: 80,
      rows: 20,
    },
    ],
    randomize_question_order: true
  };

var if_Notes = {
    timeline: [notes],
    conditional_function: function() {
        if ( parameters.AskForNotes )
        { return true }
        else { return false }
    }
}

var Notes = {
    timeline: [if_Notes]
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

var if_thank_you = {
    timeline: [thank_you],
    conditional_function: function() {
        if ( parameters.ShowThankYou )
        { return true }
        else { return false }
    }
}

var ThankYou = {
    timeline: [if_thank_you]
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
        console.log(LabelNames.ProgressBar)
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
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
    stimulus: function (){
        var Str = Instructions.Instructions01[countInstr01].page
        Str += '<p>'+ LabelNames.PressNext +'</p>'
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}

var Instructions01Spoken = {
    type: jsPsychAudioButtonResponse,
    stimulus: function() { return parameters.Instructions01Audio[countInstr01] },
    choices: function() { return [LabelNames.Repeat] },
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
      countInstr01+=1
      if ( countInstr01 < Instructions.Instructions01.length) 
      { return true} else { return false}
    }
}

var if_Instructions01Written = {
    timeline: [Instructions01Written_loop],
    conditional_function: function() {
        document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
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



var Instructions02_progress_bar_timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
        timer_progress_bar(parameters.Instructions02Time[countInstr02]) }
    }
}

var Instructions02_progress_bar_timer_stop = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        clearInterval(interval);
        document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
         }
    }
}

var Instructions02Written = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){
        var Str = Instructions.Instructions02[countInstr02].page
        Str += '<p>'+ LabelNames.PressNext +'</p>'
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}

var Instructions02Spoken = {
    type: jsPsychAudioButtonResponse,
    stimulus: function() { return parameters.Instructions02Audio[countInstr02] },
    choices: function() { return [LabelNames.Repeat] },
    prompt: function() { return Instructions.Instructions02[countInstr02].page},
    response_allowed_while_playing: false,
    response_ends_trial: true,
    trial_duration: function() { return parameters.Instructions02Time[countInstr02] },
};

// This loop allows the user to repeat the instructions
var Instructions02SpokenRepeat_loop = {
    timeline: [Instructions02_progress_bar_timer_start, Instructions02Spoken, Instructions02_progress_bar_timer_stop],
    loop_function: function(data){
        if ( data.trials[1].response == 0 ) 
        { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions02Spoken_loop = {
    timeline: [Instructions02SpokenRepeat_loop],
    loop_function: function(data){
      countInstr02 += 1
      if ( countInstr02 < Instructions.Instructions02.length) 
      { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions02Written_loop = {
    timeline: [Instructions02Written],
    loop_function: function(data){
      countInstr02+=1
      if ( countInstr02 < Instructions.Instructions02.length) 
      { return true} else { return false}
    }
}

var if_Instructions02Written = {
    timeline: [Instructions02Written_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & ! parameters.InstructionsSpoken)
          { return true }
          else { return false }
    }
}

var if_Instructions02Spoken = {
    timeline: [Instructions02Spoken_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & parameters.InstructionsSpoken )
          { return true }
          else { return false }
    }
}
var Instructions02 = {
    timeline: [if_Instructions02Written, if_Instructions02Spoken]
}


var Instructions03_progress_bar_timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
        timer_progress_bar(parameters.Instructions03Time[countInstr03]) }
    }
}

var Instructions03_progress_bar_timer_stop = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        clearInterval(interval);
        document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
         }
    }
}

var Instructions03Written = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){
        var Str = Instructions.Instructions03[countInstr03].page
        Str += '<p>'+ LabelNames.PressNext +'</p>'
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}

var Instructions03Spoken = {
    type: jsPsychAudioButtonResponse,
    stimulus: function() { return parameters.Instructions03Audio[countInstr03] },
    choices: function() { return [LabelNames.Repeat] },
    prompt: function() { return Instructions.Instructions03[countInstr03].page},
    response_allowed_while_playing: false,
    response_ends_trial: true,
    trial_duration: function() { return parameters.Instructions03Time[countInstr03] },
};

// This loop allows the user to repeat the instructions
var Instructions03SpokenRepeat_loop = {
    timeline: [Instructions03_progress_bar_timer_start, Instructions03Spoken, Instructions03_progress_bar_timer_stop],
    loop_function: function(data){
        if ( data.trials[1].response == 0 ) 
        { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions03Spoken_loop = {
    timeline: [Instructions03SpokenRepeat_loop],
    loop_function: function(data){
      countInstr03 += 1
      if ( countInstr03 < Instructions.Instructions03.length) 
      { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions03Written_loop = {
    timeline: [Instructions03Written],
    loop_function: function(data){
      countInstr03+=1
      if ( countInstr03 < Instructions.Instructions03.length) 
      { return true} else { return false}
    }
}

var if_Instructions03Written = {
    timeline: [Instructions03Written_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & ! parameters.InstructionsSpoken)
          { return true }
          else { return false }
    }
}

var if_Instructions03Spoken = {
    timeline: [Instructions03Spoken_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & parameters.InstructionsSpoken )
          { return true }
          else { return false }
    }
}
var Instructions03 = {
    timeline: [if_Instructions03Written, if_Instructions03Spoken]
}



var Instructions04_progress_bar_timer_start = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        document.getElementById("progress-bar-text").innerHTML = LabelNames.ProgressBar
        timer_progress_bar(parameters.Instructions04Time[countInstr04]) }
    }
}

var Instructions04_progress_bar_timer_stop = {
    type: jsPsychCallFunction,
    func: function(){ 
      if ( parameters.InstructionsSpoken > 0 ) {
        clearInterval(interval);
        document.getElementById("jspsych-progressbar-container").style.visibility = "hidden"
         }
    }
}

var Instructions04Written = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){
        var Str = Instructions.Instructions04[countInstr04].page
        Str += '<p>'+ LabelNames.PressNext +'</p>'
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}

var Instructions04Spoken = {
    type: jsPsychAudioButtonResponse,
    stimulus: function() { return parameters.Instructions04Audio[countInstr04] },
    choices: function() { return [LabelNames.Repeat] },
    prompt: function() { return Instructions.Instructions04[countInstr04].page},
    response_allowed_while_playing: false,
    response_ends_trial: true,
    trial_duration: function() { return parameters.Instructions04Time[countInstr04] },
};

// This loop allows the user to repeat the instructions
var Instructions04SpokenRepeat_loop = {
    timeline: [Instructions04_progress_bar_timer_start, Instructions04Spoken, Instructions04_progress_bar_timer_stop],
    loop_function: function(data){
        if ( data.trials[1].response == 0 ) 
        { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions04Spoken_loop = {
    timeline: [Instructions04SpokenRepeat_loop],
    loop_function: function(data){
      countInstr04 += 1
      if ( countInstr04 < Instructions.Instructions04.length) 
      { return true} else { return false}
    }
}

// This loops over multiple pages of the instructions
var Instructions04Written_loop = {
    timeline: [Instructions04Written],
    loop_function: function(data){
      countInstr04+=1
      if ( countInstr04 < Instructions.Instructions04.length) 
      { return true} else { return false}
    }
}

var if_Instructions04Written = {
    timeline: [Instructions04Written_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & ! parameters.InstructionsSpoken)
          { return true }
          else { return false }
    }
}

var if_Instructions04Spoken = {
    timeline: [Instructions04Spoken_loop],
    conditional_function: function() {
          if ( parameters.ShowInstructions & parameters.InstructionsSpoken )
          { return true }
          else { return false }
    }
}
var Instructions04 = {
    timeline: [if_Instructions04Written, if_Instructions04Spoken]
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