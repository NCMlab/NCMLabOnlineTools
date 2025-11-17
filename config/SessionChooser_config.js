
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




add('EN_COMM_DEMO', function(){ parameters = parameters001 });
// ===================================
var parameters099 = []
var List = []
List.push({name: 'Enter Name', battery: '72', row: 1, BitIndex: 1, Phase: 'Name', Test: 'Name'})
List.push({name: 'Demographics', battery: '73', row: 1, BitIndex: 2, Phase: 'Demog', Test: 'Demog'})
List.push({name: 'CESAM', battery: '74', row: 1, BitIndex: 3, Phase: 'CESAM', Test: 'CESAM'})
List.push({name: 'Baseline 1', battery: '77', row: 2, BitIndex: 4, Phase: 'Baseline', Test: 'BL-1'})
List.push({name: 'Baseline 2', battery: '77', row: 2, BitIndex: 5, Phase: 'Baseline', Test: 'BL-2'})
List.push({name: 'Baseline 3', battery: '77', row: 2, BitIndex: 6, Phase: 'Baseline', Test: 'BL-3'})
List.push({name: 'Baseline Trails 1', battery: '78', row: 3, BitIndex: 7, Phase: 'Baseline', Test: 'BL-Tr-1'})
List.push({name: 'Baseline Trails 2', battery: '83', row: 3, BitIndex: 8, Phase: 'Baseline', Test: 'BL-Tr-2'})
List.push({name: 'Baseline Trails 3', battery: '84', row: 3, BitIndex: 9, Phase: 'Baseline', Test: 'BL-Tr-3'})
List.push({name: 'Week 1, Pre', battery: '75', row: 4, BitIndex: 10, Phase: 'Pre-class', Test: '1'})
List.push({name: 'Week 1, Post', battery: '80', row: 4, BitIndex: 11, Phase: 'Post-class', Test: '1'})
List.push({name: 'Week 2, Pre', battery: '75', row: 5, BitIndex: 12, Phase: 'Pre-class', Test: '2'})
List.push({name: 'Week 2, Post', battery: '81', row: 5, BitIndex: 13, Phase: 'Post-class', Test: '2'})
List.push({name: 'Week 3, Pre', battery: '75', row: 6, BitIndex: 14, Phase: 'Pre-class', Test: '3'})
List.push({name: 'Week 3, Post', battery: '82', row: 6, BitIndex: 15, Phase: 'Post-class', Test: '3'})
List.push({name: 'Week 4, Pre', battery: '75', row: 7, BitIndex: 16, Phase: 'Pre-class', Test: '4'})
List.push({name: 'Week 4, Post', battery: '80', row: 7, BitIndex: 17, Phase: 'Post-class', Test: '4'})
List.push({name: 'Week 5, Pre', battery: '75', row: 8, BitIndex: 18, Phase: 'Pre-class', Test: '5'})
List.push({name: 'Week 5, Post', battery: '81', row: 8, BitIndex: 19, Phase: 'Post-class', Test: '5'})
List.push({name: 'Week 6, Pre', battery: '75', row: 9, BitIndex: 20, Phase: 'Pre-class', Test: '6'})
List.push({name: 'Week 6, Post', battery: '82', row: 9, BitIndex: 21, Phase: 'Post-class', Test: '6'})
List.push({name: 'Week 7, Pre', battery: '75', row: 10, BitIndex: 22, Phase: 'Pre-class', Test: '7'})
List.push({name: 'Week 7, Post', battery: '80', row: 10, BitIndex: 23, Phase: 'Post-class', Test: '7'})
List.push({name: 'Week 8, Pre', battery: '75', row: 11, BitIndex: 24, Phase: 'Pre-class', Test: '8'})
List.push({name: 'Week 8, Post', battery: '81', row: 11, BitIndex: 25, Phase: 'Post-class', Test: '8'})
List.push({name: 'Week 9, Pre', battery: '75', row: 12, BitIndex: 26, Phase: 'Pre-class', Test: '9'})
List.push({name: 'Week 9, Post', battery: '82', row: 12, BitIndex: 27, Phase: 'Post-class', Test: '9'})
List.push({name: 'Week 10, Pre', battery: '75', row: 13, BitIndex: 28, Phase: 'Pre-class', Test: '10'})
List.push({name: 'Week 10, Post', battery: '85', row: 13, BitIndex: 29, Phase: 'Post-class', Test: '10'})
List.push({name: 'Post-intervention 1', battery: '77', row: 14, BitIndex: 30, Phase: 'Post-intervention', Test: 'PI-1'})
List.push({name: 'Post-intervention 2', battery: '77', row: 14, BitIndex: 31, Phase: 'Post-intervention', Test: 'PI-2'})
List.push({name: 'Post-intervention 3', battery: '77', row: 14, BitIndex: 32, Phase: 'Post-intervention', Test: 'PI-3'})
List.push({name: 'Post-intervention Trails 1', battery: '78', row: 15, BitIndex: 33, Phase: 'Post-intervention', Test: 'PI-Tr-1'})
List.push({name: 'Post-intervention Trails 2', battery: '83', row: 15, BitIndex: 34, Phase: 'Post-intervention', Test: 'PI-Tr-2'})
List.push({name: 'Post-intervention Trails 3', battery: '84', row: 15, BitIndex: 35, Phase: 'Post-intervention', Test: 'PI-Tr-3'})
List.push({name: 'Week 11, Pre', battery: '75', row: 17, BitIndex: 36, Phase: 'Pre-class', Test: '11'})
List.push({name: 'Week 11, Post', battery: '80', row: 17, BitIndex: 37, Phase: 'Post-class', Test: '11'})
List.push({name: 'Week 12, Pre', battery: '75', row: 18, BitIndex: 38, Phase: 'Pre-class', Test: '12'})
List.push({name: 'Week 12, Post', battery: '81', row: 18, BitIndex: 39, Phase: 'Post-class', Test: '12'})
List.push({name: 'Week 13, Pre', battery: '75', row: 19, BitIndex: 40, Phase: 'Pre-class', Test: '13'})
List.push({name: 'Week 13, Post', battery: '82', row: 10, BitIndex: 41, Phase: 'Post-class', Test: '13'})
List.push({name: 'Pick a Test', battery: '79', row: 20, BitIndex: 9999, ButtonUsageType: 'UserChoice', Phase: 'User Choice', Test: '9999'})




parameters099.push({index: 3, 
    Title: "What session is this?",
    List: List
})
add('EN_COMM_99', function(){ parameters = parameters099 });
add('FR_COMM_99', function(){ parameters = parameters099 });

var KR_parameters099 = []
var KR_List = []
KR_List.push({name: '이름', battery: '72', row: 1, BitIndex: 1})
KR_List.push({name: '인구통계', battery: '73', row: 1, BitIndex: 2})
KR_List.push({name: 'CESAM', battery: '74', row: 1, BitIndex: 3})
KR_List.push({name: '기준선 1', battery: '77', row: 2, BitIndex: 4})
KR_List.push({name: '기준선 2', battery: '77', row: 2, BitIndex: 5})
KR_List.push({name: '기준선 3', battery: '77', row: 2, BitIndex: 6})
KR_List.push({name: '기준선 Trails 1', battery: '78', row: 3, BitIndex: 7})
KR_List.push({name: '기준선 Trails 2', battery: '83', row: 3, BitIndex: 8})
KR_List.push({name: '기준선 Trails 3', battery: '84', row: 3, BitIndex: 9})
KR_List.push({name: '1주차, Pre', battery: '75', row: 4, BitIndex: 10})
KR_List.push({name: '1주차, Post', battery: '76', row: 4, BitIndex: 11})
KR_List.push({name: '2주차, Pre', battery: '80', row: 5, BitIndex: 12})
KR_List.push({name: '2주차, Post', battery: '76', row: 5, BitIndex: 13})
KR_List.push({name: '3주차, Pre', battery: '81', row: 6, BitIndex: 14})
KR_List.push({name: '3주차 Post', battery: '76', row: 6, BitIndex: 15})
KR_List.push({name: '4주차, Pre', battery: '75', row: 7, BitIndex: 16})
KR_List.push({name: '4주차, Post', battery: '76', row: 7, BitIndex: 17})
KR_List.push({name: '5주차, Pre', battery: '80', row: 8, BitIndex: 18})
KR_List.push({name: '5주차, Post', battery: '76', row: 8, BitIndex: 19})
KR_List.push({name: '6주차, Pre', battery: '81', row: 9, BitIndex: 20})
KR_List.push({name: '6주차, Post', battery: '76', row: 9, BitIndex: 21})
KR_List.push({name: '7주차, Pre', battery: '75', row: 10, BitIndex: 22})
KR_List.push({name: '7주차, Post', battery: '76', row: 10, BitIndex: 23})
KR_List.push({name: '8주차, Pre', battery: '80', row: 11, BitIndex: 24})
KR_List.push({name: '8주차, Post', battery: '76', row: 11, BitIndex: 25})
KR_List.push({name: '9주차, Pre', battery: '81', row: 12, BitIndex: 26})
KR_List.push({name: '9주차, Post', battery: '76', row: 12, BitIndex: 27})
KR_List.push({name: '10주차, Pre', battery: '82', row: 13, BitIndex: 28})
KR_List.push({name: '10주차, Post', battery: '76', row: 13, BitIndex: 29})
KR_List.push({name: '1개입 후', battery: '78', row: 14, BitIndex: 30})
KR_List.push({name: '2개입 후', battery: '78', row: 14, BitIndex: 31})
KR_List.push({name: '3개입 후', battery: '78', row: 14, BitIndex: 32})
KR_List.push({name: 'Trails 1 개입 후', battery: '78', row: 15, BitIndex: 33})
KR_List.push({name: 'Trails 2 개입 후', battery: '78', row: 15, BitIndex: 34})
KR_List.push({name: 'Trails 3 개입 후', battery: '78', row: 15, BitIndex: 35})
KR_List.push({name: '11주차, Pre', battery: '75', row: 17, BitIndex: 36})
KR_List.push({name: '11주차, Post', battery: '76', row: 17, BitIndex: 37})
KR_List.push({name: '12주차, Pre', battery: '75', row: 18, BitIndex: 38})
KR_List.push({name: '12주차, Post', battery: '76', row: 18, BitIndex: 39})
KR_List.push({name: '13주차, Pre', battery: '75', row: 19, BitIndex: 40})
KR_List.push({name: '13주차, Post', battery: '76', row: 10, BitIndex: 41})
KR_List.push({name: '테스트를 선택하세요', battery: '79', row: 20, BitIndex: 42, ButtonUsageType: 'UserChoice'})
KR_parameters099.push({index: 3, 
    Title: "이건 무슨 세션이에요?",
    List: KR_List
})
add('KR_COMM_99', function(){ parameters = KR_parameters099 });

// === Demonstration === //
// ===================================
var parameters001 = []
var List = []
List.push({name: 'Intake', battery: '72', row: 1, BitIndex: 1})
List.push({name: 'Baseline', battery: '3', row: 1, BitIndex: 2})
List.push({name: 'Week 1', battery: '4', row: 3, BitIndex: 3})
List.push({name: 'Week 2', battery: '4', row: 4, BitIndex: 4})
List.push({name: 'Week 3', battery: '4', row: 5, BitIndex: 5})
List.push({name: 'Post-intervention', battery: '3', row: 6, BitIndex: 6})
List.push({name: 'Pick a Test', battery: '6', row: 8, BitIndex: 99, ButtonUsageType: 'UserChoice'})

parameters001.push({index: 3, 
    Title: "What session is this?",
    List: List
})