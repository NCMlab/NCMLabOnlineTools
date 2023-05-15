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
ComponentList.push({name:'Spatial DMS', iconFileName:'SpatialDMS.png'})
ComponentList.push({name:'Intake Form', iconFileName:'MultiChoice.png'})
// What battery was passed?

// I think I can use the name instead of the index
add('Stroop Color', function(){jatos.startComponent(5)});
add('Stroop Word', function(){jatos.startComponent(6)});
add('Stroop Color/Word', function(){jatos.startComponent(7)});
add('Trail Making', function(){jatos.startComponent(21)});
add('Word Recall', function(){jatos.startComponent(10)});
add('Matrix Reasoning', function(){jatos.startComponent(16)});
add('Cube Copy', function(){jatos.startComponent(15)});
add('Likert',function(){jatos.startComponent(19)});
add('Digit Span',function(){jatos.startComponent(20)});
add('Serial Subtraction',function(){jatos.startComponent(22)});
add('Fluency',function(){jatos.startComponent(23)});
add('Line Bisection',function(){jatos.startComponent(24)});
add('Clock Drawing',function(){jatos.startComponent(14)});
add('Verbal DMS',function(){jatos.startComponent(26)});
add('Cancellation',function(){jatos.startComponent(13)});
add('Spatial DMS',function(){jatos.startComponent(28)});
add('Intake Form',function(){jatos.startComponent(30)});
const BatteryHtmlID = 1
const UserChoiceHtmlID = 25
const UsageManagerHtmlID = 27
