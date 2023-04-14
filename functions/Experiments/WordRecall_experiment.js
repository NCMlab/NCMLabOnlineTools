
// What is needed?
/*
- Ask participant to read a practice list of words to make sure they can be recognized by 
the computer.
- If words can not be identified decide to skip this experiment. 
- Calculate all of the scores.
- Present words a set number of time and modify the word list each time

*/

// =======================================================================
// Define internal variables
var timeline = [];
var ind = 0;
var interval
var time_left
var WordList = []
var SimpleWordList = []
var FullWordList = []
var WordListIndex = []
var FullListIndex = []
var TrialCount
var RecallProcedureB
var AudioFileListA
var AudioFileListB
var WordListAForRecall = 'empty'
var WordListBForRecall
var AudioFileDictListA
var AudioFileDictListB
var ItemCount = 0
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

// preload audio
// There will always be an A list
var preload_audioA = {
  type: jsPsychPreload,
  audio: function(){return AudioFileListA},
  on_start: function() {console.log(AudioFileDictListA)}
};
var preload_audioB = {
  type: jsPsychPreload,
  audio: AudioFileListB,
};

var if_BList_preload = {
  timeline: [preload_audioB],
  conditional_function: function(){
    console.log(WordRecall_parameters.BListFlag)
    return  WordRecall_parameters.BListFlag}
}

// Make response array
var MakeResponseArray = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(WordRecall_parameters.NBlocks)
    var ResponseArray = CreateResponseArray(NWords, WordRecall_parameters.NBlocks)    
  }
}
var ResetCounter = {
  type: jsPsychCallFunction,
  func: function() {
    ItemCount = 0
  }
}

ItemCount
var MakeWordListA = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(WordRecall_parameters)
    SimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(WordListA))
    // Make a simple list of the alternative pronunciations
    AltSimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(AlternatePronunciationsWordListA))
    // Make a full list the words and thier alternative pronunciations
    FullWordListA = SimpleWordListA.concat(AltSimpleWordListA)
    // indices fro the primary word list
    WordListIndexA = CreateWordListIndex(WordListA)
    // indices for the world list containing the alternatives
    FullListIndexA = CreateSimpleIndexList(WordListA, AlternatePronunciationsWordListA)
    // convert WordList to a list of filenames for teh audio files for each word
    AudioFileListA = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, SimpleWordListA, WordRecall_parameters.FileExtension)
    // convert it back to a list of dictionaries
    AudioFileDictListA = AudioFileListA.map(function(e) {
      return {Word: e}
    })
    // Create an array so the recall procedure can use a timelinevariable
    WordListAForRecall = {
      'WordList': WordListA,
      'SimpleWordList': SimpleWordListA,
      'FullWordList': FullWordListA,
      'WordListIndex': WordListIndexA,
      'FullListIndex': FullListIndexA,
    }
    console.log(WordListAForRecall)
    console.log(AudioFileListA)
  }
}

var MakeWordListB = {
  type: jsPsychCallFunction,
  func: function() {
    // PREP WORK FOR WORD LIST B
    // take list of words as dictionary items and make a simple list out of it
    SimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(WordListB))
    // Make a simple list of the alternative pronunciations
    AltSimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(AlternatePronunciationsWordListB))
    // Make a full list the words and thier alternative pronunciations
    FullWordListB = SimpleWordListB.concat(AltSimpleWordListB)
    // indices fro the primary word list
    WordListIndexB = CreateWordListIndex(WordListB)
    // indices for the world list containing the alternatives
    FullListIndexB = CreateSimpleIndexList(WordListB, AlternatePronunciationsWordListB)
    // convert WordList to a list of filenames for teh audio files for each word
    AudioFileListB = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, SimpleWordListB, WordRecall_parameters.FileExtension)
    // convert it back to a list of dictionaries
    AudioFileDictListB = AudioFileListB.map(function(e) {
      return {Word: e}
    })
    // Create an array so the recall procedure can use a timelinevariable
    WordListBForRecall = {
      'WordList': WordListB,
      'SimpleWordList': SimpleWordListB,
      'FullWordList': FullWordListB,
      'WordListIndex': WordListIndexB,
      'FullListIndex': FullListIndexB,
    }
  }
}

var if_Spoken_RecallA = {
  timeline: [SpokenRecallA],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Spoken' )
    { return true }
    else { return false }
  }
}
var if_Manual_RecallA = {
  timeline: [ManualRecallA],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Manual' )
    { return true }
    else { return false }
  }
}
var if_Spoken_RecallB = {
  timeline: [SpokenRecallB],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Spoken' && WordRecall_parameters.BListFlag)
    { return true }
    else { return false }
  }
}
var if_Manual_RecallB = {
  timeline: [ManualRecallB],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Manual' && WordRecall_parameters.BListFlag)
    { return true }
    else { return false }
  }
}


// =======================================================================
// Define all of the different the stimuli 
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p class="Fixation">+</p>',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: FixationTimeBetweenWords
}

// Define the stimuli
var AudioStimulus = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: function()
      {
        Stim = ''
        // find what trial index this is
        ind = (TrialCount) % NWords
        //Stim = jsPsych.timelineVariable('Word')
        console.log(ItemCount)
        Stim = AudioFileDictListA[ItemCount].Word
        // return the chosen stimulus
        return Stim
      },
    choices: [],  
    trial_duration: function(){return WordRecall_parameters.TimePerWord},
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    },
  };
// NOT IMPLEMEMTED
var VisualStimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        // find what trial index this is
        ind = (TrialCount) % NWords
        // check to see if this trial was recalled in the previous block
        if (WordListIndex[ind] > -99) {
          // if NOT, then present the word
          Stim = jsPsych.timelineVariable('Word')
        }
        else {
          // if YES, then present the fixation cross
          Stim = '<p class="Fixation">+</p>'
        }
        // return the chosen stimulus
        console.log(Stim)        
        Stim = '<p  class="Fixation">' +Stim+'</p>'
        return Stim
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: function() {
      // if this word was recalled previously change the duration to 0 seconds also
      if (WordListIndex[ind] > -99) {
        return TimePerWord
      }
      else {
        return 0
      }
    },
    prompt: WordPrompt, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };


// Define instructions
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
// Add scoring procedures to the Thank you screen
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = WordRecall_Scoring(data)
    jsPsych.finishTrial(Results)
  }
}

// =======================================================================    
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback
  var instr_procedure01 = {
      timeline: [Instructions],
      timeline_variables: Instructions01,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_procedure02 = {
      timeline: [Instructions],
      timeline_variables: Instructions02,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_procedure03 = {
      timeline: [Instructions],
      timeline_variables: Instructions03,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_procedure04 = {
      timeline: [Instructions],
      timeline_variables: Instructions04,
      randomize_order: false,
      repetitions: 1,
    }

  var PresentListOfWordsA = {
      timeline: [fixation, AudioStimulus],
      timeline_variables: AudioFileDictListA,
      repetitions: 1,
      randomize_order: false      
  }

  var LoopAudioFiles = {
    timeline: [AudioStimulus],
    loop_function: function(){
      console.log(ItemCount)
      if ( ItemCount < AudioFileDictListA.length-1 ) {
        ItemCount += 1
        return true
      }
      else { return false}
    }
  }

  var PresentListOfWordsB = {
      timeline: [fixation, AudioStimulus],
      timeline_variables: AudioFileDictListB,
      repetitions: 1,
      randomize_order: false      
  }

var FirstBlock = {
      timeline: [instr_procedure01, LoopAudioFiles, ResetCounter, if_Manual_RecallA, if_Spoken_RecallA],
      randomize_order: false,
      repetitions: 1,
  } 

  var AfterFirstBlock = {
      timeline: [instr_procedure02, LoopAudioFiles, ResetCounter, if_Manual_RecallA, if_Spoken_RecallA],
      randomize_order: false,
      repetitions: WordRecall_parameters.NBlocks - 1,
  } 

  var BlockB = {
      timeline: [instr_procedure03, PresentListOfWordsB, ResetCounter, if_Manual_RecallB, if_Spoken_RecallB],
      randomize_order: false,
      repetitions: 1,
  } 
  var FinalRecalBlockA = {
      timeline: [instr_procedure04, if_Manual_RecallA, if_Spoken_RecallA],
      randomize_order: false,
      repetitions: 1,
  } 
  var welcome = {
    timeline: [Instructions],
    timeline_variables: WelcomeText,
    randomize_order: false,
    repetitions: 1,
  }

  var thank_you = {
      timeline: [Instructions],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
    }  

  var DelayedRecallNo = {
    timeline: [MakeWordListA, MakeWordListB, preload_audioA, if_BList_preload, MakeResponseArray, FirstBlock, AfterFirstBlock],
    conditional_function: function() {
      console.log(WordRecall_parameters)
      if ( WordRecall_parameters.DelayedRecallFlag)
      { return false }
      else { return true }
    }
  }    
  var DelayedRecallYes = {
    timeline: [MakeWordListA, FinalRecalBlockA],
    conditional_function: function() {
      if ( WordRecall_parameters.DelayedRecallFlag)
      { return true }
      else { return false }
    }
  }      

  var if_Welcome = {
    timeline: [welcome],
    conditional_function: function() {
      if ( WordRecall_parameters.ShowWelcome)
      { return true }
      else { return false }
    }
  }
  
  var if_ThankYou = {
    timeline: [thank_you],
    conditional_function: function() {
      if ( WordRecall_parameters.ShowThankYou)
      { return true }
      else { return false }
    }
  }
  
// ======================================================================= 
// Add procedures to the timeline
timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(DelayedRecallNo)
timeline.push(DelayedRecallYes)
timeline.push(SendData)
timeline.push(if_ThankYou)
/* timeline.push(MakeWordListA)
timeline.push(MakeWordListB)
timeline.push(preload_audioA)
timeline.push(if_BList_preload)
timeline.push(MakeResponseArray)
timeline.push(FirstBlock)
timeline.push(AfterFirstBlock)

*/