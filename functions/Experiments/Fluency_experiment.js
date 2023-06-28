// =======================================================================
// Define internal variables
var timeline = [];
var RecallDuration = 60
var category
var itemCount = 0
var count = 0
var HasCounterStarted = false


// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}

var GetCategory = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(Fluency_parameters)
    category = eval('Instructions.'+Fluency_parameters.Category)
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

var WaitForWords = function() {
      annyang.addCallback('result', function(userSaid) {
        console.log('sound stopped');
        // userSaid contains multiple possibilities for what was heard
        console.log(userSaid)
        SimpleList.push(userSaid)
       /* // Parse userSaid. It provides five possibilities for what it heard for each word
        // Make a table of rows for eahc unique word and columns for each possibility
        
        // i is the columns
        var NWords = -99
        for ( var i = 0; i < userSaid.length; i++ ) { // cycle over possible pronunciations
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
          if ( NWords < 0 ) {NWords = HeardWords.length} // cycle over words 
        }
        var Words = create2DArray(NWords,userSaid.length)
        for ( var i = 0; i < userSaid.length; i++ ) { // number of words
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
          for ( var j = 0; j < HeardWords.length; j++ ) // number of pronunciations
          {
            Words[j][i] = HeardWords[j]
          }
        }
        //console.log(Words)
        for ( var i = 0; i < NWords; i++ ) {
          TotalList.push(ThisGetRow(Words,i))
        }
        console.log(TotalList)*/
        //jsPsych.finishTrial();
        document.getElementById("jspsych-html-button-response-button-0").disabled = true;
       });

}
// =======================================================================
// Define all of the different the stimuli 

var Fluency = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {

      var stim = 'Please, say as many <b>'+category+'</b> as possible.<p><span id="clock">1:00</span></p>'
      return stim 
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function() {
      /* HeardList = []
      const commands01 = {'*search': RecordSpokenWords};
      const commands02 = {'result': RecordUserSaid};
      annyang.addCommands(commands02);
      annyang.start({autorestart: true, continuous: true});      
      */
      annyang.start({autorestart: false, continuous: true});
      WaitForWords()
    },
    on_finish: function(data){
      //data.HeardList = TotalList
      data.SimpleList = SimpleList
      data.task = 'Recall'
      clearInterval(interval);
      annyang.abort()
      console.log(data.HeardList)
    },
    on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = Fluency_parameters.TimeLimit * 1000; // in milliseconds
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
  choices: ['Next'], 
  on_load: function(){ // This inserts a timer on the recall duration
    if ( ! HasCounterStarted ) {
      var wait_time = Fluency_parameters.TimeLimit * 1000; // in milliseconds
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
    Results = Fluency_Scoring(data)
    jsPsych.finishTrial(Results)
    
  }
}
// =======================================================================    
// Define procedures using the stimuli
var if_SpokenResponse = {
  timeline: [Fluency],
  conditional_function: function() {
    if ( Fluency_parameters.RecallType == 'Spoken' )
    { return true }
    else { return false }
  }
}
var if_ManualResponse = {
  timeline: [CountResponses],
  conditional_function: function() {
    if ( Fluency_parameters.RecallType == 'Manual' )
    { return true }
    else { return false }
  }
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

// ======================================================================= 
// Add procedures to the timeline

timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(Instructions_loop)
timeline.push(GetCategory)
timeline.push(if_ManualResponse)
timeline.push(if_SpokenResponse)
timeline.push(SendData)
timeline.push(if_ThankYou)
