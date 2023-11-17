function Questionnaire_Scoring(data) {
	console.log(data)
	Results = {}	
    

    Results.AllResults = {}
	Results.AllResults['ScoreName'] = data.title
	Results.AllResults['Accuracy'] = ''
	var TotalScore = 0
	if ( data.QuestionnaireType == 'likert' )
	{
		for ( var i = 0; i < Object.keys(data.response).length; i++ )
		{
			var prompt = data.pages[0][i].prompt
			var TextAnswer = data.pages[0][i].likert_scale_values[data.response[keys[i]]].text
			//Results.AllResults[keys[i]] = data.response[keys[i]]
			var NumericScore = data.response[keys[i]] // Numeric score
			TotalScore += NumericScore
			Results.AllResults[prompt] = TextAnswer
		}
	}
	if ( data.QuestionnaireType == 'multi-choice' )
	{
        const keys = Object.keys(data.response)
        console.log(keys)
		for ( var i = 0; i < keys.length; i++ )
		{
			var TextAnswer = data.response[keys[i]]
			//Results.AllResults[keys[i]] = data.response[keys[i]]
			//var NumericScore = data.response[keys[i]] // Numeric score
			//TotalScore += NumericScore
			Results.AllResults[keys[i]] = TextAnswer
			var Score
			for ( var j = 0; j < data.pages[0][i].options.length; j++ )
			{
				if ( data.pages[0][i].options[j] == TextAnswer ) 
				{ 
					Score = j 
					TotalScore += Score
				}
			}
		}
	}
	if ( data.QuestionnaireType == 'YesNoLikertTable' )
	{
        // Need to account for null responses
        const keys = Object.keys(data.response.P0_Q0)
        console.log(keys)
		for ( var i = 0; i < keys.length; i++ )
		{
			var TextAnswer = data.response[keys[i]]
			//Results.AllResults[keys[i]] = data.response[keys[i]]
			//var NumericScore = data.response[keys[i]] // Numeric score
			//TotalScore += NumericScore
			Results.AllResults[keys[i]] = TextAnswer
			var Score
			for ( var j = 0; j < data.pages[0][i].options.length; j++ )
			{
				if ( data.pages[0][i].options[j] == TextAnswer ) 
				{ 
					Score = j 
					TotalScore += Score
				}
			}
		}
	}


	Results.AllResults['Accuracy'] = TotalScore
	Results.AllResults['Total Score'] = TotalScore
	Results.parameters = parameters
	Results.Alert = false
	if ( data.AlertLimit !== undefined ) 
	{
		if ( TotalScore > data.AlertLimit )
		{ Results.Alert = true }
	}

    return Results
}