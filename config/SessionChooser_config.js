
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
var EN_parameters099 = []
var EN_List = []
EN_List.push({name: 'Enter Name', battery: '72', row: 1, BitIndex: 1, Phase: 'Name', Test: 'Name'})
EN_List.push({name: 'Demographics', battery: '73', row: 1, BitIndex: 2, Phase: 'Demog', Test: 'Demog'})
EN_List.push({name: 'CESAM', battery: '74', row: 1, BitIndex: 3, Phase: 'CESAM', Test: 'CESAM'})
EN_List.push({name: 'Baseline 1', battery: '77', row: 2, BitIndex: 4, Phase: 'Baseline', Test: 'BL-1'})
EN_List.push({name: 'Baseline 2', battery: '77', row: 2, BitIndex: 5, Phase: 'Baseline', Test: 'BL-2'})
EN_List.push({name: 'Baseline 3', battery: '77', row: 2, BitIndex: 6, Phase: 'Baseline', Test: 'BL-3'})
EN_List.push({name: 'Baseline Trails 1', battery: '78', row: 3, BitIndex: 7, Phase: 'Baseline', Test: 'BL-Tr-1'})
EN_List.push({name: 'Baseline Trails 2', battery: '83', row: 3, BitIndex: 8, Phase: 'Baseline', Test: 'BL-Tr-2'})
EN_List.push({name: 'Baseline Trails 3', battery: '84', row: 3, BitIndex: 9, Phase: 'Baseline', Test: 'BL-Tr-3'})
EN_List.push({name: 'Lesson 1, Pre', battery: '75', row: 4, BitIndex: 10, Phase: 'Pre-class', Test: '1'})
EN_List.push({name: 'Lesson 1, Post', battery: '80', row: 4, BitIndex: 11, Phase: 'Post-class', Test: '1'})
EN_List.push({name: 'Lesson 2, Pre', battery: '75', row: 5, BitIndex: 12, Phase: 'Pre-class', Test: '2'})
EN_List.push({name: 'Lesson 2, Post', battery: '81', row: 5, BitIndex: 13, Phase: 'Post-class', Test: '2'})
EN_List.push({name: 'Lesson 3, Pre', battery: '75', row: 6, BitIndex: 14, Phase: 'Pre-class', Test: '3'})
EN_List.push({name: 'Lesson 3, Post', battery: '82', row: 6, BitIndex: 15, Phase: 'Post-class', Test: '3'})
EN_List.push({name: 'Lesson 4, Pre', battery: '75', row: 7, BitIndex: 16, Phase: 'Pre-class', Test: '4'})
EN_List.push({name: 'Lesson 4, Post', battery: '80', row: 7, BitIndex: 17, Phase: 'Post-class', Test: '4'})
EN_List.push({name: 'Lesson 5, Pre', battery: '75', row: 8, BitIndex: 18, Phase: 'Pre-class', Test: '5'})
EN_List.push({name: 'Lesson 5, Post', battery: '81', row: 8, BitIndex: 19, Phase: 'Post-class', Test: '5'})
EN_List.push({name: 'Lesson 6, Pre', battery: '75', row: 9, BitIndex: 20, Phase: 'Pre-class', Test: '6'})
EN_List.push({name: 'Lesson 6, Post', battery: '82', row: 9, BitIndex: 21, Phase: 'Post-class', Test: '6'})
EN_List.push({name: 'Lesson 7, Pre', battery: '75', row: 10, BitIndex: 22, Phase: 'Pre-class', Test: '7'})
EN_List.push({name: 'Lesson 7, Post', battery: '80', row: 10, BitIndex: 23, Phase: 'Post-class', Test: '7'})
EN_List.push({name: 'Lesson 8, Pre', battery: '75', row: 11, BitIndex: 24, Phase: 'Pre-class', Test: '8'})
EN_List.push({name: 'Lesson 8, Post', battery: '81', row: 11, BitIndex: 25, Phase: 'Post-class', Test: '8'})
EN_List.push({name: 'Lesson 9, Pre', battery: '75', row: 12, BitIndex: 26, Phase: 'Pre-class', Test: '9'})
EN_List.push({name: 'Lesson 9, Post', battery: '82', row: 12, BitIndex: 27, Phase: 'Post-class', Test: '9'})
EN_List.push({name: 'Lesson 10, Pre', battery: '75', row: 13, BitIndex: 28, Phase: 'Pre-class', Test: '10'})
EN_List.push({name: 'Lesson 10, Post', battery: '85', row: 13, BitIndex: 29, Phase: 'Post-class', Test: '10'})
EN_List.push({name: 'Post-intervention 1', battery: '77', row: 14, BitIndex: 30, Phase: 'Post-intervention', Test: 'PI-1'})
EN_List.push({name: 'Post-intervention 2', battery: '77', row: 14, BitIndex: 31, Phase: 'Post-intervention', Test: 'PI-2'})
EN_List.push({name: 'Post-intervention 3', battery: '77', row: 14, BitIndex: 32, Phase: 'Post-intervention', Test: 'PI-3'})
EN_List.push({name: 'Post-intervention Trails 1', battery: '78', row: 15, BitIndex: 33, Phase: 'Post-intervention', Test: 'PI-Tr-1'})
EN_List.push({name: 'Post-intervention Trails 2', battery: '83', row: 15, BitIndex: 34, Phase: 'Post-intervention', Test: 'PI-Tr-2'})
EN_List.push({name: 'Post-intervention Trails 3', battery: '84', row: 15, BitIndex: 35, Phase: 'Post-intervention', Test: 'PI-Tr-3'})
EN_List.push({name: 'Lesson 11, Pre', battery: '75', row: 17, BitIndex: 36, Phase: 'Pre-class', Test: '11'})
EN_List.push({name: 'Lesson 11, Post', battery: '80', row: 17, BitIndex: 37, Phase: 'Post-class', Test: '11'})
EN_List.push({name: 'Lesson 12, Pre', battery: '75', row: 18, BitIndex: 38, Phase: 'Pre-class', Test: '12'})
EN_List.push({name: 'Lesson 12, Post', battery: '81', row: 18, BitIndex: 39, Phase: 'Post-class', Test: '12'})
EN_List.push({name: 'Lesson 13, Pre', battery: '75', row: 19, BitIndex: 40, Phase: 'Pre-class', Test: '13'})
EN_List.push({name: 'Lesson 13, Post', battery: '82', row: 19, BitIndex: 41, Phase: 'Post-class', Test: '13'})
EN_List.push({name: 'Pick a Test', battery: '79', row: 20, BitIndex: 9999, ButtonUsageType: 'UserChoice', Phase: 'User Choice', Test: '9999'})

EN_parameters099.push({index: 3, 
    Title: "What session is this?",
    List: EN_List
})
add('EN_COMM_99', function(){ parameters = EN_parameters099 });

var FR_parameters099 = []
var FR_List = []
FR_List.push({name: 'Entrez votre nom', battery: '72', row: 1, BitIndex: 1, Phase: 'Name', Test: 'Name'})
FR_List.push({name: 'Démographique', battery: '73', row: 1, BitIndex: 2, Phase: 'Demog', Test: 'Demog'})
FR_List.push({name: 'CESAM', battery: '74', row: 1, BitIndex: 3, Phase: 'CESAM', Test: 'CESAM'})
FR_List.push({name: 'Référence 1', battery: '77', row: 2, BitIndex: 4, Phase: 'Référence', Test: 'BL-1'})
FR_List.push({name: 'Référence 2', battery: '77', row: 2, BitIndex: 5, Phase: 'Référence', Test: 'BL-2'})
FR_List.push({name: 'Référence 3', battery: '77', row: 2, BitIndex: 6, Phase: 'Référence', Test: 'BL-3'})
FR_List.push({name: 'Référence Trails 1', battery: '78', row: 3, BitIndex: 7, Phase: 'Référence', Test: 'BL-Tr-1'})
FR_List.push({name: 'Référence Trails 2', battery: '83', row: 3, BitIndex: 8, Phase: 'Référence', Test: 'BL-Tr-2'})
FR_List.push({name: 'Référence Trails 3', battery: '84', row: 3, BitIndex: 9, Phase: 'Référence', Test: 'BL-Tr-3'})
FR_List.push({name: 'Leçon 1, Pre', battery: '75', row: 4, BitIndex: 10, Phase: 'Pre-class', Test: '1'})
FR_List.push({name: 'Leçon 1, Post', battery: '80', row: 4, BitIndex: 11, Phase: 'Post-class', Test: '1'})
FR_List.push({name: 'Leçon 2, Pre', battery: '75', row: 5, BitIndex: 12, Phase: 'Pre-class', Test: '2'})
FR_List.push({name: 'Leçon 2, Post', battery: '81', row: 5, BitIndex: 13, Phase: 'Post-class', Test: '2'})
FR_List.push({name: 'Leçon 3, Pre', battery: '75', row: 6, BitIndex: 14, Phase: 'Pre-class', Test: '3'})
FR_List.push({name: 'Leçon 3, Post', battery: '82', row: 6, BitIndex: 15, Phase: 'Post-class', Test: '3'})
FR_List.push({name: 'Leçon 4, Pre', battery: '75', row: 7, BitIndex: 16, Phase: 'Pre-class', Test: '4'})
FR_List.push({name: 'Leçon 4, Post', battery: '80', row: 7, BitIndex: 17, Phase: 'Post-class', Test: '4'})
FR_List.push({name: 'Leçon 5, Pre', battery: '75', row: 8, BitIndex: 18, Phase: 'Pre-class', Test: '5'})
FR_List.push({name: 'Leçon 5, Post', battery: '81', row: 8, BitIndex: 19, Phase: 'Post-class', Test: '5'})
FR_List.push({name: 'Leçon 6, Pre', battery: '75', row: 9, BitIndex: 20, Phase: 'Pre-class', Test: '6'})
FR_List.push({name: 'Leçon 6, Post', battery: '82', row: 9, BitIndex: 21, Phase: 'Post-class', Test: '6'})
FR_List.push({name: 'Leçon 7, Pre', battery: '75', row: 10, BitIndex: 22, Phase: 'Pre-class', Test: '7'})
FR_List.push({name: 'Leçon 7, Post', battery: '80', row: 10, BitIndex: 23, Phase: 'Post-class', Test: '7'})
FR_List.push({name: 'Leçon 8, Pre', battery: '75', row: 11, BitIndex: 24, Phase: 'Pre-class', Test: '8'})
FR_List.push({name: 'Leçon 8, Post', battery: '81', row: 11, BitIndex: 25, Phase: 'Post-class', Test: '8'})
FR_List.push({name: 'Leçon 9, Pre', battery: '75', row: 12, BitIndex: 26, Phase: 'Pre-class', Test: '9'})
FR_List.push({name: 'Leçon 9, Post', battery: '82', row: 12, BitIndex: 27, Phase: 'Post-class', Test: '9'})
FR_List.push({name: 'Leçon 10, Pre', battery: '75', row: 13, BitIndex: 28, Phase: 'Pre-class', Test: '10'})
FR_List.push({name: 'Leçon 10, Post', battery: '85', row: 13, BitIndex: 29, Phase: 'Post-class', Test: '10'})
FR_List.push({name: 'Post-intervention 1', battery: '77', row: 14, BitIndex: 30, Phase: 'Post-intervention', Test: 'PI-1'})
FR_List.push({name: 'Post-intervention 2', battery: '77', row: 14, BitIndex: 31, Phase: 'Post-intervention', Test: 'PI-2'})
FR_List.push({name: 'Post-intervention 3', battery: '77', row: 14, BitIndex: 32, Phase: 'Post-intervention', Test: 'PI-3'})
FR_List.push({name: 'Post-intervention Trails 1', battery: '78', row: 15, BitIndex: 33, Phase: 'Post-intervention', Test: 'PI-Tr-1'})
FR_List.push({name: 'Post-intervention Trails 2', battery: '83', row: 15, BitIndex: 34, Phase: 'Post-intervention', Test: 'PI-Tr-2'})
FR_List.push({name: 'Post-intervention Trails 3', battery: '84', row: 15, BitIndex: 35, Phase: 'Post-intervention', Test: 'PI-Tr-3'})
FR_List.push({name: 'Leçon 11, Pre', battery: '75', row: 17, BitIndex: 36, Phase: 'Pre-class', Test: '11'})
FR_List.push({name: 'Leçon 11, Post', battery: '80', row: 17, BitIndex: 37, Phase: 'Post-class', Test: '11'})
FR_List.push({name: 'Leçon 12, Pre', battery: '75', row: 18, BitIndex: 38, Phase: 'Pre-class', Test: '12'})
FR_List.push({name: 'Leçon 12, Post', battery: '81', row: 18, BitIndex: 39, Phase: 'Post-class', Test: '12'})
FR_List.push({name: 'Leçon 13, Pre', battery: '75', row: 19, BitIndex: 40, Phase: 'Pre-class', Test: '13'})
FR_List.push({name: 'Leçon 13, Post', battery: '82', row: 19, BitIndex: 41, Phase: 'Post-class', Test: '13'})
FR_List.push({name: 'Pick a Test', battery: '79', row: 20, BitIndex: 9999, ButtonUsageType: 'UserChoice', Phase: 'User Choice', Test: '9999'})

FR_parameters099.push({index: 3, 
    Title: "De quelle session s'agit-il?",
    List: FR_List
})
add('FR_COMM_99', function(){ parameters = FR_parameters099 });

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
KR_List.push({name: '제1과, Pre', battery: '75', row: 4, BitIndex: 10})
KR_List.push({name: '제1과, Post', battery: '80', row: 4, BitIndex: 11})
KR_List.push({name: '제2과, Pre', battery: '75', row: 5, BitIndex: 12})
KR_List.push({name: '제2과, Post', battery: '80', row: 5, BitIndex: 13})
KR_List.push({name: '제3과, Pre', battery: '75', row: 6, BitIndex: 14})
KR_List.push({name: '제3과, Post', battery: '81', row: 6, BitIndex: 15})
KR_List.push({name: '제4과, Pre', battery: '75', row: 7, BitIndex: 16})
KR_List.push({name: '제4과, Post', battery: '80', row: 7, BitIndex: 17})
KR_List.push({name: '제5과, Pre', battery: '75', row: 8, BitIndex: 18})
KR_List.push({name: '제5과, Post', battery: '81', row: 8, BitIndex: 19})
KR_List.push({name: '제6과, Pre', battery: '75', row: 9, BitIndex: 20})
KR_List.push({name: '제6과, Post', battery: '82', row: 9, BitIndex: 21})
KR_List.push({name: '제7과, Pre', battery: '75', row: 10, BitIndex: 22})
KR_List.push({name: '제7과, Post', battery: '80', row: 10, BitIndex: 23})
KR_List.push({name: '제8과, Pre', battery: '75', row: 11, BitIndex: 24})
KR_List.push({name: '제8과, Post', battery: '81', row: 11, BitIndex: 25})
KR_List.push({name: '제9과, Pre', battery: '75', row: 12, BitIndex: 26})
KR_List.push({name: '제9과, Post', battery: '82', row: 12, BitIndex: 27})
KR_List.push({name: '제10과, Pre', battery: '75', row: 13, BitIndex: 28})
KR_List.push({name: '제10과, Post', battery: '85', row: 13, BitIndex: 29})
KR_List.push({name: '1개입 후', battery: '77', row: 14, BitIndex: 30})
KR_List.push({name: '2개입 후', battery: '77', row: 14, BitIndex: 31})
KR_List.push({name: '3개입 후', battery: '77', row: 14, BitIndex: 32})
KR_List.push({name: 'Trails 1 개입 후', battery: '78', row: 15, BitIndex: 33})
KR_List.push({name: 'Trails 2 개입 후', battery: '83', row: 15, BitIndex: 34})
KR_List.push({name: 'Trails 3 개입 후', battery: '84', row: 15, BitIndex: 35})
KR_List.push({name: '제11과, Pre', battery: '75', row: 17, BitIndex: 36})
KR_List.push({name: '제11과, Post', battery: '80', row: 17, BitIndex: 37})
KR_List.push({name: '제12과, Pre', battery: '75', row: 18, BitIndex: 38})
KR_List.push({name: '제12과, Post', battery: '81', row: 18, BitIndex: 39})
KR_List.push({name: '제13과, Pre', battery: '75', row: 19, BitIndex: 40})
KR_List.push({name: '제13과, Post', battery: '82', row: 19, BitIndex: 41})
KR_List.push({name: '테스트를 선택하세요', battery: '79', row: 20, BitIndex: 9999, ButtonUsageType: 'UserChoice'})
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
List.push({name: 'Lesson 1', battery: '4', row: 3, BitIndex: 3})
List.push({name: 'Lesson 2', battery: '4', row: 4, BitIndex: 4})
List.push({name: 'Lesson 3', battery: '4', row: 5, BitIndex: 5})
List.push({name: 'Post-intervention', battery: '3', row: 6, BitIndex: 6})
List.push({name: 'Pick a Test', battery: '6', row: 8, BitIndex: 99, ButtonUsageType: 'UserChoice'})

parameters001.push({index: 3, 
    Title: "What session is this?",
    List: List
})



// === Montreal === //
// ===================================
var parameters009 = []
var List = []
List.push({name: 'Enter Name', battery: '72', row: 1, BitIndex: 1, Phase: "Eligibility"})
List.push({name: 'Demographics',   battery: '98701', row: 2, BitIndex: 2, Phase: "Eligibility"})
List.push({name: 'xMRI Safety',     battery: '98702', row: 2, BitIndex: 3, Phase: "Eligibility"})
List.push({name: 'xQVieActive',     battery: '98703', row: 2, BitIndex: 4, Phase: "Eligibility"})
List.push({name: 'ADL-PD',         battery: '98704', row: 2, BitIndex: 5, Phase: "Eligibility"})
List.push({name: 'CompExp',         battery: '98705', row: 2, BitIndex: 6, Phase: "Eligibility"})
List.push({name: 'xVideoExp',        battery: '98706', row: 2, BitIndex: 7, Phase: "Eligibility"})
List.push({name: 'CCI',         battery: '98711', row: 4, BitIndex: 8, Phase: "Health"})
List.push({name: 'FRS',         battery: '98712', row: 4, BitIndex: 9, Phase: "Health"})
List.push({name: 'xWH',          battery: '98713', row: 4, BitIndex: 10, Phase: "Health"})
List.push({name: 'GAI',         battery: '98714', row: 4, BitIndex: 11, Phase: "Health"})
List.push({name: 'GDS',          battery: '98715', row: 4, BitIndex: 12, Phase: "Health"})
List.push({name: 'xCRQ',          battery: '98721', row: 6, BitIndex: 13, Phase: "Moderators"})
List.push({name: 'xLTPAQ',        battery: '98722', row: 6, BitIndex: 14, Phase: "Moderators"})
List.push({name: 'xNASA-TLX-1',    battery: '98751', row: 8, BitIndex: 15, Phase: "Workload"})
List.push({name: 'xNASA-TLX-2',    battery: '98751', row: 8, BitIndex: 16, Phase: "Workload"})
List.push({name: 'xNASA-TLX-3',    battery: '98751', row: 8, BitIndex: 17, Phase: "Workload"})
List.push({name: 'xNASA-TLX-4',    battery: '98751', row: 8, BitIndex: 18, Phase: "Workload"})
List.push({name: 'Leçon 1',   battery: '98713', row: 10, BitIndex: 19, Phase: 'Weekly', Test: 1})// sleep/ipaq/cog_quot
List.push({name: 'Leçon 2',   battery: '98713', row: 10, BitIndex: 20, Phase: 'Weekly', Test: 2})
List.push({name: 'Leçon 3', battery:  '98713', row: 10, BitIndex: 21, Phase: 'Weekly', Test: 3})
List.push({name: 'Leçon 4', battery:  '98713', row: 10, BitIndex: 22, Phase: 'Weekly', Test: 4})
List.push({name: 'Leçon 5', battery:  '98713', row: 11, BitIndex: 23, Phase: 'Weekly', Test: 5})
List.push({name: 'Leçon 6', battery:  '98713', row: 11, BitIndex: 24, Phase: 'Weekly', Test: 6})
List.push({name: 'Leçon 7', battery:  '98713', row: 11, BitIndex: 25, Phase: 'Weekly', Test: 7})
List.push({name: 'Leçon 8', battery:  '98713', row: 11, BitIndex: 26, Phase: 'Weekly', Test: 8})
List.push({name: 'Leçon 9', battery:  '98713', row: 12, BitIndex: 27, Phase: 'Weekly', Test: 9})
List.push({name: 'Leçon 10', battery: '98713', row: 12, BitIndex: 28, Phase: 'Weekly', Test: 10})
List.push({name: 'Leçon 11', battery: '98713', row: 12, BitIndex: 29, Phase: 'Weekly', Test: 11})
List.push({name: 'Leçon 12', battery: '98713', row: 12, BitIndex: 30, Phase: 'Weekly', Test: 12})
List.push({name: 'Leçon 13', battery: '98713', row: 13, BitIndex: 31, Phase: 'Weekly', Test: 13})
List.push({name: 'Leçon 14', battery: '98713', row: 13, BitIndex: 32, Phase: 'Weekly', Test: 14})
List.push({name: 'Leçon 15', battery: '98713', row: 13, BitIndex: 33, Phase: 'Weekly', Test: 15})
List.push({name: 'Leçon 16', battery: '98713', row: 13, BitIndex: 34, Phase: 'Weekly', Test: 16})
List.push({name: 'Leçon 17', battery: '98713', row: 14, BitIndex: 35, Phase: 'Weekly', Test: 17})
List.push({name: 'Leçon 18', battery: '98713', row: 14, BitIndex: 36, Phase: 'Weekly', Test: 18})
List.push({name: 'Leçon 19', battery: '98713', row: 14, BitIndex: 37, Phase: 'Weekly', Test: 19})
List.push({name: 'Leçon 20', battery: '98713', row: 14, BitIndex: 38, Phase: 'Weekly', Test: 20})
List.push({name: 'Leçon 21', battery: '98713', row: 15, BitIndex: 39, Phase: 'Weekly', Test: 21})
List.push({name: 'Leçon 22', battery: '98713', row: 15, BitIndex: 40, Phase: 'Weekly', Test: 22})
List.push({name: 'Leçon 23', battery: '98713', row: 15, BitIndex: 41, Phase: 'Weekly', Test: 23})
List.push({name: 'Leçon 24', battery: '98713', row: 15, BitIndex: 42, Phase: 'Weekly', Test: 24})
//List.push({name: 'Pick a Test', battery: '98799', row: 16, BitIndex: 99, ButtonUsageType: 'UserChoice'})

parameters009.push({index: 4, 
    Title: "What session is this?",
    List: List,
    runNameCheck: false
})
add('FR_Mont_99', function(){ parameters = parameters009 });
