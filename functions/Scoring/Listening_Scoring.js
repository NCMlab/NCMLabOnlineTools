function Listening_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(data)	
    trialData = data.filter({trial: 'test'})
    console.log(trialData)
    var AllAccuracy = []

    for ( var i = 0; i < trialData.trials.length; i++ )
    {
        console.log(trialData.trials[i])
        AllAccuracy.push(trialData.trials[i].correct)
    }

    const sum = AllAccuracy.reduce((a, b) => a + b, 0);
    const avg = (sum / AllAccuracy.length) || 0;


    Results = {}
    
    Results.AllResults = {}
    Results.AllResults['ScoreName'] = 'Accuracy'
    Results.AllResults['Accuracy'] = avg
    Results.AllResults['Each Trial Accuracy'] = AllAccuracy 
    Results.AllResults['All Trial Accuracy'] = avg
    Results.AllResults['Number Correct'] = sum
    Results.AllResults['Number of Trials'] = AllAccuracy.length
    console.log(Results)
    if ( Notes.trials.length > 0 )
    { Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
    else { Results.AllResults['Notes'] = '' }

    return Results
}



