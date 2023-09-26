function ReadingListening_Scoring(data) {
    console.log(data)
	readTrials = data.filter({task: 'read'});
    console.log(readTrials)
    Results = {}
    Results.AllResults = {}
    
    for ( var i = 0; i < readTrials.trials.length; i++ )
    {
        Results.AllResults['Sentence '+(i+1)] = readTrials.trials[i].Results.ReadSentence
    }
    console.log(Results)
    return Results   
}