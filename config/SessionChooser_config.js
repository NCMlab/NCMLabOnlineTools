
var parameters001 = []
// =======================================
var List = []
List.push({name: 'Intake', battery: '73'})
List.push({name: 'Baseline', battery: '74'})
List.push({name: 'Trails', battery: '78'})
List.push({name: 'Visit-Pre', battery: '75'})
List.push({name: 'Visit-Post', battery: '76'})
List.push({name: 'Post-Intervention', battery: '77'})
parameters001.push({index: 1, 
    Title: "What session is this?",
    List: List
})

var parameters002 = []
var List002 = []
List002.push({name: 'FR: Intake', battery: '73'})
List002.push({name: 'FR: Baseline', battery: '74'})
List002.push({name: 'FR: Trails', battery: '78'})
List002.push({name: 'FR: Visit-Pre', battery: '75'})
List002.push({name: 'FR: Visit-Post', battery: '76'})
List002.push({name: 'FR: Post-Intervention', battery: '77'})
parameters002.push({index: 2, 
    Title: "FR: What session is this?",
    List: List002
})

add('EN_COMM_01', function(){ parameters = parameters001 });
add('FR_COMM_01', function(){ parameters = parameters002 });
