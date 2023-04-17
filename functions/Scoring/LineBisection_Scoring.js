function LineBisection_Scoring(data) {
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Score'] = -99
	Results.AllResults = {}
	Results.AllResults['Score'] = -99
	return Results
	// console.log(data)
	// const temp = data.filter({trial : 'trial'})
	// console.log(temp)
	
	// // Find the length of each line
	// for ( var i = 0; i < temp.trials[0].Lines.length; i++) {
	// 	tempLoc = temp.trials[0].Lines[i]
	// 	LeftX  = tempLoc.LeftX
	// 	LeftY  = tempLoc.LeftY
	// 	RightX  = tempLoc.RightX
	// 	RightY  = tempLoc.RightY
	// 	var LEN = LineLength(LeftX, LeftY, RightX, RightY)
	// 	console.log(LEN)
	// }
}



function LineLength(LeftX, LeftY, RightX, RightY) {
	return Math.sqrt(Math.pow(RightY - LeftY,2) + Math.pow(RightX - LeftX,2))
}

function MidPoint(LeftX, LeftY, RightX, RightY) {
	return [RightX - LeftX, RightY, LeftY]
}