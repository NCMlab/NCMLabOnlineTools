var PictureChoice_Smiley = {
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
	WelcomeSpoken: false,
	AskForNotes: false,
	InstructionsSpoken: false,
    button_orientation: 'vertical',
    question: 'How do you feel at this moment?',
    choices: [1,2,3,4,5],
    button_text: ['Very Sad', 'Somewhat Sad', 'Neutral', 'Somewhat Happy', 'Very Happy'],
    imageFolder: "assets/Images/Smiley/",
    images: [
        "smiley_noColor_1.png",
        "smiley_noColor_2.png",
        "smiley_noColor_3.png",
        "smiley_noColor_4.png",
        "smiley_noColor_5.png",
    ],
    prompt: 'Select One',
}

add('PictureChoice_Smiley', function(){ parameters = PictureChoice_Smiley});

var PictureChoice_IOO = {
	ShowWelcome: false,
	ShowThankYou: false,
	ShowInstructions: true, 
	WelcomeSpoken: false,
	AskForNotes: false,
	InstructionsSpoken: false,
    button_orientation: 'vertical',
    question: 'How do you feel at this moment?',
    choices:  [1,2,3,4,5,6,7],
    // button_text: ['Very Sad', 'Somewhat Sad', 'Neutral', 'Somewhat Happy', 'Very Happy'],
    imageFolder: "assets/Images/InclusionOfOther/",
    images: [
        "IOOpeople_1.png",
        "IOOpeople_2.png",
        "IOOpeople_3.png",
        "IOOpeople_4.png",
        "IOOpeople_5.png",
        "IOOpeople_6.png",
        "IOOpeople_7.png",
    ],
    prompt: 'Select One',
    left_circle_text: "Self",
    right_circle_text: "Others",
    left_positions: [0,5,8,13,16,20,35],
    right_positions: [45,45,45,45,45,45,55],
}

add('PictureChoice_IOO', function(){ parameters = PictureChoice_IOO});
