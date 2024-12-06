var Instructions = ''
    Instructions += '<ul>'
    Instructions += '<li>We would like to know how good or bad your health is TODAY</li>'
    Instructions += '<li>This scale is numbered from 0 to 100.</li>'
    Instructions += '<li>100 means the best health you can imagine. 0 means the worst health you can imagine.</li>'
    Instructions += '<li>Indicate on the slider how your health is TODAY.</li>'
    Instructions += '</ul>'



var WellnessRating_001 = {
    Instructions: Instructions,
    minValue: 0,
    maxValue: 100,
    sliderStart: 10, 
    sliderStepSize: 1,
    showSmallTicks: true,
    distanceBetweenLabeledValues: 5,
    textAboveSlider: "The best health you can imagine",
    textBelowSlider: "The worst health you can imagine",
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: true,
    AskForNotes: false,
}

add('WellnessRating_001', function(){ parameters = WellnessRating_001});