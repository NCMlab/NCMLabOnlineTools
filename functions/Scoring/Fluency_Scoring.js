function Fluency_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(data)
	temp = data.filter({task: 'Recall'})
	console.log(temp)
	console.log(temp.trials[temp.trials.length - 1])
	var Count  = temp.trials[temp.trials.length - 1].count
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Number of Words'
	Results.PrimaryResults['Accuracy'] = Count
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Number of Words'
	Results.AllResults['Accuracy'] = -99
	// The audio recording, if there is one, is NOT added again,. It already exists and the clinic_app will find it and display it
	Results.AllResults['Words spoken'] = -99
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
}