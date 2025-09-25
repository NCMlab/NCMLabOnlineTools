function ClockDrawing_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Clock Drawing'}).trials[0]
	console.log(trialData)
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99
	Results.AllResults['Image'] = trialData.png
	Results.AllResults['GIF'] = trialData.gif

	// Save Result to a File
	if ( jatos.urlQueryParameters.SaveLocal ) {
		var a = document.createElement("a"); //Create <a>
    	a.href = trialData.png; //Image Base64 Goes here
    	a.download = jatos.workerId + "_ClockDrawing.png"; //File name Here
    	a.click(); //Downloaded file
	}
	//Results.AllResults['GIF'] = "JASON GIF"
	Results.AllResults['Response Time (ms)'] = trialData.rt
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
}
