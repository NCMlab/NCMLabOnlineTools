
function create2DArray(Nrows, Ncols) {
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(1))
    return arr
  }

// Make permuted list of Targets
function CreateCancellationList(NRows, NCols, NTargets) {
    var NPossible = NRows*NCols
    var ListOfTargets = []
    var count = 0
    // create a list of all possible locations
    for (var i = 0; i < NRows; i++) {
        for (var j = 0; j < NCols; j++){
            // only allow every other location to be a target
            if ( count % 2 == 1 ) {
                ListOfTargets.push([i,j])
            }
            count += 1
        }
    }
    // shuffle the list
    const shuffledArray = ListOfTargets.sort((a, b) => 0.5 - Math.random());
    // only return the specified number of targets
    return shuffledArray.slice(0, NTargets)
}

