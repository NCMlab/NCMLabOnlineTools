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
		const NCorrect = temp.trials[0].response.ListRecall.length


		Results = {}
		Results.PrimaryResults = {}
		Results.PrimaryResults['ScoreName'] = "All correct?"
		Results.PrimaryResults['Accuracy'] = NCorrect
		Results.AllResults = {}
		Results.AllResults['ScoreName'] = "All correct?"
		Results.AllResults['Accuracy'] = NCorrect	
		Results.AllResults['Number of Correct Responses'] = NCorrect
		Results.AllResults['Expected Responses'] = temp.trials[0].ExpectedResponse
		Results.AllResults['Actual Responses'] = temp.trials[0].response.ListRecall
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
		Results.AllResults['Expected Responses'] = temp.trials[0].ExpectedResponse
	}
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	console.log(Results)
	console.log("DONE WITH RESULTS")
	return Results
}