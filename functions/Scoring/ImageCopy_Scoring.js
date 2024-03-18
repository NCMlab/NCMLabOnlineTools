function calculateScore(drawingData){
	const numLines = drawingData.lines.length;

	//defining scoring criteria 
	const maxLines = 12; // max lines allowed for perfect score
	const perfectScore = 10; //perfect score value

	//calculation of scores based on number of lines
	//assigns a score if number of lines is within the limit 
	let score; 
	if (numLines <=maxLines){
		score = perfectScore - (numLines/maxLines)* perfectScore;
	}else {
		//if number of lines exceeds max lines 
		score =0 
	}

	//might add more criteria here..... TBD
	return score
}

//function to handle scoring at the end of the exeperiment 

function handleScoring(data){
	//capture drawing data from experiment
	const drawingData = data.values().next().value;

	//calculation of score based on drawing data
	const score = calculateScore(drawingData)
	return {score: score};
}

//updating send data component to include scoring information
/*
var SendData = {
	type: jsPyschCallFunction,
	func: function(){
		var data = jsPysch.data.get();

		var scoringResults = handleScoring(data);

		jsPysch.finishTrial(scoringResults);
	},
};
*/
function ImageCopy_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	console.log(data)
	temp = data.filter({task: 'Image Copy'})
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Accuracy'
	Results.AllResults['Accuracy'] = -99
	Results.AllResults['Score'] = -99
	if ( Notes.trials.length > 0 )
	{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	return Results
}