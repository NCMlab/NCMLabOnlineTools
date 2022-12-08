
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
var CurrentList = [11]
var timeline = [];
var TrialCount = 0;
var ind = 0;
//var data = [];
//data.WordList = WordList;
// This is a list of the indices of words to present
// It should be updated after every recall event
//data.Block01List = [0,1,2,3,4,5,6,7,8,9,10,11]
//data.Block02List = [0,1,2,3,4,5,6,7,8,9,10,11]
//data.Block03List = [0,1,2,3,4,5,6,7,8,9,10,11]
//data.Block04List = [0,1,2,3,4,5,6,7,8,9,10,11]

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
  trial_duration: FixationTimeBetweenWords,
  data: {task: 'fixation'}
}
// Define the stimuli
var Stimulus = {
    on_start: function() {
        ind = (TrialCount++) % 12
        console.log(ind)
        console.log(Block02List[ind])
      },
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        if (Block02List[ind] > -99) {
          return jsPsych.timelineVariable('Word')
        }
        else {
          return '+'
        }
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: function() {
      if (Block02List[ind] > -99) {
        return TimePerWord
      }
      else {
        return 0
      }
    },
    prompt: StroopWordPrompt, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
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
      //data.ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
      const commands01 = {'*search': FindRecalledWords01};
      annyang.start({autorestart: false, continuous: true});
      annyang.addCommands(commands01);
      //console.log('Started')
    },
    on_finish: function(data){
      data.RecallList = Block02List
      data.task = 'Recall'
      console.log(Block02List)
      test = [4,3,2]
    },

  }
  
var RecallRequest02 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Please, recall the full list",
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopWordPrompt, //Add this to config file
    on_start: function(SimpleList) {
      //data.ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
      const commands02 = {'*search': FindRecalledWords02};
      annyang.start({autorestart: false, continuous: true});
      annyang.addCommands(commands02);
      //console.log('Started')
    },
    on_finish: function(data) {
      data.RecallList = Block03List
      data.task = 'Recall'
    }
  }

var RecallRequest03 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Please, recall the full list",
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopWordPrompt, //Add this to config file
    on_start: function(SimpleList) {
      //data.ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
      const commands03 = {'*search': FindRecalledWords03};
      annyang.start({autorestart: false, continuous: true});
      annyang.addCommands(commands03);
      //console.log('Started')

    },
    on_finish: function(data) {
      data.RecallList = Block04List
      data.task = 'Recall'
    }
  }  
// =======================================================================    
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback
  var block1 = {
      timeline: [fixation, Stimulus],
      timeline_variables: WordList,  
      sample: {
        type: 'custom',
        fn: function() {
              function checkResponse(response) {
                //console.log(response)
                return response > -99;
              }
          var temp = Block01List
          return temp.filter(checkResponse)
        }
      }, 
  }

  var block2 = {
      timeline: [fixation, Stimulus],
      timeline_variables: WordList,
      repetitions: 1,
      randomize_order: false
      
  };

  var block3 = {
      timeline: [fixation, Stimulus],
      timeline_variables: WordList,  
      sample: {
        type: 'custom',
        fn: function() {
          function checkResponse(response) {
                //console.log(response)
                return response > -99;
              }
          var temp = Block03List
          return temp.filter(checkResponse)
        }
      } 
  }

  var recall1 = {
      timeline: [RecallRequest01],
      randomize_order: false,
      repetitions: 1,      
  }
  var recall2 = {
      timeline: [RecallRequest02],
      randomize_order: false,
      repetitions: 1, 
  }
  var recall3 = {
      timeline: [RecallRequest03],
      randomize_order: false,
      repetitions: 1, 
  }

// Conditional Block
  var CheckForRecalledWord = {
    timeline: [fixation],
    conditional_function: function(){
      trial_counter++;
      CurrentList = jsPsych.data.get().filter({task:'Recall'}).last(1).trials[0].RecallList
      if (CurrentList[trial_counter] > -99){
        return true;
      }
      else {
        return false;
      }
    }
  }
  
  
// ======================================================================= 
// Add procedures to the timeline

timeline.push(block1);
timeline.push(recall1);
timeline.push(block2);
timeline.push(recall2);
timeline.push(block3);
timeline.push(recall3);


