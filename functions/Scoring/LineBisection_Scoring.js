function LineBisection_Scoring(data) {
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Score'] = -99
	Results.AllResults = {}
	Results.AllResults['Score'] = -99
	
	 console.log(data)
	 const temp = data.filter({trial : 'trial'})
	 console.log(temp)
	Lines = temp.trials[0].Lines
	Strokes = temp.trials[0].strokes
	console.log(Lines)
	console.log(Strokes)
	var LineCrossings = Array(Lines.length ).fill(0)
	var Distance = Array(Lines.length ).fill(0)
	var CrossFlag
	for ( var i = 0; i < Lines.length; i++ ) {
		var p = Lines[i].LeftX
		var q = Lines[i].LeftY
		var r = Lines[i].RightX
		var s = Lines[i].RightY
		MPLine = MidPoint(p,q,r,s)
		var FirstCrossingFlag = true
		for ( var j = 0; j < Strokes.length; j++ ) {
			for ( var k = 4; k < Strokes[j].length; k++ ) {
				a = Strokes[j][k-4].x
				b = Strokes[j][k-4].y
				c = Strokes[j][k].x
				d = Strokes[j][k].y

				if (intersects(a,b,c,d,p,q,r,s) && FirstCrossingFlag) {
					// if true, how far is it from the midpoint
					MPStroke = MidPoint(a,b,c,d)
					console.log(MPLine)
					console.log(MPStroke)
					LineCrossings[i]++
					Distance[i] = LineLength(MPStroke[0],MPStroke[1],MPLine[0],MPLine[1])
					FirstCrossingFlag = false
				}
			}	
		}
	}
	console.log(LineCrossings)
	console.log(Distance)
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
	Results.AllResults['Image'] = temp.png
	Results.AllResults['Response Time (ms)'] = temp.rt
	return Results
}



function LineLength(LeftX, LeftY, RightX, RightY) {
	return Math.sqrt(Math.pow(RightY - LeftY,2) + Math.pow(RightX - LeftX,2))
}

function MidPoint(LeftX, LeftY, RightX, RightY) {
	return [RightX - LeftX, RightY - LeftY]
}



// returns true if the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
function intersects(a,b,c,d,p,q,r,s) {
	var det, gamma, lambda;
	det = (c - a) * (s - q) - (r - p) * (d - b);
	if (det === 0) {
	  return false;
	} else {
	  lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
	  gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
	  return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
	}
  };
