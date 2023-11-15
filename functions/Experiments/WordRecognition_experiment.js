
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
        AudioFileList = CreateAudioFileList(BaseFolderName+parameters.FolderName, WordList, parameters.FileExtension)
        console.log(AudioFileList)
    }
}

var preload_audio = {
    type: jsPsychPreload,
    audio: function(){
        document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
        jsPsych.setProgressBar(0)
        return AudioFileList
    }
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
        if ( parameters.VisualPresentation )
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
    trial_duration: function(){return parameters.RecogDuration*1000},
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
    trial_duration: function(){return parameters.RecogDuration*1000},
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

var SendData = {
    type: jsPsychCallFunction,
    func: function() {
      var data = jsPsych.data.get()
      Results = WordRecog_Scoring(data)
      console.log(Results)
      jsPsych.finishTrial(Results)
    }
}
  
// =======================================================================

var LoopVisual = {
    timeline: [VisualStimulus],
    loop_function: function(){
      if ( ItemCount < WordList.length - 1 ) {
        jsPsych.setProgressBar((ItemCount+1)/(AudioFileList.length-1))
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
            jsPsych.setProgressBar((ItemCount+1)/(AudioFileList.length-1))
            ItemCount += 1
            return true
        }
        else { return false}
    }
}


// =======================================================================
var if_Spoken = {
    timeline: [IntializeMicrophone, SetupSpeechRecognition],
    conditional_function: function() {
        if ( parameters.RecallType == 'Spoken' )
        { return true }
        else { return false }
    }
}

// If audio stimuli are used with or without visual
var if_Audio = {
    timeline: [LoopAudio],
    conditional_function: function() {
        if ( parameters.AudioPresentation )
        { return true }
        else { return false }
    }
}

// if no audio stimuli then it assumes visual stimuli
var if_Visual = {
    timeline: [LoopVisual],
    conditional_function: function() {
        if ( parameters.AudioPresentation )
        { return false }
        else { return true }
    }
}
  
// =======================================================================
// Add procedures to the timeline
timeline.push(Welcome)
timeline.push(Instructions01)
timeline.push(MakeWordList)
timeline.push(preload_audio)
timeline.push(if_Spoken)
timeline.push(if_Audio)
timeline.push(if_Visual)
timeline.push(if_Notes)
timeline.push(ThankYou)
timeline.push(SendData)

  

