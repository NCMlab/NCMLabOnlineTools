	if ( data.QuestionnaireType == 'OLDmatrix' )
	{	
		
		console.log(data.response)
		const surveyName = Object.keys(data.response)
        console.log(surveyName)
		const keys = Object.keys(data.response[surveyName])
		console.log(keys)
		const responses = data.response[surveyName]
		console.log(responses)
		// cycle over responses
		for ( var i = 0; i < keys.length; i++ )
		{
			NumericScore = responses[keys[i]]
			console.log(data.Questionnaire.survey_JSON)
			console.log(data.Questionnaire.survey_JSON.elements)
			console.log(data.Questionnaire.survey_JSON.elements[0])
			console.log(data.Questionnaire.survey_JSON.elements[0].rows)
			// cycle over ALL questions
			for ( var j = 0; j < data.Questionnaire.survey_JSON.elements[0].rows.length; j++ )
			{
				if ( data.Questionnaire.survey_JSON.elements[0].rows[j].value == keys[i] )
				{
					// Find the STIMULUS/QUESTION in TEXT
					TextAnswer = data.Questionnaire.survey_JSON.elements[0].rows[j].text 
					for ( var k = 0; k < data.Questionnaire.survey_JSON.elements[0].columns.length; k++ )
					{
						if ( data.Questionnaire.survey_JSON.elements[0].columns[k].value == NumericScore )
						{
							// Find the RESPONSE TEXT
							ResponseText = data.Questionnaire.survey_JSON.elements[0].columns[k].text		
						}
					}
				}
			}
			TotalScore += NumericScore
			Results.AllResults[TextAnswer] = ResponseText
			//console.log(BREAK)
		}
	}
	if ( data.QuestionnaireType == 'OLDradiogroup' )
	{
		console.log(data)
		console.log(data.response)
		const keys = Object.keys(data.response)
		console.log(keys)
		// cycle over EACH QUESTIONS 
		for ( var i = 0; i < keys.length; i++ )
		{
			// make sure it is NOT an introduction text "question"
			if ( keys[i] != 'introduction' )
			{ 
				// get the response value
				NumericScore = data.response[keys[i]]
				console.log("Numeric Score: " + NumericScore)
				console.log(data.Questionnaire.survey_JSON.pages[0].elements[keys[i]])
				// cycle over ALL questions
				for ( var j = 0; j < data.Questionnaire.survey_JSON.pages[0].elements.length; j++ )
				{
					console.log("j: "+j)
					console.log(data.response[keys[i]])
					if ( data.Questionnaire.survey_JSON.pages[0].elements[j].name == keys[i] )
					{
						// Find the STIMULUS/QUESTION in TEXT
						TextAnswer = data.Questionnaire.survey_JSON.pages[0].elements[j].title
						console.log(TextAnswer)
						for ( var k = 0; k < data.Questionnaire.survey_JSON.pages[0].elements[j].choices.length; k++ )
						{
							console.log(data.Questionnaire.survey_JSON.pages[0].elements[j].choices[k])
							if ( data.Questionnaire.survey_JSON.pages[0].elements[j].choices[k].value == NumericScore )
							{
								// Find the RESPONSE TEXT
								ResponseText = data.Questionnaire.survey_JSON.pages[0].elements[j].choices[k].text		
								console.log("Response Text: "+ResponseText)
							}
						}
					}
				}
				TotalScore += NumericScore
				Results.AllResults[TextAnswer] = ResponseText
			}
		}

	}