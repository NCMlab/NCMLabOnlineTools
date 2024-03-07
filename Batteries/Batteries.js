var BatteryList = []
// ==================================================================
var List = []
List.push({Task: 'Screening', Parameters: 'BriefScreening', Instructions: '', IconName: 'Screening'})
List.push({Task: 'Consent Form', Parameters: 'ConsentForm_uOttawa_Steffener', Instructions: '',IconName: 'Consent'})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'Default', IconName: 'Intake'})
List.push({Task: 'Listening', Parameters: 'Listening_001', Instructions: 'Default', IconName: 'Listening'})
List.push({Task:'Fluency', Parameters: 'Fluency_TEST', Instructions: 'Default', IconName: 'Fluency'})

BatteryList.push({index: 1099, 
	name:'Test', 
    description: 'Test',
    BatteryInstructions: '<p class="Instructions">Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
    Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023',
    TaskList: List,
})
// ==================================================================
var List = []
//List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'IntakeFaCE', IconName:''})
//List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'OrientationFaCE', IconName:''})


//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Trail Making', Parameters: 'TrailMaking_FaCE', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Image Copy', Parameters: 'ImageCopy_FaCE', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Serial Subtraction', Parameters: 'SerialSubtract_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
List.push({Task: 'Fluency', Parameters: 'Fluency_FruitsVegetable', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Fluency', Parameters: 'Fluency_FruitsVegetable', Instructions: 'FaCE', IconName: ''})
//List.push({Task: 'Word Recall', Parameters: 'FaCE_Default_Delayed', Instructions: 'FaCE', IconName: ''})

BatteryList.push({index: 16, 
	name:'FaCE Battery', 
	description: 'A web-based version of the FaCE',
    TaskList: List,
	BatteryInstructions: "<h1>Fast Cognitive Evaluation</h1>",
	Language:'EN',
	RunAudioTest: true,
	Footer: '©GagnonBruno 2016'
})

//https://jsfiddle.net/p6sg12e4/14/