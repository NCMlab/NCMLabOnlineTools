console.log("LOADING WORD RECALL")
var userSaidWords = []

// Manual Recall Trial
var ManualRecallA = {
  type: jsPsychSurvey,
/*   on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = RecallDuration * 1000; // in milliseconds
    var start_time = performance.now();
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
  },*/
  on_load: function() {console.log("WORD RECALL SETUP")},
  on_start: function() {
      console.log("WORD RECALL SETUP")          
      // reset the list of indices
      HeardList = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
    },

  pages: [
    [
      {
        type: 'multi-select',
        prompt: function(){return Instructions.WordRecallPrompt},
        options:  function() {
          return MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.WordListA))
        },
        columns: 3,
        name: 'ListRecall', 
      },

      {
        type: 'text',
        prompt: function() { return Instructions.IntrusionPrompt },
        placeholder: '',
        name: 'Intrusion01', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: function() { return Instructions.IntrusionPrompt },
        placeholder: '',
        name: 'Intrusion02', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: function() { return Instructions.IntrusionPrompt },
        placeholder: '',
        name: 'Intrusion03', 
        required: false,
      }, 
    ]
  ],
  title: function() { return Instructions.title },//'Word Recall',
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: function() { return LabelNames.Submit },
  show_question_numbers: 'off',
  on_finish: function(data) {
      const RecallList = data.response.ListRecall
      data.RecallList = RecallList

      const HeardList = data.response.ListRecall
      data.RecallCount = RecallList.length
      
      var NIntrustion = 0
      if ( data.response.Intrusion01 != "" )
      {
            NIntrustion++
            HeardList.push(data.response.Intrusion01)
      }
      if ( data.response.Intrusion02 != "" )
      {
            NIntrustion++
            HeardList.push(data.response.Intrusion01)
      }
      if ( data.response.Intrusion03 != "" )
      {
            NIntrustion++
            HeardList.push(data.response.Intrusion01)
      }
      //data.RecallList = WordListIndex
      data.HeardList = HeardList
      //data.RecallCount = BlockRecallCount
      data.NIntrusions = NIntrustion
      data.task = 'Recall'
      BlockCount++
      // reset the timer
      clearInterval(interval);
      console.log(data)
      
  },
};

// ==========================================================================
var ManualRecallB = {
  type: jsPsychSurvey,
/*   on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = RecallDuration * 1000; // in milliseconds
    var start_time = performance.now();
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
  },*/
  
  on_start: function() {
      // reset the list of indices
      HeardList = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
    },

  pages: [
    [
      {
        type: 'multi-select',
        prompt: function(){
          var stim = 'Which words were recalled?'
          return stim }, 
        options:  function() {
          return MakeAllWordsUpperCase(CreateSimpleWordList(WordListB))
        },
        columns: 3,
        name: 'ListRecall', 
      },

      {
        type: 'text',
        prompt: "Intrusion?", 
        placeholder: '',
        name: 'Intrusion01', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: "Intrusion?", 
        placeholder: '',
        name: 'Intrusion02', 
        required: false,
      }, 
      {
        type: 'text',
        prompt: "Intrusion?", 
        placeholder: '',
        name: 'Intrusion03', 
        required: false,
      }, 
    ]
  ],
  title: 'Word Recall',
  button_label_next: 'Continue',
  button_label_back: 'Previous',
  button_label_finish: 'Submit',
  show_question_numbers: 'off',
  on_finish: function(data) {
      const RecallList = data.response.ListRecall
      data.RecallList = RecallList

      const HeardList = data.response.ListRecall
      data.RecallCount = RecallList.length
      
      var NIntrustion = 0
      if ( data.response.Intrusion01 != "" )
      {
            NIntrustion++
            HeardList.push(data.response.Intrusion01)
      }
      if ( data.response.Intrusion02 != "" )
      {
            NIntrustion++
            HeardList.push(data.response.Intrusion01)
      }
      if ( data.response.Intrusion03 != "" )
      {
            NIntrustion++
            HeardList.push(data.response.Intrusion01)
      }
      //data.RecallList = WordListIndex
      data.HeardList = HeardList
      //data.RecallCount = BlockRecallCount
      data.NIntrusions = NIntrustion
      data.task = 'Recall'
      BlockCount++
      // reset the timer
      clearInterval(interval);
      console.log(data)
      
  },
};

// ==========================================================================
var SpokenRecallA = {
    type: jsPsychHtmlAudioResponse,
    stimulus: function() {
      var Str = 
        '<p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p>'+
        Instructions.WordRecallPrompt + '<p><span id="clock">1:00</span></p>'
      return Str
    },
    choices: function() {return [LabelNames.Next]}, 
    show_done_button: true,
    done_button_label: 'Done',//function() {return [LabelNames.Next]},
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    recording_duration: 60000,

    on_start: function(SimpleList) {
      console.log("Entering on_start")
      HeardList = []
      userSaidWords = []
      userSaid = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
      IntrusionList = []
      TempRecall = Array.from(Array(WordRecallLists.WordListA.length), _ => -99) //Array(1).fill(-99))

      annyang.start({autorestart: true, continuous: true});
    },
    on_finish: function(data){
      data.RecallBlock = TempRecall
      data.HeardList = HeardList
      data.IntrusionList = IntrusionList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'Recall'
      data.type = 'A'
      data.userSaid = userSaidWords
      BlockCount++
      clearInterval(interval);
      annyang.abort()
      console.log("Ended recall")
    },
    on_load: function(){ // This inserts a timer on the recall duration
      var wait_time = parameters.RecallDuration * 1000; // in milliseconds
      var start_time = performance.now();
      interval = setInterval(function(){
      time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= (parameters.RecallDuration - parameters.DelayBeforeShowingDoneButton)*1000)
      {
        document.getElementById("finish-trial").style.display='inline-block'
      }
      else 
      {
        document.getElementById("finish-trial").style.display='none'
      }
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
        // STOP VOICE RECORDING!!!
      }
      }, 250)
    }
};

var OLDSpokenRecallA = {
    //type: jsPsychHtmlButtonResponseTouchscreen,
    
    type: jsPsychHtmlAudioResponse,
    stimulus: function() {
      var Str = 
        '<p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p>'+
        Instructions.WordRecallPrompt + '<p><span id="clock">1:00</span></p>'
      return Str
    },
    choices: function() {return [LabelNames.Next]}, 
    
    show_done_button: true,
    done_button_label: 'Done',//function() {return [LabelNames.Next]},
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    recording_duration: 60000,
    //prompt: function(){return Instructions.WordRecallPrompt}, //Add this to config file
    on_start: function(SimpleList) {
      
      console.log("Entering on_start")
      // reset the list of indices
      // HOW TO USE TIMELINE VARIABLES TO REUSE THE RECALL FUNCTION FOR LISTS A AND B?
      HeardList = []
      userSaidWords = []
      userSaid = []
      BlockRecallCount = 0
      BlockIntrusionCount = 0
      IntrusionList = []
      TempRecall = Array.from(Array(WordRecallLists.WordListA.length), _ => -99) //Array(1).fill(-99))
      // Add a flag for the type of recall
      
      // const commands01 = {'*search': FindRecalledWords01};
      // annyang.addCommands(commands01);
      // annyang.setLanguage(LANG)
      annyang.start({autorestart: true, continuous: true});
      
      // annyang.addCallback('result', function(userSaid) {
      //   // userSaid contains multiple possibilities for what was heard
      //   userSaidWords += userSaid
      //   userSaidWords += ';'
      //   console.log(userSaidWords)
      // });
    },
    on_finish: function(data){
      data.RecallBlock = TempRecall
      data.HeardList = HeardList
      data.IntrusionList = IntrusionList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'Recall'
      data.type = 'A'
      data.userSaid = userSaidWords
      BlockCount++
      clearInterval(interval);
      annyang.abort()
      console.log("Ended recall")
    },
    on_load: function(){ // This inserts a timer on the recall duration
      var wait_time = parameters.RecallDuration * 1000; // in milliseconds
      var start_time = performance.now();
      interval = setInterval(function(){
      time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= (parameters.RecallDuration - parameters.DelayBeforeShowingDoneButton)*1000)
      {
        document.getElementById("finish-trial").style.display='inline-block'
      }
      else 
      {
        document.getElementById("finish-trial").style.display='none'
      }
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
        // STOP VOICE RECORDING!!!
      }
      }, 250)
    }
  }

// ==========================================================================
var SpokenRecallB = {
  //type: jsPsychHtmlButtonResponseTouchscreen,
  type: jsPsychHtmlAudioResponse,
  
  stimulus: function() {
    Str = '<p><img src="assets/Icons/Recording.gif" alt="microphone" style="width:160px;height:160px;"></p>'+
    Instructions.WordRecallPrompt + '<p><span id="clock">1:00</span></p>'
    return Str  
  },
  choices: function() {return [LabelNames.Next]}, 
  show_done_button: true,
  done_button_label: 'Done',//function() {return [LabelNames.Next]},
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  recording_duration: 60000,
  //prompt: function(){return Instructions.WordRecallPrompt}, //Add this to config file
  on_start: function(SimpleList) {
    console.log("Entering on_start")
    // reset the list of indices
    // HOW TO USE TIMELINE VARIABLES TO REUSE THE RECALL FUNCTION FOR LISTS A AND B?
    HeardList = []
    userSaidWords = []
    userSaid = []
    IntrusionList = []
    BlockRecallCount = 0
    BlockIntrusionCount = 0
    TempRecall = Array.from(Array(WordRecallLists.WordListB.length), _ => Array(1).fill(-99))
    // Add a flag for the type of recall
    
    // const commands01 = {'*search': FindRecalledWords01};
    // annyang.addCommands(commands01);
    // annyang.setLanguage(LANG)
    annyang.start({autorestart: true, continuous: true});
    
    // annyang.addCallback('result', function(userSaid) {
    //   // userSaid contains multiple possibilities for what was heard
    //   userSaidWords += userSaid
    //   userSaidWords += ';'
    //   console.log(userSaidWords)
    // });
  },
  on_finish: function(data){
    data.RecallBlock = TempRecall
    data.HeardList = HeardList
    data.IntrusionList = IntrusionList
    data.RecallCount = BlockRecallCount
    data.NIntrusions = BlockIntrusionCount
    data.task = 'Recall'
    data.type = 'B'
    data.userSaid = userSaidWords
    BlockCount++
    clearInterval(interval);
    annyang.abort()
    console.log("Ended recall")
  },
  on_load: function(){ // This inserts a timer on the recall duration
    var wait_time = parameters.RecallDuration * 1000; // in milliseconds
    var start_time = performance.now();
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
