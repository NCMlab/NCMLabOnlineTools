function CubeCopy_Scoring(data) {
	trialData = data.filter({trial: 'Cube Copy'}).trials[0]
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Score'] = -99
	Results.AllResults['Image'] = trialData.png
	Results.AllResults['Response Time (ms)'] = trialData.rt
	return Results
}