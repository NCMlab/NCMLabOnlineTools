var timeline = [];

function create2DArray(Nrows, Ncols) {
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(1))
    return arr
  }
ListOfTargets = [[1,1],[4,2],[0,2]]
ListOfTargets=[[0,1],[0,5],[0,8],[0,11],[0,13],[0,15],[0,17],[0,21],[0,24],]
//ListOfTargets = [[1,1],[0,1]]
var grid = create2DArray(6,52)

var trial_1 = {
	type: jsPsychCancellationMouse,
  	grid: grid,
  	grid_square_size: [35],
  	allow_nontarget_responses: true,
  	response_ends_trial: false,
  	target: ListOfTargets,
  	non_target_labels: ["A","B","C","D","E","F","G","I"],
  	target_labels: "H",
  	border_width: 0
}

timeline.push(trial_1)	
