
FileNames = MakeCSTFileNames()
console.log(FileNames)
var timeline = [];

var trial = {
    type: jsPsychImageButtonResponse,
    render_on_canvas: false,
    stimulus_height: 100,
    
    stimulus: function()
    {
      var stim = '../assets/CardSortTaskItems/'+jsPsych.timelineVariable('stim')
      console.log(stim)
      return stim
    },
    choices: function()
    {
      var stim = ['<img src="../assets/CardSortTaskItems/1-blue-circle.png" height="100vh">',
        '<img src="../assets/CardSortTaskItems/2-red-cross.png" height="100vh" >',
        '<img src="../assets/CardSortTaskItems/3-yellow-star.png" height="100vh" >',
        '<img src="../assets/CardSortTaskItems/4-green-triangle.png" height="100vh" >']
      return stim
    },
    prompt: 'Hello',
  };


 var trial_procedure = {
      timeline: [trial],
      timeline_variables: FileNames,
      randomize_order: true,
      repetitions: 1,
    }

timeline.push(trial_procedure)