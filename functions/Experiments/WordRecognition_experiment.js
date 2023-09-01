
// =======================================================================
// Define internal variables
var timeline = [];
// =======================================================================
// Setup


// Get word list
var MakeWordList = {
    type: jsPsychCallFunction,
    func: function() {
        console.log(parameters)
        WordList = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.RecognitionWordList))
        AudioFileList = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, WordList, WordRecall_parameters.FileExtension)
        console.log(WordList)
    }
}

var preload_audio = {
    type: jsPsychPreload,
    audio: function(){return AudioFileList},
    on_start: function() {}
  };
  



// Define the stimuli
var AudioStimulus = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: function()
      {
        Stim = '+'
        // find what trial index this is
        ind = (TrialCount) % WordRecallLists.NWords
        //Stim = jsPsych.timelineVariable('Word')
        Stim = AudioFileDictListA[ItemCount].Word
        // return the chosen stimulus
        console.log(Stim)
        return Stim
      },
      // If there is to be audio AND visual 
      prompt: function() {
        if ( WordRecall_parameters.VisualPresentation )
        { 
          return '<p class="Fixation">'+WordList[ItemCount]+'</p>'
        }
        else 
        {
          return '<p class="Fixation">+</p>'
        }
      },
    choices: [],  
    trial_duration: function(){return WordRecall_parameters.TimePerWord},
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    },
  };  

var VisualStimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        return '<p class="Fixation">'+WordList[ItemCount]+'</p>'
      },
    choices: ['Yes','No'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    //trial_duration: function(){return WordRecall_parameters.TimePerWord},
    //prompt: function() {return Instructions.WordRecallPrompt}, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };

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
    timeline: [AudioStimulus],
    loop_function: function(){
      if ( ItemCount < AudioFileList.length-1 ) {
        ItemCount += 1
        return true
      }
      else { return false}
    }
  }

var PresentRecognitionWords = {
    timeline: [MakeWordList,  LoopVisual],
    timeline_variables: function() {
      console.log(WordListAForRecall.WordList)
      return WordListAForRecall.WordList
    },
    repetitions: 1,
    randomize_order: false      
  }


  var if_Spoken = {
    timeline: [SetupSpeechRecognition],
    conditional_function: function() {
      if ( WordRecall_parameters.RecallType == 'Spoken' )
      { return true }
      else { return false }
    }
  }


var YesNoTrial = {
    // This is a single trial
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
        var stim = 'Please, say as many <b>'+category+'</b> as possible.<p><span id="clock">1:00</span></p>'
        return stim 
      },
      choices: ['Yes', 'No'], 
      margin_horizontal: GapBetweenButtons,
      post_trial_gap: 0,
      prompt: '', //Add this to config file
      response_ends_trial: true,
      trial_duration: 10000,
      on_start: function() {
        // Move this
        annyang.start({autorestart: false, continuous: true});
      },
      on_finish: function(data){
        //data.HeardList = TotalList
        data.SimpleList = SimpleList
        data.task = 'Recall'
        clearInterval(interval);
        console.log(data)
        // Move this
        annyang.abort()
      },
    }

timeline.push(MakeWordList)