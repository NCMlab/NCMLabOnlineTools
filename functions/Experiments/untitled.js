var AutomaticRecallTrial = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: 'Please, recall the full list.<p><span id="clock">1:00</span></p>',
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: RAVLTWordPrompt, //Add this to config file
    on_start: function(SimpleList) {
      // reset the list of indices
      // HOW TO USE TIMELINE VARIABLES TO REUSE THE RECALL FUNCTION FOR LISTS A AND B?
      console.log(jsPsych.timelineVariable('FullWordList'))
      WordList = jsPsych.timelineVariable('WordList')
      WordListIndex = jsPsych.timelineVariable('WordListIndex')
      FullWordList = jsPsych.timelineVariable('FullWordList')
      FullListIndex = jsPsych.timelineVariable('FullListIndex')

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
    }
  }
