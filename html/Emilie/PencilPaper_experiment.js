/* create timeline */
var timeline = [];

/* trial stimuli array for timeline variables */

var instructionStimuli = [
    { stimulus: `
        <p>Click on the <strong>pencil</strong>, 
            then on the <strong>paper</strong>, 
            then <strong>Next</strong>.</p>`,
        correct_response: [0,2,1]},
    { stimulus: `
        <p>Click on the <strong>paper</strong>, 
            then on the <strong>pencil</strong>, 
            then <strong>Next</strong>.</p>`,
        correct_response: [2,0,1]},
    { stimulus: `
        <p>Click on the <strong>pencil</strong>,
            then <strong>Next</strong>.</p>`,
            correct_response: [0,1]},
    { stimulus: `
        <p>Click on the <strong>paper</strong>, 
            then <strong>Next</strong>.</p>`,
        correct_response: [2,1]},
    
];

/* preloading media (preload plugin) */
var preload = {
  type: jsPsychPreload,
  images: ['img/paper.png', 'img/pencil.png']
};

/* display images as buttons */
var displayImages = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: function() { return [`<div style='float: left;'><img src='img/pencil.png' style='padding: 50px;'></img></div>`,
        LabelNames.Next,
        `<div style='float: left;'><img src='img/paper.png' style='padding: 50px;'></img></div>`
    ]
    },
    button_html: '<button class="jspsych-btn" style="font-size: 25px; vertical-align: bottom; display: table-cell; border: none;"><strong>%choice%</strong></button>',
    data: {
        task: 'response',
        correct_response: function() { return jsPsych.timelineVariable('correct_response') }
    },
    on_finish: function(data){
        data.correct = data.response === data.correct_response[ind];
        // console.log(data.response);
        // console.log(data.correct_response);
        // console.log(data.correct = data.response === data.correct_response);
    }
};

var displayInstruction = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {return jsPsych.timelineVariable('stimulus')},
    choices: function() { return [LabelNames.Next] },
    button_html: '<button class="jspsych-btn" style="font-size: 25px; left: 50%;">%choice%</button>'
  };

var test_procedure = {
    timeline: [displayInstruction, displayImages],
    timeline_variables: instructionStimuli
}


/* Timeline that alternates between instructions and images */
var ind = 0;
var testInstructions = {
    timeline: [displayInstruction,
    //nested timeline to keep 'image screen' until 'Next' is clicked
    {
    timeline: [displayImages],
    loop_function: function(data){
      console.log('index is');
      console.log(ind);
      console.log('response is:');
      console.log(data.values()[0].response);
      console.log('correct response is:');
      console.log(data.values()[0].correct_response[ind]);
      // === 0 means Pencil
      // === 1 means Next
      // === 2 means Paper
      if (data.values()[0].response === 1){
        console.log('in if');
        ind = 0;
        return false;
      } else {
        console.log('not in if');
        console.log(data.values()[0].response);
        console.log(data.values()[0].correct_response[ind]);
        console.log(data.values()[0].response === data.values()[0].correct_response[ind]);
        ind++;
        return true;
      }
    }
  }],
    timeline_variables: instructionStimuli,
    randomize_order: false,
  };

var debrief_block = {
    type: jsPsychHtmlButtonResponse,
    choices: ['Ok'],
    stimulus: function() {

        var trials = jsPsych.data.get().filter({task: 'response'});
        var correct_trials = trials.filter({correct: true});
        var accuracy = Math.round(correct_trials.count() / (trials.count()) * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return `<p>You responded correctly on ${accuracy}% of the trials.</p>
        <p>Your average response time was ${rt}ms.</p>
        <p>Press any key to complete the experiment. Thank you!`;
    }
};

timeline.push(Welcome)
timeline.push(preload);
timeline.push(Instructions01)
timeline.push(testInstructions);
timeline.push(debrief_block);
timeline.push(ThankYou)