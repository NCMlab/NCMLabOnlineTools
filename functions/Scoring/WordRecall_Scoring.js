function WordRecall_Scoring(data, WordListA, WordListB) {
	Notes = data.filter({trial: 'Notes'})
	console.log(data)
	console.log(WordListA)
	console.log(WordListB)
	// Get the recall blocks
	temp = data.filter({task: 'Recall'})
	console.log(temp)
	console.log(temp.trials)
	console.log(temp.trials[0].type)
	// How many trials per block
	var NWordsA = WordListA.length
	var NWordsB = WordListB.length
	// What is the order of the recall block types
	BlockOrder = []
	var Acount = 0
	var Bcount = 0
	for ( var i = 0; i < temp.trials.length; i++ )
	{
		BlockOrder.push(temp.trials[i].type)
		if ( temp.trials[i].type == 'A' ) {Acount++}
		if ( temp.trials[i].type == 'B' ) {Bcount++}
	}
	console.log("A Count = " + Acount)
	console.log(BlockOrder)
	// Make Response Array For A
	var ResponseArrayA = [] // = CreateResponseArray(NWordsA, Acount + Bcount)
	var ResponseArrayB = [] // = CreateResponseArray(NWordsB, Bcount)
	var IntrusionArrayA = []
	var IntrusionArrayB = []
	var userSaidA = []
	var userSaidB = []
	for ( var i = 0; i < Acount + Bcount; i++ )
	{
		if ( temp.trials[i].type == 'A' ) 
			{ 
				ResponseArrayA.push(temp.trials[i].RecallBlock) 
				IntrusionArrayA.push(temp.trials[i].IntrusionList)
				userSaidA.push(temp.trials[i].userSaid)
			}

		else { 
			ResponseArrayA.push(Array(NWordsA).fill(0)) 
			IntrusionArrayA.push([])
			ResponseArrayB.push(temp.trials[i].RecallBlock) 
			IntrusionArrayB.push(temp.trials[i].IntrusionList)
			userSaidA.push([])
			userSaidB.push(temp.trials[i].userSaid)
		}
	}
	console.log(ResponseArrayA)
	console.log(ResponseArrayB)
	
// Make a function that will take Response Array A and B and perform calculations on them
// Having this as a function after they are created makes it easier for later updating of scores	
	
	console.log(ResponseArrayA)
	// Find the first recall columns
	var FoundBListFlag = false
	var TotalWords = 0 
	var TotalRecallCount = 0 
	var PostBRecall = 0
	var BlockRecallCount = []
	for ( var i = 0; i < ResponseArrayA.length; i++ )
	{
		console.log(ResponseArrayA[i])
		if ( SumArray(ResponseArrayA[i]) == 0 )
		{	
			console.log('EMPTY COLUMN: ' + ResponseArrayA[i].length)
			FoundBListFlag = true
		}

		else {
			console.log(ResponseArrayA[i].length)
			if ( ! FoundBListFlag ) 
			{
				TotalWords += ResponseArrayA[i].length
				TotalRecallCount += + ResponseArrayA[i].filter(i => i > -1).length
				BlockRecallCount.push(ResponseArrayA[i].filter(i => i > -1).length)
			}
			else { PostBRecall += ResponseArrayA[i].filter(i => i > -1).length }
			console.log("Non Zero Values: " +ResponseArrayA[i].filter(i => i > -1).length)}
		
	}
	console.log(BlockRecallCount)
	console.log(TotalRecallCount)
	
	// transpose ResponseArrayA
	var tResponseArrayA = create2DArray(NWordsA,ResponseArrayA.length)
	for ( var i = 0; i < NWordsA; i++ )
	{
		for ( var j = 0; j < ResponseArrayA.length; j++ )
		{
			tResponseArrayA[i][j] = ResponseArrayA[j][i]
		}
	}
	
	var tResponseArrayB = create2DArray(NWordsB,ResponseArrayB.length)
	for ( var i = 0; i < NWordsB; i++ )
	{
		for ( var j = 0; j < ResponseArrayB.length; j++ )
		{
			tResponseArrayB[i][j] = ResponseArrayB[j][i]
		}
	}
	ResponseArrayA = tResponseArrayA
	ResponseArrayB = tResponseArrayB
	

/* 

	// Words recalled per block
	for (var i = 0; i < ResponseArrayA[0].length; i++)
	{
		currentCol = GetColumn(ResponseArrayA, i)	
		var count = 0;
		for(var j = 0; j < currentCol.length; ++j){
			if(currentCol[j] != -99)
				count++;
		}
		WordsRecalledPerBlockA[i] = count
		TotalWordsRecalled = WordsRecalledPerBlockA.reduce((a, b) => a + b, 0)
		TotalWords = ResponseArrayA.length*ResponseArrayA[0].length
	}
	// Extract the user said information for each block
	// Filter data
	 */

	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Total words recalled'
	Results.PrimaryResults['Accuracy'] = TotalRecallCount

	Results.AllResults = {}
	Results.AllResults['Accuracy'] = TotalRecallCount
	Results.AllResults['ScoreName'] = 'Total words recalled'
	Results.AllResults['Total Words Recalled'] = TotalRecallCount
	Results.AllResults['Words Recalled Per Block'] = BlockRecallCount
	Results.AllResults['Words Recalled After B'] = PostBRecall
	Results.AllResults['Total Words'] = TotalWords
	Results.AllResults['Response Array A'] = ResponseArrayA
	Results.AllResults['Block Order'] = BlockOrder
	if ( parameters.DelayedRecallFlag )
	{ Results.AllResults['Recall Type'] = 'Delayed' }
	else { Results.AllResults['Recall Type'] = 'Immediate' }
	
	// Only add response array B if there actually was one
	if ( ResponseArrayB.length > 0 )
	{
		Results.AllResults['Response Array B'] = ResponseArrayB
		Results.AllResults['Intrusions B'] = IntrusionArrayB
		Results.AllResults['WordListB'] = WordListB
		Results.AllResults['User Said B'] = userSaidB
	}
	//Results.AllResults['Response Array A, post B'] = ResponseArrayApostB
	Results.AllResults['Intrusions A'] = IntrusionArrayA
	
	//Results.AllResults['IntrusionsB'] = IntrusionListB
	//Results.AllResults['IntrusionsApostB'] = IntrusionListApostB
	Results.AllResults['WordListA'] = WordListA
	
	Results.AllResults['User Said A'] = userSaidA
	
	/*Results.AllResults['User Said'] = []
    for ( var i = 0; i < TrialData.trials.length; i++ )
	  {
			console.log(TrialData.trials[i])
		  Results.AllResults['User Said'].push(TrialData.trials[i].userSaid)  
	  }
	  */
	
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	return Results
}




// Total number of words recalled
// Recency effect for each block


