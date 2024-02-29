
var BatteryList = []
// =================================================================================
// ====== FACE ==========
// ====== FRENCH ========
// ====== ENGLISH ========
// ====== AD-HOC ========


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
// ====== BATTERY  ========

// =================================================================================
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
// ========================================================================
BatteryList.push({index: 202, 
	name:'NCM Lab Demonstration', 
	list: [
        'Screening', //1
		'Intake Form',
		'Listening',
		'Reading Test',
		'Questionnaire',//5
		'Questionnaire',
		'Questionnaire',
		'Stroop Color',
		'Stroop Word',
		'Stroop Color/Word',//10
		'Word Recall',
		'Word Recall',
		'Word Recognition',
		'Card Sort',
		'Pattern Comparison',//15
		'Cancellation Task',
		'Image Copy',
		'Clock Drawing',
		'Matrix Reasoning', // 
		'Digit Span',//20
		'Digit Span', 
		'Trail Making',//
		'Trail Making', 
        'Serial Subtraction',//
		'Fluency',//25
//		'Line Bisection',
//		'Verbal DMS',
        'Spatial DMS', 
	], 
	Instructions: ['', //1
		'Default',
		'Default',
		'Default',
		'',//5
		'',
		'',
		'Default', 
		'Default', 
		'Default',	//10
		'Default', 
		'Default',  
		'Default',
		'Default', 
		'Default',//15
		'Default',
		'Default', 
		'Default',
		'Default',
		'Default',//20
		'Default', 
		'Default', 
		'Default',
		'Default', 
		'Default',//25
//		'Default', 
//		'Default', 
		'Default', 
	],
	description: '',
	ParameterLists: [
        'BriefScreening',
		'IntakeForm_Generic',
		'Listening_002',
		'ReadingListeningList02',
		'STAI_T_001',
		'STAI_S_001',
		'BDI_001',
        'Stroop_Default',
		'Stroop_Default',
		'Stroop_Default',//6
		'RAVLT_Spoken_Immediate_002',
		'RAVLT_Spoken_Delayed_002', 
		'WordRecog_Spoken_003',
		'CardSort_002',
		'PatternComparison_002', 
		'Cancellation_002',
		'ImageCopy_Default',//10
		'ClockDrawing_001',
		'MatrixReasoning_ICAR',//
		'DigitSpan_Audio_Forward_TwoErrors',
		'DigitSpan_Audio_Backward_TwoErrors',
        'TrailMakingA_Default',//15
		'TrailMakingB_Default',
		'SerialSubtract_Default',//
		'Fluency_Animals',
//		'LineBisection_001',
//        'vDMS_Adaptive',
		'SpatialDMS_Adaptive',//
	],
	ButtonName: [
		'Screening*',//1
		'Intake*',
		'Listening*',
		'Reading*',
		'STAI-T*',
		'STAI-S*',
		'BDI/GDS*',
        'Color',
		'Word',
		'Color/Word',//6
		'RAVLT, Imm (Spoken)*',
		'RAVLT, Del (Spoken)*',
		'RAVLT, Recog*',
		'Card Sort*',
		'Pattern Comparison*',
		'Cancellation', 
		'Cube Copy',//10
		'Clock Draw',
		'Matrix Reas',//
		'DS, Forward',
		'DS, Backward',
		'Trails A',//15
		'Trails B',
        'Subtract',//
		'Fluency',
//        'Line Bisect',
//		'Verbal DMS',
        'Spatial DMS*',//
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

// =================================================================================
BatteryList.push({index: 1001, 
	name:'TESTER', 
	list: [	
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
// ===== ENGLISH ======
BatteryList.push({index: 11, 
	name:'H-10-23-9755', 
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
						'IntakeForm_EN',
						'Listening_001',
						'ReadingListeningList01',
						'RAVLT_Spoken_Immediate',
						'CardSort_001',
						'PatternComparison_001', 
						'SpatialDMS_Adaptive',
						'RAVLT_Spoken_Delayed', 
						'WordRecog_Spoken',
						'STAI_T_001',
						'STAI_S_001',
						'BDI_001',
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	'',
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
					'Default',
					'Default',
					'Default'
					],
	//Instructions: ['Default'],
	BatteryInstructions: '<p class="Instructions">Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
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
// ===== FRENCH TESTING =========

// =================================================================================
//<a href="https://jatos.ncmlab.ca/publix/TL1DU7CIL5r?Battery=51"><img src="FR.png" alt="French"><h2>Participer en français</h2></a> (Ce lien vous mènera directement à la tâche qui prendra entre 30 et 45 minutes.)

// === FRENCH ===
BatteryList.push({index: 51, 
	name:'H-10-23-9755', 
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
						'IntakeForm_FR',
						'Listening_002',
						'ReadingListeningList01',
						'RAVLT_Spoken_Immediate_002',
						'CardSort_001',
						'PatternComparison_001', 
						'SpatialDMS_Adaptive',
						'RAVLT_Spoken_Delayed_002', 
						'WordRecog_Spoken_002',
						'STAI_T_001',
						'STAI_S_001',
						'BDI_001',
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	'',
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
					'Default',
					'Default',
					'Default'
					],
	//Instructions: ['Default'],
	BatteryInstructions: '<p class="Instructions">Bienvenu(e) au Laboratoire de carte cognitive cerebrale de l\'Université d\'Ottawa - <b>Évaluation cognitive</b>',
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
	Language:'FR',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})
// =====================================================================================================
BatteryList.push({index: 12, 
	name:'TESTER', 
	list: [	
			'Intake Form',
			'Questionnaire'
		],
	//list: ['Intake Form'],
	description: 'Test',
	ParameterLists: [
						'IntakeForm',
						'BDI_001',
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	
					'Default',
					''
					],
	//Instructions: ['Default'],
	BatteryInstructions: '<p class="Instructions">FR: Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
	ButtonName: [
		'Intake',
		'BDI/GDS',
	],
	Language:'FR',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})



// ============================

// ===== ENGLISH ======

// I would like to edit the task lists to be as follows. I think it would be easier to handle and is more intuitive



BatteryList.push({index: 10, 
	name:'H-10-23-9755', 
	list: [	'Fluency',
			
		],
	//list: ['Intake Form'],
	description: 'Test',
	ParameterLists: [	'Fluency_TEST'
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	'Default',
					],
	//Instructions: ['Default'],
	BatteryInstructions: '<p class="Instructions">Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
	ButtonName: [
		
		'FLUENCY',
	],
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})
