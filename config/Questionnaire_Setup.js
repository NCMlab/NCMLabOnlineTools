
var AES_001 = { 
    questionnaire: 'aes', 
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }
var STAI_S_001 = { 
    questionnaire: 'stai_state', 
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false, 
}
var STAI_T_001 = { 
    questionnaire: 'stai_trait', 
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}
var BDI_001 = { 
    questionnaire: 'bdi', 
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}
add('AES_001', function(){ parameters = AES_001});
add('STAI_S_001', function(){ parameters = STAI_S_001});
add('STAI_T_001', function(){ parameters = STAI_T_001});
add('BDI_001', function(){ parameters = BDI_001});