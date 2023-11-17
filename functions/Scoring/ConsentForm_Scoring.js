function ConsentForm_Scoring(data) {
	trialData = data.filter({trial: 'Consent'}).trials[0]
	console.log(trialData.response)
	Results = {}
	Results.PrimaryResults = {}
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Consent Form'
	Results.AllResults['Accuracy'] = '1'

	console.log(trialData.response)
	const keys = Object.keys(trialData.response)
	console.log(keys[1])

	for ( var i = 0; i < keys.length; i++ )
	{	
		Results.AllResults[keys[i]] = trialData.response[keys[i]]
	}
	
	return Results
}