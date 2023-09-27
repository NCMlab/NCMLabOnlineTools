function ReadingListening_Scoring(data) {
    console.log(data)
	readTrials = data.filter({task: 'read'});
    console.log(readTrials)
    Results = {}
    Results.AllResults = {}
    
    Results.AllResults['ScoreName'] = 'Accuracy'
    var TotalScore = 0
    for ( var i = 0; i < readTrials.trials.length; i++ )
    {
        Results.AllResults['Sentence '+(i+1)] = readTrials.trials[i].Results.ReadSentence
        Results.AllResults['Heard Sentence '+(i+1)] = readTrials.trials[i].Results.HeardSentence01
        Results.AllResults['Heard Sentence (option 2) '+(i+1)] = readTrials.trials[i].Results.HeardSentence02
        Results.AllResults['Score '+(i+1)] = readTrials.trials[i].Results.Score
        TotalScore += readTrials.trials[i].Results.Score
    }
    Results.AllResults['Accuracy'] = TotalScore/readTrials.trials.length
    Results.AllResults['Average Score'] = TotalScore/readTrials.trials.length
    console.log(Results)
    return Results   
}