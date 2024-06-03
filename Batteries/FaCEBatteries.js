
// ==================================================================
// FaCE
// TODO FIX MANUAL DELAYED RECALL
// ==================================================================
// 		ENGLISH
// 			TRAINING
// 				Spoken
var FaCE_Training_Spoken_EN_List = []
FaCE_Training_Spoken_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
FaCE_Training_Spoken_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
FaCE_Training_Spoken_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_Spoken_Training_EN', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Spoken_EN_List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE_Training', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Spoken_EN_List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE_Training', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Spoken_EN_List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_Training_Spoken', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Spoken_EN_List.push({Task: 'Fluency', Parameters: 'FaCE_Training_Spoken', Instructions: 'FaCE', IconName: ''})	
FaCE_Training_Spoken_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_Training_EN', Instructions: 'FaCE', IconName: ''})
// 				Manual
var FaCE_Training_Manual_EN_List = []
FaCE_Training_Manual_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
FaCE_Training_Manual_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
FaCE_Training_Manual_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_Manual_Training_EN', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Manual_EN_List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE_Training', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Manual_EN_List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE_Training', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Manual_EN_List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_Training_Manual', Instructions: 'FaCE', IconName: ''})
FaCE_Training_Manual_EN_List.push({Task: 'Fluency', Parameters: 'FaCE_Training_Manual', Instructions: 'FaCE', IconName: ''})	
FaCE_Training_Manual_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Manual_Training_EN', Instructions: 'FaCE', IconName: ''})

	BatteryList.push({index: 601, 
		name:'FaCE Battery: Training', 
		description: 'A web-based version of the FaCE using spoken recall',
		TaskList: FaCE_Training_Spoken_EN_List,
		BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
		Language:'EN',
		RunAudioTest: true,
		Footer: '©GagnonBruno 2016'
	})

	BatteryList.push({index: 602, 
		name:'FaCE Battery: Training', 
		description: 'A web-based version of the FaCE using manual scoring',
		TaskList: FaCE_Training_Manual_EN_List,
		BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
		Language:'EN',
		RunAudioTest: true,
		Footer: '©GagnonBruno 2016'
	})

// VERSION A
// 				Spoken
var FaCE_VerA_Spoken_EN_List = []
//FaCE_VerA_Spoken_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
//FaCE_VerA_Spoken_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
FaCE_VerA_Spoken_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_Spoken_VerA_EN', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Spoken_EN_List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Spoken_EN_List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE_VerA', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Spoken_EN_List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_VerA_Spoken', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Spoken_EN_List.push({Task: 'Fluency', Parameters: 'FaCE_VerA_Spoken', Instructions: 'FaCE', IconName: ''})	
FaCE_VerA_Spoken_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_VerA_EN', Instructions: 'FaCE', IconName: ''})
// 				Manual
var FaCE_VerA_Manual_EN_List = []
//FaCE_VerA_Manual_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
//FaCE_VerA_Manual_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
FaCE_VerA_Manual_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_Manual_VerA_EN', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Manual_EN_List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Manual_EN_List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE_VerB', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Manual_EN_List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_VerA_Manual', Instructions: 'FaCE', IconName: ''})
FaCE_VerA_Manual_EN_List.push({Task: 'Fluency', Parameters: 'FaCE_VerA_Manual', Instructions: 'FaCE', IconName: ''})	
FaCE_VerA_Manual_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Manual_VerA_EN', Instructions: 'FaCE', IconName: ''})


BatteryList.push({index: 611, 
	name:'FaCE Battery: Version A', 
	description: 'A web-based version of the FaCE using spoken recall',
	TaskList: FaCE_VerA_Spoken_EN_List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

BatteryList.push({index: 612, 
	name:'FaCE Battery: Version A', 
	description: 'A web-based version of the FaCE using manual scoring',
	TaskList: FaCE_VerA_Manual_EN_List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

// VERSION B
// 				Spoken
var FaCE_VerB_Spoken_EN_List = []
//FaCE_VerB_Spoken_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
//FaCE_VerB_Spoken_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
FaCE_VerB_Spoken_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_Spoken_VerB_EN', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Spoken_EN_List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Spoken_EN_List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE_VerB', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Spoken_EN_List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_VerB_Spoken', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Spoken_EN_List.push({Task: 'Fluency', Parameters: 'FaCE_VerB_Spoken', Instructions: 'FaCE', IconName: ''})	
FaCE_VerB_Spoken_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Spoken_VerB_EN', Instructions: 'FaCE', IconName: ''})
// 				Manual
var FaCE_VerB_Manual_EN_List = []
//FaCE_VerB_Manual_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
//FaCE_VerB_Manual_EN_List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})	
FaCE_VerB_Manual_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Immediate_Manual_VerB_EN', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Manual_EN_List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Manual_EN_List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE_VerB', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Manual_EN_List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_FaCE_VerB_Manual', Instructions: 'FaCE', IconName: ''})
FaCE_VerB_Manual_EN_List.push({Task: 'Fluency', Parameters: 'FaCE_VerB_Manual', Instructions: 'FaCE', IconName: ''})	
FaCE_VerB_Manual_EN_List.push({Task: 'Word Recall', Parameters: 'FaCE_Delayed_Manual_VerB_EN', Instructions: 'FaCE', IconName: ''})


BatteryList.push({index: 621, 
	name:'FaCE Battery: Version B', 
	description: 'A web-based version of the FaCE using spoken recall',
	TaskList: FaCE_VerB_Spoken_EN_List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

BatteryList.push({index: 622, 
	name:'FaCE Battery: Version B', 
	description: 'A web-based version of the FaCE using manual scoring',
	TaskList: FaCE_VerB_Manual_EN_List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})
