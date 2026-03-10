function Questionnaire_Scoring(data) {
	// types:
	// matrix
	// radiogroup
	// likert
	// multi-choice
	//
	AllTrials = data
	
	//data = data.trials[0]

	console.log(data)
	//console.log(BREAK)
	try {
		Notes = AllTrials.filter({trial: 'Notes'})
	}
	catch (error) {
		Notes = ''
	}
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

	// SPECIALTY SCORING
	console.log(data.shortTitle)
	switch ( data.shortTitle ) {
      	case 'FirstName':
        // This is here to have a language independent location to store the first name of a participant
        {
          Results.AllResults['FirstName'] = data.response['Name']
        }
		case 'CESAM':
        {
          Results.AllResults['Nutrition'] = data.response['cesam001']
          Results.AllResults['Multimorbidity'] = data.response['cesam002']
          Results.AllResults['Communication'] = data.response['cesam003'] + data.response['cesam004']
          Results.AllResults['Cognition'] = data.response['cesam005']
		// ADL 
		// Questions 7 through 11 are coded as 1 for NO and 0 for YES
		  var sumADL =  data.response['cesam007'] + 
                        data.response['cesam008'] + 
                        data.response['cesam009'] +
                        data.response['cesam010'] +
                        data.response['cesam011']
			if ( sumADL >= 4 ) { Results.AllResults['ADL'] = 0 }
		  	else if ( sumADL == 2 || sumADL == 3 ) { Results.AllResults['ADL'] = 1 }
		  	else if ( sumADL <= 1 ) { Results.AllResults['ADL'] = 2 }
		// IADL 
		// Questions 12 through 15 are coded as 1 for NO and 0 for YES
		  var sumIADL = data.response['cesam012'] + 
          				data.response['cesam013'] + 
          				data.response['cesam014'] +
          				data.response['cesam015'] 
		  if ( sumIADL == 4 ) { Results.AllResults['IADL'] = 0 }
		  else if ( sumIADL == 3 ) { Results.AllResults['IADL'] = 1 }
		  else if ( sumIADL <= 2 ) { Results.AllResults['IADL'] = 2 }

  		 Results.AllResults['Continence'] = data.trials[0].response['cesam016']

		 if ( ( data.trials[0].response['cesam017'] == 2 ) && ( data.trials[0].response['cesam018'] == 1 ) ) {
            Results.AllResults['Mood'] = 0
          }
          if ( ( data.trials[0].response['cesam017'] == 0 ) && ( data.trials[0].response['cesam018'] == 1 ) ) {
            Results.AllResults['Mood'] = 1
          }
          if ( ( data.trials[0].response['cesam017'] == 1 ) || ( data.trials[0].response['cesam018'] == 0 ) ) {
            Results.AllResults['Mood'] = 2
          }
          // Mobility
          if ( ( data.trials[0].response['cesam019'] == 1 ) && ( data.trials[0].response['cesam020'] == 0 ) ) {
            Results.AllResults['Mobility'] = 0
          }
          if ( ( data.trials[0].response['cesam019'] == 0 ) && ( data.trials[0].response['cesam020'] == 0 ) ) {
            Results.AllResults['Mobility'] = 1
          }
          if ( data.trials[0].response['cesam020'] == 1 )  {
            Results.AllResults['Mobility'] = 2
          }
          Results.AllResults['Total Score'] = Results.AllResults['Nutrition'] + 
                                              Results.AllResults['Multimorbidity'] + 
                                              Results.AllResults['Communication'] + 
                                              Results.AllResults['Cognition'] + 
                                              Results.AllResults['ADL'] + 
                                              Results.AllResults['IADL'] + 
                                              Results.AllResults['Continence'] + 
                                              Results.AllResults['Mood'] + 
                                              Results.AllResults['Mobility']
          Results.AllResults['Accuracy'] = Results.AllResults['Total Score']                                
		  Results.NumericResults['Nutrition'] = Results.AllResults['Nutrition']
		  Results.NumericResults['Multimorbidity'] = Results.AllResults['Multimorbidity']
		  Results.NumericResults['Communication'] = Results.AllResults['Communication']
		  Results.NumericResults['Cognition'] = Results.AllResults['Cognition']
		  Results.NumericResults['ADL'] = Results.AllResults['ADL']
		  Results.NumericResults['IADL'] = Results.AllResults['IADL']
		  Results.NumericResults['Continence'] = Results.AllResults['Continence']
		  Results.NumericResults['Mood'] = Results.AllResults['Mood']
		  Results.NumericResults['Mobility'] = Results.AllResults['Mobility']
          break;
        }
		
		case 'GDS':
          {
            var TotalScore = 0
            // The following can be done with a loop, but the explicit nature of the following makes it very 
            // easy to see what is being done.
            if ( data.response.find(o => o.name === 'gds01').responseValue == 0 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds02').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds03').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds04').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds05').responseValue == 0 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds06').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds07').responseValue == 0 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds08').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds09').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds10').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds11').responseValue == 0 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds12').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds13').responseValue == 0 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds14').responseValue == 1 ){ TotalScore++ }
            if ( data.response.find(o => o.name === 'gds15').responseValue == 1 ){ TotalScore++ }
            Results.AllResults['Total Score'] = TotalScore
            Results.AllResults['Accuracy'] = TotalScore
            // Make adjustments for unanswered questions
            var AvgScore = Results.AllResults['Total Score']/Results.AllResults['Questions Answered']*Results.AllResults['Number of Questions']
			Results.AllResults['Average Score'] = AvgScore
            var totalScoreName = data.name + "_total"
		        var avgScoreName = data.name + "_avg"
		        
            Results.NumericResults[totalScoreName] = TotalScore
            Results.NumericResults[avgScoreName] = AvgScore

            break;
          }
		case 'PANAS, weekly':
            {
				var Npos = 0
				var Nneg = 0
				Results.AllResults['Positive'] = 0
              	if ( data.response.find(o => o.name === 'panas03').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas03').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas05').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas05').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas07').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas07').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas08').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas08').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas10').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas10').responseValue 
					Npos++
				}
				Results.AllResults['Positive Average'] = Results.AllResults['Positive']/Npos*5
				Results.NumericResults['panas_pos_sum'] = Results.AllResults['Positive']
				Results.NumericResults['panas_Npos'] = Npos
				Results.NumericResults['panas_pos_avg'] = Results.AllResults['Positive']/Npos*5
				
				Results.AllResults['Negative'] = 0
              	if ( data.response.find(o => o.name === 'panas01').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas01').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas02').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas02').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas04').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas04').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas06').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas06').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas09').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas09').responseValue 
					Npos++
				}
				Results.AllResults['Negative Average'] = Results.AllResults['Negative']/Npos*5
				Results.NumericResults['panas_neg_sum'] = Results.AllResults['Negative']
				Results.NumericResults['panas_Nneg'] = Npos
				Results.NumericResults['panas_neg_avg'] = Results.AllResults['Negative']/Npos*5
              break;                                              
            }
		case 'PANAS, baseline':
          {
            	var Npos = 0
				var Nneg = 0
				Results.AllResults['Positive'] = 0
              	if ( data.response.find(o => o.name === 'panas03').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas03').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas05').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas05').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas07').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas07').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas08').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas08').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas10').responseValue != -99 )
			  	{ 
					Results.AllResults['Positive'] += data.response.find(o => o.name === 'panas10').responseValue 
					Npos++
				}
				Results.AllResults['Positive Average'] = Results.AllResults['Positive']/Npos*5
				Results.NumericResults['panas_pos_sum'] = Results.AllResults['Positive']
				Results.NumericResults['panas_Npos'] = Npos
				Results.NumericResults['panas_pos_avg'] = Results.AllResults['Positive']/Npos*5
				
				Results.AllResults['Negative'] = 0
              	if ( data.response.find(o => o.name === 'panas01').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas01').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas02').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas02').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas04').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas04').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas06').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas06').responseValue 
					Npos++
				}
				if ( data.response.find(o => o.name === 'panas09').responseValue != -99 )
			  	{ 
					Results.AllResults['Negative'] += data.response.find(o => o.name === 'panas09').responseValue 
					Npos++
				}
				Results.AllResults['Negative Average'] = Results.AllResults['Negative']/Npos*5
				Results.NumericResults['panas_neg_sum'] = Results.AllResults['Negative']
				Results.NumericResults['panas_Nneg'] = Npos
				Results.NumericResults['panas_neg_avg'] = Results.AllResults['Negative']/Npos*5
				break                                           
          }
    }



	Results.AllResults['Accuracy'] = TotalScore
	Results.AllResults['Total Score'] = TotalScore
	// If the data is sent from a CSV to JSON procedure there are no NOTES
	try {
		if ( Notes.trials.length > 0 )
			{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
		else { Results.AllResults['Notes'] = '' }
	}
	catch (error)
	{ Results.AllResults['Notes'] = '' }
	// If the data is sent from a CSV to JSON procedure there are no parameters
	try { Results.parameters = parameters }
	catch (error) { Results.parameters = '' }
	Results.Alert = false
	if ( data.AlertLimit !== undefined ) 
	{
		if ( TotalScore > data.AlertLimit )
		{ Results.Alert = true }
	}
    return Results
}