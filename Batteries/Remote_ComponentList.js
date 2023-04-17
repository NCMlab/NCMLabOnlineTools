var ComponentList = []

ComponentList.push({name:'Stroop Color', iconFileName:'StroopColor.png'})
ComponentList.push({name:'Stroop Word', iconFileName:'StroopWord.png'})
ComponentList.push({name:'Stroop Color/Word', iconFileName:'StroopColorWord.png'})
ComponentList.push({name:'Trail Making', iconFileName:'TrailMaking.png'})
ComponentList.push({name:'Word Recall', iconFileName:'WordRecall.png'})
ComponentList.push({name:'ICAR Matrix Reasoning', iconFileName:'ICARMatrixReasoning.png'})
ComponentList.push({name:'Cube Copy', iconFileName:'ShapeCopy.png'})
ComponentList.push({name:'Likert', iconFileName:'Likert.png'})
ComponentList.push({name:'MultipleChoice', iconFileName:'MultiChoice.png'})
ComponentList.push({name:'Digit Span', iconFileName:'DigitSpan.png'})
ComponentList.push({name:'Serial Subtraction', iconFileName:'SerialSubtraction.png'})
ComponentList.push({name:'Fluency', iconFileName:'Fluency.png'})
ComponentList.push({name:'Line Bisection', iconFileName:'LineBisection.png'})
ComponentList.push({name:'Clock Drawing', iconFileName:'ClockDrawing.png'})
// What battery was passed?

// I think I can use the name instead of the index
add('Stroop Color', function(){jatos.startComponent(5)});
add('Stroop Word', function(){jatos.startComponent(6)});
add('Stroop Color/Word', function(){jatos.startComponent(7)});
add('Trail Making', function(){jatos.startComponent(21)});
add('Word Recall', function(){jatos.startComponent(10)});
add('ICAR Matrix Reasoning', function(){jatos.startComponent(16)});
add('Cube Copy', function(){jatos.startComponent(15)});
add('Likert',function(){jatos.startComponent(19)});
add('Digit Span',function(){jatos.startComponent(20)});
add('Serial Subtraction',function(){jatos.startComponent(22)});
add('Fluency',function(){jatos.startComponent(23)});
add('LineBisection',function(){jatos.startComponent(24)});
add('Clock Drawing',function(){jatos.startComponent(14)});
const BatteryHtmlID = 1


var BatteryList = []
// This is not used yet
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'

BatteryList.push({index: 5, 
	name:'FaCE Battery', 
	list: ['Word Recall','Trail Making','Cube Copy','Serial Subtraction','Fluency','Word Recall'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['FaCE_Default','TrailMaking_FaCE','CubeCopy_Default','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed'],
	BatteryInstructions: "This is the Fast Cognitive Evaluation",
	RunAudioTest: true})

BatteryList.push({index: 2, 
	name:'Battery002', 
	list: ['Stroop Word','Stroop Word'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Default','Stroop_Default']})

BatteryList.push({index: 3, 
	name:'List of Questionnaires', 
	list: ['Likert','Likert','Likert','Likert'], 
	description: BatteryDescription,
	ParameterLists: ['panas','cfi','cfs','stai']})

	BatteryList.push({index: 1, 
		name:'Barbados', 
		list: ['Trail Making', 'Trail Making', 'Digit Span', 'Digit Span', 'Line Bisection', 'Clock Drawing'], 
		description: BatteryDescription,
		ParameterLists: ['TrailMakingA_Default','TrailMakingB_Default','DigitSpan_Audio_Forward_TwoErrors','DigitSpan_Audio_Backward_TwoErrors','LineBisection_001','ClockDrawing_001'],
		BatteryInstructions:"This is the NCMLab Evaluation"
	})
	