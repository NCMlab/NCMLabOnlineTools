function SerialSubtraction_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(data)
	var TotalScore
	temp = data.filter({trial: 'task'})
	const NResponses = temp.length
	console.log(temp)
	const NCorrect = temp.filter({correct: 1}).count()
	const NInc = temp.filter({correct: 0}).count()
	if ( NInc > 0 ) {TotalScore = 0} else {TotalScore = 1}
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = "All correct?"
	Results.PrimaryResults['Accuracy'] = TotalScore
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = "All correct?"
	Results.AllResults['Accuracy'] = TotalScore
	Results.AllResults['Number Of Responses'] = NResponses
	Results.AllResults['Number of Correct Responses'] = NCorrect
	Results.AllResults['Number of Incorrect Responses'] = NInc
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
}