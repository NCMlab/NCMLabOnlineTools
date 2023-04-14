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
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Score'] = -99
	Results.AllResults = {}
	Results.AllResults['Score'] = -99
	return Results
}