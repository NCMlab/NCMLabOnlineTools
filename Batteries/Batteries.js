
var BatteryList = []

BatteryList.push({index: 15, 
	name:'NCM Battery', 
	list: ['Questionnaire','Questionnaire','Word Recall','Trail Making','Image Copy','Serial Subtraction','Fluency','Word Recall'],
	//list: ['Intake Form'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['EN_IntakeForm_FaCE','EN_OrientationForm_FaCE','FaCE_Default','TrailMaking_FaCE','ImageCopy_FaCE','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed'],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: ['','','FaCE','FaCE','FaCE','FaCE','FaCE','FaCE'],
	//Instructions: ['Default'],
	BatteryInstructions: "<h1>Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCM Lab 2023'
})
BatteryList.push({index: 99, 
	name:'FaCE Battery', 
	list: ['Word Recall'],
	//list: ['Intake Form'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['FaCE_Spoken'],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: ['FaCE'],
	//Instructions: ['Default'],
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})
BatteryList.push({index: 16, 
	name:'FaCE Battery', 
	list: ['Questionnaire','Questionnaire','Word Recall','Trail Making','Image Copy','Serial Subtraction','Fluency','Word Recall'],
	//list: ['Intake Form'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['FR_IntakeForm_FaCE','FR_OrientationForm_FaCE','FaCE_Default_FR','TrailMaking_FaCE','ImageCopy_FaCE','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed'],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: ['','','FaCE','FaCE','FaCE','FaCE','FaCE','FaCE'],
	//Instructions: ['Default'],
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'FR',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

// ========================================================================
BatteryList.push({index: 202, 
	name:'NCM Lab Demonstration', 
	list: [
        'Questionnaire', //1 
        'Stroop Color',
		'Stroop Word',
		'Stroop Color/Word',
		'Word Recall',
		'Word Recall', //6
		'Cancellation Task',
		'Image Copy',
		'Clock Drawing',
		'Matrix Reasoning', //10 
		'Digit Span',
		'Digit Span', 
		'Trail Making',
		'Trail Making', 
        'Serial Subtraction',//15
		'Fluency',
		'Line Bisection',
        'Word Recall', 
		'Verbal DMS',
        'Spatial DMS' //20
	], 
	Instructions: ['', //1
		'Default', 
		'Default', 
		'Default',	
		'Default', 
		'Default',  //6
		'Default',
		'Default', 
		'Default',
		'Default', //10
		'Default', 
		'Default',
		'Default', 
		'Default',
		'Default', //15
		'Default', 
		'Default',
		'Default', 
		'Default',
		'Default' //20
	],
	description: '',
	ParameterLists: [
        'EN_IntakeForm_Generic', //1
        'Stroop_Default',
		'Stroop_Default',
		'Stroop_Default',
        'RAVLT_Manual_Immediate',
		'RAVLT_Spoken_Immediate',//6
		'Cancellation_001',
		'ImageCopy_Default',
		'ClockDrawing_001',
		'MatrixReasoning_ICAR',//10
		'DigitSpan_Audio_Forward_TwoErrors',
		'DigitSpan_Audio_Backward_TwoErrors',
        'TrailMakingA_003',
		'TrailMakingB_003',
		'SerialSubtract_Default',//15
		'Fluency_Animals',
		'LineBisection_001',
        'RAVLT_Manual_Delayed',
        'vDMS_Adaptive',
		'SpatialDMS_Adaptive'//20
	],
	ButtonName: [
        'Intake Form', //1
        'Color',
		'Word',
		'Color/Word',
		'Recall, Imm (Manual)',
		'Recall, Imm (Spoken)',//6
		'Cancellation', 
		'Cube Copy',
		'Clock Draw',
		'ICAR',//10
		'DS, Forward',
		'DS, Backward',
		'Trails A',
		'Trails B',
        'Subtract',//15
		'Fluency',
        'Line Bisect',
		'Word Recall, Delay',
		'Verbal DMS',
        'Spatial DMS'//20
	],
    BatteryInstructions:"The 3C Platform",
	Language:'EN',
	Footer: "©NCM Lab 2023"
})
/*
// ========================================================================
// ========================================================================
BatteryList.push({index: 102, 
	name:'Chemo Brain', 
	list: [
        'Questionnaire',
        'Clock Drawing','Image Copy',
        'Trail Making', 'Trail Making', 
	    'Digit Span', 'Digit Span',	
        'Word Recall',
        'Stroop Color','Stroop Word','Stroop Color/Word',
        'Line Bisection','Cancellation Task', 
        'Word Recall'
	], 
	description: 'A Pilot Study Assessing Cognitive Functioning of Patients being treated for Thoracic Tumors',
	ParameterLists: [
        'EN_IntakeForm_FaCE',
        'ClockDrawing_CBprotocol', 'CubeCopy_CBprotocol',
        'TrailMakingA_003','TrailMakingB_003',
		'DigitSpan_Audio_Forward_TwoErrors','DigitSpan_Audio_Backward_TwoErrors',
		'RAVLT_Manual_Immediate',
		'Stroop_Victoria','Stroop_Victoria','Stroop_Victoria',
		'LineBisection_001','Cancellation_001',
        'RAVLT_Manual_Delayed'
	],
	ButtonName: [
        'Intake Form',
        'Clock Drawing','Cube Copy',
        'Trails A','Trails B',
		'DS Forward','DS Backward',
		'RAVLT, Immediate',
		'Color','Word','Color/Word',
        'Line Bisect','Cancellation',
		'RAVLT, Delayed',
	],
    BatteryInstructions:"Experimental Protocol",
	Language:'FR'
}) */
// ========================================================================


BatteryList.push({index: 101, 
	name:'FaCE Battery', 
	list: ['Questionnaire','Questionnaire','Word Recall','Trail Making','Image Copy','Serial Subtraction','Fluency','Word Recall'],
	//list: ['Intake Form'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['EN_IntakeForm_FaCE','EN_OrientationForm_FaCE','FaCE_Default','TrailMaking_FaCE','ImageCopy_FaCE','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed'],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: ['','','FaCE','FaCE','FaCE','FaCE','FaCE','FaCE'],
	//Instructions: ['Default'],
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	ButtonName: [
        'Intake Form',
        'Orientation',
		'Immediate Recall',
		'Trail Making',
		'Cube Copy',
		'Serial Subtraction',
		'Fluidity',
		'Delayed Recall'
	],
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

BatteryList.push({index: 1001, 
	name:'TESTER', 
	list: [	'Questionnaire',
			'Consent Form',
			'Questionnaire',
			'Listening',
			'Reading Test',
			'Word Recall', 
			'Card Sort',
			'Pattern Comparison',
			'Image Copy',
			'Spatial DMS',
			'Word Recall', 
			'Word Recognition',
			'Questionnaire',
		],
	//list: ['Intake Form'],
	description: 'Test',
	ParameterLists: [	'EN_BriefScreening',
						'EN_ConsentForm_uOttawa_Steffener',
						'EN_IntakeForm_Generic',
						'Listening_001',
						'ReadingListeningList01',
						'RAVLT_Spoken_Immediate',
						'CardSort_001',
						'PatternComparison_Default', 
						'ImageCopy_Default',
						'SpatialDMS_Adaptive',
						'RAVLT_Spoken_Delayed', 
						'TEST_Spoken',
						'aes',
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	'',
					'',
					'',
					'Default',
					'Default',
					'Default',
					'Default',
					'Default',
					'Default',
					'Default',
					'Default', 
					'Default',
					'',
					],
	//Instructions: ['Default'],
	BatteryInstructions: "<h1>Cognitive Evaluation</h1>",
	ButtonName: [
		'Screening',
		'Consent',
		'Intake',
		'Listening',
		'Reading',
    	'Immediate',
		'Card Sort',
		'Patt Compare',
		'Image Copy',
		'Dots',
		'Delayed',
		'Recognition',
		'AES'
	],
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})
