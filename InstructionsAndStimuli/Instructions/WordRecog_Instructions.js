
var EN_Instructions_Default = {}
EN_Instructions_Default.WelcomeText = [
    {'page': 'Welcome to the Word Recognition Task.'},
]
EN_Instructions_Default.Instructions01 = [
    {'page':'You are going to hear a list that contains the words from the first list, the one you studied several times.'},
    {'page':'If the word was on that first list, press <em>yes</em>, and if it was not on the first list, then press <em>no</em>.'}
]
EN_Instructions_Default.ThankYouText = [{'page': 'Thank you'}]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions_Default});



var FR_Instructions_Default = {}
FR_Instructions_Default.WelcomeText = [
    {'page': 'Bienvelu(e) dans la tâche de reconnaissance de mots'},
]
FR_Instructions_Default.Instructions01 = [
    {'page':'Vous allez voir une liste qui contient les mots de la première liste, celle que vous avez étudiée plusieurs fois.voir'},
    {'page':'Si le mot figurait sur cette première liste, appuyez sur <em>oui</em>, et s\'il ne figurait pas sur la première liste, appuyez sur <em>non</em>.'}
]
FR_Instructions_Default.ThankYouText = [{'page': 'Merci'}]
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions_Default});



