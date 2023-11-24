
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
var STAI_S_001 = { 
    questionnaire: ['stai_state'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false, 
}
var STAI_T_001 = { 
    questionnaire: ['stai_trait'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: true,
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

add('AES_001', function(){ parameters = AES_001});
add('STAI_S_001', function(){ parameters = STAI_S_001});
add('STAI_T_001', function(){ parameters = STAI_T_001});
add('BDI_001', function(){ parameters = BDI_001});

var Instructions = {}
Instructions.WelcomeText = [{'page': '<p class="Instructions">Please fill out the following surveys.</p>'}]
Instructions.ThankYouText = [{'page': '<p class="Instructions">Thank you.</p>'}]

