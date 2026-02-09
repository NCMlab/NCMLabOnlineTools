function Questionnaire_Scoring(data) {
	// types:
	// matrix
	// radiogroup
	// likert
	// multi-choice
	//
	AllTrials = data
	
	data = data.trials[0]
	Notes = AllTrials.filter({trial: 'Notes'})
	Results = {}	
    Results.AllResults = {}
	Results.AllResults['ScoreName'] = data.shortTitle
	Results.AllResults['ShortTitle'] = '-99'
	if ( data.ShortTitle !== 'undefined' ){
		Results.AllResults['ShortTitle'] = data.shortTitle
	}		
	Results.AllResults['Accuracy'] = ''
	// This new object is used for extracting data for making spreadsheets
	Results.NumericResults = {}
	var TotalScore = 0
	var TextAnswer
	var NumericScore
	var prompt
	var resp
	if ( data.QuestionnaireType == 'matrix' )
	{	
		const rowIndices = Object.keys(data.response)
		var NRows = rowIndices.length
		// cycle over responses
		var QuestionsAnswered = 0
		
		for ( var i = 0; i < NRows; i++ )
		{
			// Need to add functionaility for missed questions.
			// Take sum, divide by questions answered and multiply by total questions
			// Save 
			// 	Questions on test
			//	Questions answered
			//  Sum of questions answered
			//  Average of questions answered times questions on test
			NumericScore = data.response[i].responseValue			
			if ( NumericScore > -99 )
			{
				TotalScore += NumericScore
				QuestionsAnswered = QuestionsAnswered + 1
			}
			Results.AllResults[data.response[i].label] = data.response[i].responsePrompt
			// The following version of data will be used for extracting data
			// Add the question name/id and its numeric score
			Results.NumericResults[data.response[i].name] = data.response[i].responseValue
		}
		// Add the total score, Need to also add the specialty scores
		var totalScoreName = data.Questionnaire.survey_JSON.elements[0].name + "_total"
		var avgScoreName = data.Questionnaire.survey_JSON.elements[0].name + "_avg"
		Results.NumericResults[totalScoreName] = TotalScore
		Results.AllResults['Questions Answered'] = QuestionsAnswered
		Results.AllResults['Number of Questions'] = NRows
		Results.AllResults['Average Score'] = TotalScore/QuestionsAnswered*NRows
		Results.NumericResults[avgScoreName] = TotalScore/QuestionsAnswered*NRows
	}

	if ( data.QuestionnaireType == 'form' )
	{	

		const rowIndices = Object.keys(data.response)
        console.log(rowIndices)
		var NRows = rowIndices.length
		console.log(data)
		//console.log(BREAK)
		// cycle over responses
		var QuestionsAnswered = 0
		for ( var i = 0; i < NRows; i++ )
		{
			NumericScore = data.response[i].responseValue			
			if ( NumericScore > -99 )
			{
				TotalScore += NumericScore
				QuestionsAnswered = QuestionsAnswered + 1
			}
			Results.AllResults[data.response[i].label] = data.response[i].responseText
			Results.NumericResults[data.response[i].name] = data.response[i].responseValue
		}
		var totalScoreName = data.Questionnaire.survey_JSON.name + "_total"
		var avgScoreName = data.Questionnaire.survey_JSON.name + "_avg"
		Results.NumericResults[totalScoreName] = TotalScore
		Results.AllResults['Questions Answered'] = QuestionsAnswered
		Results.AllResults['Number of Questions'] = NRows
		Results.AllResults['Average Score'] = TotalScore/QuestionsAnswered*NRows
		Results.NumericResults[avgScoreName] = TotalScore/QuestionsAnswered*NRows

	}
	if ( data.QuestionnaireType == 'radiogroup' )
	{	
		console.log(data)
		const rowIndices = Object.keys(data.response)
        console.log(rowIndices)
		var NRows = rowIndices.length
		console.log(data)
		//console.log(BREAK)
		// cycle over responses
		var QuestionsAnswered = 0
		for ( var i = 0; i < NRows; i++ )
		{
			NumericScore = data.response[i].responseValue			
			if ( NumericScore > -99 )
			{
				TotalScore += NumericScore
				QuestionsAnswered = QuestionsAnswered + 1
			}
			var totalScoreName = data.Questionnaire.survey_JSON.name + "_total"
			var avgScoreName = data.Questionnaire.survey_JSON.name + "_avg"
			Results.NumericResults[totalScoreName] = TotalScore
			Results.AllResults['Questions Answered'] = QuestionsAnswered
			Results.AllResults['Number of Questions'] = NRows
			Results.AllResults['Average Score'] = TotalScore/QuestionsAnswered*NRows
			Results.NumericResults[avgScoreName] = TotalScore/QuestionsAnswered*NRows
			
			Results.AllResults[data.response[i].label] = data.response[i].responseText
			Results.NumericResults[data.response[i].name] = data.response[i].responseValue
		}
	}	
	
	
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
	if ( data.QuestionnaireType == 'likert' )
	{
		const keys = Object.keys(data.response)
        console.log(keys)
		console.log(data)
		//console.log(BreakPoint)
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

	if ( data.QuestionnaireType == 'Varied' )
	{
		// This assumes there is not total score, so a score of one indicates that it was completed
		TotalScore = 1
		console.log(Results)

		// cycle over pages
		for ( var i = 0; i < data.Questionnaire.survey_JSON.pages.length; i++ )
		{
			console.log("Page: "+i)
			// cycle over elements on a page
			for (var j = 0; j < data.Questionnaire.survey_JSON.pages[i].elements.length; j++ )
				{
					if ( data.Questionnaire.survey_JSON.pages[i].elements[j].type != 'html' )
					{
						console.log(data.Questionnaire.survey_JSON.pages[i].elements[j].title)
						// Question text
						TextAnswer = data.Questionnaire.survey_JSON.pages[i].elements[j].title
						console.log(TextAnswer)
						// Question Name 
						QuestionName = data.Questionnaire.survey_JSON.pages[i].elements[j].name
						console.log(QuestionName)
						// Response in text form
						console.log(data.response)
						ResponseText = data.response[QuestionName]
						
						console.log(ResponseText)
						if ( ResponseText == null )
						{
							ResponseText = 'null'
						}
						Results.AllResults[TextAnswer] = ResponseText
						// add the data in numeric format
						var NumQuestionFormatName = data.shortTitle.replaceAll(" ","") + "_" + QuestionName
						Results.NumericResults[NumQuestionFormatName] = ResponseText
					}
				}
		}
	}
	/*if ( data.QuestionnaireType == 'FirstName' )
	{ // Put this info into the Batch Data 
		console.log(data)
		console.log(data.response)
		
		const FirstName = data.response.Name
		TotalScore = FirstName	
		//Results.NumericResults['FirstName'] = TotalScore
		const Email = data.response.email
		console.log(Email)
		if ( Email != null ) {
			jatos.batchSession.set(jatos.workerId+"_Email", Email)
			.then(() => jatos.batchSession.set(jatos.workerId+"_FirstName", FirstName)) 	
			.then(() => console.log("Name set in batch data"))
			.catch(() => console.log("Batch Session synchronization failed")); 
		}
		else {
			jatos.batchSession.set(jatos.workerId+"_FirstName", FirstName)
			.then(() => console.log("Name set in batch data"))
			.catch(() => console.log("Batch Session synchronization failed"))
		}
	}*/

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
	console.log(Results)
    return Results
}