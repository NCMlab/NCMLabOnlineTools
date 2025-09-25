
var Results

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
        console.log(navigator)
        window.mobileCheck = function() {
            let check = false;

            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };
        console.log(window.mobileCheck())
    //let chromeAgent = Results.AllResults['Computer Information'].indexOf("Chrome") > -1; 
      if ( ! window.mobileCheck() )
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
        console.log(Instructions)
        var Str = Instructions.WelcomeText[0].page
        Str += "<p>"+LabelNames.PressNext+"</p>"
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
    valid_choices: '',
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
      if ( parameters.ShowWelcome  & !( parameters.WelcomeSpoken))
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
    valid_choices: '',
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
        console.log("JASON -- INSTRUCTIONS 01")
        console.log(Instructions)
        var Str = Instructions.Instructions01[countInstr01].page
        Str += '<p>'+ LabelNames.PressNext +'</p>'
        return Str
    },
    post_trial_gap: 0,
    margin_horizontal: function() { return GapBetweenButtons },
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
    valid_choices: '',
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
    valid_choices: '',
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
    valid_choices: '',
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
    valid_choices: '',
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
      encoder.setDelay(GIFsetDelay); 
      encoder.setQuality(20) // 1 is highest quality and 20 is lowest
      
      // For 20 sec at quality 20, TrailsA=505, B=474

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