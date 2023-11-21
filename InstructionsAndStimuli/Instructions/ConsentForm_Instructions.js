var EN_Instructions = {}
EN_Instructions.WelcomeText = [{'page': '<p class="Instructions">Please carefully read through the following consent form.'}]
EN_Instructions.ThankYouText = [{'page': '<p class="Instructions">Thank you.'}]

var FR_Instructions = {}
FR_Instructions.WelcomeText = [{'page': '<p class="Instructions">Please carefully read through the following consent form.'}]
FR_Instructions.ThankYouText = [{'page': '<p class="Instructions">Merci.'}]

add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions});
//Rouleau, I., D. P. Salmon, et al. (1992). "Quantitative and qualitative analyses of clock drawings in
//Alzheimer's and Huntington's disease." Brain Cogn 18(1543577): 70-87.