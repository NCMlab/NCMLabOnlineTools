var PictureChoice_SmileyHoriz = {
    ShowInstructions: true, 
	InstructionsSpoken: false,
	ShowWelcome: true,
	ShowThankYou: true,
    question: 'How do you feel at this moment?',
    choices: [1,2,3,4,5],
    button_text: ['Very Sad', 'Somewhat Sad', 'Neutral', 'Somewhat Happy', 'Very Happy'],
    images: [
        '<img src="assets/Images/Smiley/smiley_noColor_1.png">',
        '<img src="assets/Images/Smiley/smiley_noColor_2.png">',
        '<img src="assets/Images/Smiley/smiley_noColor_3.png">',
        '<img src="assets/Images/Smiley/smiley_noColor_4.png">',
        '<img src="assets/Images/Smiley/smiley_noColor_5.png">',
    ],
    prompt: 'Select One'
}

add('PictureChoice_SmileyHoriz', function(){ parameters = PictureChoice_SmileyHoriz});
