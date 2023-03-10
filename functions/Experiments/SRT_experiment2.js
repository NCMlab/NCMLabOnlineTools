
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
// PREP WORK FOR WORD LIST A
// take list of words as dictionary items and make a simple list out of it
console.log(WordList)

WordListForRecall = PrepareWordLists(WordList, AlternatePronunciationsWordList)
AudioFileDictList = PrepareAudioFileList(WordList, FolderName, FileExtension)

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}

// preload audio
var preload_audio = {
  type: jsPsychPreload,
  audio: AudioFileList,
};

var preload_silence = {
  type: jsPsychPreload,
  audio: FolderName + 'Silence' + '.wav',
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
  trial_duration: function() {
      // if this word was recalled previously change the duration to 0 seconds also
      if (WordListIndex[ind] > -99) {
        return FixationTimeBetweenWords
      }
      else {
        return 0
      }
    },
}
// Define the stimuli


var PresentSelectiveWords_Audio = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: function()
      {
        Stim = ''
        // find what trial index this is
        ind = (TrialCount) % NWords
        // check to see if this trial was recalled in the previous block
        if (WordListIndex[ind] > -99) {
          // if NOT, then present the word
          Stim = AudioFileList[ind]
        }
        else {
          Stim = FolderName + 'Silence' + '.wav'
        }
        // return the chosen stimulus
        console.log(Stim)        
        return Stim
      },
    choices: [],  
    trial_duration: function() {
      // if this word was recalled previously change the duration to 0 seconds also
      if (WordListIndex[ind] > -99) {
        return TimePerWord
      }
      else {
        return 0
      }
    },
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    },
    on_start: function() {
      console.log(WordListIndex)
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
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback
  var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: SRTInstructions,
      randomize_order: false,
      repetitions: 1,
    }

  var PresentListOfWords = {
      timeline: [fixation, PresentSelectiveWords_Audio],
      timeline_variables: WordList,
      repetitions: 1,
      randomize_order: false      
  }
  var recall = {
      timeline: [ManualRecallTrial],
      timeline_variables: WordListForRecall,
      randomize_order: false,
      repetitions: 1,      
  }
  var Blocks = {
    timeline: [PresentListOfWords, recall],
    randomize_order: false,
    repetitions: NBlocks,
  } 
var thank_you = {
    timeline: [Instructions],
    timeline_variables: ThankYouText,
    randomize_order: false,
    repetitions: 1,
  }  
// ======================================================================= 
// Add procedures to the timeline
timeline.push(preload_audio)
timeline.push(preload_silence)
timeline.push(instr_procedure)
timeline.push(Blocks)
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


