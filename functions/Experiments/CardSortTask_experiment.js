
// =======================================================================
// Define internal variables
var count = 0
var PracticeCount = 0
var countInstr = 0
var t
var tPrac
var PracticeCurrentRuleCount = 0
var Accuracy = ''

var PreviousCard = ImageFolder+'Blank.png'
const BlankCard = ImageFolder+'Blank.png'
var TrialCount = 0
Output = MakeCSTFileNames(ImageFolder)
console.log(Output)
FileNames = Output.CST_List
ImagePaths = Output.FileNames
FactorMapping = Output.FactorMapping


var timeline = [];
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// pre load image
var preload_images = {
  type: jsPsychPreload,
  images: function(){
    return ImagePaths
  },
}



// =======================================================================
// Define all of the different the stimuli 



var PracticeTrial = {
  type: jsPsychImageButtonResponseCST,
  render_on_canvas: false,
  stimulus_height: function() { 
    return CardSort_parameters.StimCardHeight 
  },
  stimulus: function()
  { return Output },
  discardPile: BlankCard,
  choices: function()
  {
    var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+CardSort_parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'2-red-cross.png" height='+CardSort_parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'3-yellow-star.png" height='+CardSort_parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'4-green-triangle.png" height='+CardSort_parameters.CardHeight+'>']
    return stim
  },
  prompt: '+',
  BlankCard: BlankCard,
  feedback_duration: function() { return CardSort_parameters.FeedbackDuration },
  response_ends_trial: false,
  rule_change_count: function() { return CardSort_parameters.PracticeRuleChangeCount }, // how many trials between rule changes
  rule_list: function() { return CardSort_parameters.PracticeRuleList},   // the order of rules`
  on_finish: function(data) {
    data.trial = "Practice"
    console.log(data)
  }
};

var TestTrial = {
  type: jsPsychImageButtonResponseCST,
  render_on_canvas: false,
  stimulus_height: function() { 
    return CardSort_parameters.StimCardHeight 
  },
  stimulus: function()
  { return Output },
  discardPile: BlankCard,
  choices: function()
  {
    var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+CardSort_parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'2-red-cross.png" height='+CardSort_parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'3-yellow-star.png" height='+CardSort_parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'4-green-triangle.png" height='+CardSort_parameters.CardHeight+'>']
    return stim
  },
  prompt: '+',
  BlankCard: BlankCard,
  feedback_duration: function() { return CardSort_parameters.FeedbackDuration },
  response_ends_trial: false,
  rule_change_count: function() { return CardSort_parameters.RuleChangeCount }, // how many trials between rule changes
  rule_list: function() { return CardSort_parameters.RuleList},   // the order of rules`
  on_finish: function(data) {
    data.trial = "Test"
    console.log(data)
  }
};

// ===================================================


var debrief_block = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {

        var trials = jsPsych.data.get().filter({trial: 'Practice'});
        console.log(trials.trials[0])
        var correct_trials = trials.trials[0].accuracy;
        var rt_trials = trials.trials[0].rt;
        var sum = correct_trials.reduce((a, b) => a + b, 0);
        const avg = Math.round(100*(sum / correct_trials.length) || 0);
        console.log(sum)
        var accuracy = avg;
        var sum = rt_trials.reduce((a, b) => a + b, 0);
        const rt = Math.round((sum / rt_trials.length) || 0);
        
        console.log(accuracy)
        console.log(rt)
        return `<p>You responded correctly on ${accuracy}% of the trials.</p>
          <p> with an average response time of ${rt} ms</p>
          <p>Press any key to continue.</p>`;
      },
      choices: ['Next'], 
    };




// =======================================================================    
// Define procedures using the stimuli

// Add scoring procedures to the Thank you screen

    var SendData = {
      type: jsPsychCallFunction,
      func: function() {
        var data = jsPsych.data.get() 
        console.log(data)
        Results = CardSort_Scoring(data)
        jsPsych.finishTrial(Results)
      }
    }

    var welcome = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
        console.log(Instructions)
        return Instructions.WelcomeText[0].page},
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: 'PROMPT',
      choices: function() {return [LabelNames.Next]}, 
    }

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( CardSort_parameters.ShowWelcome)
        { console.log("SHOWING WELCOME")
          return true }
        else { return false }
  }
}  
 

var Instructions_Procedure = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.InstructionText[countInstr].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
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

var Instructions_PracticeGetReady = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.PracticeInstructions[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}
var Instructions_TestGetReady = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.TestInstructions[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
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
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( CardSort_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}

var if_Test_Instructions = {
  timeline: [instr_procedure_loop_node],
  conditional_function: function() {
        if ( CardSort_parameters.ShowInstructions)
        { 
          return true }
        else { return false }
  }
}

// =======================================================================    
  //timeline.push()
timeline.push(if_Welcome)

timeline.push(preload_images)

timeline.push(if_Test_Instructions)
timeline.push(Instructions_PracticeGetReady)

timeline.push(PracticeTrial)
timeline.push(debrief_block)
timeline.push(Instructions_TestGetReady)
timeline.push(TestTrial)

timeline.push(if_ThankYou)
timeline.push(SendData)
/*
timeline.push(if_Test_Instructions)
var CurrentRuleCount = 0
timeline.push(Practice_procedure)
timeline.push(debrief_block);

var CurrentRuleCount = 0
timeline.push(trial_procedure)
*/
//timeline.push(if_ThankYou)


