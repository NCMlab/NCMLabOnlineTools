/*function ImageCopy_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Image Copy'}).trials[0]
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99
	*/

	function calculateCubeScore(data) {
		let score = 0;
	  
		// Hypothetical scoring based on the presence of cube-like features
		for (let i = 0; i < data.length; i++) {
		  for (let j = 0; j < data[i].length; j++) {
			// Check for cube-like features (e.g., consecutive 1s)
			if (data[i][j] === 1) {
			  // You can customize the scoring logic based on your specific requirements
			  score += 1;
			}
		  }
		}
	  
		return score;
	  }
	  
	  // Calculate and display the score for the cube image
	  const cubeScore = calculateCubeScore(cubeImage);
	  console.log(`Cube Score: ${cubeScore}`);


/*
	Results.AllResults['Response Time (ms)'] = trialData.rt
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	//Results.AllResults['Notes'] = Notes.trials[0].response.Notes
	console.log(Results)
	return Results
}*/

 