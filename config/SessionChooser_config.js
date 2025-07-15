
SessionList = []
var parameters001 = []
// =======================================
var List001 = []

List001.push({name: 'Enter Name', battery: '72'})
List001.push({name: 'Intake', battery: '73'})
List001.push({name: 'Baseline', battery: '74'})
List001.push({name: 'Trails', battery: '78'})
List001.push({name: 'Visit-Pre', battery: '75'})
List001.push({name: 'Visit-Post', battery: '76'})
List001.push({name: 'Post-Intervention', battery: '77'})
parameters001.push({index: 1, 
    Title: "What session is this?",
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
})


SessionList.push({
  index: 1,
  parameters: parameters001,
  TaskList: List001,
})
SessionList.push({
  index: 2,
  parameters: parameters002,
  TaskList: List002,
})

