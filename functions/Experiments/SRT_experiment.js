
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
// overall
var TrialCount = 0;
var ind = 0;


// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '+',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: function() {
      // if this word was recalled previously change the duration to 0 seconds also
      if (BlockList[ind] > -99) {
        return FixationTimeBetweenWords
      }
      else {
        return 0
      }
    },
  data: {task: 'fixation'}
}
// Define the stimuli
var Stimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        // find what trial index this is
        ind = (TrialCount) % 12
        // check to see if this trial was recalled in the previous block
        if (BlockList[ind] > -99) {
          // if NOT, then present the word
          Stim = jsPsych.timelineVariable('Word')
        }
        else {
          // if YES, then present the fixation cross
          Stim = '+'
        }
        // return the chosen stimulus
        console.log(Stim)        
        return Stim
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: function() {
      // if this word was recalled previously change the duration to 0 seconds also
      if (BlockList[ind] > -99) {
        return TimePerWord
      }
      else {
        return 0
      }
    },
    prompt: StroopWordPrompt, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };

var RecallRequest01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Please, recall the full list",
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopWordPrompt, //Add this to config file
    on_start: function(SimpleList) {
      BlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
      HeardList = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
      //data.ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
      const commands01 = {'*search': FindRecalledWords01};
      annyang.start({autorestart: false, continuous: true});
      annyang.addCommands(commands01);
      //console.log('Started')
    },
    on_finish: function(data){
      data.RecallList = BlockList
      data.HeardList = HeardList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'Recall'
    },

  }
  
// =======================================================================    
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback


  var block1 = {
      timeline: [fixation, Stimulus],
      timeline_variables: WordList,
      repetitions: 1,
      randomize_order: false      
  };

  var recall1 = {
      timeline: [RecallRequest01],
      randomize_order: false,
      repetitions: 1,      
  }

  
  
// ======================================================================= 
// Add procedures to the timeline

timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);
timeline.push(block1);
timeline.push(recall1);


