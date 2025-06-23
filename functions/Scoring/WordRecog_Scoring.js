function WordRecog_Scoring(data) {
    temp = data.filter({task: 'Recognition'})
    Notes = data.filter({trial: 'Notes'})
    console.log(temp)
    for ( var i = 0; i < temp.length; i++ )
    {
        console.log(temp[i].rt)
    }
    var total_trials = temp.count();
    var NumberCorrect = temp.filter({accuracy: 'correct'}).count()
    var NumberIncorrect = temp.filter({accuracy: 'incorrect'}).count()
    var NHit = temp.filter({DetectionTheory: 'Hit'}).count()
    var NMiss = temp.filter({DetectionTheory: 'Miss'}).count()
    var NFA = temp.filter({DetectionTheory: 'False Alarm'}).count()
    var NCR = temp.filter({DetectionTheory: 'Correct Rejection'}).count()
    var Acc = NumberCorrect/total_trials

    var Results = {}
    Results.PrimaryResults = {}
    Results.PrimaryResults['Accuracy'] = Acc
    Results.PrimaryResults['ScoreName'] = 'Accuracy'
    Results.AllResults = {}
    Results.AllResults['Number of Trials'] = total_trials
    Results.AllResults['Accuracy '] = Acc
    Results.AllResults['ScoreName'] = 'Accuracy'
    Results.AllResults['Number Correct'] = NumberCorrect
    Results.AllResults['Number Incorrect'] = NumberIncorrect
    Results.AllResults['Number of Hits'] = NHit
    Results.AllResults['Number of Miss'] = NMiss
    Results.AllResults['Number of False Alarm'] = NFA
    Results.AllResults['Number of Correct Rejection'] = NCR
    // NUMERIC SCORING
    Results.NumericResults = {}
    Results.NumericResults['wordRecog_N'] = total_trials
    Results.NumericResults['wordRecog_Acc '] = Acc
    Results.NumericResults['wordRecog_Ncor'] = NumberCorrect
    Results.NumericResults['wordRecog_Ninc'] = NumberIncorrect
    Results.NumericResults['wordRecog_Nhit'] = NHit
    Results.NumericResults['wordRecog_Nmiss'] = NMiss
    Results.NumericResults['wordRecog_Nfa'] = NFA
    Results.NumericResults['wordRecog_Ncr'] = NCR
    if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
    Results.parameters = parameters
    
	return Results
}




// Total number of words recalled
// Recency effect for each block


