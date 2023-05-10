function TrailMaking_Scoring(data) {
	// get just the sketch pad trial
	temp = data.filter({trial_type: 'sketchpad'}).trials[0]
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
	Results.AllResults['All Data'] = temp.OutData
	Results.AllResults['Image'] = temp.png
	Results.AllResults['Response Time (ms)'] = temp.rt
	return Results
}