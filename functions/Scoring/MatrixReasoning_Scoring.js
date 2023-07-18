function MatrixReasoning_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	var trials = jsPsych.data.get().filter({task: 'test trial'});
	var NTrials = trials.count()
	var correct_trials = trials.filter({correct: 1});
	var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
	var rt = Math.round(correct_trials.select('rt').mean());
    Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Percent correct'
	Results.PrimaryResults['Accuracy'] = accuracy
	Results.AllResults = {}
	Results.AllResults['Acc'] = accuracy
	Results.AllResults['RT'] = rt
	Results.AllResults['NCorrect'] = correct_trials.count()
	Results.AllResults['NTrials'] = NTrials
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
}