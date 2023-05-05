var ComponentList = []

ComponentList.push({name:'Stroop Color', iconFileName:'StroopColor.png'})
ComponentList.push({name:'Stroop Word', iconFileName:'StroopWord.png'})
ComponentList.push({name:'Stroop Color/Word', iconFileName:'StroopColorWord.png'})
ComponentList.push({name:'Trail Making', iconFileName:'TrailMaking.png'})
ComponentList.push({name:'Word Recall', iconFileName:'WordRecall.png'})
ComponentList.push({name:'Matrix Reasoning', iconFileName:'ICARMatrixReasoning.png'})
ComponentList.push({name:'Cube Copy', iconFileName:'ShapeCopy.png'})
ComponentList.push({name:'Likert', iconFileName:'Likert.png'})
ComponentList.push({name:'MultipleChoice', iconFileName:'MultiChoice.png'})
ComponentList.push({name:'Digit Span', iconFileName:'DigitSpan.png'})
ComponentList.push({name:'Serial Subtraction', iconFileName:'SerialSubtraction.png'})
ComponentList.push({name:'Fluency', iconFileName:'Fluency.png'})
ComponentList.push({name:'Line Bisection', iconFileName:'LineBisection.png'})
ComponentList.push({name:'Clock Drawing', iconFileName:'ClockDrawing.png'})
ComponentList.push({name:'Verbal DMS', iconFileName:'VerbalDMS.png'})
ComponentList.push({name:'Cancellation', iconFileName:'Cancellation.png'})
// What battery was passed?

// I think I can use the name instead of the index
add('Stroop Color', function(){jatos.startComponent(3)});
add('Stroop Word', function(){jatos.startComponent(4)});
add('Stroop Color/Word', function(){jatos.startComponent(5)});
add('Trail Making', function(){jatos.startComponent(17)});
add('Word Recall', function(){jatos.startComponent(6)});
add('Matrix Reasoning', function(){jatos.startComponent(12)});
add('Cube Copy', function(){jatos.startComponent(11)});
add('Likert',function(){jatos.startComponent(15)});
add('Digit Span',function(){jatos.startComponent(16)});
add('Serial Subtraction',function(){jatos.startComponent(18)});
add('Fluency',function(){jatos.startComponent(19)});
add('Line Bisection',function(){jatos.startComponent(20)});
add('Clock Drawing',function(){jatos.startComponent(10)});
add('Verbal DMS',function(){jatos.startComponent(22)});
add('Cancellation',function(){jatos.startComponent(9)});
const BatteryHtmlID = 1
const UserChoiceHtmlID = 21

var BatteryList = []
// This is not used yet
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'

BatteryList.push({index: 5, 
	name:'FaCE Battery', 
	list: ['Word Recall','Trail Making','Cube Copy','Serial Subtraction','Fluency','Word Recall'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['FaCE_Default','TrailMaking_FaCE','CubeCopy_Default','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed'],
	BatteryInstructions: "This is the Fast Cognitive Evaluation",
	RunAudioTest: true
})

BatteryList.push({index: 2, 
	name:'Battery002', 
	list: ['Stroop Word','Stroop Word'], 
	description: BatteryDescription,
	ParameterLists: ['Stroop_Default','Stroop_Default'],
	BatteryInstructions: "Empty"
})

BatteryList.push({index: 3, 
	name:'List of Questionnaires', 
	list: ['Likert','Likert','Likert','Likert'], 
	description: BatteryDescription,
	ParameterLists: ['panas','cfi','cfs','stai'],
	BatteryInstructions:"Empty"
})

BatteryList.push({index: 1, 
	name:'Barbados', 
	list: ['Trail Making', 'Trail Making', 'Digit Span', 'Digit Span', 'Line Bisection', 'Clock Drawing'], 
	description: BatteryDescription,
	ParameterLists: ['TrailMakingA_Default','TrailMakingB_Default','DigitSpan_Audio_Forward_TwoErrors','DigitSpan_Audio_Backward_TwoErrors','LineBisection_001','CubeCopy_Default'],
	BatteryInstructions:"This is the NCMLab Evaluation"
})


BatteryList.push({index: 101, 
	name:'Barbados', 
	list: ['Trail Making', 'Trail Making', 
	'Digit Span', 'Digit Span', 
	'Line Bisection', 'Clock Drawing','Cube Copy',
	'Stroop Color','Stroop Word','Stroop Color/Word',
	'Word Recall', 'Serial Subtraction','Matrix Reasoning',
	'Verbal DMS'
	], 
	description: BatteryDescription,
	ParameterLists: ['TrailMakingA_Default','TrailMakingB_Default',
	'DigitSpan_Audio_Forward_Adaptive_14','DigitSpan_Audio_Forward_Adaptive_14',
	'LineBisection_001','CubeCopy_Default','CubeCopy_Default',
	'Stroop_Victoria','Stroop_Victoria','Stroop_Victoria',
	'RAVLT_Default','SerialSubtract_Default','MatrixReasoning_ICAR',
	'vDMS_Adaptive'
	],
	ButtonName: ['Trails A','Trails B',
	'DS, Forward Adapt','DS, Backward Adapt',
	'Line Bisect','Clock Draw','Cube Copy',
	'Victoria','Victoria','Victoria',
	'RAVLT, Manual', 'Serial Subtraction', 'ICAR',
	'Verbal DMS'
	],
	ButtonDescription: ['','',
		'Digit span forward (audio) adaptive difficulty for 14 trials',
		'Digit span backward (audio) adaptive difficulty for 14 trials',
		'','','',
		'Stop after 45 seconds','Stop after 45 seconds','Stop after 45 seconds',
		'RAVLT with manual scoring','','Matrix reasoning using ICAR elements',
		'Adaptive difficulty'
		],
    BatteryInstructions:"This is the NCMLab Evaluation"
})

BatteryList.push({index: 102, 
	name:'Chemo Brain', 
	list: ['Trail Making', 'Trail Making', 
		'Stroop Color','Stroop Word','Stroop Color/Word',
		'Word Recall',
		'Digit Span', 'Digit Span', 'Word Recall',
		'Cube Copy', 'Cancellation', 'Line Bisection'
	], 
	description: 'A Pilot Study Assessing Cognitive Functioning of Patients being treated for Thoracic Tumors',
	ParameterLists: ['TrailMakingA_Default','TrailMakingB_Default',
		'Stroop_Golden','Stroop_Golden','Stroop_Golden',
		'RAVLT_Manual_Immediate',
		'DigitSpan_Audio_Forward_TwoErrors','DigitSpan_Audio_Backward_TwoErrors',
		'RAVLT_Manual_Delayed',
		'CubeCopy_Default','Cancellation_001','LineBisection_001'
	],
	ButtonName: ['Trails A','Trails B',
		'','','',
		'RAVLT, Immediate',
		'DS Forward, 2err ','DS Backward, 2err',
		'RAVLT, Delayed',
		'Cube Copy','Cancellation','Line Bisect'
	],
	ButtonDescription: ['','',
		'','','',
		'',
		'','',
		'','','',
		'',
		],
    BatteryInstructions:"Instruct"
})