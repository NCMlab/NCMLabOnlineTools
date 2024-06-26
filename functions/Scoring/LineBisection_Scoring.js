function LineBisection_Scoring(data) {
	const temp = data.filter({trial : 'trial'}).trials
	console.log(temp)
	// the task is one trial of N lines or Ntrials of one line
	// the scoring needs to take this into account
	var Ntrials = temp.length

	Results = {}
	Results.PrimaryResults = {}
	Results.AllResults = {}
	
	
	var count = 0
	
	//var LineCrossings = Array(Lines.length ).fill(0)
	const MissingValue = 999999

	// I should change this to an array of length zero and then push the results from each line onto the end of it
	var Distance = [] //Array(Lines.length ).fill(MissingValue)
	var PercDistance = [] //Array(Lines.length).fill(MissingValue)
	var ResponseTimePerTrial = []
	//var CrossFlag

	for ( var kk = 0; kk < Ntrials; kk++ ) {
		// get the data for this trial
		ResponseTimePerTrial.push(temp[kk].rt)
		Lines = temp[kk].Lines
		Strokes = temp[kk].strokes
		// cycle over each line in each trial
		for ( var i = 0; i < Lines.length; i++ ) {
			var p = Lines[i].LeftX
			var q = Lines[i].LeftY
			var r = Lines[i].RightX
			var s = Lines[i].RightY
			// find the midpoint of each line
			MPLine = MidPoint(p,q,r,s)
			var FirstCrossingFlag = true
			// cycle over each stroke
			console.log("N Strokes: "+Strokes.length)
			if ( Strokes.length > 0) {
				for ( var j = 0; j < Strokes.length; j++ ) {
					for ( var k = 1; k < Strokes[j].length; k++ ) {
						a = Strokes[j][k-1].x
						b = Strokes[j][k-1].y
						c = Strokes[j][k].x
						d = Strokes[j][k].y
						// does this stroke intersect with a line
						if (intersects(a,b,c,d,p,q,r,s) && FirstCrossingFlag) {
							console.log("CROSSING for line: "+ i + " and stroke "+ j)
							// What is the troke point where it crosses a line
							//console.log("Stroke crosses at point x: "+Strokes[j][k].x+", y: "+Strokes[j][k].y)
							// if true, how far is it from the midpoint

							// what is the midpoint of the stroke
							MPLine = MidPoint(p,q,r,s)
							//console.log("Midpoint of line "+i+" is at "+MPLine)
							// Distance between midpoint of line and where the stroke crosses it
							var DirDist = sideOfCrossing(MPLine[0],Strokes[j][k].x)*measureDistance(MPLine[0],MPLine[1],Strokes[j][k].x,Strokes[j][k].y)
							console.log("This is a distance of: "+DirDist)
							//if ( Distance[i] > DirDist ) {
								Distance.push(DirDist)
								PercDistance.push(100*DirDist/LineLength(p,q,r,s))
							//}
						}

					}
				}	
			}
			else {
				Distance.push(MissingValue)
				PercDistance.push(MissingValue)
			}
		}
	}

	// console.log(LineCrossings)
	console.log(PercDistance)
	Results.PrimaryResults['ScoreName'] = 'Avgerage Percentage Distance'
	Results.PrimaryResults['Accuracy'] = calculateAverage(removeEmptyValues(PercDistance, MissingValue))
	Results.AllResults['Average Percentage Distance'] = calculateAverage(removeEmptyValues(PercDistance, MissingValue))
	Results.AllResults['Image'] = temp.png
	Results.AllResults['Response Time (ms)'] = calculateAverage(removeEmptyValues(ResponseTimePerTrial, MissingValue))
	Results.AllResults['All Percentage Distances'] = PercDistance
	Results.AllResults['Number of Trials Attempted'] = Distance.length
	Results.AllResults['Number of Trials Completed'] = CountResponses(PercDistance, MissingValue)
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }
	Results.AllResults['Scoring Notes'] = Instructions.NotesForResultsPage


	// // Find the length of each line
	// for ( var i = 0; i < temp.Lines.length; i++) {
	// 	tempLoc = temp.Lines[i]
	// 	LeftX  = tempLoc.LeftX
	// 	LeftY  = tempLoc.LeftY
	// 	RightX  = tempLoc.RightX
	// 	RightY  = tempLoc.RightY
	// 	var LEN = LineLength(LeftX, LeftY, RightX, RightY)
	// 	console.log(LEN)
	// }

	return Results
}


function LineLength(LeftX, LeftY, RightX, RightY) {
	return Math.sqrt(Math.pow(RightY - LeftY,2) + Math.pow(RightX - LeftX,2))
}

function MidPoint(LeftX, LeftY, RightX, RightY) {
	return [LeftX + (RightX - LeftX)/2, LeftY + (RightY - LeftY)/2]
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

  function measureDistance(x1, y1, x2, y2) {
	distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
	return distance
  }

  function sideOfCrossing(x1, x2) {
	if (x1 < x2 ) {return 1}
	else if (x2 > x1) {return -1}
	else {return -1}
  }


  function calculateAverage(array) {
    var total = 0;
    var count = 0;
	console.log(array)
    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

function removeEmptyValues(array, MissingValue) {
	console.log(array)
	var index = array.indexOf(MissingValue);
	if (index >= 0) {
		array.splice( index );
	}
	console.log(array)
	return array
}

function CountResponses(array, MissingValue) {
	var count = 0;
	array.forEach((v) => (v === MissingValue && count++));
	var NResponses = array.length - count
	return NResponses;
}
