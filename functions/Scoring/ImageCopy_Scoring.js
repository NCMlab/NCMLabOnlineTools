/* function ImageCopy_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Image Copy'}).trials[0]
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99

	*/
	

function ImageCopy_Scoring(data) {
	let score = 0;
	  
		// Hypothetical scoring based on cube features
		for (let i = 0; i < data.length; i++) {
		  for (let j = 0; j < data[i].length; j++) {
			// Check for cube features 
			if (data[i][j] === 1) {
			  // might add more scoring logic based on specific req 
			  score += 1;
			}
		  }
		}
		
		console.log(score)
		return score;
	  }
	  
	  // Calculate and display the score for the cube image
	  const cubeScore = ImageCopy_Scoring(cubeImage);
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

 