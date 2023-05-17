function SingleLetterCancellation_Scoring(trial) {
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

  Results = {}
  Results.PrimaryResults = {}
  Results.PrimaryResults['Score Name'] = 'Total Score'
  Results.PrimaryResults['Accuracy'] = TotalScore
  Results.AllResults = {}
  Results.AllResults['Totoal Score'] = TotalScore
  Results.AllResults['Left Score'] = LeftScore
  Results.AllResults['Right Score'] = RightScore
  Results.AllResults['Left Max Score'] = LeftMaxScore
  Results.AllResults['Right Max Score'] = RightMaxScore
  return Results

}
