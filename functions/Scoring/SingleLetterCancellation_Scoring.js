function SingleLetterCancellation_Scoring(data) {
	console.log(data)
  // score trials
  var TotalScore = 0
  var LeftScore = 0
  var RightScore = 0
  var LeftMaxScore = 0
  var RightMaxScore = 0
  var MidLineSplit = trial.grid[0].length/2
  
  for ( var i = 0; i < trial.target.length; i ++ ) {
    if ( trial.target[i][1] < MidLineSplit ) { LeftMaxScore += 1}
    else {RightMaxScore += 1}
    if ( 'response' in trial.target[i] ) { 
      TotalScore += 1 

      if ( trial.target[i][1] < MidLineSplit )
        {LeftScore += 1}
      else {RightScore += 1}
      // score left and right
    }

  }
  console.log(TotalScore)
  console.log(LeftScore)
  console.log(RightMaxScore)
  console.log(RightScore)
  console.log(LeftMaxScore)
  data.PrimaryResults = {}
  data.PrimaryResults['TotalScore'] = TotalScore
  data.AllResults = {}
  data.AllResults['LeftScore'] = LeftScore
  data.AllResults['RightScore'] = RightScore
  data.AllResults['LeftMaxScore'] = LeftMaxScore
  data.AllResults['RightMaxScore'] = RightMaxScore
  return data

}