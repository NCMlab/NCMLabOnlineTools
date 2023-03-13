var ComponentList = []

ComponentList.push({index: 0, name:'Stroop Color', componentID: 32})
ComponentList.push({index: 1, name:'Stroop Word', componentID: 34})
ComponentList.push({index: 2, name:'Stroop Color/Word', componentID: 35})
ComponentList.push({index: 3, name:'Digitspan Forward', componentID: 36})
ComponentList.push({index: 4, name:'Digitspan Backward', componentID: 37})

var BatteryList = []
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'
BatteryList.push({index: 1, name:'Battery001', list: [2,4,0], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Setup001']})
BatteryList.push({index: 2, name:'Battery002', list: [0,1,2], description: BatteryDescription})
BatteryList.push({index: 3, name:'Battery003', list: [3,4], description: BatteryDescription})


// I would like for there to be a default parameter setup that is loaded. If the 
// battery proivides the name of any other setup files, these are loaded and the 
// parameters will replace the default ones.

// Step one is for JATOS to see if any parameters have been passed to it via the URL.
// If so, the URL parameters are decoded. If a battery is passed, then the battery
// is loaded. Then cycle through anay provided parameter lists and load them up.
// A careful look through all
