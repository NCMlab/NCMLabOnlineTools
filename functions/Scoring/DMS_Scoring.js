function DMS_Scoring(Stair, data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(Stair)	
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
	Results.AllResults['NDown'] = stair1.NDown
	Results.AllResults['NUp'] = stair1.NUp
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	return Results
}



