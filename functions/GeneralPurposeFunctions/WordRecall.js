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
    //type: jsPsychHtmlButtonResponseTouchscreen,
    type: jsPsychHtmlAudioResponse,
    
    stimulus: function() {
      return Instructions.WordRecallPrompt + '<p><span id="clock">1:00</span></p>'
    },
    //choices: function() {return [LabelNames.Next]}, 
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
      data.RecallList = WordListIndex
      data.HeardList = HeardList
      data.IntrusionList = IntrusionList
      data.RecallCount = BlockRecallCount
      data.NIntrusions = BlockIntrusionCount
      data.task = 'Recall'
      data.userSaid = userSaidWords
      BlockCount++
      clearInterval(interval);
      annyang.abort()
    },
    on_load: function(){ // This inserts a timer on the recall duration
      var wait_time = WordRecall_parameters.RecallDuration * 1000; // in milliseconds
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

var IntializeMicrophone = {
    type: jsPsychInitializeMicrophone
};

var XXXSpokenRecallA = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
    <p style="font-size:48px; color:red;">GREEN</p>
    <p>Speak the color of the ink.</p>`,
    recording_duration: 3500,
};

// ==========================================================================
var SpokenRecallB = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: 'Please, recall the full list.<p><span id="clock">1:00</span></p>',
  choices: ['Next'], 
  margin_horizontal: GapBetweenButtons,
  post_trial_gap: 0,
  prompt: function() {return Instructions.WordRecallPrompt}, //Add this to config file
  on_start: function(SimpleList) {
    // reset the list of indices
    // HOW TO USE TIMELINE VARIABLES TO REUSE THE RECALL FUNCTION FOR LISTS A AND B?
    HeardList = []
    BlockRecallCount = 0
    BlockIntrusionCount = 0

    // Add a flag for the type of recall
    
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
    clearInterval(interval);
    annyang.abort()
  },
  on_load: function(){ // This inserts a timer on the recall duration
  var wait_time = WordRecall_parameters.RecallDuration * 1000; // in milliseconds
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


