var List = []
List.push({Task: 'Screening', Parameters: 'BriefScreening', Instructions: '',IconName: 'Screening'})
List.push({Task: 'Consent Form', Parameters: 'ConsentForm_uOttawa_Steffener', Instructions: '',IconName: 'Consent'})
List.push({Task: 'Intake Form', Parameters: 'IntakeForm_EN', Instructions: 'Default',IconName: 'Intake'})
List.push({Task: 'Listening', Parameters: 'Listening_001', Instructions: 'Default',IconName: 'Listening'})
List.push({Task:'Fluency', Parameters: 'Fluency_TEST', Instructions: 'Default', IconName: 'Fluency'})


var BatteryList = []

BatteryList.push({index: 1099, 
	name:'Test', 
    description: 'Test',
    BatteryInstructions: '<p class="Instructions">Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
    Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023',
    TaskList: List,
})


//https://jsfiddle.net/p6sg12e4/14/