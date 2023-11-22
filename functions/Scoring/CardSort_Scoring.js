function CardSort_Scoring(data) {
	var trials = jsPsych.data.get().filter({trial: 'Test'});
	
	var NTrials = trials.count()


	var correct_trials = trials.trials[0].accuracy;
	var pe_trials = trials.trials[0].perseverative_error
	var rt_trials = trials.trials[0].rt;
	var sumCorrect = correct_trials.reduce((a, b) => a + b, 0);
	var sumPErrors = pe_trials.reduce((a, b) => a + b, 0);
	const avg = Math.round(100*(sum / correct_trials.length) || 0);
	
	
	var accuracy = avg;
	var sum = rt_trials.reduce((a, b) => a + b, 0);
	const AvgRT = Math.round((sum / rt_trials.length) || 0);
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = accuracy

	Results.AllResults = {}
	Results.AllResults['Acc'] = accuracy
	Results.AllResults['Total Correct'] = sumCorrect
	Results.AllResults['Total Errors'] = NTrials - sumCorrect
	Results.AllResults['Number Perseverative Errors'] = sumPErrors
	Results.AllResults['RT'] = AvgRT
	Results.AllResults['NTrials'] = NTrials
	Results.AllResults['RuleList'] = trials.trials[0].current_rule
	Results.AllResults['CorrectList'] = trials.trials[0].correct
	Results.AllResults['ResponseList'] = trials.trials[0].response
	Results.AllResults['RTList'] = trials.trials[0].rt
	Results.AllResults['AccuracyList'] = trials.trials[0].accuracy

	return Results
}