var timeline = []
var TaskList = []
TaskList.push('Stroop Color')
TaskList.push('Stroop Word')
TaskList.push('Stroop Color/Word')


// Check the status of the JATOS session data

console.log(jatos.studySessionData)
jatos.studySessionData = TaskList
console.log(jatos.studySessionData)
var trial1 = {

  // This displays a series of buttons on the screen for each component of this session. 
  // The buttons are dynamically created based on what has been completed already
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
    	var stim = ''
    	for (var i = 0; i < TaskList.length; i++ ) {
    		stim += '<p>' + TaskList[i] + '</p>'
    	}
    	return stim
    },
    prompt: "<p>Stroop</p>", 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
  };

  timeline.push(trial1)