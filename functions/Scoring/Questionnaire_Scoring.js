function Questionnaire_Scoring(data) {
	
	AllTrials = data
	data = data.trials[0]
	console.log(data)
	Notes = AllTrials.filter({trial: 'Notes'})
	Results = {}	
    

    Results.AllResults = {}
	Results.AllResults['ScoreName'] = data.title
	Results.AllResults['Accuracy'] = ''
	var TotalScore = 0
	var TextAnswer
	var NumericScore
	var prompt
	var resp
	if ( data.QuestionnaireType == 'likert' )
	{
		const keys = Object.keys(data.response)
        console.log(keys)
		for ( var i = 0; i < keys.length; i++ )
		{
			prompt = data.pages[0][i].prompt
			resp = data.response[keys[i]]
			console.log("Prompt: "+prompt)
			console.log("Resp: "+resp)
			console.log(resp === null)
			// Check to see if the person answers
			if ( resp === null )
			{ NumericScore = 0; TextAnswer = ''}
			else
			{
				console.log("FOUND ACTUAL RESPONSE")
				console.log(data.response[keys[i]])
				console.log(data.pages[0][i])
				TextAnswer = data.pages[0][i].likert_scale_values[data.response[keys[i]]-1].text
				//Results.AllResults[keys[i]] = data.response[keys[i]]
				NumericScore = data.response[keys[i]] // Numeric score
			}
			TotalScore += NumericScore
			Results.AllResults[prompt] = TextAnswer
		}
	}
	if ( data.QuestionnaireType == 'multi-choice' )
	{
		const keys = Object.keys(data.response)
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
		console.log("P0Q0 ARRAY: "+Object.is(data.response.P0_Q0,null))
		
        
		if ( ! Object.is(data.response.P0_Q0,null)) 
		{
			const keys = Object.keys(data.response.P0_Q0)
			for ( var i = 0; i < keys.length; i++ )
			{
				// What the response was
				currentResponse = data.response.P0_Q0[keys[i]]
				// what question is this key?
				currentQ = Number(keys[i].substr(keys[i].length-3,3)-1)
				correctResponse = data.pages[0][0].accuracy[currentQ]
				if ( currentResponse != correctResponse ) 
				{ TotalScore += 1 }
				try {
					Results.AllResults[data.pages[0][0].statements[currentQ].prompt] = data.pages[0][0].options[currentResponse]		
				}
				catch (error) {
					console.error(error);
				  }
			}
		}
	}
	Results.AllResults['Accuracy'] = TotalScore
	Results.AllResults['Total Score'] = TotalScore
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	Results.Alert = false
	if ( data.AlertLimit !== undefined ) 
	{
		if ( TotalScore > data.AlertLimit )
		{ Results.Alert = true }
	}
    return Results
}