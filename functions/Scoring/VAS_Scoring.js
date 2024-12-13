function VAS_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	
    trialData = data.filter({trial: 'VAS'}).trials[0]
	
    
    Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Response'
	Results.PrimaryResults['Accuracy'] = trialData.response
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Response'
	Results.AllResults['Accuracy'] = trialData.response
	Results.AllResults['Response'] = trialData.response
	//Results.AllResults['Image'] = trialData.png
	//Results.AllResults['GIF'] = trialData.gif
	//Results.AllResults['GIF'] = "JASON GIF"
	Results.AllResults['Response Time (ms)'] = trialData.rt
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
}
