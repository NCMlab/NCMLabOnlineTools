/*function DigitSpan_Scoring(data, Stair) {
	
	var NTrials = Stair.TrialCount
	var NReversal = Stair.ReversalCount
	var Threshold = Stair.CalculateAverage()
	data.PrimaryResults = {}
	data.PrimaryResults['Threshold'] = Threshold
	data.AllResults = {}
	data.AllResults['Threshold'] = Threshold
	data.AllResults['NReversal'] = NReversal
	data.AllResults['NTrials'] = NTrials
	return data
}

*/

function DigitSpan_Scoring(data) {
	console.log(data)
	Notes = data.filter({trial: 'Notes'})
	Results = {}
	Results.PrimaryResults = {}
	Results.AllResults = {}
	if (parameters.DeliveryMethod == 'staircase')
	{
		var NTrials = Stair.TrialCount
		var NReversal = Stair.ReversalCount
		var Threshold = Stair.CalculateAverage()
		Results.PrimaryResults['Threshold'] = Threshold
		Results.AllResults['NTrials'] = NTrials
		Results.AllResults['NReversal'] = NReversal
		Results.AllResults['Threshold'] = Threshold
	}
	if (parameters.DeliveryMethod == 'fixed')
	{
		var DataFromTestRun = jsPsych.data.get().filter({task: 'response trial'})
		console.log(DataFromTestRun)
		var NTrials = DataFromTestRun.count()
		console.log("Number of trials: " + NTrials)
		Results.AllResults['NTrials'] = NTrials
		// Make list of loads
		var LoadList = []
		var AccuracyList = []
		var MaxCorrect = -99
		for (var i = 0; i < NTrials; i++ )
		{
			
			LoadList.push(DataFromTestRun.trials[i].StimLoad)
			if (DataFromTestRun.trials[i].correct)
			{ 
				AccuracyList.push(1)
				MaxCorrect = DataFromTestRun.trials[i].StimLoad
			}
			else {AccuracyList.push(0)}
		}
		Results.PrimaryResults['Threshold'] = MaxCorrect
		Results.AllResults['Threshold'] = MaxCorrect
	}
	if (parameters.DeliveryMethod == 'numberErrors')
	{
		var DataFromTestRun = jsPsych.data.get().filter({task: 'response trial'})
		console.log(DataFromTestRun)
		var NTrials = DataFromTestRun.count()
		console.log("Number of trials: " + NTrials)
		Results.AllResults['NTrials'] = NTrials
		// Make list of loads
		var LoadList = []
		var AccuracyList = []
		var StimulusList = []
		var ResponseList = []
		var MaxCorrect = -99
		for (var i = 0; i < NTrials; i++ )
		{

			LoadList.push(DataFromTestRun.trials[i].StimLoad)
			StimulusList.push(DataFromTestRun.trials[i].StimList)
			ResponseList.push(DataFromTestRun.trials[i].ResponseList)
			if (DataFromTestRun.trials[i].correct)
			{ 
				AccuracyList.push(1)
				MaxCorrect = DataFromTestRun.trials[i].StimLoad
			}
			else {AccuracyList.push(0)}
		}
		Results.PrimaryResults['Accuracy'] = MaxCorrect
		Results.AllResults['Accuracy'] = MaxCorrect
		Results.AllResults['Threshold'] = MaxCorrect
	}

	var ResponseArray = Array.from(Array(NTrials), _ => Array(5).fill(-99))
 	for (var i = 0; i < NTrials; i++ )
		{
			ResponseArray[i][0] = i + 1
			ResponseArray[i][1] = DataFromTestRun.trials[i].StimLoad
			ResponseArray[i][2] = DataFromTestRun.trials[i].StimList
			ResponseArray[i][3] = DataFromTestRun.trials[i].ResponseList
			ResponseArray[i][4] = AccuracyList[i]
		} 
	Results.PrimaryResults['ScoreName'] = parameters.DeliveryMethod
	Results.AllResults['ScoreName'] = parameters.DeliveryMethod
	Results.AllResults['DS Response Array'] = ResponseArray
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	Results.AllResults['Scoring Notes'] = Instructions.NotesForResultsPage
	return Results
}