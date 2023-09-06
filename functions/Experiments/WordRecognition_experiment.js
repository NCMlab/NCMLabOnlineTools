
// =======================================================================
// Define internal variables
var timeline = [];
var AudioFileList
var ItemCount = 0
var countInstr = 0
var userSaidWords
// =======================================================================
// Setup
var IntializeMicrophone = {
    type: jsPsychInitializeMicrophone
};


// Get word list
var MakeWordList = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(parameters)
        console.log(BaseFolderName)
        WordList = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.RecognitionWordList))
        RecogAnswerKey = CreateRecognitionAnswerKey(WordRecallLists.RecognitionWordList)
        AudioFileList = CreateAudioFileList(BaseFolderName+WordRecog_parameters.FolderName, WordList, WordRecog_parameters.FileExtension)
        console.log(WordList)
        console.log(RecogAnswerKey)
    }
}

var preload_audio = {
    type: jsPsychPreload,
    audio: function(){return AudioFileList}
};
// =======================================================================  
// Define the stimuli
var AudioStimulus = {
    type: jsPsychAudioButtonResponse,
    on_start: function() {
        // Move this
        annyang.start({autorestart: false, continuous: true});
    },
    stimulus: function()
        {
        // find what trial index this is
        ind = (TrialCount) % WordRecallLists.NWords
        //Stim = jsPsych.timelineVariable('Word')
        Stim = AudioFileList[ItemCount]
        // return the chosen stimulus
        console.log(Stim)
        return Stim
        },
        // If there is to be audio AND visual 
        prompt: function() {
        if ( WordRecog_parameters.VisualPresentation )
        { 
            return '<p class="Fixation">'+WordList[ItemCount]+'</p>'
        }
        else 
        {
            return '<p class="Fixation">+</p>'
        }
    },
    margin_horizontal: GapBetweenButtons,
    choices: ['Yes','No'],  
    trial_duration: function(){return WordRecog_parameters.RecogDuration*1000},
    on_finish: function(data) {
        data.task = 'Recognition'
        // Check response for accuracy
        if ( RecogAnswerKey[ItemCount] && data.response == 0 ) 
        { 
            data.accuracy = 'correct' 
            data.response = 'yes'
            data.DetectionTheory = 'Hit'
        }
        if ( RecogAnswerKey[ItemCount] && data.response == 1 ) 
        { 
            data.accuracy = 'incorrect' 
            data.response = 'no'
            data.DetectionTheory = 'Miss'
        }
        if ( ! RecogAnswerKey[ItemCount] && data.response == 0 ) 
        { 
            data.accuracy = 'incorrect' 
            data.response = 'yes'
            data.DetectionTheory = 'False Alarm'
        }
        if ( ! RecogAnswerKey[ItemCount] && data.response == 1 ) 
        { 
            data.accuracy = 'correct' 
            data.response = 'no'
            data.DetectionTheory = 'Correct Rejection'
        }
        // Move this
        annyang.abort()
        // updatethe trial counter
        TrialCount++
        console.log('Finished Audio Presentation')
    },
};    

var VisualStimulus = {
    type: jsPsychHtmlButtonResponse,
    on_start: function() {
        // Move this
        annyang.start({autorestart: false, continuous: true});
    },
    stimulus: function()
      {
        return '<p class="Fixation">'+WordList[ItemCount]+'</p>'
      },
    choices: ['Yes','No'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    //trial_duration: function(){return WordRecall_parameters.TimePerWord},
    //prompt: function() {return Instructions.WordRecallPrompt}, //Add this to config file
    trial_duration: function(){return WordRecog_parameters.RecogDuration*1000},
    on_finish: function(data) {
        data.task = 'Recognition'
        console.log(data)
        // Move this
        annyang.abort()
        // update the trial counter
        TrialCount++
    }
  };
// =======================================================================
var welcome = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {return Instructions.WelcomeText[0].page},
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
  }
  
var Instructions_Procedure = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function (){return Instructions.InstructionText[countInstr].page},
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: '',
    choices: function() {return [LabelNames.Next]}, 
}  

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
      var data = jsPsych.data.get()
      Results = WordRecog_Scoring(data)
      console.log(Results)
      //jsPsych.finishTrial(Results)
    }
}
  
var thank_you = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
        console.log(Instructions)
        return Instructions.ThankYouText[0].page},
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
}
// =======================================================================

var LoopVisual = {
    timeline: [VisualStimulus],
    loop_function: function(){
      if ( ItemCount < WordList.length - 1 ) {
        ItemCount += 1
        return true
      }
      else { return false}
    }
  }

var LoopAudio = {
    timeline: [AudioStimulus ],
    loop_function: function(){
        if ( ItemCount < AudioFileList.length-1 ) {
        ItemCount += 1
        return true
        }
        else { return false}
    }
}

var instr_procedure_loop_node = {
    timeline: [Instructions_Procedure],
    loop_function: function(data){
      console.log("Instructional Loop Count is: "+countInstr)
      countInstr+=1
      if ( countInstr < Instructions.InstructionText.length){
          return true} else { return false}
    }
  }

// =======================================================================
var if_Spoken = {
    timeline: [IntializeMicrophone, SetupSpeechRecognition],
    conditional_function: function() {
        if ( WordRecog_parameters.RecallType == 'Spoken' )
        { return true }
        else { return false }
    }
}

// If audio stimuli are used with or without visual
var if_Audio = {
    timeline: [LoopAudio],
    conditional_function: function() {
        if ( WordRecog_parameters.AudioPresentation )
        { return true }
        else { return false }
    }
}

// if no audio stimuli then it assumes visual stimuli
var if_Visual = {
    timeline: [LoopVisual],
    conditional_function: function() {
        if ( WordRecog_parameters.AudioPresentation )
        { return false }
        else { return true }
    }
}

var if_Welcome = {
    timeline: [welcome],
    conditional_function: function() {
      if ( WordRecog_parameters.ShowWelcome)
      { return true }
      else { return false }
    }
}
  
var if_Test_Instructions = {
    timeline: [instr_procedure_loop_node],
    conditional_function: function() {
            if ( WordRecog_parameters.ShowInstructions)
            { 
            return true }
            else { return false }
    }
}

var if_ThankYou = {
    timeline: [thank_you],
    conditional_function: function() {
        if ( WordRecog_parameters.ShowThankYou )
        { return true }
        else { return false }
    }
}
  
var if_Notes = {
    timeline: [Notes],
    conditional_function: function() {
      if ( WordRecog_parameters.AskForNotes)
      { return true }
      else { return false }
    }
  }
// =======================================================================
// Add procedures to the timeline
timeline.push(if_Welcome)
timeline.push(if_Test_Instructions)
timeline.push(MakeWordList)
timeline.push(preload_audio)
timeline.push(if_Spoken)
timeline.push(if_Audio)
timeline.push(if_Visual)
timeline.push(if_Notes)
timeline.push(SendData)
timeline.push(if_ThankYou)
  

