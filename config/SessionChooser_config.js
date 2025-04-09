
var parameters01 = []
// =======================================
var List = []
List.push({name: 'Intake', battery: '73'})
List.push({name: 'Baseline', battery: '74'})
List.push({name: 'Trails', battery: '78'})
List.push({name: 'Visit-Pre', battery: '75'})
List.push({name: 'Visit-Post', battery: '76'})
List.push({name: 'Post-Intervention', battery: '77'})

parameters01.push({index: 1, 
    Title: "What session is this?",
    List: List
})

add('COMM_01', function(){ parameters = parameters01 });
