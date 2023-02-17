var timeline = [];

function create2DArray(Nrows, Ncols) {
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(1))
    return arr
  }
ListOfTargets = [[1,1],[4,2],[0,2]]
ListOfTargets=[[0,1],[0,5],[0,8],[0,11],[0,13],[0,15],[0,17],[0,21],[0,24],[1,51]]

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

var ListOfTargets = CreateCancellationList(6, 52, 104)


//ListOfTargets = [[1,1],[0,1]]
var grid = create2DArray(6,52)

var trial_1 = {
	type: jsPsychCancellationMouse,
  	grid: grid,
  	grid_square_width: '5vw',
    grid_square_height: '5vh',
    prompt: "<p>JASON</p>",
  	allow_nontarget_responses: true,
  	response_ends_trial: false,
  	target: ListOfTargets,
  	non_target_labels: ["A","B","C","D","E","F","G","I"],
  	target_labels: "H",
  	border_width: 0
}

timeline.push(trial_1)	
