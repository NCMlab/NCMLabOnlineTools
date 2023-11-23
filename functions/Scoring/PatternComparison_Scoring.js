function PatternComparison_Scoring(data) {

    const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    function getAllIndexes(arr, val) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
      }
    console.log(data)  
    
    // unique loads 
    let AllLoads = [...new Set(data.load.flat(1))];
    var meanRT = []
    var meanAcc = []
    var loads = []
    var Ntrials = []
    
    for ( var i = 0; i < AllLoads.length; i++ )
    {
      var count = 0
      var tempAcc = 0
      var tempRT = 0
      CurrentIndices = getAllIndexes(data.load, AllLoads[i])
      for ( var j = 0; j < CurrentIndices.length; j++ )
      {
        tempAcc += data.accuracy[CurrentIndices[j]]
        tempRT += data.rt[CurrentIndices[j]]
        count += 1
      }
      meanAcc.push(tempAcc/count)
      meanRT.push(tempRT/count)
      loads.push(AllLoads[i])
      Ntrials.push(count)

    }

    Results = {}
    Results.PrimaryResults = {}
    Results.PrimaryResults['Accuracy'] = average(data.accuracy)
    Results.PrimaryResults['ScoreName'] = "Overall Accuracy"
    Results.AllResults = {}
    Results.AllResults['Accuracy'] = average(data.accuracy)
    Results.AllResults['ScoreName'] = "Overall Accuracy"
    Results.AllResults['Overall'] = average(data.accuracy)
    Results.AllResults['Loads'] = loads
    Results.AllResults['mean RT'] = meanRT
    Results.AllResults['Accuracy'] = meanAcc
    Results.AllResults['Number Trials'] = Ntrials

    return Results
}
