function DMS_Scoring(Stair) {
	var NTrials = Stair.TrialCount
	var NReversal = Stair.ReversalCount
	var Threshold = Stair.CalculateAverage()
	Results = {}
	Results.PrimaryResults['Threshold'] = Threshold
	Results.AllResults = {}
	Results.AllResults['Threshold'] = Threshold
	Results.AllResults['NReversal'] = NReversal
	Results.AllResults['NTrials'] = NTrials
	return Results
}


