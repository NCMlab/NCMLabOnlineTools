function DMS_Scoring(Stair) {
	console.log(Stair)	
	var NTrials = Stair.TrialCount
	var NReversal = Stair.ReversalCount
	var Threshold = Stair.CalculateAverage()
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Score Name'] = 'Threshold'
	Results.PrimaryResults['Accuracy'] = Threshold
	Results.AllResults = {}
	Results.AllResults['Threshold'] = Threshold
	Results.AllResults['Number of Reversal'] = NReversal
	Results.AllResults['Number of Trials'] = NTrials
	Results.AllResults['Load List'] = stair1.ValueList
	Results.AllResults['NDown'] = stair1.NDown
	Results.AllResults['NUp'] = stair1.NUp
	return Results
}



