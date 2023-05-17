function MatrixReasoning_Scoring(data) {
	
	var trials = jsPsych.data.get().filter({task: 'test trial'});
	var NTrials = trials.count()
	var correct_trials = trials.filter({correct: 1});
	var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
	var rt = Math.round(correct_trials.select('rt').mean());
    Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Score Name'] = 'Percent correct'
	Results.PrimaryResults['Accuracy'] = accuracy
	Results.AllResults = {}
	Results.AllResults['Acc'] = accuracy
	Results.AllResults['RT'] = rt
	Results.AllResults['NCorrect'] = correct_trials.count()
	Results.AllResults['NTrials'] = NTrials
	return Results
}