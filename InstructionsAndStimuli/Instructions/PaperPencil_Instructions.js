var EN_Instructions = {}

EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Listening Task.</p>'}
]
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]

EN_Instructions.Instructions01 = [
    {'page':  '<p>In this experiment, a command will appear on the screen.</p>'+
    '<p>For example: "Click on the <strong>paper</strong>, then on the '+
    '<strong>pencil</strong>, then <strong>Next</strong>."</p>'+
    '<p>When you will be ready, you will click "Next" and execute it in the following '+
    'screen by clicking on either a paper and/or a pencil icon.</p>'}
]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
