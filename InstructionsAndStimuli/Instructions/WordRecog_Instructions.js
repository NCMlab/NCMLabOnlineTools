
var EN_Instructions_Default = {}
EN_Instructions_Default.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Word Recognition Task.</p>'},
]

EN_Instructions_Default.InstructionText = [
    {'page':'<p class="Instructions">You are going to hear a list that contains the words from the first list, the one you studied several times.'},
    {'page':'<p class="Instructions">If the word was on that first list, say <em>yes</em>, and if it was not on the first list, then say <em>no</em>.'}
]

EN_Instructions_Default.ThankYouText = [{'page': '<p class="Instructions">Thank you'}]

add('EN_Instructions_Default', function(){ Instructions = EN_Instructions_Default});