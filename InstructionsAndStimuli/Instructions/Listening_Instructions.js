var EN_Instructions = {}
EN_Instructions.AudioTestList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
EN_Instructions.Instructions01 = [
    {'page': 'This verifies that the computer\'s sound is correct and that you can hear well.'},
    {'page': 'You will hear series of letters and numbers. Click on the corresponding letter or number on the screen. Do not use your keyboard. If you are not sure, just click any key.'}
]
EN_Instructions.TrialText = 'Press the letter or number you heard'
EN_Instructions.WelcomeText = [{'page': 'Welcome to the Listening Task.'}]
EN_Instructions.ThankYouText = [{'page': 'Thank you'}]

add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});

var FR_Instructions = {}
FR_Instructions.AudioTestList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Un','Deux','Trois','Quatre','Cinq','Six','Sept','Huit','Neuf']
FR_Instructions.Instructions01 = [
    {'page': 'Cela permet de vérifier que le son de l\'ordinateur est correct et que vous entendez bien.'},
    {'page': 'Vous entendrez des séries de lettres et de chiffres. Cliquez sur la lettre ou le chiffre correspondant à l\'écran. N\'utilisez pas votre clavier.'}
]
FR_Instructions.TrialText = 'Appuyez sur la lettre ou le chiffre que vous avez entendu'
FR_Instructions.WelcomeText = [{'page': 'Bienvenu(e) dans la tâche d\'écoute.'}]
FR_Instructions.ThankYouText = [{'page': 'Merci'}]

add('FR_Instructions_Default', function(){ Instructions = FR_Instructions});