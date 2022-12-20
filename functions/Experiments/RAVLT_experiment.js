
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

// PREP WORK FOR WORD LIST A
// take list of words as dictionary items and make a simple list out of it
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
AudioFileListA = CreateAudioFileList(FolderName, SimpleWordListA, FileExtension)
// convert it back to a list of dictionaries
var AudioFileDictListA = AudioFileListA.map(function(e) {
  return {Word: e}
})
// Create an array so the recall procedure can use a timelinevariable
var WordListAForRecall = [{
  'WordList': WordListA,
  'SimpleWordList': SimpleWordListA,
  'FullWordList': FullWordListA,
  'WordListIndex': WordListIndexA,
  'FullListIndex': FullListIndexA,
}]

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
AudioFileListB = CreateAudioFileList(FolderName, SimpleWordListB, FileExtension)
// convert it back to a list of dictionaries
var AudioFileDictListB = AudioFileListB.map(function(e) {
  return {Word: e}
})
// Create an array so the recall procedure can use a timelinevariable
var WordListBForRecall = [{
  'WordList': WordListB,
  'SimpleWordList': SimpleWordListB,
  'FullWordList': FullWordListB,
  'WordListIndex': WordListIndexB,
  'FullListIndex': FullListIndexB,
}]

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// preload audio
var preload_audioA = {
  type: jsPsychPreload,
  audio: AudioFileListA,
};
var preload_audioB = {
  type: jsPsychPreload,
  audio: AudioFileListB,
};

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
        Stim = jsPsych.timelineVariable('Word')
        // return the chosen stimulus
        console.log(Stim)        
        return Stim
      },
    choices: [],  
    trial_duration: TimePerWord,
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
    prompt: RAVLTWordPrompt, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };


var RecallTrial = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: 'Please, recall the full list.<p><span id="clock">1:00</span></p>',
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: RAVLTWordPrompt, //Add this to config file
    on_start: function(SimpleList) {
      // reset the list of indices
      // HOW TO USE TIMELINE VARIABLES TO REUSE THE RECALL FUNCTION FOR LISTS A AND B?
      console.log(jsPsych.timelineVariable('FullWordList'))
      WordList = jsPsych.timelineVariable('WordList')
      WordListIndex = jsPsych.timelineVariable('WordListIndex')
      FullWordList = jsPsych.timelineVariable('FullWordList')
      FullListIndex = jsPsych.timelineVariable('FullListIndex')

      HeardList = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
      const commands01 = {'*search': FindRecalledWords01};
      annyang.addCommands(commands01);
      annyang.start({autorestart: true, continuous: true});
      
      //console.log('Started')
    },
    on_finish: function(data){
      data.RecallList = WordListIndex
      data.HeardList = HeardList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'Recall'
      BlockCount++
      console.log(ResponseArray)
      clearInterval(interval);
      annyang.abort()
    },
    on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = RecallDuration * 1000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = false;
    interval = setInterval(function(){
    time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
        // STOP VOICE RECORDING!!!
      }
    }, 250)
    }
  }

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
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback
  var instr_procedure01 = {
      timeline: [Instructions],
      timeline_variables: RAVLTInstructions01,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_procedure02 = {
      timeline: [Instructions],
      timeline_variables: RAVLTInstructions02,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_procedure03 = {
      timeline: [Instructions],
      timeline_variables: RAVLTInstructions03,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_procedure04 = {
      timeline: [Instructions],
      timeline_variables: RAVLTInstructions04,
      randomize_order: false,
      repetitions: 1,
    }

  var PresentListOfWordsA = {
      timeline: [fixation, AudioStimulus],
      timeline_variables: AudioFileDictListA,
      repetitions: 1,
      randomize_order: false      
  }
  var PresentListOfWordsB = {
      timeline: [fixation, AudioStimulus],
      timeline_variables: AudioFileDictListB,
      repetitions: 1,
      randomize_order: false      
  }

  var recallA = {
      timeline: [RecallTrial],
      randomize_order: false,
      timeline_variables: WordListAForRecall,
      repetitions: 1,  
  }
  var recallB = {
      timeline: [RecallTrial],
      randomize_order: false,
      timeline_variables: WordListBForRecall,
      repetitions: 1,   
  }
  
  var Blocks = {
    timeline: [instr_procedure02, PresentListOfWordsA, recallA],
    randomize_order: false,
    repetitions: NBlocks - 1,
  } 

var thank_you = {
    timeline: [Instructions],
    timeline_variables: ThankYouText,
    randomize_order: false,
    repetitions: 1,
  }  
// ======================================================================= 
// Add procedures to the timeline
timeline.push(preload_audioA)
timeline.push(preload_audioB)

timeline.push(instr_procedure01)
timeline.push(PresentListOfWordsA)
timeline.push(recallA)
timeline.push(Blocks)
timeline.push(instr_procedure03)
timeline.push(PresentListOfWordsB)
timeline.push(recallB)
timeline.push(instr_procedure04)
timeline.push(recallA)
timeline.push(thank_you)
/*timeline.push(block1);
//timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);*/


