function ClockDrawing_Scoring(data) {
	trialData = data.filter({trial: 'Clock Drawing'}).trials[0]
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99
	Results.AllResults['Image'] = trialData.png
	Results.AllResults['Response Time (ms)'] = trialData.rt
	return Results
}