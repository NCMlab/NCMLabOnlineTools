var ComponentList = []

ComponentList.push({index: '0', name:'Stroop Color', iconFileName:'StroopColor.png'})
ComponentList.push({index: '1', name:'Stroop Word', iconFileName:'StroopWord.png'})
ComponentList.push({index: '2', name:'Stroop Color/Word', iconFileName:'StroopColorWord.png'})
ComponentList.push({index: '3', name:'Trail Making A', iconFileName:'TrailMakingA.png'})
ComponentList.push({index: '4', name:'RAVLT', iconFileName:'RAVLT.png'})
ComponentList.push({index: '5', name:'ICARMatrixReasoning', iconFileName:'ICARMatrixReasoning.png'})


// What battery was passed?

// I think I can use the name instead of the index
add('0', function(){jatos.startComponent(32)});
add('1', function(){jatos.startComponent(34)});
add('2', function(){jatos.startComponent(35)});
add('3', function(){jatos.startComponent(46)});
add('4', function(){jatos.startComponent(39)});
add('5', function(){jatos.startComponent(52)});

const BatteryHtmlID = 54

var BatteryList = []
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'
BatteryList.push({index: 1, 
	name:'Battery001', 
	list: ['0','1','2','3','4','5'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Default',
		'Stroop_Default',
		'Stroop_001',
		'TrailMakingA_001',
		'RAVLT_Default'
		]})
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
