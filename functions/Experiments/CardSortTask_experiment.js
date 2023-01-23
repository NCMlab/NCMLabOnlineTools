
var count = 0
var RuleChangeCount = 10
var RuleList = [0,1,2,0,1,2,0,1,2] // Number, Color, Shape
var CurrentRuleCount = 0
var Accuracy = ''

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
    prompt: '-',
    on_finish: function(data) 
    {   
        var response = data.response
        console.log("RESPONSE: "+response)
        var correct = jsPsych.timelineVariable('FactorMapping')
        if ( response == correct[0][RuleList[CurrentRuleCount]])
          {
            console.log("CORRECT")
            Accuracy = "Correct"
            data.correct = true;
          }
          else 
          {
            console.log('INCORRECT')
            Accuracy = "Incorrect"
            data.correct = false;
          }
    }
  };

var trialBlank = {
    type: jsPsychImageButtonResponse,
    render_on_canvas: false,
    stimulus_height: 100,
    stimulus: function()
    {
      var stim = '../assets/CardSortTaskItems/blank.png'
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
    prompt: function(data)
    {
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if(last_trial_correct){
          return "<p>Correct!</p>"; // the parameter value has to be returned from the function
        } else {
          return "<p>Wrong.</p>"; // the parameter value has to be returned from the function
        }
    },
    trial_duration:500
  };

var debrief_block = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {

        var trials = jsPsych.data.get().filter({task: 'response'});
        var correct_trials = trials.filter({correct: true});
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return `<p>You responded correctly on ${accuracy}% of the trials.</p>
          <p>Your average response time was ${rt}ms.</p>
          <p>Press any key to complete the experiment. Thank you!</p>`;

      }
    };
    

var trial_procedure = {
      timeline: [trial, trialBlank],
      timeline_variables: FileNames,
      randomize_order: true,
      repetitions: 1,
      sample: {
        type: 'without-replacement',
        size: 10
      },
      on_finish: function() {
        count++

        console.log("Trial count: "+count+", Rule count: "+RuleList[CurrentRuleCount])
        if ( (count % RuleChangeCount) == 0 )
        {
          CurrentRuleCount++
        }
      }
    }

timeline.push(trial_procedure)
timeline.push(debrief_block);