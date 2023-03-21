var ComponentList = []

ComponentList.push({name:'Stroop Color', iconFileName:'StroopColor.png'})
ComponentList.push({name:'Stroop Word', iconFileName:'StroopWord.png'})
ComponentList.push({name:'Stroop Color/Word', iconFileName:'StroopColorWord.png'})
ComponentList.push({name:'Trail Making A', iconFileName:'TrailMakingA.png'})
ComponentList.push({name:'Trail Making B', iconFileName:'TrailMakingB.png'})
ComponentList.push({name:'RAVLT', iconFileName:'RAVLT.png'})
ComponentList.push({name:'ICAR Matrix Reasoning', iconFileName:'ICARMatrixReasoning.png'})


// What battery was passed?

// I think I can use the name instead of the index
add('Stroop Color', function(){jatos.startComponent(32)});
add('Stroop Word', function(){jatos.startComponent(34)});
add('Stroop Color/Word', function(){jatos.startComponent(35)});
add('Trail Making A', function(){jatos.startComponent(46)});
add('Trail Making B', function(){jatos.startComponent(39)});
add('RAVLT', function(){jatos.startComponent(52)});
add('ICAR Matrix Reasoning', function(){jatos.startComponent(52)});

const BatteryHtmlID = 54

var BatteryList = []
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'

BatteryList.push({index: 1, 
	name:'Battery001', 
	list: ['Stroop Color','Stroop Word','Stroop Color/Word','Trail Making A','Trail Making B','RAVLT'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Default',
		'Stroop_Default',
		'Stroop_001',
		'TrailMakingA_Default',
		'TrailMakingB_Default',
		'RAVLT_Default'
		]})

BatteryList.push({index: 2, 
	name:'Battery002', 
	list: ['Stroop Word','Stroop Color'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_001','Stroop_Default']})
