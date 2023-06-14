function OLDTrailMaking_Scoring(data) {
	// get just the sketch pad trial

	temp = data.filter({trial: 'Trail Making'}).trials[0]
	console.log(temp)
	console.log(temp.ErrorCount)
	var AllCorrect
	if ( temp.ErrorCount == 0 ) {
		AllCorrect = 1	
	} else { AllCorrect = 0 }
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Accuracy'] = AllCorrect
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = AllCorrect
	Results.AllResults['Number of Errors'] = temp.ErrorCount 
	Results.AllResults['Image'] = temp.png
	Results.AllResults['Response Time (ms)'] = temp.rt
	return Results
}

function TrailMaking_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Trail Making'}).trials[0]
	console.log(trialData)
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = trialData.ErrorCount 
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Number of Errors'
	Results.AllResults['Accuracy'] = trialData.ErrorCount 
	Results.AllResults['Manual Score'] = -99
	Results.AllResults['Number of Errors'] = trialData.ErrorCount 
	Results.AllResults['Image'] = trialData.png
	Results.AllResults['Response Time (ms)'] = trialData.rt
	Results.AllResults['Notes'] = Notes.trials[0].response.Notes
	Results.AllResults['Scoring Notes'] = TrailMaking_Instructions.NotesForResultsPage
	return Results
}