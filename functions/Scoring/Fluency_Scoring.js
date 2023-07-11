function Fluency_Scoring(data) {
	console.log(data)
	temp = data.filter({task: 'Recall'})
	console.log(temp)
	console.log(temp.trials[temp.trials.length - 1])
	var Count  = temp.trials[temp.trials.length - 1].count
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Number of Words'
	Results.PrimaryResults['Accuracy'] = Count
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Number of Words'
	Results.AllResults['Accuracy'] = Count
	Results.AllResults['Words spoken'] = Count
	return Results
}