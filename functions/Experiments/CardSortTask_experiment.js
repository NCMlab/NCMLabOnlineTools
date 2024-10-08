
// =======================================================================
// Define internal variables
var count = 0
var PracticeCount = 0

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

// pre load image
var preload_images = {
  type: jsPsychPreload,
  images: function(){
    document.getElementById("jspsych-progressbar-container").style.visibility = "visible"
    jsPsych.setProgressBar(0)
    return ImagePaths
  },
}


// =======================================================================
// Define all of the different the stimuli 



var PracticeTrial = {
  type: jsPsychImageButtonResponseCST,
  render_on_canvas: false,
  stimulus_height: function() { 
    return parameters.StimCardHeight 
  },
  stimulus: function()
  { return Output },
  discardPile: BlankCard,
  discardPileText: function() { return Instructions.DiscardPileText },
  feedback: function() {return [LabelNames.Correct, LabelNames.Incorrect]},
  choices: function()
  {
    var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'2-red-cross.png" height='+parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'3-yellow-star.png" height='+parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'4-green-triangle.png" height='+parameters.CardHeight+'>']
      var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" class="CardSortImage">',
      '<img src="'+ImageFolder+'2-red-cross.png" class="CardSortImage">',
      '<img src="'+ImageFolder+'3-yellow-star.png" class="CardSortImage">',
      '<img src="'+ImageFolder+'4-green-triangle.png" class="CardSortImage">']  
    return stim
  },
  prompt: '+',
  BlankCard: BlankCard,
  feedback_duration: function() { return parameters.FeedbackDuration },
  response_ends_trial: false,
  rule_change_count: function() { return parameters.PracticeRuleChangeCount }, // how many trials between rule changes
  rule_list: function() { return parameters.PracticeRuleList},   // the order of rules`
  number_of_cards: function() { return parameters.PracticeNumberOfCards },
  on_finish: function(data) {
    data.trial = "Practice"
    console.log(data)
    jsPsych.setProgressBar(0)
  },
  button_html: '<button >%choice%</button>',

};

var TestTrial = {
  type: jsPsychImageButtonResponseCST,
  render_on_canvas: false,
  stimulus_height: function() { 
    return parameters.StimCardHeight 
  },
  stimulus: function()
  { return Output },
  discardPile: BlankCard,
  discardPileText: function() { return Instructions.DiscardPileText },
  feedback: function() {return [LabelNames.Correct, LabelNames.Incorrect]},
  choices: function()
  {
    var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" height='+parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'2-red-cross.png" height='+parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'3-yellow-star.png" height='+parameters.CardHeight+'>',
      '<img src="'+ImageFolder+'4-green-triangle.png" height='+parameters.CardHeight+'>']
    var stim = ['<img src="'+ImageFolder+'1-blue-circle.png" class="CardSortImage">',
      '<img src="'+ImageFolder+'2-red-cross.png" class="CardSortImage">',
      '<img src="'+ImageFolder+'3-yellow-star.png" class="CardSortImage">',
      '<img src="'+ImageFolder+'4-green-triangle.png" class="CardSortImage">']    
    return stim
  },
  prompt: '+',
  BlankCard: BlankCard,
  feedback_duration: function() { return parameters.FeedbackDuration },
  response_ends_trial: false,
  rule_change_count: function() { return parameters.RuleChangeCount }, // how many trials between rule changes
  rule_list: function() { return parameters.RuleList},   // the order of rules`
  number_of_cards: function() { return parameters.NumberOfCards },
  on_finish: function(data) {
    data.trial = "Test"
    console.log(data)
    jsPsych.setProgressBar(0)
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
        console.log(Instructions)
        Str = Instructions.Debrief[0] + accuracy + Instructions.Debrief[1] + 
          rt + Instructions.Debrief[2]
        return Str

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


// =======================================================================    
  //timeline.push()
//timeline.push(if_WelcomeSpoken)
//timeline.push(if_WelcomeWritten)
timeline.push(Welcome)

timeline.push(preload_images)
timeline.push(Instructions01)

timeline.push(Instructions02)
timeline.push(PracticeTrial)
timeline.push(debrief_block)

timeline.push(Instructions03)
timeline.push(TestTrial)

timeline.push(ThankYou)
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


