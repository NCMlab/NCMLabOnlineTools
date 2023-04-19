function SerialSubtraction_Scoring(data) {
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
	Results.PrimaryResults['Accuracy'] = TotalScore
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = TotalScore
	Results.AllResults['Number Of Responses'] = NResponses
	Results.AllResults['Number of Correct Responses'] = NCorrect
	Results.AllResults['Number of Incorrect Responses'] = NInc
	return Results
}