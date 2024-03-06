function SerialSubtraction_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(data)
	var TotalScore
	temp = data.filter({task: 'SerialSubtract'})
	const NResponses = temp.length
	console.log(temp)
	if ( parameters.ResponseType == 'Manual' )
	{
		console.log("SCORING MANUAL")
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
	}
	else 
	{
		console.log("SCORING SPOKEN")
		Results = {}
		Results.PrimaryResults = {}
		Results.PrimaryResults['ScoreName'] = "All correct?"
		Results.PrimaryResults['Accuracy'] = -99
		Results.AllResults = {}
		Results.AllResults['ScoreName'] = "All correct?"
		Results.AllResults['Accuracy'] = -99
		Results.AllResults['Spoken Words'] = temp.trials[0].HeardList
		Results.AllResults['Speech Processing'] = temp.trials[0].userSaid 
	}
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	console.log("DONE WITH RESULTS")
	return Results
}