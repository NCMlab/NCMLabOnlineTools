var timeline = [];

function create2DArray(Nrows, Ncols) {
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(1))
    return arr
  }
ListOfTargets = [[1,1],[4,2],[0,2]]
//ListOfTargets = [[1,1],[0,1]]
var grid = create2DArray(10,10)

var trial_1 = {
	type: jsPsychCancellationMouse,
  	grid: grid,
  	grid_square_size: [50],
  	allow_nontarget_responses: true,
  	response_ends_trial: false,
  	target: ListOfTargets,
  	non_target_labels: ["A","C","D","E","F","G","H","J"],
  	target_labels: "B",
  	border_width: 0
}

timeline.push(trial_1)	
