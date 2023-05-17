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
	Results = {}
	Results.PrimaryResults = {}
	Results.AllResults = {}
	if (DigitSpan_parameters.DeliveryMethod == 'staircase')
	{
		var NTrials = Stair.TrialCount
		var NReversal = Stair.ReversalCount
		var Threshold = Stair.CalculateAverage()
		Results.PrimaryResults['Threshold'] = Threshold
		Results.AllResults['NTrials'] = NTrials
		Results.AllResults['NReversal'] = NReversal
		Results.AllResults['Threshold'] = Threshold
	}
	if (DigitSpan_parameters.DeliveryMethod == 'fixed')
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
		Results.AllResults['Load List'] = LoadList
		Results.AllResults['Accuracy List'] = AccuracyList
	}
	if (DigitSpan_parameters.DeliveryMethod == 'numberErrors')
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
		Results.PrimaryResults['Accuracy'] = MaxCorrect
		Results.AllResults['Threshold'] = MaxCorrect
		Results.AllResults['Load List'] = LoadList
		Results.AllResults['Accuracy List'] = AccuracyList
	}

	Results.PrimaryResults['Score Name'] = DigitSpan_parameters.DeliveryMethod
	Results.AllResults['Scoring Type'] = DigitSpan_parameters.DeliveryMethod
	console.log(Results)
	return Results
}