var ComponentList = []

ComponentList.push({name:'Stroop Color', iconFileName:'StroopColor.png'})
ComponentList.push({name:'Stroop Word', iconFileName:'StroopWord.png'})
ComponentList.push({name:'Stroop Color/Word', iconFileName:'StroopColorWord.png'})
ComponentList.push({name:'Trail Making A', iconFileName:'TrailMakingA.png'})
ComponentList.push({name:'Trail Making B', iconFileName:'TrailMakingB.png'})
ComponentList.push({name:'RAVLT', iconFileName:'RAVLT.png'})
ComponentList.push({name:'ICAR Matrix Reasoning', iconFileName:'ICARMatrixReasoning.png'})
ComponentList.push({name:'Cube Copy', iconFileName:'CubeCopy.png'})
ComponentList.push({name:'Likert', iconFileName:'Likert.png'})
ComponentList.push({name:'MultipleChoice', iconFileName:'MultiChoice.png'})

// What battery was passed?

// I think I can use the name instead of the index
add('Stroop Color', function(){jatos.startComponent(5)});
add('Stroop Word', function(){jatos.startComponent(6)});
add('Stroop Color/Word', function(){jatos.startComponent(7)});
add('Trail Making A', function(){jatos.startComponent(3)});
add('Trail Making B', function(){jatos.startComponent(4)});
add('RAVLT', function(){jatos.startComponent(10)});
add('ICAR Matrix Reasoning', function(){jatos.startComponent(16)});
add('Cube Copy', function(){jatos.startComponent(15)});
add('Likert',function(){jatos.startComponent(19)});


const BatteryHtmlID = 1


var BatteryList = []
// This is not used yet
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'

BatteryList.push({index: 3, 
	name:'Battery001', 
	list: ['Cube Copy','Stroop Color','Stroop Word','Stroop Color/Word','Trail Making A','Trail Making B','RAVLT'], 
	description: BatteryDescription,
	ParameterLists: ['CubeCopy_Default','Stroop_Default',
		'Stroop_Default',
		'Stroop_001',
		'TrailMakingA_Default',
		'TrailMakingB_Default',
		'RAVLT_Default'
		]})

BatteryList.push({index: 2, 
	name:'Battery002', 
	list: ['Stroop Word','Stroop Word'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Default','Stroop_Default']})

BatteryList.push({index: 1, 
	name:'List of Questionnaires', 
	list: ['Likert','Likert','Likert','Likert'], 
	description: BatteryDescription,
	ParameterLists: ['panas','cfi','cfs','stai']})

