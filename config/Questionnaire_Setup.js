
/* Making the questionnaire as a list allows the use of criteria 
to define which questionnaire in the list to use */
var AES_001 = { 
    questionnaire: ['aes'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }

 var WEMWBS_001 = { 
    questionnaire: ['tempWEMWBS'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }


 var MusicDemographics_001 = { 
    questionnaire: ['IntakeForm_MusicJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }
 

var STAI_S_001 = { 
    questionnaire: ['stai_state'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false, 
}

var STAI_S_002 = { 
    questionnaire: ['stai_state'], 
    criteria: [],
    variable: [],
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: true,
    ShowInstructions: false, 
}
var STAI_T_001 = { 
    questionnaire: ['stai_trait'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

const DepressionQuestionnaires = ['bdi', 'gds']
const DepressionQuestionnaireVariable = 'Age'
const DepressionQuestionnairesCriteria = ['( XXX > 17 ) && ( XXX < 31 )', '( XXX > 59 )']
var BDI_001 = { 
    questionnaire: DepressionQuestionnaires, 
    criteria: DepressionQuestionnairesCriteria,
    variable: DepressionQuestionnaireVariable,
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: true,
    ShowInstructions: false,  
}

var BDI_002 = { 
    questionnaire: ['bdi'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var GDS_001 = { 
    questionnaire: ['gdsJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var GDS_004 = { 
    questionnaire: ['gds_04'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var GAS_001 = { 
    questionnaire: ['gasJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var CFS_001 = { 
    questionnaire: ['cfs'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}


var EQ5D_001 = { 
    questionnaire: ['eq5dJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var PANAS_001 = { 
    questionnaire: ['panasJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var PANAS_Short_001 = { 
    questionnaire: ['panasShortJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var PANAS_ShortBaseline_001 = { 
    questionnaire: ['panasShortBaselineJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var TESTJSON = { 
    questionnaire: ['TESTJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}


var PANAS_ShortWeekly_001 = { 
    questionnaire: ['panasShortWeeklyJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}
var MusicDemographics_001 = { 
    questionnaire: ['IntakeForm_MusicJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }

 var MusicEnterName_001 = { 
    questionnaire: ['EnterName_MusicJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }


var UCLA_LONELINESS_001 = { 
    questionnaire: ['UCLAlonelinessJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}


var UCLA_LONELINESS_001 = { 
    questionnaire: ['UCLAlonelinessJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var BERKSYME_001 = { 
    questionnaire: ['berksymeJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}


var STANFORDSLEEPINESS_001 = { 
    questionnaire: ['stanfordSleepinessJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var CESAM_001 = { 
    questionnaire: ['cesamJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var WEMWBS_001 = { 
    questionnaire: ['wemwbsJSONmatrix'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var PAES_001 = { 
    questionnaire: ['paesJSONmatrix'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var EQ5D_001 = { 
    questionnaire: ['eq5dJSON'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}
var PANAS_TEST = { 
    questionnaire: ['panas'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

add('PANAS_TEST', function(){ parameters = PANAS_TEST});
add('AES_001', function(){ parameters = AES_001});
add('EQ5D_001', function(){ parameters = EQ5D_001});
add('STAI_S_001', function(){ parameters = STAI_S_001});
add('STAI_S_002', function(){ parameters = STAI_S_002});
add('STAI_T_001', function(){ parameters = STAI_T_001});
add('BDI_001', function(){ parameters = BDI_001});
add('BDI_002', function(){ parameters = BDI_002});
add('CFS_001', function(){ parameters = CFS_001});
add('GAS_001', function(){ parameters = GAS_001});
add('GDS_001', function(){ parameters = GDS_001});
add('GDS_004', function(){ parameters = GDS_004});
add('EQ5D_001', function(){ parameters = EQ5D_001});
add('MusicDemographics_001', function(){ parameters = MusicDemographics_001});
add('WEMWBS_001', function(){ parameters = WEMWBS_001});
add('PANAS_001', function(){ parameters = PANAS_001});
add('UCLA_LONELINESS_001', function(){ parameters = UCLA_LONELINESS_001});
add('BERKSYME_001', function(){ parameters = BERKSYME_001});
add('STANFORDSLEEPINESS_001', function(){ parameters = STANFORDSLEEPINESS_001});
add('CESAM_001', function(){ parameters = CESAM_001});
add('WEMWBS_001', function(){ parameters = WEMWBS_001});
add('PANAS_Short_001', function(){ parameters = PANAS_Short_001});
add('PAES_001', function(){ parameters = PAES_001});

add('PANAS_ShortWeekly_001', function(){ parameters = PANAS_ShortWeekly_001});
add('PANAS_ShortBaseline_001', function(){ parameters = PANAS_ShortBaseline_001});

add('MusicEnterName_001', function(){ parameters = MusicEnterName_001});

add('TESTJSON', function(){ parameters = TESTJSON});

