function IntakeForm_Scoring(data, method) {
	console.log(data)
	
	trialData = data.filter({trial: 'Questionnaire'}).trials[0]
	console.log(trialData)
	console.log(trialData.response.Age)
	var keys = Object.keys(trialData.response)
	var InclusionFlag = true
	if ( method == "screening") 
	{
		// check all answers
		if (( trialData.response.Age < 18 ) || 	(( trialData.response.Age > 30 ) && ( trialData.response.Age < 60 )))
		{
			InclusionFlag = false
		}
				
		for ( var i = 0; i < trialData.accuracy.length; i++ )
		{
			var fieldName = Object.keys(trialData.accuracy[i])
			if ( ! trialData.accuracy[i][fieldName] )
			{ InclusionFlag = false }
		}
	
		if ( ! InclusionFlag ) 
		{ alert(" I am sorry to say that you are not eligible for this study.")}
	}
	Results = {}
	Results.PrimaryResults = {}

	
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = trialData.title
	Results.AllResults['Accuracy'] = ''
	for ( var i = 0; i < Object.keys(trialData.response).length; i++ )
		{
			Results.AllResults[keys[i]] = trialData.response[keys[i]]
		}

	Results.AllResults['Computer Information'] = trialData.ComputerInfo.appVersion
	Results.AllResults['Current Language'] = trialData.ComputerInfo.CurrentLanguage
	Results.AllResults['Available Language'] = trialData.ComputerInfo.AvailableLanguage
	console.log(Results)



	return Results
}