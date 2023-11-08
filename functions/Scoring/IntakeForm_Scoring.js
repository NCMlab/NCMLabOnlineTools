function IntakeForm_Scoring(data, method) {
	console.log(data)
	Results = {}	
	Results.Eligible = true
	trialData = data.filter({trial: 'Questionnaire'}).trials[0]

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
		{ 
			Results.Eligible = false
		}
	}

	
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = trialData.title
	Results.AllResults['Accuracy'] = ''
	var TotalScore = 0
	if ( trialData.QuestionnaireType == 'likert' )
	{
		for ( var i = 0; i < Object.keys(trialData.response).length; i++ )
		{
			var prompt = trialData.pages[0][i].prompt
			var TextAnswer = trialData.pages[0][i].likert_scale_values[trialData.response[keys[i]]].text
			//Results.AllResults[keys[i]] = trialData.response[keys[i]]
			var NumericScore = trialData.response[keys[i]] // Numeric score
			TotalScore += NumericScore
			Results.AllResults[prompt] = TextAnswer
		}
	}
	if ( trialData.QuestionnaireType == 'multi-choice' )
	{
		for ( var i = 0; i < Object.keys(trialData.response).length; i++ )
		{
			
			var TextAnswer = trialData.response[keys[i]]
			//Results.AllResults[keys[i]] = trialData.response[keys[i]]
			//var NumericScore = trialData.response[keys[i]] // Numeric score
			//TotalScore += NumericScore
			Results.AllResults[keys[i]] = TextAnswer
			var Score
			for ( var j = 0; j < trialData.pages[0][i].options.length; j++ )
			{
				if ( trialData.pages[0][i].options[j] == TextAnswer ) 
				{ 
					Score = j 
					TotalScore += Score
				}
				
			}
		}
	}
	Results.AllResults['Accuracy'] = TotalScore
	Results.AllResults['Total Score'] = TotalScore
	Results.Alert = false
	if ( trialData.AlertLimit !== undefined ) 
	{
		if ( TotalScore > trialData.AlertLimit )
		{ 
			Results.Alert = true	
		}
	}
	if ( method == "screening") 
	{
		Results.AllResults['Computer Information'] = trialData.ComputerInfo.appVersion
		Results.AllResults['Current Language'] = trialData.ComputerInfo.CurrentLanguage
		Results.AllResults['Available Language'] = trialData.ComputerInfo.AvailableLanguage
	}
	console.log(Results)



	return Results
}