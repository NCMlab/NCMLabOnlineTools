function DigitSpan_Forward_Scoring(data, Stair) {
	
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