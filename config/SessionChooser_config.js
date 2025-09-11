
SessionList = []
var parameters001 = []
// =======================================
var List = []

List.push({name: 'Enter Name', battery: '72'})
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
List002.push({name: 'Entrez votre nom', battery: '72'})
List002.push({name: 'Admission', battery: '73'})
List002.push({name: 'Référence', battery: '74'})
List002.push({name: 'Test de Création de Sentiers', battery: '78'})
List002.push({name: 'Visite-Pré', battery: '75'})
List002.push({name: 'Post-visite', battery: '76'})
List002.push({name: 'Post-Intervention', battery: '77'})
parameters002.push({index: 2, 
    Title: "De quelle session s'agit-il?",
    List: List002
})

add('EN_COMM_01', function(){ parameters = parameters001 });
add('FR_COMM_01', function(){ parameters = parameters002 });


// ===================================
var parameters099 = []
var List = []
List.push({name: 'Enter Name', battery: '72', row: 1, col: 1, MaxCol: 3, BitIndex: 1})
List.push({name: 'Demographics', battery: '72', row: 1, col: 2, MaxCol: 3, BitIndex: 2})
List.push({name: 'CESAM', battery: '72', row: 1, col: 3, MaxCol: 3, BitIndex: 3})
List.push({name: 'Baseline 1', battery: '72', row: 2, col: 1, MaxCol: 3, BitIndex: 4})
List.push({name: 'Baseline 2', battery: '72', row: 2, col: 2, MaxCol: 3, BitIndex: 5})
List.push({name: 'Baseline 3', battery: '72', row: 2, col: 3, MaxCol: 3, BitIndex: 6})
List.push({name: 'Baseline Trails 1', battery: '72', row: 3, col: 1, MaxCol: 3, BitIndex: 7})
List.push({name: 'Baseline Trails 2', battery: '72', row: 3, col: 2, MaxCol: 3, BitIndex: 8})
List.push({name: 'Baseline Trails 3', battery: '72', row: 3, col: 3, MaxCol: 3, BitIndex: 9})
List.push({name: 'Week 1, Pre', battery: '72', row: 4, col: 1, MaxCol: 2, BitIndex: 10})
List.push({name: 'Week 1, Post', battery: '72', row: 4, col: 2, MaxCol: 2, BitIndex: 11})
List.push({name: 'Week 2, Pre', battery: '72', row: 5, col: 1, MaxCol: 2, BitIndex: 12})
List.push({name: 'Week 2, Post', battery: '72', row: 5, col: 2, MaxCol: 2, BitIndex: 13})
parameters099.push({index: 3, 
    Title: "What session is this?",
    List: List
})
add('EN_COMM_99', function(){ parameters = parameters099 });