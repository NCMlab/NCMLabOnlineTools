var timeline = [];

function create2DArray(Nrows, Ncols) {
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(1))
    return arr
  }
ListOfTargets = [[1,1],[4,1],[6,3]]
//ListOfTargets = [[1,1],[0,1]]
var grid = create2DArray(10,10)

var trial_1 = {
  type: jsPsychCancellationMouse,
  grid: grid,
  grid_square_size: [50],
  allow_nontarget_responses: true,
  target: [3,0]
}

console.log(ListOfTargets[1])

for ( var i = 0; i < ListOfTargets.length; i++ ) 
{
	var trial_1 = {
  		type: jsPsychCancellationMouse,
  		grid: grid,
  		grid_square_size: [50],
  		allow_nontarget_responses: true,
  		response_ends_trial: true,
  		target: ListOfTargets[i],
  		non_target_labels: "A",
  		target_labels: "B",

}
	timeline.push(trial_1)	
}

console.log(timeline)