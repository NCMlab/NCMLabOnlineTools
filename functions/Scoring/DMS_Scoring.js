function DMS_Scoring(Stair, data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(Stair)	
	console.log(stair1)
	console.log(data)
	
	var NTrials = Stair.TrialCount
	var NReversal = Stair.ReversalCount
	var Threshold = Stair.CalculateAverage()
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Threshold'
	Results.PrimaryResults['Accuracy'] = Threshold
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Threshold'
	Results.AllResults['Accuracy'] = Threshold
	Results.AllResults['Threshold'] = Threshold
	Results.AllResults['Number of Reversal'] = NReversal
	Results.AllResults['Number of Trials'] = NTrials
	Results.AllResults['Load List'] = stair1.ValueList
	Results.AllResults['Response Time List'] = stair1.ResponseTimeList
	Results.AllResults['Accuracy List'] = stair1.AccuracyList
	Results.AllResults['NDown'] = stair1.NDown
	Results.AllResults['NUp'] = stair1.NUp
	// NUMERIC SCORING
	Results.NumericResults = {}
	Results.NumericResults['sdms_thresh'] = Threshold
	Results.AllResults['sdms_Nrev'] = NReversal
	Results.AllResults['sdms_Ntrial'] = NTrials



	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	return Results
}



