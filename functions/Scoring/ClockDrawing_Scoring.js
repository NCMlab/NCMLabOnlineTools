function ClockDrawing_Scoring(data) {
	// filtering data for clock
    const clockDrawingTrialData = data.filter({trial: 'Clock Drawing'}).first();
    const notesData = data.filter({trial: 'Notes'}).first();

    // initialzing results object
    let results = {
        PrimaryResults: {
            ScoreName: 'Accuracy',
            Accuracy: -99 // default value if accuracy cannot be calculated
        },
        AllResults: {
            Accuracy: -99, 
            'Response Time (ms)': clockDrawingTrialData.rt || 0, // response time in milliseconds
            Notes: notesData ? notesData.response.Notes : '' // notes if available
        }
    };

    // check if clock drawing trial data is available
    if (clockDrawingTrialData) {
        // check if clock drawing response data is available
        if (clockDrawingTrialData.response) {
            // 1) we need to implement the accuracy calculation based on the user's clock drawing response
            // we can compare the user's drawn clock with a reference clock and calculate accuracy
            // and replace the below line with the accuracy calculation logic
            const accuracy = calculateAccuracy(clockDrawingTrialData.response);

            // update accuracy in results object
            results.PrimaryResults.Accuracy = accuracy;
            results.AllResults.Accuracy = accuracy;
        }
    }

    return results;
}

// accuracy calculation function (not implemented yet)
function calculateAccuracy(responseData) {
    if (responseData.attempted) {
        return 100; // Maximum accuracy
    } else {
        return 0; // Minimum accuracy
    }


/*function ClockDrawing_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Clock Drawing'}).trials[0]
	console.log(trialData)
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99
	//Results.AllResults['Image'] = trialData.png
	//Results.AllResults['GIF'] = trialData.gif
	//Results.AllResults['GIF'] = "JASON GIF"
	Results.AllResults['Response Time (ms)'] = trialData.rt
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
} */
