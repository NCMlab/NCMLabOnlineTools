
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
        'Questionnaire',//1
		'Consent Form',
		'Questionnaire',
        'Stroop Color',
		'Stroop Word',
		'Stroop Color/Word',//6
		'Word Recall',
		'Word Recall', 
		'Cancellation Task',
		'Image Copy',//10
		'Clock Drawing',
		'Matrix Reasoning', // 
		'Digit Span',
		'Digit Span', 
		'Trail Making',//15
		'Trail Making', 
        'Serial Subtraction',//
		'Fluency',
		'Line Bisection',
        'Word Recall', //20
		'Verbal DMS',
        'Spatial DMS', //
		'Card Sort',
		'Questionnaire'
	], 
	Instructions: ['', //1
		'',
		'',
		'Default', 
		'Default', //5
		'Default',	//
		'Default', 
		'Default',  
		'Default',
		'Default', //10
		'Default',
		'Default', //
		'Default', 
		'Default',
		'Default', //15
		'Default',
		'Default', //
		'Default', 
		'Default',
		'Default', //20
		'Default',
		'Default', //
		'Default', //
		''
	],
	description: '',
	ParameterLists: [
        'EN_BriefScreening',
		'EN_ConsentForm_uOttawa_Steffener',
		'EN_IntakeForm_Generic',
        'Stroop_Default',
		'Stroop_Default',
		'Stroop_Default',//6
        'RAVLT_Manual_Immediate',
		'RAVLT_Spoken_Immediate',
		'Cancellation_001',
		'ImageCopy_Default',//10
		'ClockDrawing_001',
		'MatrixReasoning_ICAR',//
		'DigitSpan_Audio_Forward_TwoErrors',
		'DigitSpan_Audio_Backward_TwoErrors',
        'TrailMakingA_003',//15
		'TrailMakingB_003',
		'SerialSubtract_Default',//
		'Fluency_Animals',
		'LineBisection_001',
        'RAVLT_Manual_Delayed',//20
        'vDMS_Adaptive',
		'SpatialDMS_Adaptive',//
		'CardSort_001',
		'aes'
	],
	ButtonName: [
		'Screening',//1
		'Consent',
		'Intake',
        'Color',
		'Word',
		'Color/Word',//6
		'Recall, Imm (Manual)',
		'Recall, Imm (Spoken)',
		'Cancellation', 
		'Cube Copy',//10
		'Clock Draw',
		'ICAR',//
		'DS, Forward',
		'DS, Backward',
		'Trails A',//15
		'Trails B',
        'Subtract',//
		'Fluency',
        'Line Bisect',
		'Word Recall, Delay',//20
		'Verbal DMS',
        'Spatial DMS',//
		'Card Sort',
		'AES'
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
// =================================================================================
// =================================================================================
BatteryList.push({index: 1001, 
	name:'TESTER', 
	list: [	
			'Email Entry',
			'Screening',
			'Consent Form',
			'Intake Form',
			'Listening',
			'Reading Test',
			'Word Recall', 
			'Card Sort',
			'Pattern Comparison',
			'Spatial DMS',
			'Word Recall', 
			'Word Recognition',
			'Questionnaire',
			'Questionnaire',
			'Questionnaire'
		],
	//list: ['Intake Form'],
	description: 'Test',
	ParameterLists: [	
						'',
						'BriefScreening',
						'ConsentForm_uOttawa_Steffener',
						'IntakeForm_Generic',
						'Listening_001',
						'ReadingListeningList01',
						'RAVLT_Spoken_Immediate',
						'CardSort_001',
						'PatternComparison_001', 
						'SpatialDMS_Adaptive',
						'RAVLT_Spoken_Delayed', 
						'TEST_Spoken',
						'STAI_T_001',
						'STAI_S_001',
						'BDI_001',
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	
					'',
					'',
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
					'',
					'',
					''
					],
	//Instructions: ['Default'],
	BatteryInstructions: "Welcome to the Neural Cognitive Mapping Laboratory at University of Ottawa's <h1>Cognitive Evaluation</h1>",
	ButtonName: [
		'Screening',
		'Consent',
		'Intake',
		'Listening',
		'Reading',
    	'Immediate',
		'Card Sort',
		'Patt Compare',
		'Dots',
		'Delayed',
		'Recognition',
		'STAI-T',
		'STAI-S',
		'BDI/GDS',
	],
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})
// =================================================================================
BatteryList.push({index: 11, 
	name:'TESTER', 
	list: [	'Screening',
			'Consent Form',
			'Intake Form',
			'Listening',
			'Reading Test',
			'Word Recall', 
			'Card Sort',
			'Pattern Comparison',
			'Spatial DMS',
			'Word Recall', 
			'Word Recognition',
			'Questionnaire',
			'Questionnaire',
			'Questionnaire'
		],
	//list: ['Intake Form'],
	description: 'Test',
	ParameterLists: [	'BriefScreening',
						'ConsentForm_uOttawa_Steffener',
						'IntakeForm_Generic',
						'Listening_001',
						'ReadingListeningList01',
						'RAVLT_Spoken_Immediate',
						'CardSort_001',
						'PatternComparison_001', 
						'SpatialDMS_Adaptive',
						'RAVLT_Spoken_Delayed', 
						'TEST_Spoken',
						'STAI_T_001',
						'STAI_S_001',
						'BDI_001',
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
					'',
					'',
					''
					],
	//Instructions: ['Default'],
	BatteryInstructions: "Welcome to the Neural Cognitive Mapping Laboratory at University of Ottawa's <h1>Cognitive Evaluation</h1>",
	ButtonName: [
		'Screening',
		'Consent',
		'Intake',
		'Listening',
		'Reading',
    	'Immediate',
		'Card Sort',
		'Patt Compare',
		'Dots',
		'Delayed',
		'Recognition',
		'STAI-T',
		'STAI-S',
		'BDI/GDS',
	],
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})
