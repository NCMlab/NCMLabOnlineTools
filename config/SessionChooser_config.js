
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
List.push({name: 'Enter Name', battery: '72', row: 1, BitIndex: 1})
List.push({name: 'Demographics', battery: '73', row: 1, BitIndex: 2})
List.push({name: 'CESAM', battery: '74', row: 1, BitIndex: 3})
List.push({name: 'Baseline 1', battery: '77', row: 2, BitIndex: 4})
List.push({name: 'Baseline 2', battery: '77', row: 2, BitIndex: 5})
List.push({name: 'Baseline 3', battery: '77', row: 2, BitIndex: 6})
List.push({name: 'Baseline Trails 1', battery: '78', row: 3, BitIndex: 7})
List.push({name: 'Baseline Trails 2', battery: '78', row: 3, BitIndex: 8})
List.push({name: 'Baseline Trails 3', battery: '78', row: 3, BitIndex: 9})
List.push({name: 'Week 1, Pre', battery: '75', row: 4, BitIndex: 10})
List.push({name: 'Week 1, Post', battery: '76', row: 4, BitIndex: 11})
List.push({name: 'Week 2, Pre', battery: '80', row: 5, BitIndex: 12})
List.push({name: 'Week 2, Post', battery: '76', row: 5, BitIndex: 13})
List.push({name: 'Week 3, Pre', battery: '81', row: 6, BitIndex: 14})
List.push({name: 'Week 3, Post', battery: '76', row: 6, BitIndex: 15})
List.push({name: 'Week 4, Pre', battery: '75', row: 7, BitIndex: 16})
List.push({name: 'Week 4, Post', battery: '76', row: 7, BitIndex: 17})
List.push({name: 'Week 5, Pre', battery: '80', row: 8, BitIndex: 18})
List.push({name: 'Week 5, Post', battery: '76', row: 8, BitIndex: 19})
List.push({name: 'Week 6, Pre', battery: '81', row: 9, BitIndex: 20})
List.push({name: 'Week 6, Post', battery: '76', row: 9, BitIndex: 21})
List.push({name: 'Week 7, Pre', battery: '75', row: 10, BitIndex: 22})
List.push({name: 'Week 7, Post', battery: '76', row: 10, BitIndex: 23})
List.push({name: 'Week 8, Pre', battery: '80', row: 11, BitIndex: 24})
List.push({name: 'Week 8, Post', battery: '76', row: 11, BitIndex: 25})
List.push({name: 'Week 9, Pre', battery: '81', row: 12, BitIndex: 26})
List.push({name: 'Week 9, Post', battery: '76', row: 12, BitIndex: 27})
List.push({name: 'Week 10, Pre', battery: '82', row: 13, BitIndex: 28})
List.push({name: 'Week 10, Post', battery: '76', row: 13, BitIndex: 29})
List.push({name: 'Post-intervention 1', battery: '78', row: 14, BitIndex: 30})
List.push({name: 'Post-intervention 2', battery: '78', row: 14, BitIndex: 31})
List.push({name: 'Post-intervention 3', battery: '78', row: 14, BitIndex: 32})
List.push({name: 'Post-intervention Trails 1', battery: '78', row: 15, BitIndex: 33})
List.push({name: 'Post-intervention Trails 2', battery: '78', row: 15, BitIndex: 34})
List.push({name: 'Post-intervention Trails 3', battery: '78', row: 15, BitIndex: 35})
List.push({name: 'Week 11, Pre', battery: '75', row: 17, BitIndex: 36})
List.push({name: 'Week 11, Post', battery: '76', row: 17, BitIndex: 37})
List.push({name: 'Week 12, Pre', battery: '75', row: 18, BitIndex: 38})
List.push({name: 'Week 12, Post', battery: '76', row: 18, BitIndex: 39})
List.push({name: 'Week 13, Pre', battery: '75', row: 19, BitIndex: 40})
List.push({name: 'Week 13, Post', battery: '76', row: 10, BitIndex: 41})
List.push({name: 'Pick a Test', battery: '79', row: 20, BitIndex: 42, ButtonUsageType: 'UserChoice'})


parameters099.push({index: 3, 
    Title: "What session is this?",
    List: List
})
add('EN_COMM_99', function(){ parameters = parameters099 });