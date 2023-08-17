function SingleLetterCancellation_Scoring(data) {
  Notes = data.filter({trial: 'Notes'})
  var trial = data.filter({task:'Trial'})
  console.log(trial)
  trial = trial.trials[0]
  console.log(trial)
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
  Results.PrimaryResults['ScoreName'] = 'Total Score'
  Results.PrimaryResults['Accuracy'] = TotalScore
  Results.AllResults = {}
  Results.AllResults['Total Score'] = TotalScore
  Results.AllResults['Left Score'] = LeftScore
  Results.AllResults['Right Score'] = RightScore
  Results.AllResults['Left Max Score'] = LeftMaxScore
  Results.AllResults['Right Max Score'] = RightMaxScore
  //Results.AllResults['GIF'] = trial.gif
  if ( Notes.trials.length > 0 )
    { Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
  else { Results.AllResults['Notes'] = '' }

  return Results

}
