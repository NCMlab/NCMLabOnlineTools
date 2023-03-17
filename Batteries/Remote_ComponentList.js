
// Define the components by name and assign them numbers
var ComponentList = []
ComponentList.push({index: '0', name:'Stroop Color'})
ComponentList.push({index: '1', name:'Stroop Word'})
ComponentList.push({index: '2', name:'Stroop Color/Word'})
ComponentList.push({index: '3', name:'Digitspan Forward'})
ComponentList.push({index: '4', name:'Digitspan Backward'})


// Add the components by their number and JATOS component IDs to the 
// pseudo Switch/Case

add('0', function(){jatos.startComponent(26)});
add('1', function(){jatos.startComponent(56)});
add('2', function(){jatos.startComponent(57)});
add('3', function(){jatos.startComponent(58)});
add('4', function(){jatos.startComponent(59)});
// Define th JATOS ID to return back to teh Battery HTML page
const BatteryHtmlID = 69


// Define all of the batteries
var BatteryList = []
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'
BatteryList.push({index: 1, 
	name:'Battery001', 
	list: ['0','1','2'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Default','Stroop_001','Stroop_Victoria']})
BatteryList.push({index: 2, 
	name:'Battery002', 
	list: ['1','0'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_001','Stroop_001','Stroop_Default']})
BatteryList.push({index: 3, 
	name:'Battery003', 
	list: ['0','1'], 
	description: BatteryDescription,
	ParameterLists: ['','']})

