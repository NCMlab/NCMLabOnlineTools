function calculateScore(drawingData){
	const numLines = drawingData.length;

	//defining scoring criteria 
	const maxLines = 12; // max lines allowed for perfect score
	const perfectScore = 12; //perfect score value

	const symmetryWeight = 2;
    const proportionalityWeight = 2;
    const completenessWeight = 2;
    const placementWeight = 2;

	//calculation of scores based on number of lines
	//assigns a score if number of lines is within the limit 
	let score; 
	if (numLines <=maxLines){
		score = perfectScore - (numLines/maxLines)* perfectScore;
	}else {
		//if number of lines exceeds max lines 
		score =0 
	}

	// //might add more criteria here..... TBD
	// 	score += symmetryCheck(drawingData) * symmetryWeight;
   	// 	score += proportionalityCheck(drawingData) * proportionalityWeight;
    // 	score += completenessCheck(drawingData) * completenessWeight;
	// 	score += placementCheck(drawingData) * placementWeight;

	return score
}

//function to handle scoring at the end of the exeperiment 

function handleScoring(data){
	console.log("THIS IS A TEST FROM HAMZA")
	//capture drawing data from experiment
	// const drawingData = data.values().next().value;
	// console.log(drawingData)
	const drawingData = data.trials[3].strokes

	//calculation of score based on drawing data
	const score = calculateScore(drawingData)
	console.log("SCORE: "+score)
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
};*/