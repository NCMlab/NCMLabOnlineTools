function WordRecall_Scoring(data, ResponseArrayA, ResponseArrayApostB, ResponseArrayB, IntrusionListA, IntrusionListB, WordListA, WordListB) {
	console.log(ResponseArrayA)
	console.log(WordListA)
	console.log(ResponseArrayB)
	console.log(WordListB)
	// Words recalled per block
	var WordsRecalledPerBlockA = Array(ResponseArrayA[0].length)
	console.log(WordsRecalledPerBlockA)
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
	TrialData = data.filter({task:'Recall'})

	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Total words recalled'
	Results.PrimaryResults['Accuracy'] = TotalWordsRecalled

	Results.AllResults = {}
	Results.AllResults['Accuracy'] = TotalWordsRecalled
	Results.AllResults['ScoreName'] = 'Total words recalled'
	Results.AllResults['Total Words Recalled'] = TotalWordsRecalled
	Results.AllResults['Words Recalled Per Block'] = WordsRecalledPerBlockA
	Results.AllResults['Total Words'] = TotalWords
	Results.AllResults['Response Array A'] = ResponseArrayA
	Results.AllResults['IntrusionsA'] = IntrusionListA
	Results.AllResults['WordListA'] = WordListA
	Results.AllResults['User Said'] = []
    for ( var i = 0; i < TrialData.trials.length; i++ )
	  {
			console.log(TrialData.trials[i])
		  Results.AllResults['User Said'].push(TrialData.trials[i].userSaid)  
	  }
	console.log(Results)
	return Results
}




// Total number of words recalled
// Recency effect for each block


