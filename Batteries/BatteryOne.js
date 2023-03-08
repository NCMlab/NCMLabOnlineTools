var timeline = []
var TaskList = []

// What battery was passed?
console.log(data.displayData())


console.log(ComponentList)
for ( var i = 0; i < BatteryList[0].list.length; i ++ ) {
	console.log(ComponentList[BatteryList[0].list[i]])
	TaskList.push(ComponentList[BatteryList[0].list[i]].name)
}


var callbacks = {
   'default': [() => {
    console.log('default')
  }]
};
add('Stroop Color', () => {
	console.log('StroopColor')
	//jatos.startComponent(32);
})
add('Stroop Word', () => {console.log('StroopWord')})
add('Stroop Color/Word', () => {console.log('StroopColorWord')})

var ButtonMapping = ['StroopColor','StroopWord','StroopColorWord']

// and you can create new entry with this function
function add(_case, fn) {
   callbacks[_case] = callbacks[_case] || [];
   callbacks[_case].push(fn);
}

// this function work like switch(value)
// to make the name shorter you can name it `cond` (like in scheme)
function pseudoSwitch(value) {
   if (callbacks[value]) {
      callbacks[value].forEach(function(fn) {
          fn();
      });
   }
}


// Check the status of the JATOS session data

//console.log(jatos.studySessionData)
//jatos.studySessionData = TaskList
//console.log(jatos.studySessionData)
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
    prompt: '', 
    // This is just a place holder to stop a jsPsych error
    choices: ['Next'],
    response_ends_trial: true,
    on_finish: function() {
    	pseudoSwitch(TaskList[0])
    	// Need to shorten the task list and save it as jatos session variable
    }
  };
 timeline.push(trial1)
 timeline.push(trial1)