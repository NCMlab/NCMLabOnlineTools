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
	Results.AllResults['Total Words'] = -99
	// The audio recording, if there is one, is NOT added again,. It already exists and the clinic_app will find it and display it
	//Results.AllResults['Words spoken'] = -99
	Results.AllResults['Fluency Words'] = temp.trials[0].HeardList
	if ( temp.trials[0].RecallType == 'Spoken' ) 
	{
		Results.AllResults['Spoken Words'] = temp.trials[0].HeardList
		Results.AllResults['Speech Processing'] = temp.trials[0].userSaid 
	}
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	return Results
}

