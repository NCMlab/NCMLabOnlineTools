function CardSort_Scoring(data) {
	var trials = jsPsych.data.get().filter({trial: 'Test'});
	Notes = data.filter({trial: 'Notes'})
	


	var correct_trials = trials.trials[0].accuracy;
	var pe_trials = trials.trials[0].perseverative_error
	var rt_trials = trials.trials[0].rt;
	var sumCorrect = correct_trials.reduce((a, b) => a + b, 0);
	var sumPErrors = pe_trials.reduce((a, b) => a + b, 0);
	const avg = Math.round(100*(sumCorrect / correct_trials.length) || 0);
	var NTrials = correct_trials.length
	
	var accuracy = avg;
	var sum = rt_trials.reduce((a, b) => a + b, 0);
	const AvgRT = Math.round((sum / rt_trials.length) || 0);
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = accuracy

	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Total Correct'
	Results.AllResults['Accuracy'] = sumCorrect
	Results.AllResults['Trials Administered'] = NTrials
	Results.AllResults['Total Correct'] = sumCorrect
	Results.AllResults['Total Errors'] = NTrials - sumCorrect
	Results.AllResults['Percent Errors'] = Math.round(100*(NTrials - sumCorrect)/NTrials)
	Results.AllResults['Number Perseverative Errors'] = sumPErrors
	Results.AllResults['Percent Perseverative Errors'] = Math.round(100*(sumPErrors/NTrials))
	Results.AllResults['Nonperseverative Errors'] = NTrials - sumCorrect - sumPErrors
	Results.AllResults['Percent Nonperseverative Errors'] = Math.round(100*((NTrials - sumCorrect - sumPErrors)/NTrials))
	Results.AllResults['Conceptial Level Responses'] = sumCorrect
	Results.AllResults['Percent Conceptual Level Responses'] = Math.round(100*(sumCorrect/NTrials))
	Results.AllResults['Average Response Time'] = AvgRT

	/*Results.AllResults['Current Rule'] = trials.trials[0].current_rule
	Results.AllResults['CorrectList'] = trials.trials[0].correct
	Results.AllResults['Response Pile'] = trials.trials[0].response
	Results.AllResults['RTList'] = trials.trials[0].rt
	Results.AllResults['AccuracyList'] = trials.trials[0].accuracy
	Results.AllResults['Previous Rule'] = trials.trials[0].PreviousRule
	Results.AllResults['CardNumber'] = trials.trials[0].CardNumber
	Results.AllResults['correctInRow'] = trials.trials[0].correctInRow
	Results.AllResults['perseverative_error'] = trials.trials[0].perseverative_error
	Results.AllResults['current_rule'] = trials.trials[0].current_rule
	*/
	console.log(Results)
	var ResultsTable = [[]]
	var ColNames = ['Current Rule','Correct Sequence','Trial Number','Column Sorted To','Perseverative Principle','Perseverative Error','Response Time']
	for ( let i = 0; i < NTrials; i++ )
	{	console.log('Index= '+i)
		console.log(trials.trials[0].current_rule[i])
		ResultsTable[i] = [trials.trials[0].current_rule[i], trials.trials[0].correctInRow[i],	trials.trials[0].CardNumber[i], trials.trials[0].response[i], trials.trials[0].PreviousRule[i], trials.trials[0].perseverative_error[i], trials.trials[0].rt[i]]
		
	}
	Results.AllResults['CardSortColNames'] = ColNames
	Results.AllResults['Card Sort Table'] = ResultsTable
	
	// NUMERIC RESULTS
	Results.NumericResults = {}
	Results.NumericResults['cs_Ntot'] = NTrials
	Results.NumericResults['cs_Ncor'] = sumCorrect
	Results.NumericResults['cs_Nerr'] = NTrials - sumCorrect

	Results.NumericResults['cs_NperErr'] = sumPErrors
	Results.NumericResults['cs_NnonperErr'] = NTrials - sumCorrect - sumPErrors
	Results.NumericResults['cs_RT'] = AvgRT


	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.parameters = parameters
	return Results
}