// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var category
var itemCount = 0
var count = 0
var HasCounterStarted = false
var userSaidWords = []
var HeardList = []


const sleep = async (milliseconds) => {
  await new Promise(resolve => {
      return setTimeout(resolve, milliseconds)
  });
};

const testSleep = async () => {
  console.log('Step 1 - Called');
  await sleep(5000);
  console.log('Step 2 - Called');
}


// =======================================================================

var InitializeMicrophone = {
  type: jsPsychInitializeMicrophone
};


var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var SetupSpeechRecognition = {
  type: jsPsychCallFunction,
  func: function() {
    const YesCommand = {
      'yes': () => 
          { $("#jspsych-html-button-response-button-0").click() }
    };
    const NoCommand = {
        'no': () => 
            { $("#jspsych-html-button-response-button-1").click() }
    };  
    annyang.addCommands(YesCommand);
    annyang.addCommands(NoCommand);
    annyang.setLanguage(LANG)
    annyang.addCallback('result', function(userSaid) {
      // userSaid contains multiple possibilities for what was heard
      userSaidWords += userSaid
      userSaidWords += ';'
    });
  }
}

var GetCategory = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(YesNo_parameters)
    category = eval('Instructions.'+YesNo_parameters.Category)
  }
}

var TotalList = []
var SimpleList = []
function ThisGetRow(Input, Row) {
  // extract the data for a single block
   const dimensions = [ Input.length, Input[0].length ];
   var row = []
   for (var i = 0; i < dimensions[1]; i++) {
    row.push(Input[Row][i])
   }
   return row
  }

var YesNo = {
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
      console.log(data)
      console.log(data)
      // Move this
      annyang.abort()
    },
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


var Counter = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function()
  {
    console.log(Instructions)
    var stim = 
      Instructions.ResponsePage01 + category + Instructions.ResponsePage02 +
        itemCount + Instructions.ResponsePage03
    return stim
  },
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'TESTER',
  response_ends_trial: true,
  choices: function() { return [LabelNames.Next] }, 
  on_load: function(){ // This inserts a timer on the recall duration
    if ( ! HasCounterStarted ) {
      var wait_time = YesNo_parameters.TimeLimit * 1000; // in milliseconds
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
      HasCounterStarted = true
      }
    },
    on_finish: function(data) {
      data.task = 'Recall'
      data.count = itemCount
    }
}  

var CountResponses = {
  timeline: [Counter],
  loop_function: function() {
    if ( time_left > 0 ) 
    { 
      itemCount++
      return true 
    }
    else { return false }
  },
  on_finish: function(data){
    //data.HeardList = TotalList
    console.log(data)
    data.itemCount = itemCount
    data.task = 'Recall'
  }
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = YesNo_Scoring(data)
    jsPsych.finishTrial(Results)
    
  }
}
// =======================================================================    
// Define procedures using the stimuli
var if_SpokenResponse = {
  timeline: [InitializeMicrophone, SetupSpeechRecognition],
  conditional_function: function() {
    if ( YesNo_parameters.RecallType == 'Spoken' )
    { return true }
    else { return false }
  }
}

var if_ManualResponse = {
  timeline: [CountResponses],
  conditional_function: function() {
    if ( YesNo_parameters.RecallType == 'Manual' )
    { return true }
    else { return false }
  }
}



var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_start: function(data)
    {
      DD = jsPsych.data.get()
      console.log(DD)
      console.log(DD.filter({task: 'Recall'}))
    },
  on_finish: function(data)
  { data.trial = "Notes" },
}

var Instructions = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.Instructions[count].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var Instructions_loop = {
  timeline: [Instructions],
  loop_function: function(data){
    console.log(count)
    count+=1
    if ( count < Instructions.Instructions.length){
        return true} else { return false}
  }
}


  var welcome = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {return Instructions.WelcomeText[0].page},
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
  }
  
  var thank_you = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {return Instructions.ThankYouText[0].page},
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices: function() {return [LabelNames.Next]}, 
  }
  
  var if_Welcome = {
    timeline: [welcome],
    conditional_function: function() {
      if ( Instructions.ShowWelcome)
      { return true }
      else { return false }
    }
  }
  
  var if_ThankYou = {
    timeline: [thank_you],
    conditional_function: function() {
      if ( Instructions.ShowThankYou)
      { return true }
      else { return false }
    }
  }
  var if_Notes = {
    timeline: [Notes],
    conditional_function: function() {
      if ( YesNo_parameters.AskForNotes)
      { return true }
      else { return false }
    }
  }
// ======================================================================= 
// Add procedures to the timeline

//timeline.push(if_Welcome)
//timeline.push(enter_fullscreen)
//timeline.push(Instructions_loop)
//timeline.push(GetCategory)
//timeline.push(if_ManualResponse)
timeline.push(if_SpokenResponse)
timeline.push(YesNo)
//timeline.push(if_Notes)
//timeline.push(if_ThankYou)
//timeline.push(SendData)
