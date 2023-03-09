
// Manual Recall Trial
var ManualRecallTrial = {
  type: jsPsychSurvey,
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
    },

  pages: [
    [
      {
        type: 'multi-select',
        prompt: 'Which words were recalled?', 
        options: SimpleWordListA,
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

