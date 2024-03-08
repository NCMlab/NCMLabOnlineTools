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
List.push({Task: 'Spetial DMS', Parameters: 'SpatialDMS_Adaptive', Instructions: 'Default', IconName: 'Dots'})
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
// ==================================================================
// ===== FaCE ============================
// ------ ENGLISH --------------------------------

List = []
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})
List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_EN', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Fluency', Parameters: 'Fluency_FruitsVegetable', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_EN', Instructions: 'FaCE', IconName: ''})
BatteryList.push({index: 1, 
	name:'FaCE Battery', 
	description: 'A web-based version of the FaCE',
    TaskList: List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})






// ==================================================================
var List = []
//List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
//List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})


//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Fluency', Parameters: 'Fluency_FruitsVegetable', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Fluency', Parameters: 'Fluency_FruitsVegetable', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default_Delayed', Instructions: 'FaCE', IconName: ''})

BatteryList.push({index: 116, 
	name:'FaCE Battery', 
	description: 'A web-based version of the FaCE',
    TaskList: List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

//https://jsfiddle.net/p6sg12e4/14/