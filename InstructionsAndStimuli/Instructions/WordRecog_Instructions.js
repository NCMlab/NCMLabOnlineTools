
var EN_Instructions_Default = {}
EN_Instructions_Default.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Word Recognition Task.</p>'},
]
EN_Instructions_Default.Instructions01 = [
    {'page':'<p class="Instructions">You are going to hear a list that contains the words from the first list, the one you studied several times.'},
    {'page':'<p class="Instructions">If the word was on that first list, press <em>yes</em>, and if it was not on the first list, then press <em>no</em>.'}
]
EN_Instructions_Default.ThankYouText = [{'page': '<p class="Instructions">Thank you'}]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions_Default});



var FR_Instructions_Default = {}
FR_Instructions_Default.WelcomeText = [
    {'page': '<p class="Instructions">Bienvelu(e) dans la tâche de reconnaissance de mots</p>'},
]
FR_Instructions_Default.Instructions01 = [
    {'page':'<p class="Instructions">Vous allez voir une liste qui contient les mots de la première liste, celle que vous avez étudiée plusieurs fois.voir'},
    {'page':'<p class="Instructions">Si le mot figurait sur cette première liste, appuyez sur <em>oui</em>, et s\'il ne figurait pas sur la première liste, appuyez sur <em>non</em>.'}
]
FR_Instructions_Default.ThankYouText = [{'page': '<p class="Instructions">Merci'}]
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions_Default});



