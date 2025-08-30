
// What is needed?
/*
- Ask participant to read a practice list of words to make sure they can be recognized by 
the computer.
- If words can not be identified decide to skip this experiment. 
- Calculate all of the scores.
- Present words a set number of time and modify the word list each time

*/

// =======================================================================
// DEFINE VARIABLES

var timeline = [];
var ind = 0;
var interval
var time_left
var WordList = []
var WordListA
var WordListB
var SimpleWordList = []
var FullWordList = []
var WordListIndex = []
var FullListIndex = []
var TrialCount = 0
var TrialCountB = 0
var BlockCount = 0
var RecallProcedureB
var AudioFileListA
var AudioFileListB
var WordListAForRecall = 'empty'
var WordListBForRecall
var AudioFileDictListA
var AudioFileDictListB
var TempRecall
var NumberBlocks
var ItemCount = 0
var countInstr01 = 0
var countInstr02 = 0
var countInstr03 = 0
var countInstr04 = 0
var countInstrDelay = 0
var IntrusionListA = []
var IntrusionListB = []
// =======================================================================
// INITIAL SETUP
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}
/*
var InitializeMicrophone = {
  type: jsPsychInitializeMicrophone,
  device_select_message: function() { return LabelNames.SelectMicrophone },
  button_label: function() { return LabelNames.UseThisMicrophone },
  on_finish: function() {
    // after choice and initialization, save the microphone info to the jatos session data
    recorder = jsPsych.pluginAPI.getMicrophoneRecorder();
    MicrophoneInfo = jsPsych.pluginAPI.getMicrophoneRecorder()
    // jatos cannot store the microphone object, so just save the microphone ID
     jatos.studySessionData.Microphone = MicrophoneInfo.stream.id
  }
};

var CheckMicrophone = {
  timeline: [InitializeMicrophone],
  conditional_function: function() {
    // if there is no microphone stored in the jatos session data
    // then initialize it
    if ( jatos.studySessionData.Microphone == null )
    { return true }
    // get the jatos session data and give it to the current jspsych task
    else { 
      console.log("INITIAL MICRO")
      console.log(jatos.studySessionData)
      // recreate the microphone object
      const stream = window.navigator.mediaDevices.getUserMedia({ audio: { deviceId: jatos.studySessionData.Microphone} });
      stream.then(function(result) {
      // initialize the microphone
      jsPsych.pluginAPI.initializeMicrophoneRecorder(result)
      console.log(result)
    })

  };
  return false }
}
*/



var SetupSpeechRecognition = {
  type: jsPsychCallFunction,
  func: function() {
      annyang.removeCommands()
      const commands01 = {'*search': FindRecalledWords01};
      annyang.addCommands(commands01);
      annyang.setLanguage(LANG)

      annyang.addCallback('start', function() {
        console.log('Started Speech Recognition')
      })
      annyang.addCallback('result', function() {
        console.log('Received Speech Recognition Result')
      })
      annyang.addCallback('end', function() {
        
        console.log('Ended Speech Recognition')
      })
      annyang.addCallback('result', function(userSaid) {
        // userSaid contains multiple possibilities for what was heard
        userSaidWords += userSaid
        userSaidWords += ';'
        console.log(userSaidWords)
      });
  }
}

var SetupSpeechRecognitionB = {
  type: jsPsychCallFunction,
  func: function() {
      annyang.removeCommands()
      const commands01 = {'*search': FindRecalledWords02};
      annyang.addCommands(commands01);
      annyang.setLanguage(LANG)
      annyang.addCallback('result', function(userSaid) {
        // userSaid contains multiple possibilities for what was heard
        userSaidWords += userSaid
        userSaidWords += ';'
        console.log(userSaidWords)
      });
  }
}
// preload audio
// There will always be an A list
var preload_audioA = {
  type: jsPsychPreload,
  audio: function(){return AudioFileListA},
  on_start: function() {
    document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
    jsPsych.setProgressBar(0)
  }
};

var preload_audioB = {
  type: jsPsychPreload,
  audio: AudioFileListB,
};

var if_BList_preload = {
  timeline: [preload_audioB],
  conditional_function: function(){
    console.log(parameters.BListFlag)
    return  parameters.BListFlag}
}

// Update Number of blocks variable
var HowManyBlocks = {
  type: jsPsychCallFunction,
  func: function() {
    NumberBlocks = parameters.NBlocks
    console.log("This task will run for "+NumberBlocks+ " blocks")
  }
}

// Make response array
var MakeResponseArrayA = {
  type: jsPsychCallFunction,
  func: function() {
    ResponseArrayA = Array.from(Array(WordRecallLists.WordListA.length), _ => Array(parameters.NBlocks).fill(-99))
    console.log(ResponseArrayA)
  }
}

var MakeDelayedResponseArray = {
  type: jsPsychCallFunction,
  func: function() {
    ResponseArrayA = Array.from(Array(WordRecallLists.WordListA.length), _ => Array(1).fill(-99))
    console.log(ResponseArrayA)
  }
}

var MakeResponseArrayB = {
  type: jsPsychCallFunction,
  func: function() {
    ResponseArrayB = Array.from(Array(WordRecallLists.WordListB.length), _ => Array(1).fill(-99))
    console.log(ResponseArrayB)
  }
}

var MakeWordListA = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(parameters)
    SimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.WordListA))
    SimpleRecogWordList = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.RecognitionWordList))
    // Make a simple list of the alternative pronunciations
    AltSimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.AlternatePronunciationsWordListA))
    // Make a full list the words and thier alternative pronunciations
    FullWordListA = SimpleWordListA.concat(WordRecallLists.AltSimpleWordListA)
    // indices fro the primary word list
    WordListIndexA = CreateWordListIndex(WordRecallLists.WordListA)
    // indices for the world list containing the alternatives
    FullListIndexA = CreateSimpleIndexList(WordRecallLists.WordListA, WordRecallLists.AlternatePronunciationsWordListA)
    // convert WordList to a list of filenames for teh audio files for each word
    console.log(parameters)
    AudioFileListA = CreateAudioFileList(BaseFolderName+parameters.WordList+"/"+LANG+"/"+parameters.FolderName, SimpleWordListA, parameters.FileExtension)
    // convert it back to a list of dictionaries
    AudioFileDictListA = AudioFileListA.map(function(e) {
      return {Word: e}
    })
    // Create an array so the recall procedure can use a timelinevariable
    WordListAForRecall = {
      'WordList': WordRecallLists.WordListA,
      'SimpleWordList': SimpleWordListA,
      'SimpleRecogWordList': SimpleRecogWordList,
      'FullWordList': FullWordListA,
      'WordListIndex': WordListIndexA,
      'FullListIndex': FullListIndexA,
    }
    console.log(AudioFileDictListA)
  }
}

var MakeWordListB = {
  type: jsPsychCallFunction,
  func: function() {
    // PREP WORK FOR WORD LIST B
    // take list of words as dictionary items and make a simple list out of it
    SimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.WordListB))
    // Make a simple list of the alternative pronunciations
    AltSimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.AlternatePronunciationsWordListB))
    // Make a full list the words and thier alternative pronunciations
    FullWordListB = SimpleWordListB.concat(WordRecallLists.AltSimpleWordListB)
    // indices fro the primary word list
    WordListIndexB = CreateWordListIndex(WordRecallLists.WordListB)
    // indices for the world list containing the alternatives
    FullListIndexB = CreateSimpleIndexList(WordRecallLists.WordListB, WordRecallLists.AlternatePronunciationsWordListB)
    // convert WordList to a list of filenames for teh audio files for each word
    AudioFileListB = CreateAudioFileList(BaseFolderName+parameters.WordList+"/"+LANG+"/"+parameters.FolderName, SimpleWordListB, parameters.FileExtension)
    // convert it back to a list of dictionaries
    AudioFileDictListB = AudioFileListB.map(function(e) {
      return {Word: e}
    })
    // Create an array so the recall procedure can use a timelinevariable
    WordListBForRecall = {
      'WordList': WordRecallLists.WordListB,
      'SimpleWordList': SimpleWordListB,
      'FullWordList': FullWordListB,
      'WordListIndex': WordListIndexB,
      'FullListIndex': FullListIndexB,
    }
    console.log(WordListBForRecall)
    console.log(AudioFileDictListB)
  }
}


// =======================================================================
// DEFINE FUNCTIONS


var ResetCounter = {
  type: jsPsychCallFunction,
  func: function() {
    ItemCount = 0
    console.log("Resetting counter")
  }
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    console.log(data)
    Results = WordRecall_Scoring(data, SimpleWordListA, SimpleWordListB)
    jsPsych.finishTrial(Results)
  }
}



// =======================================================================
// DEFINE ALL THE STIMULI

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
        Stim = '+'
        // find what trial index this is
        ind = (TrialCount) % WordRecallLists.NWords
        //Stim = jsPsych.timelineVariable('Word')
        Stim = AudioFileDictListA[ItemCount].Word
        
        // return the chosen stimulus
        return Stim
      },
      prompt: function() {
        if ( parameters.VisualPresentation )
        { 
          var Str = '<p>'+ LabelNames.WordListA+'</p>' + 
            '<p class="Fixation">'+SimpleWordListA[ItemCount]+'</p>'
          return Str
        }
        else 
        {
          var Str = '<p>'+ LabelNames.WordListA+'</p>' + 
            '<p class="Fixation">+</p>'
          return Str
        }
      },
    choices: [],  
    trial_duration: function(){return parameters.TimePerWord},
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    },
  };

  var AudioStimulusB = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: function()
      {
        Stim = '+'
        // find what trial index this is
        ind = (TrialCountB) % WordRecallLists.NWords
        //Stim = jsPsych.timelineVariable('Word')
        Stim = AudioFileDictListB[ItemCount].Word
        // return the chosen stimulus
        return Stim
      },
      prompt: function() {
        if ( parameters.VisualPresentation )
        { 
          var Str = '<p>'+ LabelNames.WordListB+'</p>' + 
          '<p class="Fixation">'+SimpleWordListB[ItemCount]+'</p>'
          return Str
        }
        else 
        {
          var Str = '<p>'+ LabelNames.WordListB+'</p>' + 
            '<p class="Fixation">+</p>'
          return Str
        }
      },
    choices: [],  
    trial_duration: function(){return parameters.TimePerWord},
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
        console.log(jsPsych.timelineVariable('Word'))
        var Str = '<p>'+ LabelNames.WordListA+'</p>' + 
          jsPsych.timelineVariable('Word') + '</p>'
        return Str
        //return '<p class="Fixation">'+SimpleWordListA[ItemCount]+'</p>'
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: function(){return parameters.TimePerWord},
    //prompt: function() {return Instructions.WordRecallPrompt}, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };

  var VisualStimulusB = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        console.log(jsPsych.timelineVariable('Word'))
        var Str = '<p>'+ LabelNames.WordListB+'</p>' + 
          jsPsych.timelineVariable('Word') + '</p>'
        return Str
        //return '<p class="Fixation">'+SimpleWordListA[ItemCount]+'</p>'
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: function(){return parameters.TimePerWord},
    //prompt: function() {return Instructions.WordRecallPrompt}, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };

  var NewAudioStimulus = {
    type: jsPsychAudioButtonResponse,
    on_start: function() {
        // Move this
        console.log("HELLO")
        annyang.start({autorestart: false, continuous: true});
    },
    stimulus: function()
        {
        // find what trial index this is
        ind = (TrialCount) % WordRecallLists.NWords
        //Stim = jsPsych.timelineVariable('Word')
        Stim = AudioFileListA[ItemCount]
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
    trial_duration: function(){return parameters.TimePerWord},
    on_finish: function(data) {
        data.task = 'Recall'
      
        // Move this
        annyang.abort()
        // updatethe trial counter
        TrialCount++
        console.log('Finished Audio Presentation')
    },
};    
// Define instructions


var InstructionsDelayed = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.InstructionsDelayed[countInstrDelay].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}


// =======================================================================    
// LOOPS

var InstructionsDelayed_loop = {
  timeline: [InstructionsDelayed],
  loop_function: function(data){
    console.log(countInstrDelay)
    countInstrDelay+=1
    if ( countInstrDelay < Instructions.InstructionsDelayed.length){
        return true} else { return false}
  }
}
var LoopAudioFiles = {
  timeline: [AudioStimulus],
  loop_function: function(){
    if ( ItemCount < AudioFileDictListA.length-1 ) {
      jsPsych.setProgressBar((ItemCount+1)/(AudioFileDictListA.length-1))
      ItemCount += 1
      return true
    }
    else { 
      jsPsych.setProgressBar(0)
      return false}
  }
}

var LoopAudioFilesB = {
  timeline: [AudioStimulusB],
  loop_function: function(){
    if ( ItemCount < AudioFileDictListB.length-1 ) {
      jsPsych.setProgressBar((ItemCount+1)/(AudioFileDictListB.length-1))
      ItemCount += 1
      return true
    }
    else { 
      jsPsych.setProgressBar(0)
      return false}
  }
}

var LoopVisual = {
  timeline: [VisualStimulus],
  loop_function: function(){
    if ( ItemCount < AudioFileDictListA.length-1 ) {
      jsPsych.setProgressBar((ItemCount+1)/(AudioFileDictListA.length-1))
      ItemCount += 1
      return true
    }
    else { 
      jsPsych.setProgressBar(0)
      return false}
  }
}
var LoopVisualB = {
  timeline: [VisualStimulusB],
  loop_function: function(){
    if ( ItemCount < AudioFileDictListA.length-1 ) {
      jsPsych.setProgressBar((ItemCount+1)/(AudioFileDictListA.length-1))
      ItemCount += 1
      return true
    }
    else { 
      jsPsych.setProgressBar(0)
      return false}
  }
}

// ======================================================================= 
// CONDITIONALS
var if_AudioStimuli = {
  timeline: [LoopAudioFiles],
  conditional_function: function() {
    if ( parameters.AudioPresentation )
    { return true }
    else { return false }
  }
}   
var if_AudioStimuliB = {
  timeline: [LoopAudioFilesB],
  conditional_function: function() {
    if ( parameters.AudioPresentation )
    { return true }
    else { return false }
  }
}   
var if_Spoken = {
  timeline: [CheckMicrophone, SetupSpeechRecognition],
  conditional_function: function() {
      if ( parameters.RecallType == 'Spoken' )
      { return true }
      else { return false }
  }
}

var if_Spoken_RecallA = {
  timeline: [SpokenRecallA],
  conditional_function: function() {
    if ( parameters.RecallType == 'Spoken' )
    { console.log("if_Spoken_RecallA")
      return true }
    else { return false }
  }
}

var if_Manual_RecallA = {
  timeline: [ManualRecallA],
  conditional_function: function() {
    if ( parameters.RecallType == 'Manual' )
    { return true }
    else { return false }
  }
}

var if_Spoken_RecallB = {
  timeline: [SetupSpeechRecognitionB, SpokenRecallB],
  conditional_function: function() {
    if ( parameters.RecallType == 'Spoken' )
    { console.log("if_Spoken_RecallA")
      return true }
    else { return false }
  }
}
var if_Manual_RecallB = {
  timeline: [ManualRecallB],
  conditional_function: function() {
    if ( parameters.RecallType == 'Manual' )
    { return true }
    else { return false }
  }
}


var if_VisualStimuli = {
  timeline: [LoopVisual],
  conditional_function: function() {
    if ( (parameters.VisualPresentation) & ( ! parameters.AudioPresentation) )  
    { return true }
    else { return false }
  }
}    
var if_VisualStimuliB = {
  timeline: [LoopVisualB],
  conditional_function: function() {
    if ( (parameters.VisualPresentation) & ( ! parameters.AudioPresentation) )  
    { return true }
    else { return false }
  }
}    


// =======================================================================    
// PROCEDURES
// Define the test procedure which does NOT provide feedback


var AfterFirstBlockProcedure = {
  timeline: [Instructions02, if_AudioStimuli, if_VisualStimuli, ResetCounter, if_Manual_RecallA, if_Spoken_RecallA],
  repetitions: 1,
  randomize_order: false      
}

var AfterFirstBlockLoop = {
  timeline: [AfterFirstBlockProcedure],
  randomize_order: false,
  loop_function: function(data) {
    // reset count for instructions
    countInstr02 = 0
    console.log("Block Count (in loop): " + (BlockCount))
    if ( ((BlockCount)) < NumberBlocks )
    { return true }
    else { return false }
  }
}  
var if_MoreThanOneBlock = {
  timeline: [AfterFirstBlockLoop],
  conditional_function: function() {
    if ( parameters.NBlocks > 1 ) 
    { return true}
    else {return false}
  }
}
var PresentListOfWordsA = {
    timeline: [fixation, AudioStimulus],
    timeline_variables: AudioFileDictListA,
    repetitions: 1,
    randomize_order: false      
}


var PresentListOfWordsB = {
    timeline: [fixation, AudioStimulusB],
    timeline_variables: AudioFileDictListB,
    repetitions: 1,
    randomize_order: false      
}

var FirstBlock = {
      timeline: [Instructions01, if_AudioStimuli, if_VisualStimuli, ResetCounter, if_Manual_RecallA, if_Spoken_RecallA],
      repetitions: 1,
      randomize_order: false
  } 

var FinalRecallBlockA = {
    timeline: [SetupSpeechRecognition, Instructions04, if_Manual_RecallA, if_Spoken_RecallA],
    randomize_order: false,
    repetitions: 1,
} 

var DelayedRecalBlockA = {
  timeline: [InstructionsDelayed_loop, if_Manual_RecallA, if_Spoken_RecallA],
  randomize_order: false,
  repetitions: 1,
} 

var DelayedRecallNo = {
  timeline: [MakeWordListA, MakeWordListB, preload_audioA, if_BList_preload, HowManyBlocks, FirstBlock, if_MoreThanOneBlock],
  conditional_function: function() {
    console.log(parameters)
    if ( parameters.DelayedRecallFlag)
    { return false }
    else { return true }
  }
}    

 

var DelayedRecallYes = {
  timeline: [MakeWordListA, MakeWordListB, MakeDelayedResponseArray, DelayedRecalBlockA],
  conditional_function: function() {
    if ( parameters.DelayedRecallFlag)
    { return true }
    else { return false }
  }
}      

var BlockB = {
  timeline: [Instructions03, if_AudioStimuliB, ResetCounter, if_Manual_RecallB, if_Spoken_RecallB],
  randomize_order: false,
  repetitions: 1,
}

var if_RecallB = {
  timeline: [BlockB],
  conditional_function: function() {
    if (parameters.BListFlag)
    { return true }
    else { return false }
  }
}
var if_FinalRecallA = {
  timeline: [FinalRecallBlockA],
  conditional_function: function() {
    if (parameters.BListFlag)
    { return true }
    else { return false }
  }
}


//parent
//turkey 
//Color
//house
//garden

// ======================================================================= 
// Add procedures to the timeline

timeline.push(Welcome)
timeline.push(if_Spoken)
timeline.push(enter_fullscreen)

timeline.push(DelayedRecallNo)
timeline.push(DelayedRecallYes)
timeline.push(if_RecallB)
timeline.push(if_FinalRecallA)

//timeline.push(if_Notes)
//timeline.push(if_ThankYou)

timeline.push(Notes)
timeline.push(ThankYou)
timeline.push(SendData)

/* 
timeline.push(MakeWordListA)
timeline.push(MakeWordListB)
timeline.push(preload_audioA)
timeline.push(if_BList_preload)
timeline.push(MakeResponseArray)
timeline.push(FirstBlock)
timeline.push(AfterFirstBlock)
*/