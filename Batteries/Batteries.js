
var BatteryList = []
// This is not used yet
var BatteryDescription = 'This is a description of the battery of tests that will be taken.'


BatteryList.push({index: 15, 
	name:'FaCE Battery', 
	list: ['Word Recall','Trail Making','Image Copy','Serial Subtraction','Fluency','Word Recall','Intake Form'],
	list: ['Image Copy','Word Recall','Intake Form'],
	description: 'A web-based version of the FaCE',
	ParameterLists: ['TrailMaking_FaCE','ImageCopy_Default','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed','EN_IntakeForm_FaCE'],
	ParameterLists: ['ImageCopy_FaCE','FaCE_Default_Delayed','EN_IntakeForm_FaCE'],
	Instructions: ['FaCE','FaCE','Default','Default','Default','Default'],
	Instructions: ['FaCE','FaCE','Default'],
	BatteryInstructions: "<h1>This is the Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

BatteryList.push({index: 16, 
	name:'FaCE Battery', 
	list: ['Word Recall','Trail Making','Cube Copy','Serial Subtraction','Fluency','Word Recall'],
	description: 'FR: A web-based version of the FaCE',
	ParameterLists: ['FaCE_Default','TrailMaking_FaCE','CubeCopy_Default','SerialSubtract_FaCE','Fluency_FruitsVegetable','FaCE_Default_Delayed'],
	BatteryInstructions: 'FR: A web-based version of the FaCE',
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})


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
// ========================================================================
BatteryList.push({index: 101, 
	name:'Barbados', 
	list: [
        'Intake Form',
        'Trail Making', 'Trail Making', 
        'Digit Span', 'Digit Span', 
        'Verbal DMS','Line Bisection', 'Clock Drawing',
        'Cube Copy','Word Recall',
        'Stroop Color','Stroop Word','Stroop Color/Word',
        'Cancellation Task','Word Recall', 
        'Matrix Reasoning',
        'Spatial DMS'
	], 
	description: BatteryDescription,
	ParameterLists: [
        '',
        'TrailMakingA_003','TrailMakingB_003',
        'DigitSpan_Audio_Forward_TwoErrors','DigitSpan_Audio_Backward_TwoErrors',
        'vDMS_Adaptive','LineBisection_001','ClockDrawing_001',
        'CubeCopy_Default','RAVLT_Manual_Immediate',
        'Stroop_Golden','Stroop_Golden','Stroop_Golden',
        'Cancellation_001','RAVLT_Manual_Delayed',
        'MatrixReasoning_ICAR',
        'SpatialDMS_Adaptive'
	],
	ButtonName: [
        'Intake Form*',
        'Trails A*','Trails B*',
        'DS, Forward*','DS, Backward*',
        'Verbal DMS*','Line Bisect*','Clock Draw*',
        'Cube Copy','RAVLT, Immediate',
        'Color','Word','Color/Word',
        'Cancellation', 'RAVLT, Delay',
        'ICAR',
        'Spatial DMS'
	],
    BatteryInstructions:"This is the NCMLab Evaluation",
	Language:'EN'
})
// ========================================================================
// ========================================================================
BatteryList.push({index: 102, 
	name:'Chemo Brain', 
	list: [
        'Intake Form',
        'Clock Drawing','Cube Copy',
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
    BatteryInstructions:"Chemo Brain Fog",
	Language:'EN'
})
// ========================================================================
BatteryList.push({index: 202, 
	name:'Chemo Brain', 
	list: [
        'Intake Form',
        'Clock Drawing','Cube Copy',
        'Trail Making', 'Trail Making', 
	    'Digit Span', 'Digit Span',	
        'Word Recall',
        'Stroop Color','Stroop Word','Stroop Color/Word',
        'Line Bisection','Cancellation Task', 
        'Word Recall'
	], 
	description: 'A Pilot Study Assessing Cognitive Functioning of Patients being treated for Thoracic Tumors',
	ParameterLists: [
        '',
        'ClockDrawing_Default', 'CubeCopy_Default',
        'TrailMakingA_Default','TrailMakingB_Default',
		'DigitSpan_Audio_Forward_TwoErrors','DigitSpan_Audio_Backward_TwoErrors',
		'RAVLT_Manual_Immediate',
		'Stroop_Victoria','Stroop_Victoria','Stroop_Victoria',
		'LineBisection_001','Cancellation_001',
        'RAVLT_Manual_Delayed'
	],
	ButtonName: [
        "Formulaire d'admission",
        "Dessin d'Horloge",'Copie de Cube',
        'Sentiers A','Sentiers B',
		'MC Endroit','MC Inversé',
		'RAVLT, Immediate',
		'Color','Word','Color/Word',
        'Line Bisect','Cancellation',
		'RAVLT, Delayed',
	],
    BatteryInstructions:"Chemo Brain Fog",
	Language:'FR'
})


// ========================================================================
// ========================================================================

BatteryList.push({index: 105, 
	name:'FaCE Battery', 
	list: [
		'Word Recall',
		'Trail Making',
		'Cube Copy',
		'Serial Subtraction',
		'Fluency',
		'Word Recall'
	], 
	description: '',
	ParameterLists: 
		['FaCE_Default',
		'TrailMaking_FaCE',
		'CubeCopy_Default',
		'SerialSubtract_FaCE',
		'Fluency_FruitsVegetable',
		'FaCE_Default_Delayed'],
	ButtonName: [
		'Immediate Memory',
		'Trail Making',
		'Cube Copy',
		'Attention',
		'Fluency',
		'Word Recall'
	],
	BatteryInstructions:"",
	Language:'EN',
	Footer: '©GagnonBruno2016'
})

// ========================================================================

BatteryList.push({index: 205, 
	name:'FaCE Battery', 
	list: [
		'Word Recall',
		'Trail Making',
		'Cube Copy',
		'Serial Subtraction',
		'Fluency',
		'Word Recall'
	], 
	description: '',
	ParameterLists: 
		['FaCE_Default_FR',
		'TrailMaking_FaCE',
		'CubeCopy_Default',
		'SerialSubtract_FaCE',
		'Fluency_FruitsVegetable',
		'FaCE_Default_Delayed'],
	ButtonName: [
		'Mémoire immédiate ',
		'Sentiers',
		'Copie de Cube',
		'Attention',
		'Language',
		'Rappel différé'
	],
	BatteryInstructions:"",
	Language:'FR',
	Footer: '©GagnonBruno2016'
})



