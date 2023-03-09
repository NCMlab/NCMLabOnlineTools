
// What is needed?
/*
Input is word list A and word list B.
If the recall is automatic, include known alternate pronunciations.

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
console.log(WordListA)

WordListForRecallA = PrepareWordLists(WordListA, AlternatePronunciationsWordListA)
AudioFileDictListA = PrepareAudioFileList(WordListA, FolderName, FileExtension)

// PREP WORK FOR WORD LIST B
WordListForRecallB = PrepareWordLists(WordListB, AlternatePronunciationsWordListB)
AudioFileDictListB = PrepareAudioFileList(WordListB, FolderName, FileExtension)

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

// Present ALL audio word stimuli
var PresentAllWords_Audio = {
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

// THE FOLLOWING IS NOT USED
var PresentSelectiveWords_Visual = {
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
        Stim = '<p  class="Fixation">' + Stim + '</p>'
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
      on_finish: function(data){
        data = RAVLT_Scoring(data, ResponseArray)
        data.task = 'Sending Data'
        
      }
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
      timeline: [fixation, PresentAllWords_Audio],
      timeline_variables: AudioFileDictListA,
      repetitions: 1,
      randomize_order: false      
  }
  var PresentListOfWordsB = {
      timeline: [fixation, PresentAllWords_Audio],
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
    timeline: [SendData],
    timeline_variables: ThankYouText,
    randomize_order: false,
    repetitions: 1,
  }  
// ======================================================================= 
// Add procedures to the timeline
timeline.push(preload_audioA)
timeline.push(preload_audioB)
timeline.push(ManualRecallTrial)
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


