var BatteryList = []

// ===== H-10-23-9755 ============================
// ------ ENGLISH --------------------------------
var List = []
List.push({Task: 'Screening', Parameters: 'BriefScreening', Instructions: '', IconName: 'Screening'})
List.push({Task: 'Consent Form', Parameters: 'ConsentForm_uOttawa_Steffener', Instructions: '',IconName: 'Consent'})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'Default', IconName: 'Intake'})
List.push({Task: 'Listening', Parameters: 'Listening_001', Instructions: 'Default', IconName: 'Listening'})
List.push({Task: 'Reading Test', Parameters: 'ReadingListeningList01', Instructions: 'Default', IconName: 'Reading'})
List.push({Task: 'Word Recall', Parameters: 'RAVLT_Spoken_Immediate', Instructions: 'Default', IconName: 'Immediate'})
List.push({Task: 'Card Sort', Parameters: 'CardSort_001', Instructions: 'Default', IconName: 'Card Sort'})
List.push({Task: 'Pattern Comparison', Parameters: 'PatternComparison_001', Instructions: 'Default', IconName: 'Patt Comparison'})
List.push({Task: 'Spatial DMS', Parameters: 'SpatialDMS_Adaptive', Instructions: 'Default', IconName: 'Dots'})
List.push({Task: 'Word Recall', Parameters: 'RAVLT_Spoken_Delayed', Instructions: 'Default', IconName: 'Delayed'})
List.push({Task: 'Word Recognition', Parameters: 'WordRecog_Spoken', Instructions: 'Default', IconName: 'Recognition'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_T_001', Instructions: 'Default', IconName: 'STAI-T'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_S_001', Instructions: 'Default', IconName: 'STAI_S'})
List.push({Task: 'Questionnaire', Parameters: 'BDI_001', Instructions: 'Default', IconName: 'BDI/GDS'})

BatteryList.push({index: 16, 
	name:'H-10-23-9755', 
    description: 'Test',
    BatteryInstructions: '<p class="Instructions">Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
    Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2024',
    TaskList: List,
})
// ------ FRENCH --------------------------------
var List = []
List.push({Task: 'Screening', Parameters: 'BriefScreening', Instructions: '', IconName: 'Screening'})
List.push({Task: 'Consent Form', Parameters: 'ConsentForm_uOttawa_Steffener', Instructions: '',IconName: 'Consent'})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_FR', Instructions: 'Default', IconName: 'Intake'})
List.push({Task: 'Listening', Parameters: 'Listening_002', Instructions: 'Default', IconName: 'Listening'})
List.push({Task: 'Reading Test', Parameters: 'ReadingListeningList01', Instructions: 'Default', IconName: 'Reading'})
List.push({Task: 'Word Recall', Parameters: 'RAVLT_Spoken_Immediate_002', Instructions: 'Default', IconName: 'Immediate'})
List.push({Task: 'Card Sort', Parameters: 'CardSort_001', Instructions: 'Default', IconName: 'Card Sort'})
List.push({Task: 'Pattern Comparison', Parameters: 'PatternComparison_001', Instructions: 'Default', IconName: 'Patt Comparison'})
List.push({Task: 'Spatial DMS', Parameters: 'SpatialDMS_Adaptive', Instructions: 'Default', IconName: 'Dots'})
List.push({Task: 'Word Recall', Parameters: 'RAVLT_Spoken_Delayed_002', Instructions: 'Default', IconName: 'Delayed'})
List.push({Task: 'Word Recognition', Parameters: 'WordRecog_Spoken_002', Instructions: 'Default', IconName: 'Recognition'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_T_001', Instructions: 'Default', IconName: 'STAI-T'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_S_001', Instructions: 'Default', IconName: 'STAI_S'})
List.push({Task: 'Questionnaire', Parameters: 'BDI_001', Instructions: 'Default', IconName: 'BDI/GDS'})

BatteryList.push({index: 51, 
	name:'H-10-23-9755', 
    description: 'Test',
    BatteryInstructions: '<p class="Instructions">Bienvenu(e) au Laboratoire de carte cognitive cerebrale de l\'Université d\'Ottawa - <b>Évaluation cognitive</b>',
    Language:'FR',
	RunAudioTest: true,
	Footer: '©NCMLab 2024',
    TaskList: List,
})


// ====== DEMONSTRATION OF ALL AVAILABLE TASKS ==============================
List = []
//List.push({Task: '', Parameters: '', Instructions: '', IconName: ''})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_Generic', Instructions: 'Default', IconName:'Intake Form'})
List.push({Task: 'Stroop Color', Parameters: 'Stroop_Default', Instructions: 'Default', IconName: 'Color'})
List.push({Task: 'Stroop Word', Parameters: 'Stroop_Default', Instructions: 'Default', IconName: 'Word'})
List.push({Task: 'Stroop Color/Word', Parameters: 'Stroop_Default', Instructions: 'Default', IconName: 'Color/Word'})
List.push({Task: 'Word Recall', Parameters: 'RAVLT_Spoken_Immediate', Instructions: 'Default', IconName: 'RAVLT, Imm (Spoken)'})
List.push({Task: 'Word Recall', Parameters: 'RAVLT_Spoken_Delayed', Instructions: 'Default', IconName: 'RAVLT, Del (Spoken)'})
List.push({Task: 'Word Recognition', Parameters: 'WordRecog_Spoken_003', Instructions: 'Default', IconName: 'RAVLT, Recog'})
List.push({Task: 'Card Sort', Parameters: 'CardSort_002', Instructions: 'Default', IconName: 'Card Sort'})
List.push({Task: 'Pattern Comparison', Parameters: 'PatternComparison_002', Instructions: 'Default', IconName: 'Pattern Comparison'})
List.push({Task: 'Cancellation Task', Parameters: 'Cancellation_001', Instructions: 'Default', IconName: 'Cancellation'})
List.push({Task: 'Image Copy', Parameters: 'ImageCopy_Default', Instructions: 'Default', IconName: 'Cube Copy'})
List.push({Task: 'Clock Drawing', Parameters: 'ClockDrawing_001', Instructions: 'Default', IconName: 'Clock Draw'})
List.push({Task: 'Matrix Reasoning', Parameters: 'MatrixReasoning_ICAR', Instructions: 'Default', IconName: 'Matrix Reas'})
List.push({Task: 'Digit Span', Parameters: 'DigitSpan_Audio_Forward_TwoErrors', Instructions: 'Default', IconName: 'DS, Forward'})
List.push({Task: 'Digit Span', Parameters: 'DigitSpan_Audio_Backward_TwoErrors', Instructions: 'Default', IconName: 'DS, Backward'})
List.push({Task: 'Trail Making', Parameters: 'TrailMakingA_Default', Instructions: 'Default', IconName: 'Trails A'})
List.push({Task: 'Trail Making', Parameters: 'TrailMakingB_Default', Instructions: 'Default', IconName: 'Trails B'})
List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_Default', Instructions: 'Default', IconName: 'Subtract'})
List.push({Task: 'Fluency', Parameters: 'Fluency_Animals', Instructions: 'Default', IconName: 'Fluency, Animals'})
List.push({Task: 'Line Bisection', Parameters: 'LineBisection_001', Instructions: 'Default', IconName: 'Line Bisect'})
List.push({Task: 'Verbal DMS', Parameters: 'vDMS_Adaptive', Instructions: 'Default', IconName: 'Verbal DMS'})
List.push({Task: 'Spatial DMS', Parameters: 'SpatialDMS_Adaptive', Instructions: 'Default', IconName: 'Spatial DMS'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_T_001', Instructions: 'Default', IconName: 'STAI-T'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_S_001', Instructions: 'Default', IconName: 'STAI-S'})
List.push({Task: 'Questionnaire', Parameters: 'BDI_001', Instructions: 'Default', IconName: 'BDI'})
//List.push({Task: '', Parameters: '', Instructions: '', IconName: ''})
//List.push({Task: '', Parameters: '', Instructions: '', IconName: ''})
BatteryList.push({index: 2002, 
	name:'The 3C Platform', 
	description: 'The 3C Platform',
    TaskList: List,
	BatteryInstructions: "<h1>The 3C Platform</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCM Lab 2023'
})



var List = []
List.push({Task: 'Questionnaire', Parameters: 'STAI_T_001', Instructions: 'Default', IconName: 'STAI-S'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_S_001', Instructions: 'Default', IconName: 'STAI-S'})
List.push({Task: 'Questionnaire', Parameters: 'STAI_T_001', Instructions: 'Default', IconName: 'STAI-S'})
List.push({Task: 'Image Copy', Parameters: 'ImageCopy_Smile', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_VerA_EN', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_Training_Spoken', Instructions: 'FaCE', IconName: ''})

List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Manual_VerB_EN', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_VerA_EN', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_VerB_EN', Instructions: 'FaCE', IconName: ''})


	List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_Training_EN', Instructions: 'FaCE', IconName: ''})

	BatteryList.push({index: 6, 
		name:'FaCE Battery: Version B', 
		description: 'A web-based version of the FaCE using manual scoring',
		TaskList: List,
		BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
		Language:'EN',
		RunAudioTest: true,
		Footer: '©GagnonBruno 2016'
	})
	



// --> FaCE Batteries <--
// English, Training
// English, Ver A
// English, Ver B
// French, Ver A
// French, Ver B

//https://jsfiddle.net/p6sg12e4/14/