function CardSort_Scoring(data) {
	
	var trials = jsPsych.data.get().filter({task: 'test trial'});
	var NTrials = trials.count()
	var correct_trials = trials.filter({correct: true});
	var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
	var rt = Math.round(correct_trials.select('rt').mean());

	data.PrimaryResults = {}
	data.PrimaryResults['Acc'] = accuracy
	data.AllResults = {}
	data.AllResults['Acc'] = accuracy
	data.AllResults['RT'] = rt
	data.AllResults['NCorrect'] = correct_trials.count()
	data.AllResults['NTrials'] = NTrials
	return data
}