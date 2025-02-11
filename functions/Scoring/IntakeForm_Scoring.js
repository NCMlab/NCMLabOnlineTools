function IntakeForm_Scoring(data, method) {
	console.log(data)
	trialData = data.filter({trial: 'Intake'}).trials[0]
	Results = {}	

	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = trialData.title
	Results.PrimaryResults['Accuracy'] = 1
	
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = trialData.title
	Results.AllResults['Accuracy'] = 1
	Results.AllResults['ShortTitle'] = 'Music Intake'
	console.log(trialData.response)
	const keys = Object.keys(trialData.response)
	console.log(keys[1])

	for ( var i = 0; i < keys.length; i++ )
	{	
		Results.AllResults[keys[i]] = trialData.response[keys[i]]
	}

	console.log(Results)
	Results.AllResults['Notes'] = ''
	return Results
}   